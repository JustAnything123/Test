/* Tag 11–20 · Niveau A2 · Vergleichen, Befehlen, erste Vergangenheit */

LEKTIONEN.push({
  tag: 11, niveau: "A2", thema: "Vergleichen",
  vokabeln: [
    { id: "v1101", es: "el tamaño",     de: "die Größe",        wortart: "Substantiv", beispiel: "El tamaño es perfecto.", beispielDe: "Die Größe ist perfekt." },
    { id: "v1102", es: "caro",          de: "teuer",            wortart: "Adjektiv", beispiel: "Este hotel es más caro.", beispielDe: "Dieses Hotel ist teurer." },
    { id: "v1103", es: "la diferencia", de: "der Unterschied",  wortart: "Substantiv", beispiel: "No veo la diferencia.", beispielDe: "Ich sehe den Unterschied nicht." },
    { id: "v1104", es: "parecido",      de: "ähnlich",          wortart: "Adjektiv", beispiel: "Son muy parecidos.", beispielDe: "Sie sind sich sehr ähnlich." },
    { id: "v1105", es: "el doble",      de: "das Doppelte",     wortart: "Substantiv", beispiel: "Cuesta el doble.", beispielDe: "Es kostet das Doppelte." },
    { id: "v1106", es: "mejorar",       de: "verbessern",       wortart: "Verb", beispiel: "Quiero mejorar mi español.", beispielDe: "Ich will mein Spanisch verbessern." },
    { id: "v1107", es: "la ventaja",    de: "der Vorteil",      wortart: "Substantiv", beispiel: "Tiene muchas ventajas.", beispielDe: "Es hat viele Vorteile." },
    { id: "v1108", es: "peor",          de: "schlechter",       wortart: "Adjektiv", beispiel: "Hoy el tiempo está peor.", beispielDe: "Heute ist das Wetter schlechter." },
    { id: "v1109", es: "suficiente",    de: "ausreichend",      wortart: "Adjektiv", beispiel: "No tengo suficiente tiempo.", beispielDe: "Ich habe nicht genug Zeit." },
    { id: "v1110", es: "el nivel",      de: "das Niveau",       wortart: "Substantiv", beispiel: "Mi nivel de español es A2.", beispielDe: "Mein Spanischniveau ist A2." }
  ],
  saetze: [
    { id: "s1101", es: "Madrid es más grande que Sevilla.",     de: "Madrid ist größer als Sevilla." },
    { id: "s1102", es: "Este libro es menos interesante.",      de: "Dieses Buch ist weniger interessant." },
    { id: "s1103", es: "Mi hermano es tan alto como yo.",       de: "Mein Bruder ist so groß wie ich." },
    { id: "s1104", es: "Es el mejor restaurante de la ciudad.", de: "Es ist das beste Restaurant der Stadt." },
    { id: "s1105", es: "Tengo tantos libros como tú.",          de: "Ich habe so viele Bücher wie du." }
  ],
  grammatik: {
    id: "g11", titel: "Vergleichen: más, menos, tan … como",
    erklaerung: `
      <p>Drei Grundmuster reichen für fast alle Vergleiche:</p>
      <table>
        <tr><th>Art</th><th>Bauplan</th><th>Beispiel</th></tr>
        <tr><td>mehr als</td><td><em>más</em> + Adjektiv + <em>que</em></td><td>Ana es más alta que Luis.</td></tr>
        <tr><td>weniger als</td><td><em>menos</em> + Adjektiv + <em>que</em></td><td>Este coche es menos caro que aquel.</td></tr>
        <tr><td>genauso wie</td><td><em>tan</em> + Adjektiv + <em>como</em></td><td>Soy tan rápido como tú.</td></tr>
      </table>
      <p>Bei <strong>Mengen</strong> statt Eigenschaften nimmt man <em>tanto</em>, das sich anpasst:</p>
      <ul>
        <li><em>tanto dinero como…</em> (männl. Einzahl)</li>
        <li><em>tanta paciencia como…</em> (weibl. Einzahl)</li>
        <li><em>tantos libros como…</em> / <em>tantas ideas como…</em> (Mehrzahl)</li>
      </ul>
      <p><strong>Vier unregelmäßige Formen</strong> — die musst du auswendig können,
      denn <s>más bueno</s> und <s>más malo</s> sagt niemand:</p>
      <table>
        <tr><th>normal</th><th>Vergleich</th></tr>
        <tr><td>bueno (gut)</td><td><em>mejor</em> (besser)</td></tr>
        <tr><td>malo (schlecht)</td><td><em>peor</em> (schlechter)</td></tr>
        <tr><td>grande (groß)</td><td><em>mayor</em> (größer, älter)</td></tr>
        <tr><td>pequeño (klein)</td><td><em>menor</em> (kleiner, jünger)</td></tr>
      </table>
      <p><strong>Superlativ</strong> = bestimmter Artikel + Vergleichsform, danach <em>de</em>
      (nicht <em>en</em>!): <em>Es <strong>la</strong> ciudad más bonita <strong>de</strong> España.</em></p>
      <div class="merke"><strong>Bonus:</strong> Die Endung <em>-ísimo</em> heißt „ganz besonders":
      <em>guapo → guapísimo</em>, <em>fácil → facilísimo</em>. Sehr spanisch und sehr nützlich.</div>`,
    uebungen: [
      { id: "g1101", satz: "Madrid es más grande ___ Sevilla.", loesung: "que", tipps: ["que", "como", "de"], hinweis: "más … ?", de: "Madrid ist größer als Sevilla." },
      { id: "g1102", satz: "Soy tan alto ___ mi padre.", loesung: "como", tipps: ["como", "que", "de"], hinweis: "tan … ?", de: "Ich bin so groß wie mein Vater." },
      { id: "g1103", satz: "Este vino es ___ que el otro. (bueno)", loesung: "mejor", tipps: ["mejor", "más bueno"], hinweis: "unregelmäßig!", de: "Dieser Wein ist besser als der andere." },
      { id: "g1104", satz: "Tengo ___ libros como tú.", loesung: "tantos", tipps: ["tantos", "tanto", "tan"], hinweis: "libros = Mehrzahl männl.", de: "Ich habe so viele Bücher wie du." },
      { id: "g1105", satz: "Es la mejor playa ___ España.", loesung: "de", tipps: ["de", "en", "que"], hinweis: "Superlativ + ?", de: "Es ist der schönste Strand Spaniens." }
    ]
  }
});

