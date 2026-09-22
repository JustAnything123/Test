/* Gemeinsame Einstellungen für alle Tests.

   Die Testskripte selbst sollen nichts über den Rechner wissen, auf dem sie
   laufen. Alles, was sich von Rechner zu Rechner unterscheidet — wo das Projekt
   liegt, wo Chromium installiert ist, unter welcher Adresse der Testserver
   läuft — steht nur hier.

   Anpassen kannst du das ohne Codeänderung über Umgebungsvariablen:
     VAMOS_URL=http://localhost:9000/index.html  node tests/03-ablauf.js
     VAMOS_CHROMIUM=/pfad/zu/chrome              node tests/03-ablauf.js   */

const fs   = require('fs');
const path = require('path');

/* Projektwurzel: ein Verzeichnis über tests/. Damit funktionieren die Tests
   unabhängig davon, aus welchem Ordner du sie aufrufst. */
const PROJEKT = path.resolve(__dirname, '..');

/* Hierhin legen die Browsertests ihre Bildschirmfotos. Der Ordner ist in der
   .gitignore eingetragen — die Bilder gehören nicht ins Repository. */
const AUSGABE = path.join(__dirname, 'ausgabe');

/* Adresse des lokalen Testservers. Siehe tests/README.md, wie man ihn startet. */
const URL = process.env.VAMOS_URL || 'http://localhost:8765/index.html';

/* Datei aus dem Projekt lesen, z. B. quelle('js/srs.js'). */
function quelle(relativerPfad) {
  return fs.readFileSync(path.join(PROJEKT, relativerPfad), 'utf8');
}

/* Ausgabeordner anlegen, falls er noch nicht da ist, und den Pfad für ein
   Bildschirmfoto zurückgeben: bild('01-start.png'). */
function bild(dateiname) {
  fs.mkdirSync(AUSGABE, { recursive: true });
  return path.join(AUSGABE, dateiname);
}

/* Playwright laden.

   Im Projekt selbst liegt kein node_modules — die App braucht keines. Deshalb
   suchen wir Playwright zuerst dort, wo npm es lokal ablegen würde, und fallen
   sonst auf eine globale Installation zurück. Wenn beides fehlt, gibt es eine
   verständliche Meldung statt eines rohen MODULE_NOT_FOUND. */
function playwright() {
  const versuche = [
    'playwright',
    path.join(__dirname, 'node_modules', 'playwright'),
    path.join(PROJEKT, 'node_modules', 'playwright'),
    '/opt/node22/lib/node_modules/playwright',
    '/usr/lib/node_modules/playwright',
    '/usr/local/lib/node_modules/playwright'
  ];
  for (const p of versuche) {
    try { return require(p); } catch (e) { /* nächsten Pfad probieren */ }
  }
  console.error(
    '\nPlaywright wurde nicht gefunden.\n' +
    'Installieren mit:   cd tests && npm install\n' +
    'Oder global:        npm install -g playwright && npx playwright install chromium\n'
  );
  process.exit(2);
}

/* Chromium starten.

   Playwright bringt normalerweise seinen eigenen Browser mit und findet ihn
   allein. Auf manchen Systemen (auch hier) liegt er an einer festen Stelle,
   die wir dann explizit angeben müssen. */
function chromiumPfad() {
  if (process.env.VAMOS_CHROMIUM) return process.env.VAMOS_CHROMIUM;

  const basis = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  try {
    const ordner = fs.readdirSync(basis)
      .filter(n => n.startsWith('chromium-'))
      .sort()
      .reverse();
    for (const o of ordner) {
      const p = path.join(basis, o, 'chrome-linux', 'chrome');
      if (fs.existsSync(p)) return p;
    }
  } catch (e) { /* Ordner gibt es nicht — dann eben Playwrights eigener Browser */ }
  return null;                       // null = Playwright sucht selbst
}

async function browserStarten() {
  const { chromium } = playwright();
  const pfad = chromiumPfad();
  return chromium.launch(pfad ? { executablePath: pfad } : {});
}

/* Standard-Ansicht: Handyformat, so wie die App tatsächlich benutzt wird. */
const ANSICHT = { viewport: { width: 390, height: 844 } };

module.exports = { PROJEKT, AUSGABE, URL, ANSICHT, quelle, bild, playwright, browserStarten };
