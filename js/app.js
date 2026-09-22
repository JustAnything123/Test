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

  /* Zustand einer laufenden Pruefung. Getrennt von `sitzung`, weil eine
     Pruefung anders laeuft: aufgabenweise statt frageweise, und ohne
     Rueckmeldung bis zum Schluss. */
  pruefung: null,    // { def, aufgaben, index, antworten, begonnen }
  pruefauftrag: null, // im Prüfer-Modus: das entpackte Paket aus dem Link

  /* ======================= Start ======================= */

  starten() {
    Speicher.laden();
    this.themaAnwenden();

    Sprache.starten(() => {
      const el = document.getElementById('stimme-status');
      if (el) el.textContent = Sprache.statusText();
    });

    this.knoepfeVerdrahten();

    // Ein Link, der sich nur hinter dem # unterscheidet, laedt die Seite
    // NICHT neu — der Browser wechselt bloss das Fragment. Wer einen
    // Pruef- oder Ruecklink antippt, waehrend die App schon offen ist,
    // wuerde sonst gar nichts sehen. Der Horcher muss deshalb stehen,
    // BEVOR der erste Link verarbeitet wird: Sonst gaebe es ihn nicht mehr,
    // wenn die App gleich beim Start ueber einen Link geoeffnet wurde.
    window.addEventListener('hashchange', () => this.linkVerarbeiten());

    // Service Worker anmelden (nur über http/https, nicht bei file://)
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('service-worker.js')
        .catch(e => console.warn('Service Worker nicht registriert:', e));
    }

    // Bringt die Adresse etwas mit? Das geht vor der normalen Anzeige, denn
    // ein Prüfauftrag soll auch bei jemandem aufgehen, der die App noch nie
    // benutzt hat und deshalb gar keinen Kurs gewählt hat.
    if (this.linkVerarbeiten()) return;

    // Ohne gewählten Kurs zuerst die Kursauswahl zeigen
    if (!Speicher.daten.aktiverKurs || !Kurse.hat(Speicher.daten.aktiverKurs)) {
      this.textePruefen();
      this.zeigeSeite('kurse');
    } else {
      this.kursAnwenden();
      this.zeigeSeite('start');
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

      // Ein Lernpfad (z. B. "Deutsch im Beruf") gehoert zu einem Hauptkurs.
      // Er wird eingerueckt gezeigt, bekommt ein Schildchen und zeigt seinen
      // Hinweis mit an, damit klar ist, was er ist und wann er sich lohnt.
      const istPfad = !!kurs.gehoertZu;
      const schild  = istPfad ? `<span class="kurs-schild">${Uebungen.escape(t('kurs.pfad'))}</span>` : '';
      const notiz   = istPfad && kurs.hinweis
        ? `<span class="kurs-notiz">${Uebungen.escape(kurs.hinweis)}</span>` : '';

      return `
        <button class="kurs-karte${kurs.id === aktiv ? ' kurs-aktiv' : ''}${istPfad ? ' kurs-pfad' : ''}"
                data-kurs="${kurs.id}" style="--kursfarbe:${kurs.farbe}">
          <span class="kurs-flagge">${kurs.flagge}</span>
          <span class="kurs-text">
            <span class="kurs-kopfzeile"><span class="kurs-name">${Uebungen.escape(kurs.name)}</span>${schild}</span>
            <span class="kurs-unter">${Uebungen.escape(kurs.untertitel)}</span>
            ${notiz}
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

  SEITEN: ['kurse', 'start', 'uebung', 'fertig', 'historie', 'erinnerung', 'einstellungen',
           'pruefung-info', 'pruefung', 'pruefung-ergebnis', 'pruefer'],

  zeigeSeite(name) {
    this.SEITEN.forEach(s => {
      const el = document.getElementById('seite-' + s);
      if (el) el.hidden = (s !== name);
    });
    this.seite = name;

    // In der Prüfung ist der Kopf so leer wie in der Übung — aber der
    // Lektionszähler gehört nicht hierher: Die Prüfung hat ihre eigene
    // Fortschrittsleiste, sonst stünde dort 0/0.
    const inUebung   = name === 'uebung';
    const inPruefung = name === 'pruefung';
    const beimPruefer = name === 'pruefer';
    const schlank    = inUebung || inPruefung;
    document.getElementById('kopf-fortschritt').hidden = !inUebung;
    document.getElementById('kopf-titel').hidden = schlank;
    // Der Prüfer ist nicht der Lernende: Seine Kopfzeile darf nicht in
    // dessen Kursauswahl führen.
    document.getElementById('kopf-kurs').hidden = schlank || beimPruefer || !Kurse.aktiv();
    document.getElementById('btn-zurueck').hidden = (name === 'start' || name === 'kurse');
    window.scrollTo(0, 0);

    if (name === 'kurse')    this.kurslisteZeichnen();
    if (name === 'start')    this.startAktualisieren();
    if (name === 'historie') Statistik.zeichneHistorie(document.getElementById('historie-liste'), this.hFilter || 'alle');
    if (name === 'einstellungen') this.einstellungenAktualisieren();
    if (name === 'pruefung-info') this.pruefungInfoZeichnen();
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

    this.pruefkarteAktualisieren();
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

  /* ======================= Prüfung ======================= */

  /* Eine Prüfung ist ein Zwischenstopp im Kurs. Sie wird freigeschaltet,
     sobald der Lerntag erreicht ist, und läuft bewusst anders als eine
     Lektion: keine Hilfe, keine Rückmeldung, Auswertung erst am Ende. */

  /** Die Karte auf dem Startbildschirm — zeigt die nächste offene Prüfung
      oder, wenn alles bestanden ist, gar nichts. */
  pruefkarteAktualisieren() {
    // Streifen für Schreibaufgaben, die noch niemand bewertet hat. Ohne ihn
    // käme man nach dem Bestehen nicht mehr an die Prüfung heran, um sie
    // zu verschicken oder die Bewertung anzusehen.
    const warten  = Pruefungen.offeneBewertungen();
    const streifen = document.getElementById('wartestreifen');
    if (streifen) {
      streifen.hidden = warten.length === 0;
      if (warten.length) {
        document.getElementById('wartestreifen-text').textContent =
          (warten.length === 1 ? t('start.bewertungOffen', { n: 1 })
                               : t('start.bewertungOffenMehr', { n: warten.length }));
      }
    }

    const karte = document.getElementById('pruefkarte');
    if (!karte) return;
    const p = Pruefungen.offen();
    if (!p) { karte.hidden = true; return; }

    const g = id => document.getElementById(id);
    karte.hidden = false;
    g('pruefkarte-niveau').textContent  = p.niveau;
    g('pruefkarte-name').textContent    = p.name;
    g('pruefkarte-vorbild').textContent = t('pruef.nachVorbild', { vorbild: p.vorbild });

    const bestes = Pruefungen.bestesErgebnis(p.id);
    g('pruefkarte-stand').textContent = bestes === null
      ? t('pruef.nochNicht')
      : t('pruef.besterVersuch', { prozent: bestes });

    // Sind mehrere Prüfungen freigeschaltet, muss man auch an die anderen
    // herankommen. Sonst bekäme jemand an Tag 120 des Deutschkurses die
    // A1-Prüfung angeboten und käme an die B2-Prüfung nie heran.
    const alle = Pruefungen.freigeschaltet();
    const liste = g('pruefliste');
    if (alle.length < 2) { liste.hidden = true; return; }

    liste.hidden = false;
    liste.innerHTML = `<h3 class="abschnitt-titel">${Uebungen.escape(t('pruef.alle'))}</h3>` +
      alle.map(x => {
        const b = Pruefungen.bestesErgebnis(x.id);
        const stand = b === null ? t('pruef.nochNicht')
                    : Pruefungen.bestanden(x.id) ? t('pruef.bestandenMit', { prozent: b })
                    : t('pruef.besterVersuch', { prozent: b });
        return `
          <button class="pruefzeile${Pruefungen.bestanden(x.id) ? ' erledigt' : ''}" data-pruefung="${Uebungen.escape(x.id)}">
            <span class="pruef-chip">${Uebungen.escape(x.niveau)}</span>
            <span class="pruefzeile-name">${Uebungen.escape(x.name)}</span>
            <span class="pruefzeile-stand">${Uebungen.escape(stand)}</span>
          </button>`;
      }).join('');

    liste.querySelectorAll('[data-pruefung]').forEach(k =>
      k.addEventListener('click', () => {
        this.pruefungGewaehlt = Pruefungen.nachId(k.dataset.pruefung);
        if (this.pruefungGewaehlt) this.zeigeSeite('pruefung-info');
      }));
  },

  /** Übersicht vor dem Start: Teile, Punkte, Regeln. */
  pruefungInfoZeichnen() {
    const p = this.pruefungGewaehlt;
    if (!p) return this.zeigeSeite('start');
    const g = id => document.getElementById(id);

    g('pinfo-niveau').textContent  = p.niveau;
    g('pinfo-name').textContent    = p.name;
    g('pinfo-vorbild').textContent = t('pruef.nachVorbild', { vorbild: p.vorbild });

    // Ohne Stimme faellt der Hoerteil weg — sonst gaebe es dafuer 0 Punkte,
    // obwohl niemand etwas falsch gemacht hat.
    const wirklich = Pruefungen.ohneHoeren(p);
    g('pinfo-hoerwarnung').hidden = !wirklich._hoerenFehlt;

    g('pinfo-teile').innerHTML = wirklich.teile.map(teil => {
      const max = Pruefungen.maxPunkteTeil(teil);
      return `
        <div class="pruef-teilzeile">
          <span class="pruef-teilname">${Uebungen.escape(teil.name)}</span>
          <span class="pruef-teilpunkte">${max ? t('pruef.punkte', { n: max }) : t('pruef.durchMensch')}</span>
        </div>`;
    }).join('');

    const bestes = Pruefungen.bestesErgebnis(p.id);
    const frueher = g('pinfo-frueher');
    if (bestes === null) {
      frueher.hidden = true;
    } else {
      frueher.hidden = false;
      frueher.textContent = t('pruef.frueherErgebnis', {
        anzahl:  Pruefungen.versuche(p.id).length,
        prozent: bestes
      });
    }
  },

  /** Prüfung starten. */
  pruefungStarten() {
    const def = Pruefungen.ohneHoeren(this.pruefungGewaehlt);
    this.pruefung = {
      def,
      aufgaben:  Pruefungen.aufgaben(def),
      index:     0,
      antworten: {},
      begonnen:  Date.now()
    };
    this.zeigeSeite('pruefung');
    this.pruefAufgabeZeigen();
  },

  pruefAufgabeZeigen() {
    const p = this.pruefung;
    if (!p) return;
    const eintrag = p.aufgaben[p.index];
    PruefungUI.zeichnen(eintrag, document.getElementById('pruef-inhalt'), p.antworten);

    const g = id => document.getElementById(id);
    g('pruef-fortschritt-text').textContent = t('pruef.aufgabeVon', {
      n: p.index + 1, gesamt: p.aufgaben.length
    });
    g('pruef-balken-innen').style.width = ((p.index + 1) / p.aufgaben.length * 100) + '%';
    g('btn-pruef-zurueck').disabled = p.index === 0;
    g('btn-pruef-weiter').textContent = p.index === p.aufgaben.length - 1
      ? t('pruef.abgeben') : t('pruef.weiter');
    window.scrollTo(0, 0);
  },

  pruefBlaettern(richtung) {
    const p = this.pruefung;
    if (!p) return;
    const neu = p.index + richtung;
    if (neu < 0) return;
    if (neu >= p.aufgaben.length) return this.pruefungAbgeben();
    p.index = neu;
    this.pruefAufgabeZeigen();
  },

  /** Abgeben — erst hier wird überhaupt bewertet. */
  pruefungAbgeben() {
    const p = this.pruefung;
    if (!p) return;

    // Unbeantwortete Fragen sind in einer Prüfung erlaubt, aber man sollte
    // es wissen, bevor abgegeben wird.
    const offen = Pruefungen.fragen(p.def)
      .filter(f => f.aufgabe.art !== 'schreiben')
      .filter(f => p.antworten[f.frage.id] === undefined).length;
    if (offen && !confirm(t('pruef.nochOffen', { n: offen }))) return;

    const ergebnis = Pruefungen.auswerten(p.def, p.antworten);
    ergebnis.dauerMinuten = Math.round((Date.now() - p.begonnen) / 60000);
    Pruefungen.ergebnisSpeichern(ergebnis);
    this.pruefung = null;
    this.letztesErgebnis = ergebnis;
    this.pruefErgebnisZeichnen(ergebnis);
    this.zeigeSeite('pruefung-ergebnis');
  },

  pruefungAufgeben() {
    if (!confirm(t('pruef.wirklichAufgeben'))) return;
    this.pruefung = null;
    this.zeigeSeite('start');
  },

  pruefErgebnisZeichnen(e) {
    const g   = id => document.getElementById(id);
    const def = Pruefungen.nachId(e.pruefungId);

    g('perg-kopf').className = 'pruef-ergebnis-kopf ' + (e.bestanden ? 'bestanden' : 'nicht-bestanden');
    g('perg-prozent').textContent = e.prozent + '%';
    g('perg-urteil').textContent  = e.bestanden ? t('pruef.bestanden') : t('pruef.nichtBestanden');
    g('perg-punkte').textContent  = t('pruef.punkteVon', {
      punkte: e.punkte, max: e.max, grenze: e.grenze
    });

    g('perg-teile').innerHTML = e.teile.filter(x => x.max > 0).map(x => `
      <div class="pruef-teilzeile">
        <span class="pruef-teilname">${Uebungen.escape(x.name)}</span>
        <span class="pruef-teilbalken"><span style="width:${x.prozent}%"></span></span>
        <span class="pruef-teilpunkte">${x.punkte}/${x.max}</span>
      </div>`).join('');

    // Offene Aufgaben: entweder die Bewertung eines Menschen — oder ehrlich
    // als noch nicht bewertet ausgewiesen, mit dem Weg dorthin.
    const esc = x => Uebungen.escape(x);
    const urteilsNamen = { richtig: t('pruefer.richtig'), teilweise: t('pruefer.teilweise'), falsch: t('pruefer.falsch') };
    const bewertungen = e.bewertungen || {};

    g('perg-offen').innerHTML = e.offen.length ? `
      <h3 class="abschnitt-titel">${esc(t('pruef.offeneAufgaben'))}</h3>
      <div class="pruef-warnung">${esc(t('pruef.offenErklaerung'))}</div>
      ${e.offen.map(o => {
        const b = bewertungen[o.frageId];
        return `
        <div class="pruef-offen-block">
          <p class="pruef-frage">${esc(o.auftrag)}</p>
          <div class="pruef-deine-antwort">${
            o.antwort ? esc(o.antwort).replace(/\n/g, '<br>')
                      : '<em>' + esc(t('pruef.nichtsGeschrieben')) + '</em>'
          }</div>
          ${b ? `
            <div class="pruef-bewertung urteil-${esc(b.urteil)}">
              <div class="pruef-bewertung-kopf">
                <span class="pruef-urteil-schild">${esc(urteilsNamen[b.urteil] || b.urteil)}</span>
                <span class="pruef-bewertung-von">${esc(t('teilen.bewertungDa'))}${
                  b.von ? ' ' + esc(t('teilen.vonWem', { von: b.von })) : ''
                } · ${esc(b.datum || '')}</span>
              </div>
              ${b.hinweis ? `<p class="pruef-bewertung-hinweis">${esc(b.hinweis).replace(/\n/g, '<br>')}</p>` : ''}
            </div>` : ''}
          ${o.kriterien.length ? `
            <p class="pruef-kriterien-titel">${esc(t('pruef.kriterien'))}</p>
            <ul class="pruef-kriterien">${o.kriterien.map(k => `<li>${esc(k)}</li>`).join('')}</ul>` : ''}
          ${o.muster ? `
            <details class="pruef-muster">
              <summary>${esc(t('pruef.musterZeigen'))}</summary>
              <div>${esc(o.muster).replace(/\n/g, '<br>')}</div>
            </details>` : ''}
          <div class="pruef-teilen-knoepfe">
            <button type="button" class="btn btn-teilen" data-teilen="${esc(e.id || '')}">${
              esc(b ? t('teilen.nochmalSchicken') : t('teilen.zurBewertung'))
            }</button>
            <button type="button" class="btn btn-neben btn-schmal" data-selbst="${esc(e.id || '')}">${
              esc(t('teilen.selbstEintragen'))
            }</button>
          </div>
        </div>`;
      }).join('')}` : '';

    // Die beiden Knöpfe je offener Aufgabe verdrahten
    g('perg-offen').querySelectorAll('[data-teilen]').forEach(k =>
      k.addEventListener('click', () => this.zurBewertungGeben(e)));
    g('perg-offen').querySelectorAll('[data-selbst]').forEach(k =>
      k.addEventListener('click', () =>
        this.prueferModusStarten(Teilen.auftragPacken(e), true)));

    // Durchsicht: jede Frage mit der richtigen Loesung. Kommt nach dem
    // Ergebnis, nie vorher — vorher waere es keine Pruefung mehr.
    const alle = def ? Pruefungen.fragen(def) : [];
    const texte = {}, loesungstexte = {};
    for (const f of alle) {
      texte[f.frage.id] = f.frage.text || f.frage.auftrag || '';
      // "richtig: a" hilft niemandem weiter. Wenn die Option einen Wortlaut
      // hat, gehoert der dazu: "richtig: a) fui".
      const optionen = f.frage.optionen || (f.aufgabe.art === 'zuordnen' ? f.aufgabe.optionen : null);
      const treffer  = optionen && optionen.find(o => String(o.wert) === String(f.frage.loesung));
      loesungstexte[f.frage.id] = treffer && treffer.text && treffer.text !== treffer.wert
        ? `${treffer.wert}) ${treffer.text}`
        : { r: t('pruef.richtig'), f: t('pruef.falsch') }[String(f.frage.loesung)]
          || String(f.frage.loesung);
    }

    g('perg-durchsicht').innerHTML = e.teile.filter(x => x.max > 0).map(x => `
      <div class="pruef-durchsicht-teil">
        <h4>${Uebungen.escape(x.name)}</h4>
        ${x.details.map((d, i) => `
          <div class="pruef-durchsicht-zeile ${d.richtig ? 'ok' : 'weg'}">
            <span class="pdz-nr">${i + 1}</span>
            <span class="pdz-text">${Uebungen.escape(texte[d.frageId] || d.frageId)}</span>
            <span class="pdz-loesung">${
              d.richtig ? '✓'
                        : Uebungen.escape(t('pruef.richtigWaere', { loesung: loesungstexte[d.frageId] || d.loesung }))
            }</span>
          </div>`).join('')}
      </div>`).join('');
  },

  /* ======================= Teilen und Prüfer ======================= */

  /* Der Rundlauf ohne Server:
       du  →  Link mit deiner Antwort   →  Prüfer
       du  ←  Link mit seiner Bewertung ←  Prüfer
     Siehe js/teilen.js für das Verpacken. */

  /** Beim Start: Steht etwas hinter dem # in der Adresse?
      Gibt true zurück, wenn der Link die Anzeige übernommen hat. */
  linkVerarbeiten() {
    if (!location.hash) return false;
    const inhalt = Teilen.ausAdresse();

    if (!inhalt) {
      // Es stand etwas hinter dem #, aber nichts Lesbares. Das ist der
      // typische Fall eines unterwegs abgeschnittenen Links.
      if (/[#&](pruefen|bewertung)=/.test(location.hash)) {
        Teilen.adresseSaeubern();
        this.kursAnwenden();
        this.zeigeSeite('start');
        alert(t('teilen.linkKaputt'));
        return true;
      }
      return false;
    }

    Teilen.adresseSaeubern();
    if (inhalt.art === 'auftrag')   return this.prueferModusStarten(inhalt.daten);
    if (inhalt.art === 'bewertung') return this.bewertungEinlesen(inhalt.daten);
    return false;
  },

  /* ---- Prüfer-Seite ---------------------------------------------------- */

  /** Der Prüfer öffnet den Link. Wichtig: Hier wird NICHTS am Lernstand des
      Prüfers verändert — er könnte selbst gerade einen Kurs machen. Wir
      wechseln nicht einmal den aktiven Kurs, sondern erzwingen nur die
      Sprache der Oberfläche. */
  prueferModusStarten(auftrag, selbstModus) {
    const kurs = KURSE[auftrag.kurs];
    const def  = kurs ? (PRUEFUNGEN[auftrag.kurs] || []).find(p => p.id === auftrag.pruefung) : null;

    // Der Prüfer spricht die Zielsprache des Kurses — er bewertet ja einen
    // Text darin. Die Oberfläche erscheint deshalb in dieser Sprache, nicht
    // in der Lernsprache des Schülers.
    TEXTE_ZWANG = selbstModus ? null : (kurs ? kurs.ziel : null);

    this.pruefauftrag  = auftrag;
    this.prueferUrteile = {};
    this.prueferSelbst = !!selbstModus;

    const g = id => document.getElementById(id);
    g('pruefer-titel').textContent = t('pruefer.betreff') + (def ? ' · ' + def.name : '');
    g('pruefer-einleitung').textContent = selbstModus ? t('pruefer.selbstModus') : t('pruefer.einleitung', {
      ziel: kurs ? (TEXTE[TEXTE_ZWANG || 'de'].sprachen[kurs.ziel] || '') : ''
    });
    g('pruefer-kennung').textContent = t('pruefer.kennung') + ': ' + auftrag.id;
    g('pruefer-name-label').textContent = t('pruefer.name');
    g('btn-pruefer-senden').textContent = selbstModus ? t('pruefer.gespeichert').replace('.', '') : t('pruefer.zurueckschicken');
    g('btn-pruefer-abbrechen').textContent = t('pruefer.abbrechen');
    g('pruefer-name').parentElement.hidden = !!selbstModus;
    g('pruefer-meldung').hidden = true;

    // Zu jeder mitgeschickten Antwort die Aufgabe aus der eigenen App holen.
    // Es reist nur der Text — Aufgabenstellung, Kriterien und Musterlösung
    // hat der Prüfer schon, weil er dieselbe App öffnet.
    const alle = def ? Pruefungen.fragen(def) : [];
    g('pruefer-aufgaben').innerHTML = auftrag.antworten.map(a => {
      const treffer = alle.find(f => f.frage.id === a.fid);
      const f = treffer ? treffer.frage : null;
      const zielSprache = !selbstModus;

      const auftragText = f ? ((zielSprache && f.auftragZiel) || f.auftrag) : t('pruefer.nichtGefunden');
      const punkte      = f ? ((zielSprache && f.punkteZiel) || f.punkte || []) : [];
      const kriterien   = f ? ((zielSprache && f.kriterienZiel) || f.kriterien || []) : [];
      const muster      = f ? f.muster : '';
      const e = x => Uebungen.escape(x);

      return `
        <div class="pruefer-block" data-frage="${e(a.fid)}">
          <h3>${e(t('pruefer.dieAufgabe'))}</h3>
          <div class="pruefer-auftrag">
            <p>${e(auftragText)}</p>
            ${punkte.length ? `<ul>${punkte.map(x => `<li>${e(x)}</li>`).join('')}</ul>` : ''}
          </div>

          <h3>${e(t('pruefer.dieAntwort'))}</h3>
          <div class="pruefer-antwort">${
            a.text ? e(a.text).replace(/\n/g, '<br>') : '<em>—</em>'
          }</div>

          ${kriterien.length ? `
            <h3>${e(t('pruefer.woraufAchten'))}</h3>
            <ul class="pruefer-kriterien">${kriterien.map(k => `
              <li><label><input type="checkbox"> <span>${e(k)}</span></label></li>`).join('')}
            </ul>` : ''}

          ${muster ? `
            <details class="pruef-muster">
              <summary>${e(t('pruefer.musterZeigen'))}</summary>
              <div>${e(muster).replace(/\n/g, '<br>')}</div>
            </details>` : ''}

          <h3>${e(t('pruefer.bitteBewerten'))}</h3>
          <div class="pruefer-urteile" data-frage="${e(a.fid)}">
            <button type="button" class="pruefer-urteil" data-urteil="richtig">${e(t('pruefer.richtig'))}</button>
            <button type="button" class="pruefer-urteil" data-urteil="teilweise">${e(t('pruefer.teilweise'))}</button>
            <button type="button" class="pruefer-urteil" data-urteil="falsch">${e(t('pruefer.falsch'))}</button>
          </div>
          <label class="pruefer-feld">
            <span>${e(t('pruefer.hinweis'))}</span>
            <textarea rows="3" class="pruefer-hinweis" data-frage="${e(a.fid)}"
                      placeholder="${e(t('pruefer.hinweisPlatzhalter'))}"></textarea>
          </label>
        </div>`;
    }).join('');

    // Urteilsknöpfe: einer je Aufgabe, umwählbar
    g('pruefer-aufgaben').querySelectorAll('.pruefer-urteile').forEach(gruppe => {
      const fid = gruppe.dataset.frage;
      gruppe.querySelectorAll('.pruefer-urteil').forEach(knopf => {
        knopf.addEventListener('click', () => {
          this.prueferUrteile[fid] = knopf.dataset.urteil;
          gruppe.querySelectorAll('.pruefer-urteil').forEach(k =>
            k.classList.toggle('gewaehlt', k.dataset.urteil === this.prueferUrteile[fid]));
        });
      });
    });
    // Kriterien-Häkchen sind nur eine Lesehilfe und werden nicht mitgeschickt.
    g('pruefer-aufgaben').querySelectorAll('.pruefer-kriterien label').forEach(l => {
      l.addEventListener('click', () => setTimeout(() =>
        l.classList.toggle('abgehakt', l.querySelector('input').checked), 0));
    });

    this.zeigeSeite('pruefer');
    return true;
  },

  /** Der Prüfer ist fertig: Bewertungen einsammeln und zurückschicken —
      oder, im Selbst-Modus, direkt beim eigenen Versuch ablegen. */
  async prueferAbschicken() {
    const auftrag = this.pruefauftrag;
    if (!auftrag) return;

    const offen = auftrag.antworten.filter(a => !this.prueferUrteile[a.fid]);
    if (offen.length) { alert(t('pruefer.keinUrteil')); return; }

    const bewertungen = {};
    for (const a of auftrag.antworten) {
      const feld = document.querySelector(`.pruefer-hinweis[data-frage="${a.fid}"]`);
      bewertungen[a.fid] = {
        urteil:  this.prueferUrteile[a.fid],
        hinweis: feld ? feld.value.trim() : ''
      };
    }

    if (this.prueferSelbst) {
      const paket = Teilen.bewertungPacken(auftrag, bewertungen, '');
      Pruefungen.bewertungSpeichern(paket);
      TEXTE_ZWANG = null;
      this.pruefauftrag = null;
      this.zeigeSeite('start');
      alert(t('pruefer.gespeichert'));
      return;
    }

    const name = (document.getElementById('pruefer-name').value || '').trim();
    const link = Teilen.bewertungLink(auftrag, bewertungen, name);
    const wie  = await Teilen.verschicken(t('pruefer.betreff'), link);

    const meldung = document.getElementById('pruefer-meldung');
    meldung.hidden = false;
    meldung.textContent =
      wie === 'geteilt' ? t('pruefer.fertig') :
      wie === 'kopiert' ? t('teilen.kopiert') :
      wie === 'abgebrochen' ? '' : t('teilen.fehlgeschlagen');
    meldung.hidden = !meldung.textContent;
  },

  prueferVerlassen() {
    TEXTE_ZWANG = null;
    this.pruefauftrag = null;
    this.kursAnwenden();
    this.zeigeSeite('start');
  },

  /* ---- Rückweg: die Bewertung kommt an --------------------------------- */

  bewertungEinlesen(paket) {
    const fund = Pruefungen.bewertungSpeichern(paket);
    this.kursAnwenden();
    if (!fund) {
      this.zeigeSeite('start');
      alert(t('teilen.unbekannt'));
      return true;
    }
    // Zum Ergebnis des betroffenen Versuchs springen
    if (fund.kursId !== Kurse.aktiveId()) { Kurse.wechseln(fund.kursId); this.kursAnwenden(); }
    this.letztesErgebnis = fund.versuch;
    this.pruefErgebnisZeichnen(fund.versuch);
    this.zeigeSeite('pruefung-ergebnis');
    alert(t('teilen.eingetroffen'));
    return true;
  },

  /* ---- Hinweg: die Aufgabe zum Prüfer schicken ------------------------- */

  async zurBewertungGeben(versuch) {
    const def  = Pruefungen.nachId(versuch.pruefungId);
    const link = Teilen.auftragLink(versuch);

    // Zu lang für einen Link? Dann den Textblock nehmen — der kommt überall
    // durch, der Prüfer antwortet formlos, und die Bewertung wird später von
    // Hand eingetragen.
    if (!Teilen.linkTraegt(link)) {
      const wie = await Teilen.verschicken(t('pruefer.betreff'), Teilen.auftragAlsText(versuch, def));
      alert(t('teilen.zuLang'));
      return wie;
    }
    const wie = await Teilen.verschicken(t('pruefer.betreff'), link);
    if (wie === 'kopiert') alert(t('teilen.kopiert'));
    else if (wie === 'fehlgeschlagen') alert(t('teilen.fehlgeschlagen'));
    return wie;
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

    /* ---- Prüfung ---- */
    auf('btn-pruefung', 'click', () => {
      this.pruefungGewaehlt = Pruefungen.offen();
      if (this.pruefungGewaehlt) this.zeigeSeite('pruefung-info');
    });
    auf('btn-pruefung-los',       'click', () => this.pruefungStarten());
    auf('btn-pruefung-abbrechen', 'click', () => this.zeigeSeite('start'));
    auf('btn-pruef-weiter',       'click', () => this.pruefBlaettern(1));
    auf('btn-pruef-zurueck',      'click', () => this.pruefBlaettern(-1));
    auf('btn-pruef-aufgeben',     'click', () => this.pruefungAufgeben());
    auf('btn-perg-zurueck',       'click', () => this.zeigeSeite('start'));

    /* ---- Prüfer und Teilen ---- */
    auf('btn-pruefer-senden',     'click', () => this.prueferAbschicken());
    auf('btn-pruefer-abbrechen',  'click', () => this.prueferVerlassen());
    auf('wartestreifen',          'click', () => {
      const warten = Pruefungen.offeneBewertungen();
      if (!warten.length) return;
      this.letztesErgebnis = warten[warten.length - 1];
      this.pruefErgebnisZeichnen(this.letztesErgebnis);
      this.zeigeSeite('pruefung-ergebnis');
    });

    /* --- Kopfzeile & Menü --- */
    auf('btn-zurueck', 'click', () => {
      if (this.seite === 'pruefer') return this.prueferVerlassen();
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
