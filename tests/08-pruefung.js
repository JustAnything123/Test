/* Prüft das Prüfungssystem im echten Browser.

   Drei Durchläufe mit demselben Prüfungsinhalt:
     1. alles richtig   → muss bestehen, 100 %
     2. alles falsch    → darf nicht bestehen
     3. genau an der Grenze → prüft, dass 60 % wirklich die Schwelle ist

   Dazu die Regeln, die eine Prüfung von einer Lektion unterscheiden:
   keine Rückmeldung zwischendurch, Antworten bleiben beim Blättern erhalten,
   der Hörtext wird nicht angezeigt. */
const U = require('./umgebung');
const URL = U.URL;
const fehler = [];

const pruefe = (name, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (ok) console.log('  + ' + name);
  else { fehler.push(name); console.log(`  x ${name}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
};

/* Setzt den Kurs auf einen Tag, an dem die Prüfung freigeschaltet ist.

   `leeren`  — den Lernstand vorher wegwerfen (nur beim ersten Mal, sonst
               gingen die gespeicherten Versuche verloren).
   `stimme`  — so tun, als wäre eine Sprachausgabe installiert. Der Testbrowser
               hat keine einzige Stimme; ohne diesen Schalter lässt die App den
               Hörteil zu Recht weg, und die Prüfung hätte nur 25 statt 35
               Punkte. Beide Fälle werden geprüft. */
async function vorbereiten(page, { leeren = false, stimme = true } = {}) {
  await page.evaluate(l => {
    if (l) localStorage.clear();
    Speicher.laden();
    Kurse.wechseln('es-es');
    const f = Speicher.fortschritt();
    f.aktuellerTag = 34;             // Prüfung steht nach Tag 33 an
    Speicher.sichern();
  }, leeren);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(250);
  if (stimme) await page.evaluate(() => { Sprache.kannHoeren = () => true; });
}

/* Spielt die Prüfung durch. `wahl` entscheidet je Frage, was angekreuzt wird. */
async function durchspielen(page, wahl) {
  await page.click('#btn-pruefung');   await page.waitForTimeout(200);
  await page.click('#btn-pruefung-los'); await page.waitForTimeout(250);

  const anzahl = await page.evaluate(() => App.pruefung.aufgaben.length);
  for (let i = 0; i < anzahl; i++) {
    await page.evaluate(w => {
      const p = App.pruefung;
      const a = p.aufgaben[p.index].aufgabe;
      if (a.art === 'schreiben') {
        const feld = document.getElementById('pruef-schreibfeld');
        feld.value = 'Querido Miguel: Muchas gracias por tu invitacion.';
        feld.dispatchEvent(new Event('input'));
        return;
      }
      for (const f of a.fragen) {
        const gruppe = document.querySelector(`.pruef-optionen[data-frage="${f.id}"]`);
        if (!gruppe) continue;
        const knoepfe = Array.from(gruppe.querySelectorAll('.pruef-option'));
        let ziel;
        if (w === 'richtig') ziel = knoepfe.find(k => k.dataset.wert === String(f.loesung));
        else if (w === 'falsch') ziel = knoepfe.find(k => k.dataset.wert !== String(f.loesung));
        if (ziel) ziel.click();
      }
    }, wahl);
    await page.waitForTimeout(40);
    await page.click('#btn-pruef-weiter');
    await page.waitForTimeout(60);
  }
  await page.waitForTimeout(250);
}

(async () => {
  const b = await U.browserStarten();
  const ctx = await b.newContext(Object.assign({ locale: 'de-DE' }, U.ANSICHT));
  const page = await ctx.newPage();
  const konsole = [];
  page.on('pageerror', e => konsole.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') konsole.push('CONSOLE: ' + m.text()); });
  page.on('dialog', d => d.accept());        // "noch offene Fragen" bestätigen

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);

  /* ---------- 1. Freischaltung ---------- */
  console.log('\n=== Freischaltung ===');
  await page.evaluate(() => {
    localStorage.clear(); Speicher.laden(); Kurse.wechseln('es-es');
    const f = Speicher.fortschritt(); f.aktuellerTag = 10; Speicher.sichern();
  });
  await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(250);
  pruefe('vor Tag 33 keine Prüfkarte', await page.isVisible('#pruefkarte'), false);

  await vorbereiten(page, { leeren: true });
  pruefe('ab Tag 34 ist die Prüfung da', await page.isVisible('#pruefkarte'), true);
  pruefe('Name steht auf der Karte', (await page.textContent('#pruefkarte-name')).trim(), 'Prüfung A2');

  /* ---------- 2. Übersicht vor dem Start ---------- */
  console.log('\n=== Übersicht vor dem Start ===');
  await page.click('#btn-pruefung'); await page.waitForTimeout(250);
  pruefe('Info-Bildschirm erscheint', await page.isVisible('#seite-pruefung-info'), true);
  const teilzeilen = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#pinfo-teile .pruef-teilzeile'))
         .map(z => z.querySelector('.pruef-teilname').textContent));
  pruefe('alle vier Teile aufgeführt', teilzeilen,
         ['Leseverstehen', 'Hörverstehen', 'Sprachbausteine', 'Schreiben']);

  /* ---------- 3. Eine Prüfung ist keine Übung ---------- */
  console.log('\n=== Prüfungsregeln ===');
  await page.click('#btn-pruefung-los'); await page.waitForTimeout(250);

  const ersteAntwort = await page.evaluate(() => {
    const p = App.pruefung;
    const f = p.aufgaben[0].aufgabe.fragen[0];
    document.querySelector(`.pruef-optionen[data-frage="${f.id}"] .pruef-option`).click();
    return { id: f.id, wert: p.antworten[f.id] };
  });
  pruefe('Antwort wird gespeichert', !!ersteAntwort.wert, true);
  pruefe('keine Rückmeldung während der Prüfung',
         await page.evaluate(() => !!document.querySelector('.rueckmeldung:not([hidden])')), false);
  pruefe('kein Tipp-Knopf in der Prüfung',
         await page.evaluate(() => !!document.querySelector('#pruef-inhalt .tipp-knopf')), false);

  // Blättern darf nichts verlieren
  await page.click('#btn-pruef-weiter');  await page.waitForTimeout(80);
  await page.click('#btn-pruef-zurueck'); await page.waitForTimeout(80);
  pruefe('Antwort überlebt das Blättern',
         await page.evaluate(id => App.pruefung.antworten[id], ersteAntwort.id), ersteAntwort.wert);
  pruefe('Auswahl ist noch markiert',
         await page.evaluate(id => !!document.querySelector(`.pruef-optionen[data-frage="${id}"] .pruef-option.gewaehlt`), ersteAntwort.id), true);

  // Der Hörtext darf nicht zu lesen sein
  const hoertextSichtbar = await page.evaluate(() => {
    const p = App.pruefung;
    const i = p.aufgaben.findIndex(a => a.aufgabe.art === 'hoeren');
    if (i < 0) return null;
    p.index = i; App.pruefAufgabeZeigen();
    const audio = p.aufgaben[i].aufgabe.audio;
    return document.getElementById('pruef-inhalt').textContent.includes(audio.slice(0, 40));
  });
  pruefe('Hörtext steht nicht auf dem Bildschirm', hoertextSichtbar, false);

  await page.evaluate(() => { App.pruefung = null; });

  /* ---------- 3b. Ohne Stimme faellt der Hoerteil weg ---------- */
  console.log('\n=== Gerät ohne Sprachausgabe ===');
  await page.goto(URL, { waitUntil: 'networkidle' }); await page.waitForTimeout(250);
  // Hier NICHT stubben: der Testbrowser hat wirklich keine Stimme.
  await page.click('#btn-pruefung'); await page.waitForTimeout(250);
  pruefe('Warnung wird eingeblendet', await page.isVisible('#pinfo-hoerwarnung'), true);
  const ohneStimme = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#pinfo-teile .pruef-teilname')).map(z => z.textContent));
  pruefe('Hörverstehen fehlt in der Liste', ohneStimme.includes('Hörverstehen'), false);
  pruefe('die anderen Teile bleiben', ohneStimme, ['Leseverstehen', 'Sprachbausteine', 'Schreiben']);
  pruefe('Punkte sinken auf 25',
         await page.evaluate(() => Pruefungen.maxPunkte(Pruefungen.ohneHoeren(Pruefungen.nachId('p-es-es-a2')))), 25);

  await page.goto(URL, { waitUntil: 'networkidle' }); await page.waitForTimeout(250);

  /* ---------- 4. Alles falsch ---------- */
  console.log('\n=== Durchlauf: alles falsch ===');
  await vorbereiten(page);
  await durchspielen(page, 'falsch');
  let e = await page.evaluate(() => App.letztesErgebnis);
  pruefe('null Punkte', e.punkte, 0);
  pruefe('nicht bestanden', e.bestanden, false);
  pruefe('Urteil im Kopf', (await page.textContent('#perg-urteil')).trim(), 'Nicht bestanden');
  pruefe('Durchsicht zeigt alle 35 Fehler',
         await page.evaluate(() => document.querySelectorAll('#perg-durchsicht .pruef-durchsicht-zeile.weg').length), 35);

  /* ---------- 5. Alles richtig (ohne den Stand zu leeren) ---------- */
  console.log('\n=== Durchlauf: alles richtig ===');
  await vorbereiten(page);
  await durchspielen(page, 'richtig');
  e = await page.evaluate(() => App.letztesErgebnis);
  pruefe('Ergebnisbildschirm erscheint', await page.isVisible('#seite-pruefung-ergebnis'), true);
  pruefe('volle Punktzahl', [e.punkte, e.max], [35, 35]);
  pruefe('100 Prozent', e.prozent, 100);
  pruefe('bestanden', e.bestanden, true);
  pruefe('Schreibaufgabe bleibt offen', e.offen.length, 1);
  pruefe('Schreibtext wurde mitgenommen', e.offen[0].antwort.startsWith('Querido Miguel'), true);
  pruefe('Schreiben zählt nicht in die Punkte', e.teile.find(x => x.id === 't4').max, 0);
  pruefe('Urteil im Kopf', (await page.textContent('#perg-urteil')).trim(), 'Bestanden');

  /* ---------- 6. Die Bestehensgrenze ---------- */
  console.log('\n=== Bestehensgrenze ===');
  const grenze = await page.evaluate(() => {
    const def = Pruefungen.nachId('p-es-es-a2');
    const fragen = Pruefungen.fragen(def).filter(f => f.aufgabe.art !== 'schreiben');
    const bauen = n => {
      const a = {};
      fragen.forEach((f, i) => { a[f.frage.id] = i < n ? f.frage.loesung : 'ZZZ'; });
      return Pruefungen.auswerten(def, a);
    };
    return { knapp: bauen(20), genau: bauen(21) };   // 20/35 = 57 %, 21/35 = 60 %
  });
  pruefe('20 von 35 reichen nicht', [grenze.knapp.prozent, grenze.knapp.bestanden], [57, false]);
  pruefe('21 von 35 reichen',       [grenze.genau.prozent, grenze.genau.bestanden], [60, true]);

  /* ---------- 7. Versuche werden gespeichert ---------- */
  console.log('\n=== Gespeicherte Versuche ===');
  const stand = await page.evaluate(() => ({
    versuche: Pruefungen.versuche('p-es-es-a2').length,
    bestes:   Pruefungen.bestesErgebnis('p-es-es-a2'),
    bestanden: Pruefungen.bestanden('p-es-es-a2')
  }));
  pruefe('zwei Versuche abgelegt', stand.versuche, 2);
  pruefe('bestes Ergebnis gemerkt', stand.bestes, 100);
  pruefe('als bestanden vermerkt', stand.bestanden, true);

  await page.goto(URL, { waitUntil: 'networkidle' }); await page.waitForTimeout(250);
  pruefe('bestandene Prüfung verschwindet vom Startbildschirm',
         await page.isVisible('#pruefkarte'), false);

  await page.screenshot({ path: U.bild('p1-ergebnis.png'), fullPage: true });

  /* ---------- Konsole ---------- */
  console.log('\n=== Konsole ===');
  pruefe('keine JavaScript-Fehler', konsole, []);

  console.log('');
  if (fehler.length) { console.log(`${fehler.length} FEHLER`); }
  else console.log('Alle Prüfungs-Tests bestanden.');
  await b.close();
  process.exit(fehler.length ? 1 : 0);
})();
