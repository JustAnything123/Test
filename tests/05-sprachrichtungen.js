/* Prueft, dass die Aufgaben in beide Sprachrichtungen funktionieren:
   Spanischkurse (ziel = es) und Deutschkurs (ziel = de, Oberflaeche auf Spanisch). */
const U = require('./umgebung');
const URL = U.URL;
let fehler = 0;
const pruefe = (n, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (!ok) { fehler++; console.log(`  x ${n}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
  else console.log(`  + ${n}`);
};

/* Spielt die laufende Sitzung komplett richtig durch und zaehlt die Uebungstypen. */
async function durchspielen(page) {
  const gesehen = {};
  for (let n = 0; n < 400; n++) {
    const z = await page.evaluate(() => {
      if (!document.getElementById('seite-fertig').hidden) return { fertig: true };
      if (document.getElementById('seite-uebung').hidden) return { fertig: true, abgebrochen: true };
      const i = document.getElementById('uebung-inhalt');
      const a = App.sitzung ? App.sitzung.aufgaben[App.sitzung.index] : null;
      return { fertig: false, typ: a && a.typ,
               nurAnsehen: !!(App.aktuell && App.aktuell.nurAnsehen),
               optionen: !!i.querySelector('.option'),
               feld: !!i.querySelector('#tipp-feld'),
               tap: !!i.querySelector('#tap-vorrat') };
    });
    if (z.fertig) return { gesehen, abgebrochen: z.abgebrochen };
    gesehen[z.typ] = (gesehen[z.typ] || 0) + 1;
    if (z.nurAnsehen) { await page.click('#btn-weiter'); await page.waitForTimeout(40); continue; }

    if (z.optionen) {
      const loesung = await page.evaluate(() => {
        const a = App.sitzung.aufgaben[App.sitzung.index];
        return a.richtung === 'nachZiel' ? Uebungen.ziel(a.karte) : Uebungen.ausgang(a.karte);
      });
      const opts = await page.$$('.option');
      let ziel = null;
      for (const o of opts) if (await o.getAttribute('data-wert') === loesung) { ziel = o; break; }
      await (ziel || opts[0]).click();
    } else if (z.tap) {
      const woerter = await page.evaluate(() => Uebungen.ziel(App.sitzung.aufgaben[App.sitzung.index].karte).split(/\s+/));
      for (const w of woerter) {
        const ok = await page.evaluate(wort => {
          const b = Array.from(document.querySelectorAll('#tap-vorrat .tap-wort:not(.benutzt)'))
                         .find(x => x.textContent === wort);
          if (b) { b.click(); return true; }
          return false;
        }, w);
        if (!ok) await page.click('#tap-vorrat .tap-wort:not(.benutzt)');
      }
    } else if (z.feld) {
      const loesung = await page.evaluate(() => {
        const a = App.sitzung.aufgaben[App.sitzung.index];
        if (a.typ === 'luecke') return a.karte.loesung;
        if (a.typ === 'hoeren') return Uebungen.ziel(a.karte);
        return a.richtung === 'nachAusgang' ? Uebungen.ausgang(a.karte) : Uebungen.ziel(a.karte);
      });
      await page.fill('#tipp-feld', loesung);
    }
    await page.click('#btn-pruefen'); await page.waitForTimeout(45);
    await page.click('#btn-weiter');  await page.waitForTimeout(40);
  }
  return { gesehen, abbruch: 'Limit erreicht' };
}

/* Ein kompletter Tag 1 in einem Kurs. */
async function kursDurchspielen(page, kursId, erwartet) {
  console.log(`\n=== ${kursId} ===`);
  await page.evaluate(() => { localStorage.clear(); });
  await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(400);
  await page.click(`.kurs-karte[data-kurs="${kursId}"]`); await page.waitForTimeout(300);

  pruefe('Lektionen geladen', await page.evaluate(() => Daten.anzahlTage()), erwartet.tage);
  pruefe('Zielsprache', await page.evaluate(() => Uebungen.zielFeld()), erwartet.ziel);
  pruefe('Ausgangssprache', await page.evaluate(() => Uebungen.ausgangFeld()), erwartet.ausgang);
  pruefe('Oberflaechensprache', await page.getAttribute('html', 'lang'), erwartet.ui);
  pruefe('Sonderzeichenleiste', await page.evaluate(() => (Kurse.aktiv().sonderzeichen || []).length), erwartet.zeichen);

  await page.click('#btn-lernen'); await page.waitForTimeout(250);
  const r = await durchspielen(page);
  console.log('  Uebungstypen:', JSON.stringify(r.gesehen));
  pruefe('nicht abgebrochen', !r.abgebrochen, true);
  pruefe('10 Vokabeln dreimal', [r.gesehen.karte, r.gesehen.mc, r.gesehen.tippen], [10, 10, 10]);
  pruefe('5 Saetze', r.gesehen.tapping, 5);
  pruefe('Erklaerung und 5 Luecken', [r.gesehen.erklaerung, r.gesehen.luecke], [1, 5]);

  const stand = await page.evaluate(id => ({
    tag: Speicher.fortschritt(id).aktuellerTag,
    karten: Object.keys(Speicher.fortschritt(id).karten).length,
    tage: Speicher.fortschritt(id).aktiveTage.length
  }), kursId);
  pruefe('Tag steht auf 2', stand.tag, 2);
  pruefe('20 Karten angelegt', stand.karten, 20);
  pruefe('ein aktiver Tag', stand.tage, 1);
  await page.screenshot({ path: U.bild(`richtung-${kursId}.png`) });
}

(async () => {
  const b = await U.browserStarten();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, locale: 'de-DE' });
  const page = await ctx.newPage();
  const konsole = [];
  page.on('console', m => { if (m.type() === 'error') konsole.push(m.text()); });
  page.on('pageerror', e => konsole.push('PAGEERROR: ' + e.message));
  await page.goto(URL, { waitUntil: 'networkidle' }); await page.waitForTimeout(400);

  await kursDurchspielen(page, 'es-es',  { tage: 60,  ziel: 'es', ausgang: 'de', ui: 'de', zeichen: 9 });
  await kursDurchspielen(page, 'es-419', { tage: 90,  ziel: 'es', ausgang: 'de', ui: 'de', zeichen: 9 });
  await kursDurchspielen(page, 'de',     { tage: 120, ziel: 'de', ausgang: 'es', ui: 'es', zeichen: 7 });
  await kursDurchspielen(page, 'de-beruf', { tage: 45, ziel: 'de', ausgang: 'es', ui: 'es', zeichen: 7 });

  console.log('\n=== Deutschkurs: letzter Tag ===');
  await page.evaluate(() => { Speicher.fortschritt().aktuellerTag = 121; Speicher.sichern(); App.zeigeSeite('start'); });
  await page.waitForTimeout(200);
  pruefe('Abschluss auf Spanisch', (await page.textContent('#tag-thema')).includes('¡'), true);
  pruefe('Knopf heisst Repasar', await page.textContent('#btn-lernen'), 'Repasar');

  console.log('\n=== Konsole ===');
  const echte = konsole.filter(f => !/404|favicon|manifest/i.test(f));
  pruefe('keine JavaScript-Fehler', echte, []);
  if (echte.length) console.log(echte.join('\n'));

  await b.close();
  console.log(fehler ? `\n${fehler} FEHLER` : '\nAlle Richtungstests bestanden.');
  process.exit(fehler ? 1 : 0);
})();
