/* Ruta temática «Alemán en el trabajo» · Día 9–15 · Primeros pasos (A1)
   Alimentos básicos, adjetivos y verbos del día a día, recibir clientes,
   precios y pedir ayuda. Desde octubre de 2026. */

LEKTION('de-beruf', {
  tag: 9, niveau: "A1", thema: "Alimentos básicos",
  vokabeln: [
    { id: "bev0901", de: "das Brot",    es: "el pan",           wortart: "sustantivo", beispiel: "Das Brot ist frisch.", beispielUe: "El pan está fresco." },
    { id: "bev0902", de: "die Butter",  es: "la mantequilla",   wortart: "sustantivo", beispiel: "Die Butter ist im Kühlschrank.", beispielUe: "La mantequilla está en el refrigerador." },
    { id: "bev0903", de: "der Käse",    es: "el queso",         wortart: "sustantivo", beispiel: "Der Käse kommt aus der Schweiz.", beispielUe: "El queso viene de Suiza." },
    { id: "bev0904", de: "die Milch",   es: "la leche",         wortart: "sustantivo", beispiel: "Wir haben keine Milch mehr.", beispielUe: "Ya no tenemos leche." },
    { id: "bev0905", de: "der Zucker",  es: "el azúcar",        wortart: "sustantivo", beispiel: "Möchten Sie Zucker zum Kaffee?", beispielUe: "¿Quiere azúcar con el café?" },
    { id: "bev0906", de: "das Salz",    es: "la sal",           wortart: "sustantivo", beispiel: "Die Suppe braucht mehr Salz.", beispielUe: "La sopa necesita más sal." },
    { id: "bev0907", de: "der Pfeffer", es: "la pimienta",      wortart: "sustantivo", beispiel: "Salz und Pfeffer stehen auf dem Tisch.", beispielUe: "La sal y la pimienta están en la mesa." },
    { id: "bev0908", de: "der Reis",    es: "el arroz",         wortart: "sustantivo", beispiel: "Der Reis ist in zwanzig Minuten fertig.", beispielUe: "El arroz está listo en veinte minutos." },
    { id: "bev0909", de: "die Nudeln",  es: "la pasta",         wortart: "sustantivo (plural)", beispiel: "Die Nudeln kochen schon.", beispielUe: "La pasta ya está hirviendo." },
    { id: "bev0910", de: "das Öl",      es: "el aceite",        wortart: "sustantivo", beispiel: "Das Öl ist sehr heiß.", beispielUe: "El aceite está muy caliente." }
  ],
  saetze: [
    { id: "bes0901", de: "Wir brauchen zehn Brote für heute.", es: "Necesitamos diez panes para hoy." },
    { id: "bes0902", de: "Ist noch Milch im Kühlschrank?", es: "¿Queda leche en el refrigerador?" },
    { id: "bes0903", de: "Bitte nicht so viel Salz!", es: "¡No tanta sal, por favor!" },
    { id: "bes0904", de: "Der Käse ist für die Pizza.", es: "El queso es para la pizza." },
    { id: "bes0905", de: "Wo ist das Öl?", es: "¿Dónde está el aceite?" }
  ],
  grammatik: {
    id: "beg09", titel: "Primeros pasos: el plural",
    erklaerung: `
      <p>El plural alemán no tiene una sola regla como la <em>-s</em> del español. Hay
      cinco modelos frecuentes, y lo mejor es aprender el plural junto con la palabra.</p>
      <table>
        <tr><th>Modelo</th><th>Singular</th><th>Plural</th></tr>
        <tr><td>-e</td><td>das Brot</td><td>die Brot<strong>e</strong></td></tr>
        <tr><td>-n / -en</td><td>die Tomate</td><td>die Tomate<strong>n</strong></td></tr>
        <tr><td>diéresis + -e</td><td>der Koch</td><td>die K<strong>ö</strong>ch<strong>e</strong></td></tr>
        <tr><td>-s (palabras extranjeras)</td><td>das Restaurant</td><td>die Restaurant<strong>s</strong></td></tr>
        <tr><td>sin cambio</td><td>der Kellner</td><td>die Kellner</td></tr>
      </table>
      <div class="merke">En plural el artículo es <strong>siempre die</strong>, sea la
      palabra masculina, femenina o neutra: <em>der Koch → die Köche, das Brot → die
      Brote</em>.</div>
      <p>Algunas palabras casi no se usan en plural: <em>die Milch, das Salz, der Reis,
      der Zucker</em>. Y <em>die Nudeln</em> casi siempre va en plural.</p>`,
    uebungen: [
      { id: "beg0901", satz: "ein Brot, zwei ___", loesung: "Brote", tipps: ["Brote", "Broten", "Brots"], hinweis: "modelo -e", ue: "un pan, dos panes" },
      { id: "beg0902", satz: "eine Tomate, drei ___", loesung: "Tomaten", tipps: ["Tomaten", "Tomates", "Tomate"], hinweis: "modelo -n", ue: "un tomate, tres tomates" },
      { id: "beg0903", satz: "ein Koch, zwei ___", loesung: "Köche", tipps: ["Köche", "Koche", "Kochs"], hinweis: "diéresis + -e", ue: "un cocinero, dos cocineros" },
      { id: "beg0904", satz: "ein Restaurant, viele ___", loesung: "Restaurants", tipps: ["Restaurants", "Restaurante", "Restauranten"], hinweis: "palabra extranjera: -s", ue: "un restaurante, muchos restaurantes" },
      { id: "beg0905", satz: "Im Plural ist der Artikel immer ___.", loesung: "die", tipps: ["die", "der", "das"], hinweis: "plural = die", ue: "En plural el artículo siempre es die." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 10, niveau: "A1", thema: "Frutas y verduras",
  vokabeln: [
    { id: "bev1001", de: "der Apfel",     es: "la manzana",            wortart: "sustantivo", beispiel: "Ein Apfel kostet fünfzig Cent.", beispielUe: "Una manzana cuesta cincuenta centavos." },
    { id: "bev1002", de: "die Banane",    es: "el plátano, la banana", wortart: "sustantivo", beispiel: "Die Bananen sind noch grün.", beispielUe: "Los plátanos todavía están verdes." },
    { id: "bev1003", de: "die Orange",    es: "la naranja",            wortart: "sustantivo", beispiel: "Wir pressen die Orangen frisch.", beispielUe: "Exprimimos las naranjas al momento." },
    { id: "bev1004", de: "die Erdbeere",  es: "la fresa",              wortart: "sustantivo", beispiel: "Die Erdbeeren sind für das Dessert.", beispielUe: "Las fresas son para el postre." },
    { id: "bev1005", de: "die Tomate",    es: "el tomate",             wortart: "sustantivo", beispiel: "Die Tomaten kommen aus Spanien.", beispielUe: "Los tomates vienen de España." },
    { id: "bev1006", de: "die Gurke",     es: "el pepino",             wortart: "sustantivo", beispiel: "Die Gurke kommt in den Salat.", beispielUe: "El pepino va en la ensalada." },
    { id: "bev1007", de: "der Salat",     es: "la lechuga; la ensalada", wortart: "sustantivo", beispiel: "Ein kleiner Salat als Vorspeise?", beispielUe: "¿Una ensalada pequeña de entrada?" },
    { id: "bev1008", de: "die Bohne",     es: "el frijol",             wortart: "sustantivo", beispiel: "Die Bohnen kochen eine Stunde.", beispielUe: "Los frijoles se cocinan una hora." },
    { id: "bev1009", de: "das Obst",      es: "la fruta",              wortart: "sustantivo", beispiel: "Zum Frühstück gibt es frisches Obst.", beispielUe: "En el desayuno hay fruta fresca." },
    { id: "bev1010", de: "das Gemüse",    es: "la verdura",            wortart: "sustantivo", beispiel: "Das Gemüse kommt jeden Morgen.", beispielUe: "La verdura llega cada mañana." }
  ],
  saetze: [
    { id: "bes1001", de: "Es gibt heute keine Erdbeeren.", es: "Hoy no hay fresas." },
    { id: "bes1002", de: "Haben wir noch Tomaten?", es: "¿Todavía tenemos tomates?" },
    { id: "bes1003", de: "Ja, im Kühlschrank sind noch fünf Gurken.", es: "Sí, en el refrigerador quedan cinco pepinos." },
    { id: "bes1004", de: "Das Obst ist sehr frisch.", es: "La fruta está muy fresca." },
    { id: "bes1005", de: "Ich wasche das Gemüse.", es: "Lavo la verdura." }
  ],
  grammatik: {
    id: "beg10", titel: "Primeros pasos: es gibt y «¿nos queda…?»",
    erklaerung: `
      <p>Para decir «hay», el alemán usa <strong>es gibt</strong>. Lo que hay va en
      acusativo, así que el masculino cambia a <em>einen</em>.</p>
      <table>
        <tr><th>Español</th><th>Alemán</th></tr>
        <tr><td>Hay una ensalada.</td><td>Es gibt <strong>einen</strong> Salat.</td></tr>
        <tr><td>Hay una sopa.</td><td>Es gibt eine Suppe.</td></tr>
        <tr><td>Hay fruta fresca.</td><td>Es gibt frisches Obst.</td></tr>
        <tr><td>Hoy no hay fresas.</td><td>Es gibt heute <strong>keine</strong> Erdbeeren.</td></tr>
      </table>
      <div class="merke"><em>es gibt</em> no cambia nunca, aunque lo que hay sea plural:
      <em>Es gibt zwei Suppen.</em> — no <em>Es geben</em>.</div>
      <p>En la cocina se pregunta a menudo si algo queda:</p>
      <ul>
        <li><em>Haben wir <strong>noch</strong> Tomaten?</em> — ¿Nos quedan tomates?</li>
        <li><em>Ja, wir haben noch fünf.</em> / <em>Nein, wir haben <strong>keine</strong> Tomaten <strong>mehr</strong>.</em></li>
      </ul>`,
    uebungen: [
      { id: "beg1001", satz: "Es ___ heute Fisch.", loesung: "gibt", tipps: ["gibt", "geben", "hat"], hinweis: "es gibt = hay", ue: "Hoy hay pescado." },
      { id: "beg1002", satz: "Es gibt ___ Salat mit Tomaten.", loesung: "einen", tipps: ["einen", "ein", "eine"], hinweis: "der Salat en acusativo: einen", ue: "Hay una ensalada con tomate." },
      { id: "beg1003", satz: "Haben wir ___ Äpfel?", loesung: "noch", tipps: ["noch", "schon", "nicht"], hinweis: "noch = todavía, quedar", ue: "¿Nos quedan manzanas?" },
      { id: "beg1004", satz: "Nein, wir haben ___ Bananen mehr.", loesung: "keine", tipps: ["keine", "kein", "nicht"], hinweis: "plural: keine", ue: "No, ya no nos quedan plátanos." },
      { id: "beg1005", satz: "Zum Frühstück gibt es frisches ___.", loesung: "Obst", tipps: ["Obst", "Brot", "Salz"], hinweis: "la fruta", ue: "En el desayuno hay fruta fresca." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 11, niveau: "A1", thema: "¿Cómo está? Adjetivos básicos",
  vokabeln: [
    { id: "bev1101", de: "heiß",     es: "muy caliente",          wortart: "adjetivo", beispiel: "Vorsicht, der Teller ist heiß!", beispielUe: "¡Cuidado, el plato está muy caliente!" },
    { id: "bev1102", de: "warm",     es: "caliente, tibio",       wortart: "adjetivo", beispiel: "Die Suppe ist nur warm, nicht heiß.", beispielUe: "La sopa solo está tibia, no caliente." },
    { id: "bev1103", de: "groß",     es: "grande",                wortart: "adjetivo", beispiel: "Die Küche ist groß.", beispielUe: "La cocina es grande." },
    { id: "bev1104", de: "klein",    es: "pequeño",               wortart: "adjetivo", beispiel: "Das Lager ist zu klein.", beispielUe: "El almacén es demasiado pequeño." },
    { id: "bev1105", de: "voll",     es: "lleno",                 wortart: "adjetivo", beispiel: "Das Restaurant ist heute voll.", beispielUe: "Hoy el restaurante está lleno." },
    { id: "bev1106", de: "leer",     es: "vacío",                 wortart: "adjetivo", beispiel: "Die Flasche ist leer.", beispielUe: "La botella está vacía." },
    { id: "bev1107", de: "schnell",  es: "rápido",                wortart: "adjetivo", beispiel: "Am Mittag müssen wir schnell sein.", beispielUe: "Al mediodía tenemos que ser rápidos." },
    { id: "bev1108", de: "langsam",  es: "lento, despacio",       wortart: "adjetivo", beispiel: "Bitte sprich langsam.", beispielUe: "Habla despacio, por favor." },
    { id: "bev1109", de: "fertig",   es: "listo, terminado",      wortart: "adjetivo", beispiel: "Tisch drei ist fertig!", beispielUe: "¡La mesa tres está lista!" },
    { id: "bev1110", de: "wichtig",  es: "importante",            wortart: "adjetivo", beispiel: "Hygiene ist sehr wichtig.", beispielUe: "La higiene es muy importante." }
  ],
  saetze: [
    { id: "bes1101", de: "Das Wasser ist noch nicht heiß.", es: "El agua todavía no está caliente." },
    { id: "bes1102", de: "Der Topf ist zu klein.", es: "La olla es demasiado pequeña." },
    { id: "bes1103", de: "Die Pizza ist fertig.", es: "La pizza está lista." },
    { id: "bes1104", de: "Das ist sehr wichtig!", es: "¡Eso es muy importante!" },
    { id: "bes1105", de: "Die Kiste ist nicht leer.", es: "La caja no está vacía." }
  ],
  grammatik: {
    id: "beg11", titel: "Primeros pasos: sehr, zu y nicht",
    erklaerung: `
      <p>Detrás de <em>sein</em> el adjetivo no cambia nunca: <em>Der Topf ist klein. Die
      Pfanne ist klein. Das Glas ist klein.</em> Lo que sí cambia el sentido son estas
      palabritas delante:</p>
      <table>
        <tr><th>Palabra</th><th>Significa</th><th>Ejemplo</th></tr>
        <tr><td><strong>sehr</strong></td><td>muy</td><td>Das Essen ist sehr gut.</td></tr>
        <tr><td><strong>zu</strong></td><td>demasiado</td><td>Die Suppe ist zu heiß.</td></tr>
        <tr><td><strong>nicht</strong></td><td>no</td><td>Der Reis ist nicht fertig.</td></tr>
        <tr><td><strong>noch nicht</strong></td><td>todavía no</td><td>Das Wasser ist noch nicht heiß.</td></tr>
        <tr><td><strong>nicht so</strong></td><td>no tan</td><td>Das ist nicht so teuer.</td></tr>
      </table>
      <div class="merke"><strong>zu</strong> no es «muy», es «demasiado»: siempre señala un
      problema. <em>Die Suppe ist sehr heiß</em> puede ser un elogio; <em>Die Suppe ist zu
      heiß</em> es una queja.</div>`,
    uebungen: [
      { id: "beg1101", satz: "Die Suppe ist ___ heiß, ich kann sie nicht essen.", loesung: "zu", tipps: ["zu", "sehr", "nicht"], hinweis: "demasiado = zu", ue: "La sopa está demasiado caliente, no puedo comerla." },
      { id: "beg1102", satz: "Das Essen ist ___ gut, danke!", loesung: "sehr", tipps: ["sehr", "zu", "nicht"], hinweis: "muy = sehr", ue: "La comida está muy buena, ¡gracias!" },
      { id: "beg1103", satz: "Der Reis ist noch ___ fertig.", loesung: "nicht", tipps: ["nicht", "kein", "keine"], hinweis: "negar un adjetivo: nicht", ue: "El arroz todavía no está listo." },
      { id: "beg1104", satz: "Die Flasche ist nicht voll, sie ist ___.", loesung: "leer", tipps: ["leer", "groß", "fertig"], hinweis: "lo contrario de voll", ue: "La botella no está llena, está vacía." },
      { id: "beg1105", satz: "Bitte sprich ___, ich bin neu.", loesung: "langsam", tipps: ["langsam", "schnell", "klein"], hinweis: "lo contrario de schnell", ue: "Habla despacio, por favor, soy nuevo." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 12, niveau: "A1", thema: "Verbos de cada día en el trabajo",
  vokabeln: [
    { id: "bev1201", de: "holen",      es: "ir a buscar, traer",        wortart: "verbo", beispiel: "Ich hole den Käse aus dem Kühlschrank.", beispielUe: "Traigo el queso del refrigerador." },
    { id: "bev1202", de: "bringen",    es: "llevar, traer (a alguien)", wortart: "verbo", beispiel: "Der Kellner bringt die Rechnung.", beispielUe: "El mesero trae la cuenta." },
    { id: "bev1203", de: "stellen",    es: "poner (de pie)",            wortart: "verbo", beispiel: "Ich stelle die Flaschen in den Kühlschrank.", beispielUe: "Pongo las botellas en el refrigerador." },
    { id: "bev1204", de: "legen",      es: "poner (acostado)",          wortart: "verbo", beispiel: "Ich lege das Messer auf das Brett.", beispielUe: "Pongo el cuchillo sobre la tabla." },
    { id: "bev1205", de: "öffnen",     es: "abrir",                     wortart: "verbo", beispiel: "Wir öffnen um elf Uhr.", beispielUe: "Abrimos a las once." },
    { id: "bev1206", de: "schließen",  es: "cerrar",                    wortart: "verbo", beispiel: "Die Küche schließt um zehn.", beispielUe: "La cocina cierra a las diez." },
    { id: "bev1207", de: "putzen",     es: "limpiar",                   wortart: "verbo", beispiel: "Nach dem Service putzen wir die Küche.", beispielUe: "Después del servicio limpiamos la cocina." },
    { id: "bev1208", de: "helfen",     es: "ayudar",                    wortart: "verbo", beispiel: "Kannst du mir helfen?", beispielUe: "¿Me puedes ayudar?" },
    { id: "bev1209", de: "suchen",     es: "buscar",                    wortart: "verbo", beispiel: "Ich suche den Chef.", beispielUe: "Busco al jefe." },
    { id: "bev1210", de: "brauchen",   es: "necesitar",                 wortart: "verbo", beispiel: "Wir brauchen mehr Teller.", beispielUe: "Necesitamos más platos." }
  ],
  saetze: [
    { id: "bes1201", de: "Ich hole den Topf.", es: "Voy por la olla." },
    { id: "bes1202", de: "Brauchst du Hilfe?", es: "¿Necesitas ayuda?" },
    { id: "bes1203", de: "Ich suche einen Löffel.", es: "Busco una cuchara." },
    { id: "bes1204", de: "Wir putzen jeden Abend die Küche.", es: "Limpiamos la cocina cada noche." },
    { id: "bes1205", de: "Bring bitte den Wein an Tisch vier.", es: "Lleva el vino a la mesa cuatro, por favor." }
  ],
  grammatik: {
    id: "beg12", titel: "Primeros pasos: den, einen — el objeto masculino",
    erklaerung: `
      <p>Casi todos los verbos de hoy llevan un objeto: <em>holen</em> algo,
      <em>brauchen</em> algo, <em>suchen</em> algo. Ese objeto va en
      <strong>acusativo</strong>. Ya lo viste con <em>haben</em>: solo cambia el masculino.</p>
      <table>
        <tr><th>Género</th><th>Sujeto</th><th>Objeto (acusativo)</th></tr>
        <tr><td>masculino</td><td>der / ein Topf</td><td>Ich hole <strong>den</strong> / <strong>einen</strong> Topf.</td></tr>
        <tr><td>femenino</td><td>die / eine Pfanne</td><td>Ich hole die / eine Pfanne.</td></tr>
        <tr><td>neutro</td><td>das / ein Messer</td><td>Ich hole das / ein Messer.</td></tr>
        <tr><td>plural</td><td>die Teller</td><td>Ich hole die Teller.</td></tr>
      </table>
      <div class="merke"><strong>helfen</strong> es la excepción: no lleva acusativo sino
      dativo. Por eso se dice <em>Kannst du <strong>mir</strong> helfen?</em> y no
      <em>mich</em>. Apréndelo como frase hecha.</div>
      <p><em>stellen</em> o <em>legen</em>: botellas, vasos y ollas se <strong>ponen de
      pie</strong> (stellen); cuchillos, cubiertos y servilletas se <strong>acuestan</strong>
      (legen).</p>`,
    uebungen: [
      { id: "beg1201", satz: "Ich hole ___ Käse. (der Käse)", loesung: "den", tipps: ["den", "der", "dem"], hinweis: "masculino en acusativo: den", ue: "Traigo el queso." },
      { id: "beg1202", satz: "Wir brauchen ___ Löffel. (un)", loesung: "einen", tipps: ["einen", "ein", "eine"], hinweis: "masculino en acusativo: einen", ue: "Necesitamos una cuchara." },
      { id: "beg1203", satz: "Er sucht ___ Pfanne. (die Pfanne)", loesung: "die", tipps: ["die", "den", "der"], hinweis: "femenino: no cambia", ue: "Él busca la sartén." },
      { id: "beg1204", satz: "Kannst du ___ helfen?", loesung: "mir", tipps: ["mir", "mich", "ich"], hinweis: "helfen va con mir / dir", ue: "¿Me puedes ayudar?" },
      { id: "beg1205", satz: "Der Kellner ___ den Wein. (bringen)", loesung: "bringt", tipps: ["bringt", "bringen", "bringst"], hinweis: "er + -t", ue: "El mesero trae el vino." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 13, niveau: "A1", thema: "Recibir a los clientes",
  vokabeln: [
    { id: "bev1301", de: "willkommen",  es: "bienvenido",                  wortart: "expresión", beispiel: "Herzlich willkommen im Restaurant Linde!", beispielUe: "¡Bienvenidos al restaurante Linde!" },
    { id: "bev1302", de: "der Platz",   es: "el lugar, el asiento",        wortart: "sustantivo", beispiel: "Ist hier noch ein Platz frei?", beispielUe: "¿Hay un lugar libre aquí?" },
    { id: "bev1303", de: "die Person",  es: "la persona",                  wortart: "sustantivo", beispiel: "Ein Tisch für vier Personen, bitte.", beispielUe: "Una mesa para cuatro personas, por favor." },
    { id: "bev1304", de: "das Kind",    es: "el niño, la niña",            wortart: "sustantivo", beispiel: "Wir sind zwei Erwachsene und ein Kind.", beispielUe: "Somos dos adultos y un niño." },
    { id: "bev1305", de: "möchten",     es: "querer (cortés), quisiera",   wortart: "verbo modal", beispiel: "Möchten Sie etwas trinken?", beispielUe: "¿Quiere tomar algo?" },
    { id: "bev1306", de: "nehmen",      es: "tomar; pedir (en el restaurante)", wortart: "verbo", beispiel: "Ich nehme die Suppe.", beispielUe: "Para mí, la sopa." },
    { id: "bev1307", de: "gern",        es: "con gusto",                   wortart: "adverbio", beispiel: "Ja, gern!", beispielUe: "¡Sí, con gusto!" },
    { id: "bev1308", de: "noch",        es: "todavía; otro más",           wortart: "adverbio", beispiel: "Möchten Sie noch ein Glas Wein?", beispielUe: "¿Quiere otra copa de vino?" },
    { id: "bev1309", de: "schon",       es: "ya",                          wortart: "adverbio", beispiel: "Haben Sie schon gewählt?", beispielUe: "¿Ya eligió?" },
    { id: "bev1310", de: "der Moment",  es: "el momento",                  wortart: "sustantivo", beispiel: "Einen Moment, bitte.", beispielUe: "Un momento, por favor." }
  ],
  saetze: [
    { id: "bes1301", de: "Guten Abend! Haben Sie reserviert?", es: "¡Buenas noches! ¿Tienen reserva?" },
    { id: "bes1302", de: "Für wie viele Personen?", es: "¿Para cuántas personas?" },
    { id: "bes1303", de: "Bitte, hier ist Ihr Tisch.", es: "Por favor, aquí está su mesa." },
    { id: "bes1304", de: "Möchten Sie die Speisekarte?", es: "¿Quiere la carta?" },
    { id: "bes1305", de: "Einen Moment, ich komme gleich.", es: "Un momento, ya vengo." }
  ],
  grammatik: {
    id: "beg13", titel: "Primeros pasos: möchten — lo que quiere el cliente",
    erklaerung: `
      <p><strong>möchten</strong> es la forma cortés de «querer»: «quisiera», «le gustaría».
      En el servicio es la palabra más útil del día: con ella preguntas y con ella
      pide el cliente.</p>
      <table>
        <tr><th>Persona</th><th>möchten</th><th>Ejemplo</th></tr>
        <tr><td>ich</td><td><strong>möchte</strong></td><td>Ich möchte einen Kaffee.</td></tr>
        <tr><td>du</td><td><strong>möchtest</strong></td><td>Möchtest du Wasser?</td></tr>
        <tr><td>er / sie / es</td><td><strong>möchte</strong></td><td>Das Kind möchte ein Eis.</td></tr>
        <tr><td>wir</td><td><strong>möchten</strong></td><td>Wir möchten bestellen.</td></tr>
        <tr><td>Sie</td><td><strong>möchten</strong></td><td>Möchten Sie etwas trinken?</td></tr>
      </table>
      <div class="merke">Con <em>er / sie / es</em> no hay <em>-t</em>: <em>sie
      <strong>möchte</strong></em>, igual que <em>ich möchte</em>. Y si hay otro verbo, ese
      va al <strong>final</strong>: <em>Möchten Sie etwas <strong>trinken</strong>?</em></div>
      <p><em>nehmen</em> cambia la vocal: ich nehme, du <strong>nimmst</strong>, er
      <strong>nimmt</strong>. En la mesa, <em>Ich nehme …</em> significa «para mí, …».</p>`,
    uebungen: [
      { id: "beg1301", satz: "___ Sie etwas trinken?", loesung: "Möchten", tipps: ["Möchten", "Möchte", "Möchtest"], hinweis: "Sie + möchten", ue: "¿Quiere tomar algo?" },
      { id: "beg1302", satz: "Ich ___ einen Kaffee, bitte.", loesung: "möchte", tipps: ["möchte", "möchtet", "möchten"], hinweis: "ich + möchte", ue: "Quisiera un café, por favor." },
      { id: "beg1303", satz: "Das Kind ___ ein Eis.", loesung: "möchte", tipps: ["möchte", "möchtet", "möchtest"], hinweis: "er / sie / es möchte, sin -t", ue: "El niño quiere un helado." },
      { id: "beg1304", satz: "Wir ___ zwei Suppen.", loesung: "nehmen", tipps: ["nehmen", "nimmt", "nehmt"], hinweis: "wir + nehmen", ue: "Pedimos dos sopas." },
      { id: "beg1305", satz: "Ich ___ den Fisch. (nehmen)", loesung: "nehme", tipps: ["nehme", "nimmst", "nimmt"], hinweis: "ich nehme; du nimmst, er nimmt", ue: "Para mí, el pescado." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 14, niveau: "A1", thema: "Precios y pagar",
  vokabeln: [
    { id: "bev1401", de: "der Euro",      es: "el euro",                        wortart: "sustantivo", beispiel: "Das Menü kostet zwanzig Euro.", beispielUe: "El menú cuesta veinte euros." },
    { id: "bev1402", de: "der Cent",      es: "el céntimo (de euro)",           wortart: "sustantivo", beispiel: "Ein Brötchen kostet achtzig Cent.", beispielUe: "Un pancito cuesta ochenta céntimos." },
    { id: "bev1403", de: "kosten",        es: "costar",                         wortart: "verbo", beispiel: "Was kostet ein Glas Wein?", beispielUe: "¿Cuánto cuesta una copa de vino?" },
    { id: "bev1404", de: "der Preis",     es: "el precio",                      wortart: "sustantivo", beispiel: "Der Preis steht auf der Karte.", beispielUe: "El precio está en la carta." },
    { id: "bev1405", de: "teuer",         es: "caro",                           wortart: "adjetivo", beispiel: "Der Fisch ist heute teuer.", beispielUe: "Hoy el pescado está caro." },
    { id: "bev1406", de: "billig",        es: "barato",                         wortart: "adjetivo", beispiel: "Das Mittagessen ist hier billig.", beispielUe: "Aquí el almuerzo es barato." },
    { id: "bev1407", de: "das Geld",      es: "el dinero",                      wortart: "sustantivo", beispiel: "Das Geld kommt in die Kasse.", beispielUe: "El dinero va a la caja." },
    { id: "bev1408", de: "zahlen",        es: "pagar",                          wortart: "verbo", beispiel: "Ich möchte zahlen, bitte.", beispielUe: "Quisiera pagar, por favor." },
    { id: "bev1409", de: "das Kleingeld", es: "las monedas, el sencillo",       wortart: "sustantivo", beispiel: "Hast du Kleingeld?", beispielUe: "¿Tienes monedas?" },
    { id: "bev1410", de: "Stimmt so!",    es: "¡Quédese con el cambio!",        wortart: "expresión", beispiel: "Hier sind zwanzig Euro. Stimmt so!", beispielUe: "Aquí tiene veinte euros. ¡Quédese con el cambio!" }
  ],
  saetze: [
    { id: "bes1401", de: "Was kostet die Suppe?", es: "¿Cuánto cuesta la sopa?" },
    { id: "bes1402", de: "Das macht zusammen vierundzwanzig Euro.", es: "Son veinticuatro euros en total." },
    { id: "bes1403", de: "Zahlen Sie bar oder mit Karte?", es: "¿Paga en efectivo o con tarjeta?" },
    { id: "bes1404", de: "Das ist nicht so teuer.", es: "No es tan caro." },
    { id: "bes1405", de: "Vielen Dank und einen schönen Abend!", es: "¡Muchas gracias y que tenga una linda noche!" }
  ],
  grammatik: {
    id: "beg14", titel: "Primeros pasos: precios — ¿cuánto cuesta?",
    erklaerung: `
      <p>Los precios se leen en dos partes: primero los euros, después los céntimos, sin
      decir «céntimos».</p>
      <table>
        <tr><th>Escrito</th><th>Se dice</th></tr>
        <tr><td>3,50 €</td><td>drei Euro fünfzig</td></tr>
        <tr><td>0,80 €</td><td>achtzig Cent</td></tr>
        <tr><td>24,00 €</td><td>vierundzwanzig Euro</td></tr>
        <tr><td>12,90 €</td><td>zwölf Euro neunzig</td></tr>
        <tr><td>125,00 €</td><td>hundertfünfundzwanzig Euro</td></tr>
      </table>
      <div class="merke"><em>Euro</em> no lleva plural en los precios: <em>zwanzig
      Euro</em>, nunca <em>zwanzig Euros</em>. Y la coma decimal se lee como pausa, no se
      dice «coma».</div>
      <ul>
        <li>Preguntar: <em>Was kostet …?</em> / <em>Wie viel kostet …?</em></li>
        <li>Varias cosas: <em>Zwei Bier <strong>kosten</strong> acht Euro.</em></li>
        <li>Al cobrar: <em>Das <strong>macht</strong> zusammen …</em> = Son … en total.</li>
      </ul>`,
    uebungen: [
      { id: "beg1401", satz: "Was ___ ein Kaffee?", loesung: "kostet", tipps: ["kostet", "kosten", "kostest"], hinweis: "una cosa: verbo en singular", ue: "¿Cuánto cuesta un café?" },
      { id: "beg1402", satz: "Zwei Bier ___ acht Euro.", loesung: "kosten", tipps: ["kosten", "kostet", "kostest"], hinweis: "varias cosas: kosten", ue: "Dos cervezas cuestan ocho euros." },
      { id: "beg1403", satz: "3,50 € = drei Euro ___", loesung: "fünfzig", tipps: ["fünfzig", "fünfzehn", "fünf"], hinweis: "los céntimos se dicen después, sin «Cent»", ue: "tres euros cincuenta" },
      { id: "beg1404", satz: "Das ___ zusammen zwölf Euro.", loesung: "macht", tipps: ["macht", "machen", "machst"], hinweis: "Das macht … = son … (al cobrar)", ue: "Son doce euros en total." },
      { id: "beg1405", satz: "Der Fisch ist sehr ___, 35 Euro!", loesung: "teuer", tipps: ["teuer", "billig", "klein"], hinweis: "35 euros es mucho", ue: "¡El pescado es muy caro, 35 euros!" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 15, niveau: "A1", thema: "No entiendo — pedir ayuda",
  vokabeln: [
    { id: "bev1501", de: "verstehen",     es: "entender",        wortart: "verbo", beispiel: "Ich verstehe das Wort nicht.", beispielUe: "No entiendo la palabra." },
    { id: "bev1502", de: "wiederholen",   es: "repetir",         wortart: "verbo", beispiel: "Können Sie das bitte wiederholen?", beispielUe: "¿Puede repetirlo, por favor?" },
    { id: "bev1503", de: "die Frage",     es: "la pregunta",     wortart: "sustantivo", beispiel: "Ich habe eine Frage.", beispielUe: "Tengo una pregunta." },
    { id: "bev1504", de: "die Antwort",   es: "la respuesta",    wortart: "sustantivo", beispiel: "Danke für die Antwort.", beispielUe: "Gracias por la respuesta." },
    { id: "bev1505", de: "fragen",        es: "preguntar",       wortart: "verbo", beispiel: "Frag den Chef, er weiß das.", beispielUe: "Pregúntale al jefe, él lo sabe." },
    { id: "bev1506", de: "antworten",     es: "responder",       wortart: "verbo", beispiel: "Bitte antworte auf Deutsch.", beispielUe: "Responde en alemán, por favor." },
    { id: "bev1507", de: "krank",         es: "enfermo",         wortart: "adjetivo", beispiel: "Tom ist heute krank.", beispielUe: "Tom está enfermo hoy." },
    { id: "bev1508", de: "der Arzt",      es: "el médico",       wortart: "sustantivo", beispiel: "Ich muss zum Arzt.", beispielUe: "Tengo que ir al médico." },
    { id: "bev1509", de: "die Hilfe",     es: "la ayuda",        wortart: "sustantivo", beispiel: "Danke für deine Hilfe!", beispielUe: "¡Gracias por tu ayuda!" },
    { id: "bev1510", de: "das Problem",   es: "el problema",     wortart: "sustantivo", beispiel: "Kein Problem!", beispielUe: "¡No hay problema!" }
  ],
  saetze: [
    { id: "bes1501", de: "Entschuldigung, das verstehe ich nicht.", es: "Perdón, no lo entiendo." },
    { id: "bes1502", de: "Kannst du bitte langsam sprechen?", es: "¿Puedes hablar despacio, por favor?" },
    { id: "bes1503", de: "Ich bin krank und kann heute nicht arbeiten.", es: "Estoy enfermo y hoy no puedo trabajar." },
    { id: "bes1504", de: "Wir müssen um zehn Uhr fertig sein.", es: "Tenemos que estar listos a las diez." },
    { id: "bes1505", de: "Kein Problem, ich helfe dir.", es: "No hay problema, te ayudo." }
  ],
  grammatik: {
    id: "beg15", titel: "Primeros pasos: können y müssen",
    erklaerung: `
      <p><strong>können</strong> (poder) y <strong>müssen</strong> (tener que) son verbos
      modales. Van en la segunda posición, y el verbo principal se va al
      <strong>final</strong> de la frase, en infinitivo.</p>
      <table>
        <tr><th>Persona</th><th>können</th><th>müssen</th></tr>
        <tr><td>ich</td><td><strong>kann</strong></td><td><strong>muss</strong></td></tr>
        <tr><td>du</td><td>kannst</td><td>musst</td></tr>
        <tr><td>er / sie / es</td><td><strong>kann</strong></td><td><strong>muss</strong></td></tr>
        <tr><td>wir</td><td>können</td><td>müssen</td></tr>
        <tr><td>Sie</td><td>können</td><td>müssen</td></tr>
      </table>
      <div class="merke">Con <em>ich</em> y con <em>er / sie</em> no hay terminación:
      <em>ich kann, er muss</em>. Y la frase se cierra con el infinitivo: <em>Ich
      <strong>kann</strong> heute nicht <strong>arbeiten</strong>.</em></div>
      <p>Tres frases que te salvan cualquier turno:</p>
      <ul>
        <li><em>Können Sie das bitte wiederholen?</em></li>
        <li><em>Kannst du bitte langsam sprechen?</em></li>
        <li><em>Was muss ich jetzt machen?</em></li>
      </ul>`,
    uebungen: [
      { id: "beg1501", satz: "___ du mir helfen?", loesung: "Kannst", tipps: ["Kannst", "Kann", "Können"], hinweis: "du kannst", ue: "¿Me puedes ayudar?" },
      { id: "beg1502", satz: "Ich ___ heute bis elf arbeiten.", loesung: "muss", tipps: ["muss", "musst", "müssen"], hinweis: "ich muss, sin terminación", ue: "Hoy tengo que trabajar hasta las once." },
      { id: "beg1503", satz: "Er ist krank und ___ nicht kommen.", loesung: "kann", tipps: ["kann", "kannst", "können"], hinweis: "er kann", ue: "Está enfermo y no puede venir." },
      { id: "beg1504", satz: "Können Sie das bitte ___?", loesung: "wiederholen", tipps: ["wiederholen", "wiederholt", "wiederhole"], hinweis: "el infinitivo va al final", ue: "¿Puede repetirlo, por favor?" },
      { id: "beg1505", satz: "Wir ___ die Küche putzen.", loesung: "müssen", tipps: ["müssen", "muss", "müsst"], hinweis: "wir müssen", ue: "Tenemos que limpiar la cocina." }
    ]
  }
});
