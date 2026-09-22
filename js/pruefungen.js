/* Prüfungen — Zwischenstopps im Kursverlauf.

   Eine Prüfung ist ein fester Satz Aufgaben, der an einem bestimmten Tag im
   Kurs freigeschaltet wird. Sie läuft anders als eine Lektion:

     · keine Tipps, keine Hinweise, keine Rückmeldung zwischendurch
     · die Antworten werden gesammelt und erst am Ende ausgewertet
     · das Ergebnis wird in Punkten je Teil angegeben, mit Bestehensgrenze

   Ganz bewusst bewertet die App nur, was sie zuverlässig bewerten KANN:
   Ankreuzen, Zuordnen und Lücken mit vorgegebener Auswahl. Freies Schreiben
   hat keine abzählbare Menge richtiger Antworten — solche Aufgaben werden
   gestellt und gespeichert, aber nicht automatisch benotet. Sie gehen später
   über die Teilen-Funktion an einen Menschen.

   Eine Prüfung meldet sich über PRUEFUNG('kurs-id', {…}) an, genau wie eine
   Lektion über LEKTION(). */

var PRUEFUNGEN = {};

/* Wird von den Dateien unter data/pruefungen/ aufgerufen. */
function PRUEFUNG(kursId, def) {
  (PRUEFUNGEN[kursId] = PRUEFUNGEN[kursId] || []).push(def);
}

