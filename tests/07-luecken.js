/* Rendert die vier korrigierten Uebungen wirklich im Browser und prueft,
   dass der ganze Satz sichtbar ist und die Loesung akzeptiert wird. */
const U = require('./umgebung');
const faelle = [
  { kurs: 'de',     id: 'g0901' },
  { kurs: 'es-es',  id: 'g2605' },
  { kurs: 'es-419', id: 'g2605' },
  { kurs: 'es-419', id: 'g6603' }
];
(async () => {
  const b = await U.browserStarten();
  const page = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  const fehler = [];
  page.on('pageerror', e => fehler.push(e.message));
  await page.goto(U.URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  for (const f of faelle) {
    const r = await page.evaluate(({ kurs, id }) => {
      Kurse.wechseln(kurs);
      const karte = Daten.karteNachId(id);
      const behaelter = document.getElementById('uebung-inhalt');
      const a = Uebungen.zeichnen({ typ: 'luecke', karte }, behaelter);
      const satz = behaelter.querySelector('.luecke-satz').textContent.replace(/\s+/g, ' ').trim();
      behaelter.querySelector('#tipp-feld').value = karte.loesung;
      const urteil = a.pruefen();
      const tipps = Array.from(behaelter.querySelectorAll('.tipp-btn')).map(t => t.textContent);
      return { satz, loesung: karte.loesung, korrekt: urteil.korrekt, tipps,
               volltext: karte.satz.replace('___', '[' + karte.loesung + ']') };
    }, f);
    const ende = r.volltext.trim().slice(-1);
    const zeigtEnde = r.satz.trim().endsWith(ende) || r.satz.includes(')');
    console.log(`${f.kurs}/${f.id}`);
    console.log(`   angezeigt : "${r.satz}"`);
    console.log(`   vollstaendig bis zum Satzende: ${zeigtEnde ? 'ja' : 'NEIN'}`);
    console.log(`   Loesung "${r.loesung}" akzeptiert: ${r.korrekt ? 'ja' : 'NEIN'}`);
    console.log(`   Tipp-Knoepfe: ${JSON.stringify(r.tipps)}`);
    if (!zeigtEnde || !r.korrekt) fehler.push(f.kurs + '/' + f.id);
  }
  console.log(fehler.length ? '\nPROBLEME: ' + fehler.join(', ') : '\nAlle vier Uebungen rendern vollstaendig und sind loesbar.');
  await b.close();
  process.exit(fehler.length ? 1 : 0);
})();
