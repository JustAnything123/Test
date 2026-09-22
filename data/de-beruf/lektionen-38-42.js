/* Ruta temática «Alemán en el trabajo» · Día 38–42 · Vocabulario técnico de servicio
   El material del comedor con su nombre exacto: qué plato, qué cubierto, qué copa —
   y la secuencia completa de un menú. Es lo que distingue a un profesional de alguien
   que solo sabe decir «Teller» y «Glas». */

LEKTION('de-beruf', {
  tag: 38, niveau: "B1", thema: "Los platos y las fuentes",
  vokabeln: [
    { id: "bv3801", de: "der Platzteller",       es: "el plato de presentación", wortart: "sustantivo", beispiel: "Der Platzteller bleibt bis zur Vorspeise stehen.", beispielUe: "El plato de presentación se queda hasta la entrada." },
    { id: "bv3802", de: "der Speiseteller",      es: "el plato llano",           wortart: "sustantivo", beispiel: "Der Speiseteller ist für den Hauptgang.", beispielUe: "El plato llano es para el principal." },
    { id: "bv3803", de: "der Suppenteller",      es: "el plato hondo",           wortart: "sustantivo", beispiel: "Die Suppenteller sind vorgewärmt.", beispielUe: "Los platos hondos están precalentados." },
    { id: "bv3804", de: "der Vorspeisenteller",  es: "el plato de entrada",      wortart: "sustantivo", beispiel: "Der Vorspeisenteller ist kleiner.", beispielUe: "El plato de entrada es más pequeño." },
    { id: "bv3805", de: "der Dessertteller",     es: "el plato de postre",       wortart: "sustantivo", beispiel: "Bring bitte fünf Dessertteller.", beispielUe: "Trae cinco platos de postre." },
    { id: "bv3806", de: "der Brotteller",        es: "el plato de pan",          wortart: "sustantivo", beispiel: "Der Brotteller steht links oben.", beispielUe: "El plato de pan va arriba a la izquierda." },
    { id: "bv3807", de: "der Pastateller",       es: "el plato de pasta",        wortart: "sustantivo", beispiel: "Der Pastateller hat einen breiten Rand.", beispielUe: "El plato de pasta tiene el borde ancho." },
    { id: "bv3808", de: "die Servierplatte",     es: "la fuente",                wortart: "sustantivo", beispiel: "Das Fleisch kommt auf eine Servierplatte.", beispielUe: "La carne va en una fuente." },
    { id: "bv3809", de: "das Schälchen",         es: "el cuenco pequeño",        wortart: "sustantivo", beispiel: "Die Soße servieren wir im Schälchen.", beispielUe: "La salsa la servimos en un cuenco." },
    { id: "bv3810", de: "vorwärmen",             es: "precalentar",              wortart: "verbo", beispiel: "Wärm die Teller bitte vor.", beispielUe: "Precalienta los platos, por favor." }
  ],
  saetze: [
    { id: "bs3801", de: "Welchen Teller nehme ich für die Suppe?", es: "¿Qué plato tomo para la sopa?" },
    { id: "bs3802", de: "Die Teller für den Hauptgang müssen warm sein.", es: "Los platos del principal tienen que estar calientes." },
    { id: "bs3803", de: "Der Brotteller steht links oben neben der Gabel.", es: "El plato de pan va arriba a la izquierda, junto al tenedor." },
    { id: "bs3804", de: "Bring bitte noch zwei Dessertteller.", es: "Trae dos platos de postre más, por favor." },
    { id: "bs3805", de: "Der Platzteller wird vor der Vorspeise abgeräumt.", es: "El plato de presentación se retira antes de la entrada." }
  ],
  grammatik: {
    id: "bg38", titel: "Recursos: explicar el estándar de la casa",
    erklaerung: `
      <p>Un estándar de mise en place no se explica con «yo hago» ni con «tú haces»: se
      explica con la <strong>voz pasiva</strong>, porque lo importante no es quién lo hace,
      sino qué se hace. Es la forma que leerás en cualquier manual de servicio alemán.</p>
      <table>
        <tr><th>Activo</th><th>Pasivo</th></tr>
        <tr><td>Ich wärme die Teller vor.</td><td>Die Teller <strong>werden</strong> vorgewärm<strong>t</strong>.</td></tr>
        <tr><td>Wir decken den Tisch.</td><td>Der Tisch <strong>wird</strong> gedeck<strong>t</strong>.</td></tr>
        <tr><td>Man räumt den Platzteller ab.</td><td>Der Platzteller <strong>wird</strong> abgeräum<strong>t</strong>.</td></tr>
      </table>
      <div class="merke">La receta es siempre la misma: <strong>werden</strong> (conjugado)
      + <strong>participio</strong> al final de la frase. Un objeto → <em>wird</em>,
      varios → <em>werden</em>.</div>
      <p>Si quieres decir además con qué o dónde, se mete en el medio, y el participio
      sigue yendo al final — esa es la posición fija:</p>
      <ul>
        <li>Die Suppenteller <strong>werden</strong> vor dem Service <strong>vorgewärmt</strong>.</li>
        <li>Der Brotteller <strong>wird</strong> links oben <strong>hingestellt</strong>.</li>
        <li>Das Besteck <strong>wird</strong> mit einem Tuch <strong>poliert</strong>.</li>
      </ul>`,
    uebungen: [
      { id: "bg3801", satz: "Die Teller ___ vorgewärmt. (werden)", loesung: "werden", tipps: ["werden", "wird", "sind"], hinweis: "plural → werden", ue: "Los platos se precalientan." },
      { id: "bg3802", satz: "Der Tisch ___ um sechs Uhr gedeckt. (werden)", loesung: "wird", tipps: ["wird", "werden", "ist"], hinweis: "singular → wird", ue: "La mesa se pone a las seis." },
      { id: "bg3803", satz: "Das Besteck wird mit einem Tuch ___. (polieren)", loesung: "poliert", tipps: ["poliert", "polieren", "gepoliert"], hinweis: "verbo en -ieren: participio sin ge-", ue: "Los cubiertos se abrillantan con un paño." },
      { id: "bg3804", satz: "Der Platzteller wird vor der Vorspeise ___. (abräumen)", loesung: "abgeräumt", tipps: ["abgeräumt", "abräumt", "geabräumt"], hinweis: "verbo separable: ge- va en medio", ue: "El plato de presentación se retira antes de la entrada." },
      { id: "bg3805", satz: "Beim Passiv steht das Partizip ___.", loesung: "am Ende", tipps: ["am Ende", "am Anfang", "nach werden"], hinweis: "posición fija al final", ue: "En la pasiva, el participio va al final." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 39, niveau: "B1", thema: "Los cubiertos en detalle",
  vokabeln: [
    { id: "bv3901", de: "das Fleischmesser",    es: "el cuchillo de carne",    wortart: "sustantivo", beispiel: "Das Fleischmesser liegt rechts.", beispielUe: "El cuchillo de carne va a la derecha." },
    { id: "bv3902", de: "das Steakmesser",      es: "el cuchillo de bife",     wortart: "sustantivo", beispiel: "Zum Steak legen wir ein Steakmesser.", beispielUe: "Para el bife ponemos un cuchillo de bife." },
    { id: "bv3903", de: "das Fischmesser",      es: "la pala de pescado",      wortart: "sustantivo", beispiel: "Das Fischmesser hat keine Schneide.", beispielUe: "La pala de pescado no tiene filo." },
    { id: "bv3904", de: "das Buttermesser",     es: "el cuchillo de mantequilla", wortart: "sustantivo", beispiel: "Das Buttermesser liegt auf dem Brotteller.", beispielUe: "El cuchillo de mantequilla va en el plato de pan." },
    { id: "bv3905", de: "die Vorspeisengabel",  es: "el tenedor de entrada",   wortart: "sustantivo", beispiel: "Die Vorspeisengabel liegt ganz außen.", beispielUe: "El tenedor de entrada va en el extremo." },
    { id: "bv3906", de: "die Fischgabel",       es: "el tenedor de pescado",   wortart: "sustantivo", beispiel: "Die Fischgabel ist breiter.", beispielUe: "El tenedor de pescado es más ancho." },
    { id: "bv3907", de: "der Suppenlöffel",     es: "la cuchara sopera",       wortart: "sustantivo", beispiel: "Der Suppenlöffel liegt rechts außen.", beispielUe: "La cuchara sopera va a la derecha, fuera." },
    { id: "bv3908", de: "der Dessertlöffel",    es: "la cuchara de postre",    wortart: "sustantivo", beispiel: "Der Dessertlöffel liegt über dem Teller.", beispielUe: "La cuchara de postre va sobre el plato." },
    { id: "bv3909", de: "die Kuchengabel",      es: "el tenedor de pastel",    wortart: "sustantivo", beispiel: "Zum Kuchen gehört eine Kuchengabel.", beispielUe: "Para el pastel va un tenedor de pastel." },
    { id: "bv3910", de: "das Vorlegebesteck",   es: "los cubiertos de servir", wortart: "sustantivo", beispiel: "Das Vorlegebesteck liegt auf der Platte.", beispielUe: "Los cubiertos de servir van en la fuente." }
  ],
  saetze: [
    { id: "bs3901", de: "Das Besteck wird von außen nach innen benutzt.", es: "Los cubiertos se usan de fuera hacia dentro." },
    { id: "bs3902", de: "Das Messer liegt rechts, die Gabel links.", es: "El cuchillo va a la derecha, el tenedor a la izquierda." },
    { id: "bs3903", de: "Für den Fisch brauchen wir Fischbesteck.", es: "Para el pescado necesitamos cubiertos de pescado." },
    { id: "bs3904", de: "Der Dessertlöffel liegt quer über dem Teller.", es: "La cuchara de postre va cruzada sobre el plato." },
    { id: "bs3905", de: "Hier fehlt noch ein Steakmesser.", es: "Aquí falta todavía un cuchillo de bife." }
  ],
  grammatik: {
    id: "bg39", titel: "Recursos: el orden del cubierto",
    erklaerung: `
      <p>Para explicar un cubierto necesitas números ordinales: <em>el primer tenedor,
      el segundo cuchillo</em>. En alemán son muy regulares.</p>
      <table>
        <tr><th>Número</th><th>Ordinal</th><th>Regla</th></tr>
        <tr><td>1</td><td>der <strong>erste</strong></td><td>irregular</td></tr>
        <tr><td>2</td><td>der <strong>zweite</strong></td><td>+ -te</td></tr>
        <tr><td>3</td><td>der <strong>dritte</strong></td><td>irregular</td></tr>
        <tr><td>4–19</td><td>der <strong>vierte</strong>, der <strong>fünfte</strong></td><td>+ -te</td></tr>
        <tr><td>20+</td><td>der <strong>zwanzigste</strong></td><td>+ -ste</td></tr>
      </table>
      <div class="merke">Solo hay tres irregulares que de verdad usarás:
      <strong>erste</strong> (1), <strong>dritte</strong> (3) y <strong>siebte</strong> (7,
      sin la -en de sieben).</div>
      <p>Para la secuencia del servicio bastan cuatro palabras, siempre en este orden:</p>
      <ul>
        <li><strong>zuerst</strong> (primero) — Zuerst kommt die Vorspeisengabel.</li>
        <li><strong>dann</strong> (luego) — Dann die Fischgabel.</li>
        <li><strong>danach</strong> (después) — Danach die Fleischgabel.</li>
        <li><strong>zum Schluss</strong> (al final) — Zum Schluss der Dessertlöffel.</li>
      </ul>
      <p>Y la regla de oro del comedor, que también es una frase útil de memorizar entera:
      <em>Das Besteck wird <strong>von außen nach innen</strong> benutzt.</em></p>`,
    uebungen: [
      { id: "bg3901", satz: "Das Besteck wird von außen nach ___ benutzt.", loesung: "innen", tipps: ["innen", "außen", "oben"], hinweis: "de fuera hacia dentro", ue: "Los cubiertos se usan de fuera hacia dentro." },
      { id: "bg3902", satz: "Der ___ Gang ist die Vorspeise. (1.)", loesung: "erste", tipps: ["erste", "einte", "eine"], hinweis: "ordinal irregular", ue: "El primer plato es la entrada." },
      { id: "bg3903", satz: "Der ___ Gang ist das Dessert. (3.)", loesung: "dritte", tipps: ["dritte", "dreite", "drite"], hinweis: "ordinal irregular", ue: "El tercer plato es el postre." },
      { id: "bg3904", satz: "___ kommt die Suppe, dann der Hauptgang.", loesung: "Zuerst", tipps: ["Zuerst", "Zuletzt", "Danach"], hinweis: "primero de todo", ue: "Primero viene la sopa, luego el principal." },
      { id: "bg3905", satz: "Das Messer liegt ___, die Gabel links.", loesung: "rechts", tipps: ["rechts", "links", "oben"], hinweis: "el cuchillo, a la derecha", ue: "El cuchillo va a la derecha, el tenedor a la izquierda." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 40, niveau: "B1", thema: "Las copas y los vasos",
  vokabeln: [
    { id: "bv4001", de: "das Wasserglas",      es: "el vaso de agua",         wortart: "sustantivo", beispiel: "Das Wasserglas steht rechts oben.", beispielUe: "El vaso de agua va arriba a la derecha." },
    { id: "bv4002", de: "das Weißweinglas",    es: "la copa de vino blanco",  wortart: "sustantivo", beispiel: "Das Weißweinglas ist kleiner.", beispielUe: "La copa de vino blanco es más pequeña." },
    { id: "bv4003", de: "das Rotweinglas",     es: "la copa de vino tinto",   wortart: "sustantivo", beispiel: "Das Rotweinglas hat einen großen Kelch.", beispielUe: "La copa de tinto tiene el cáliz grande." },
    { id: "bv4004", de: "die Sektflöte",       es: "la copa de cava",         wortart: "sustantivo", beispiel: "Die Sektflöte ist hoch und schmal.", beispielUe: "La copa de cava es alta y estrecha." },
    { id: "bv4005", de: "die Biertulpe",       es: "la copa de cerveza",      wortart: "sustantivo", beispiel: "Das Pils kommt in die Biertulpe.", beispielUe: "La pils va en copa de cerveza." },
    { id: "bv4006", de: "das Longdrinkglas",   es: "el vaso largo",           wortart: "sustantivo", beispiel: "Der Gin Tonic kommt ins Longdrinkglas.", beispielUe: "El gin tonic va en vaso largo." },
    { id: "bv4007", de: "der Cognacschwenker", es: "la copa de coñac",        wortart: "sustantivo", beispiel: "Der Cognacschwenker wird angewärmt.", beispielUe: "La copa de coñac se atempera." },
    { id: "bv4008", de: "der Stiel",           es: "el tallo de la copa",     wortart: "sustantivo", beispiel: "Fass das Glas immer am Stiel an.", beispielUe: "Toma la copa siempre por el tallo." },
    { id: "bv4009", de: "die Karaffe",         es: "la jarra",                wortart: "sustantivo", beispiel: "Das Leitungswasser kommt in die Karaffe.", beispielUe: "El agua del grifo va en la jarra." },
    { id: "bv4010", de: "polieren",            es: "abrillantar",             wortart: "verbo", beispiel: "Die Gläser müssen poliert werden.", beispielUe: "Las copas hay que abrillantarlas." }
  ],
  saetze: [
    { id: "bs4001", de: "Welches Glas nehmen wir für den Weißwein?", es: "¿Qué copa tomamos para el vino blanco?" },
    { id: "bs4002", de: "Fass das Glas bitte immer am Stiel an.", es: "Toma la copa siempre por el tallo, por favor." },
    { id: "bs4003", de: "Die Gläser haben Wasserflecken, bitte polieren.", es: "Las copas tienen manchas de agua, abrillántalas." },
    { id: "bs4004", de: "Das Wasserglas steht rechts über dem Messer.", es: "El vaso de agua va a la derecha, sobre el cuchillo." },
    { id: "bs4005", de: "Für den Sekt brauchen wir sechs Sektflöten.", es: "Para el cava necesitamos seis copas." }
  ],
  grammatik: {
    id: "bg40", titel: "Recursos: preguntar por el objeto correcto",
    erklaerung: `
      <p>«¿Cuál?» en alemán no es una sola palabra: cambia según el género de la cosa por
      la que preguntas. Es <strong>welch-</strong> más la misma terminación que llevaría
      el artículo.</p>
      <table>
        <tr><th>Cosa</th><th>Nominativ (¿cuál es?)</th><th>Akkusativ (¿cuál tomo?)</th></tr>
        <tr><td>der Teller</td><td><strong>welcher</strong> Teller</td><td><strong>welchen</strong> Teller</td></tr>
        <tr><td>das Glas</td><td><strong>welches</strong> Glas</td><td><strong>welches</strong> Glas</td></tr>
        <tr><td>die Gabel</td><td><strong>welche</strong> Gabel</td><td><strong>welche</strong> Gabel</td></tr>
        <tr><td>die Gläser (pl)</td><td><strong>welche</strong> Gläser</td><td><strong>welche</strong> Gläser</td></tr>
      </table>
      <div class="merke">Atajo fiable: la terminación de <em>welch-</em> es la misma que la
      última letra del artículo. <em>d<strong>er</strong> Teller → welch<strong>er</strong>
      Teller</em>, <em>da<strong>s</strong> Glas → welche<strong>s</strong> Glas</em>.</div>
      <p>Con esto tienes las dos preguntas que más usarás en el office antes del servicio:</p>
      <ul>
        <li><strong>Welches</strong> Glas nehme ich für den Weißwein?</li>
        <li><strong>Welchen</strong> Teller brauche ich für die Suppe?</li>
      </ul>
      <p>Y para contestar, basta con <strong>für</strong> + Akkusativ:
      <em>Für den Weißwein nimmst du das kleinere Glas.</em></p>`,
    uebungen: [
      { id: "bg4001", satz: "___ Glas nehme ich für den Wein? (das Glas)", loesung: "Welches", tipps: ["Welches", "Welcher", "Welche"], hinweis: "das → welches", ue: "¿Qué copa tomo para el vino?" },
      { id: "bg4002", satz: "___ Teller brauche ich für die Suppe? (den Teller)", loesung: "Welchen", tipps: ["Welchen", "Welches", "Welcher"], hinweis: "Akkusativ masculino → welchen", ue: "¿Qué plato necesito para la sopa?" },
      { id: "bg4003", satz: "___ Gabel liegt außen? (die Gabel)", loesung: "Welche", tipps: ["Welche", "Welcher", "Welches"], hinweis: "die → welche", ue: "¿Qué tenedor va fuera?" },
      { id: "bg4004", satz: "___ den Weißwein nimmst du das kleine Glas.", loesung: "Für", tipps: ["Für", "Mit", "Zu"], hinweis: "für + Akkusativ", ue: "Para el vino blanco tomas la copa pequeña." },
      { id: "bg4005", satz: "Fass das Glas immer ___ Stiel an. (an dem)", loesung: "am", tipps: ["am", "ans", "an den"], hinweis: "an + dem = am", ue: "Toma la copa siempre por el tallo." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 41, niveau: "B2", thema: "Vino, cerveza y café en detalle",
  vokabeln: [
    { id: "bv4101", de: "der Rotwein",       es: "el vino tinto",         wortart: "sustantivo", beispiel: "Der Rotwein wird nicht gekühlt.", beispielUe: "El tinto no se enfría." },
    { id: "bv4102", de: "der Weißwein",      es: "el vino blanco",        wortart: "sustantivo", beispiel: "Der Weißwein steht im Kühlschrank.", beispielUe: "El blanco está en el refrigerador." },
    { id: "bv4103", de: "der Roséwein",      es: "el vino rosado",        wortart: "sustantivo", beispiel: "Roséwein ist im Sommer beliebt.", beispielUe: "El rosado gusta en verano." },
    { id: "bv4104", de: "halbtrocken",       es: "semiseco",              wortart: "adjetivo", beispiel: "Dieser Wein ist halbtrocken.", beispielUe: "Este vino es semiseco." },
    { id: "bv4105", de: "der offene Wein",   es: "el vino por copas",     wortart: "sustantivo", beispiel: "Wir haben drei offene Weine.", beispielUe: "Tenemos tres vinos por copas." },
    { id: "bv4106", de: "das Pils",          es: "la cerveza pils",       wortart: "sustantivo", beispiel: "Ein Pils, bitte.", beispielUe: "Una pils, por favor." },
    { id: "bv4107", de: "das Weizenbier",    es: "la cerveza de trigo",   wortart: "sustantivo", beispiel: "Weizenbier kommt ins hohe Glas.", beispielUe: "La cerveza de trigo va en vaso alto." },
    { id: "bv4108", de: "vom Fass",          es: "de barril",             wortart: "expresión", beispiel: "Haben Sie Bier vom Fass?", beispielUe: "¿Tienen cerveza de barril?" },
    { id: "bv4109", de: "der Latte macchiato", es: "el latte macchiato",  wortart: "sustantivo", beispiel: "Der Latte macchiato hat drei Schichten.", beispielUe: "El latte macchiato tiene tres capas." },
    { id: "bv4110", de: "entkoffeiniert",    es: "descafeinado",          wortart: "adjetivo", beispiel: "Einen entkoffeinierten Kaffee, bitte.", beispielUe: "Un café descafeinado, por favor." }
  ],
  saetze: [
    { id: "bs4101", de: "Möchten Sie den Wein trocken oder halbtrocken?", es: "¿Desea el vino seco o semiseco?" },
    { id: "bs4102", de: "Wir haben heute drei Weine offen.", es: "Hoy tenemos tres vinos por copas." },
    { id: "bs4103", de: "Der Rotwein wird bei Zimmertemperatur serviert.", es: "El tinto se sirve a temperatura ambiente." },
    { id: "bs4104", de: "Haben Sie das Bier auch vom Fass?", es: "¿Tienen la cerveza también de barril?" },
    { id: "bs4105", de: "Einen Cappuccino und einen Espresso, bitte.", es: "Un capuchino y un espresso, por favor." }
  ],
  grammatik: {
    id: "bg41", titel: "Recursos: comparar y recomendar bebidas",
    erklaerung: `
      <p>Recomendar es comparar: este vino es <em>más seco</em>, aquel <em>más suave</em>.
      El comparativo alemán es corto y siempre igual: adjetivo + <strong>-er</strong>,
      y la palabra para «que» es <strong>als</strong>.</p>
      <table>
        <tr><th>Adjetivo</th><th>Comparativo</th><th>Superlativo</th></tr>
        <tr><td>trocken</td><td>trocken<strong>er</strong></td><td>am trocken<strong>sten</strong></td></tr>
        <tr><td>leicht</td><td>leicht<strong>er</strong></td><td>am leicht<strong>esten</strong></td></tr>
        <tr><td>stark</td><td>st<strong>ä</strong>rk<strong>er</strong></td><td>am st<strong>ä</strong>rk<strong>sten</strong></td></tr>
        <tr><td>gut</td><td><strong>besser</strong></td><td>am <strong>besten</strong></td></tr>
      </table>
      <div class="merke">Los adjetivos cortos de una sílaba con a, o, u suelen coger
      Umlaut: <em>stark → stärker</em>, <em>jung → jünger</em>, <em>warm → wärmer</em>.
      Solo <strong>gut → besser</strong> y <strong>viel → mehr</strong> son de verdad
      irregulares.</div>
      <p>Las tres fórmulas de recomendación que suenan profesionales:</p>
      <ul>
        <li><strong>Ich würde Ihnen … empfehlen.</strong> — Le recomendaría …</li>
        <li><strong>Dazu passt am besten …</strong> — Con eso pega mejor …</li>
        <li><strong>Der ist etwas leichter als der andere.</strong> — Ese es algo más ligero que el otro.</li>
      </ul>`,
    uebungen: [
      { id: "bg4101", satz: "Dieser Wein ist ___ als der andere. (trocken)", loesung: "trockener", tipps: ["trockener", "trockner", "trockenere"], hinweis: "comparativo: + er", ue: "Este vino es más seco que el otro." },
      { id: "bg4102", satz: "Der Rotwein ist stärker ___ der Weißwein.", loesung: "als", tipps: ["als", "wie", "wenn"], hinweis: "«que» en comparación = als", ue: "El tinto es más fuerte que el blanco." },
      { id: "bg4103", satz: "Dazu passt am ___ ein leichter Weißwein. (gut)", loesung: "besten", tipps: ["besten", "guten", "gutsten"], hinweis: "gut → besser → am besten", ue: "Con eso pega mejor un blanco ligero." },
      { id: "bg4104", satz: "Ich ___ Ihnen den Riesling empfehlen. (würde)", loesung: "würde", tipps: ["würde", "werde", "wurde"], hinweis: "Konjunktiv II de cortesía", ue: "Le recomendaría el riesling." },
      { id: "bg4105", satz: "Das Weizenbier ist ___ als das Pils. (mild)", loesung: "milder", tipps: ["milder", "mildere", "mildesten"], hinweis: "comparativo: + er", ue: "La cerveza de trigo es más suave que la pils." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 42, niveau: "B2", thema: "La secuencia completa de un menú",
  vokabeln: [
    { id: "bv4201", de: "der Aperitif",           es: "el aperitivo",           wortart: "sustantivo", beispiel: "Darf ich Ihnen einen Aperitif bringen?", beispielUe: "¿Le traigo un aperitivo?" },
    { id: "bv4202", de: "der Gruß aus der Küche", es: "el saludo de la cocina", wortart: "expresión", beispiel: "Das ist ein Gruß aus der Küche.", beispielUe: "Esto es un saludo de la cocina." },
    { id: "bv4203", de: "der Suppengang",         es: "el plato de sopa",       wortart: "sustantivo", beispiel: "Nach dem Suppengang kommt der Fisch.", beispielUe: "Tras la sopa viene el pescado." },
    { id: "bv4204", de: "der Zwischengang",       es: "el plato intermedio",    wortart: "sustantivo", beispiel: "Als Zwischengang gibt es Sorbet.", beispielUe: "De plato intermedio hay sorbete." },
    { id: "bv4205", de: "der Käsegang",           es: "la tabla de quesos",     wortart: "sustantivo", beispiel: "Der Käsegang kommt vor dem Dessert.", beispielUe: "Los quesos van antes del postre." },
    { id: "bv4206", de: "der Digestif",           es: "el digestivo",           wortart: "sustantivo", beispiel: "Möchten Sie noch einen Digestif?", beispielUe: "¿Desea todavía un digestivo?" },
    { id: "bv4207", de: "das Menü",               es: "el menú cerrado",        wortart: "sustantivo", beispiel: "Wir haben ein Menü mit fünf Gängen.", beispielUe: "Tenemos un menú de cinco tiempos." },
    { id: "bv4208", de: "à la carte",             es: "a la carta",             wortart: "expresión", beispiel: "Essen Sie à la carte oder das Menü?", beispielUe: "¿Comen a la carta o el menú?" },
    { id: "bv4209", de: "das Amuse-Gueule",       es: "el amuse-bouche",        wortart: "sustantivo", beispiel: "Das Amuse-Gueule geht aufs Haus.", beispielUe: "El amuse-bouche invita la casa." },
    { id: "bv4210", de: "abschmecken",            es: "rectificar de sabor",    wortart: "verbo", beispiel: "Schmeck die Soße bitte noch ab.", beispielUe: "Rectifica la salsa, por favor." }
  ],
  saetze: [
    { id: "bs4201", de: "Möchten Sie vorab einen Aperitif?", es: "¿Desea un aperitivo antes?" },
    { id: "bs4202", de: "Das Menü hat fünf Gänge und dauert etwa zwei Stunden.", es: "El menú tiene cinco tiempos y dura unas dos horas." },
    { id: "bs4203", de: "Als Zwischengang servieren wir ein Sorbet.", es: "De plato intermedio servimos un sorbete." },
    { id: "bs4204", de: "Der Käsegang kommt vor dem Dessert.", es: "La tabla de quesos va antes del postre." },
    { id: "bs4205", de: "Darf ich Ihnen zum Abschluss einen Digestif anbieten?", es: "¿Le ofrezco un digestivo para terminar?" }
  ],
  grammatik: {
    id: "bg42", titel: "Recursos: explicar el orden de los platos",
    erklaerung: `
      <p>Explicar un menú de cinco tiempos es contar una secuencia. Con seis conectores
      temporales lo cuentas entero, y todos funcionan igual.</p>
      <table>
        <tr><th>Conector</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td><strong>zuerst</strong></td><td>primero</td><td>Zuerst gibt es ein Amuse-Gueule.</td></tr>
        <tr><td><strong>dann</strong></td><td>luego</td><td>Dann folgt die Vorspeise.</td></tr>
        <tr><td><strong>danach</strong></td><td>después</td><td>Danach kommt der Suppengang.</td></tr>
        <tr><td><strong>anschließend</strong></td><td>a continuación</td><td>Anschließend servieren wir den Fisch.</td></tr>
        <tr><td><strong>zum Schluss</strong></td><td>al final</td><td>Zum Schluss gibt es das Dessert.</td></tr>
      </table>
      <div class="merke"><strong>Cuidado, es el error más típico:</strong> si empiezas la
      frase con uno de estos conectores, el verbo tiene que ir en
      <strong>segunda posición</strong>, es decir justo detrás. <em>Danach
      <strong>kommt</strong> der Fisch</em> — no «Danach der Fisch kommt».</div>
      <p>Para decir qué va antes y qué va después de qué, dos preposiciones fijas, ambas
      con Dativ:</p>
      <ul>
        <li><strong>vor</strong> dem Dessert — antes del postre</li>
        <li><strong>nach</strong> dem Hauptgang — después del principal</li>
      </ul>`,
    uebungen: [
      { id: "bg4201", satz: "___ gibt es ein Amuse-Gueule.", loesung: "Zuerst", tipps: ["Zuerst", "Zuletzt", "Danach"], hinweis: "primero de todo", ue: "Primero hay un amuse-bouche." },
      { id: "bg4202", satz: "Danach ___ der Fisch. (kommen)", loesung: "kommt", tipps: ["kommt", "kommen", "gekommen"], hinweis: "el verbo va en posición 2", ue: "Después viene el pescado." },
      { id: "bg4203", satz: "Der Käsegang kommt ___ dem Dessert.", loesung: "vor", tipps: ["vor", "nach", "zu"], hinweis: "antes de = vor + Dativ", ue: "Los quesos van antes del postre." },
      { id: "bg4204", satz: "___ dem Hauptgang räumen wir ab.", loesung: "Nach", tipps: ["Nach", "Vor", "Zu"], hinweis: "después de = nach + Dativ", ue: "Después del principal retiramos." },
      { id: "bg4205", satz: "Zum ___ servieren wir das Dessert.", loesung: "Schluss", tipps: ["Schluss", "Anfang", "Ende"], hinweis: "zum Schluss = al final", ue: "Al final servimos el postre." }
    ]
  }
});
