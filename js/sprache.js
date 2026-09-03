/* Sprachausgabe — liest spanische Wörter und Sätze vor.
   Wir nutzen die eingebaute Vorlesefunktion des Geräts (speechSynthesis).
   Vorteil: keine einzige Audiodatei nötig, funktioniert offline, kostet nichts.
   Nachteil: es muss eine spanische Stimme installiert sein. Ist keine da,
   blenden wir die Hör-Übungen automatisch aus. */

var Sprache = {
  stimme: null,
  verfuegbar: false,

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
      // Bevorzugt Spanien-Spanisch, sonst irgendein Spanisch
      this.stimme = stimmen.find(s => s.lang === 'es-ES')
                 || stimmen.find(s => s.lang && s.lang.startsWith('es'))
                 || null;
      this.verfuegbar = !!this.stimme;
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

  /** Text vorlesen. tempo < 1 = langsamer (gut für lange Sätze). */
  sprich(text, tempo) {
    if (!this.verfuegbar || !Speicher.einstellung('ton')) return;
    try {
      window.speechSynthesis.cancel();          // laufende Ausgabe abbrechen
      const s = new SpeechSynthesisUtterance(text);
      s.voice = this.stimme;
      s.lang = this.stimme ? this.stimme.lang : 'es-ES';
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
    if (!('speechSynthesis' in window)) return 'Dein Browser kann keine Sprachausgabe.';
    if (!this.verfuegbar) {
      return 'Keine spanische Stimme gefunden. Auf Android: Einstellungen → '
           + 'System → Sprachen → Text-in-Sprache-Ausgabe → Sprache „Español" '
           + 'herunterladen. Hör-Übungen sind bis dahin ausgeblendet.';
    }
    return `Stimme aktiv: ${this.stimme.name} (${this.stimme.lang}).`;
  }
};
