/* Speicher — alles, was deinen Fortschritt betrifft.
   Gespeichert wird im "localStorage" des Browsers: ein kleiner Textspeicher,
   den jede Webseite für sich hat. Er überlebt das Schließen der App, geht aber
   verloren, wenn du die Browserdaten löschst. Deshalb gibt es unten
   Export und Import als Sicherung.

   Seit Version 2 hat jeder Kurs seinen eigenen Fortschritt. Ein alter
   Einzelkurs-Stand wird beim ersten Start automatisch übernommen. */

var Speicher = {
  SCHLUESSEL: 'vamos_v2',
  SCHLUESSEL_ALT: 'spanisch_v1',      // Stand vor der Mehrsprachigkeit

  /** So sieht ein frischer Gesamtstand aus. */
  leer() {
    return {
      version: 2,
      aktiverKurs: null,               // null = Kursauswahl beim Start zeigen
      kurse: {},                       // { 'es-es': { …Fortschritt… } }
      einstellungen: { ton: true, thema: 'auto', tagesziel: 25 }
    };
  },

  /** So sieht der Fortschritt eines einzelnen Kurses aus.
      kursId (freiwillig): merkt sich den Datenstand des Kurses, siehe
      datenStandAngleichen(). */
  leererKurs(kursId) {
    return {
      datenStand: this.aktuellerDatenStand(kursId),
      aktuellerTag: 1,
      aktiveTage: [],                  // ["2026-09-09", …]
      tagesUebungen: {},               // { "2026-09-09": 34 } → für die Heatmap
      karten: {}                       // { "v0011": { stufe, faellig, … } }
    };
  },

  daten: null,

  /** Beim App-Start einmal aufrufen. */
  laden() {
    try {
      const roh = localStorage.getItem(this.SCHLUESSEL);
      if (roh) {
        this.daten = Object.assign(this.leer(), JSON.parse(roh));
      } else {
        this.daten = this.leer();
        this.altenStandUebernehmen();
      }
      this.daten.einstellungen = Object.assign(this.leer().einstellungen, this.daten.einstellungen || {});
      if (!this.daten.kurse) this.daten.kurse = {};
      this.datenStandAngleichen();
    } catch (e) {
      console.warn('Fortschritt konnte nicht gelesen werden, starte neu:', e);
      this.daten = this.leer();
    }
    return this.daten;
  },

  /** Einmalige Übernahme des Fortschritts aus der Einkurs-Version.
      Der alte Stand war immer Spanisch (Spanien), also landet er dort. */
  altenStandUebernehmen() {
    try {
      const alt = localStorage.getItem(this.SCHLUESSEL_ALT);
      if (!alt) return;
      const a = JSON.parse(alt);
      if (!a || !a.karten) return;

      this.daten.kurse['es-es'] = {
        aktuellerTag:  a.aktuellerTag  || 1,
        aktiveTage:    a.aktiveTage    || [],
        tagesUebungen: a.tagesUebungen || {},
        karten:        a.karten        || {}
      };
      this.daten.aktiverKurs = 'es-es';
      if (a.einstellungen) this.daten.einstellungen = Object.assign(this.daten.einstellungen, a.einstellungen);
      this.sichern();
      console.info('Bisheriger Lernstand in den Kurs „Spanisch (Spanien)" übernommen.');
    } catch (e) {
      console.warn('Alter Stand konnte nicht übernommen werden:', e);
    }
  },

  /* ---------------- Kurse, die nach vorne wachsen ----------------

     Manchmal kommt ein Kurs vorne dazu, z. B. ein A1-Block vor den
     bisherigen Tagen. Dann stehen die alten Lektionen unter neuen
     Tagesnummern: Aus dem alten Tag 20 wird Tag 35. Ein laufender
     Lernstand muss mitwandern, sonst landete man mitten im A1-Block.

     Dafür hat jeder Kurs in js/kurs-definitionen.js einen "datenStand" und
     eine Liste "verschiebungen": { 2: 15 } heißt "beim Wechsel auf Stand 2
     sind 15 Tage vorne dazugekommen". Jeder Lernstand merkt sich, für
     welchen Stand er angelegt wurde. Ist er älter, wird er hier angepasst —
     aber nur, wenn man den Kurs schon begonnen hatte. Wer noch nicht
     angefangen hat, beginnt ganz normal bei Tag 1.

     Die Vokabeln behalten dabei ihre IDs, also auch ihren Lernstand. */

  /** Der aktuelle Datenstand eines Kurses (1, wenn er keinen angibt). */
  aktuellerDatenStand(kursId) {
    const kurs = kursId && typeof KURSE !== 'undefined' ? KURSE[kursId] : null;
    return (kurs && kurs.datenStand) || 1;
  },

  /** Alle Lernstände auf den Datenstand ihres Kurses bringen.
      Gibt true zurück, wenn etwas geändert wurde. */
  datenStandAngleichen() {
    if (typeof KURSE === 'undefined' || !this.daten || !this.daten.kurse) return false;
    let geaendert = false;
    for (const id of Object.keys(this.daten.kurse)) {
      const kurs = KURSE[id];
      const f = this.daten.kurse[id];
      if (!kurs || !f) continue;                        // z. B. Kurs in der Ablage
      const ziel = kurs.datenStand || 1;
      let stand = f.datenStand || 1;                    // ohne Angabe: Stand 1
      if (stand >= ziel) continue;
      const begonnen = (f.aktuellerTag || 1) > 1 || Object.keys(f.karten || {}).length > 0;
      while (stand < ziel) {
        stand++;
        const dazu = (kurs.verschiebungen || {})[stand] || 0;
        if (begonnen) f.aktuellerTag = (f.aktuellerTag || 1) + dazu;
      }
      f.datenStand = ziel;
      geaendert = true;
    }
    if (geaendert) this.sichern();
    return geaendert;
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

  /* ---------------- Fortschritt eines Kurses ---------------- */

  /** Der Fortschritt eines Kurses. Ohne Angabe: der gerade aktive Kurs.
      Legt den Eintrag an, falls es ihn noch nicht gibt. */
  fortschritt(kursId) {
    const id = kursId || this.daten.aktiverKurs;
    if (!id) return this.leererKurs();                 // kein Kurs gewählt
    if (!this.daten.kurse[id]) this.daten.kurse[id] = this.leererKurs(id);
    return this.daten.kurse[id];
  },

  /* ---------------- Karten (Vokabeln, Sätze, Grammatikübungen) ---------------- */

  /** Den Lernstand einer Karte holen — legt ihn an, falls noch nicht vorhanden. */
  karte(id) {
    const k = this.fortschritt().karten;
    if (!k[id]) {
      k[id] = {
        stufe: 0,
        faellig: 0,          // 0 = noch nie gelernt
        richtig: 0,
        falsch: 0,
        fehlerSerie: 0,      // Fehler direkt hintereinander
        richtigSerie: 0,     // Treffer hintereinander (für die Leech-Befreiung)
        leech: false,
        gesehen: false,
        historie: []         // die letzten 10 Antworten
      };
    }
    return k[id];
  },

  /** Gibt es zu dieser Karte schon einen Lernstand? (ohne einen anzulegen) */
  hatKarte(id) {
    return Object.prototype.hasOwnProperty.call(this.fortschritt().karten, id);
  },

  /* ---------------- Tage ---------------- */

  /** Heutiges Datum als "2026-09-09" — bewusst in Ortszeit, nicht UTC,
      damit ein Lernabend um 23:00 nicht schon als "morgen" zählt. */
  heute() {
    const d = new Date();
    const p = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  },

  /** Heute als aktiven Tag des laufenden Kurses vermerken. */
  tagAktiv(anzahlUebungen) {
    const f = this.fortschritt();
    const h = this.heute();
    if (!f.aktiveTage.includes(h)) f.aktiveTage.push(h);
    f.tagesUebungen[h] = (f.tagesUebungen[h] || 0) + (anzahlUebungen || 0);
    this.sichern();
  },

  istHeuteAktiv() {
    return this.fortschritt().aktiveTage.includes(this.heute());
  },

  /* ---------------- Einstellungen (kursübergreifend) ---------------- */

  einstellung(name, wert) {
    if (wert === undefined) return this.daten.einstellungen[name];
    this.daten.einstellungen[name] = wert;
    this.sichern();
    return wert;
  },

  /* ---------------- Sicherung ---------------- */

  /** Gesamten Fortschritt (alle Kurse) als Datei herunterladen. */
  exportieren() {
    const inhalt = JSON.stringify(this.daten, null, 2);
    const blob = new Blob([inhalt], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lernfortschritt-${this.heute()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  },

  /** Eine zuvor gesicherte Datei wieder einspielen.
      Versteht sowohl das neue Format als auch eine alte Einzelkurs-Sicherung. */
  importieren(text) {
    const neu = JSON.parse(text);
    if (!neu || typeof neu !== 'object') {
      throw new Error('Das ist keine gültige Sicherungsdatei.');
    }

    if (neu.kurse) {                                    // neues Format
      this.daten = Object.assign(this.leer(), neu);
      this.daten.einstellungen = Object.assign(this.leer().einstellungen, neu.einstellungen || {});
    } else if (neu.karten) {                            // alte Einzelkurs-Sicherung
      this.daten = this.leer();
      this.daten.kurse['es-es'] = {
        aktuellerTag:  neu.aktuellerTag  || 1,
        aktiveTage:    neu.aktiveTage    || [],
        tagesUebungen: neu.tagesUebungen || {},
        karten:        neu.karten        || {}
      };
      this.daten.aktiverKurs = 'es-es';
      this.daten.einstellungen = Object.assign(this.daten.einstellungen, neu.einstellungen || {});
    } else {
      throw new Error('Das sieht nicht nach einer Sicherungsdatei dieser App aus.');
    }
    // Eine ältere Sicherung kennt neue Tage vorne im Kurs noch nicht
    this.datenStandAngleichen();
    this.sichern();
  },

  /** Nur den laufenden Kurs zurücksetzen. */
  kursZuruecksetzen(kursId) {
    const id = kursId || this.daten.aktiverKurs;
    if (id) this.daten.kurse[id] = this.leererKurs(id);
    this.sichern();
  },

  /** Alles löschen und von vorn beginnen. */
  zuruecksetzen() {
    const aktiv = this.daten ? this.daten.aktiverKurs : null;
    this.daten = this.leer();
    this.daten.aktiverKurs = aktiv;
    this.sichern();
  }
};
