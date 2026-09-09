/* app.js — die Ablaufsteuerung.
   Hier wird entschieden, welcher Bildschirm sichtbar ist, was passiert,
   wenn du auf "Prüfen" tippst, und wann eine Sitzung zu Ende ist.
   Seit der Mehrsprachigkeit kommt dazu: welcher Kurs gerade läuft und in
   welcher Sprache die Oberfläche erscheint. */

var App = {

  /* Zustand der laufenden Sitzung */
  sitzung: null,     // { aufgaben, index, richtig, falsch, neueWoerter, fehler[], modus }
  aktuell: null,     // das Objekt, das Uebungen.zeichnen() zurückgegeben hat
  geprueft: false,   // wurde die aktuelle Aufgabe schon bewertet?

  /* ======================= Start ======================= */

  starten() {
    Speicher.laden();
    this.themaAnwenden();

    Sprache.starten(() => {
      const el = document.getElementById('stimme-status');
      if (el) el.textContent = Sprache.statusText();
    });

    this.knoepfeVerdrahten();

    // Ohne gewählten Kurs zuerst die Kursauswahl zeigen
    if (!Speicher.daten.aktiverKurs || !Kurse.hat(Speicher.daten.aktiverKurs)) {
      this.textePruefen();
      this.zeigeSeite('kurse');
    } else {
      this.kursAnwenden();
      this.zeigeSeite('start');
    }

    // Service Worker anmelden (nur über http/https, nicht bei file://)
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('service-worker.js')
        .catch(e => console.warn('Service Worker nicht registriert:', e));
    }
  },

  /* ======================= Kurse ======================= */

  /** Nach einem Kurswechsel: Oberflächensprache, Stimme und Farbe anpassen. */
  kursAnwenden() {
    const kurs = Kurse.aktiv();
    if (!kurs) return;

    document.documentElement.lang = kurs.ui;
    document.documentElement.style.setProperty('--akzent-kurs', kurs.farbe);

    const kopf = document.getElementById('kopf-kurs');
    kopf.textContent = kurs.flagge + ' ' + kurs.name;
    kopf.hidden = false;

    Sprache.fuerKursWaehlen();
    this.textePruefen();
  },

  /** Alle mit data-t markierten Stellen mit Text füllen.
      data-t      → als reiner Text (sicher)
      data-t-html → als HTML (nur für unsere eigenen Texte mit <strong> usw.)
      data-t-aria → als Vorlesehilfe für Bildschirmleser */
  textePruefen() {
    document.querySelectorAll('[data-t]').forEach(el => {
      el.textContent = t(el.dataset.t);
    });
    document.querySelectorAll('[data-t-html]').forEach(el => {
      el.innerHTML = t(el.dataset.tHtml);
    });
    document.querySelectorAll('[data-t-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.dataset.tAria));
    });
  },

  /** Die Kursauswahl aufbauen. */
  kurslisteZeichnen() {
    const behaelter = document.getElementById('kursliste');
    const aktiv = Speicher.daten.aktiverKurs;

    behaelter.innerHTML = Kurse.alle().map(kurs => {
      const s = Kurse.stand(kurs.id);
      const zeile = s.begonnen
        ? t('kurs.stand', { tag: s.tag, gesamt: s.tageGesamt, gelernt: s.gelernt })
        : t('kurs.neu');
      const anteil = s.tageGesamt ? Math.round(((s.tag - 1) / s.tageGesamt) * 100) : 0;

      return `
        <button class="kurs-karte${kurs.id === aktiv ? ' kurs-aktiv' : ''}"
                data-kurs="${kurs.id}" style="--kursfarbe:${kurs.farbe}">
          <span class="kurs-flagge">${kurs.flagge}</span>
          <span class="kurs-text">
            <span class="kurs-name">${Uebungen.escape(kurs.name)}</span>
            <span class="kurs-unter">${Uebungen.escape(kurs.untertitel)}</span>
            <span class="kurs-stand">${Uebungen.escape(zeile)}</span>
            <span class="kurs-balken"><span style="width:${anteil}%"></span></span>
          </span>
        </button>`;
    }).join('');

    behaelter.querySelectorAll('.kurs-karte').forEach(b => {
      b.addEventListener('click', () => {
        Kurse.wechseln(b.dataset.kurs);
        this.kursAnwenden();
        this.zeigeSeite('start');
      });
    });
  },

  /* ======================= Bildschirme ======================= */

  SEITEN: ['kurse', 'start', 'uebung', 'fertig', 'historie', 'erinnerung', 'einstellungen'],

  zeigeSeite(name) {
    this.SEITEN.forEach(s => {
      const el = document.getElementById('seite-' + s);
      if (el) el.hidden = (s !== name);
    });
    this.seite = name;

    const inUebung = name === 'uebung';
    document.getElementById('kopf-fortschritt').hidden = !inUebung;
    document.getElementById('kopf-titel').hidden = inUebung;
    document.getElementById('kopf-kurs').hidden = inUebung || !Kurse.aktiv();
    document.getElementById('btn-zurueck').hidden = (name === 'start' || name === 'kurse');
    window.scrollTo(0, 0);

    if (name === 'kurse')    this.kurslisteZeichnen();
    if (name === 'start')    this.startAktualisieren();
    if (name === 'historie') Statistik.zeichneHistorie(document.getElementById('historie-liste'), this.hFilter || 'alle');
    if (name === 'einstellungen') this.einstellungenAktualisieren();
  },

  /* ======================= Startbildschirm ======================= */

  startAktualisieren() {
    const g = id => document.getElementById(id);
    if (!Kurse.aktiv()) return this.zeigeSeite('kurse');

    g('stat-streak').textContent      = Statistik.streak();
    g('stat-aktive-tage').textContent = Statistik.aktiveTage();
    g('stat-woerter').textContent     = Statistik.gelernteWoerter();
    const gen = Statistik.genauigkeit();
    g('stat-genauigkeit').textContent = gen === null ? '–' : gen + '%';

    const leeches = Statistik.problemwoerter();
    g('stat-leeches').textContent = leeches;
    g('kachel-leech').classList.toggle('aktiv', leeches > 0);

    const v = Tagesplan.vorschau();
    const gesamt = Daten.anzahlTage();

    if (v.lektion) {
      g('tag-thema').textContent  = v.lektion.thema;
      g('tag-niveau').textContent = v.lektion.niveau || 'A2';
      g('tag-grammatik').textContent = v.grammatik || '–';
      g('btn-lernen').textContent = t('start.lernen');
      g('btn-lernen').disabled = false;
      g('tageskarte-tag').textContent = t('start.tagVon', { tag: v.tag, gesamt });
    } else {
      g('tag-thema').textContent  = t('start.fertigThema');
      g('tag-niveau').textContent = '★';
      g('tag-grammatik').textContent = t('start.fertigText');
      g('btn-lernen').textContent = t('start.wiederholen');
      g('btn-lernen').disabled = v.faellige === 0 && v.leeches === 0;
      g('tageskarte-tag').textContent = t('start.tagVon', { tag: gesamt, gesamt });
    }

    // Die kleine Checkliste auf der Tageskarte
    const zeilen = [
      { an: v.leeches  > 0,     txt: t('plan.problem'),   n: v.leeches },
      { an: v.faellige > 0,     txt: t('plan.faellig'),   n: v.faellige },
      { an: v.neueVokabeln > 0, txt: t('plan.vokabeln'),  n: v.neueVokabeln },
      { an: v.neueSaetze  > 0,  txt: t('plan.saetze'),    n: v.neueSaetze },
      { an: !!v.grammatik,      txt: t('plan.grammatik'), n: '' }
    ];
    g('tageskarte-zeilen').innerHTML = zeilen.map(z => `
      <div class="zeile${z.an ? ' hat' : ''}">
        <span class="zeile-punkt">${z.an ? '✓' : '·'}</span>
        <span>${Uebungen.escape(z.txt)}</span>
        <span class="zeile-anzahl">${z.n}</span>
      </div>`).join('');

    g('hinweis-fertig').hidden = !Speicher.istHeuteAktiv();
    g('btn-nur-wdh').disabled = (v.faellige + v.leeches) === 0;
    g('btn-speed').disabled   = SRS.anzahlInArbeit() < 4;

    Statistik.zeichneHeatmap(g('heatmap'));
  },

  /* ======================= Sitzung ======================= */

  sitzungStarten(modus) {
    let aufgaben;
    if (modus === 'speed')       aufgaben = Tagesplan.speedRunde(20);
    else if (modus === 'nurWdh') aufgaben = Tagesplan.bauen('nurWdh');
    else                         aufgaben = Tagesplan.bauen('voll');

    if (!aufgaben.length) {
      alert(t('start.nichtsZuTun'));
      return;
    }

    this.sitzung = {
      aufgaben, index: 0, richtig: 0, falsch: 0,
      neueWoerter: 0, fehler: [], modus
    };
    this.zeigeSeite('uebung');
    this.aufgabeZeigen();
  },

  aufgabeZeigen() {
    const s = this.sitzung;
    if (s.index >= s.aufgaben.length) return this.sitzungBeenden();

    const a = s.aufgaben[s.index];
    this.geprueft = false;

    // Fortschrittsbalken oben
    const anteil = (s.index / s.aufgaben.length) * 100;
    document.getElementById('balken-fuell').style.width = anteil + '%';
    document.getElementById('balken-text').textContent = `${s.index + 1}/${s.aufgaben.length}`;
    document.getElementById('uebung-phase').textContent = Tagesplan.phasenName(a.phase);

    // Rückmeldung vom letzten Mal ausblenden
    const rm = document.getElementById('uebung-rueckmeldung');
    rm.hidden = true;
    rm.className = 'rueckmeldung';

    this.aktuell = Uebungen.zeichnen(a, document.getElementById('uebung-inhalt'));

    // Bei reinen Ansichtsaufgaben (Karteikarte, Grammatik-Erklärung)
    // gibt es nichts zu prüfen — direkt "Weiter" zeigen.
    const nurAnsehen = !!this.aktuell.nurAnsehen;
    document.getElementById('btn-pruefen').hidden = nurAnsehen;
    const weiter = document.getElementById('btn-weiter');
    weiter.hidden = !nurAnsehen;
    weiter.textContent = t('ueb.weiter');

    if (nurAnsehen && a.phase === 'neu') {
      // "Neues Wort angesehen" merken, damit es ins Wiederholsystem kommt
      const k = Speicher.karte(a.karte.id);
      if (!k.gesehen) { k.gesehen = true; k.faellig = Date.now(); this.sitzung.neueWoerter++; Speicher.sichern(); }
    }
  },

  antwortPruefen() {
    if (this.geprueft || !this.aktuell || this.aktuell.nurAnsehen) return;
    if (this.aktuell.istBereit && !this.aktuell.istBereit()) {
      if (this.aktuell.fokus) this.aktuell.fokus();
      return;
    }

    this.geprueft = true;
    const a = this.sitzung.aufgaben[this.sitzung.index];
    const e = this.aktuell.pruefen();

    // Ergebnis im Wiederholsystem verbuchen
    const srsErgebnis = SRS.antwort(a.karte.id, e.korrekt, e.meins);

    if (e.korrekt) this.sitzung.richtig++;
    else {
      this.sitzung.falsch++;
      this.sitzung.fehler.push({
        frage: Uebungen.ziel(a.karte) || a.karte.satz || '',
        loesung: e.loesung,
        meins: e.meins
      });
    }

    this.rueckmeldungZeigen(e, srsErgebnis);
    document.getElementById('btn-pruefen').hidden = true;
    const weiter = document.getElementById('btn-weiter');
    weiter.hidden = false;
    weiter.textContent = (this.sitzung.index + 1 >= this.sitzung.aufgaben.length)
      ? t('ueb.abschliessen') : t('ueb.weiter');
    weiter.focus();
  },

  rueckmeldungZeigen(e, srs) {
    const rm  = document.getElementById('uebung-rueckmeldung');
    const tit = document.getElementById('rueckmeldung-titel');
    const txt = document.getElementById('rueckmeldung-text');
    const esc = s => Uebungen.escape(s);

    if (e.korrekt && e.fast) {
      rm.className = 'rueckmeldung fast';
      tit.textContent = t('rueck.fastTitel');
      txt.innerHTML = t('rueck.fastText', { loesung: esc(e.loesung) });
    } else if (e.korrekt) {
      rm.className = 'rueckmeldung gut';
      tit.textContent = t('rueck.gutTitel');
      let z = e.zusatz ? esc(e.zusatz) : '';
      if (srs && srs.leechBefreit) z += (z ? ' · ' : '') + t('rueck.leechWeg');
      else if (srs) z += (z ? ' · ' : '') + t('rueck.wiederDran', { zeit: srs.naechsteWiederholung });
      txt.innerHTML = z;
    } else {
      rm.className = 'rueckmeldung schlecht';
      tit.textContent = t('rueck.falschTitel');
      let z = t('rueck.richtigWaere', { loesung: esc(e.loesung) });
      if (e.meins)  z += `<br><span class="hinweis">${t('rueck.duHattest', { meins: esc(e.meins) })}</span>`;
      if (e.zusatz) z += `<br><span class="hinweis">${esc(e.zusatz)}</span>`;
      if (srs && srs.leechNeu) z += `<br><span class="hinweis">${t('rueck.leechNeu')}</span>`;
      txt.innerHTML = z;
    }
    rm.hidden = false;
  },

  weiter() {
    this.sitzung.index++;
    this.aufgabeZeigen();
  },

  sitzungBeenden() {
    const s = this.sitzung;
    const gesamt = s.richtig + s.falsch;
    const f = Speicher.fortschritt();

    // Nur eine vollständige Tageslektion zählt als abgeschlossener Tag und
    // schiebt den Kalender weiter. Reine Wiederholung zählt für die Heatmap.
    Speicher.tagAktiv(gesamt);
    if (s.modus === 'voll' && Daten.lektion(f.aktuellerTag)) {
      f.aktuellerTag++;
      Speicher.sichern();
    }

    const g = id => document.getElementById(id);
    g('fertig-aufgaben').textContent = gesamt;
    g('fertig-quote').textContent    = gesamt ? Math.round((s.richtig / gesamt) * 100) + '%' : '–';
    g('fertig-neu').textContent      = s.neueWoerter;
    g('fertig-streak').textContent   = Statistik.streak();

    g('fertig-titel').textContent =
      gesamt === 0            ? t('fertig.tschuess') :
      s.falsch === 0          ? t('fertig.perfekt') :
      s.richtig / gesamt > .8 ? t('fertig.sehrGut') : t('fertig.gut');

    g('fertig-untertitel').textContent = s.modus === 'voll'
      ? t('fertig.tagAbgeschlossen', { tag: f.aktuellerTag - 1 })
      : t('fertig.wdhAbgeschlossen');

    g('fertig-fehlerliste').innerHTML = s.fehler.length
      ? `<h3>${t('fertig.nochmalUeben')}</h3>` + s.fehler.slice(0, 8).map(x => `
          <div class="fehler-zeile">
            <b>${Uebungen.escape(x.loesung)}</b>
            ${x.meins ? ' — ' + t('fertig.duHattest', { meins: Uebungen.escape(x.meins) }) : ''}
          </div>`).join('')
      : '';

    this.sitzung = null;
    this.zeigeSeite('fertig');
  },

  /* ======================= Einstellungen ======================= */

  themaAnwenden() {
    const th = Speicher.einstellung('thema');
    if (th === 'auto') document.documentElement.removeAttribute('data-thema');
    else document.documentElement.setAttribute('data-thema', th);
  },

  einstellungenAktualisieren() {
    document.getElementById('ein-ton').checked  = !!Speicher.einstellung('ton');
    document.getElementById('ein-thema').value  = Speicher.einstellung('thema');
    document.getElementById('ein-ziel').value   = String(Speicher.einstellung('tagesziel'));
    document.getElementById('stimme-status').textContent = Sprache.statusText();
  },

  /* ======================= Knöpfe ======================= */

  knoepfeVerdrahten() {
    const g = id => document.getElementById(id);
    const auf = (id, ev, fn) => { const el = g(id); if (el) el.addEventListener(ev, fn); };

    /* --- Startbildschirm --- */
    auf('btn-lernen',  'click', () => this.sitzungStarten('voll'));
    auf('btn-nur-wdh', 'click', () => this.sitzungStarten('nurWdh'));
    auf('btn-speed',   'click', () => this.sitzungStarten('speed'));
    auf('kachel-leech','click', () => { this.hFilter = 'leech'; this.filterChips(); this.zeigeSeite('historie'); });

    /* --- Übung --- */
    auf('btn-pruefen', 'click', () => this.antwortPruefen());
    auf('btn-weiter',  'click', () => this.weiter());
    document.addEventListener('antwort-abschicken', () => {
      if (this.seite !== 'uebung') return;
      if (this.geprueft) this.weiter(); else this.antwortPruefen();
    });

    // Enter auf dem ganzen Übungsbildschirm
    document.addEventListener('keydown', e => {
      if (this.seite !== 'uebung') return;
      if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        if (this.geprueft || (this.aktuell && this.aktuell.nurAnsehen)) this.weiter();
        else this.antwortPruefen();
      }
    });

    // Lautsprecher-Knöpfe funktionieren auch in dynamisch erzeugtem HTML
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-sprich]');
      if (b) Sprache.sprich(b.dataset.sprich);
    });

    auf('btn-fertig-zurueck', 'click', () => this.zeigeSeite('start'));

    /* --- Kopfzeile & Menü --- */
    auf('btn-zurueck', 'click', () => {
      if (this.seite === 'uebung' && this.sitzung) {
        if (!confirm(t('allg.abbrechen'))) return;
        // Teilfortschritt für die Heatmap sichern, Tag aber nicht weiterschalten
        Speicher.tagAktiv(this.sitzung.richtig + this.sitzung.falsch);
        this.sitzung = null;
      }
      this.zeigeSeite('start');
    });
    auf('kopf-kurs', 'click', () => this.zeigeSeite('kurse'));
    auf('btn-menue', 'click', () => { g('menue').hidden = false; g('menue-schatten').hidden = false; });
    auf('menue-schatten', 'click', () => { g('menue').hidden = true; g('menue-schatten').hidden = true; });
    document.querySelectorAll('#menue button').forEach(b => {
      b.addEventListener('click', () => {
        g('menue').hidden = true; g('menue-schatten').hidden = true;
        this.zeigeSeite(b.dataset.ziel);
      });
    });

    /* --- Historie-Filter --- */
    document.querySelectorAll('.filter-leiste .chip').forEach(c => {
      c.addEventListener('click', () => {
        this.hFilter = c.dataset.filter;
        this.filterChips();
        Statistik.zeichneHistorie(g('historie-liste'), this.hFilter);
      });
    });

    /* --- Erinnerung --- */
    auf('btn-ics', 'click', () => Statistik.kalenderHerunterladen());

    /* --- Einstellungen --- */
    auf('ein-ton',   'change', e => Speicher.einstellung('ton', e.target.checked));
    auf('ein-thema', 'change', e => { Speicher.einstellung('thema', e.target.value); this.themaAnwenden(); });
    auf('ein-ziel',  'change', e => Speicher.einstellung('tagesziel', Number(e.target.value)));
    auf('btn-export','click',  () => Speicher.exportieren());
    auf('btn-import','click',  () => g('datei-import').click());
    auf('datei-import', 'change', e => {
      const datei = e.target.files[0];
      if (!datei) return;
      const leser = new FileReader();
      leser.onload = () => {
        try {
          Speicher.importieren(leser.result);
          this.themaAnwenden();
          this.kursAnwenden();
          alert(t('einst.importOk'));
          this.zeigeSeite('start');
        } catch (err) {
          alert(t('einst.importFehler') + err.message);
        }
      };
      leser.readAsText(datei);
      e.target.value = '';
    });
    auf('btn-reset-kurs', 'click', () => {
      if (!confirm(t('einst.resetFrage1'))) return;
      if (!confirm(t('einst.resetFrage2'))) return;
      Speicher.kursZuruecksetzen();
      this.zeigeSeite('start');
    });
    auf('btn-reset', 'click', () => {
      if (!confirm(t('einst.resetAllesFrage'))) return;
      if (!confirm(t('einst.resetFrage2'))) return;
      Speicher.zuruecksetzen();
      this.themaAnwenden();
      this.zeigeSeite('kurse');
    });
  },

  filterChips() {
    document.querySelectorAll('.filter-leiste .chip').forEach(c => {
      c.classList.toggle('chip-aktiv', c.dataset.filter === (this.hFilter || 'alle'));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => App.starten());
