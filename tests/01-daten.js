/* Prueft die Lerndaten aller Kurse auf Vollstaendigkeit und Konsistenz. */
const fs   = require('fs');
const path = require('path');
const U    = require('./umgebung');
global.KURSE = {};
global.Kurse = { definieren(d) { KURSE[d.id] = Object.assign({ lektionen: [] }, d); } };
global.LEKTION = (k, l) => { if (KURSE[k]) KURSE[k].lektionen.push(l); else console.log('Unbekannter Kurs: ' + k); };
global.PRUEFUNGEN = {};
global.PRUEFUNG = (k, d) => { (PRUEFUNGEN[k] = PRUEFUNGEN[k] || []).push(d); };

eval(U.quelle('js/kurs-definitionen.js'));
const datenWurzel = path.join(U.PROJEKT, 'data');
for (const ordner of fs.readdirSync(datenWurzel)) {
  for (const f of fs.readdirSync(path.join(datenWurzel, ordner)).sort()) {
    eval(fs.readFileSync(path.join(datenWurzel, ordner, f), 'utf8'));
  }
}

let fehlerGesamt = 0;
for (const kurs of Object.values(KURSE)) {
  const L = kurs.lektionen.slice().sort((a, b) => a.tag - b.tag);
  if (!L.length) { console.log(`\n${kurs.id}: noch keine Lektionen`); continue; }

  const ids = new Set(), tage = new Set(), p = [];
  let v = 0, s = 0, g = 0;
  for (const l of L) {
    if (tage.has(l.tag)) p.push(`Tag ${l.tag} doppelt`);
    tage.add(l.tag);
    if (!l.thema || !l.niveau) p.push(`Tag ${l.tag}: thema/niveau fehlt`);
    const vok = l.vokabeln || [], sae = l.saetze || [];
    const u = (l.grammatik && l.grammatik.uebungen) || [];
    if (vok.length !== 10) p.push(`Tag ${l.tag}: ${vok.length} Vokabeln statt 10`);
    if (sae.length !== 5)  p.push(`Tag ${l.tag}: ${sae.length} Sätze statt 5`);
    if (!l.grammatik)      p.push(`Tag ${l.tag}: keine Grammatik`);
    // Mindestens 5 — einzelne Tage duerfen mehr haben, wenn der Stoff es hergibt
    if (u.length < 5)      p.push(`Tag ${l.tag}: nur ${u.length} Übungen, mindestens 5 erwartet`);
    v += vok.length; s += sae.length; g += u.length;

    for (const x of [...vok, ...sae, ...u]) {
      if (ids.has(x.id)) p.push(`ID doppelt: ${x.id}`);
      ids.add(x.id);
    }
    for (const x of [...vok, ...sae]) {
      if (!x.es || !x.de) p.push(`${x.id}: es/de fehlt`);
    }
    for (const x of vok) {
      if (!x.wortart) p.push(`${x.id}: wortart fehlt`);
      if (x.beispiel && !x.beispielUe) p.push(`${x.id}: Übersetzung des Beispiels fehlt`);
    }
    for (const x of u) {
      if (!x.satz || !x.satz.includes('___')) p.push(`${x.id}: keine Lücke ___`);
      // Die Anzeige teilt den Satz am ___ und zeigt nur die ersten beiden Teile.
      // Bei zwei Lücken fiele alles nach der zweiten weg.
      else if (x.satz.split('___').length - 1 > 1)
        p.push(`${x.id}: ${x.satz.split('___').length - 1} Lücken — die Anzeige kann nur eine`);
      if (!x.loesung) p.push(`${x.id}: keine Lösung`);
      if (x.tipps && !x.tipps.some(t => t.toLowerCase() === String(x.loesung).toLowerCase()))
        p.push(`${x.id}: Lösung "${x.loesung}" fehlt in den Tipps`);
    }
  }
  const max = Math.max(...tage);
  const fehlt = [];
  for (let i = 1; i <= max; i++) if (!tage.has(i)) fehlt.push(i);
  if (fehlt.length) p.push('Fehlende Tage: ' + fehlt.join(','));

  console.log(`\n=== ${kurs.id} — ${kurs.nameUi} ===`);
  console.log(`  ${L.length} Lektionen · ${v} Vokabeln · ${s} Sätze · ${g} Grammatikübungen · ${ids.size} Karten`);
  if (p.length) { console.log('  PROBLEME:'); p.forEach(x => console.log('    ' + x)); fehlerGesamt += p.length; }
  else console.log('  Keine Probleme.');
}
/* ------------------------------------------------------------------
   Prüfungen.

   Hier ist die Prüfung strenger als bei den Lektionen, weil eine Prüfung
   endgültig bewertet: Eine Frage, deren Lösung gar nicht unter den
   angebotenen Antworten steht, wäre nicht schwer — sie wäre unlösbar.
   ------------------------------------------------------------------ */
