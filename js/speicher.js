/* Speicher — alles, was deinen Fortschritt betrifft.
   Gespeichert wird im "localStorage" des Browsers: das ist ein kleiner
   Text-Speicher, den jede Webseite für sich hat. Er überlebt das Schließen
   der App, geht aber verloren, wenn du die Browserdaten löschst.
   Deshalb gibt es unten Export/Import als Sicherung. */

var Speicher = {
  SCHLUESSEL: 'spanisch_v1',

  /** So sieht ein frischer Fortschritt aus. */
  leer() {
    return {
      version: 1,
      aktuellerTag: 1,
      aktiveTage: [],          // ["2026-09-03", ...]
      tagesUebungen: {},       // { "2026-09-03": 34 }  → für die Heatmap
      karten: {},              // { "v0011": { stufe, faellig, richtig, falsch, ... } }
      einstellungen: { ton: true, thema: 'auto', tagesziel: 25 }
    };
  },

  daten: null,

  /** Beim App-Start einmal aufrufen. */
  laden() {
    try {
      const roh = localStorage.getItem(this.SCHLUESSEL);
      this.daten = roh ? { ...this.leer(), ...JSON.parse(roh) } : this.leer();
      // Einstellungen einzeln zusammenführen, damit neue Optionen nicht fehlen
      this.daten.einstellungen = { ...this.leer().einstellungen, ...(this.daten.einstellungen || {}) };
    } catch (e) {
      console.warn('Fortschritt konnte nicht gelesen werden, starte neu:', e);
      this.daten = this.leer();
    }
    return this.daten;
  },

  /** Nach jeder Änderung aufrufen. */
  sichern() {
    try {
      localStorage.setItem(this.SCHLUESSEL, JSON.stringify(this.daten));
      return true;
    } catch (e) {
      // Passiert z. B. im privaten Modus oder wenn der Speicher voll ist
      console.warn('Speichern fehlgeschlagen:', e);
      return false;
    }
  },

  /* ---------------- Karten (Vokabeln, Sätze, Grammatikübungen) ---------------- */

  /** Den Lernstand einer Karte holen — legt ihn an, falls es ihn noch nicht gibt. */
  karte(id) {
    if (!this.daten.karten[id]) {
      this.daten.karten[id] = {
        stufe: 0,
        faellig: 0,          // 0 = noch nie gelernt
        richtig: 0,
        falsch: 0,
        fehlerSerie: 0,      // Fehler direkt hintereinander
        richtigSerie: 0,     // Treffer direkt hintereinander (für Leech-Befreiung)
        leech: false,
        gesehen: false,
        historie: []         // die letzten 10 Antworten
      };
    }
    return this.daten.karten[id];
  },

  /** Gibt es zu dieser Karte schon einen Lernstand? (ohne einen anzulegen) */
  hatKarte(id) {
    return Object.prototype.hasOwnProperty.call(this.daten.karten, id);
  },

  /* ---------------- Tage ---------------- */

  /** Heutiges Datum als "2026-09-03" — bewusst in Ortszeit, nicht UTC,
      damit ein Lernabend um 23:00 nicht schon als "morgen" zählt. */
  heute() {
    const d = new Date();
    const p = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  },

  /** Heute als aktiven Tag vermerken und die Übungen mitzählen. */
  tagAktiv(anzahlUebungen) {
    const h = this.heute();
    if (!this.daten.aktiveTage.includes(h)) this.daten.aktiveTage.push(h);
    this.daten.tagesUebungen[h] = (this.daten.tagesUebungen[h] || 0) + (anzahlUebungen || 0);
    this.sichern();
  },

  istHeuteAktiv() {
    return this.daten.aktiveTage.includes(this.heute());
  },

  /* ---------------- Einstellungen ---------------- */

  einstellung(name, wert) {
    if (wert === undefined) return this.daten.einstellungen[name];
    this.daten.einstellungen[name] = wert;
    this.sichern();
    return wert;
  },

  /* ---------------- Sicherung ---------------- */

  /** Fortschritt als Datei herunterladen. */
  exportieren() {
    const inhalt = JSON.stringify(this.daten, null, 2);
    const blob = new Blob([inhalt], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `spanisch-fortschritt-${this.heute()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  },

  /** Eine zuvor gesicherte Datei wieder einspielen. */
  importieren(text) {
    const neu = JSON.parse(text);
    if (!neu || typeof neu !== 'object' || !neu.karten) {
      throw new Error('Das sieht nicht nach einer Sicherungsdatei dieser App aus.');
    }
    this.daten = { ...this.leer(), ...neu };
    this.daten.einstellungen = { ...this.leer().einstellungen, ...(neu.einstellungen || {}) };
    this.sichern();
  },

  /** Alles löschen und von vorn beginnen. */
  zuruecksetzen() {
    this.daten = this.leer();
    this.sichern();
  }
};
