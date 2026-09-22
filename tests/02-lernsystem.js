/* Reiner Logiktest für das Wiederholsystem — ohne Browser. */
const U = require('./umgebung');
const store = {};
global.localStorage = {
  getItem: k => store[k] ?? null,
  setItem: (k, v) => { store[k] = v; },
  removeItem: k => { delete store[k]; }
};
global.window = {};
/* Kurssystem und Oberflaechentexte werden mitgeladen, weil srs.js seine
   Zeitangaben ueber t() uebersetzt. Ein Minimalkurs genuegt dafuer. */
eval(U.quelle('js/kurse.js'));
eval(U.quelle('js/texte.js'));
Kurse.definieren({ id: 'test', name: 'Testkurs', ziel: 'es', ausgang: 'de', ui: 'de', tage: 60 });
eval(U.quelle('js/speicher.js'));
eval(U.quelle('js/srs.js'));
Speicher.laden();
Speicher.daten.aktiverKurs = 'test';

let fehler = 0;
const pruefe = (name, ist, soll) => {
  const ok = JSON.stringify(ist) === JSON.stringify(soll);
  if (!ok) { fehler++; console.log(`  ✗ ${name}: ${JSON.stringify(ist)} — erwartet ${JSON.stringify(soll)}`); }
  else console.log(`  ✓ ${name}`);
};

console.log('\n--- Stufenaufstieg bei richtigen Antworten ---');
SRS.antwort('t1', true);
pruefe('1x richtig → Stufe 1', Speicher.karte('t1').stufe, 1);
SRS.antwort('t1', true);
pruefe('2x richtig → Stufe 2', Speicher.karte('t1').stufe, 2);
pruefe('Stufe 2 zählt als gelernt', SRS.anzahlGelernt(), 1);
const faellig2 = Speicher.karte('t1').faellig - Date.now();
pruefe('Stufe 2 → ca. 24 Std', Math.round(faellig2 / 3600e3), 24);

console.log('\n--- Rückfall bei falscher Antwort ---');
SRS.antwort('t1', false, 'zzz');
pruefe('falsch → zurück auf Stufe 0', Speicher.karte('t1').stufe, 0);
const faellig0 = Speicher.karte('t1').faellig - Date.now();
pruefe('Stufe 0 → ca. 4 Std', Math.round(faellig0 / 3600e3), 4);
pruefe('zählt nicht mehr als gelernt', SRS.anzahlGelernt(), 0);
pruefe('Eingabe in der Historie', Speicher.karte('t1').historie.at(-1).eingabe, 'zzz');

console.log('\n--- Problemwort (Leech) entsteht nach 4 Fehlern ---');
for (let i = 0; i < 3; i++) SRS.antwort('t2', false, 'falsch' + i);
pruefe('nach 3 Fehlern noch kein Leech', Speicher.karte('t2').leech, false);
const e = SRS.antwort('t2', false, 'falsch3');
pruefe('nach 4 Fehlern → Leech', Speicher.karte('t2').leech, true);
pruefe('Rückmeldung meldet leechNeu', e.leechNeu, true);
pruefe('Leech taucht in der Liste auf', SRS.leeches(), ['t2']);
pruefe('Leech wird immer getippt', SRS.typFuerStufe('t2', true), 'tippen');

console.log('\n--- Befreiung nach 3x richtig in Folge ---');
SRS.antwort('t2', true);
pruefe('1x richtig → noch Leech', Speicher.karte('t2').leech, true);
SRS.antwort('t2', true);
pruefe('2x richtig → noch Leech', Speicher.karte('t2').leech, true);
const b = SRS.antwort('t2', true);
pruefe('3x richtig → befreit', Speicher.karte('t2').leech, false);
pruefe('Rückmeldung meldet leechBefreit', b.leechBefreit, true);
pruefe('keine Leeches mehr', SRS.leeches().length, 0);

console.log('\n--- Zwischendrin falsch setzt die Serie zurück ---');
for (let i = 0; i < 4; i++) SRS.antwort('t3', false);
SRS.antwort('t3', true);
SRS.antwort('t3', false);          // Serie unterbrochen
SRS.antwort('t3', true);
SRS.antwort('t3', true);
pruefe('nach Unterbrechung noch Leech', Speicher.karte('t3').leech, true);
SRS.antwort('t3', true);
pruefe('erst die dritte in Folge befreit', Speicher.karte('t3').leech, false);

console.log('\n--- Fälligkeit ---');
Speicher.karte('t4').gesehen = true;
Speicher.karte('t4').faellig = Date.now() - 1000;
pruefe('Vergangenheit → fällig', SRS.istFaellig('t4'), true);
Speicher.karte('t4').faellig = Date.now() + 86400e3;
pruefe('Zukunft → nicht fällig', SRS.istFaellig('t4'), false);
pruefe('Text stimmt', SRS.faelligText('t4'), 'in 1 Tg');
pruefe('unbekannte Karte → neu', SRS.faelligText('gibtsnicht'), 'neu');

console.log('\n--- Übungstyp je nach Stufe ---');
Speicher.karte('t5').gesehen = true;
Speicher.karte('t5').stufe = 0; pruefe('Stufe 0 → Multiple Choice', SRS.typFuerStufe('t5', false), 'mc');
Speicher.karte('t5').stufe = 2; pruefe('Stufe 2 → Tippen', SRS.typFuerStufe('t5', false), 'tippen');
Speicher.karte('t5').stufe = 5; pruefe('Stufe 5 ohne Ton → Tippen', SRS.typFuerStufe('t5', false), 'tippen');

console.log('\n--- Höchststufe wird nicht überschritten ---');
for (let i = 0; i < 20; i++) SRS.antwort('t6', true);
pruefe('Stufe bleibt bei 7', Speicher.karte('t6').stufe, 7);
pruefe('Historie auf 10 begrenzt', Speicher.karte('t6').historie.length, 10);

console.log(fehler ? `\n${fehler} FEHLER` : '\nAlle SRS-Tests bestanden.');
process.exit(fehler ? 1 : 0);
