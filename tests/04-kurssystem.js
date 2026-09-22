const U = require('./umgebung');
let fehler = 0;
const pruefe = (n, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (!ok) { fehler++; console.log(`  x ${n}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
  else console.log(`  + ${n}`);
};
(async () => {
  const b = await U.browserStarten();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, locale: 'de-DE' });
  const page = await ctx.newPage();
  const konsole = [];
  page.on('console', m => { if (m.type() === 'error') konsole.push(m.text()); });
  page.on('pageerror', e => konsole.push('PAGEERROR: ' + e.message));

  await page.goto(U.URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  console.log('\n=== Kursauswahl beim ersten Start ===');
  pruefe('Kursauswahl sichtbar', await page.isVisible('#seite-kurse'), true);
  pruefe('vier Kurse angeboten', (await page.$$('.kurs-karte')).length, 4);
  pruefe('Kursnamen', await page.$$eval('.kurs-name', e => e.map(x => x.textContent)),
    ['Español (España)', 'Español (Latinoamérica)', 'Alemán', 'Alemán en el trabajo']);
  pruefe('genau ein Lernpfad, und der gehoert zum Deutschkurs',
    await page.$$eval('.kurs-karte.kurs-pfad', e => e.map(x => x.dataset.kurs)), ['de-beruf']);
  // Vor der Kurswahl ist die ganze Auswahlseite deutsch, also auch das Schildchen.
  pruefe('Schildchen beschriftet', (await page.textContent('.kurs-schild')).trim(), 'Lernpfad');
  await page.screenshot({ path: U.bild('k1-kursauswahl.png') });

  console.log('\n=== Spanien-Kurs waehlen ===');
  await page.click('.kurs-karte[data-kurs="es-es"]'); await page.waitForTimeout(300);
  pruefe('Startseite sichtbar', await page.isVisible('#seite-start'), true);
  pruefe('60 Lektionen geladen', await page.evaluate(() => Daten.anzahlTage()), 60);
  pruefe('Oberflaeche deutsch', await page.textContent('#btn-lernen'), 'Heute lernen');
  pruefe('Kursname im Kopf', (await page.textContent('#kopf-kurs')).includes('España'), true);
  pruefe('Tag-Anzeige', (await page.textContent('#tageskarte-tag')), 'Tag 1 von 60');
  await page.screenshot({ path: U.bild('k2-start-spanien.png') });

  console.log('\n=== Eine Aufgabe loesen, dann Kurs wechseln ===');
  await page.click('#btn-lernen'); await page.waitForTimeout(250);
  // Die zehn Karteikarten durchklicken, bis die erste Abfrage kommt
  for (let i = 0; i < 15; i++) {
    if (await page.evaluate(() => !(App.aktuell && App.aktuell.nurAnsehen))) break;
    await page.click('#btn-weiter'); await page.waitForTimeout(80);
  }
  const loesung = await page.evaluate(() => {
    const a = App.sitzung.aufgaben[App.sitzung.index];
    return a.richtung === 'nachZiel' ? Uebungen.ziel(a.karte) : Uebungen.ausgang(a.karte);
  });
  const opts = await page.$$('.option');
  for (const o of opts) { if (await o.getAttribute('data-wert') === loesung) { await o.click(); break; } }
  await page.click('#btn-pruefen'); await page.waitForTimeout(150);
  pruefe('Antwort verbucht', await page.evaluate(() => Object.keys(Speicher.fortschritt('es-es').karten).length > 0), true);

  await page.evaluate(() => { App.sitzung = null; App.zeigeSeite('kurse'); }); await page.waitForTimeout(250);
  const staende = await page.$$eval('.kurs-stand', e => e.map(x => x.textContent));
  pruefe('Spanien-Kurs zeigt Fortschritt', staende[0].includes('Tag 1'), true);
  pruefe('LatAm-Kurs noch unbegonnen', staende[1], 'noch nicht begonnen');

  console.log('\n=== Deutschkurs: Oberflaeche muss auf Spanisch sein ===');
  await page.click('.kurs-karte[data-kurs="de"]'); await page.waitForTimeout(300);
  // Solange der Kurs noch keine Lektionen hat, heisst der Knopf "Repasar" —
  // beides sind spanische Texte, also pruefen wir auf eine der beiden Formen.
  pruefe('Knopf auf Spanisch',
    ['Estudiar hoy', 'Repasar'].includes(await page.textContent('#btn-lernen')), true);
  pruefe('Streak-Label auf Spanisch', await page.textContent('.streak-label'), 'Días seguidos');
  pruefe('html lang gewechselt', await page.getAttribute('html', 'lang'), 'es');
  await page.screenshot({ path: U.bild('k3-start-deutsch.png') });

  await page.click('#btn-menue'); await page.waitForTimeout(120);
  pruefe('Menue auf Spanisch', await page.$eval('#menue button[data-ziel="historie"]', e => e.textContent), '📜 Historial');
  await page.click('#menue button[data-ziel="einstellungen"]'); await page.waitForTimeout(200);
  pruefe('Einstellungen auf Spanisch', await page.$eval('#seite-einstellungen h2', e => e.textContent), 'Ajustes');
  await page.screenshot({ path: U.bild('k4-einstellungen-spanisch.png'), fullPage: true });

  await page.click('#btn-menue'); await page.waitForTimeout(120);
  await page.click('#menue button[data-ziel="erinnerung"]'); await page.waitForTimeout(200);
  pruefe('Erinnerung auf Spanisch', (await page.textContent('#seite-erinnerung')).includes('Recordatorio diario'), true);
  await page.screenshot({ path: U.bild('k5-erinnerung-spanisch.png'), fullPage: true });

  console.log('\n=== Zurueck zum Spanienkurs: Fortschritt noch da? ===');
  await page.click('#btn-menue'); await page.waitForTimeout(120);
  await page.click('#menue button[data-ziel="kurse"]'); await page.waitForTimeout(200);
  await page.click('.kurs-karte[data-kurs="es-es"]'); await page.waitForTimeout(300);
  pruefe('Oberflaeche wieder deutsch', await page.textContent('#btn-lernen'), 'Heute lernen');
  pruefe('Karten des Spanienkurses erhalten',
    await page.evaluate(() => Object.keys(Speicher.fortschritt('es-es').karten).length > 0), true);
  pruefe('Deutschkurs hat eigenen, leeren Stand',
    await page.evaluate(() => Object.keys(Speicher.fortschritt('de').karten).length), 0);

  console.log('\n=== Migration eines alten Einzelkurs-Stands ===');
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem('spanisch_v1', JSON.stringify({
      version: 1, aktuellerTag: 7,
      aktiveTage: ['2026-09-01', '2026-09-02'],
      tagesUebungen: { '2026-09-01': 40 },
      karten: { v0101: { stufe: 3, faellig: Date.now() + 1000, richtig: 4, falsch: 1,
                         fehlerSerie: 0, richtigSerie: 2, leech: false, gesehen: true, historie: [] } },
      einstellungen: { ton: false, thema: 'dunkel', tagesziel: 40 }
    }));
  });
  await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(500);
  const m = await page.evaluate(() => ({
    kurs: Speicher.daten.aktiverKurs,
    tag: Speicher.fortschritt('es-es').aktuellerTag,
    karten: Object.keys(Speicher.fortschritt('es-es').karten).length,
    tage: Speicher.fortschritt('es-es').aktiveTage.length,
    ton: Speicher.einstellung('ton'),
    thema: Speicher.einstellung('thema')
  }));
  pruefe('alter Stand landet im Spanien-Kurs', m.kurs, 'es-es');
  pruefe('Tagesstand uebernommen', m.tag, 7);
  pruefe('Karten uebernommen', m.karten, 1);
  pruefe('aktive Tage uebernommen', m.tage, 2);
  pruefe('Einstellungen uebernommen', [m.ton, m.thema], [false, 'dunkel']);
  pruefe('kein Sprung in die Kursauswahl', await page.isVisible('#seite-start'), true);

  console.log('\n=== Konsole ===');
  const echte = konsole.filter(f => !/404|favicon/i.test(f));
  pruefe('keine JavaScript-Fehler', echte, []);
  if (echte.length) console.log(echte.join('\n'));
  await b.close();
  console.log(fehler ? `\n${fehler} FEHLER` : '\nAlle Kurssystem-Tests bestanden.');
  process.exit(fehler ? 1 : 0);
})();