LEKTIONEN.push({
  tag: 12, niveau: "A2", thema: "Beim Arzt",
  vokabeln: [
    { id: "v1201", es: "la receta",      de: "das Rezept",       wortart: "Substantiv", beispiel: "El médico me dio una receta.", beispielDe: "Der Arzt gab mir ein Rezept." },
    { id: "v1202", es: "doler",          de: "wehtun",           wortart: "Verb", beispiel: "Me duele la cabeza.", beispielDe: "Mir tut der Kopf weh." },
    { id: "v1203", es: "la fiebre",      de: "das Fieber",       wortart: "Substantiv", beispiel: "Tengo fiebre desde ayer.", beispielDe: "Ich habe seit gestern Fieber." },
    { id: "v1204", es: "la garganta",    de: "der Hals",         wortart: "Substantiv", beispiel: "Me duele la garganta.", beispielDe: "Mir tut der Hals weh." },
    { id: "v1205", es: "la pastilla",    de: "die Tablette",     wortart: "Substantiv", beispiel: "Toma una pastilla cada ocho horas.", beispielDe: "Nimm alle acht Stunden eine Tablette." },
    { id: "v1206", es: "la cita",        de: "der Termin",       wortart: "Substantiv", beispiel: "Tengo cita a las diez.", beispielDe: "Ich habe um zehn einen Termin." },
    { id: "v1207", es: "el resfriado",   de: "die Erkältung",    wortart: "Substantiv", beispiel: "Tengo un resfriado fuerte.", beispielDe: "Ich habe eine starke Erkältung." },
    { id: "v1208", es: "toser",          de: "husten",           wortart: "Verb", beispiel: "El niño tose mucho por la noche.", beispielDe: "Das Kind hustet nachts viel." },
    { id: "v1209", es: "la muela",       de: "der Backenzahn",   wortart: "Substantiv", beispiel: "Me duele una muela.", beispielDe: "Mir tut ein Zahn weh." },
    { id: "v1210", es: "grave",          de: "ernst / schlimm",  wortart: "Adjektiv", beispiel: "No es nada grave.", beispielDe: "Es ist nichts Ernstes." }
  ],
  saetze: [
    { id: "s1201", es: "Me duele mucho la espalda.",           de: "Mir tut der Rücken sehr weh." },
    { id: "s1202", es: "¿Desde cuándo tienes fiebre?",         de: "Seit wann hast du Fieber?" },
    { id: "s1203", es: "Tienes que tomar estas pastillas.",    de: "Du musst diese Tabletten nehmen." },
    { id: "s1204", es: "Me duelen los pies después de andar.", de: "Mir tun die Füße weh nach dem Laufen." },
    { id: "s1205", es: "Hay que ir al médico mañana.",         de: "Man muss morgen zum Arzt gehen." }
  ],
  grammatik: {
    id: "g12", titel: "doler und Ausdrücke der Notwendigkeit",
    erklaerung: `
      <p><em>doler</em> funktioniert wie <em>gustar</em> (Tag 9): Nicht du bist das Subjekt,
      sondern der Körperteil.</p>
      <div class="merke"><em>Me duele <strong>la cabeza</strong>.</em> — Ein Körperteil → <em>duele</em>.<br>
      <em>Me duelen <strong>los pies</strong>.</em> — Mehrere → <em>duelen</em>.<br>
      Und: bestimmter Artikel, nie <s>mi cabeza</s>.</div>
      <p><strong>Drei Wege, „müssen" auszudrücken</strong> — der Unterschied ist wichtig:</p>
      <table>
        <tr><th>Ausdruck</th><th>Bauplan</th><th>Bedeutung</th></tr>
        <tr><td><em>tener que</em></td><td>tener + que + Infinitiv</td><td>persönliche Pflicht:<br><em>Tengo que estudiar.</em></td></tr>
        <tr><td><em>hay que</em></td><td>hay + que + Infinitiv</td><td>allgemein, ohne Person:<br><em>Hay que pagar aquí.</em> (Man muss…)</td></tr>
        <tr><td><em>deber</em></td><td>deber + Infinitiv</td><td>moralische Pflicht, Rat:<br><em>Debes descansar.</em> (Du solltest…)</td></tr>
      </table>
      <p><em>hay que</em> ist unpersönlich und wird nie gebeugt — genau wie <em>hay</em>.</p>`,
    uebungen: [
      { id: "g1201", satz: "Me ___ la cabeza.", loesung: "duele", tipps: ["duele", "duelen"], hinweis: "la cabeza = Einzahl", de: "Mir tut der Kopf weh." },
      { id: "g1202", satz: "Me ___ los pies.", loesung: "duelen", tipps: ["duelen", "duele"], hinweis: "los pies = Mehrzahl", de: "Mir tun die Füße weh." },
      { id: "g1203", satz: "___ que ir al médico. (man muss)", loesung: "Hay", tipps: ["Hay", "Tengo", "Debo"], hinweis: "unpersönlich", de: "Man muss zum Arzt gehen." },
      { id: "g1204", satz: "Yo ___ que trabajar mañana.", loesung: "tengo", tipps: ["tengo", "hay", "debo"], hinweis: "ich persönlich", de: "Ich muss morgen arbeiten." },
      { id: "g1205", satz: "A Ana le ___ la garganta.", loesung: "duele", tipps: ["duele", "duelen"], hinweis: "la garganta = Einzahl", de: "Ana tut der Hals weh." }
    ]
  }
});

LEKTIONEN.push({
  tag: 13, niveau: "A2", thema: "Wegbeschreibung",
  vokabeln: [
    { id: "v1301", es: "la esquina",     de: "die Ecke",        wortart: "Substantiv", beispiel: "Gira en la esquina.", beispielDe: "Bieg an der Ecke ab." },
    { id: "v1302", es: "seguir recto",   de: "geradeaus gehen", wortart: "Verb", beispiel: "Sigue recto dos calles.", beispielDe: "Geh zwei Straßen geradeaus." },
    { id: "v1303", es: "el semáforo",    de: "die Ampel",       wortart: "Substantiv", beispiel: "Gira a la izquierda en el semáforo.", beispielDe: "Bieg an der Ampel links ab." },
    { id: "v1304", es: "cruzar",         de: "überqueren",      wortart: "Verb", beispiel: "Cruza la plaza.", beispielDe: "Überquere den Platz." },
    { id: "v1305", es: "enfrente de",    de: "gegenüber von",   wortart: "Präposition", beispiel: "Está enfrente del banco.", beispielDe: "Es ist gegenüber der Bank." },
    { id: "v1306", es: "detrás de",      de: "hinter",          wortart: "Präposition", beispiel: "El parque está detrás de la iglesia.", beispielDe: "Der Park ist hinter der Kirche." },
    { id: "v1307", es: "la parada",      de: "die Haltestelle", wortart: "Substantiv", beispiel: "La parada está allí.", beispielDe: "Die Haltestelle ist dort." },
    { id: "v1308", es: "perderse",       de: "sich verlaufen",  wortart: "Verb", beispiel: "Me he perdido, lo siento.", beispielDe: "Ich habe mich verlaufen, tut mir leid." },
    { id: "v1309", es: "el puente",      de: "die Brücke",      wortart: "Substantiv", beispiel: "Pasa por el puente.", beispielDe: "Geh über die Brücke." },
    { id: "v1310", es: "acercarse",      de: "sich nähern",     wortart: "Verb", beispiel: "Nos acercamos al centro.", beispielDe: "Wir nähern uns dem Zentrum." }
  ],
  saetze: [
    { id: "s1301", es: "Sigue recto hasta el semáforo.",    de: "Geh geradeaus bis zur Ampel." },
    { id: "s1302", es: "Gira a la derecha en la esquina.",  de: "Bieg an der Ecke rechts ab." },
    { id: "s1303", es: "Perdona, ¿dónde está la estación?", de: "Entschuldige, wo ist der Bahnhof?" },
    { id: "s1304", es: "No cruces aquí, es peligroso.",     de: "Überquere hier nicht, es ist gefährlich." },
    { id: "s1305", es: "Toma la segunda calle a la izquierda.", de: "Nimm die zweite Straße links." }
  ],
  grammatik: {
    id: "g13", titel: "Der bejahte Imperativ (Befehlsform)",
    erklaerung: `
      <p>Für <em>tú</em> ist die Befehlsform überraschend einfach: Du nimmst die
      <em>él/ella</em>-Form des Präsens.</p>
      <table>
        <tr><th>Verb</th><th>él/ella sagt</th><th>Befehl an tú</th></tr>
        <tr><td>hablar</td><td>habla</td><td>¡Habla!</td></tr>
        <tr><td>comer</td><td>come</td><td>¡Come!</td></tr>
        <tr><td>escribir</td><td>escribe</td><td>¡Escribe!</td></tr>
        <tr><td>cerrar</td><td>cierra</td><td>¡Cierra!</td></tr>
      </table>
      <p><strong>Acht Ausnahmen</strong> — die häufigsten Verben überhaupt, deshalb lohnt
      sich das Auswendiglernen:</p>
      <table>
        <tr><th>Verb</th><th>Befehl</th><th></th><th>Verb</th><th>Befehl</th></tr>
        <tr><td>decir</td><td><em>di</em></td><td></td><td>salir</td><td><em>sal</em></td></tr>
        <tr><td>hacer</td><td><em>haz</em></td><td></td><td>ser</td><td><em>sé</em></td></tr>
        <tr><td>ir</td><td><em>ve</em></td><td></td><td>tener</td><td><em>ten</em></td></tr>
        <tr><td>poner</td><td><em>pon</em></td><td></td><td>venir</td><td><em>ven</em></td></tr>
      </table>
      <div class="merke"><strong>Merkspruch:</strong> „<em>di, haz, ve, pon, sal, sé, ten, ven</em>" —
      acht kurze Wörter, im Rhythmus gesprochen sitzen sie schnell.</div>
      <p><strong>Pronomen werden angehängt</strong>, alles wird ein Wort — und oft kommt ein
      Akzent dazu, damit die Betonung bleibt:</p>
      <ul>
        <li><em>Dime.</em> (Sag mir.) · <em>Hazlo.</em> (Mach es.)</li>
        <li><em>Dí<strong>me</strong>lo.</em> (Sag es mir.) · <em>Levánta<strong>te</strong>.</em> (Steh auf.)</li>
      </ul>`,
    uebungen: [
      { id: "g1301", satz: "___ recto hasta el final. (seguir, tú)", loesung: "Sigue", tipps: ["Sigue", "Sigues", "Siga"], hinweis: "él-Form nehmen", de: "Geh geradeaus bis zum Ende." },
      { id: "g1302", satz: "¡___ la puerta! (cerrar, tú)", loesung: "Cierra", tipps: ["Cierra", "Cierre", "Cerra"], hinweis: "e → ie", de: "Mach die Tür zu!" },
      { id: "g1303", satz: "¡___ aquí! (venir, tú)", loesung: "Ven", tipps: ["Ven", "Viene", "Vení"], hinweis: "Ausnahme", de: "Komm her!" },
      { id: "g1304", satz: "¡___ los deberes! (hacer, tú)", loesung: "Haz", tipps: ["Haz", "Hace", "Haga"], hinweis: "Ausnahme", de: "Mach die Hausaufgaben!" },
      { id: "g1305", satz: "¡Dí___ la verdad! (mir)", loesung: "me", tipps: ["me", "te", "lo"], hinweis: "angehängtes Pronomen", de: "Sag mir die Wahrheit!" }
    ]
  }
});

