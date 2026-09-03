/* SRS = "Spaced Repetition System" — verteiltes Wiederholen.
   Die Idee: Ein Wort, das du kannst, brauchst du seltener zu sehen.
   Ein Wort, das du falsch hast, dagegen sofort wieder.

   Die Intervall-Leiter ist 1:1 die von Memrise.
   Der "Leech"-Mechanismus (Problemwort) stammt von Anki. */

var SRS = {

  /* Stufe  0      1       2      3       4        5        6        7
     Zeit   4 Std  12 Std  1 Tag  6 Tage  12 Tage  48 Tage  96 Tage  180 Tage */
  INTERVALLE_MS: [
    4  * 3600e3,
    12 * 3600e3,
    1  * 86400e3,
    6  * 86400e3,
    12 * 86400e3,
    48 * 86400e3,
    96 * 86400e3,
    180 * 86400e3
  ],

  INTERVALL_TEXT: ['4 Std', '12 Std', '1 Tag', '6 Tage', '12 Tage', '48 Tage', '96 Tage', '6 Monate'],

  /** Ab so vielen Fehlern gilt ein Wort als Problemwort. */
  LEECH_GRENZE: 4,
  /** So oft muss ein Problemwort hintereinander sitzen, um wieder normal zu werden. */
  LEECH_BEFREIUNG: 3,
  /** Ab dieser Stufe zählt ein Wort im Zähler als "gelernt".
      Stufe 2 heißt: mindestens zweimal richtig, nächste Wiederholung erst in
      24 Stunden. Ein am selben Tag gelerntes Wort erreicht genau diese Stufe. */
  GELERNT_AB_STUFE: 2,

  /** Eine Antwort verbuchen.
      @param id       Karten-Id, z. B. "v0011"
      @param korrekt  true / false
      @param eingabe  optional: was du getippt hast (für die Historie)
      @returns { stufe, leechNeu, leechBefreit, naechsteWiederholung } */
  antwort(id, korrekt, eingabe) {
    const k = Speicher.karte(id);
    const warLeech = k.leech;
    k.gesehen = true;

    if (korrekt) {
      k.richtig++;
      k.richtigSerie++;
      k.fehlerSerie = 0;
      k.stufe = Math.min(k.stufe + 1, this.INTERVALLE_MS.length - 1);

      // Problemwort wieder freigeben, wenn es dreimal hintereinander saß
      if (k.leech && k.richtigSerie >= this.LEECH_BEFREIUNG) {
        k.leech = false;
        k.falsch = 0;          // sauberer Neustart, sonst rutscht es sofort zurück
      }
    } else {
      k.falsch++;
      k.fehlerSerie++;
      k.richtigSerie = 0;
      k.stufe = 0;             // ganz zurück auf 4 Stunden — wie bei Memrise
      if (k.falsch >= this.LEECH_GRENZE) k.leech = true;
    }

    k.faellig = Date.now() + this.INTERVALLE_MS[k.stufe];

    // Kurze Historie mitschreiben (die letzten 10 Antworten reichen)
    k.historie.push({ zeit: Date.now(), korrekt: !!korrekt, eingabe: eingabe || null });
    if (k.historie.length > 10) k.historie.shift();

    Speicher.sichern();

    return {
      stufe: k.stufe,
      leechNeu: !warLeech && k.leech,
      leechBefreit: warLeech && !k.leech,
      naechsteWiederholung: this.INTERVALL_TEXT[k.stufe]
    };
  },

  /** Ist diese Karte gerade zur Wiederholung fällig? */
  istFaellig(id) {
    if (!Speicher.hatKarte(id)) return false;
    const k = Speicher.daten.karten[id];
    return k.gesehen && k.faellig <= Date.now();
  },

  /** Alle fälligen Karten-Ids, die dringendsten zuerst. */
  faellige() {
    const jetzt = Date.now();
    return Object.entries(Speicher.daten.karten)
      .filter(([, k]) => k.gesehen && k.faellig <= jetzt)
      .sort((a, b) => a[1].faellig - b[1].faellig)
      .map(([id]) => id);
  },

  /** Alle Problemwörter. Die kommen in JEDER Session dran, egal ob fällig. */
  leeches() {
    return Object.entries(Speicher.daten.karten)
      .filter(([, k]) => k.leech)
      .sort((a, b) => b[1].falsch - a[1].falsch)
      .map(([id]) => id);
  },

  /** Anzahl Karten, die als "gelernt" zählen (Stufe 3 oder höher). */
  anzahlGelernt() {
    return Object.values(Speicher.daten.karten)
      .filter(k => k.gesehen && k.stufe >= this.GELERNT_AB_STUFE).length;
  },

  /** Anzahl Karten, die schon einmal dran waren (also "in Arbeit"). */
  anzahlInArbeit() {
    return Object.values(Speicher.daten.karten).filter(k => k.gesehen).length;
  },

  /** Welcher Übungstyp passt zur aktuellen Stufe?
      Leicht anfangen, dann anspruchsvoller — so macht es Memrise auch.
      Problemwörter werden immer getippt: nur so beweist du, dass du sie
      wirklich kannst und nicht nur aus vier Optionen richtig rätst. */
  typFuerStufe(id, kannHoeren) {
    const k = Speicher.hatKarte(id) ? Speicher.daten.karten[id] : null;
    if (k && k.leech) return 'tippen';
    const stufe = k ? k.stufe : 0;
    if (stufe <= 1) return 'mc';
    if (stufe <= 3) return 'tippen';
    // Ab Stufe 4 gelegentlich Hören einstreuen, falls eine spanische Stimme da ist
    if (kannHoeren && Math.random() < 0.4) return 'hoeren';
    return 'tippen';
  },

  /** Menschenlesbar: "in 3 Tagen", "jetzt fällig", ... */
  faelligText(id) {
    if (!Speicher.hatKarte(id)) return 'neu';
    const k = Speicher.daten.karten[id];
    if (!k.gesehen) return 'neu';
    const diff = k.faellig - Date.now();
    if (diff <= 0) return 'jetzt fällig';
    const std = Math.round(diff / 3600e3);
    if (std < 24) return `in ${std} Std`;
    const tage = Math.round(diff / 86400e3);
    if (tage < 31) return `in ${tage} Tg`;
    return `in ${Math.round(tage / 30)} Mon`;
  }
};
