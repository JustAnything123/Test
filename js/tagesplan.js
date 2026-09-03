/* Tagesplan — stellt zusammen, was du in dieser Sitzung machst.
   Die Reihenfolge folgt dem Aufbau von Memrise:
     1. Problemwörter  (Dinge, die du wiederholt falsch hattest)
     2. Fällige Wiederholungen
     3. Neue Vokabeln  (erst zeigen, dann abfragen)
     4. Sätze des Tages
     5. Grammatik: Erklärung lesen, dann anwenden

   Herauskommt eine einfache Liste von Aufgaben. Jede Aufgabe sieht so aus:
     { typ: 'mc', karte: {...}, richtung: 'es2de', phase: 'Wiederholung' } */

var Tagesplan = {

  PHASE: {
    problem:   'Problemwörter',
    wdh:       'Wiederholung',
    neu:       'Neue Wörter',
    satz:      'Sätze',
    grammatik: 'Grammatik'
  },

  /** Die Sitzung für heute bauen.
      modus: 'voll' (Tageslektion + Wiederholung) oder 'nurWdh' (nur Wiederholung). */
  bauen(modus) {
    const aufgaben = [];
    const ziel = Number(Speicher.einstellung('tagesziel')) || 25;
    const kannHoeren = Sprache.kannHoeren();

    /* ---- 1. Problemwörter: kommen IMMER dran, egal ob fällig ---- */
    const leeches = SRS.leeches().slice(0, 8);
    for (const id of leeches) {
      const k = Daten.karteNachId(id);
      if (!k) continue;
      aufgaben.push({
        typ: k.art === 'grammatik' ? 'luecke' : 'tippen',
        karte: k, richtung: 'de2es', phase: 'problem'
      });
    }

    /* ---- 2. Fällige Wiederholungen ---- */
    const platzWdh = Math.max(0, ziel - aufgaben.length);
    const faellige = SRS.faellige().filter(id => !leeches.includes(id)).slice(0, platzWdh);
    for (const id of faellige) {
      const k = Daten.karteNachId(id);
      if (!k) continue;
      if (k.art === 'grammatik') {
        aufgaben.push({ typ: 'luecke', karte: k, phase: 'wdh' });
      } else if (k.art === 'satz') {
        aufgaben.push({ typ: kannHoeren && Math.random() < 0.5 ? 'hoeren' : 'tapping', karte: k, phase: 'wdh' });
      } else {
        const typ = SRS.typFuerStufe(id, kannHoeren);
        aufgaben.push({
          typ,
          karte: k,
          richtung: typ === 'mc' ? (Math.random() < 0.5 ? 'es2de' : 'de2es') : 'de2es',
          phase: 'wdh'
        });
      }
    }

    if (modus === 'nurWdh') return aufgaben;

    /* ---- 3./4./5. Die Tageslektion ---- */
    const tag = Speicher.daten.aktuellerTag;
    const lektion = Daten.lektion(tag);
    if (!lektion) return aufgaben;          // alle 60 Tage durch → nur noch Wiederholung

    // Neue Vokabeln: erst ansehen, dann Multiple Choice, dann tippen.
    // Erst alle zeigen, dann abfragen — so wie ein Vokabelheft, das man
    // einmal durchliest, bevor man sich selbst abfragt.
    for (const v of lektion.vokabeln) {
      aufgaben.push({ typ: 'karte', karte: { ...v, art: 'vokabel' }, phase: 'neu' });
    }
    for (const v of lektion.vokabeln) {
      aufgaben.push({ typ: 'mc', karte: { ...v, art: 'vokabel' }, richtung: 'es2de', phase: 'neu' });
    }
    for (const v of lektion.vokabeln) {
      aufgaben.push({ typ: 'tippen', karte: { ...v, art: 'vokabel' }, richtung: 'de2es', phase: 'neu' });
    }

    // Sätze: Satzbau, ab dem zweiten Satz abwechselnd auch Hören
    lektion.saetze.forEach((s, i) => {
      const nutzeHoeren = kannHoeren && i % 2 === 1;
      aufgaben.push({ typ: nutzeHoeren ? 'hoeren' : 'tapping', karte: { ...s, art: 'satz' }, phase: 'satz' });
    });

    // Grammatik: erst die Erklärung, dann die Übungen dazu
    if (lektion.grammatik) {
      aufgaben.push({ typ: 'erklaerung', karte: lektion.grammatik, phase: 'grammatik' });
      for (const u of (lektion.grammatik.uebungen || [])) {
        aufgaben.push({ typ: 'luecke', karte: { ...u, art: 'grammatik' }, phase: 'grammatik' });
      }
    }

    return aufgaben;
  },

  /** Schnell-Wiederholung: kurzes Multiple-Choice-Quiz aus allem,
      was du schon einmal gesehen hast. Ohne Auswirkung auf den Streak,
      aber die Antworten zählen ganz normal für das Wiederholsystem. */
  speedRunde(anzahl) {
    const bekannt = Object.keys(Speicher.daten.karten)
      .filter(id => Speicher.daten.karten[id].gesehen);
    if (bekannt.length < 4) return [];

    const gemischt = Uebungen.mischen(bekannt).slice(0, anzahl || 20);
    return gemischt.map(id => {
      const k = Daten.karteNachId(id);
      if (!k) return null;
      if (k.art === 'grammatik') return { typ: 'luecke', karte: k, phase: 'wdh' };
      return {
        typ: 'mc', karte: k,
        richtung: Math.random() < 0.5 ? 'es2de' : 'de2es',
        phase: 'wdh'
      };
    }).filter(Boolean);
  },

  /** Kurzer Überblick für die Karte auf dem Startbildschirm. */
  vorschau() {
    const tag = Speicher.daten.aktuellerTag;
    const lektion = Daten.lektion(tag);
    return {
      tag,
      lektion,
      leeches:  SRS.leeches().length,
      faellige: SRS.faellige().length,
      neueVokabeln: lektion ? lektion.vokabeln.length : 0,
      neueSaetze:   lektion ? lektion.saetze.length : 0,
      grammatik:    lektion && lektion.grammatik ? lektion.grammatik.titel : null
    };
  }
};