LEKTIONEN.push({
  tag: 14, niveau: "A2", thema: "Ratschläge und Verbote",
  vokabeln: [
    { id: "v1401", es: "el consejo",     de: "der Rat",         wortart: "Substantiv", beispiel: "Te doy un consejo.", beispielDe: "Ich gebe dir einen Rat." },
    { id: "v1402", es: "prohibido",      de: "verboten",        wortart: "Adjektiv", beispiel: "Está prohibido fumar aquí.", beispielDe: "Rauchen ist hier verboten." },
    { id: "v1403", es: "preocuparse",    de: "sich sorgen",     wortart: "Verb", beispiel: "No te preocupes.", beispielDe: "Mach dir keine Sorgen." },
    { id: "v1404", es: "el peligro",     de: "die Gefahr",      wortart: "Substantiv", beispiel: "No hay peligro.", beispielDe: "Es besteht keine Gefahr." },
    { id: "v1405", es: "tener cuidado",  de: "aufpassen",       wortart: "Verb", beispiel: "Ten cuidado con el escalón.", beispielDe: "Pass auf die Stufe auf." },
    { id: "v1406", es: "olvidar",        de: "vergessen",       wortart: "Verb", beispiel: "No olvides las llaves.", beispielDe: "Vergiss die Schlüssel nicht." },
    { id: "v1407", es: "el error",       de: "der Fehler",      wortart: "Substantiv", beispiel: "Fue un error mío.", beispielDe: "Das war mein Fehler." },
    { id: "v1408", es: "molestar",       de: "stören",          wortart: "Verb", beispiel: "No molestes a tu hermana.", beispielDe: "Stör deine Schwester nicht." },
    { id: "v1409", es: "atreverse",      de: "sich trauen",     wortart: "Verb", beispiel: "No me atrevo a preguntar.", beispielDe: "Ich traue mich nicht zu fragen." },
    { id: "v1410", es: "el riesgo",      de: "das Risiko",      wortart: "Substantiv", beispiel: "No quiero correr riesgos.", beispielDe: "Ich will keine Risiken eingehen." }
  ],
  saetze: [
    { id: "s1401", es: "No te preocupes por eso.",           de: "Mach dir darüber keine Sorgen." },
    { id: "s1402", es: "No hables tan rápido, por favor.",   de: "Sprich bitte nicht so schnell." },
    { id: "s1403", es: "No olvides llamar a tu madre.",      de: "Vergiss nicht, deine Mutter anzurufen." },
    { id: "s1404", es: "No comas tanto azúcar.",             de: "Iss nicht so viel Zucker." },
    { id: "s1405", es: "No vengas tarde otra vez.",          de: "Komm nicht wieder zu spät." }
  ],
  grammatik: {
    id: "g14", titel: "Der verneinte Imperativ",
    erklaerung: `
      <p>Achtung, hier passiert etwas Unerwartetes: Der verneinte Befehl hat eine
      <strong>ganz andere</strong> Form als der bejahte. Man kann nicht einfach <em>no</em>
      davorsetzen.</p>
      <table>
        <tr><th>bejaht</th><th>verneint</th></tr>
        <tr><td>¡Habla!</td><td>¡No habl<em>es</em>!</td></tr>
        <tr><td>¡Come!</td><td>¡No com<em>as</em>!</td></tr>
        <tr><td>¡Escribe!</td><td>¡No escrib<em>as</em>!</td></tr>
      </table>
      <div class="merke"><strong>Der Trick — Endungen tauschen:</strong><br>
      <em>-ar</em>-Verben bekommen ein <strong>e</strong>: hablar → no habl<em>es</em><br>
      <em>-er</em>/<em>-ir</em>-Verben bekommen ein <strong>a</strong>: comer → no com<em>as</em></div>
      <p><strong>So gehst du sicher vor:</strong> yo-Form nehmen, <em>-o</em> abschneiden,
      Endung antauschen. Das funktioniert sogar bei unregelmäßigen Verben:</p>
      <ul>
        <li>tener → ten<s>go</s> → <em>no tengas</em></li>
        <li>hacer → ha<s>go</s> → <em>no hagas</em></li>
        <li>venir → ven<s>go</s> → <em>no vengas</em></li>
        <li>decir → di<s>go</s> → <em>no digas</em></li>
        <li>salir → sal<s>go</s> → <em>no salgas</em></li>
      </ul>
      <p>Echte Ausnahmen sind nur: <em>ir → no vayas</em>, <em>ser → no seas</em>,
      <em>dar → no des</em>, <em>estar → no estés</em>, <em>saber → no sepas</em>.</p>
      <div class="merke"><strong>Und die Pronomen wandern:</strong> beim bejahten Befehl
      angehängt, beim verneinten davor.<br>
      <em>¡Dímelo!</em> ↔ <em>¡No <strong>me lo</strong> digas!</em></div>`,
    uebungen: [
      { id: "g1401", satz: "¡No ___ tan rápido! (hablar, tú)", loesung: "hables", tipps: ["hables", "hablas", "habla"], hinweis: "-ar bekommt e", de: "Sprich nicht so schnell!" },
      { id: "g1402", satz: "¡No ___ tanto! (comer, tú)", loesung: "comas", tipps: ["comas", "comes", "come"], hinweis: "-er bekommt a", de: "Iss nicht so viel!" },
      { id: "g1403", satz: "¡No ___ tarde! (venir, tú)", loesung: "vengas", tipps: ["vengas", "vienes", "ven"], hinweis: "yo-Form vengo → ?", de: "Komm nicht zu spät!" },
      { id: "g1404", satz: "¡No te ___! (preocuparse, tú)", loesung: "preocupes", tipps: ["preocupes", "preocupas", "preocupa"], hinweis: "Pronomen steht davor", de: "Mach dir keine Sorgen!" },
      { id: "g1405", satz: "¡No ___ ahí! (ir, tú)", loesung: "vayas", tipps: ["vayas", "vas", "ve"], hinweis: "echte Ausnahme", de: "Geh da nicht hin!" }
    ]
  }
});

