/* Prueft die neuen Vertiefungstage im echten Browser:
   spielt jeden Tag komplett durch, prueft die Redemittel-Erklaerung (Tabelle, sauberes HTML)
   und dass jede Lueckenuebung bis zum Satzende sichtbar und loesbar ist. */
const U = require('./umgebung');
const URL = U.URL;
const fehler = [];

(async () => {
  const b = await U.browserStarten();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, locale: 'de-DE' });
  const page = await ctx.newPage();
  page.on('pageerror', e => fehler.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') fehler.push('CONSOLE: ' + m.text()); });

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle' });
  await page.click('.kurs-karte[data-kurs="de-beruf"]');
  await page.waitForTimeout(300);

  for (const tag of [31, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45]) {
    await page.evaluate(t => {
      const f = Speicher.fortschritt(); f.aktuellerTag = t; f.karten = {}; Speicher.sichern();
    }, tag);
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(200);

    const thema = (await page.textContent('#tag-thema')).trim();
    await page.click('#btn-lernen'); await page.waitForTimeout(150);

    let tabellenZeilen = 0, merke = 0, luecken = 0, lueckenOk = 0, vokabeln = 0;

    for (let n = 0; n < 400; n++) {
      const z = await page.evaluate(() => {
        if (!document.getElementById('seite-fertig').hidden) return { fertig: true };
        if (document.getElementById('seite-uebung').hidden) return { fertig: true, abgebrochen: true };
        const i = document.getElementById('uebung-inhalt');
        const a = App.sitzung ? App.sitzung.aufgaben[App.sitzung.index] : null;
        return { typ: a && a.typ, nurAnsehen: !!(App.aktuell && App.aktuell.nurAnsehen),
                 optionen: !!i.querySelector('.option'), feld: !!i.querySelector('#tipp-feld'),
                 tap: !!i.querySelector('#tap-vorrat') };
      });
      if (z.fertig) { if (z.abgebrochen) fehler.push(`Tag ${tag}: Sitzung abgebrochen`); break; }
      if (z.typ === 'karte') vokabeln++;

      if (z.typ === 'erklaerung' && !tabellenZeilen) {
        const e = await page.evaluate(() => {
          const i = document.getElementById('uebung-inhalt');
          return { zeilen: i.querySelectorAll('table tr').length,
                   merke: i.querySelectorAll('.merke').length,
                   leerP: i.innerHTML.split('<p></p>').length - 1 };
        });
        tabellenZeilen = e.zeilen; merke = e.merke;
        if (e.leerP) fehler.push(`Tag ${tag}: ${e.leerP} leere <p> in der Erklaerung`);
        if (!e.zeilen) fehler.push(`Tag ${tag}: Erklaerung ohne Tabelle`);
        await page.screenshot({ path: U.bild(`f-tag${tag}-erklaerung.png`) });
      }

      if (z.typ === 'luecke') {
        luecken++;
        const d = await page.evaluate(() => {
          const a = App.sitzung.aufgaben[App.sitzung.index].karte;
          const i = document.getElementById('uebung-inhalt');
          return { satz: a.satz, loesung: a.loesung, angezeigt: i.textContent.replace(/\s+/g, ' ') };
        });
        const schwanz = d.satz.split('___').pop().trim().replace(/\s+/g, ' ');
        if (schwanz && !d.angezeigt.includes(schwanz))
          fehler.push(`Tag ${tag}: Satzende fehlt — "${d.satz}"`);
        else lueckenOk++;
      }

      if (z.nurAnsehen) { await page.click('#btn-weiter'); await page.waitForTimeout(35); continue; }

      if (z.optionen) {
        const l = await page.evaluate(() => {
          const a = App.sitzung.aufgaben[App.sitzung.index];
          return a.richtung === 'nachZiel' ? Uebungen.ziel(a.karte) : Uebungen.ausgang(a.karte);
        });
        const opts = await page.$$('.option');
        let ziel = null;
        for (const o of opts) if (await o.getAttribute('data-wert') === l) { ziel = o; break; }
        await (ziel || opts[0]).click();
      } else if (z.tap) {
        const woerter = await page.evaluate(() => Uebungen.ziel(App.sitzung.aufgaben[App.sitzung.index].karte).split(/\s+/));
        for (const w of woerter) {
          const ok = await page.evaluate(wort => {
            const btn = Array.from(document.querySelectorAll('#tap-vorrat .tap-wort:not(.benutzt)')).find(x => x.textContent === wort);
            if (btn) { btn.click(); return true; } return false;
          }, w);
          if (!ok) await page.click('#tap-vorrat .tap-wort:not(.benutzt)');
        }
      } else if (z.feld) {
        const l = await page.evaluate(() => {
          const a = App.sitzung.aufgaben[App.sitzung.index];
          if (a.typ === 'luecke') return a.karte.loesung;
          if (a.typ === 'hoeren') return Uebungen.ziel(a.karte);
          return a.richtung === 'nachAusgang' ? Uebungen.ausgang(a.karte) : Uebungen.ziel(a.karte);
        });
        await page.fill('#tipp-feld', l);
      }
      await page.click('#btn-pruefen'); await page.waitForTimeout(40);
      if (z.typ === 'luecke') {
        const ok = await page.evaluate(() => !!document.querySelector('.richtig, .rueckmeldung.richtig'));
        if (!ok) fehler.push(`Tag ${tag}: Loesung wird nicht als richtig gewertet`);
      }
      await page.click('#btn-weiter'); await page.waitForTimeout(35);
    }
    console.log(`Tag ${tag} — ${thema}`);
    console.log(`   Vokabelkarten ${vokabeln} · Tabellenzeilen ${tabellenZeilen} · Merksatz ${merke} · Luecken ok ${lueckenOk}/${luecken}`);
  }

  console.log('\n=== Ergebnis ===');
  if (fehler.length) { fehler.forEach(f => console.log('  x ' + f)); console.log(`${fehler.length} FEHLER`); }
  else console.log('  Keine Fehler — alle geprueften Vertiefungstage laufen sauber durch.');
  await b.close();
  process.exit(fehler.length ? 1 : 0);
})();