const alleFrageIds = new Set();
for (const [kursId, pruefungen] of Object.entries(PRUEFUNGEN)) {
  for (const def of pruefungen) {
    const p = [];
    if (!KURSE[kursId]) p.push(`gehört zu keinem Kurs: ${kursId}`);
    for (const feld of ['id', 'nachTag', 'niveau', 'name', 'vorbild']) {
      if (def[feld] === undefined) p.push(`Feld ${feld} fehlt`);
    }
    const lektionen = KURSE[kursId] ? KURSE[kursId].lektionen.length : 0;
    if (def.nachTag > lektionen) p.push(`nachTag ${def.nachTag} liegt hinter dem letzten Tag (${lektionen})`);

    let fragen = 0, auto = 0;
    for (const teil of def.teile || []) {
      if (!teil.name) p.push(`Teil ${teil.id}: Name fehlt`);
      for (const a of teil.aufgaben || []) {
        if (!a.anweisung) p.push(`${a.id}: Arbeitsanweisung fehlt`);
        if (a.art === 'hoeren' && !a.audio) p.push(`${a.id}: Hörtext fehlt`);
        if (a.art === 'baustein') {
          const luecken = (a.text.match(/\[\d+\]/g) || []).length;
          if (luecken !== a.fragen.length)
            p.push(`${a.id}: ${luecken} Lücken im Text, aber ${a.fragen.length} Fragen`);
        }
        if (a.art === 'zuordnen' && (!a.optionen || a.optionen.length < a.fragen.length))
          p.push(`${a.id}: weniger Anzeigen als Zuordnungen`);

        for (const f of a.fragen || []) {
          fragen++;
          if (!f.id) { p.push(`${a.id}: Frage ohne id`); continue; }
          if (alleFrageIds.has(f.id)) p.push(`${f.id}: doppelte Frage-ID`);
          alleFrageIds.add(f.id);

          if (a.art === 'schreiben') {
            if (!f.auftrag)   p.push(`${f.id}: Auftrag fehlt`);
            if (!f.kriterien || !f.kriterien.length) p.push(`${f.id}: keine Bewertungskriterien`);
            if (!f.muster)    p.push(`${f.id}: keine Musterlösung`);
            continue;
          }

          auto++;
          if (!f.text)    p.push(`${f.id}: Fragetext fehlt`);
          if (!f.loesung) { p.push(`${f.id}: keine Lösung`); continue; }

          // Wo stehen die zur Auswahl angebotenen Antworten?
          const optionen = f.optionen || (a.art === 'zuordnen' ? a.optionen : null);
          if (optionen) {
            const werte = optionen.map(o => String(o.wert));
            if (new Set(werte).size !== werte.length) p.push(`${f.id}: doppelter Optionsschlüssel`);
            if (!werte.includes(String(f.loesung)))
              p.push(`${f.id}: Lösung "${f.loesung}" steht nicht unter den Optionen (${werte.join(',')})`);
          } else if (!['r', 'f'].includes(String(f.loesung))) {
            p.push(`${f.id}: bei richtig/falsch muss die Lösung "r" oder "f" sein, nicht "${f.loesung}"`);
          }
        }
      }
    }

    console.log(`\n=== Prüfung ${def.id} (${kursId}) ===`);
    console.log(`  ${def.teile.length} Teile · ${fragen} Fragen · ${auto} automatisch bewertet · bestanden ab ${def.bestehen || 60}%`);
    if (p.length) { console.log('  PROBLEME:'); p.forEach(x => console.log('    ' + x)); fehlerGesamt += p.length; }
    else console.log('  Keine Probleme.');
  }
}

console.log(fehlerGesamt ? `\n${fehlerGesamt} Probleme insgesamt` : '\nAlle Kurse und Prüfungen in Ordnung.');
process.exit(fehlerGesamt ? 1 : 0);