LEKTIONEN.push({
  tag: 15, niveau: "A2", thema: "Diese Woche",
  vokabeln: [
    { id: "v1501", es: "todavía",        de: "noch",            wortart: "Adverb", beispiel: "Todavía no he comido.", beispielDe: "Ich habe noch nicht gegessen." },
    { id: "v1502", es: "ya",             de: "schon",           wortart: "Adverb", beispiel: "Ya he terminado.", beispielDe: "Ich bin schon fertig." },
    { id: "v1503", es: "últimamente",    de: "in letzter Zeit", wortart: "Adverb", beispiel: "Últimamente trabajo mucho.", beispielDe: "In letzter Zeit arbeite ich viel." },
    { id: "v1504", es: "el rato libre",  de: "die freie Zeit",  wortart: "Substantiv", beispiel: "He tenido poco rato libre.", beispielDe: "Ich hatte wenig freie Zeit." },
    { id: "v1505", es: "conseguir",      de: "erreichen / schaffen", wortart: "Verb", beispiel: "He conseguido el trabajo.", beispielDe: "Ich habe die Stelle bekommen." },
    { id: "v1506", es: "romper",         de: "kaputt machen",   wortart: "Verb", beispiel: "He roto un vaso.", beispielDe: "Ich habe ein Glas zerbrochen." },
    { id: "v1507", es: "el suceso",      de: "das Ereignis",    wortart: "Substantiv", beispiel: "Fue un suceso importante.", beispielDe: "Das war ein wichtiges Ereignis." },
    { id: "v1508", es: "por fin",        de: "endlich",         wortart: "Adverb", beispiel: "Por fin ha llegado el verano.", beispielDe: "Endlich ist der Sommer da." },
    { id: "v1509", es: "resolver",       de: "lösen",           wortart: "Verb", beispiel: "Hemos resuelto el problema.", beispielDe: "Wir haben das Problem gelöst." },
    { id: "v1510", es: "el cambio",      de: "die Veränderung", wortart: "Substantiv", beispiel: "Ha habido muchos cambios.", beispielDe: "Es hat viele Veränderungen gegeben." }
  ],
  saetze: [
    { id: "s1501", es: "Hoy he trabajado mucho.",              de: "Heute habe ich viel gearbeitet." },
    { id: "s1502", es: "Esta semana hemos visto tres películas.", de: "Diese Woche haben wir drei Filme gesehen." },
    { id: "s1503", es: "¿Has estado alguna vez en México?",    de: "Warst du schon mal in Mexiko?" },
    { id: "s1504", es: "Todavía no he terminado el informe.",  de: "Ich habe den Bericht noch nicht fertig." },
    { id: "s1505", es: "Nunca he probado el pulpo.",           de: "Ich habe noch nie Oktopus probiert." }
  ],
  grammatik: {
    id: "g15", titel: "Pretérito Perfecto — die nahe Vergangenheit",
    erklaerung: `
      <p>Diese Zeit entspricht dem deutschen Perfekt und wird genauso gebaut:
      Hilfsverb <em>haber</em> + Partizip.</p>
      <table>
        <tr><th>Person</th><th>haber</th><th>Beispiel</th></tr>
        <tr><td>yo</td><td>he</td><td>he hablado</td></tr>
        <tr><td>tú</td><td>has</td><td>has comido</td></tr>
        <tr><td>él/ella/usted</td><td>ha</td><td>ha vivido</td></tr>
        <tr><td>nosotros</td><td>hemos</td><td>hemos hablado</td></tr>
        <tr><td>vosotros</td><td>habéis</td><td>habéis comido</td></tr>
        <tr><td>ellos/ustedes</td><td>han</td><td>han vivido</td></tr>
      </table>
      <p><strong>Partizip:</strong> <em>-ar</em> → <em>-ado</em>, <em>-er</em>/<em>-ir</em> → <em>-ido</em>.</p>
      <p><strong>Unregelmäßige Partizipien</strong> (häufig gebraucht):</p>
      <ul>
        <li><em>hacer → hecho</em> · <em>ver → visto</em> · <em>decir → dicho</em></li>
        <li><em>escribir → escrito</em> · <em>poner → puesto</em> · <em>volver → vuelto</em></li>
        <li><em>abrir → abierto</em> · <em>romper → roto</em> · <em>morir → muerto</em></li>
      </ul>
      <div class="merke"><strong>Zwei Regeln, die im Deutschen nicht gelten:</strong><br>
      1. <em>haber</em> und Partizip dürfen <strong>nie</strong> getrennt werden:
      <em>No he comido nada.</em> — niemals <s>He no comido</s>.<br>
      2. Das Partizip bleibt immer unverändert: <em>Ana ha comid<strong>o</strong></em>,
      nicht <s>comida</s>.</div>
      <p><strong>Wann nimmt man diese Zeit?</strong> Wenn der Zeitraum noch nicht vorbei ist
      oder gar keiner genannt wird. Signalwörter: <em>hoy, esta semana, este año, ya,
      todavía no, nunca, alguna vez, últimamente</em>.</p>`,
    uebungen: [
      { id: "g1501", satz: "Hoy ___ trabajado mucho. (yo)", loesung: "he", tipps: ["he", "ha", "has"], hinweis: "yo → ?", de: "Heute habe ich viel gearbeitet." },
      { id: "g1502", satz: "¿___ visto la película? (tú)", loesung: "Has", tipps: ["Has", "Ha", "He"], hinweis: "tú → ?", de: "Hast du den Film gesehen?" },
      { id: "g1503", satz: "Hemos ___ (hacer) la compra.", loesung: "hecho", tipps: ["hecho", "hacido", "hacho"], hinweis: "unregelmäßig", de: "Wir haben eingekauft." },
      { id: "g1504", satz: "Ella ha ___ (escribir) un correo.", loesung: "escrito", tipps: ["escrito", "escribido"], hinweis: "unregelmäßig", de: "Sie hat eine E-Mail geschrieben." },
      { id: "g1505", satz: "Todavía no ___ llegado. (ellos)", loesung: "han", tipps: ["han", "ha", "hemos"], hinweis: "ellos → ?", de: "Sie sind noch nicht angekommen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 16, niveau: "A2", thema: "Gestern",
  vokabeln: [
    { id: "v1601", es: "anoche",         de: "gestern Abend",   wortart: "Adverb", beispiel: "Anoche cenamos fuera.", beispielDe: "Gestern Abend haben wir auswärts gegessen." },
    { id: "v1602", es: "el año pasado",  de: "letztes Jahr",    wortart: "Substantiv", beispiel: "El año pasado viajé a Perú.", beispielDe: "Letztes Jahr reiste ich nach Peru." },
    { id: "v1603", es: "de repente",     de: "plötzlich",       wortart: "Adverb", beispiel: "De repente empezó a llover.", beispielDe: "Plötzlich fing es an zu regnen." },
    { id: "v1604", es: "entonces",       de: "dann / damals",   wortart: "Adverb", beispiel: "Entonces decidí volver.", beispielDe: "Dann entschied ich mich zurückzukehren." },
    { id: "v1605", es: "el suceso",      de: "der Vorfall",     wortart: "Substantiv", beispiel: "Nadie explicó el suceso.", beispielDe: "Niemand erklärte den Vorfall." },
    { id: "v1606", es: "ocurrir",        de: "geschehen",       wortart: "Verb", beispiel: "¿Qué ocurrió ayer?", beispielDe: "Was ist gestern passiert?" },
    { id: "v1607", es: "el viaje",       de: "die Reise",       wortart: "Substantiv", beispiel: "El viaje duró ocho horas.", beispielDe: "Die Reise dauerte acht Stunden." },
    { id: "v1608", es: "quedarse",       de: "bleiben",         wortart: "Verb", beispiel: "Nos quedamos tres días.", beispielDe: "Wir blieben drei Tage." },
    { id: "v1609", es: "el aniversario", de: "der Jahrestag",   wortart: "Substantiv", beispiel: "Celebramos nuestro aniversario.", beispielDe: "Wir feierten unseren Jahrestag." },
    { id: "v1610", es: "despedirse",     de: "sich verabschieden", wortart: "Verb", beispiel: "Se despidió sin decir nada.", beispielDe: "Er verabschiedete sich, ohne etwas zu sagen." }
  ],
  saetze: [
    { id: "s1601", es: "Ayer hablé con mi jefe.",           de: "Gestern sprach ich mit meinem Chef." },
    { id: "s1602", es: "El sábado comimos en un bar.",      de: "Am Samstag aßen wir in einer Bar." },
    { id: "s1603", es: "¿A qué hora saliste de casa?",      de: "Um wie viel Uhr gingst du aus dem Haus?" },
    { id: "s1604", es: "Vivimos dos años en Barcelona.",    de: "Wir lebten zwei Jahre in Barcelona." },
    { id: "s1605", es: "El año pasado viajaron a México.",  de: "Letztes Jahr reisten sie nach Mexiko." }
  ],
  grammatik: {
    id: "g16", titel: "Indefinido — die abgeschlossene Vergangenheit",
    erklaerung: `
      <p>Das <em>Indefinido</em> erzählt, <strong>was passiert ist</strong> — in einem
      Zeitraum, der vorbei ist. Es ist die Erzählzeit schlechthin.</p>
      <table>
        <tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr>
        <tr><td>yo</td><td>habl<em>é</em></td><td>com<em>í</em></td><td>viv<em>í</em></td></tr>
        <tr><td>tú</td><td>habl<em>aste</em></td><td>com<em>iste</em></td><td>viv<em>iste</em></td></tr>
        <tr><td>él/ella</td><td>habl<em>ó</em></td><td>com<em>ió</em></td><td>viv<em>ió</em></td></tr>
        <tr><td>nosotros</td><td>habl<em>amos</em></td><td>com<em>imos</em></td><td>viv<em>imos</em></td></tr>
        <tr><td>vosotros</td><td>habl<em>asteis</em></td><td>com<em>isteis</em></td><td>viv<em>isteis</em></td></tr>
        <tr><td>ellos</td><td>habl<em>aron</em></td><td>com<em>ieron</em></td><td>viv<em>ieron</em></td></tr>
      </table>
      <div class="merke"><strong>Gute Nachricht:</strong> <em>-er</em> und <em>-ir</em> haben
      exakt dieselben Endungen. Du musst also nur zwei Sätze lernen, nicht drei.</div>
      <div class="merke"><strong>Achte auf die Akzente!</strong> Sie entscheiden über die
      Person: <em>habl<strong>o</strong></em> = ich spreche (jetzt),
      <em>habl<strong>ó</strong></em> = er sprach (damals).</div>
      <p><strong>Signalwörter:</strong> <em>ayer, anoche, el lunes pasado, la semana pasada,
      el año pasado, en 2019, hace dos años, entonces, de repente</em>.</p>
      <p><strong>Unterschied zum Perfecto</strong> (Tag 15):</p>
      <ul>
        <li><em>Hoy <strong>he comido</strong> paella.</em> — heute, Zeitraum läuft noch</li>
        <li><em>Ayer <strong>comí</strong> paella.</em> — gestern, abgeschlossen</li>
      </ul>`,
    uebungen: [
      { id: "g1601", satz: "Ayer ___ (hablar, yo) con Ana.", loesung: "hablé", tipps: ["hablé", "hablo", "habló"], hinweis: "yo mit Akzent", de: "Gestern sprach ich mit Ana." },
      { id: "g1602", satz: "Él ___ (comer) en casa.", loesung: "comió", tipps: ["comió", "comí", "come"], hinweis: "él → -ió", de: "Er aß zu Hause." },
      { id: "g1603", satz: "Nosotros ___ (vivir) allí dos años.", loesung: "vivimos", tipps: ["vivimos", "vivíamos", "vivieron"], hinweis: "nosotros -ir", de: "Wir lebten zwei Jahre dort." },
      { id: "g1604", satz: "¿___ (salir, tú) anoche?", loesung: "Saliste", tipps: ["Saliste", "Salió", "Sales"], hinweis: "tú → -iste", de: "Bist du gestern Abend ausgegangen?" },
      { id: "g1605", satz: "Ellos ___ (trabajar) todo el día.", loesung: "trabajaron", tipps: ["trabajaron", "trabajamos", "trabajaban"], hinweis: "ellos -ar", de: "Sie arbeiteten den ganzen Tag." }
    ]
  }
});

LEKTIONEN.push({
  tag: 17, niveau: "A2", thema: "Eine Reise erzählen",
  vokabeln: [
    { id: "v1701", es: "el equipaje",    de: "das Gepäck",      wortart: "Substantiv", beispiel: "Perdimos el equipaje.", beispielDe: "Wir verloren das Gepäck." },
    { id: "v1702", es: "el vuelo",       de: "der Flug",        wortart: "Substantiv", beispiel: "El vuelo tuvo retraso.", beispielDe: "Der Flug hatte Verspätung." },
    { id: "v1703", es: "el retraso",     de: "die Verspätung",  wortart: "Substantiv", beispiel: "Hubo dos horas de retraso.", beispielDe: "Es gab zwei Stunden Verspätung." },
    { id: "v1704", es: "el alojamiento", de: "die Unterkunft",  wortart: "Substantiv", beispiel: "El alojamiento estuvo bien.", beispielDe: "Die Unterkunft war gut." },
    { id: "v1705", es: "la maleta",      de: "der Koffer",      wortart: "Substantiv", beispiel: "Hice la maleta anoche.", beispielDe: "Ich packte gestern Abend den Koffer." },
    { id: "v1706", es: "el recuerdo",    de: "die Erinnerung / das Souvenir", wortart: "Substantiv", beispiel: "Tengo buenos recuerdos.", beispielDe: "Ich habe gute Erinnerungen." },
    { id: "v1707", es: "el paisaje",     de: "die Landschaft",  wortart: "Substantiv", beispiel: "El paisaje fue impresionante.", beispielDe: "Die Landschaft war beeindruckend." },
    { id: "v1708", es: "alojarse",       de: "übernachten",     wortart: "Verb", beispiel: "Nos alojamos en un hostal.", beispielDe: "Wir übernachteten in einer Pension." },
    { id: "v1709", es: "la frontera",    de: "die Grenze",      wortart: "Substantiv", beispiel: "Cruzamos la frontera de noche.", beispielDe: "Wir überquerten nachts die Grenze." },
    { id: "v1710", es: "merecer la pena",de: "sich lohnen",     wortart: "Verb", beispiel: "El viaje mereció la pena.", beispielDe: "Die Reise hat sich gelohnt." }
  ],
  saetze: [
    { id: "s1701", es: "Fui a Barcelona el año pasado.",     de: "Ich fuhr letztes Jahr nach Barcelona." },
    { id: "s1702", es: "Tuvimos un problema con el coche.",  de: "Wir hatten ein Problem mit dem Auto." },
    { id: "s1703", es: "Ella hizo la maleta muy rápido.",    de: "Sie packte den Koffer sehr schnell." },
    { id: "s1704", es: "No pude dormir en el avión.",        de: "Ich konnte im Flugzeug nicht schlafen." },
    { id: "s1705", es: "Estuvimos allí una semana entera.",  de: "Wir waren eine ganze Woche dort." }
  ],
  grammatik: {
    id: "g17", titel: "Unregelmäßiges Indefinido",
    erklaerung: `
      <p>Etwa zwanzig sehr häufige Verben bilden das Indefinido mit einem eigenen Stamm —
      und dann alle mit <strong>denselben</strong> Endungen. Und: <strong>ohne Akzente</strong>.</p>
      <table>
        <tr><th>Infinitiv</th><th>Stamm</th><th>yo</th><th>él</th></tr>
        <tr><td>tener</td><td>tuv-</td><td>tuve</td><td>tuvo</td></tr>
        <tr><td>estar</td><td>estuv-</td><td>estuve</td><td>estuvo</td></tr>
        <tr><td>poder</td><td>pud-</td><td>pude</td><td>pudo</td></tr>
        <tr><td>poner</td><td>pus-</td><td>puse</td><td>puso</td></tr>
        <tr><td>saber</td><td>sup-</td><td>supe</td><td>supo</td></tr>
        <tr><td>hacer</td><td>hic-</td><td>hice</td><td>hi<em>z</em>o</td></tr>
        <tr><td>querer</td><td>quis-</td><td>quise</td><td>quiso</td></tr>
        <tr><td>venir</td><td>vin-</td><td>vine</td><td>vino</td></tr>
        <tr><td>decir</td><td>dij-</td><td>dije</td><td>dijo</td></tr>
      </table>
      <p><strong>Die gemeinsamen Endungen:</strong>
      <em>-e, -iste, -o, -imos, -isteis, -ieron</em><br>
      Beispiel: <em>tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron</em></p>
      <div class="merke"><strong>Zwei Merkwürdigkeiten:</strong><br>
      <em>hacer</em> wird bei <em>él</em> zu <em>hizo</em> (mit z, damit die Aussprache stimmt).<br>
      Nach <em>j</em> fällt das i weg: <em>dijeron</em>, nicht <s>dijieron</s>.</div>
      <p><strong>ser und ir sind identisch</strong> — welches gemeint ist, verrät der Zusammenhang:</p>
      <table>
        <tr><td>fui, fuiste, fue, fuimos, fuisteis, fueron</td></tr>
        <tr><td><em>Fui a Madrid.</em> = Ich fuhr nach Madrid. (ir)</td></tr>
        <tr><td><em>Fue difícil.</em> = Es war schwierig. (ser)</td></tr>
      </table>
      <p><em>dar</em> nimmt die <em>-er</em>-Endungen: <em>di, diste, dio, dimos, disteis, dieron</em>.</p>`,
    uebungen: [
      { id: "g1701", satz: "Ayer ___ (tener, yo) mucho trabajo.", loesung: "tuve", tipps: ["tuve", "tení", "tenía"], hinweis: "Stamm tuv-", de: "Gestern hatte ich viel Arbeit." },
      { id: "g1702", satz: "Ella ___ (hacer) la comida.", loesung: "hizo", tipps: ["hizo", "hació", "hice"], hinweis: "él → hizo mit z", de: "Sie machte das Essen." },
      { id: "g1703", satz: "___ (ir, yo) a Barcelona en mayo.", loesung: "Fui", tipps: ["Fui", "Fue", "Iba"], hinweis: "ir = ser im Indefinido", de: "Ich fuhr im Mai nach Barcelona." },
      { id: "g1704", satz: "No ___ (poder, nosotros) entrar.", loesung: "pudimos", tipps: ["pudimos", "podimos", "podíamos"], hinweis: "Stamm pud-", de: "Wir konnten nicht hinein." },
      { id: "g1705", satz: "Ellos ___ (decir) la verdad.", loesung: "dijeron", tipps: ["dijeron", "dijieron", "decieron"], hinweis: "nach j kein i", de: "Sie sagten die Wahrheit." }
    ]
  }
});

LEKTIONEN.push({
  tag: 18, niveau: "A2", thema: "Als ich klein war",
  vokabeln: [
    { id: "v1801", es: "la infancia",    de: "die Kindheit",    wortart: "Substantiv", beispiel: "Mi infancia fue feliz.", beispielDe: "Meine Kindheit war glücklich." },
    { id: "v1802", es: "el juguete",     de: "das Spielzeug",   wortart: "Substantiv", beispiel: "Tenía muchos juguetes.", beispielDe: "Ich hatte viele Spielsachen." },
    { id: "v1803", es: "solía",          de: "pflegte zu",      wortart: "Verb", beispiel: "Solía jugar en la calle.", beispielDe: "Ich spielte immer auf der Straße." },
    { id: "v1804", es: "el colegio",     de: "die Schule",      wortart: "Substantiv", beispiel: "Iba al colegio a pie.", beispielDe: "Ich ging zu Fuß zur Schule." },
    { id: "v1805", es: "a menudo",       de: "häufig",          wortart: "Adverb", beispiel: "A menudo visitábamos a los abuelos.", beispielDe: "Wir besuchten oft die Großeltern." },
    { id: "v1806", es: "el vecindario",  de: "die Nachbarschaft", wortart: "Substantiv", beispiel: "Todo el vecindario nos conocía.", beispielDe: "Die ganze Nachbarschaft kannte uns." },
    { id: "v1807", es: "travieso",       de: "frech",           wortart: "Adjektiv", beispiel: "Era un niño muy travieso.", beispielDe: "Ich war ein sehr frecher Junge." },
    { id: "v1808", es: "la costumbre",   de: "die Gewohnheit",  wortart: "Substantiv", beispiel: "Era una costumbre familiar.", beispielDe: "Das war eine Familiengewohnheit." },
    { id: "v1809", es: "el recreo",      de: "die Pause (Schule)", wortart: "Substantiv", beispiel: "En el recreo jugábamos al fútbol.", beispielDe: "In der Pause spielten wir Fußball." },
    { id: "v1810", es: "echar de menos", de: "vermissen",       wortart: "Verb", beispiel: "Echo de menos aquellos veranos.", beispielDe: "Ich vermisse jene Sommer." }
  ],
  saetze: [
    { id: "s1801", es: "Cuando era niño, vivía en un pueblo.", de: "Als ich ein Kind war, lebte ich in einem Dorf." },
    { id: "s1802", es: "Todos los días íbamos al parque.",     de: "Jeden Tag gingen wir in den Park." },
    { id: "s1803", es: "Mi abuela cocinaba muy bien.",         de: "Meine Großmutter kochte sehr gut." },
    { id: "s1804", es: "Antes no había móviles.",              de: "Früher gab es keine Handys." },
    { id: "s1805", es: "En verano siempre hacía mucho calor.", de: "Im Sommer war es immer sehr heiß." }
  ],
  grammatik: {
    id: "g18", titel: "Imperfecto — wie es früher war",
    erklaerung: `
      <p>Das <em>Imperfecto</em> beschreibt Zustände und Gewohnheiten in der Vergangenheit —
      es sagt nicht, was passierte, sondern <strong>wie es war</strong>.</p>
      <table>
        <tr><th></th><th>hablar</th><th>comer / vivir</th></tr>
        <tr><td>yo</td><td>habl<em>aba</em></td><td>com<em>ía</em></td></tr>
        <tr><td>tú</td><td>habl<em>abas</em></td><td>com<em>ías</em></td></tr>
        <tr><td>él/ella</td><td>habl<em>aba</em></td><td>com<em>ía</em></td></tr>
        <tr><td>nosotros</td><td>habl<em>ábamos</em></td><td>com<em>íamos</em></td></tr>
        <tr><td>vosotros</td><td>habl<em>abais</em></td><td>com<em>íais</em></td></tr>
        <tr><td>ellos</td><td>habl<em>aban</em></td><td>com<em>ían</em></td></tr>
      </table>
      <div class="merke"><strong>Die einfachste Zeit im Spanischen:</strong> Es gibt nur
      <strong>drei</strong> unregelmäßige Verben überhaupt.</div>
      <table>
        <tr><th>ser</th><th>ir</th><th>ver</th></tr>
        <tr><td>era, eras, era,<br>éramos, erais, eran</td>
            <td>iba, ibas, iba,<br>íbamos, ibais, iban</td>
            <td>veía, veías, veía,<br>veíamos, veíais, veían</td></tr>
      </table>
      <p><strong>Wofür man es benutzt:</strong></p>
      <ul>
        <li>Gewohnheiten früher: <em>Todos los días iba al colegio.</em></li>
        <li>Beschreibungen: <em>La casa era grande y tenía un jardín.</em></li>
        <li>Alter und Uhrzeit: <em>Tenía diez años. Eran las tres.</em></li>
        <li>Wetter: <em>Hacía frío.</em></li>
        <li>Hintergrund für ein Ereignis: <em>Llovía cuando salí.</em></li>
      </ul>
      <p><strong>Signalwörter:</strong> <em>antes, siempre, todos los días, cada verano,
      normalmente, mientras, cuando era niño, a menudo</em>.</p>`,
    uebungen: [
      { id: "g1801", satz: "Cuando ___ (ser, yo) niño, jugaba mucho.", loesung: "era", tipps: ["era", "fui", "estaba"], hinweis: "ser unregelmäßig", de: "Als ich ein Kind war, spielte ich viel." },
      { id: "g1802", satz: "Todos los días ___ (ir, nosotros) al parque.", loesung: "íbamos", tipps: ["íbamos", "fuimos", "vamos"], hinweis: "ir unregelmäßig", de: "Jeden Tag gingen wir in den Park." },
      { id: "g1803", satz: "Mi abuela ___ (cocinar) muy bien.", loesung: "cocinaba", tipps: ["cocinaba", "cocinó", "cocina"], hinweis: "-ar → -aba", de: "Meine Großmutter kochte sehr gut." },
      { id: "g1804", satz: "Antes no ___ (haber) móviles.", loesung: "había", tipps: ["había", "hubo", "hay"], hinweis: "hay im Imperfecto", de: "Früher gab es keine Handys." },
      { id: "g1805", satz: "Ellos ___ (vivir) en Sevilla entonces.", loesung: "vivían", tipps: ["vivían", "vivieron", "viven"], hinweis: "-ir → -ía", de: "Sie lebten damals in Sevilla." }
    ]
  }
});

LEKTIONEN.push({
  tag: 19, niveau: "A2", thema: "Eine Geschichte erzählen (1)",
  vokabeln: [
    { id: "v1901", es: "mientras",       de: "während",         wortart: "Konjunktion", beispiel: "Mientras cocinaba, sonó el teléfono.", beispielDe: "Während ich kochte, klingelte das Telefon." },
    { id: "v1902", es: "de pronto",      de: "auf einmal",      wortart: "Adverb", beispiel: "De pronto se apagó la luz.", beispielDe: "Auf einmal ging das Licht aus." },
    { id: "v1903", es: "darse cuenta",   de: "merken",          wortart: "Verb", beispiel: "Me di cuenta muy tarde.", beispielDe: "Ich merkte es sehr spät." },
    { id: "v1904", es: "asustarse",      de: "erschrecken",     wortart: "Verb", beispiel: "Me asusté mucho.", beispielDe: "Ich erschrak sehr." },
    { id: "v1905", es: "el ruido",       de: "das Geräusch",    wortart: "Substantiv", beispiel: "Oí un ruido extraño.", beispielDe: "Ich hörte ein seltsames Geräusch." },
    { id: "v1906", es: "sonar",          de: "klingeln",        wortart: "Verb", beispiel: "Sonó el despertador.", beispielDe: "Der Wecker klingelte." },
    { id: "v1907", es: "por casualidad", de: "zufällig",        wortart: "Adverb", beispiel: "Lo encontré por casualidad.", beispielDe: "Ich fand es zufällig." },
    { id: "v1908", es: "al final",       de: "am Ende",         wortart: "Adverb", beispiel: "Al final todo salió bien.", beispielDe: "Am Ende ging alles gut." },
    { id: "v1909", es: "olvidarse de",   de: "vergessen",       wortart: "Verb", beispiel: "Me olvidé de las llaves.", beispielDe: "Ich vergaß die Schlüssel." },
    { id: "v1910", es: "el susto",       de: "der Schreck",     wortart: "Substantiv", beispiel: "¡Qué susto me diste!", beispielDe: "Hast du mich erschreckt!" }
  ],
  saetze: [
    { id: "s1901", es: "Mientras cocinaba, sonó el teléfono.",  de: "Während ich kochte, klingelte das Telefon." },
    { id: "s1902", es: "Hacía frío cuando salimos de casa.",    de: "Es war kalt, als wir aus dem Haus gingen." },
    { id: "s1903", es: "Estaba cansado, así que me acosté.",    de: "Ich war müde, also legte ich mich hin." },
    { id: "s1904", es: "Cuando llegué, ella ya no estaba.",     de: "Als ich ankam, war sie schon nicht mehr da." },
    { id: "s1905", es: "Llovía mucho y decidimos quedarnos.",   de: "Es regnete stark und wir beschlossen zu bleiben." }
  ],
  grammatik: {
    id: "g19", titel: "Indefinido oder Imperfecto? (Teil 1)",
    erklaerung: `
      <p>Das ist <strong>das</strong> Thema, an dem sich A2 entscheidet. Beide Zeiten sind
      Vergangenheit, aber sie erzählen Verschiedenes.</p>
      <div class="merke"><strong>Das Bild, das alles erklärt — ein Film:</strong><br>
      <strong>Imperfecto</strong> = die Kulisse. Wie es aussah, wie das Wetter war, wie
      du dich fühltest. Läuft im Hintergrund weiter.<br>
      <strong>Indefinido</strong> = die Handlung. Was passiert ist. Ein Punkt auf der
      Zeitachse, dann geht es weiter.</div>
      <table>
        <tr><th>Imperfecto — Kulisse</th><th>Indefinido — Handlung</th></tr>
        <tr><td>Beschreibung: <em>La casa era grande.</em></td><td>Ereignis: <em>Compré la casa.</em></td></tr>
        <tr><td>Gewohnheit: <em>Iba todos los días.</em></td><td>einmalig: <em>Fui una vez.</em></td></tr>
        <tr><td>Zustand: <em>Estaba cansado.</em></td><td>Beginn: <em>Me cansé.</em></td></tr>
        <tr><td>Uhrzeit/Wetter: <em>Eran las ocho. Llovía.</em></td><td>Abfolge: <em>Salí, comí y volví.</em></td></tr>
        <tr><td>ohne Ende gedacht</td><td>abgeschlossen, ggf. mit Dauerangabe</td></tr>
      </table>
      <p><strong>Der klassische Satzbau — beide zusammen:</strong></p>
      <ul>
        <li><em><strong>Mientras</strong> cocin<strong>aba</strong> (Kulisse),
            <strong>sonó</strong> el teléfono (Handlung).</em></li>
        <li><em><strong>Cuando</strong> lleg<strong>ué</strong> (Handlung),
            ella dorm<strong>ía</strong> (Kulisse).</em></li>
      </ul>
      <p>Faustregel für diese Satzpaare: nach <em>mientras</em> steht meist Imperfecto,
      nach <em>cuando</em> meist Indefinido.</p>
      <div class="merke"><strong>Testfrage im Zweifel:</strong> „Beschreibe ich, wie es war,
      oder erzähle ich, was passierte?" — Beschreibung → Imperfecto. Ereignis → Indefinido.</div>`,
    uebungen: [
      { id: "g1901", satz: "Mientras ___ (cocinar, yo), sonó el teléfono.", loesung: "cocinaba", tipps: ["cocinaba", "cociné"], hinweis: "Kulisse", de: "Während ich kochte, klingelte das Telefon." },
      { id: "g1902", satz: "Ayer ___ (ir, yo) al cine con Ana.", loesung: "fui", tipps: ["fui", "iba"], hinweis: "einmaliges Ereignis", de: "Gestern ging ich mit Ana ins Kino." },
      { id: "g1903", satz: "___ (ser) las ocho cuando llegó.", loesung: "Eran", tipps: ["Eran", "Fueron"], hinweis: "Uhrzeit = Kulisse", de: "Es war acht, als er ankam." },
      { id: "g1904", satz: "De repente ___ (empezar) a llover.", loesung: "empezó", tipps: ["empezó", "empezaba"], hinweis: "de repente = Handlung", de: "Plötzlich fing es an zu regnen." },
      { id: "g1905", satz: "Antes ___ (jugar, nosotros) todos los días.", loesung: "jugábamos", tipps: ["jugábamos", "jugamos"], hinweis: "Gewohnheit", de: "Früher spielten wir jeden Tag." }
    ]
  }
});

LEKTIONEN.push({
  tag: 20, niveau: "A2", thema: "Eine Geschichte erzählen (2)",
  vokabeln: [
    { id: "v2001", es: "el desenlace",   de: "der Ausgang",      wortart: "Substantiv", beispiel: "El desenlace fue inesperado.", beispielDe: "Der Ausgang war unerwartet." },
    { id: "v2002", es: "en aquella época", de: "damals",         wortart: "Adverb", beispiel: "En aquella época yo era estudiante.", beispielDe: "Damals war ich Student." },
    { id: "v2003", es: "durar",          de: "dauern",          wortart: "Verb", beispiel: "La reunión duró dos horas.", beispielDe: "Die Sitzung dauerte zwei Stunden." },
    { id: "v2004", es: "enterarse",      de: "erfahren",        wortart: "Verb", beispiel: "Me enteré ayer.", beispielDe: "Ich habe es gestern erfahren." },
    { id: "v2005", es: "el detalle",     de: "das Detail",      wortart: "Substantiv", beispiel: "No recuerdo los detalles.", beispielDe: "Ich erinnere mich nicht an die Details." },
    { id: "v2006", es: "convertirse en", de: "werden zu",       wortart: "Verb", beispiel: "Se convirtió en un problema.", beispielDe: "Es wurde zu einem Problem." },
    { id: "v2007", es: "mudarse",        de: "umziehen",        wortart: "Verb", beispiel: "Nos mudamos en 2018.", beispielDe: "Wir zogen 2018 um." },
    { id: "v2008", es: "el ambiente",    de: "die Stimmung",    wortart: "Substantiv", beispiel: "El ambiente era muy bueno.", beispielDe: "Die Stimmung war sehr gut." },
    { id: "v2009", es: "de golpe",       de: "schlagartig",     wortart: "Adverb", beispiel: "Todo cambió de golpe.", beispielDe: "Alles änderte sich schlagartig." },
    { id: "v2010", es: "el motivo",      de: "der Grund",       wortart: "Substantiv", beispiel: "Nunca supe el motivo.", beispielDe: "Ich erfuhr nie den Grund." }
  ],
  saetze: [
    { id: "s2001", es: "Vivíamos en Madrid cuando nació mi hijo.", de: "Wir wohnten in Madrid, als mein Sohn geboren wurde." },
    { id: "s2002", es: "La película duró dos horas y media.",      de: "Der Film dauerte zweieinhalb Stunden." },
    { id: "s2003", es: "Estaba lloviendo, así que cogimos un taxi.", de: "Es regnete, also nahmen wir ein Taxi." },
    { id: "s2004", es: "Trabajé allí desde 2015 hasta 2019.",      de: "Ich arbeitete dort von 2015 bis 2019." },
    { id: "s2005", es: "Cuando lo conocí, tenía veinte años.",     de: "Als ich ihn kennenlernte, war er zwanzig." }
  ],
  grammatik: {
    id: "g20", titel: "Indefinido oder Imperfecto? (Teil 2)",
    erklaerung: `
      <p>Heute die Feinheiten — die Fälle, in denen beide Zeiten gehen, aber Verschiedenes
      bedeuten.</p>
      <p><strong>1. Dauer: begrenzt oder unbegrenzt?</strong></p>
      <ul>
        <li><em>Viví en Madrid <strong>cinco años</strong>.</em> — abgeschlossener Zeitraum
            mit Anfang und Ende → Indefinido</li>
        <li><em>Vivía en Madrid <strong>cuando era joven</strong>.</em> — Hintergrund,
            kein Ende genannt → Imperfecto</li>
      </ul>
      <div class="merke"><strong>Wichtig:</strong> Eine Zeitangabe macht einen Satz nicht
      automatisch zum Imperfecto. <em>Duró dos horas</em> ist Indefinido — die zwei Stunden
      sind ein abgeschlossener Block.</div>
      <p><strong>2. Verben, die die Bedeutung wechseln.</strong> Hier ist der Unterschied am
      auffälligsten:</p>
      <table>
        <tr><th>Verb</th><th>Imperfecto (Zustand)</th><th>Indefinido (Ereignis)</th></tr>
        <tr><td>saber</td><td><em>sabía</em> = ich wusste</td><td><em>supe</em> = ich erfuhr</td></tr>
        <tr><td>conocer</td><td><em>conocía</em> = ich kannte</td><td><em>conocí</em> = ich lernte kennen</td></tr>
        <tr><td>poder</td><td><em>podía</em> = ich konnte (war fähig)</td><td><em>pude</em> = ich schaffte es</td></tr>
        <tr><td>querer</td><td><em>quería</em> = ich wollte</td><td><em>quise</em> = ich versuchte</td></tr>
        <tr><td>tener</td><td><em>tenía</em> = ich hatte</td><td><em>tuve</em> = ich bekam</td></tr>
      </table>
      <p><em>Conocía a Ana.</em> = Ich kannte Ana (schon länger).<br>
      <em>Conocí a Ana en 2020.</em> = Ich lernte Ana 2020 kennen.</p>
      <p><strong>3. Unterbrochene Handlung.</strong> Das Imperfecto war im Gange, das
      Indefinido kommt dazwischen:<br>
      <em>Dormía tranquilamente cuando <strong>sonó</strong> el despertador.</em></p>`,
    uebungen: [
      { id: "g2001", satz: "___ (vivir, yo) allí cinco años.", loesung: "Viví", tipps: ["Viví", "Vivía"], hinweis: "begrenzter Zeitraum", de: "Ich lebte fünf Jahre dort." },
      { id: "g2002", satz: "La reunión ___ (durar) dos horas.", loesung: "duró", tipps: ["duró", "duraba"], hinweis: "abgeschlossener Block", de: "Die Sitzung dauerte zwei Stunden." },
      { id: "g2003", satz: "___ (conocer, yo) a mi mujer en 2010.", loesung: "Conocí", tipps: ["Conocí", "Conocía"], hinweis: "kennenlernen = Ereignis", de: "Ich lernte meine Frau 2010 kennen." },
      { id: "g2004", satz: "Yo no ___ (saber) nada del asunto.", loesung: "sabía", tipps: ["sabía", "supe"], hinweis: "Zustand des Wissens", de: "Ich wusste nichts von der Sache." },
      { id: "g2005", satz: "Dormía cuando ___ (sonar) el teléfono.", loesung: "sonó", tipps: ["sonó", "sonaba"], hinweis: "Unterbrechung", de: "Ich schlief, als das Telefon klingelte." }
    ]
  }
});
