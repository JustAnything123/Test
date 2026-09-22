/* Der komplette Prüfer-Rundlauf.

   Geprüft wird mit ZWEI getrennten Browserkontexten:

     kontext A  = der Lernende, mit Lernstand
     kontext B  = der Prüfer, ohne jeden Lernstand

   Getrennte Kontexte haben getrennten localStorage. Damit lässt sich wirklich
   nachweisen, was der entscheidende Punkt des Verfahrens ist: Der Prüfer
   braucht nichts als den Link. */
const U = require('./umgebung');
const URL = U.URL;
const fehler = [];

const pruefe = (name, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (ok) console.log('  + ' + name);
  else { fehler.push(name); console.log(`  x ${name}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
};

/* Ein Text mit allem, was beim Verpacken schiefgehen kann. */
const ANTWORT = 'Querido Miguel:\n\n¡Muchas gracias por tu invitación! Voy a ir en agosto.\n'
              + '¿Qué tiempo hace en Madrid? Grüße aus Köln — ä, ö, ü, ß, ñ, á, 100 %.\n\nUn abrazo';

(async () => {
  const b = await U.browserStarten();

  /* ---------- Kontext A: der Lernende ---------- */
  const ctxA = await b.newContext(Object.assign({ locale: 'de-DE' }, U.ANSICHT));
  const a = await ctxA.newPage();
  const konsoleA = [];
  a.on('pageerror', e => konsoleA.push('A PAGEERROR: ' + e.message));
  a.on('console', m => { if (m.type() === 'error') konsoleA.push('A CONSOLE: ' + m.text()); });
  a.on('dialog', d => d.accept());

  await a.goto(URL, { waitUntil: 'networkidle' });
  await a.evaluate(() => {
    localStorage.clear(); Speicher.laden(); Kurse.wechseln('es-es');
    const f = Speicher.fortschritt(); f.aktuellerTag = 34; Speicher.sichern();
  });
  await a.reload({ waitUntil: 'networkidle' }); await a.waitForTimeout(250);
  await a.evaluate(() => { Sprache.kannHoeren = () => true; });

  /* Prüfung ablegen, Schreibaufgabe ausfüllen */
  console.log('\n=== Prüfung mit Schreibaufgabe ablegen ===');
  await a.click('#btn-pruefung');     await a.waitForTimeout(150);
  await a.click('#btn-pruefung-los'); await a.waitForTimeout(250);
  await a.evaluate(text => {
    const p = App.pruefung;
    for (const f of Pruefungen.fragen(p.def)) {
      if (f.aufgabe.art !== 'schreiben') p.antworten[f.frage.id] = f.frage.loesung;
    }
    p.antworten['q4101'] = text;
    App.pruefungAbgeben();
  }, ANTWORT);
  await a.waitForTimeout(300);

  const versuch = await a.evaluate(() => App.letztesErgebnis);
  pruefe('Versuch hat eine Kennung', /^[A-Z2-9]{6}$/.test(versuch.id || ''), true);
  pruefe('Schreibaufgabe ist offen', versuch.offen.length, 1);
  pruefe('noch keine Bewertung', await a.evaluate(() => Pruefungen.wartetAufBewertung(App.letztesErgebnis)), true);

  /* Streifen auf dem Startbildschirm */
  await a.click('#btn-perg-zurueck'); await a.waitForTimeout(200);
  pruefe('Startbildschirm meldet die wartende Bewertung', await a.isVisible('#wartestreifen'), true);

  /* ---------- Den Link erzeugen ---------- */
  console.log('\n=== Link zum Prüfer ===');
  const link = await a.evaluate(() => Teilen.auftragLink(App.letztesErgebnis));
  pruefe('Link zeigt auf dieselbe App', link.startsWith(URL.split('#')[0]), true);
  pruefe('Link trägt den Prüfauftrag', link.includes('#pruefen='), true);
  pruefe('Link ist kurz genug', await a.evaluate(l => Teilen.linkTraegt(l), link), true);
  console.log(`    Länge: ${link.length} Zeichen (Grenze 4000)`);

  const entpackt = await a.evaluate(l => Teilen.ausAdresse(l.split(URL => URL)[0].slice(l.indexOf('#'))), link)
    .catch(() => null);

  /* ---------- Kontext B: der Prüfer, komplett frisch ---------- */
  console.log('\n=== Der Prüfer öffnet den Link ===');
  const ctxB = await b.newContext(Object.assign({ locale: 'es-ES' }, U.ANSICHT));
  const p = await ctxB.newPage();
  const konsoleB = [];
  p.on('pageerror', e => konsoleB.push('B PAGEERROR: ' + e.message));
  p.on('console', m => { if (m.type() === 'error') konsoleB.push('B CONSOLE: ' + m.text()); });
  p.on('dialog', d => d.accept());

  pruefe('Prüfer startet ohne jeden Lernstand',
         await p.evaluate(() => localStorage.length).catch(() => 0), 0);

  await p.goto(link, { waitUntil: 'networkidle' });
  await p.waitForTimeout(400);

  pruefe('Prüfer-Bildschirm erscheint', await p.isVisible('#seite-pruefer'), true);
  pruefe('keine Kursauswahl dazwischen',  await p.isVisible('#seite-kurse'), false);
  pruefe('Adresse ist wieder sauber', await p.evaluate(() => location.hash), '');
  pruefe('keine fremde Kurszeile im Kopf', await p.isVisible('#kopf-kurs'), false);

  // Der Zurück-Pfeil darf den Prüfer nicht mit erzwungener Sprache in der
  // App des Lernenden zurücklassen.
  await p.click('#btn-zurueck'); await p.waitForTimeout(200);
  pruefe('Zurück-Pfeil setzt die Sprache zurück', await p.evaluate(() => TEXTE_ZWANG), null);
  await p.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  await p.goto(link, { waitUntil: 'networkidle' }); await p.waitForTimeout(300);
  pruefe('Prüfer-Bildschirm nach erneutem Antippen wieder da', await p.isVisible('#seite-pruefer'), true);

  /* Die Oberfläche muss in der Sprache des Prüfers sein, nicht in der des Schülers */
  const oberflaeche = await p.evaluate(() => ({
    zwang: TEXTE_ZWANG,
    bewerten: document.querySelector('.pruefer-block h3:nth-of-type(1)') ? null : null,
    urteile: Array.from(document.querySelectorAll('.pruefer-urteil')).map(k => k.textContent.trim()),
    senden: document.getElementById('btn-pruefer-senden').textContent.trim()
  }));
  pruefe('Oberfläche auf Spanisch erzwungen', oberflaeche.zwang, 'es');
  pruefe('Urteilsknöpfe auf Spanisch', oberflaeche.urteile, ['correcto', 'parcialmente correcto', 'incorrecto']);
  pruefe('Sendeknopf auf Spanisch', oberflaeche.senden, 'Devolver la evaluación');

  /* Inhalt: Aufgabe auf Spanisch, Antwort unverändert */
  const inhalt = await p.evaluate(() => ({
    auftrag:  document.querySelector('.pruefer-auftrag p').textContent.trim(),
    antwort:  document.querySelector('.pruefer-antwort').innerText.trim(),
    kriterien: Array.from(document.querySelectorAll('.pruefer-kriterien span')).map(x => x.textContent.trim()),
    kennung:  document.getElementById('pruefer-kennung').textContent.trim()
  }));
  pruefe('Aufgabenstellung auf Spanisch', inhalt.auftrag.startsWith('Tu amigo Miguel'), true);
  pruefe('Kriterien auf Spanisch', inhalt.kriterien[0], 'Hay saludo y despedida.');
  pruefe('fünf Kriterien zum Abhaken', inhalt.kriterien.length, 5);
  pruefe('Kennung wird angezeigt', inhalt.kennung.includes(versuch.id), true);

  /* Der Text muss Zeichen für Zeichen angekommen sein */
  pruefe('Umlaute und Akzente unverändert', inhalt.antwort.replace(/\r/g, ''), ANTWORT);

  /* ---------- Bewerten ---------- */
  console.log('\n=== Bewerten und zurückschicken ===');
  const ohneUrteil = await p.evaluate(() => {
    let gemeldet = false;
    const alt = window.alert; window.alert = () => { gemeldet = true; };
    App.prueferAbschicken();
    window.alert = alt;
    return gemeldet;
  });
  pruefe('ohne Urteil wird nicht abgeschickt', ohneUrteil, true);

  await p.click('.pruefer-urteil[data-urteil="teilweise"]'); await p.waitForTimeout(80);
  pruefe('Urteil ist markiert',
         await p.evaluate(() => document.querySelector('.pruefer-urteil.gewaehlt').dataset.urteil), 'teilweise');

  await p.fill('.pruefer-hinweis', 'Muy bien. Cuidado: «voy a ir» está bien, pero falta el saludo final.');
  await p.fill('#pruefer-name', 'María');

  const rueckLink = await p.evaluate(() => {
    const b = {};
    for (const a of App.pruefauftrag.antworten) {
      b[a.fid] = { urteil: App.prueferUrteile[a.fid],
                   hinweis: document.querySelector(`.pruefer-hinweis[data-frage="${a.fid}"]`).value };
    }
    return Teilen.bewertungLink(App.pruefauftrag, b, document.getElementById('pruefer-name').value);
  });
  pruefe('Rücklink trägt die Bewertung', rueckLink.includes('#bewertung='), true);
  console.log(`    Länge: ${rueckLink.length} Zeichen`);

  pruefe('Lernstand des Prüfers unberührt',
         await p.evaluate(() => {
           const d = JSON.parse(localStorage.getItem('vamos_v2') || localStorage.getItem('spanisch_v1') || 'null');
           if (!d) return 'leer';
           const k = d.kurse && d.kurse['es-es'];
           return (!k || !k.pruefungen || !Object.keys(k.pruefungen).length) ? 'leer' : 'beschrieben';
         }), 'leer');

  await p.screenshot({ path: U.bild('r1-pruefer.png'), fullPage: true });
  await ctxB.close();

  /* ---------- Zurück beim Lernenden ---------- */
  console.log('\n=== Die Bewertung kommt an ===');
  await a.goto(rueckLink, { waitUntil: 'networkidle' });
  await a.waitForTimeout(400);

  pruefe('Ergebnisbildschirm erscheint', await a.isVisible('#seite-pruefung-ergebnis'), true);
  const b2 = await a.evaluate(id => {
    const f = Pruefungen.versuchNachId(id);
    return f && f.versuch.bewertungen && f.versuch.bewertungen['q4101'];
  }, versuch.id);
  pruefe('Bewertung beim richtigen Versuch abgelegt', !!b2, true);
  pruefe('Urteil übernommen', b2 && b2.urteil, 'teilweise');
  pruefe('Name des Prüfers übernommen', b2 && b2.von, 'María');
  pruefe('Hinweis mit Sonderzeichen heil', b2 && b2.hinweis.includes('«voy a ir»'), true);

  const angezeigt = await a.evaluate(() => {
    const el = document.querySelector('.pruef-bewertung');
    return el ? { klasse: el.className, text: el.innerText.replace(/\s+/g, ' ') } : null;
  });
  pruefe('Bewertung wird angezeigt', !!angezeigt, true);
  pruefe('mit dem passenden Farbton', angezeigt && angezeigt.klasse.includes('urteil-teilweise'), true);
  pruefe('Name steht dabei', angezeigt && angezeigt.text.includes('María'), true);

  pruefe('nichts wartet mehr',
         await a.evaluate(id => {
           const f = Pruefungen.versuchNachId(id);
           return Pruefungen.wartetAufBewertung(f.versuch);
         }, versuch.id), false);

  await a.goto(URL, { waitUntil: 'networkidle' }); await a.waitForTimeout(250);
  pruefe('Startbildschirm meldet nichts mehr', await a.isVisible('#wartestreifen'), false);
  await a.screenshot({ path: U.bild('r2-bewertung-da.png'), fullPage: true });

  /* ---------- Was schiefgehen kann ---------- */
  console.log('\n=== Kaputte und fremde Links ===');
  const grund = URL.split('#')[0];

  await a.goto(grund + '#pruefen=das-ist-kein-gueltiges-paket', { waitUntil: 'networkidle' });
  await a.waitForTimeout(300);
  pruefe('abgeschnittener Link landet auf dem Startbildschirm', await a.isVisible('#seite-start'), true);
  pruefe('und nicht beim Prüfer', await a.isVisible('#seite-pruefer'), false);

  // Bewertung mit unbekannter Kennung: darf nichts kaputtmachen
  const fremd = await a.evaluate(() => Teilen.packen({
    v: 1, art: 'bewertung', id: 'XXXXXX', kurs: 'es-es', pruefung: 'p-es-es-a2',
    von: 'Niemand', datum: '2026-09-22', b: [{ fid: 'q4101', urteil: 'richtig', hinweis: '' }]
  }));
  await a.goto(grund + '#bewertung=' + fremd, { waitUntil: 'networkidle' });
  await a.waitForTimeout(300);
  pruefe('fremde Kennung landet auf dem Startbildschirm', await a.isVisible('#seite-start'), true);
  pruefe('bestehende Bewertung unverändert',
         await a.evaluate(id => Pruefungen.versuchNachId(id).versuch.bewertungen['q4101'].urteil, versuch.id),
         'teilweise');

  /* ---------- Selbst eintragen ---------- */
  console.log('\n=== Bewertung von Hand eintragen ===');
  await a.evaluate(() => {
    const f = Pruefungen.versuchNachId(App.letztesErgebnis ? App.letztesErgebnis.id : null);
  });
  await a.evaluate(id => {
    const fund = Pruefungen.versuchNachId(id);
    delete fund.versuch.bewertungen;
    Speicher.sichern();
    App.letztesErgebnis = fund.versuch;
    App.prueferModusStarten(Teilen.auftragPacken(fund.versuch), true);
  }, versuch.id);
  await a.waitForTimeout(250);
  pruefe('Prüfer-Bildschirm im Selbst-Modus', await a.isVisible('#seite-pruefer'), true);
  pruefe('Oberfläche bleibt Deutsch', await a.evaluate(() => TEXTE_ZWANG), null);
  pruefe('Namensfeld ausgeblendet',
         await a.evaluate(() => document.getElementById('pruefer-name').parentElement.hidden), true);

  await a.click('.pruefer-urteil[data-urteil="richtig"]'); await a.waitForTimeout(80);
  await a.evaluate(() => App.prueferAbschicken());
  await a.waitForTimeout(300);
  pruefe('von Hand eingetragene Bewertung ist gespeichert',
         await a.evaluate(id => Pruefungen.versuchNachId(id).versuch.bewertungen['q4101'].urteil, versuch.id),
         'richtig');

  /* ---------- Konsole ---------- */
  console.log('\n=== Konsole ===');
  pruefe('keine Fehler beim Lernenden', konsoleA, []);
  pruefe('keine Fehler beim Prüfer',    konsoleB, []);

  console.log('');
  if (fehler.length) console.log(`${fehler.length} FEHLER`);
  else console.log('Alle Rundlauf-Tests bestanden.');
  await b.close();
  process.exit(fehler.length ? 1 : 0);
})();
