/* Prüft den Sprechteil der Prüfung (Stufe 2 der Sprechübungen).

   Der ganze Weg in zwei getrennten Browserkontexten:
     Lernender: aufnehmen → abgeben → Link + Audiodatei teilen
     Prüfer:    Link öffnen → Datei öffnen → bewerten → Rücklink
     Lernender: Rücklink öffnen → Bewertung steht beim Sprechteil

   Das Teilen-Menü des Handys gibt es im Testbrowser nicht. Es wird deshalb
   durch eine Attrappe ersetzt, die festhält, WAS geteilt werden sollte —
   Text und Dateien. Ob WhatsApp & Co. das dann wirklich so weitergeben,
   kann nur ein Test auf dem echten Gerät zeigen. */
const U = require('./umgebung');
const URL = U.URL;
let fehler = 0;
const pruefe = (n, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (!ok) { fehler++; console.log(`  x ${n}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
  else console.log(`  + ${n}`);
};

/* Attrappe für das Teilen-Menü. annehmen(datei) entscheidet, welche Dateien
   "das Handy" mitnehmen würde — so lässt sich auch Chromes Typ-Liste spielen. */
async function teilenAttrappe(page, annehmen) {
  await page.evaluate(regel => {
    window.__geteilt = null;
    const nimmt = d => (d.files || []).every(f => regel === 'alles' || f.type === regel);
    Object.defineProperty(navigator, 'canShare', { configurable: true, value: d => nimmt(d) });
    Object.defineProperty(navigator, 'share', { configurable: true, value: async d => {
      window.__geteilt = { text: d.text, files: (d.files || []).map(f => ({ name: f.name, type: f.type, size: f.size })) };
      window.__geteilteDatei = (d.files || [])[0] || null;
    } });
  }, annehmen);
}

/* Wie viele Aufnahmen liegen in der Geräte-Ablage (IndexedDB)? */
const ablageAnzahl = page => page.evaluate(() => Aufnahme._vorgang('readonly', tab => tab.count()));

/* Liegt diese Aufnahme dauerhaft in der Ablage (nicht nur im Arbeitsspeicher)? */
const dauerhaftDa = (page, schluessel) => page.evaluate(async k => {
  delete Aufnahme._fluechtig[k];
  return !!(await Aufnahme.holen(k));
}, schluessel);

(async () => {
  const b = await U.browserStarten();
  const ctxA = await b.newContext(Object.assign({ locale: 'de-DE', acceptDownloads: true }, U.ANSICHT));
  await ctxA.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: new globalThis.URL(URL).origin });
  const a = await ctxA.newPage();
  const konsole = [];
  a.on('pageerror', e => konsole.push('A PAGEERROR: ' + e.message));
  a.on('console', m => { if (m.type() === 'error') konsole.push('A CONSOLE: ' + m.text()); });
  let letzteMeldung = '';
  a.on('dialog', d => { letzteMeldung = d.message(); d.accept(); });

  await a.goto(URL, { waitUntil: 'networkidle' }); await a.waitForTimeout(300);

  /* ---------- Vorbereitung: erste Prüfung des LatAm-Kurses freischalten ---------- */
  const P = await a.evaluate(() => {
    const def = Pruefungen.fuerKurs('es-419')[0];
    const sp = Pruefungen.fragen(def).find(f => f.aufgabe.art === 'sprechen');
    return { id: def.id, nachTag: def.nachTag, fid: sp.frage.id, dauer: sp.frage.dauer,
             auftrag: sp.frage.auftrag, auftragZiel: sp.frage.auftragZiel, niveau: def.niveau };
  });
  console.log(`    Prüfung ${P.id}, Sprechaufgabe ${P.fid}`);
  const vorbereiten = async () => {
    await a.evaluate(tag => {
      localStorage.clear(); Speicher.laden(); Kurse.wechseln('es-419');
      const f = Speicher.fortschritt(); f.aktuellerTag = tag; Speicher.sichern();
    }, P.nachTag + 1);
    await a.reload({ waitUntil: 'networkidle' }); await a.waitForTimeout(250);
    await a.evaluate(() => { Sprache.kannHoeren = () => true; });
  };
  await vorbereiten();
  await a.evaluate(() => Aufnahme.allesLoeschen());

  console.log('\n=== Info-Seite ===');
  await a.click('#btn-pruefung'); await a.waitForTimeout(200);
  const zeilen = await a.$$eval('#pinfo-teile .pruef-teilzeile', z => z.map(x => x.textContent.replace(/\s+/g, ' ').trim()));
  pruefe('Sprechteil wird aufgeführt', zeilen.some(z => z.startsWith('Sprechen')), true);
  pruefe('und von einem Menschen bewertet', zeilen.find(z => z.startsWith('Sprechen')).includes('Menschen'), true);
  pruefe('keine Mikrofon-Warnung', await a.isVisible('#pinfo-sprechwarnung'), false);

  console.log('\n=== Die Sprechaufgabe ===');
  await a.click('#btn-pruefung-los'); await a.waitForTimeout(250);
  // Alle automatisch bewerteten Fragen richtig beantworten, dann zum Sprechteil
  await a.evaluate(() => {
    const p = App.pruefung;
    for (const f of Pruefungen.fragen(p.def)) {
      if (!Pruefungen.istOffeneArt(f.aufgabe.art)) p.antworten[f.frage.id] = f.frage.loesung;
    }
    p.index = p.aufgaben.findIndex(x => x.aufgabe.art === 'sprechen');
    App.pruefAufgabeZeigen();
  });
  pruefe('ist die letzte Aufgabe (Knopf heißt Abgeben)', (await a.textContent('#btn-pruef-weiter')).trim(), 'Abgeben');
  pruefe('Aufgabenstellung auf Deutsch', (await a.textContent('.pruef-auftrag p')).trim(), P.auftrag);
  pruefe('Aufnahmeknopf', (await a.textContent('#pruef-aufnehmen')).trim(), '🎙️ Antwort aufnehmen');
  pruefe('Höchstdauer wird genannt',
    (await a.textContent('.pruef-sprechen .hinweis')).includes(await a.evaluate(s => Aufnahme.dauerText(s), P.dauer)), true);

  await a.click('#pruef-aufnehmen'); await a.waitForTimeout(400);
  pruefe('Zeitanzeige läuft', (await a.textContent('#pruef-sprech-status')).includes('Aufnahme läuft'), true);
  pruefe('Knopf zeigt Beenden', (await a.textContent('#pruef-aufnehmen')).trim(), '⏹ Aufnahme beenden');
  await a.screenshot({ path: U.bild('ps1-aufnahme-laeuft.png'), fullPage: true });
  await a.waitForTimeout(1300);
  await a.click('#pruef-aufnehmen');
  await a.waitForSelector('#pruef-sprech-ergebnis:not([hidden])', { timeout: 3000 });
  const erste = await a.evaluate(fid => App.pruefung.antworten[fid], P.fid);
  pruefe('Antwort ist ein Verweis auf die Aufnahme', !!(erste && erste.aufnahme), true);
  pruefe('mit Dauer', erste.dauer >= 1, true);
  pruefe('Aufnahme liegt dauerhaft in der Ablage', await dauerhaftDa(a, erste.aufnahme), true);
  pruefe('Player zeigt die Aufnahme', (await a.getAttribute('#pruef-sprech-audio', 'src') || '').startsWith('blob:'), true);
  pruefe('Knopf heißt jetzt Neu aufnehmen', (await a.textContent('#pruef-aufnehmen')).trim(), '🎙️ Neu aufnehmen');
  pruefe('Mikrofon wieder frei', await a.evaluate(() => Aufnahme._laufend), null);
  await a.screenshot({ path: U.bild('ps2-aufnahme-fertig.png'), fullPage: true });

  console.log('\n=== Neu aufnehmen ersetzt die alte Aufnahme ===');
  await a.click('#pruef-aufnehmen'); await a.waitForTimeout(1200);
  await a.click('#pruef-aufnehmen'); await a.waitForTimeout(500);
  const zweite = await a.evaluate(fid => App.pruefung.antworten[fid], P.fid);
  pruefe('neuer Schlüssel', zweite.aufnahme !== erste.aufnahme, true);
  pruefe('alte Aufnahme gelöscht', await dauerhaftDa(a, erste.aufnahme), false);
  pruefe('genau eine Aufnahme in der Ablage', await ablageAnzahl(a), 1);

  console.log('\n=== Zurück- und wieder Vorblättern ===');
  await a.click('#btn-pruef-zurueck'); await a.waitForTimeout(200);
  await a.click('#btn-pruef-weiter');  await a.waitForTimeout(400);
  pruefe('Aufnahme wird wieder angezeigt', await a.isVisible('#pruef-sprech-ergebnis'), true);

  console.log('\n=== Abgeben, während die Aufnahme noch läuft ===');
  await a.click('#pruef-aufnehmen'); await a.waitForTimeout(1200);
  await a.click('#btn-pruef-weiter');                          // = Abgeben
  await a.waitForSelector('#seite-pruefung-ergebnis:not([hidden])', { timeout: 4000 });
  await a.waitForTimeout(300);
  const versuch = await a.evaluate(() => App.letztesErgebnis);
  const offenSp = versuch.offen.find(o => o.art === 'sprechen');
  pruefe('Aufnahme ist trotzdem in der Abgabe', !!(offenSp && offenSp.antwort && offenSp.antwort.aufnahme), true);
  pruefe('und es ist die dritte, nicht die zweite', offenSp.antwort.aufnahme !== zweite.aufnahme, true);
  pruefe('Mikrofon nach der Abgabe frei', await a.evaluate(() => Aufnahme._laufend), null);
  pruefe('trotzdem volle Punktzahl (Sprechen zählt nicht)', [versuch.punkte, versuch.max], [35, 35]);

  console.log('\n=== Ergebnisseite ===');
  await a.waitForFunction(() => {
    const el = document.querySelector('#perg-offen audio[data-aufnahme]');
    return el && el.src.startsWith('blob:');
  }, null, { timeout: 3000 }).catch(() => {});
  pruefe('eigene Aufnahme zum Anhören: Player hat eine blob-Adresse',
    (await a.evaluate(() => (document.querySelector('#perg-offen audio[data-aufnahme]') || {}).src || '')).startsWith('blob:'), true);
  pruefe('zwei offene Aufgaben', await a.$$eval('.pruef-offen-block', x => x.length), 2);
  pruefe('nur EIN Knopf zum Verschicken', await a.$$eval('[data-teilen]', x => x.length), 1);
  pruefe('Hinweis: Aufnahme geht als Datei mit',
    (await a.textContent('.pruef-teilen-knoepfe')).includes('Audiodatei'), true);
  await a.screenshot({ path: U.bild('ps3-ergebnis.png'), fullPage: true });

  console.log('\n=== Verschicken: Link und Datei in einer Nachricht ===');
  await teilenAttrappe(a, 'alles');
  await a.waitForTimeout(200);                               // Dateien liegen bereit
  await a.click('[data-teilen]'); await a.waitForTimeout(400);
  const geteilt = await a.evaluate(() => window.__geteilt);
  pruefe('geteilt wurde', !!geteilt, true);
  pruefe('Text ist der Prüfer-Link', !!geteilt && geteilt.text.includes('#pruefen='), true);
  pruefe('genau eine Datei dabei', geteilt && geteilt.files.length, 1);
  const datei = geteilt.files[0];
  console.log(`    Datei: ${datei.name} · ${datei.type} · ${datei.size} Bytes`);
  pruefe('Dateiname nennt Prüfung, Kennung und Aufgabe',
    new RegExp(`^vamos-es-419-${P.niveau.toLowerCase()}-${versuch.id}-${P.fid}\\.(m4a|webm|ogg)$`).test(datei.name), true);
  pruefe('Audiotyp ohne Codec-Zusatz', /^audio\/[a-z0-9-]+$/.test(datei.type), true);
  pruefe('Datei nicht leer', datei.size > 500, true);
  pruefe('keine Fehlermeldung danach', letzteMeldung, '');

  const paket = await a.evaluate(t => Teilen.ausAdresse(t.slice(t.indexOf('#'))), geteilt.text);
  const tonEintrag = paket.daten.antworten.find(x => x.fid === P.fid);
  pruefe('Link nennt die Aufnahme', !!(tonEintrag && tonEintrag.ton), true);
  pruefe('mit Dauer und Dateinamen', [tonEintrag.ton.s >= 1, tonEintrag.ton.d], [true, datei.name]);
  pruefe('Link bleibt kurz', geteilt.text.length < 4000, true);
  console.log(`    Linklänge: ${geteilt.text.length} Zeichen`);

  console.log('\n=== Android-Chrome: nimmt M4A nur als audio/x-m4a ===');
  if (datei.type === 'audio/mp4') {
    await teilenAttrappe(a, 'audio/x-m4a');
    await a.click('[data-teilen]'); await a.waitForTimeout(400);
    const g2 = await a.evaluate(() => window.__geteilt);
    pruefe('Datei wird als audio/x-m4a geteilt', g2 && g2.files[0].type, 'audio/x-m4a');
  } else console.log('    (übersprungen — dieser Browser nimmt nicht als MP4 auf)');

  console.log('\n=== Rechner ohne Teilen-Menü: herunterladen und kopieren ===');
  await a.evaluate(() => {
    Object.defineProperty(navigator, 'canShare', { configurable: true, value: undefined });
    Object.defineProperty(navigator, 'share', { configurable: true, value: undefined });
  });
  letzteMeldung = '';
  const [download] = await Promise.all([
    a.waitForEvent('download', { timeout: 4000 }).catch(() => null),
    a.click('[data-teilen]')
  ]);
  await a.waitForTimeout(400);
  pruefe('Aufnahme wird heruntergeladen', download && download.suggestedFilename(), datei.name);
  pruefe('Link liegt in der Zwischenablage',
    (await a.evaluate(() => navigator.clipboard.readText())).includes('#pruefen='), true);
  pruefe('Meldung erklärt beides', letzteMeldung.includes('heruntergeladen') && letzteMeldung.includes('Zwischenablage'), true);

  /* ---------- Der Prüfer ---------- */
  console.log('\n=== Der Prüfer öffnet den Link ===');
  const dateiBytes = await a.evaluate(async () => {
    const f = window.__geteilteDatei;
    const puffer = new Uint8Array(await f.arrayBuffer());
    let s = ''; for (const x of puffer) s += String.fromCharCode(x);
    return btoa(s);
  });
  const ctxB = await b.newContext(Object.assign({ locale: 'es-ES' }, U.ANSICHT));
  const p = await ctxB.newPage();
  p.on('pageerror', e => konsole.push('B PAGEERROR: ' + e.message));
  p.on('console', m => { if (m.type() === 'error') konsole.push('B CONSOLE: ' + m.text()); });
  p.on('dialog', d => d.accept());
  await p.goto(geteilt.text, { waitUntil: 'networkidle' }); await p.waitForTimeout(400);
  pruefe('Prüfer-Bildschirm', await p.isVisible('#seite-pruefer'), true);
  pruefe('zwei Blöcke', await p.$$eval('.pruefer-block', x => x.length), 2);
  const tonBlock = await p.evaluate(() => {
    const blk = document.querySelectorAll('.pruefer-block')[1];
    return {
      titel: blk.querySelectorAll('h3')[1].textContent.trim(),
      auftrag: blk.querySelector('.pruefer-auftrag p').textContent.trim(),
      text: blk.querySelector('.pruefer-ton').textContent.replace(/\s+/g, ' ').trim(),
      audioVersteckt: blk.querySelector('.pruefer-ton audio').hidden
    };
  });
  pruefe('Überschrift auf Spanisch', tonBlock.titel, 'La grabación');
  pruefe('Aufgabe in der Sprache des Prüfers', tonBlock.auftrag, P.auftragZiel);
  pruefe('Dateiname wird genannt (zum Zuordnen im Chat)', tonBlock.text.includes(datei.name), true);
  pruefe('Player erst nach dem Öffnen der Datei', tonBlock.audioVersteckt, true);

  await p.setInputFiles('.pruefer-ton input[type="file"]', {
    name: datei.name, mimeType: datei.type, buffer: Buffer.from(dateiBytes, 'base64')
  });
  await p.waitForTimeout(300);
  pruefe('Datei hier geöffnet: Player sichtbar',
    await p.evaluate(() => { const x = document.querySelector('.pruefer-ton audio'); return !x.hidden && x.src.startsWith('blob:'); }), true);
  await p.screenshot({ path: U.bild('ps4-pruefer.png'), fullPage: true });

  await p.click('.pruefer-urteile >> nth=0 >> [data-urteil="richtig"]');
  await p.click('.pruefer-urteile >> nth=1 >> [data-urteil="teilweise"]');
  await p.fill(`.pruefer-hinweis[data-frage="${P.fid}"]`, 'Buena pronunciación. Ojo: «me gustan los parques», en plural.');
  await p.fill('#pruefer-name', 'Lucía');
  await teilenAttrappe(p, 'alles');
  await p.click('#btn-pruefer-senden'); await p.waitForTimeout(300);
  const rueck = await p.evaluate(() => window.__geteilt && window.__geteilt.text);
  pruefe('Rücklink erzeugt', !!rueck && rueck.includes('#bewertung='), true);
  await ctxB.close();

  console.log('\n=== Die Bewertung kommt an ===');
  await a.goto(rueck, { waitUntil: 'networkidle' }); await a.waitForTimeout(400);
  const bw = await a.evaluate(({ id, fid }) => Pruefungen.versuchNachId(id).versuch.bewertungen[fid], { id: versuch.id, fid: P.fid });
  pruefe('Urteil zum Sprechteil abgelegt', bw && bw.urteil, 'teilweise');
  pruefe('Hinweis mit Sonderzeichen heil', bw && bw.hinweis.includes('«me gustan los parques»'), true);
  pruefe('nichts wartet mehr', await a.evaluate(id => Pruefungen.wartetAufBewertung(Pruefungen.versuchNachId(id).versuch), versuch.id), false);
  const bloecke = await a.$$eval('.pruef-offen-block', x => x.map(b => ({
    urteil: (b.querySelector('.pruef-bewertung') || { className: '' }).className,
    audio: !!b.querySelector('audio')
  })));
  pruefe('Bewertung steht beim Sprechteil', bloecke[1].urteil.includes('urteil-teilweise'), true);
  pruefe('die eigene Aufnahme ist weiter anhörbar', bloecke[1].audio, true);
  await a.screenshot({ path: U.bild('ps5-bewertung-da.png'), fullPage: true });

  console.log('\n=== Bewertung von Hand eintragen: Aufnahme liegt hier ===');
  await a.evaluate(id => {
    const fund = Pruefungen.versuchNachId(id);
    App.prueferModusStarten(Teilen.auftragPacken(fund.versuch), true);
  }, versuch.id);
  await a.waitForTimeout(400);
  const selbst = await a.evaluate(() => {
    const blk = document.querySelector('.pruefer-ton');
    const audio = blk.querySelector('audio');
    return { sichtbar: !audio.hidden && audio.src.startsWith('blob:'), dateiKnopf: blk.querySelector('.pruefer-datei').hidden };
  });
  pruefe('eigene Aufnahme direkt abspielbar', selbst.sichtbar, true);
  pruefe('kein "Datei öffnen" nötig', selbst.dateiKnopf, true);
  await a.evaluate(() => App.prueferVerlassen());

  console.log('\n=== Abbrechen löscht die Aufnahme ===');
  await a.evaluate(() => { App.pruefungGewaehlt = Pruefungen.fuerKurs('es-419')[0]; App.pruefungStarten(); });
  await a.evaluate(() => {
    const p = App.pruefung;
    p.index = p.aufgaben.findIndex(x => x.aufgabe.art === 'sprechen');
    App.pruefAufgabeZeigen();
  });
  const vorher = await ablageAnzahl(a);
  await a.click('#pruef-aufnehmen'); await a.waitForTimeout(1100);
  await a.click('#pruef-aufnehmen'); await a.waitForTimeout(500);
  pruefe('neue Aufnahme abgelegt', await ablageAnzahl(a), vorher + 1);
  await a.click('#pruef-aufnehmen'); await a.waitForTimeout(500);   // läuft beim Abbrechen
  await a.click('#btn-pruef-aufgeben'); await a.waitForTimeout(500);
  pruefe('nach dem Abbrechen wieder wie vorher', await ablageAnzahl(a), vorher);
  pruefe('Mikrofon frei', await a.evaluate(() => Aufnahme._laufend), null);
  pruefe('Aufnahme der abgegebenen Prüfung bleibt', await dauerhaftDa(a, offenSp.antwort.aufnahme), true);

  console.log('\n=== Alles zurücksetzen löscht auch die Aufnahmen ===');
  await a.click('#btn-menue'); await a.waitForTimeout(120);
  await a.click('#menue button[data-ziel="einstellungen"]'); await a.waitForTimeout(200);
  await a.click('#btn-reset'); await a.waitForTimeout(500);
  pruefe('Ablage leer', await ablageAnzahl(a), 0);

  console.log('\n=== Gerät ohne Aufnahmefunktion ===');
  const ctxC = await b.newContext(Object.assign({ locale: 'de-DE' }, U.ANSICHT));
  await ctxC.addInitScript(() => { window.MediaRecorder = undefined; });
  const c = await ctxC.newPage();
  c.on('pageerror', e => konsole.push('C PAGEERROR: ' + e.message));
  c.on('dialog', d => d.accept());
  await c.goto(URL, { waitUntil: 'networkidle' }); await c.waitForTimeout(250);
  await c.evaluate(tag => {
    localStorage.clear(); Speicher.laden(); Kurse.wechseln('es-419');
    const f = Speicher.fortschritt(); f.aktuellerTag = tag; Speicher.sichern();
  }, P.nachTag + 1);
  await c.reload({ waitUntil: 'networkidle' }); await c.waitForTimeout(250);
  await c.evaluate(() => { Sprache.kannHoeren = () => true; });
  await c.click('#btn-pruefung'); await c.waitForTimeout(200);
  pruefe('Warnung: Sprechteil entfällt', await c.isVisible('#pinfo-sprechwarnung'), true);
  pruefe('Sprechen fehlt in der Liste',
    (await c.$$eval('#pinfo-teile .pruef-teilname', z => z.map(x => x.textContent))).includes('Sprechen'), false);
  await c.click('#btn-pruefung-los'); await c.waitForTimeout(200);
  pruefe('keine Sprechaufgabe in der Prüfung',
    await c.evaluate(() => App.pruefung.aufgaben.some(x => x.aufgabe.art === 'sprechen')), false);
  await c.evaluate(() => {
    const p = App.pruefung;
    for (const f of Pruefungen.fragen(p.def)) if (!Pruefungen.istOffeneArt(f.aufgabe.art)) p.antworten[f.frage.id] = f.frage.loesung;
    App.pruefungAbgeben();
  });
  await c.waitForTimeout(250);
  const ohne = await c.evaluate(() => App.letztesErgebnis);
  pruefe('trotzdem volle Punktzahl', [ohne.punkte, ohne.max], [35, 35]);
  pruefe('offen bleibt nur das Schreiben', ohne.offen.map(o => o.art), ['schreiben']);
  await ctxC.close();

  console.log('\n=== Konsole ===');
  const echte = konsole.filter(f => !/404|favicon|manifest/i.test(f));
  pruefe('keine JavaScript-Fehler', echte, []);
  if (echte.length) console.log(echte.join('\n'));
  await b.close();
  console.log(fehler ? `\n${fehler} FEHLER` : '\nAlle Tests zum Sprechteil der Prüfung bestanden.');
  process.exit(fehler ? 1 : 0);
})();
