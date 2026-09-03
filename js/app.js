/* app.js — die Ablaufsteuerung.
   Hier wird entschieden, welcher Bildschirm sichtbar ist, was passiert,
   wenn du auf "Prüfen" tippst, und wann eine Sitzung zu Ende ist. */

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
    this.zeigeSeite('start');
    this.startAktualisieren();

    // Service Worker anmelden (nur wenn über http/https geladen, nicht bei file://)
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('service-worker.js')
        .catch(e => console.warn('Service Worker nicht registriert:', e));
    }
  },

  /* ======================= Bildschirme ======================= */

  SEITEN: ['start', 'uebung', 'fertig', 'historie', 'erinnerung', 'einstellungen'],

  zeigeSeite(name) {
    this.SEITEN.forEach(s => {
      const el = document.getElementById('seite-' + s);
      if (el) el.hidden = (s !== name);
    });
    this.seite = name;

    const inUebung = name === 'uebung';
    document.getElementById('kopf-fortschritt').hidden = !inUebung;
    document.getElementById('kopf-titel').hidden = inUebung;
    document.getElementById('btn-zurueck').hidden = (name === 'start');
    window.scrollTo(0, 0);

    if (name === 'start')    this.startAktualisieren();
    if (name === 'historie') Statistik.zeichneHistorie(document.getElementById('historie-liste'), this.hFilter || 'alle');
    if (name === 'einstellungen') this.einstellungenAktualisieren();
  },

  /* ======================= Startbildschirm ======================= */

  startAktualisieren() {
    const g = id => document.getElementById(id);

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
      g('tag-nummer').textContent = v.tag;
      g('tag-thema').textContent  = v.lektion.thema;
      g('tag-niveau').textContent = v.lektion.niveau || 'A2';
      g('tag-grammatik').textContent = v.grammatik || '–';
      g('btn-lernen').textContent = 'Heute lernen';
      g('btn-lernen').disabled = false;
    } else {
      g('tag-nummer').textContent = gesamt;
      g('tag-thema').textContent  = 'Alle Lektionen geschafft! 🏆';
      g('tag-niveau').textContent = 'B1';
      g('tag-grammatik').textContent = 'Jetzt hältst du dein Wissen mit Wiederholungen frisch.';
      g('btn-lernen').textContent = 'Wiederholen';
      g('btn-lernen').disabled = v.faellige === 0 && v.leeches === 0;
    }
    document.querySelector('.tageskarte-tag').innerHTML =
      `Tag <span id="tag-nummer">${v.tag}</span> von ${gesamt}`;

    // Die kleine Checkliste auf der Tageskarte
    const zeilen = [
      { an: v.leeches  > 0, txt: '⚠️ Problemwörter',   n: v.leeches },
      { an: v.faellige > 0, txt: '🔁 Fällige Wiederholungen', n: v.faellige },
      { an: v.neueVokabeln > 0, txt: '📖 Neue Vokabeln', n: v.neueVokabeln },
      { an: v.neueSaetze  > 0, txt: '💬 Sätze',         n: v.neueSaetze },
      { an: !!v.grammatik,  txt: '📐 Grammatik',        n: '' }
    ];
    g('tageskarte-zeilen').innerHTML = zeilen.map(z => `
      <div class="zeile${z.an ? ' hat' : ''}">
        <span class="zeile-punkt">${z.an ? '✓' : '·'}</span>
        <span>${z.txt}</span>
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
    if (modus === 'speed')      aufgaben = Tagesplan.speedRunde(20);
    else if (modus === 'nurWdh') aufgaben = Tagesplan.bauen('nurWdh');
    else                         aufgaben = Tagesplan.bauen('voll');

    if (!aufgaben.length) {
      alert('Gerade gibt es nichts zu tun. Schau später wieder rein!');
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
    document.getElementById('uebung-phase').textContent = Tagesplan.PHASE[a.phase] || '';

    // Rückmeldung vom letzten Mal ausblenden
    const rm = document.getElementById('uebung-rueckmeldung');
    rm.hidden = true;
    rm.className = 'rueckmeldung';

    this.aktuell = Uebungen.zeichnen(a, document.getElementById('uebung-inhalt'));

    // Bei reinen Ansichtsaufgaben (Karteikarte, Grammatik-Erklärung)
    // gibt es nichts zu prüfen — direkt "Weiter" zeigen.
    const nurAnsehen = !!this.aktuell.nurAnsehen;
    document.getElementById('btn-pruefen').hidden = nurAnsehen;
    document.getElementById('btn-weiter').hidden  = !nurAnsehen;
    document.getElementById('btn-weiter').textContent = 'Weiter';

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
        frage: a.karte.es || a.karte.satz || '',
        loesung: e.loesung,
        meins: e.meins
      });
    }

    this.rueckmeldungZeigen(e, srsErgebnis);
    document.getElementById('btn-pruefen').hidden = true;
    const weiter = document.getElementById('btn-weiter');
    weiter.hidden = false;
    weiter.textContent = (this.sitzung.index + 1 >= this.sitzung.aufgaben.length) ? 'Abschließen' : 'Weiter';
    weiter.focus();
  },

  rueckmeldungZeigen(e, srs) {
    const rm  = document.getElementById('uebung-rueckmeldung');
    const tit = document.getElementById('rueckmeldung-titel');
    const txt = document.getElementById('rueckmeldung-text');
    const esc = s => Uebungen.escape(s);

    if (e.korrekt && e.fast) {
      rm.className = 'rueckmeldung fast';
      tit.textContent = '✓ Fast perfekt — die Akzente!';
      txt.innerHTML = `Richtig geschrieben: <b>${esc(e.loesung)}</b>`;
    } else if (e.korrekt) {
      rm.className = 'rueckmeldung gut';
      tit.textContent = ['¡Muy bien! ✓', '¡Perfecto! ✓', '¡Genial! ✓', '¡Correcto! ✓'][Math.floor(Math.random() * 4)];
      let z = e.zusatz ? esc(e.zusatz) : '';
      if (srs && srs.leechBefreit) z += (z ? ' · ' : '') + '🎉 Kein Problemwort mehr!';
      else if (srs) z += (z ? ' · ' : '') + `Wieder dran in ${srs.naechsteWiederholung}`;
      txt.innerHTML = z;
    } else {
      rm.className = 'rueckmeldung schlecht';
      tit.textContent = 'Nicht ganz';
      let z = `Richtig wäre: <b>${esc(e.loesung)}</b>`;
      if (e.meins) z += `<br><span class="hinweis">Du hattest: „${esc(e.meins)}"</span>`;
      if (e.zusatz) z += `<br><span class="hinweis">${esc(e.zusatz)}</span>`;
      if (srs && srs.leechNeu) z += `<br><span class="hinweis">⚠️ Ab jetzt als Problemwort markiert — es kommt in jeder Sitzung wieder, bis es dreimal hintereinander sitzt.</span>`;
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

    // Nur eine vollständige Tageslektion zählt als "aktiver Tag" und
    // schiebt den Kalender weiter. Reine Wiederholung zählt für die Heatmap.
    Speicher.tagAktiv(gesamt);
    if (s.modus === 'voll' && Daten.lektion(Speicher.daten.aktuellerTag)) {
      Speicher.daten.aktuellerTag++;
      Speicher.sichern();
    }

    const g = id => document.getElementById(id);
    g('fertig-aufgaben').textContent = gesamt;
    g('fertig-quote').textContent    = gesamt ? Math.round((s.richtig / gesamt) * 100) + '%' : '–';
    g('fertig-neu').textContent      = s.neueWoerter;
    g('fertig-streak').textContent   = Statistik.streak();

    g('fertig-titel').textContent =
      gesamt === 0            ? '¡Hasta luego!' :
      s.falsch === 0          ? '¡Perfecto! 🏆' :
      s.richtig / gesamt > .8 ? '¡Muy bien!' : '¡Bien hecho!';

    g('fertig-untertitel').textContent =
      s.modus === 'voll' ? `Tag ${Speicher.daten.aktuellerTag - 1} abgeschlossen`
                         : 'Wiederholung abgeschlossen';

    g('fertig-fehlerliste').innerHTML = s.fehler.length
      ? '<h3>Das üben wir nochmal</h3>' + s.fehler.slice(0, 8).map(f => `
          <div class="fehler-zeile">
            <b>${Uebungen.escape(f.loesung)}</b>
            ${f.meins ? ` — du hattest „${Uebungen.escape(f.meins)}"` : ''}
          </div>`).join('')
      : '';

    this.sitzung = null;
    this.zeigeSeite('fertig');
  },

  /* ======================= Einstellungen ======================= */

  themaAnwenden() {
    const t = Speicher.einstellung('thema');
    if (t === 'auto') document.documentElement.removeAttribute('data-thema');
    else document.documentElement.setAttribute('data-thema', t);
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

    // Enter/Leertaste auf dem ganzen Übungsbildschirm
    document.addEventListener('keydown', e => {
      if (this.seite !== 'uebung') return;
      if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        if (this.geprueft || (this.aktuell && this.aktuell.nurAnsehen)) this.weiter();
        else this.antwortPruefen();
      }
    });

    // Lautsprecher-Knöpfe funktionieren überall (auch in dynamisch erzeugtem HTML)
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-sprich]');
      if (b) Sprache.sprich(b.dataset.sprich);
    });

    auf('btn-fertig-zurueck', 'click', () => this.zeigeSeite('start'));

    /* --- Kopfzeile & Menü --- */
    auf('btn-zurueck', 'click', () => {
      if (this.seite === 'uebung' && this.sitzung) {
        if (!confirm('Sitzung abbrechen? Deine bisherigen Antworten sind gespeichert.')) return;
        // Teilfortschritt für die Heatmap sichern, Tag aber nicht weiterschalten
        Speicher.tagAktiv(this.sitzung.richtig + this.sitzung.falsch);
        this.sitzung = null;
      }
      this.zeigeSeite('start');
    });
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
          alert('Sicherung eingespielt.');
          this.zeigeSeite('start');
        } catch (err) {
          alert('Konnte nicht eingelesen werden: ' + err.message);
        }
      };
      leser.readAsText(datei);
      e.target.value = '';
    });
    auf('btn-reset', 'click', () => {
      if (!confirm('Wirklich ALLES löschen? Streak, gelernte Wörter und Historie sind dann weg.')) return;
      if (!confirm('Ganz sicher? Das lässt sich nicht rückgängig machen.')) return;
      Speicher.zuruecksetzen();
      this.themaAnwenden();
      this.zeigeSeite('start');
    });
  },

  filterChips() {
    document.querySelectorAll('.filter-leiste .chip').forEach(c => {
      c.classList.toggle('chip-aktiv', c.dataset.filter === (this.hFilter || 'alle'));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => App.starten());
