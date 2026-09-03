/* Sammelbehälter für alle Lektionen.
   Die Dateien im Ordner data/ rufen LEKTIONEN.push({...}) auf und füllen
   diese Liste. Bewusst eine ganz normale globale Variable und keine
   ES-Module: so funktioniert die App auch, wenn du die index.html einfach
   per Doppelklick öffnest (bei Modulen und fetch() blockiert der Browser das). */

var LEKTIONEN = [];

var Daten = {
  /** Alle Lektionen nach Tagnummer sortiert. */
  alle() {
    return LEKTIONEN.slice().sort((a, b) => a.tag - b.tag);
  },

  /** Eine bestimmte Lektion holen, z. B. Daten.lektion(12). */
  lektion(tag) {
    return LEKTIONEN.find(l => l.tag === tag) || null;
  },

  /** Wie viele Tage gibt es insgesamt? */
  anzahlTage() {
    return LEKTIONEN.length;
  },

  /** Alle Vokabeln aller Lektionen als eine flache Liste. */
  alleVokabeln() {
    return this.alle().flatMap(l => (l.vokabeln || []).map(v => ({ ...v, tag: l.tag, art: 'vokabel' })));
  },

  /** Alle Sätze aller Lektionen als eine flache Liste. */
  alleSaetze() {
    return this.alle().flatMap(l => (l.saetze || []).map(s => ({ ...s, tag: l.tag, art: 'satz' })));
  },

  /** Eine einzelne Karte (Vokabel oder Satz) über ihre id finden.
      Wird von der Wiederholung und der Historie gebraucht. */
  karteNachId(id) {
    if (this._index) return this._index[id] || null;
    // Beim ersten Aufruf ein Nachschlagewerk aufbauen (einmalig, dann schnell)
    this._index = {};
    for (const l of LEKTIONEN) {
      for (const v of (l.vokabeln || [])) this._index[v.id] = { ...v, tag: l.tag, art: 'vokabel' };
      for (const s of (l.saetze  || [])) this._index[s.id] = { ...s, tag: l.tag, art: 'satz' };
      for (const u of ((l.grammatik && l.grammatik.uebungen) || [])) {
        this._index[u.id] = { ...u, tag: l.tag, art: 'grammatik', thema: l.grammatik.titel };
      }
    }
    return this._index[id] || null;
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
