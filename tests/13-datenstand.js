/* Prüft, dass ein Lernstand mitwandert, wenn vorne in einem Kurs neue Tage
   dazukommen (A1-Block, Oktober 2026).

   Deutsch im Beruf: 15 Tage vorne dazu. Aus dem alten Tag 20 wird Tag 35.
   Spanisch (Lateinamerika): 30 Tage vorne dazu. Aus Tag 20 wird Tag 50.
   Wer den Kurs noch nicht angefangen hatte, beginnt bei Tag 1 mit A1.
   Ein neuer Lernstand darf beim nächsten Laden NICHT verschoben werden. */
const U = require('./umgebung');
const URL = U.URL;
let fehler = 0;
const pruefe = (n, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (!ok) { fehler++; console.log(`  x ${n}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
  else console.log(`  + ${n}`);
};

/* Die Kurse, die vorne gewachsen sind: id, Tage dazu, Stand und das Thema
   des ALTEN Tags 20 — dort muss man nach dem Verschieben wieder landen. */
const FAELLE = [
  { kurs: 'de-beruf', dazu: 15, stand: 2, thema20: 'Check-out y factura' },
  { kurs: 'es-419',   dazu: 30, stand: 2, thema20: 'Eine Geschichte erzählen (2)' }
];

/* Ein Lernstand, wie ihn eine ältere Fassung gespeichert hätte (ohne datenStand). */
function alterStand(kurse) {
  return JSON.stringify({ version: 2, aktiverKurs: Object.keys(kurse)[0], kurse,
                          einstellungen: { ton: true, thema: 'auto', tagesziel: 25 } });
}

(async () => {
  const b = await U.browserStarten();
  const ctx = await b.newContext(Object.assign({ locale: 'de-DE' }, U.ANSICHT));
  const page = await ctx.newPage();
  const konsole = [];
  page.on('pageerror', e => konsole.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') konsole.push('CONSOLE: ' + m.text()); });
  await page.goto(URL, { waitUntil: 'networkidle' }); await page.waitForTimeout(300);

  for (const F of FAELLE) {
    console.log(`\n=== ${F.kurs}: ${F.dazu} Tage vorne dazu ===`);
    pruefe('Kurs kennt seinen Datenstand', await page.evaluate(k => KURSE[k].datenStand, F.kurs), F.stand);

    // 1. Mitten im Kurs: Tag 20, mit Karten
    await page.evaluate(({ k, roh }) => { localStorage.clear(); localStorage.setItem('vamos_v2', roh); }, {
      k: F.kurs,
      roh: alterStand({ [F.kurs]: { aktuellerTag: 20, aktiveTage: ['2026-09-01'], tagesUebungen: {},
        karten: { x1: { stufe: 2, faellig: 0, richtig: 3, falsch: 0, fehlerSerie: 0, richtigSerie: 3, leech: false, gesehen: true, historie: [] } } } })
    });
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(250);
    let f = await page.evaluate(k => Speicher.fortschritt(k), F.kurs);
    pruefe('alter Tag 20 wird zu Tag ' + (20 + F.dazu), f.aktuellerTag, 20 + F.dazu);
    pruefe('Karten bleiben erhalten', Object.keys(f.karten), ['x1']);
    pruefe('Datenstand vermerkt', f.datenStand, F.stand);
    pruefe('gespeichert, nicht nur im Speicher',
      await page.evaluate(k => JSON.parse(localStorage.getItem('vamos_v2')).kurse[k].aktuellerTag, F.kurs), 20 + F.dazu);
    pruefe('dieselbe Lektion wie vorher: ' + F.thema20,
      await page.evaluate(() => Daten.lektion(Speicher.fortschritt().aktuellerTag).thema), F.thema20);

    // 2. Zweimal laden darf nicht zweimal verschieben
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(250);
    pruefe('zweites Laden verschiebt nicht noch einmal',
      await page.evaluate(k => Speicher.fortschritt(k).aktuellerTag, F.kurs), 20 + F.dazu);

    // 3. Ganz durch (alter letzter Tag + 1) bleibt "ganz durch"
    const altLetzter = await page.evaluate(k => KURSE[k].lektionen.length, F.kurs) - F.dazu;
    await page.evaluate(({ k, roh }) => { localStorage.clear(); localStorage.setItem('vamos_v2', roh); }, {
      k: F.kurs, roh: alterStand({ [F.kurs]: { aktuellerTag: altLetzter + 1, aktiveTage: [], tagesUebungen: {}, karten: {} } })
    });
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(250);
    pruefe('wer fertig war, ist weiter fertig',
      await page.evaluate(k => Speicher.fortschritt(k).aktuellerTag > KURSE[k].lektionen.length, F.kurs), true);

    // 4. Nie angefangen: bleibt bei Tag 1 (= A1)
    await page.evaluate(({ k, roh }) => { localStorage.clear(); localStorage.setItem('vamos_v2', roh); }, {
      k: F.kurs, roh: alterStand({ [F.kurs]: { aktuellerTag: 1, aktiveTage: [], tagesUebungen: {}, karten: {} } })
    });
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(250);
    f = await page.evaluate(k => Speicher.fortschritt(k), F.kurs);
    pruefe('nicht begonnen: bleibt bei Tag 1', f.aktuellerTag, 1);
    pruefe('Tag 1 ist jetzt A1', await page.evaluate(() => Daten.lektion(1).niveau), 'A1');

    // 5. Neu angefangen nach dem Update: darf NICHT verschoben werden
    await page.evaluate(k => {
      localStorage.clear(); Speicher.laden(); Kurse.wechseln(k);
      const fs = Speicher.fortschritt(); fs.aktuellerTag = 3; Speicher.sichern();
    }, F.kurs);
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(250);
    f = await page.evaluate(k => Speicher.fortschritt(k), F.kurs);
    pruefe('neuer Lernstand trägt den aktuellen Datenstand', f.datenStand, F.stand);
    pruefe('und bleibt beim Neuladen auf Tag 3', f.aktuellerTag, 3);

    // 6. Kurs zurücksetzen: frischer Stand mit aktuellem Datenstand
    await page.evaluate(k => Speicher.kursZuruecksetzen(k), F.kurs);
    pruefe('nach dem Zurücksetzen: aktueller Datenstand',
      await page.evaluate(k => Speicher.fortschritt(k).datenStand, F.kurs), F.stand);

    // 7. Alte Sicherungsdatei einspielen: wird ebenfalls angepasst
    await page.evaluate(({ roh }) => Speicher.importieren(roh), {
      roh: alterStand({ [F.kurs]: { aktuellerTag: 10, aktiveTage: [], tagesUebungen: {}, karten: {} } })
    });
    pruefe('alte Sicherung: Tag 10 wird zu Tag ' + (10 + F.dazu),
      await page.evaluate(k => Speicher.fortschritt(k).aktuellerTag, F.kurs), 10 + F.dazu);
  }

  console.log('\n=== Ergebnisse alter Prüfungsversuche bleiben ===');
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem('vamos_v2', JSON.stringify({ version: 2, aktiverKurs: 'de-beruf',
      kurse: { 'de-beruf': { aktuellerTag: 31, aktiveTage: [], tagesUebungen: {}, karten: { a: {} },
        pruefungen: { 'p-de-beruf-1': { versuche: [{ id: 'ABCDEF', pruefungId: 'p-de-beruf-1', prozent: 80, bestanden: true, teile: [], offen: [] }] } } } },
      einstellungen: { ton: true, thema: 'auto', tagesziel: 25 } }));
  });
  await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(250);
  pruefe('alter Versuch noch als bestanden vermerkt',
    await page.evaluate(() => Pruefungen.bestanden('p-de-beruf-1', 'de-beruf')), true);
  pruefe('Prüfung heißt jetzt "Examen 2"',
    await page.evaluate(() => Pruefungen.nachId('p-de-beruf-1', 'de-beruf').name), 'Examen 2 · El turno diario');
  pruefe('und steht nach Tag 45',
    await page.evaluate(() => Pruefungen.nachId('p-de-beruf-1', 'de-beruf').nachTag), 45);
  pruefe('neue A1-Prüfung kommt zuerst',
    await page.evaluate(() => Pruefungen.fuerKurs('de-beruf').map(p => p.id)), ['p-de-beruf-a1', 'p-de-beruf-1', 'p-de-beruf-2']);
  pruefe('Spanisch: A1-Prüfung zuerst, die anderen 30 Tage später',
    await page.evaluate(() => Pruefungen.fuerKurs('es-419').map(p => p.id + '@' + p.nachTag)),
    ['p-es-419-a1@30', 'p-es-419-a2@63', 'p-es-419-b1@90', 'p-es-419-b2@120']);

  console.log('\n=== Konsole ===');
  pruefe('keine JavaScript-Fehler', konsole, []);
  await b.close();
  console.log(fehler ? `\n${fehler} FEHLER` : '\nAlle Tests zum Datenstand bestanden.');
  process.exit(fehler ? 1 : 0);
})();
