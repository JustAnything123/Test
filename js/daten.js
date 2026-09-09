/* Zugriff auf die Lektionen des gerade aktiven Kurses.
   Die Lektionen selbst liegen in den Dateien unter data/ und melden sich
   über LEKTION('kurs-id', {…}) bei ihrem Kurs an (siehe js/kurse.js).

   Bewusst ganz normale globale Objekte statt ES-Module: so funktioniert die
   App auch, wenn du die index.html einfach per Doppelklick öffnest — bei
   Modulen und fetch() blockiert der Browser das. */

var Daten = {

  /** Der Kurs, aus dem gerade gelesen wird. */
  kurs() {
    return Kurse.aktiv();
  },

  /** Alle Lektionen des aktiven Kurses nach Tagnummer sortiert. */
  alle() {
    const k = this.kurs();
    if (!k) return [];
    return k.lektionen.slice().sort((a, b) => a.tag - b.tag);
  },

  /** Eine bestimmte Lektion holen, z. B. Daten.lektion(12). */
  lektion(tag) {
    const k = this.kurs();
    if (!k) return null;
    return k.lektionen.find(l => l.tag === tag) || null;
  },

  /** Wie viele Tage hat der aktive Kurs? */
  anzahlTage() {
    const k = this.kurs();
    return k ? k.lektionen.length : 0;
  },

  /** Alle Vokabeln des Kurses als flache Liste. */
  alleVokabeln() {
    return this.alle().flatMap(l => (l.vokabeln || []).map(v => ({ ...v, tag: l.tag, art: 'vokabel' })));
  },

  /** Alle Sätze des Kurses als flache Liste. */
  alleSaetze() {
    return this.alle().flatMap(l => (l.saetze || []).map(s => ({ ...s, tag: l.tag, art: 'satz' })));
  },

  /** Eine einzelne Karte über ihre id finden.
      Beim ersten Aufruf wird pro Kurs ein Nachschlagewerk gebaut, danach
      geht es sehr schnell. */
  karteNachId(id) {
    const k = this.kurs();
    if (!k) return null;

    if (!k._index) {
      k._index = {};
      for (const l of k.lektionen) {
        for (const v of (l.vokabeln || [])) k._index[v.id] = { ...v, tag: l.tag, art: 'vokabel' };
        for (const s of (l.saetze  || [])) k._index[s.id] = { ...s, tag: l.tag, art: 'satz' };
        for (const u of ((l.grammatik && l.grammatik.uebungen) || [])) {
          k._index[u.id] = { ...u, tag: l.tag, art: 'grammatik', thema: l.grammatik.titel };
        }
      }
    }
    return k._index[id] || null;
  },

  /** Zufällige falsche Antworten für Multiple Choice besorgen.
      Bevorzugt Wörter derselben Wortart — das macht die Auswahl kniffliger
      und damit lehrreicher als völlig zusammenhanglose Optionen. */
  ablenker(karte, anzahl, feld) {
    const alle = karte.art === 'satz' ? this.alleSaetze() : this.alleVokabeln();
    const gleicheArt = alle.filter(k => k.id !== karte.id && k.wortart && k.wortart === karte.wortart);
    const rest       = alle.filter(k => k.id !== karte.id);
    const quelle     = gleicheArt.length >= anzahl ? gleicheArt : rest;

    const gemischt = quelle.slice();
    for (let i = gemischt.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gemischt[i], gemischt[j]] = [gemischt[j], gemischt[i]];
    }
    const raus = [];
    for (const k of gemischt) {
      const wert = k[feld];
      if (wert && wert !== karte[feld] && !raus.includes(wert)) raus.push(wert);
      if (raus.length === anzahl) break;
    }
    return raus;
  }
};