var Pruefungen = {

  /* ---- Nachschlagen ---------------------------------------------------- */

  /** Alle Prüfungen eines Kurses, nach Tag sortiert. */
  fuerKurs(kursId) {
    const id = kursId || Kurse.aktiveId();
    return (PRUEFUNGEN[id] || []).slice().sort((a, b) => a.nachTag - b.nachTag);
  },

  nachId(pruefungId, kursId) {
    return this.fuerKurs(kursId).find(p => p.id === pruefungId) || null;
  },

  /** Die Prüfung, die beim aktuellen Stand ansteht — oder null.
      Ansteht heißt: Der Tag ist erreicht und sie wurde noch nicht bestanden. */
  offen(kursId) {
    const tag = Speicher.fortschritt(kursId).aktuellerTag;
    return this.fuerKurs(kursId).find(p => tag > p.nachTag && !this.bestanden(p.id, kursId)) || null;
  },

  /** Die nächste Prüfung, die noch NICHT freigeschaltet ist.
      Damit kann die App zeigen, dass überhaupt eine kommt — sonst wüsste
      niemand, dass es Prüfungen gibt, bevor er den Tag erreicht. */
  naechste(kursId) {
    const tag = Speicher.fortschritt(kursId).aktuellerTag;
    return this.fuerKurs(kursId).find(p => tag <= p.nachTag) || null;
  },

  /** Alle Prüfungen, die der Lernstand schon freigeschaltet hat. */
  freigeschaltet(kursId) {
    const tag = Speicher.fortschritt(kursId).aktuellerTag;
    return this.fuerKurs(kursId).filter(p => tag > p.nachTag);
  },

  /* ---- Aufgaben einer Prüfung flach auflisten -------------------------- */

  /** Alle Aufgaben in der Reihenfolge, in der sie drankommen.
      Die Prüfung blättert aufgabenweise, nicht frageweise: Ein Lesetext mit
      fünf Fragen gehört auf eine Seite, sonst müsste man den Text fünfmal
      lesen. Jede Aufgabe weiß, zu welchem Teil sie gehört. */
  aufgaben(def) {
    const raus = [];
    for (const teil of def.teile) {
      teil.aufgaben.forEach((aufgabe, i) => {
        raus.push({ teil, aufgabe, ersteImTeil: i === 0 });
      });
    }
    return raus;
  },

  /** Alle Einzelfragen in der Reihenfolge, in der sie drankommen.
      Jede bekommt ihren Teil und ihre Aufgabe mitgegeben, damit die Anzeige
      weiß, welcher Text darüber steht. */
  fragen(def) {
    const raus = [];
    for (const teil of def.teile) {
      for (const aufgabe of teil.aufgaben) {
        for (const frage of aufgabe.fragen) {
          raus.push({ teil, aufgabe, frage });
        }
      }
    }
    return raus;
  },

  /** Zählt nur die Fragen, die automatisch bewertet werden können. */
  maxPunkte(def) {
    return this.fragen(def).filter(f => f.aufgabe.art !== 'schreiben').length;
  },

  /** Wie viele Punkte hat ein einzelner Teil? */
  maxPunkteTeil(teil) {
    let n = 0;
    for (const a of teil.aufgaben) if (a.art !== 'schreiben') n += a.fragen.length;
    return n;
  },

  /* ---- Auswerten ------------------------------------------------------- */

  /** Ist diese Antwort richtig?
      Alle automatisch bewertbaren Typen laufen auf denselben Vergleich
      hinaus: Die Antwort ist der Schlüssel einer Option, die Lösung nennt
      denselben Schlüssel. Kein Textvergleich, keine Auslegung. */
  istRichtig(frage, antwort) {
    if (antwort === undefined || antwort === null || antwort === '') return false;
    return String(antwort) === String(frage.loesung);
  },

  /** Kurze, gut vorlesbare Kennung für einen Versuch.
      Ohne I, O, 0 und 1, damit man sie notfalls abtippen kann, ohne sich zu
      vertun. */
  neueId() {
    const zeichen = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let s = '';
    for (let i = 0; i < 6; i++) s += zeichen[Math.floor(Math.random() * zeichen.length)];
    return s;
  },

  /** Einen Versuch auswerten.
      antworten: { frageId: gegebeneAntwort }
      Ergebnis enthält die Punkte je Teil, die Gesamtpunktzahl, ob bestanden,
      und die Liste der offenen (menschlich zu bewertenden) Aufgaben. */
  auswerten(def, antworten) {
    const teile = [];
    let punkte = 0, max = 0;
    const offen = [];

    for (const teil of def.teile) {
      let tPunkte = 0;
      const tMax = this.maxPunkteTeil(teil);
      const details = [];

      for (const aufgabe of teil.aufgaben) {
        for (const frage of aufgabe.fragen) {
          if (aufgabe.art === 'schreiben') {
            offen.push({
              teilId: teil.id, aufgabeId: aufgabe.id, frageId: frage.id,
              auftrag: frage.auftrag, kriterien: frage.kriterien || [],
              muster: frage.muster || '',
              antwort: antworten[frage.id] || ''
            });
            continue;
          }
          const richtig = this.istRichtig(frage, antworten[frage.id]);
          if (richtig) tPunkte++;
          details.push({
            frageId: frage.id,
            richtig,
            gegeben: antworten[frage.id] === undefined ? null : antworten[frage.id],
            loesung: frage.loesung
          });
        }
      }

      punkte += tPunkte; max += tMax;
      teile.push({
        id: teil.id, name: teil.name, art: teil.art,
        punkte: tPunkte, max: tMax,
        prozent: tMax ? Math.round(tPunkte / tMax * 100) : null,
        details
      });
    }

    const grenze  = def.bestehen || 60;
    const prozent = max ? Math.round(punkte / max * 100) : 0;

    return {
      id: this.neueId(),
      pruefungId: def.id,
      datum: Speicher.heute(),
      punkte, max, prozent,
      grenze,
      bestanden: prozent >= grenze,
      teile,
      offen
    };
  },

  /* ---- Ergebnisse speichern ------------------------------------------- */

  /** Der Ergebnisspeicher eines Kurses. Wird beim ersten Zugriff angelegt,
      damit ältere Sicherungsdateien ohne dieses Feld weiterhin passen. */
  _lager(kursId) {
    const f = Speicher.fortschritt(kursId);
    if (!f.pruefungen) f.pruefungen = {};
    return f.pruefungen;
  },

  /** Einen Versuch ablegen. Frühere Versuche bleiben erhalten. */
  ergebnisSpeichern(ergebnis, kursId) {
    const lager = this._lager(kursId);
    const eintrag = lager[ergebnis.pruefungId] || { versuche: [] };
    eintrag.versuche.push(ergebnis);
    lager[ergebnis.pruefungId] = eintrag;
    Speicher.sichern();
    return ergebnis;
  },

  /** Alle Versuche zu einer Prüfung, ältester zuerst. */
  versuche(pruefungId, kursId) {
    const e = this._lager(kursId)[pruefungId];
    return e ? e.versuche : [];
  },

  /** Der letzte Versuch — oder null. */
  letzterVersuch(pruefungId, kursId) {
    const v = this.versuche(pruefungId, kursId);
    return v.length ? v[v.length - 1] : null;
  },

  /** Das beste je erreichte Ergebnis in Prozent. */
  bestesErgebnis(pruefungId, kursId) {
    const v = this.versuche(pruefungId, kursId);
    return v.length ? Math.max(...v.map(x => x.prozent)) : null;
  },

  bestanden(pruefungId, kursId) {
    return this.versuche(pruefungId, kursId).some(v => v.bestanden);
  },

  /* ---- Bewertung durch einen Menschen ---------------------------------- */

  /** Einen Versuch über seine Kennung finden — in allen Kursen und allen
      Prüfungen. Die zurückkommende Bewertung nennt nur diese Kennung. */
  versuchNachId(versuchId) {
    for (const kursId of Object.keys(Speicher.daten.kurse || {})) {
      const lager = (Speicher.fortschritt(kursId).pruefungen) || {};
      for (const pruefungId of Object.keys(lager)) {
        for (const v of lager[pruefungId].versuche || []) {
          if (v.id === versuchId) return { versuch: v, kursId, pruefungId };
        }
      }
    }
    return null;
  },

  /** Eine eingetroffene Bewertung beim richtigen Versuch ablegen.
      Gibt den Fundort zurück oder null, wenn die Kennung unbekannt ist —
      etwa weil die Bewertung auf einem anderen Gerät ankommt als dem, auf
      dem die Prüfung geschrieben wurde. */
  bewertungSpeichern(paket) {
    const fund = this.versuchNachId(paket.id);
    if (!fund) return null;

    const v = fund.versuch;
    if (!v.bewertungen) v.bewertungen = {};
    for (const eintrag of paket.b || []) {
      v.bewertungen[eintrag.fid] = {
        urteil:  eintrag.urteil,
        hinweis: eintrag.hinweis || '',
        von:     paket.von || '',
        datum:   paket.datum || Speicher.heute()
      };
    }
    Speicher.sichern();
    return fund;
  },

  /** Hat dieser Versuch offene Aufgaben, die noch niemand bewertet hat? */
  wartetAufBewertung(versuch) {
    if (!versuch.offen || !versuch.offen.length) return false;
    const b = versuch.bewertungen || {};
    return versuch.offen.some(o => !b[o.frageId]);
  },

  /** Alle Versuche mit offenen Aufgaben — egal ob schon verschickt oder
      noch nicht. Daraus wird der Hinweis auf dem Startbildschirm. */
  offeneBewertungen(kursId) {
    const raus = [];
    const lager = this._lager(kursId);
    for (const pruefungId of Object.keys(lager)) {
      for (const v of lager[pruefungId].versuche || []) {
        if (this.wartetAufBewertung(v)) raus.push(v);
      }
    }
    return raus;
  },

  /* ---- Hörverstehen: geht das auf diesem Gerät? ------------------------ */

  /** Ohne installierte Stimme kann der Hörteil nicht stattfinden. Dann würde
      er 0 Punkte geben, obwohl niemand etwas falsch gemacht hat. Deshalb
      wird er in dem Fall komplett übersprungen und zählt auch nicht mit. */
  ohneHoeren(def) {
    if (Sprache.kannHoeren()) return def;
    return Object.assign({}, def, {
      teile: def.teile.filter(t => t.art !== 'hoeren'),
      _hoerenFehlt: true
    });
  }
};
