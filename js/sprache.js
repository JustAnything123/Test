/* Sprachausgabe — liest die Zielsprache des aktiven Kurses vor.
   Wir nutzen die eingebaute Vorlesefunktion des Geräts (speechSynthesis).
   Vorteil: keine einzige Audiodatei nötig, funktioniert offline, kostet nichts.
   Nachteil: die passende Stimme muss installiert sein. Ist keine da, blenden
   wir die Hör-Übungen automatisch aus. */

var Sprache = {
  stimme: null,
  verfuegbar: false,
  _alleStimmen: [],

  /** Beim App-Start aufrufen. Die Stimmenliste kommt bei manchen Browsern
      erst verzögert, deshalb hören wir zusätzlich auf 'voiceschanged'. */
  starten(fertig) {
    if (!('speechSynthesis' in window)) {
      this.verfuegbar = false;
      if (fertig) fertig(false);
      return;
    }
    const suchen = () => {
      const stimmen = window.speechSynthesis.getVoices();
      if (!stimmen.length) return false;
      this._alleStimmen = stimmen;
      this.fuerKursWaehlen();
      return true;
    };

    if (!suchen()) {
      window.speechSynthesis.addEventListener('voiceschanged', () => {
        suchen();
        if (fertig) fertig(this.verfuegbar);
      }, { once: true });
      // Sicherheitsnetz, falls das Ereignis nie kommt
      setTimeout(() => { suchen(); if (fertig) fertig(this.verfuegbar); }, 1200);
    } else if (fertig) {
      fertig(this.verfuegbar);
    }
  },

  /** Die passende Stimme für den aktiven Kurs heraussuchen.
      Muss nach jedem Kurswechsel erneut aufgerufen werden — für Deutsch
      brauchen wir eine andere Stimme als für Spanisch. */
  fuerKursWaehlen() {
    const kurs = Kurse.aktiv();
    if (!kurs || !this._alleStimmen.length) { this.verfuegbar = false; return; }

    // Die Wunschliste des Kurses der Reihe nach durchgehen: erst genaue
    // Treffer (es-MX), dann Sprache ohne Region (es-…)
    for (const wunsch of kurs.stimmen) {
      const genau = this._alleStimmen.find(s => s.lang && s.lang.replace('_', '-') === wunsch);
      if (genau) { this.stimme = genau; this.verfuegbar = true; return; }
    }
    const grob = this._alleStimmen.find(s => s.lang && s.lang.toLowerCase().startsWith(kurs.ziel));
    this.stimme = grob || null;
    this.verfuegbar = !!grob;
  },

  /** Text vorlesen. tempo < 1 = langsamer (gut für lange Sätze). */
  sprich(text, tempo) {
    if (!this.verfuegbar || !Speicher.einstellung('ton')) return;
    try {
      window.speechSynthesis.cancel();          // laufende Ausgabe abbrechen
      const s = new SpeechSynthesisUtterance(text);
      s.voice = this.stimme;
      s.lang = this.stimme ? this.stimme.lang : (Kurse.aktiv() || {}).ziel;
      s.rate = tempo || 0.9;                    // etwas langsamer als normal
      window.speechSynthesis.speak(s);
    } catch (e) {
      console.warn('Vorlesen fehlgeschlagen:', e);
    }
  },

  /** Darf die App gerade Hör-Übungen stellen? */
  kannHoeren() {
    return this.verfuegbar && !!Speicher.einstellung('ton');
  },

  /** Text für die Einstellungsseite. */
  statusText() {
    if (!('speechSynthesis' in window)) return t('einst.keineSprachausgabe');
    if (!this.verfuegbar) return t('einst.stimmeFehlt');
    return t('einst.stimmeDa', { name: this.stimme.name, sprache: this.stimme.lang });
  }
};
