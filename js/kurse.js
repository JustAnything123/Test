/* Kursverwaltung — die App kann mehrere Sprachkurse enthalten.
   Jeder Kurs bringt mit: seine Lektionen, seine Zielsprache (für die
   Sprachausgabe), seine Sonderzeichen (für die Tastenreihe) und die
   Sprache, in der die Oberfläche erscheint.

   Wichtig: Der Fortschritt wird pro Kurs getrennt gespeichert. Du kannst
   also parallel Spanisch lernen und jemand anderes Deutsch, ohne dass sich
   die Lernstände in die Quere kommen. */

var KURSE = {};

var Kurse = {

  /** Einen Kurs anmelden. Wird von den Dateien in js/kurs-*.js aufgerufen. */
  definieren(def) {
    KURSE[def.id] = Object.assign({ lektionen: [], _index: null }, def);
  },

  /** Alle Kurse in der Reihenfolge, in der sie angemeldet wurden. */
  alle() {
    return Object.values(KURSE).sort((a, b) => (a.reihenfolge || 99) - (b.reihenfolge || 99));
  },

  hat(id) { return !!KURSE[id]; },

  /** Der Kurs, an dem gerade gelernt wird. */
  aktiv() {
    const id = Speicher.daten.aktiverKurs;
    return KURSE[id] || this.alle()[0] || null;
  },

  aktiveId() {
    const k = this.aktiv();
    return k ? k.id : null;
  },

  /** Kurs wechseln. Der Fortschritt des alten Kurses bleibt unberührt. */
  wechseln(id) {
    if (!KURSE[id]) return false;
    Speicher.daten.aktiverKurs = id;
    Speicher.sichern();
    return true;
  },

  /** Wie weit ist ein Kurs? Für die Kachel auf der Auswahlseite. */
  stand(id) {
    const kurs = KURSE[id];
    if (!kurs) return null;
    const f = Speicher.fortschritt(id);
    const karten = Object.values(f.karten || {});
    return {
      tag: f.aktuellerTag || 1,
      tageGesamt: kurs.lektionen.length,
      aktiveTage: (f.aktiveTage || []).length,
      gelernt: karten.filter(k => k.gesehen && k.stufe >= SRS.GELERNT_AB_STUFE).length,
      begonnen: karten.length > 0
    };
  }
};

/* ---------------------------------------------------------------------------
   Diese Funktion rufen die Dateien im Ordner data/ auf, um eine Lektion
   bei ihrem Kurs anzumelden. Beispiel:
       LEKTION('es-419', { tag: 1, thema: '...', ... });
   Der Kurs muss vorher definiert sein — deshalb stehen die Kursdateien in
   der index.html vor den Datendateien.
   --------------------------------------------------------------------------- */
function LEKTION(kursId, lektion) {
  if (!KURSE[kursId]) {
    console.warn('Unbekannter Kurs: ' + kursId + ' (Lektion Tag ' + lektion.tag + ' verworfen)');
    return;
  }
  KURSE[kursId].lektionen.push(lektion);
  KURSE[kursId]._index = null;         // Nachschlagewerk verwerfen, wird neu gebaut
}
