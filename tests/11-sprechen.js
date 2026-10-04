/* Prüft die Nachsprech-Übung (Stufe 1 der Sprechübungen).

   Der Testbrowser hat ein künstliches Mikrofon (siehe umgebung.js), das einen
   Piepton liefert. Damit lässt sich alles prüfen, was die App selbst tut:
   Aufnahme starten und stoppen, Wiedergabe, Selbstcheck — und vor allem, dass
   das Mikrofon danach wirklich wieder freigegeben wird. Ob die Aufnahme auf
   einem echten Android-Handy oder iPhone klingt, kann nur ein Test auf dem
   Gerät zeigen. */
const U = require('./umgebung');
const URL = U.URL;
let fehler = 0;
const pruefe = (n, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (!ok) { fehler++; console.log(`  x ${n}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
  else console.log(`  + ${n}`);
};

/* Startet die Tageslektion und springt direkt zur ersten Sprechaufgabe. */
async function zurSprechaufgabe(page) {
  await page.click('#btn-lernen'); await page.waitForTimeout(250);
  return page.evaluate(() => {
    const i = App.sitzung.aufgaben.findIndex(a => a.typ === 'sprechen');
    if (i < 0) return null;
    App.sitzung.index = i;
    App.aufgabeZeigen();
    return Uebungen.ziel(App.sitzung.aufgaben[i].karte);
  });
}

/* Ist das zuletzt benutzte Mikrofon noch an? (readyState 'live' = an) */
const mikrofonAn = page => page.evaluate(() =>
  !!(window.__strom && window.__strom.getTracks().some(t => t.readyState === 'live')));

/* Merkt sich den Mikrofon-Strom der laufenden Aufnahme für mikrofonAn(). */
const stromMerken = page => page.evaluate(() => {
  window.__strom = Aufnahme._laufend ? Aufnahme._laufend.stream : null;
  return !!window.__strom;
});

(async () => {
  const b = await U.browserStarten();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, locale: 'de-DE' });
  const page = await ctx.newPage();
  const konsole = [];
  page.on('console', m => { if (m.type() === 'error') konsole.push(m.text()); });
  page.on('pageerror', e => konsole.push('PAGEERROR: ' + e.message));
  await page.goto(URL, { waitUntil: 'networkidle' }); await page.waitForTimeout(400);

  console.log('\n=== Alle drei Kurse haben Sprechübungen ===');
  pruefe('sprechen: true bei es-419, de, de-beruf',
    await page.evaluate(() => ['es-419', 'de', 'de-beruf'].map(id => !!KURSE[id].sprechen)), [true, true, true]);

  console.log('\n=== Deutschkurs: Startseite und Tagesplan ===');
  await page.click('.kurs-karte[data-kurs="de"]'); await page.waitForTimeout(300);
  const zeile = await page.$$eval('#tageskarte-zeilen .zeile', z => z.map(x => x.textContent.replace(/\s+/g, ' ').trim()));
  pruefe('Checkliste nennt das Nachsprechen', zeile.some(x => x.includes('Repetir en voz alta') && x.includes('2')), true);
  const plan = await page.evaluate(() => Tagesplan.bauen('voll').map(a => a.typ + ':' + a.phase));
  const iSprechen = plan.indexOf('sprechen:sprechen');
  pruefe('zwei Sprechaufgaben im Plan', plan.filter(x => x === 'sprechen:sprechen').length, 2);
  pruefe('nach den Sätzen', iSprechen > plan.lastIndexOf('tapping:satz'), true);
  pruefe('vor der Grammatik', iSprechen < plan.indexOf('erklaerung:grammatik'), true);

  console.log('\n=== Die Aufgabe ===');
  pruefe('Aufnahme technisch möglich (localhost gilt als sicher)', await page.evaluate(() => Aufnahme.moeglich()), true);
  console.log('  Aufnahmeformat in Chromium:', await page.evaluate(() => Aufnahme.format() || '(Browser entscheidet)'));
  const satz = await zurSprechaufgabe(page);
  pruefe('Sprechaufgabe gefunden', !!satz, true);
  pruefe('Satz wird groß angezeigt', (await page.textContent('.sprech-satz')).trim(), satz);
  pruefe('Phase heißt "Hablar"', await page.textContent('#uebung-phase'), 'Hablar');
  pruefe('kein Prüfen-Knopf (keine Note)', await page.isVisible('#btn-pruefen'), false);
  pruefe('Weiter sofort möglich', await page.isVisible('#btn-weiter'), true);
  pruefe('Aufnahmeknopf auf Spanisch', (await page.textContent('#sprech-auf')).trim(), '🎙️ Grabar');
  pruefe('drei Punkte im Selbstcheck', (await page.$$('.sprech-punkt input')).length, 3);
  pruefe('Hinweis ohne Mikrofon nicht da', await page.$('#sprech-ohne'), null);

  console.log('\n=== Aufnehmen, stoppen, anhören ===');
  await page.click('#sprech-auf'); await page.waitForTimeout(400);
  pruefe('Mikrofon läuft', await stromMerken(page), true);
  pruefe('Knopf zeigt Stopp', (await page.textContent('#sprech-auf')).trim(), '⏹ Parar');
  pruefe('Knopf blinkt rot', await page.$eval('#sprech-auf', e => e.classList.contains('nimmt-auf')), true);
  pruefe('Zeitanzeige sichtbar', await page.isVisible('#sprech-status'), true);
  await page.screenshot({ path: U.bild('s1-aufnahme-laeuft.png') });
  await page.waitForTimeout(1200);
  await page.click('#sprech-auf');
  await page.waitForSelector('#sprech-ergebnis:not([hidden])', { timeout: 3000 });
  const aufn = await page.evaluate(async () => {
    const a = document.getElementById('sprech-audio');
    const blob = await (await fetch(a.src)).blob();
    return { src: a.src.slice(0, 5), groesse: blob.size, typ: blob.type };
  });
  pruefe('eigene Aufnahme liegt als blob: im Player', aufn.src, 'blob:');
  pruefe('Aufnahme ist nicht leer', aufn.groesse > 500, true);
  pruefe('Aufnahme hat einen Audio-Typ', aufn.typ.startsWith('audio/'), true);
  console.log(`  (${aufn.groesse} Bytes, ${aufn.typ})`);
  pruefe('Mikrofon nach dem Stoppen frei', await mikrofonAn(page), false);
  pruefe('Knopf heißt jetzt "Grabar otra vez"', (await page.textContent('#sprech-auf')).trim(), '🎙️ Grabar otra vez');
  pruefe('Zeitanzeige wieder weg', await page.isVisible('#sprech-status'), false);

  console.log('\n=== Selbstcheck ===');
  const kartenVorher = await page.evaluate(() => JSON.stringify(Speicher.fortschritt().karten));
  pruefe('Fazit erst nach dem ersten Haken', await page.isVisible('#sprech-fazit'), false);
  await page.click('.sprech-punkt >> nth=0');
  pruefe('ein Haken: Tipp zum Weiterüben', (await page.textContent('#sprech-fazit')).startsWith('Lo que aún'), true);
  await page.click('.sprech-punkt >> nth=1'); await page.click('.sprech-punkt >> nth=2');
  pruefe('alle Haken: Lob', (await page.textContent('#sprech-fazit')).startsWith('Todo marcado'), true);
  await page.screenshot({ path: U.bild('s2-nach-aufnahme.png'), fullPage: true });
  pruefe('Selbstcheck verändert keine Lernkarten',
    await page.evaluate(() => JSON.stringify(Speicher.fortschritt().karten)), kartenVorher);

  console.log('\n=== Weiterblättern während der Aufnahme ===');
  await page.click('#sprech-auf'); await page.waitForTimeout(400);
  pruefe('zweite Aufnahme läuft', await stromMerken(page), true);
  await page.click('#btn-weiter'); await page.waitForTimeout(300);
  pruefe('Mikrofon beim Weiterblättern freigegeben', await mikrofonAn(page), false);
  pruefe('nichts mehr in Arbeit', await page.evaluate(() => Aufnahme._laufend), null);
  pruefe('nächste Aufgabe ist wieder eine Sprechaufgabe',
    await page.evaluate(() => App.sitzung.aufgaben[App.sitzung.index].typ), 'sprechen');

  console.log('\n=== Sitzung verlassen während der Aufnahme ===');
  await page.click('#sprech-auf'); await page.waitForTimeout(400);
  await stromMerken(page);
  page.once('dialog', d => d.accept());
  await page.click('#btn-zurueck'); await page.waitForTimeout(300);
  pruefe('zurück auf der Startseite', await page.isVisible('#seite-start'), true);
  pruefe('Mikrofon beim Verlassen freigegeben', await mikrofonAn(page), false);

  console.log('\n=== Zeitgrenze und Hilfsfunktionen ===');
  const auto = await page.evaluate(async () => {
    const r = await Aufnahme.starten(1);
    const strom = Aufnahme._laufend.stream;
    const e = await r.ergebnis;                     // ohne stoppen() — die Zeitgrenze greift
    return { dauer: e.dauer, groesse: e.blob.size, aus: strom.getTracks().every(t => t.readyState === 'ended') };
  });
  pruefe('stoppt nach der Zeitgrenze von selbst', auto.dauer >= 0.9 && auto.dauer < 3, true);
  pruefe('und gibt dabei das Mikrofon frei', auto.aus, true);
  pruefe('Endungen für den Versand',
    await page.evaluate(() => ['audio/mp4', 'audio/webm;codecs=opus', 'audio/ogg', 'x'].map(m => Aufnahme.endung(m))),
    ['m4a', 'webm', 'ogg', 'audio']);
  pruefe('MP4 steht vor WebM (iPhone)',
    await page.evaluate(() => Aufnahme.FORMATE.indexOf('audio/mp4') < Aufnahme.FORMATE.indexOf('audio/webm')), true);
  pruefe('Fehlertexte je Fall', await page.evaluate(() => [
    Aufnahme.fehlertext({ name: 'NotAllowedError' }) === t('sprech.nichtErlaubt'),
    Aufnahme.fehlertext({ name: 'NotFoundError' })   === t('sprech.keinMikrofon'),
    Aufnahme.fehlertext({ name: 'NotReadableError' }) === t('sprech.belegt'),
    Aufnahme.fehlertext(new Error('x'))               === t('sprech.fehler')
  ]), [true, true, true, true]);
  pruefe('Vorlesen ohne Stimme ruft "nachher" trotzdem auf',
    await page.evaluate(() => { let ok = false; Sprache.verfuegbar = false; Sprache.sprich('hola', 0.9, () => { ok = true; }); return ok; }), true);

  console.log('\n=== Kurs ohne Sprechübungen ===');
  const ohne = await page.evaluate(() => {
    const k = Kurse.aktiv(); k.sprechen = false;
    const n = Tagesplan.bauen('voll').filter(a => a.typ === 'sprechen').length;
    k.sprechen = true;
    return n;
  });
  pruefe('ohne sprechen: true keine Sprechaufgaben', ohne, 0);

  console.log('\n=== Mikrofon verweigert ===');
  await page.evaluate(() => {
    window.__echt = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = () => Promise.reject(Object.assign(new Error('nein'), { name: 'NotAllowedError' }));
  });
  await zurSprechaufgabe(page);
  await page.click('#sprech-auf'); await page.waitForTimeout(300);
  pruefe('verständliche Meldung statt Absturz',
    (await page.textContent('#sprech-meldung')).includes('micrófono'), true);
  pruefe('Knopf wieder benutzbar', await page.$eval('#sprech-auf', e => !e.disabled), true);
  await page.evaluate(() => { navigator.mediaDevices.getUserMedia = window.__echt; });
  page.once('dialog', d => d.accept());
  await page.click('#btn-zurueck'); await page.waitForTimeout(200);

  console.log('\n=== Gerät ohne Aufnahmefunktion ===');
  const ctx2 = await b.newContext({ viewport: { width: 390, height: 844 }, locale: 'de-DE' });
  // So sieht es aus, wenn die App per Doppelklick (file://) geöffnet wird
  // oder der Browser kein MediaRecorder kennt.
  await ctx2.addInitScript(() => { window.MediaRecorder = undefined; });
  const p2 = await ctx2.newPage();
  p2.on('pageerror', e => konsole.push('PAGEERROR (ohne Mikro): ' + e.message));
  await p2.goto(URL, { waitUntil: 'networkidle' }); await p2.waitForTimeout(400);
  await p2.click('.kurs-karte[data-kurs="es-419"]'); await p2.waitForTimeout(300);
  pruefe('Aufnahme nicht möglich', await p2.evaluate(() => Aufnahme.moeglich()), false);
  await zurSprechaufgabe(p2);
  pruefe('Hinweis statt Aufnahmeknopf', [await p2.isVisible('#sprech-ohne'), await p2.$('#sprech-auf')], [true, null]);
  pruefe('Hinweis auf Deutsch', (await p2.textContent('#sprech-ohne')).includes('https'), true);
  pruefe('Selbstcheck trotzdem da', (await p2.$$('.sprech-punkt')).length, 3);
  pruefe('ohne Aufnahme kein "hör dir beides an"',
    (await p2.textContent('.sprech-check-titel')).trim(), 'Wie lief es? Hak ab, was geklappt hat.');
  await p2.screenshot({ path: U.bild('s3-ohne-mikrofon.png'), fullPage: true });
  await p2.click('#btn-weiter'); await p2.waitForTimeout(200);
  pruefe('Weiter funktioniert', await p2.evaluate(() => App.sitzung.aufgaben[App.sitzung.index].typ), 'sprechen');

  console.log('\n=== Konsole ===');
  const echte = konsole.filter(f => !/404|favicon|manifest/i.test(f));
  pruefe('keine JavaScript-Fehler', echte, []);
  if (echte.length) console.log(echte.join('\n'));
  await b.close();
  console.log(fehler ? `\n${fehler} FEHLER` : '\nAlle Sprech-Tests bestanden.');
  process.exit(fehler ? 1 : 0);
})();
