/* Ruta temática «Alemán en el trabajo» · Día 9–16 · Restaurante y servicio
   Del saludo en la puerta hasta la cuenta y la reserva por teléfono. */

LEKTION('de-beruf', {
  tag: 9, niveau: "A2", thema: "El restaurante y el cubierto",
  vokabeln: [
    { id: "bv0901", de: "der Gast",       es: "el cliente",     wortart: "sustantivo", beispiel: "Der Gast wartet an der Tür.", beispielUe: "El cliente espera en la puerta." },
    { id: "bv0902", de: "der Tisch",      es: "la mesa",        wortart: "sustantivo", beispiel: "Tisch sieben ist frei.", beispielUe: "La mesa siete está libre." },
    { id: "bv0903", de: "der Stuhl",      es: "la silla",       wortart: "sustantivo", beispiel: "Wir brauchen noch einen Stuhl.", beispielUe: "Necesitamos otra silla." },
    { id: "bv0904", de: "das Besteck",    es: "los cubiertos",  wortart: "sustantivo", beispiel: "Das Besteck ist poliert.", beispielUe: "Los cubiertos están abrillantados." },
    { id: "bv0905", de: "die Gabel",      es: "el tenedor",     wortart: "sustantivo", beispiel: "Hier fehlt eine Gabel.", beispielUe: "Aquí falta un tenedor." },
    { id: "bv0906", de: "das Glas",       es: "el vaso",        wortart: "sustantivo", beispiel: "Die Gläser sind sauber.", beispielUe: "Los vasos están limpios." },
    { id: "bv0907", de: "die Serviette",  es: "la servilleta",  wortart: "sustantivo", beispiel: "Die Servietten liegen links.", beispielUe: "Las servilletas van a la izquierda." },
    { id: "bv0908", de: "die Tischdecke", es: "el mantel",      wortart: "sustantivo", beispiel: "Die Tischdecke hat einen Fleck.", beispielUe: "El mantel tiene una mancha." },
    { id: "bv0909", de: "decken",         es: "poner la mesa",  wortart: "verbo", beispiel: "Deck bitte Tisch drei.", beispielUe: "Pon la mesa tres, por favor." },
    { id: "bv0910", de: "reservieren",    es: "reservar",       wortart: "verbo", beispiel: "Haben Sie reserviert?", beispielUe: "¿Tienen reserva?" }
  ],
  saetze: [
    { id: "bs0901", de: "Guten Abend, herzlich willkommen!", es: "Buenas noches, ¡bienvenidos!" },
    { id: "bs0902", de: "Haben Sie reserviert?", es: "¿Tienen reserva?" },
    { id: "bs0903", de: "Für wie viele Personen darf es sein?", es: "¿Para cuántas personas?" },
    { id: "bs0904", de: "Folgen Sie mir bitte, Ihr Tisch ist hier.", es: "Síganme, por favor, su mesa está aquí." },
    { id: "bs0905", de: "Darf ich Ihnen die Jacke abnehmen?", es: "¿Me permite su chaqueta?" }
  ],
  grammatik: {
    id: "bg09", titel: "Recursos: recibir y acomodar a los clientes",
    erklaerung: `
      <p>Los primeros treinta segundos deciden la impresión de toda la noche. Son cuatro
      frases fijas, siempre en el mismo orden, y siempre con <strong>Sie</strong>: a los
      clientes se les trata de usted, sin excepción.</p>
      <table>
        <tr><th>Momento</th><th>Frase</th></tr>
        <tr><td>1. Saludar</td><td>Guten Abend, <strong>herzlich willkommen!</strong></td></tr>
        <tr><td>2. Preguntar por la reserva</td><td><strong>Haben Sie reserviert?</strong> Auf welchen Namen?</td></tr>
        <tr><td>3. Preguntar el número</td><td><strong>Für wie viele Personen</strong> darf es sein?</td></tr>
        <tr><td>4. Acompañar</td><td><strong>Folgen Sie mir bitte.</strong> Ist dieser Tisch in Ordnung?</td></tr>
      </table>
      <div class="merke">El saludo cambia con la hora: <strong>Guten Morgen</strong> hasta
      las 10, <strong>Guten Tag</strong> hasta las 18, <strong>Guten Abend</strong> a partir
      de las 18. En el sur de Alemania y en Austria también se oye <em>Grüß Gott</em>.</div>
      <p>Ofrecer algo se hace con <strong>Darf ich ...?</strong> — literalmente «¿me está
      permitido ...?». Es la fórmula más cortés que existe en el servicio:</p>
      <ul>
        <li><strong>Darf ich</strong> Ihnen die Jacke abnehmen?</li>
        <li><strong>Darf ich</strong> Ihnen schon etwas zu trinken bringen?</li>
        <li><strong>Darf ich</strong> Ihnen den Tisch am Fenster anbieten?</li>
      </ul>`,
    uebungen: [
      { id: "bg0901", satz: "Herzlich ___ bei uns!", loesung: "willkommen", tipps: ["willkommen", "wilkommen", "willkommt"], hinweis: "fórmula de bienvenida", ue: "¡Bienvenidos!" },
      { id: "bg0902", satz: "Haben Sie ___?", loesung: "reserviert", tipps: ["reserviert", "reservieren", "reserviere"], hinweis: "Perfekt: haben + participio", ue: "¿Tienen reserva?" },
      { id: "bg0903", satz: "Für wie ___ Personen darf es sein?", loesung: "viele", tipps: ["viele", "viel", "vielen"], hinweis: "wie viele + contable", ue: "¿Para cuántas personas?" },
      { id: "bg0904", satz: "___ Sie mir bitte. (folgen)", loesung: "Folgen", tipps: ["Folgen", "Folgt", "Folge"], hinweis: "imperativo de cortesía con Sie", ue: "Síganme, por favor." },
      { id: "bg0905", satz: "___ ich Ihnen die Jacke abnehmen?", loesung: "Darf", tipps: ["Darf", "Muss", "Will"], hinweis: "Darf ich ...? = ¿me permite ...?", ue: "¿Me permite su chaqueta?" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 10, niveau: "A2", thema: "La carta y los platos",
  vokabeln: [
    { id: "bv1001", de: "die Speisekarte",     es: "la carta",                wortart: "sustantivo", beispiel: "Hier ist die Speisekarte.", beispielUe: "Aquí está la carta." },
    { id: "bv1002", de: "die Vorspeise",       es: "la entrada",              wortart: "sustantivo", beispiel: "Als Vorspeise gibt es Suppe.", beispielUe: "De entrada hay sopa." },
    { id: "bv1003", de: "der Hauptgang",       es: "el plato principal",      wortart: "sustantivo", beispiel: "Der Hauptgang kommt gleich.", beispielUe: "El principal viene enseguida." },
    { id: "bv1004", de: "die Beilage",         es: "la guarnición",           wortart: "sustantivo", beispiel: "Welche Beilage möchten Sie?", beispielUe: "¿Qué guarnición desea?" },
    { id: "bv1005", de: "die Nachspeise",      es: "el postre",               wortart: "sustantivo", beispiel: "Die Nachspeise ist hausgemacht.", beispielUe: "El postre es casero." },
    { id: "bv1006", de: "die Tagesempfehlung", es: "la recomendación del día", wortart: "sustantivo", beispiel: "Unsere Tagesempfehlung ist Fisch.", beispielUe: "Nuestra recomendación del día es pescado." },
    { id: "bv1007", de: "hausgemacht",         es: "casero",                  wortart: "adjetivo", beispiel: "Die Pasta ist hausgemacht.", beispielUe: "La pasta es casera." },
    { id: "bv1008", de: "die Soße",            es: "la salsa",                wortart: "sustantivo", beispiel: "Die Soße kommt extra.", beispielUe: "La salsa va aparte." },
    { id: "bv1009", de: "empfehlen",           es: "recomendar",              wortart: "verbo", beispiel: "Ich empfehle Ihnen das Lamm.", beispielUe: "Le recomiendo el cordero." },
    { id: "bv1010", de: "enthalten",           es: "contener",                wortart: "verbo", beispiel: "Das Gericht enthält Nüsse.", beispielUe: "El plato contiene nueces." }
  ],
  saetze: [
    { id: "bs1001", de: "Als Vorspeise empfehle ich die Suppe.", es: "De entrada recomiendo la sopa." },
    { id: "bs1002", de: "Das Gericht wird mit Kartoffeln serviert.", es: "El plato se sirve con papas." },
    { id: "bs1003", de: "Die Soße ist hausgemacht.", es: "La salsa es casera." },
    { id: "bs1004", de: "Das ist unsere Tagesempfehlung.", es: "Esa es nuestra recomendación del día." },
    { id: "bs1005", de: "Möchten Sie die Karte noch einmal sehen?", es: "¿Desean ver la carta otra vez?" }
  ],
  grammatik: {
    id: "bg10", titel: "Recursos: explicar y recomendar un plato",
    erklaerung: `
      <p>Explicar un plato tiene una estructura fija de tres partes: <strong>qué es</strong>,
      <strong>cómo está hecho</strong>, <strong>con qué se sirve</strong>.</p>
      <table>
        <tr><th>Parte</th><th>Modelo</th></tr>
        <tr><td>qué es</td><td>Das ist ein Stück Rinderfilet.</td></tr>
        <tr><td>cómo está hecho</td><td>Es <strong>wird</strong> kurz <strong>gebraten</strong>.</td></tr>
        <tr><td>con qué se sirve</td><td>Es wird <strong>mit</strong> Kartoffeln <strong>serviert</strong>.</td></tr>
      </table>
      <div class="merke">Fíjate en la pasiva <em>wird ... serviert</em>. En la carta y al
      explicar platos casi todo va en pasiva, porque no importa quién lo cocina:
      <em>Der Fisch wird gegrillt. Die Soße wird separat gereicht.</em></div>
      <p>Para recomendar, tres fórmulas de más suave a más clara:</p>
      <ul>
        <li><strong>Ich kann Ihnen ... empfehlen.</strong> — puedo recomendarle</li>
        <li><strong>Ich empfehle Ihnen ...</strong> — le recomiendo</li>
        <li><strong>Sehr beliebt ist bei uns ...</strong> — muy popular aquí es</li>
      </ul>
      <p>Y si el cliente pregunta por algo que no tienes: <em>Das haben wir heute leider
      nicht, aber ich kann Ihnen ... anbieten.</em> Nunca digas solo <em>nein</em>: ofrece
      siempre una alternativa.</p>`,
    uebungen: [
      { id: "bg1001", satz: "Ich ___ Ihnen den Fisch.", loesung: "empfehle", tipps: ["empfehle", "empfiehlt", "empfehlen"], hinweis: "ich + verbo en -e", ue: "Le recomiendo el pescado." },
      { id: "bg1002", satz: "Die Soße ist ___.", loesung: "hausgemacht", tipps: ["hausgemacht", "hausmachen", "hausgemachte"], hinweis: "adjetivo sin terminación tras sein", ue: "La salsa es casera." },
      { id: "bg1003", satz: "Das Gericht ___ Nüsse.", loesung: "enthält", tipps: ["enthält", "enthalten", "enthalte"], hinweis: "es + verbo: a → ä", ue: "El plato contiene nueces." },
      { id: "bg1004", satz: "Als ___ gibt es Kartoffeln oder Reis.", loesung: "Beilage", tipps: ["Beilage", "Vorspeise", "Nachspeise"], hinweis: "la guarnición", ue: "De guarnición hay papas o arroz." },
      { id: "bg1005", satz: "Der Fisch ___ gegrillt serviert.", loesung: "wird", tipps: ["wird", "ist", "hat"], hinweis: "pasiva: werden + participio", ue: "El pescado se sirve a la parrilla." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 11, niveau: "A2", thema: "Bebidas",
  vokabeln: [
    { id: "bv1101", de: "das Getränk",        es: "la bebida",        wortart: "sustantivo", beispiel: "Die Getränke kommen zuerst.", beispielUe: "Las bebidas vienen primero." },
    { id: "bv1102", de: "der Wein",           es: "el vino",          wortart: "sustantivo", beispiel: "Der Wein ist aus Spanien.", beispielUe: "El vino es de España." },
    { id: "bv1103", de: "das Bier",           es: "la cerveza",       wortart: "sustantivo", beispiel: "Ein großes Bier, bitte.", beispielUe: "Una cerveza grande, por favor." },
    { id: "bv1104", de: "der Saft",           es: "el jugo",          wortart: "sustantivo", beispiel: "Wir haben frischen Saft.", beispielUe: "Tenemos jugo natural." },
    { id: "bv1105", de: "das Mineralwasser",  es: "el agua mineral",  wortart: "sustantivo", beispiel: "Mineralwasser mit Kohlensäure?", beispielUe: "¿Agua mineral con gas?" },
    { id: "bv1106", de: "die Flasche",        es: "la botella",       wortart: "sustantivo", beispiel: "Eine Flasche Rotwein, bitte.", beispielUe: "Una botella de tinto, por favor." },
    { id: "bv1107", de: "das Leitungswasser", es: "el agua del grifo", wortart: "sustantivo", beispiel: "Leitungswasser ist kostenlos.", beispielUe: "El agua del grifo es gratis." },
    { id: "bv1108", de: "trocken",            es: "seco",             wortart: "adjetivo", beispiel: "Der Weißwein ist trocken.", beispielUe: "El vino blanco es seco." },
    { id: "bv1109", de: "einschenken",        es: "servir un líquido", wortart: "verbo separable", beispiel: "Ich schenke Ihnen ein.", beispielUe: "Le sirvo." },
    { id: "bv1110", de: "der Kaffee",         es: "el café",          wortart: "sustantivo", beispiel: "Zwei Kaffee, bitte.", beispielUe: "Dos cafés, por favor." }
  ],
  saetze: [
    { id: "bs1101", de: "Was möchten Sie trinken?", es: "¿Qué desean tomar?" },
    { id: "bs1102", de: "Ein Glas Rotwein und ein großes Bier.", es: "Una copa de tinto y una cerveza grande." },
    { id: "bs1103", de: "Darf ich Ihnen noch Wasser nachschenken?", es: "¿Le sirvo más agua?" },
    { id: "bs1104", de: "Der Wein ist trocken und passt gut zum Fisch.", es: "El vino es seco y va bien con el pescado." },
    { id: "bs1105", de: "Möchten Sie einen Kaffee zum Abschluss?", es: "¿Desean un café para terminar?" }
  ],
  grammatik: {
    id: "bg11", titel: "Recursos: recomendar y servir bebidas",
    erklaerung: `
      <p>Las bebidas se cuentan en alemán con la <strong>medida</strong>, no con la palabra
      «de». Igual que en la cocina: dos palabras seguidas, sin preposición.</p>
      <table>
        <tr><th>Español</th><th>Alemán</th></tr>
        <tr><td>una copa <em>de</em> vino</td><td>ein Glas Wein</td></tr>
        <tr><td>una botella <em>de</em> agua</td><td>eine Flasche Wasser</td></tr>
        <tr><td>una jarra <em>de</em> cerveza</td><td>ein Krug Bier</td></tr>
        <tr><td>dos tazas <em>de</em> café</td><td>zwei Tassen Kaffee</td></tr>
      </table>
      <div class="merke">La cerveza se pide por tamaño: <strong>ein kleines</strong> (0,3 l)
      y <strong>ein großes Bier</strong> (0,5 l). Y el agua siempre tiene dos versiones:
      <strong>mit Kohlensäure</strong> (con gas) o <strong>still</strong> (sin gas).</div>
      <p>Las cuatro frases del servicio de bebidas:</p>
      <ul>
        <li><strong>Was möchten Sie trinken?</strong> — al llegar</li>
        <li><strong>Darf ich Ihnen nachschenken?</strong> — cuando la copa está casi vacía</li>
        <li><strong>Möchten Sie noch etwas trinken?</strong> — a mitad de la comida</li>
        <li><strong>Zum Wohl!</strong> / <strong>Prost!</strong> — al servir un brindis</li>
      </ul>
      <p>Recomendar un vino con un plato: <em>Dazu passt gut ein trockener Weißwein.</em>
      La palabra clave es <strong>dazu passt</strong> — «con eso va bien».</p>`,
    uebungen: [
      { id: "bg1101", satz: "Was möchten Sie ___?", loesung: "trinken", tipps: ["trinken", "trinkt", "getrunken"], hinweis: "infinitivo detrás de möchten", ue: "¿Qué desean tomar?" },
      { id: "bg1102", satz: "Möchten Sie den Wein trocken oder ___?", loesung: "lieblich", tipps: ["lieblich", "trocken", "sauer"], hinweis: "lo contrario de trocken", ue: "¿El vino seco o dulce?" },
      { id: "bg1103", satz: "Darf ich Ihnen ___?", loesung: "nachschenken", tipps: ["nachschenken", "nachgeschenkt", "schenke nach"], hinweis: "infinitivo detrás de darf", ue: "¿Le sirvo más?" },
      { id: "bg1104", satz: "Eine ___ Mineralwasser, bitte.", loesung: "Flasche", tipps: ["Flasche", "Glas", "Tasse"], hinweis: "medida femenina", ue: "Una botella de agua mineral, por favor." },
      { id: "bg1105", satz: "Dazu ___ gut ein trockener Weißwein.", loesung: "passt", tipps: ["passt", "passen", "gepasst"], hinweis: "sujeto singular: ein Weißwein", ue: "Con eso va bien un blanco seco." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 12, niveau: "B1", thema: "Tomar la comanda",
  vokabeln: [
    { id: "bv1201", de: "bestellen",          es: "pedir",            wortart: "verbo", beispiel: "Möchten Sie schon bestellen?", beispielUe: "¿Desean pedir ya?" },
    { id: "bv1202", de: "wählen",             es: "elegir",           wortart: "verbo", beispiel: "Haben Sie schon gewählt?", beispielUe: "¿Ya eligieron?" },
    { id: "bv1203", de: "der Wunsch",         es: "el deseo",         wortart: "sustantivo", beispiel: "Haben Sie noch einen Wunsch?", beispielUe: "¿Desean algo más?" },
    { id: "bv1204", de: "zusätzlich",         es: "adicional",        wortart: "adjetivo", beispiel: "Ein zusätzlicher Teller, bitte.", beispielUe: "Un plato adicional, por favor." },
    { id: "bv1205", de: "ohne",               es: "sin",              wortart: "preposición", beispiel: "Das Gericht bitte ohne Zwiebeln.", beispielUe: "El plato sin cebolla, por favor." },
    { id: "bv1206", de: "stattdessen",        es: "en su lugar",      wortart: "adverbio", beispiel: "Stattdessen nehme ich Reis.", beispielUe: "En su lugar tomo arroz." },
    { id: "bv1207", de: "notieren",           es: "anotar",           wortart: "verbo", beispiel: "Ich notiere das sofort.", beispielUe: "Lo anoto enseguida." },
    { id: "bv1208", de: "die Reihenfolge",    es: "el orden",         wortart: "sustantivo", beispiel: "In welcher Reihenfolge servieren wir?", beispielUe: "¿En qué orden servimos?" },
    { id: "bv1209", de: "gleichzeitig",       es: "al mismo tiempo",  wortart: "adverbio", beispiel: "Alles kommt gleichzeitig.", beispielUe: "Todo sale al mismo tiempo." },
    { id: "bv1210", de: "selbstverständlich", es: "por supuesto",     wortart: "adverbio", beispiel: "Selbstverständlich, gern.", beispielUe: "Por supuesto, con gusto." }
  ],
  saetze: [
    { id: "bs1201", de: "Was hätten Sie gern?", es: "¿Qué desean tomar?" },
    { id: "bs1202", de: "Haben Sie schon gewählt?", es: "¿Ya eligieron?" },
    { id: "bs1203", de: "Möchten Sie das Steak mit Pommes oder mit Salat?", es: "¿El bistec con papas fritas o con ensalada?" },
    { id: "bs1204", de: "Das Gericht kann ich Ihnen auch ohne Zwiebeln bringen.", es: "Ese plato también se lo puedo traer sin cebolla." },
    { id: "bs1205", de: "Selbstverständlich, das notiere ich.", es: "Por supuesto, lo anoto." }
  ],
  grammatik: {
    id: "bg12", titel: "Recursos: preguntar con cortesía (Konjunktiv II)",
    erklaerung: `
      <p>En el servicio casi nada se pregunta en presente normal: sería demasiado directo.
      Se usa el <strong>Konjunktiv II</strong>, que suena como el condicional español.
      Solo necesitas cuatro formas, y con eso cubres el turno entero.</p>
      <table>
        <tr><th>Normal</th><th>Cortés (Konjunktiv II)</th><th>Español</th></tr>
        <tr><td>Was wollen Sie?</td><td>Was <strong>hätten</strong> Sie gern?</td><td>¿Qué desearía?</td></tr>
        <tr><td>Ich will das.</td><td>Ich <strong>hätte</strong> gern das.</td><td>Quisiera eso.</td></tr>
        <tr><td>Können Sie ...?</td><td><strong>Könnten</strong> Sie ...?</td><td>¿Podría ...?</td></tr>
        <tr><td>Ist das möglich?</td><td><strong>Wäre</strong> das möglich?</td><td>¿Sería posible?</td></tr>
      </table>
      <div class="merke">Las cuatro formas que hay que saber de memoria:
      <strong>hätte</strong> (de haben), <strong>wäre</strong> (de sein),
      <strong>könnte</strong> (de können), <strong>würde</strong> (para todo lo demás:
      <em>Würden Sie bitte ...?</em>).</div>
      <p>Y la joya del servicio alemán: <strong>Darf ich ...?</strong> Se usa para todo lo
      que haces por el cliente.</p>
      <ul>
        <li><strong>Darf ich</strong> Ihnen schon etwas zu trinken bringen?</li>
        <li><strong>Darf ich</strong> Ihnen die Tagesempfehlung nennen?</li>
        <li><strong>Darf es</strong> sonst noch etwas sein? — ¿algo más?</li>
      </ul>
      <p>Cuando el cliente pide un cambio, confirma siempre en voz alta lo que anotaste:
      <em>Also: einmal Steak ohne Zwiebeln, stattdessen Salat. Ist das richtig?</em></p>`,
    uebungen: [
      { id: "bg1201", satz: "Was ___ Sie gern?", loesung: "hätten", tipps: ["hätten", "haben", "hatten"], hinweis: "Konjunktiv II de haben", ue: "¿Qué desearían?" },
      { id: "bg1202", satz: "___ Sie schon gewählt?", loesung: "Haben", tipps: ["Haben", "Hätten", "Sind"], hinweis: "Perfekt de wählen: haben + gewählt", ue: "¿Ya eligieron?" },
      { id: "bg1203", satz: "___ ich Ihnen noch etwas bringen?", loesung: "Darf", tipps: ["Darf", "Muss", "Soll"], hinweis: "la fórmula de cortesía del servicio", ue: "¿Les traigo algo más?" },
      { id: "bg1204", satz: "Ich ___ das gern ohne Zwiebeln.", loesung: "hätte", tipps: ["hätte", "habe", "hatte"], hinweis: "ich + Konjunktiv II", ue: "Lo quisiera sin cebolla." },
      { id: "bg1205", satz: "___ Sie bitte kurz warten?", loesung: "Würden", tipps: ["Würden", "Werden", "Wurden"], hinweis: "würde para peticiones corteses", ue: "¿Podrían esperar un momento?" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 13, niveau: "B1", thema: "Servir y atender la mesa",
  vokabeln: [
    { id: "bv1301", de: "servieren",   es: "servir",           wortart: "verbo", beispiel: "Wir servieren ab 18 Uhr.", beispielUe: "Servimos a partir de las 18." },
    { id: "bv1302", de: "der Teller",  es: "el plato",         wortart: "sustantivo", beispiel: "Der Teller ist sehr heiß.", beispielUe: "El plato está muy caliente." },
    { id: "bv1303", de: "abräumen",    es: "retirar la mesa",  wortart: "verbo separable", beispiel: "Darf ich schon abräumen?", beispielUe: "¿Puedo retirar ya?" },
    { id: "bv1304", de: "nachfragen",  es: "preguntar, interesarse", wortart: "verbo separable", beispiel: "Ich frage in der Küche nach.", beispielUe: "Pregunto en la cocina." },
    { id: "bv1305", de: "das Tablett", es: "la bandeja",       wortart: "sustantivo", beispiel: "Nimm das Tablett mit.", beispielUe: "Llévate la bandeja." },
    { id: "bv1306", de: "aufmerksam",  es: "atento",           wortart: "adjetivo", beispiel: "Sei aufmerksam am Tisch.", beispielUe: "Está atento en la mesa." },
    { id: "bv1307", de: "zufrieden",   es: "satisfecho",       wortart: "adjetivo", beispiel: "Die Gäste sind zufrieden.", beispielUe: "Los clientes están satisfechos." },
    { id: "bv1308", de: "reichen",     es: "pasar, alcanzar",  wortart: "verbo", beispiel: "Reichen Sie mir bitte das Glas.", beispielUe: "Páseme el vaso, por favor." },
    { id: "bv1309", de: "vorsichtig",  es: "con cuidado",      wortart: "adjetivo", beispiel: "Trag das vorsichtig.", beispielUe: "Lleva eso con cuidado." },
    { id: "bv1310", de: "der Gang",    es: "el tiempo, el plato", wortart: "sustantivo", beispiel: "Der nächste Gang kommt gleich.", beispielUe: "El siguiente plato viene enseguida." }
  ],
  saetze: [
    { id: "bs1301", de: "Hat es Ihnen geschmeckt?", es: "¿Les ha gustado?" },
    { id: "bs1302", de: "Darf ich schon abräumen?", es: "¿Puedo retirar ya?" },
    { id: "bs1303", de: "Ist alles zu Ihrer Zufriedenheit?", es: "¿Está todo a su gusto?" },
    { id: "bs1304", de: "Vorsicht, der Teller ist sehr heiß.", es: "Cuidado, el plato está muy caliente." },
    { id: "bs1305", de: "Der nächste Gang kommt in wenigen Minuten.", es: "El siguiente plato viene en pocos minutos." }
  ],
  grammatik: {
    id: "bg13", titel: "Recursos: preguntar en la mesa y retirar",
    erklaerung: `
      <p>Un buen servicio pregunta dos veces: una al poco de servir, otra al terminar. Cada
      momento tiene su frase.</p>
      <table>
        <tr><th>Momento</th><th>Frase</th></tr>
        <tr><td>al servir</td><td>Einmal das Steak — <strong>guten Appetit!</strong></td></tr>
        <tr><td>a los dos minutos</td><td><strong>Ist alles in Ordnung?</strong> / <strong>Schmeckt es Ihnen?</strong></td></tr>
        <tr><td>al terminar</td><td><strong>Hat es Ihnen geschmeckt?</strong></td></tr>
        <tr><td>antes de retirar</td><td><strong>Darf ich abräumen?</strong> / <strong>Sind Sie fertig?</strong></td></tr>
      </table>
      <div class="merke">El verbo <strong>schmecken</strong> funciona como <em>gustar</em>:
      la comida es el sujeto y la persona va en dativo. <em>Es schmeckt <strong>mir</strong></em>,
      <em>Hat es <strong>Ihnen</strong> geschmeckt?</em> No digas <em>ich schmecke das gut</em>
      — eso significaría que tú eres quien sabe bien.</div>
      <p>Reglas prácticas del servicio en Alemania:</p>
      <ul>
        <li>No se retira un plato mientras alguien de la mesa siga comiendo.</li>
        <li>Nunca se pregunta por encima de la cabeza del cliente: se va al lado.</li>
        <li>Si algo se derrama: <em>Entschuldigung, ich bringe sofort ein neues.</em></li>
        <li>Al pasar con un plato caliente: <em>Vorsicht, heiß!</em></li>
      </ul>`,
    uebungen: [
      { id: "bg1301", satz: "___ es Ihnen geschmeckt?", loesung: "Hat", tipps: ["Hat", "Ist", "Haben"], hinweis: "Perfekt de schmecken con haben", ue: "¿Les ha gustado?" },
      { id: "bg1302", satz: "Darf ich schon ___?", loesung: "abräumen", tipps: ["abräumen", "abgeräumt", "räume ab"], hinweis: "infinitivo detrás de darf", ue: "¿Puedo retirar ya?" },
      { id: "bg1303", satz: "Ist alles zu Ihrer ___?", loesung: "Zufriedenheit", tipps: ["Zufriedenheit", "Zufrieden", "Wunsch"], hinweis: "sustantivo de zufrieden", ue: "¿Está todo a su gusto?" },
      { id: "bg1304", satz: "Vorsicht, der Teller ist sehr ___.", loesung: "heiß", tipps: ["heiß", "kalt", "schwer"], hinweis: "aviso al servir", ue: "Cuidado, el plato está muy caliente." },
      { id: "bg1305", satz: "Der Kuchen schmeckt ___ sehr gut. (yo)", loesung: "mir", tipps: ["mir", "mich", "ich"], hinweis: "schmecken + dativo", ue: "El pastel me gusta mucho." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 14, niveau: "B1", thema: "Quejas y reclamaciones",
  vokabeln: [
    { id: "bv1401", de: "die Beschwerde",    es: "la queja",          wortart: "sustantivo", beispiel: "Es gab eine Beschwerde.", beispielUe: "Hubo una queja." },
    { id: "bv1402", de: "sich beschweren",   es: "quejarse",          wortart: "verbo reflexivo", beispiel: "Der Gast beschwert sich.", beispielUe: "El cliente se queja." },
    { id: "bv1403", de: "die Entschuldigung", es: "la disculpa",      wortart: "sustantivo", beispiel: "Eine Entschuldigung genügt nicht immer.", beispielUe: "Una disculpa no siempre basta." },
    { id: "bv1404", de: "der Fehler",        es: "el error",          wortart: "sustantivo", beispiel: "Das war unser Fehler.", beispielUe: "Fue nuestro error." },
    { id: "bv1405", de: "kalt",              es: "frío",              wortart: "adjetivo", beispiel: "Die Suppe ist kalt.", beispielUe: "La sopa está fría." },
    { id: "bv1406", de: "versalzen",         es: "demasiado salado",  wortart: "adjetivo", beispiel: "Das Fleisch ist versalzen.", beispielUe: "La carne está muy salada." },
    { id: "bv1407", de: "umtauschen",        es: "cambiar algo",      wortart: "verbo separable", beispiel: "Wir tauschen das Gericht um.", beispielUe: "Cambiamos el plato." },
    { id: "bv1408", de: "sofort",            es: "enseguida",         wortart: "adverbio", beispiel: "Ich kümmere mich sofort darum.", beispielUe: "Me ocupo enseguida." },
    { id: "bv1409", de: "die Lösung",        es: "la solución",       wortart: "sustantivo", beispiel: "Wir finden eine Lösung.", beispielUe: "Encontramos una solución." },
    { id: "bv1410", de: "leider",            es: "lamentablemente",   wortart: "adverbio", beispiel: "Leider dauert es länger.", beispielUe: "Lamentablemente tarda más." }
  ],
  saetze: [
    { id: "bs1401", de: "Das tut mir sehr leid, ich kümmere mich sofort darum.", es: "Lo siento mucho, me ocupo enseguida." },
    { id: "bs1402", de: "Die Suppe ist kalt — ich bringe Ihnen eine neue.", es: "La sopa está fría, le traigo otra." },
    { id: "bs1403", de: "Entschuldigen Sie bitte die Wartezeit.", es: "Disculpen la espera, por favor." },
    { id: "bs1404", de: "Ich spreche kurz mit meinem Chef.", es: "Hablo un momento con mi jefe." },
    { id: "bs1405", de: "Selbstverständlich nehmen wir das von der Rechnung.", es: "Por supuesto, lo quitamos de la cuenta." }
  ],
  grammatik: {
    id: "bg14", titel: "Recursos: disculparse y ofrecer una solución",
    erklaerung: `
      <p>Una queja bien atendida deja mejor impresión que una noche sin problemas. La
      secuencia alemana tiene cuatro pasos, y el error más común es saltarse el tercero.</p>
      <table>
        <tr><th>Paso</th><th>Frase</th></tr>
        <tr><td>1. Escuchar y no discutir</td><td>Ich verstehe. Erzählen Sie mir bitte, was passiert ist.</td></tr>
        <tr><td>2. Disculparse</td><td><strong>Das tut mir sehr leid.</strong> / <strong>Entschuldigen Sie bitte.</strong></td></tr>
        <tr><td>3. Ofrecer una solución</td><td><strong>Ich bringe Ihnen sofort ein neues Gericht.</strong></td></tr>
        <tr><td>4. Comprobar</td><td>Ist das so in Ordnung für Sie?</td></tr>
      </table>
      <div class="merke">Dos verbos que se confunden: <strong>Entschuldigung</strong> /
      <em>Entschuldigen Sie</em> es la disculpa formal; <strong>Das tut mir leid</strong> es
      lamentar algo. En una queja se dicen los dos juntos, y ninguno de ellos admite un
      <em>aber</em> detrás: <em>Es tut mir leid, aber ...</em> anula la disculpa.</div>
      <p>Frases para ganar tiempo sin prometer nada que no puedas cumplir:</p>
      <ul>
        <li><strong>Ich kläre das sofort mit der Küche.</strong></li>
        <li><strong>Einen Moment bitte, ich frage meinen Chef.</strong></li>
        <li><strong>Ich kümmere mich persönlich darum.</strong></li>
      </ul>
      <p>Y lo que nunca se dice: <em>Das ist nicht mein Problem</em>, <em>Das war ich
      nicht</em> o <em>Da kann ich nichts machen.</em> Aunque sea verdad, ante el cliente
      el equipo responde como uno solo.</p>`,
    uebungen: [
      { id: "bg1401", satz: "Das tut mir sehr ___.", loesung: "leid", tipps: ["leid", "leider", "Leid"], hinweis: "expresión fija: es tut mir leid", ue: "Lo siento mucho." },
      { id: "bg1402", satz: "Ich ___ mich für den Fehler.", loesung: "entschuldige", tipps: ["entschuldige", "entschuldigen", "entschuldigt"], hinweis: "reflexivo: ich entschuldige mich", ue: "Me disculpo por el error." },
      { id: "bg1403", satz: "Ich ___ Ihnen sofort einen neuen Teller.", loesung: "bringe", tipps: ["bringe", "bringen", "gebracht"], hinweis: "ich + verbo en -e", ue: "Le traigo otro plato enseguida." },
      { id: "bg1404", satz: "___ dauert es heute etwas länger.", loesung: "Leider", tipps: ["Leider", "Leid", "Lieber"], hinweis: "adverbio en posición 1", ue: "Lamentablemente hoy tarda un poco más." },
      { id: "bg1405", satz: "Ich ___ das sofort mit der Küche.", loesung: "kläre", tipps: ["kläre", "klären", "geklärt"], hinweis: "klären = aclarar, resolver", ue: "Lo aclaro enseguida con la cocina." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 15, niveau: "B1", thema: "Cobrar y cerrar la mesa",
  vokabeln: [
    { id: "bv1501", de: "die Rechnung",    es: "la cuenta",              wortart: "sustantivo", beispiel: "Die Rechnung, bitte.", beispielUe: "La cuenta, por favor." },
    { id: "bv1502", de: "bezahlen",        es: "pagar",                  wortart: "verbo", beispiel: "Wir möchten bezahlen.", beispielUe: "Queremos pagar." },
    { id: "bv1503", de: "das Trinkgeld",   es: "la propina",             wortart: "sustantivo", beispiel: "Das Trinkgeld ist freiwillig.", beispielUe: "La propina es voluntaria." },
    { id: "bv1504", de: "die Kasse",       es: "la caja",                wortart: "sustantivo", beispiel: "Ich gehe zur Kasse.", beispielUe: "Voy a la caja." },
    { id: "bv1505", de: "die Kreditkarte", es: "la tarjeta de crédito",  wortart: "sustantivo", beispiel: "Wir nehmen Kreditkarten.", beispielUe: "Aceptamos tarjetas." },
    { id: "bv1506", de: "bar",             es: "en efectivo",            wortart: "adverbio", beispiel: "Zahlen Sie bar?", beispielUe: "¿Paga en efectivo?" },
    { id: "bv1507", de: "getrennt",        es: "por separado",           wortart: "adverbio", beispiel: "Wir zahlen getrennt.", beispielUe: "Pagamos por separado." },
    { id: "bv1508", de: "zusammen",        es: "juntos",                 wortart: "adverbio", beispiel: "Zahlen Sie zusammen?", beispielUe: "¿Pagan juntos?" },
    { id: "bv1509", de: "der Beleg",       es: "el comprobante",         wortart: "sustantivo", beispiel: "Möchten Sie einen Beleg?", beispielUe: "¿Desea el comprobante?" },
    { id: "bv1510", de: "das Wechselgeld", es: "el cambio",              wortart: "sustantivo", beispiel: "Hier ist Ihr Wechselgeld.", beispielUe: "Aquí tiene su cambio." }
  ],
  saetze: [
    { id: "bs1501", de: "Zahlen Sie zusammen oder getrennt?", es: "¿Pagan juntos o por separado?" },
    { id: "bs1502", de: "Das macht zusammen achtundvierzig Euro fünfzig.", es: "Son cuarenta y ocho euros con cincuenta en total." },
    { id: "bs1503", de: "Möchten Sie bar oder mit Karte zahlen?", es: "¿Desean pagar en efectivo o con tarjeta?" },
    { id: "bs1504", de: "Stimmt so, vielen Dank.", es: "Está bien así, muchas gracias." },
    { id: "bs1505", de: "Brauchen Sie einen Beleg?", es: "¿Necesitan el comprobante?" }
  ],
  grammatik: {
    id: "bg15", titel: "Recursos: la cuenta y la propina",
    erklaerung: `
      <p>Pagar en Alemania funciona distinto que en muchos países hispanohablantes, y el
      malentendido más caro para un camarero nuevo está en la propina.</p>
      <table>
        <tr><th>Pregunta</th><th>Cuándo</th></tr>
        <tr><td><strong>Zahlen Sie zusammen oder getrennt?</strong></td><td>siempre primero</td></tr>
        <tr><td><strong>Bar oder mit Karte?</strong></td><td>después del importe</td></tr>
        <tr><td><strong>Das macht ... Euro.</strong></td><td>al decir el total</td></tr>
        <tr><td><strong>Brauchen Sie einen Beleg?</strong></td><td>al final</td></tr>
      </table>
      <div class="merke">La propina no se deja en la mesa: se dice en voz alta al pagar.
      Si la cuenta es 46 € y el cliente da 50 € diciendo <strong>Stimmt so</strong>, la
      propina son 4 €. Si dice <strong>Machen Sie fünfzig</strong>, quiere pagar 50 en
      total. Repite siempre la cifra en voz alta antes de cobrar.</div>
      <p>Cómo se dicen los importes:</p>
      <ul>
        <li>48,50 € → <strong>achtundvierzig Euro fünfzig</strong></li>
        <li>Los números van al revés que en español: <em>achtundvierzig</em> = ocho-y-cuarenta.</li>
        <li>Entregar el cambio: <strong>Und zwei Euro zurück.</strong></li>
      </ul>
      <p>Si algo no cuadra: <em>Entschuldigung, ich prüfe die Rechnung noch einmal.</em>
      Nunca discutas un importe con el cliente delante de la mesa.</p>`,
    uebungen: [
      { id: "bg1501", satz: "Zahlen Sie ___ oder getrennt?", loesung: "zusammen", tipps: ["zusammen", "bar", "zurück"], hinweis: "lo contrario de getrennt", ue: "¿Pagan juntos o por separado?" },
      { id: "bg1502", satz: "Möchten Sie ___ oder mit Karte zahlen?", loesung: "bar", tipps: ["bar", "getrennt", "zusammen"], hinweis: "en efectivo", ue: "¿Desea pagar en efectivo o con tarjeta?" },
      { id: "bg1503", satz: "Die ___ macht achtundvierzig Euro.", loesung: "Rechnung", tipps: ["Rechnung", "Kasse", "Beleg"], hinweis: "femenino: die", ue: "La cuenta son cuarenta y ocho euros." },
      { id: "bg1504", satz: "___ so, danke.", loesung: "Stimmt", tipps: ["Stimmt", "Stimmen", "Gestimmt"], hinweis: "fórmula fija para dejar propina", ue: "Está bien así, gracias." },
      { id: "bg1505", satz: "Hier ist Ihr ___.", loesung: "Wechselgeld", tipps: ["Wechselgeld", "Trinkgeld", "Beleg"], hinweis: "el cambio que se devuelve", ue: "Aquí tiene su cambio." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 16, niveau: "B1", thema: "Reservas por teléfono",
  vokabeln: [
    { id: "bv1601", de: "die Reservierung",   es: "la reserva",          wortart: "sustantivo", beispiel: "Ihre Reservierung ist notiert.", beispielUe: "Su reserva está anotada." },
    { id: "bv1602", de: "der Anruf",          es: "la llamada",          wortart: "sustantivo", beispiel: "Es war ein Anruf für Sie.", beispielUe: "Hubo una llamada para usted." },
    { id: "bv1603", de: "buchstabieren",      es: "deletrear",           wortart: "verbo", beispiel: "Buchstabieren Sie bitte.", beispielUe: "Deletree, por favor." },
    { id: "bv1604", de: "die Uhrzeit",        es: "la hora",             wortart: "sustantivo", beispiel: "Welche Uhrzeit passt Ihnen?", beispielUe: "¿Qué hora les viene bien?" },
    { id: "bv1605", de: "das Datum",          es: "la fecha",            wortart: "sustantivo", beispiel: "Welches Datum war das?", beispielUe: "¿Qué fecha era?" },
    { id: "bv1606", de: "verbinden",          es: "pasar una llamada",   wortart: "verbo", beispiel: "Ich verbinde Sie mit der Rezeption.", beispielUe: "Le paso con recepción." },
    { id: "bv1607", de: "ausgebucht",         es: "completo, sin plazas", wortart: "adjetivo", beispiel: "Wir sind heute ausgebucht.", beispielUe: "Hoy estamos completos." },
    { id: "bv1608", de: "bestätigen",         es: "confirmar",           wortart: "verbo", beispiel: "Ich bestätige den Termin.", beispielUe: "Confirmo la cita." },
    { id: "bv1609", de: "die Telefonnummer",  es: "el número de teléfono", wortart: "sustantivo", beispiel: "Ihre Telefonnummer, bitte.", beispielUe: "Su número de teléfono, por favor." },
    { id: "bv1610", de: "absagen",            es: "cancelar",            wortart: "verbo separable", beispiel: "Der Gast hat abgesagt.", beispielUe: "El cliente canceló." }
  ],
  saetze: [
    { id: "bs1601", de: "Restaurant Adler, guten Tag, was kann ich für Sie tun?", es: "Restaurante Adler, buenos días, ¿en qué puedo ayudarle?" },
    { id: "bs1602", de: "Für wann möchten Sie reservieren?", es: "¿Para cuándo desea reservar?" },
    { id: "bs1603", de: "Könnten Sie Ihren Namen bitte buchstabieren?", es: "¿Podría deletrear su nombre?" },
    { id: "bs1604", de: "Am Samstag um acht sind wir leider ausgebucht.", es: "El sábado a las ocho lamentablemente estamos completos." },
    { id: "bs1605", de: "Ich bestätige Ihnen die Reservierung per E-Mail.", es: "Le confirmo la reserva por correo electrónico." }
  ],
  grammatik: {
    id: "bg16", titel: "Recursos: hablar por teléfono y deletrear",
    erklaerung: `
      <p>El teléfono es lo más difícil en una lengua extranjera: no ves la cara, no ves los
      labios. Por eso el alemán profesional usa fórmulas muy fijas — apréndelas enteras y el
      miedo desaparece.</p>
      <table>
        <tr><th>Momento</th><th>Frase</th></tr>
        <tr><td>contestar</td><td>Restaurant Adler, <strong>guten Tag</strong>, mein Name ist ...</td></tr>
        <tr><td>no entendiste</td><td><strong>Entschuldigung, könnten Sie das bitte wiederholen?</strong></td></tr>
        <tr><td>pedir despacio</td><td><strong>Könnten Sie bitte etwas langsamer sprechen?</strong></td></tr>
        <tr><td>pasar la llamada</td><td><strong>Einen Moment bitte, ich verbinde Sie.</strong></td></tr>
        <tr><td>despedirse</td><td><strong>Vielen Dank für Ihren Anruf. Auf Wiederhören!</strong></td></tr>
      </table>
      <div class="merke">Por teléfono no se dice <em>Auf Wiedersehen</em> sino
      <strong>Auf Wiederhören</strong> — «hasta volver a oírnos». Es un detalle que suena
      inmediatamente profesional.</div>
      <p><strong>Deletrear</strong> es obligatorio con cada nombre. El alfabeto telefónico
      alemán usa nombres propios:</p>
      <table>
        <tr><td>A — Anton</td><td>B — Berta</td><td>C — Cäsar</td><td>D — Dora</td></tr>
        <tr><td>E — Emil</td><td>F — Friedrich</td><td>G — Gustav</td><td>H — Heinrich</td></tr>
        <tr><td>K — Kaufmann</td><td>M — Martha</td><td>P — Paula</td><td>R — Richard</td></tr>
        <tr><td>S — Samuel</td><td>T — Theodor</td><td>Z — Zeppelin</td><td>ß — Eszett</td></tr>
      </table>
      <p>Y confirma siempre repitiendo los datos: <em>Also: Herr Meier, Samstag, zwanzig
      Uhr, vier Personen. Ist das korrekt?</em></p>`,
    uebungen: [
      { id: "bg1601", satz: "___ Sie bitte Ihren Namen. (buchstabieren)", loesung: "Buchstabieren", tipps: ["Buchstabieren", "Buchstabiert", "Buchstabiere"], hinweis: "cortesía con Sie", ue: "Deletree su nombre, por favor." },
      { id: "bg1602", satz: "Für wann ___ Sie reservieren?", loesung: "möchten", tipps: ["möchten", "möchte", "mögen"], hinweis: "Sie + verbo en -en", ue: "¿Para cuándo desea reservar?" },
      { id: "bg1603", satz: "Am Samstag sind wir leider ___.", loesung: "ausgebucht", tipps: ["ausgebucht", "ausbuchen", "gebucht"], hinweis: "completo, sin mesas libres", ue: "El sábado lamentablemente estamos completos." },
      { id: "bg1604", satz: "Ich ___ Ihnen die Reservierung per Mail.", loesung: "bestätige", tipps: ["bestätige", "bestätigen", "bestätigt"], hinweis: "ich + verbo en -e", ue: "Le confirmo la reserva por correo." },
      { id: "bg1605", satz: "Einen Moment bitte, ich ___ Sie.", loesung: "verbinde", tipps: ["verbinde", "verbinden", "verbunden"], hinweis: "pasar la llamada", ue: "Un momento por favor, le paso." }
    ]
  }
});
