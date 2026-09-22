const U = require('./umgebung');
const URL = U.URL;

let fehler = 0;
const pruefe = (name, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (!ok) { fehler++; console.log(`  ✗ ${name}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
  else console.log(`  ✓ ${name}`);
};

/* Spielt die laufende Sitzung durch. falschJede = jede n-te Antwort absichtlich falsch. */
async function durchspielen(page, opt = {}) {
  const { falschJede = 0, maxSchritte = 500, screenshotTypen = null } = opt;
  const gesehen = {};
  let n = 0;
  while (n < maxSchritte) {
    const z = await page.evaluate(() => {
      if (!document.getElementById('seite-fertig').hidden) return { fertig: true };
      if (document.getElementById('seite-uebung').hidden) return { fertig: true, abgebrochen: true };
      const i = document.getElementById('uebung-inhalt');
      const a = App.sitzung ? App.sitzung.aufgaben[App.sitzung.index] : null;
      return {
        fertig: false, typ: a && a.typ, phase: a && a.phase,
        nurAnsehen: !!(App.aktuell && App.aktuell.nurAnsehen),
        optionen: !!i.querySelector('.option'),
        feld: !!i.querySelector('#tipp-feld'),
        tap: !!i.querySelector('#tap-vorrat')
      };
    });
    if (z.fertig) return { gesehen, schritte: n, abgebrochen: z.abgebrochen };
    n++;
    gesehen[z.typ] = (gesehen[z.typ] || 0) + 1;

    if (screenshotTypen && gesehen[z.typ] === 1 && screenshotTypen.includes(z.typ)) {
      await page.screenshot({ path: U.bild(`typ-${z.typ}.png`) });
    }
    if (z.nurAnsehen) { await page.click('#btn-weiter'); await page.waitForTimeout(45); continue; }

    const sollFalsch = falschJede > 0 && n % falschJede === 0;

    if (z.optionen) {
      const loesung = await page.evaluate(() => {
        const a = App.sitzung.aufgaben[App.sitzung.index];
        return a.richtung === 'nachZiel' ? Uebungen.ziel(a.karte) : Uebungen.ausgang(a.karte);
      });
      const opts = await page.$$('.option');
      let ziel = null;
      for (const o of opts) {
        const w = await o.getAttribute('data-wert');
        if (sollFalsch ? w !== loesung : w === loesung) { ziel = o; break; }
      }
      await (ziel || opts[0]).click();
    } else if (z.tap) {
      if (sollFalsch) await page.click('#tap-vorrat .tap-wort:not(.benutzt)');
      else {
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
      }
    } else if (z.feld) {
      const loesung = await page.evaluate(() => {
        const a = App.sitzung.aufgaben[App.sitzung.index];
        if (a.typ === 'luecke')  return a.karte.loesung;
        if (a.typ === 'hoeren')  return Uebungen.ziel(a.karte);
        return a.richtung === 'nachAusgang' ? Uebungen.ausgang(a.karte) : Uebungen.ziel(a.karte);
      });
      await page.fill('#tipp-feld', sollFalsch ? 'zzz' : loesung);
    }
    await page.click('#btn-pruefen');
    await page.waitForTimeout(50);
    await page.click('#btn-weiter');
    await page.waitForTimeout(45);
  }
  return { gesehen, schritte: n, abbruch: 'Limit erreicht' };
}

(async () => {
  const browser = await U.browserStarten();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, locale: 'de-DE' });
  const page = await ctx.newPage();
  const konsole = [];
  page.on('console', m => { if (m.type() === 'error') konsole.push('CONSOLE: ' + m.text()); });
  page.on('pageerror', e => konsole.push('PAGEERROR: ' + e.message));

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  console.log('\n=== 0. Kursauswahl ===');
  pruefe('Kursauswahl beim ersten Start', await page.isVisible('#seite-kurse'), true);
  await page.click('.kurs-karte[data-kurs="es-es"]'); await page.waitForTimeout(300);
  pruefe('Spanien-Kurs aktiv', await page.evaluate(() => Kurse.aktiv().id), 'es-es');

  console.log('\n=== 1. Daten vollständig geladen ===');
  pruefe('60 Lektionen', await page.evaluate(() => Daten.anzahlTage()), 60);
  pruefe('600 Vokabeln', await page.evaluate(() => Daten.alleVokabeln().length), 600);
  pruefe('300 Sätze', await page.evaluate(() => Daten.alleSaetze().length), 300);
  pruefe('Startanzeige "Tag 1 von 60"',
    (await page.textContent('.tageskarte-tag')).replace(/\s+/g, ' ').trim(), 'Tag 1 von 60');
  await page.screenshot({ path: U.bild(`01-start.png`) });

  console.log('\n=== 2. Tag 1 komplett, jede 7. Antwort falsch ===');
  await page.click('#btn-lernen'); await page.waitForTimeout(250);
  await page.screenshot({ path: U.bild(`02-karte.png`) });
  const r1 = await durchspielen(page, { falschJede: 7, screenshotTypen: ['mc','tippen','tapping','luecke','erklaerung'] });
  console.log('  Übungstypen:', JSON.stringify(r1.gesehen));
  pruefe('alle Vokabeln 3x (ansehen, MC, tippen)', [r1.gesehen.karte, r1.gesehen.mc, r1.gesehen.tippen], [10,10,10]);
  pruefe('5 Sätze', r1.gesehen.tapping, 5);
  pruefe('1 Grammatik-Erklärung + 5 Lücken', [r1.gesehen.erklaerung, r1.gesehen.luecke], [1,5]);
  await page.waitForTimeout(200);
  await page.screenshot({ path: U.bild(`05-fertig.png`) });

  const s1 = await page.evaluate(() => ({
    tag: Speicher.fortschritt().aktuellerTag,
    karten: Object.keys(Speicher.fortschritt().karten).length,
    gelernt: SRS.anzahlGelernt(),
    aktiveTage: Speicher.fortschritt().aktiveTage.length,
    streak: Statistik.streak(),
    genauigkeit: Statistik.genauigkeit()
  }));
  console.log('  Zustand:', JSON.stringify(s1));
  pruefe('Tageszähler auf 2', s1.tag, 2);
  pruefe('20 Karten angelegt (10 Vok + 5 Sätze + 5 Gram.)', s1.karten, 20);
  pruefe('1 aktiver Tag', s1.aktiveTage, 1);
  pruefe('Streak 1', s1.streak, 1);
  pruefe('einige Wörter gelernt', s1.gelernt > 0 && s1.gelernt < 20, true);

  console.log('\n=== 3. Neustart-Test: Fortschritt überlebt das Neuladen ===');
  await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(400);
  const s2 = await page.evaluate(() => ({
    tag: Speicher.fortschritt().aktuellerTag,
    karten: Object.keys(Speicher.fortschritt().karten).length,
    angezeigt: document.getElementById('tag-thema').textContent,
    woerterAnzeige: document.getElementById('stat-woerter').textContent
  }));
  pruefe('Tag weiterhin 2', s2.tag, 2);
  pruefe('Karten erhalten', s2.karten, 20);
  pruefe('Tag-2-Thema angezeigt', s2.angezeigt, 'Meine Wohnung');
  pruefe('Zähler zeigt gelernte Wörter', s2.woerterAnzeige, String(s1.gelernt));

  console.log('\n=== 4. Problemwörter: 4x falsch macht ein Leech, es kehrt wieder ===');
  const leechId = await page.evaluate(() => {
    const id = Object.keys(Speicher.fortschritt().karten)[0];
    for (let i = 0; i < 4; i++) SRS.antwort(id, false, 'falsch');
    return id;
  });
  await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(400);
  pruefe('Kachel zeigt 1 Problemwort', await page.textContent('#stat-leeches'), '1');
  const imPlan = await page.evaluate(id => {
    const auf = Tagesplan.bauen('voll');
    const treffer = auf.filter(a => a.karte.id === id);
    return { anzahl: treffer.length, phase: treffer[0] && treffer[0].phase, typ: treffer[0] && treffer[0].typ,
             ersteAufgabe: auf[0] && auf[0].phase };
  }, leechId);
  pruefe('Problemwort steht im Tagesplan', imPlan.anzahl >= 1, true);
  pruefe('als Phase "problem"', imPlan.phase, 'problem');
  pruefe('und wird getippt, nicht geraten', imPlan.typ, 'tippen');
  pruefe('Problemwörter kommen zuerst', imPlan.ersteAufgabe, 'problem');

  console.log('\n=== 5. Historie ===');
  await page.click('#btn-menue'); await page.waitForTimeout(120);
  await page.click('#menue button[data-ziel="historie"]'); await page.waitForTimeout(250);
  pruefe('Historie zeigt Einträge', (await page.$$('#historie-liste .h-zeile')).length, 20);
  await page.screenshot({ path: U.bild(`07-historie.png`) });
  await page.click('.filter-leiste .chip[data-filter="leech"]'); await page.waitForTimeout(200);
  pruefe('Filter "Problemwörter" zeigt genau 1', (await page.$$('#historie-liste .h-zeile')).length, 1);
  pruefe('Eintrag ist als Problem markiert', (await page.$$('#historie-liste .h-zeile.ist-leech')).length, 1);
  pruefe('letzte Falscheingabe wird gezeigt',
    (await page.textContent('#historie-liste .h-letzte-fehler')).includes('falsch'), true);
  await page.screenshot({ path: U.bild(`07b-historie-leech.png`) });
  await page.click('.filter-leiste .chip[data-filter="alle"]'); await page.waitForTimeout(150);

  console.log('\n=== 6. Hör-Übung (Sprachausgabe simuliert) ===');
  await page.evaluate(() => {
    Sprache.verfuegbar = true;
    Sprache.stimme = { name: 'Test-Stimme', lang: 'es-ES' };
    window.__gesprochen = [];
    Sprache.sprich = t => window.__gesprochen.push(t);
  });
  await page.click('#btn-menue'); await page.waitForTimeout(120);
  await page.click('#menue button[data-ziel="start"]'); await page.waitForTimeout(250);
  const hoerErgebnis = await page.evaluate(() => {
    const karte = Daten.alleSaetze()[0];
    const b = document.getElementById('uebung-inhalt');
    const u = Uebungen.zeichnen({ typ: 'hoeren', karte, phase: 'satz' }, b);
    b.querySelector('#tipp-feld').value = Uebungen.ziel(karte);
    const r = u.pruefen();
    return { korrekt: r.korrekt, hatKnopf: !!b.querySelector('#hoer-ab'),
             hatLangsam: !!b.querySelector('#hoer-langsam'),
             akzenttasten: b.querySelectorAll('.akzent-taste').length };
  });
  pruefe('richtige Eingabe wird erkannt', hoerErgebnis.korrekt, true);
  pruefe('Abspiel-Knopf vorhanden', hoerErgebnis.hatKnopf, true);
  pruefe('Langsam-Knopf vorhanden', hoerErgebnis.hatLangsam, true);
  pruefe('9 Akzenttasten', hoerErgebnis.akzenttasten, 9);
  await page.screenshot({ path: U.bild(`typ-hoeren.png`) });

  console.log('\n=== 7. Akzent-Nachsicht und Artikel-Nachsicht ===');
  const v = await page.evaluate(() => ({
    akzentFehlt: Uebungen.vergleiche('sabado', 'sábado'),
    artikelFehlt: Uebungen.vergleiche('casa', 'la casa'),
    grossKlein:   Uebungen.vergleiche('LA CASA', 'la casa'),
    mehrereLoesungen: Uebungen.vergleiche('Wagen', 'das Auto, der Wagen'),
    echterFehler: Uebungen.vergleiche('haus', 'la casa'),
    leer: Uebungen.vergleiche('   ', 'casa')
  }));
  pruefe('fehlender Akzent = richtig, aber "fast"', v.akzentFehlt, { korrekt: true, fast: true });
  pruefe('fehlender Artikel = richtig', v.artikelFehlt, { korrekt: true, fast: false });
  pruefe('Großschreibung egal', v.grossKlein, { korrekt: true, fast: false });
  pruefe('mehrere Übersetzungen erlaubt', v.mehrereLoesungen.korrekt, true);
  pruefe('echter Fehler bleibt falsch', v.echterFehler.korrekt, false);
  pruefe('leere Eingabe ist falsch', v.leer.korrekt, false);

  console.log('\n=== 8. Nur-Wiederholen und Schnell-Wiederholung ===');
  await page.evaluate(() => {   // alle Karten fällig machen
    for (const k of Object.values(Speicher.fortschritt().karten)) k.faellig = Date.now() - 1000;
    Speicher.sichern();
  });
  await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(400);
  pruefe('"Nur Wiederholen" ist aktiv', await page.isDisabled('#btn-nur-wdh'), false);
  await page.click('#btn-nur-wdh'); await page.waitForTimeout(250);
  const rW = await durchspielen(page, { falschJede: 0 });
  console.log('  Wiederholung:', JSON.stringify(rW.gesehen), rW.schritte, 'Aufgaben');
  pruefe('Wiederholung enthält keine neuen Vokabeln', !!rW.gesehen.karte, false);
  pruefe('Wiederholung hat Aufgaben', rW.schritte > 0, true);
  const tagNachWdh = await page.evaluate(() => Speicher.fortschritt().aktuellerTag);
  pruefe('Wiederholung schaltet den Tag NICHT weiter', tagNachWdh, 2);
  await page.click('#btn-fertig-zurueck'); await page.waitForTimeout(250);

  await page.click('#btn-speed'); await page.waitForTimeout(250);
  const rS = await durchspielen(page, { falschJede: 0 });
  pruefe('Schnell-Wiederholung läuft', rS.schritte > 0, true);
  pruefe('Schnell-Wiederholung nur Multiple Choice / Lücke',
    Object.keys(rS.gesehen).every(t => t === 'mc' || t === 'luecke'), true);
  await page.click('#btn-fertig-zurueck'); await page.waitForTimeout(250);

  console.log('\n=== 9. Kalenderdatei (.ics) für 19:30 ===');
  const ics = await page.evaluate(() => {
    const echt = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function () {};
    const t = Statistik.kalenderHerunterladen();
    HTMLAnchorElement.prototype.click = echt;
    return t;
  });
  pruefe('täglich wiederkehrend', ics.includes('RRULE:FREQ=DAILY'), true);
  pruefe('19:30 Ortszeit Berlin', /DTSTART;TZID=Europe\/Berlin:\d{8}T193000/.test(ics), true);
  pruefe('Zeitzone mit Sommerzeitregel', ics.includes('TZID:Europe/Berlin') && ics.includes('BEGIN:DAYLIGHT'), true);
  pruefe('Benachrichtigung zur Startzeit', ics.includes('TRIGGER:PT0M') && ics.includes('ACTION:DISPLAY'), true);
  pruefe('Link zur App enthalten', ics.includes('URL:' + URL), true);
  pruefe('CRLF-Zeilenenden (ICS-Standard)', ics.includes('\r\n'), true);

  console.log('\n=== 10. Sicherung exportieren und einspielen ===');
  const sicherung = await page.evaluate(() => JSON.stringify(Speicher.daten));
  await page.evaluate(() => { Speicher.kursZuruecksetzen(); App.zeigeSeite('start'); });
  pruefe('nach Zurücksetzen: Tag 1', await page.evaluate(() => Speicher.fortschritt().aktuellerTag), 1);
  pruefe('nach Zurücksetzen: keine Karten', await page.evaluate(() => Object.keys(Speicher.fortschritt().karten).length), 0);
  pruefe('Kurs bleibt gewählt', await page.evaluate(() => Speicher.daten.aktiverKurs), 'es-es');
  await page.evaluate(t => { Speicher.importieren(t); App.zeigeSeite('start'); }, sicherung);
  pruefe('nach Import: Tag wieder 2', await page.evaluate(() => Speicher.fortschritt().aktuellerTag), 2);
  pruefe('nach Import: Karten wieder da', await page.evaluate(() => Object.keys(Speicher.fortschritt().karten).length), 20);
  const kaputt = await page.evaluate(() => {
    try { Speicher.importieren('{"quatsch":1}'); return 'kein Fehler'; }
    catch (e) { return 'Fehler abgefangen'; }
  });
  pruefe('kaputte Datei wird abgewiesen', kaputt, 'Fehler abgefangen');

  console.log('\n=== 11. Einstellungen ===');
  await page.click('#btn-menue'); await page.waitForTimeout(120);
  await page.click('#menue button[data-ziel="einstellungen"]'); await page.waitForTimeout(200);
  await page.selectOption('#ein-thema', 'dunkel'); await page.waitForTimeout(200);
  pruefe('dunkles Thema gesetzt', await page.getAttribute('html', 'data-thema'), 'dunkel');
  await page.screenshot({ path: U.bild(`09-einstellungen-dunkel.png`), fullPage: true });
  await page.selectOption('#ein-ziel', '15'); await page.waitForTimeout(150);
  pruefe('Tagesziel gespeichert', await page.evaluate(() => Speicher.einstellung('tagesziel')), 15);
  await page.evaluate(() => {
    for (const k of Object.values(Speicher.fortschritt().karten)) k.faellig = Date.now() - 1000;
    Speicher.sichern();
  });
  const anzahlBei15 = await page.evaluate(() => Tagesplan.bauen('nurWdh').length);
  pruefe('Tagesziel begrenzt die Wiederholung', anzahlBei15 <= 15, true);
  await page.click('#btn-menue'); await page.waitForTimeout(120);
  await page.click('#menue button[data-ziel="start"]'); await page.waitForTimeout(300);
  await page.screenshot({ path: U.bild(`10-start-dunkel.png`) });
  await page.selectOption('#ein-thema', 'auto').catch(() => {});

  console.log('\n=== 12. Erinnerungsseite ===');
  await page.click('#btn-menue'); await page.waitForTimeout(120);
  await page.click('#menue button[data-ziel="erinnerung"]'); await page.waitForTimeout(200);
  await page.screenshot({ path: U.bild(`08-erinnerung.png`), fullPage: true });
  pruefe('erklärt, warum kein Push', (await page.textContent('#seite-erinnerung')).includes('Notification Triggers'), true);
  pruefe('19:30 wird genannt', (await page.textContent('#seite-erinnerung')).includes('19:30'), true);

  console.log('\n=== 13. Offline-Test (Service Worker) ===');
  await page.evaluate(() => navigator.serviceWorker.ready).catch(() => {});
  await page.waitForTimeout(1500);
  await ctx.setOffline(true);
  const offline = await page.goto(URL, { waitUntil: 'domcontentloaded' }).then(r => r && r.status()).catch(e => 'FEHLER: ' + e.message);
  await page.waitForTimeout(500);
  const offlineOk = await page.evaluate(() => typeof Daten !== 'undefined' && Daten.anzahlTage() === 60).catch(() => false);
  pruefe('App lädt ohne Netz', offlineOk, true);
  await ctx.setOffline(false);

  console.log('\n=== 14. Letzter Tag: was passiert nach Tag 60? ===');
  await page.goto(URL, { waitUntil: 'networkidle' }); await page.waitForTimeout(400);
  await page.evaluate(() => { Speicher.fortschritt().aktuellerTag = 61; Speicher.sichern(); App.zeigeSeite('start'); });
  await page.waitForTimeout(200);
  pruefe('Abschlussmeldung erscheint', (await page.textContent('#tag-thema')).includes('geschafft'), true);
  pruefe('Knopf heißt jetzt "Wiederholen"', await page.textContent('#btn-lernen'), 'Wiederholen');
  await page.screenshot({ path: U.bild(`11-nach-tag-60.png`) });

  console.log('\n=== Konsole ===');
  const echteFehler = konsole.filter(f => !/favicon|manifest|Failed to load resource: the server responded with a status of 404/i.test(f));
  pruefe('keine JavaScript-Fehler', echteFehler, []);
  if (echteFehler.length) console.log(echteFehler.join('\n'));

  await browser.close();
  console.log(fehler ? `\n=== ${fehler} FEHLER ===` : '\n=== Alle E2E-Tests bestanden ===');
  process.exit(fehler ? 1 : 0);
})();
