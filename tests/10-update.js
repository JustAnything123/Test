/* Prüft die Meldung „Neue Fassung verfügbar".

   Das lässt sich nicht simulieren — es braucht einen echten Update-Vorgang
   des Service Workers. Der Test ändert deshalb wirklich die Datei
   service-worker.js auf der Platte, stößt die Prüfung an und stellt die Datei
   am Ende wieder her.

   Wichtig für das Verständnis: Beim ALLERERSTEN Besuch darf die Meldung nicht
   kommen — da ist ja nichts veraltet. Sie darf erst erscheinen, wenn es schon
   eine laufende Fassung gibt und eine neue danebengelegt wurde. */
const fs   = require('fs');
const path = require('path');
const U = require('./umgebung');
const URL = U.URL;
const fehler = [];

const pruefe = (name, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (ok) console.log('  + ' + name);
  else { fehler.push(name); console.log(`  x ${name}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
};

const SW = path.join(U.PROJEKT, 'service-worker.js');
const ORIGINAL = fs.readFileSync(SW, 'utf8');

/* Wartet, bis der Service Worker die Seite wirklich steuert. */
async function kontrolliert(page) {
  return page.evaluate(() => new Promise(fertig => {
    if (navigator.serviceWorker.controller) return fertig(true);
    navigator.serviceWorker.addEventListener('controllerchange', () => fertig(true));
    setTimeout(() => fertig(!!navigator.serviceWorker.controller), 4000);
  }));
}

(async () => {
  const b = await U.browserStarten();
  const ctx = await b.newContext(Object.assign({ locale: 'de-DE' }, U.ANSICHT));
  const page = await ctx.newPage();
  const konsole = [];
  page.on('pageerror', e => konsole.push('PAGEERROR: ' + e.message));

  try {
    /* ---------- 1. Erster Besuch: keine Meldung ---------- */
    console.log('\n=== Erster Besuch ===');
    await page.goto(URL, { waitUntil: 'networkidle' });
    const unterstuetzt = await page.evaluate(() => 'serviceWorker' in navigator);
    pruefe('Browser unterstützt Service Worker', unterstuetzt, true);

    pruefe('Service Worker wird angemeldet',
           await page.evaluate(() => navigator.serviceWorker.getRegistration().then(r => !!r)), true);
    await kontrolliert(page);
    await page.waitForTimeout(600);
    pruefe('beim ersten Besuch keine Meldung', await page.isVisible('#neue-fassung'), false);

    /* ---------- 2. Zweiter Besuch: läuft aus dem Zwischenspeicher ---------- */
    console.log('\n=== Zweiter Besuch ===');
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    pruefe('die Seite wird jetzt vom Service Worker gesteuert',
           await page.evaluate(() => !!navigator.serviceWorker.controller), true);
    pruefe('weiterhin keine Meldung', await page.isVisible('#neue-fassung'), false);

    /* ---------- 3. Eine neue Fassung ablegen ---------- */
    console.log('\n=== Neue Fassung wird bereitgestellt ===');
    fs.writeFileSync(SW, ORIGINAL.replace(/const CACHE = '([^']+)';/,
                                          "const CACHE = '$1-test';") +
                         '\n// Testaenderung ' + Date.now() + '\n', 'utf8');

    await page.evaluate(() => navigator.serviceWorker.getRegistration().then(r => r.update()));
    await page.waitForSelector('#neue-fassung:not([hidden])', { timeout: 15000 })
              .catch(() => {});
    pruefe('Meldung erscheint', await page.isVisible('#neue-fassung'), true);

    const streifen = await page.evaluate(() => {
      const el = document.getElementById('neue-fassung');
      return {
        text:   el.querySelector('span').textContent.trim(),
        laden:  document.getElementById('btn-fassung-laden').textContent.trim(),
        spaeter:document.getElementById('btn-fassung-spaeter').textContent.trim(),
        unten:  getComputedStyle(el).position
      };
    });
    pruefe('Text auf Deutsch',      streifen.text,    'Neue Fassung verfügbar');
    pruefe('Knopf zum Neuladen',    streifen.laden,   'Neu laden');
    pruefe('Knopf zum Wegklicken',  streifen.spaeter, 'Später');
    pruefe('Streifen liegt fest unten', streifen.unten, 'fixed');
    await page.screenshot({ path: U.bild('u1-neue-fassung.png') });

    /* ---------- 4. „Später" blendet sie weg ---------- */
    console.log('\n=== Bedienung ===');
    await page.click('#btn-fassung-spaeter'); await page.waitForTimeout(150);
    pruefe('„Später" blendet die Meldung aus', await page.isVisible('#neue-fassung'), false);

    /* ---------- 5. „Neu laden" lädt wirklich neu ---------- */
    await page.evaluate(() => { window.__vorReload = true; });
    await page.evaluate(() => { document.getElementById('neue-fassung').hidden = false; });
    await page.click('#btn-fassung-laden');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(300);
    pruefe('„Neu laden" lädt die Seite wirklich neu',
           await page.evaluate(() => window.__vorReload === undefined), true);

    /* ---------- 6. Konsole ---------- */
    console.log('\n=== Konsole ===');
    pruefe('keine JavaScript-Fehler', konsole, []);

  } finally {
    fs.writeFileSync(SW, ORIGINAL, 'utf8');
    const heil = fs.readFileSync(SW, 'utf8') === ORIGINAL;
    console.log('\n  service-worker.js wiederhergestellt: ' + (heil ? 'ja' : 'NEIN'));
    if (!heil) fehler.push('service-worker.js nicht wiederhergestellt');
    await b.close();
  }

  console.log('');
  if (fehler.length) console.log(`${fehler.length} FEHLER`);
  else console.log('Alle Update-Tests bestanden.');
  process.exit(fehler.length ? 1 : 0);
})();
