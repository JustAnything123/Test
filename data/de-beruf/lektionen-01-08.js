/* Ruta temática «Alemán en el trabajo» · Día 1–8 · Primeros pasos (A1)
   Para empezar desde cero: saludar, presentarse, números, horas, días,
   el lugar de trabajo y la ropa de trabajo. Desde octubre de 2026.
   IDs propios (bev / bes / beg), para que no choquen con los días 16–60. */

LEKTION('de-beruf', {
  tag: 1, niveau: "A1", thema: "Saludar y despedirse en el trabajo",
  vokabeln: [
    { id: "bev0101", de: "Hallo",           es: "hola",                          wortart: "expresión", beispiel: "Hallo, ich bin Ana, die Neue.", beispielUe: "Hola, soy Ana, la nueva." },
    { id: "bev0102", de: "Guten Morgen",    es: "buenos días",                   wortart: "expresión", beispiel: "Guten Morgen, Chef!", beispielUe: "¡Buenos días, jefe!" },
    { id: "bev0103", de: "Guten Abend",     es: "buenas noches (al llegar)",     wortart: "expresión", beispiel: "Guten Abend, Frau Becker.", beispielUe: "Buenas noches, señora Becker." },
    { id: "bev0104", de: "Tschüss",         es: "chao, adiós (informal)",        wortart: "expresión", beispiel: "Tschüss, bis morgen!", beispielUe: "¡Chao, hasta mañana!" },
    { id: "bev0105", de: "Auf Wiedersehen", es: "adiós (formal)",                wortart: "expresión", beispiel: "Auf Wiedersehen und einen schönen Abend!", beispielUe: "¡Adiós y que tenga una linda noche!" },
    { id: "bev0106", de: "danke",           es: "gracias",                       wortart: "expresión", beispiel: "Danke für die Hilfe!", beispielUe: "¡Gracias por la ayuda!" },
    { id: "bev0107", de: "bitte",           es: "por favor; de nada",            wortart: "expresión", beispiel: "Einen Kaffee, bitte.", beispielUe: "Un café, por favor." },
    { id: "bev0108", de: "der Kollege",     es: "el compañero (de trabajo)",     wortart: "sustantivo", beispiel: "Das ist mein Kollege Tom.", beispielUe: "Este es mi compañero Tom." },
    { id: "bev0109", de: "die Kollegin",    es: "la compañera (de trabajo)",     wortart: "sustantivo", beispiel: "Meine Kollegin heißt Mia.", beispielUe: "Mi compañera se llama Mia." },
    { id: "bev0110", de: "das Team",        es: "el equipo",                     wortart: "sustantivo", beispiel: "Das Team ist sehr nett.", beispielUe: "El equipo es muy amable." }
  ],
  saetze: [
    { id: "bes0101", de: "Guten Morgen, ich bin die neue Kollegin.", es: "Buenos días, soy la nueva compañera." },
    { id: "bes0102", de: "Hallo, ich bin Luis. Und du?", es: "Hola, soy Luis. ¿Y tú?" },
    { id: "bes0103", de: "Wie geht es dir?", es: "¿Cómo estás?" },
    { id: "bes0104", de: "Danke, gut. Und dir?", es: "Bien, gracias. ¿Y tú?" },
    { id: "bes0105", de: "Bis morgen, das Team!", es: "¡Hasta mañana, equipo!" }
  ],
  grammatik: {
    id: "beg01", titel: "Primeros pasos: el verbo sein y los pronombres",
    erklaerung: `
      <p>El verbo <strong>sein</strong> es «ser» y «estar» a la vez. Es irregular, así que
      vale la pena aprenderlo de memoria desde el primer día: lo vas a usar en cada turno.</p>
      <table>
        <tr><th>Pronombre</th><th>sein</th><th>Ejemplo</th></tr>
        <tr><td>ich (yo)</td><td><strong>bin</strong></td><td>Ich bin neu.</td></tr>
        <tr><td>du (tú)</td><td><strong>bist</strong></td><td>Bist du Koch?</td></tr>
        <tr><td>er / sie / es (él / ella)</td><td><strong>ist</strong></td><td>Das ist Tom.</td></tr>
        <tr><td>wir (nosotros)</td><td><strong>sind</strong></td><td>Wir sind das Team.</td></tr>
        <tr><td>ihr (ustedes, entre colegas)</td><td><strong>seid</strong></td><td>Seid ihr fertig?</td></tr>
        <tr><td>sie / Sie (ellos / usted)</td><td><strong>sind</strong></td><td>Sind Sie die Chefin?</td></tr>
      </table>
      <div class="merke"><strong>du o Sie:</strong> en la cocina y entre compañeros casi
      siempre se usa <em>du</em>. Con los clientes, siempre <em>Sie</em> (con mayúscula). Con
      el jefe, espera a que él te ofrezca el <em>du</em>.</div>
      <p>En una pregunta de sí o no, el verbo va primero:</p>
      <ul>
        <li>Du <strong>bist</strong> neu. → <strong>Bist</strong> du neu?</li>
        <li>Sie <strong>sind</strong> Herr Wagner. → <strong>Sind</strong> Sie Herr Wagner?</li>
      </ul>`,
    uebungen: [
      { id: "beg0101", satz: "Ich ___ die neue Kollegin.", loesung: "bin", tipps: ["bin", "bist", "ist"], hinweis: "sein con ich", ue: "Soy la nueva compañera." },
      { id: "beg0102", satz: "___ du auch neu hier?", loesung: "Bist", tipps: ["Bist", "Bin", "Sind"], hinweis: "sein con du; en la pregunta, el verbo va primero", ue: "¿Tú también eres nuevo aquí?" },
      { id: "beg0103", satz: "Das ___ mein Kollege Tom.", loesung: "ist", tipps: ["ist", "bin", "sind"], hinweis: "das ist = este es", ue: "Este es mi compañero Tom." },
      { id: "beg0104", satz: "Wir ___ das Team von der Küche.", loesung: "sind", tipps: ["sind", "seid", "ist"], hinweis: "sein con wir", ue: "Somos el equipo de la cocina." },
      { id: "beg0105", satz: "Frau Becker, ___ Sie die Chefin?", loesung: "sind", tipps: ["sind", "bist", "ist"], hinweis: "Sie (usted) va con sind", ue: "Señora Becker, ¿usted es la jefa?" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 2, niveau: "A1", thema: "Presentarse: nombre, origen, idiomas",
  vokabeln: [
    { id: "bev0201", de: "heißen",      es: "llamarse",            wortart: "verbo", beispiel: "Ich heiße Carlos.", beispielUe: "Me llamo Carlos." },
    { id: "bev0202", de: "kommen",      es: "venir",               wortart: "verbo", beispiel: "Ich komme aus Peru.", beispielUe: "Vengo de Perú." },
    { id: "bev0203", de: "wohnen",      es: "vivir (residir)",     wortart: "verbo", beispiel: "Ich wohne in Köln.", beispielUe: "Vivo en Colonia." },
    { id: "bev0204", de: "sprechen",    es: "hablar",              wortart: "verbo", beispiel: "Ich spreche Spanisch und ein bisschen Deutsch.", beispielUe: "Hablo español y un poco de alemán." },
    { id: "bev0205", de: "arbeiten",    es: "trabajar",            wortart: "verbo", beispiel: "Ich arbeite im Hotel Krone.", beispielUe: "Trabajo en el hotel Krone." },
    { id: "bev0206", de: "der Name",    es: "el nombre",           wortart: "sustantivo", beispiel: "Wie ist Ihr Name, bitte?", beispielUe: "¿Cuál es su nombre, por favor?" },
    { id: "bev0207", de: "das Land",    es: "el país",             wortart: "sustantivo", beispiel: "Aus welchem Land kommst du?", beispielUe: "¿De qué país eres?" },
    { id: "bev0208", de: "die Sprache", es: "el idioma",           wortart: "sustantivo", beispiel: "Welche Sprachen sprichst du?", beispielUe: "¿Qué idiomas hablas?" },
    { id: "bev0209", de: "die Stadt",   es: "la ciudad",           wortart: "sustantivo", beispiel: "Hamburg ist eine große Stadt.", beispielUe: "Hamburgo es una ciudad grande." },
    { id: "bev0210", de: "neu",         es: "nuevo",               wortart: "adjetivo", beispiel: "Ich bin neu im Team.", beispielUe: "Soy nuevo en el equipo." }
  ],
  saetze: [
    { id: "bes0201", de: "Ich heiße María und komme aus Kolumbien.", es: "Me llamo María y vengo de Colombia." },
    { id: "bes0202", de: "Woher kommst du?", es: "¿De dónde eres?" },
    { id: "bes0203", de: "Ich wohne seit zwei Monaten in Berlin.", es: "Vivo en Berlín desde hace dos meses." },
    { id: "bes0204", de: "Sprichst du Englisch?", es: "¿Hablas inglés?" },
    { id: "bes0205", de: "Ich arbeite hier in der Küche.", es: "Trabajo aquí en la cocina." }
  ],
  grammatik: {
    id: "beg02", titel: "Primeros pasos: los verbos en presente",
    erklaerung: `
      <p>La mayoría de los verbos alemanes funcionan igual: quitas <em>-en</em> del
      infinitivo y añades una terminación según la persona.</p>
      <table>
        <tr><th>Persona</th><th>Terminación</th><th>wohnen</th><th>arbeiten</th></tr>
        <tr><td>ich</td><td>-e</td><td>wohn<strong>e</strong></td><td>arbeit<strong>e</strong></td></tr>
        <tr><td>du</td><td>-st</td><td>wohn<strong>st</strong></td><td>arbeit<strong>est</strong></td></tr>
        <tr><td>er / sie / es</td><td>-t</td><td>wohn<strong>t</strong></td><td>arbeit<strong>et</strong></td></tr>
        <tr><td>wir</td><td>-en</td><td>wohn<strong>en</strong></td><td>arbeit<strong>en</strong></td></tr>
        <tr><td>ihr</td><td>-t</td><td>wohn<strong>t</strong></td><td>arbeit<strong>et</strong></td></tr>
        <tr><td>sie / Sie</td><td>-en</td><td>wohn<strong>en</strong></td><td>arbeit<strong>en</strong></td></tr>
      </table>
      <div class="merke">Si la raíz termina en <em>-t</em> o <em>-d</em>, se añade una
      <em>e</em> para poder pronunciarlo: <em>du arbeit<strong>e</strong>st, er arbeit<strong>e</strong>t</em>.</div>
      <p>Algunos verbos cambian la vocal con <em>du</em> y <em>er/sie</em>:</p>
      <ul>
        <li>sprechen → du <strong>sprichst</strong>, er <strong>spricht</strong></li>
        <li>heißen → du <strong>heißt</strong> (la -s ya está en la ß)</li>
      </ul>
      <p>Para preguntar por el origen: <em>Woher kommst du?</em> — <em>Ich komme aus Mexiko.</em></p>`,
    uebungen: [
      { id: "beg0201", satz: "Ich ___ Carlos. (heißen)", loesung: "heiße", tipps: ["heiße", "heißt", "heißen"], hinweis: "ich + -e", ue: "Me llamo Carlos." },
      { id: "beg0202", satz: "Woher ___ du? (kommen)", loesung: "kommst", tipps: ["kommst", "kommt", "komme"], hinweis: "du + -st", ue: "¿De dónde vienes?" },
      { id: "beg0203", satz: "Er ___ in der Küche. (arbeiten)", loesung: "arbeitet", tipps: ["arbeitet", "arbeite", "arbeiten"], hinweis: "raíz en -t: se añade una e antes de -t", ue: "Él trabaja en la cocina." },
      { id: "beg0204", satz: "___ du Spanisch? (sprechen)", loesung: "Sprichst", tipps: ["Sprichst", "Sprechst", "Spricht"], hinweis: "e → i con du y con er/sie", ue: "¿Hablas español?" },
      { id: "beg0205", satz: "Wir ___ in Hamburg. (wohnen)", loesung: "wohnen", tipps: ["wohnen", "wohnt", "wohnst"], hinweis: "wir + -en", ue: "Vivimos en Hamburgo." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 3, niveau: "A1", thema: "Los oficios de la casa",
  vokabeln: [
    { id: "bev0301", de: "der Koch",         es: "el cocinero",                  wortart: "sustantivo", beispiel: "Der Koch macht die Soße.", beispielUe: "El cocinero hace la salsa." },
    { id: "bev0302", de: "die Köchin",       es: "la cocinera",                  wortart: "sustantivo", beispiel: "Die Köchin probiert die Suppe.", beispielUe: "La cocinera prueba la sopa." },
    { id: "bev0303", de: "der Kellner",      es: "el mesero",                    wortart: "sustantivo", beispiel: "Der Kellner bringt die Getränke.", beispielUe: "El mesero trae las bebidas." },
    { id: "bev0304", de: "die Kellnerin",    es: "la mesera",                    wortart: "sustantivo", beispiel: "Die Kellnerin ist sehr freundlich.", beispielUe: "La mesera es muy amable." },
    { id: "bev0305", de: "die Küchenhilfe",  es: "el/la ayudante de cocina",     wortart: "sustantivo", beispiel: "Die Küchenhilfe wäscht das Gemüse.", beispielUe: "El ayudante de cocina lava la verdura." },
    { id: "bev0306", de: "der Spüler",       es: "el lavaplatos (persona)",      wortart: "sustantivo", beispiel: "Der Spüler arbeitet bis Mitternacht.", beispielUe: "El lavaplatos trabaja hasta la medianoche." },
    { id: "bev0307", de: "der Chef",         es: "el jefe",                      wortart: "sustantivo", beispiel: "Der Chef macht den Dienstplan.", beispielUe: "El jefe hace el plan de turnos." },
    { id: "bev0308", de: "die Chefin",       es: "la jefa",                      wortart: "sustantivo", beispiel: "Die Chefin ist heute nicht da.", beispielUe: "La jefa no está hoy." },
    { id: "bev0309", de: "der Azubi",        es: "el/la aprendiz (en formación)", wortart: "sustantivo", beispiel: "Der Azubi lernt drei Jahre.", beispielUe: "El aprendiz se forma durante tres años." },
    { id: "bev0310", de: "der Beruf",        es: "la profesión",                 wortart: "sustantivo", beispiel: "Was sind Sie von Beruf?", beispielUe: "¿Cuál es su profesión?" }
  ],
  saetze: [
    { id: "bes0301", de: "Ich bin Koch von Beruf.", es: "Soy cocinero de profesión." },
    { id: "bes0302", de: "Was bist du von Beruf?", es: "¿A qué te dedicas?" },
    { id: "bes0303", de: "Sie ist Kellnerin im Restaurant.", es: "Ella es mesera en el restaurante." },
    { id: "bes0304", de: "Der Chef heißt Herr Wagner.", es: "El jefe se llama señor Wagner." },
    { id: "bes0305", de: "Wir sind zwei Köche und eine Küchenhilfe.", es: "Somos dos cocineros y un ayudante de cocina." }
  ],
  grammatik: {
    id: "beg03", titel: "Primeros pasos: profesiones en masculino y femenino",
    erklaerung: `
      <p>En alemán casi todas las profesiones tienen una forma femenina. Se forma con
      <strong>-in</strong>, y a veces la vocal recibe además una diéresis.</p>
      <table>
        <tr><th>Masculino</th><th>Femenino</th><th>Plural</th></tr>
        <tr><td>der Koch</td><td>die K<strong>ö</strong>ch<strong>in</strong></td><td>die Köche</td></tr>
        <tr><td>der Kellner</td><td>die Kellner<strong>in</strong></td><td>die Kellner</td></tr>
        <tr><td>der Chef</td><td>die Chef<strong>in</strong></td><td>die Chefs</td></tr>
        <tr><td>der Kollege</td><td>die Kolleg<strong>in</strong></td><td>die Kollegen</td></tr>
        <tr><td>der Azubi</td><td>die Azubi</td><td>die Azubis</td></tr>
      </table>
      <div class="merke">Al decir tu profesión, <strong>sin artículo</strong>:
      <em>Ich bin Koch.</em> — no <em>Ich bin ein Koch.</em> Igual que en español:
      «soy cocinero».</div>
      <p>Para preguntar por la profesión:</p>
      <ul>
        <li><em>Was bist du von Beruf?</em> (entre colegas)</li>
        <li><em>Was sind Sie von Beruf?</em> (formal)</li>
      </ul>`,
    uebungen: [
      { id: "beg0301", satz: "Maria ist ___ von Beruf.", loesung: "Köchin", tipps: ["Köchin", "Koch", "Köche"], hinweis: "forma femenina con -in (y diéresis)", ue: "María es cocinera de profesión." },
      { id: "beg0302", satz: "Tom ist ___ im Restaurant.", loesung: "Kellner", tipps: ["Kellner", "Kellnerin", "Kellners"], hinweis: "masculino", ue: "Tom es mesero en el restaurante." },
      { id: "beg0303", satz: "Frau Wagner ist die ___.", loesung: "Chefin", tipps: ["Chefin", "Chef", "Chefs"], hinweis: "femenino de Chef", ue: "La señora Wagner es la jefa." },
      { id: "beg0304", satz: "Ich bin Koch ___ Beruf.", loesung: "von", tipps: ["von", "im", "am"], hinweis: "von Beruf = de profesión", ue: "Soy cocinero de profesión." },
      { id: "beg0305", satz: "Was sind Sie von ___?", loesung: "Beruf", tipps: ["Beruf", "Berufe", "Name"], hinweis: "pregunta por la profesión", ue: "¿Cuál es su profesión?" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 4, niveau: "A1", thema: "Los números del 0 al 100",
  vokabeln: [
    { id: "bev0401", de: "die Zahl",    es: "el número (la cifra)",                 wortart: "sustantivo", beispiel: "Welche Zahl ist das?", beispielUe: "¿Qué número es ese?" },
    { id: "bev0402", de: "die Nummer",  es: "el número (de mesa, de teléfono)",     wortart: "sustantivo", beispiel: "Tisch Nummer fünf möchte bestellen.", beispielUe: "La mesa número cinco quiere pedir." },
    { id: "bev0403", de: "zählen",      es: "contar",                               wortart: "verbo", beispiel: "Ich zähle die Gläser.", beispielUe: "Cuento los vasos." },
    { id: "bev0404", de: "null",        es: "cero",                                 wortart: "número", beispiel: "Die Telefonnummer beginnt mit null.", beispielUe: "El número de teléfono empieza con cero." },
    { id: "bev0405", de: "zwölf",       es: "doce",                                 wortart: "número", beispiel: "Wir haben zwölf Tische.", beispielUe: "Tenemos doce mesas." },
    { id: "bev0406", de: "zwanzig",     es: "veinte",                               wortart: "número", beispiel: "Zwanzig Gäste kommen um acht.", beispielUe: "Veinte clientes vienen a las ocho." },
    { id: "bev0407", de: "dreißig",     es: "treinta",                              wortart: "número", beispiel: "Die Suppe braucht dreißig Minuten.", beispielUe: "La sopa necesita treinta minutos." },
    { id: "bev0408", de: "fünfzig",     es: "cincuenta",                            wortart: "número", beispiel: "Im Lager sind fünfzig Flaschen.", beispielUe: "En el almacén hay cincuenta botellas." },
    { id: "bev0409", de: "hundert",     es: "cien",                                 wortart: "número", beispiel: "Der Saal hat hundert Plätze.", beispielUe: "El salón tiene cien lugares." },
    { id: "bev0410", de: "die Kiste",   es: "la caja (de botellas)",                wortart: "sustantivo", beispiel: "Wir brauchen eine Kiste Wasser.", beispielUe: "Necesitamos una caja de agua." }
  ],
  saetze: [
    { id: "bes0401", de: "Tisch Nummer zwölf ist frei.", es: "La mesa número doce está libre." },
    { id: "bes0402", de: "Wir brauchen zwanzig Teller.", es: "Necesitamos veinte platos." },
    { id: "bes0403", de: "Meine Telefonnummer ist null eins sieben sechs.", es: "Mi número de teléfono es cero uno siete seis." },
    { id: "bes0404", de: "Im Lager sind noch drei Kisten Bier.", es: "En el almacén quedan tres cajas de cerveza." },
    { id: "bes0405", de: "Ich zähle bis hundert.", es: "Cuento hasta cien." }
  ],
  grammatik: {
    id: "beg04", titel: "Primeros pasos: contar en alemán",
    erklaerung: `
      <p>Del 1 al 12 los números son palabras propias. Del 13 al 19 se dicen «tres-diez»,
      «cuatro-diez». Y a partir del 21 viene lo más raro para un hispanohablante:
      <strong>las unidades van primero</strong>.</p>
      <table>
        <tr><th>Número</th><th>Alemán</th><th>Literalmente</th></tr>
        <tr><td>13</td><td>dreizehn</td><td>tres-diez</td></tr>
        <tr><td>16</td><td>se<strong>ch</strong>zehn</td><td>seis-diez (sin -s)</td></tr>
        <tr><td>21</td><td><strong>ein</strong>undzwanzig</td><td>uno-y-veinte</td></tr>
        <tr><td>35</td><td>fünfunddreißig</td><td>cinco-y-treinta</td></tr>
        <tr><td>30</td><td>drei<strong>ß</strong>ig</td><td>con ß, no con z</td></tr>
        <tr><td>99</td><td>neunundneunzig</td><td>nueve-y-noventa</td></tr>
      </table>
      <div class="merke">Escucha primero el final del número: en <em>siebenund<strong>vierzig</strong></em>
      la decena (40) llega al final. Muchos errores en la comanda vienen de aquí: 47 y 74
      suenan parecidos si no esperas al final.</div>
      <p>Con números de mesa se dice <em>Tisch Nummer zwölf</em> o simplemente <em>Tisch zwölf</em>.</p>`,
    uebungen: [
      { id: "beg0401", satz: "21 = ___undzwanzig", loesung: "ein", tipps: ["ein", "eins", "einer"], hinweis: "dentro del número se dice ein, no eins", ue: "veintiuno" },
      { id: "beg0402", satz: "Wir haben ___ Tische. (12)", loesung: "zwölf", tipps: ["zwölf", "zwanzig", "zehn"], hinweis: "12", ue: "Tenemos doce mesas." },
      { id: "beg0403", satz: "Die Suppe braucht ___ Minuten. (30)", loesung: "dreißig", tipps: ["dreißig", "dreizehn", "dreizig"], hinweis: "30 se escribe con ß", ue: "La sopa necesita treinta minutos." },
      { id: "beg0404", satz: "Tisch Nummer ___ möchte zahlen. (7)", loesung: "sieben", tipps: ["sieben", "siebzehn", "siebzig"], hinweis: "7", ue: "La mesa número siete quiere pagar." },
      { id: "beg0405", satz: "Der Saal hat ___ Plätze. (100)", loesung: "hundert", tipps: ["hundert", "zehn", "tausend"], hinweis: "100", ue: "El salón tiene cien lugares." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 5, niveau: "A1", thema: "La hora y el horario",
  vokabeln: [
    { id: "bev0501", de: "die Uhr",       es: "el reloj; las … (hora)",     wortart: "sustantivo", beispiel: "Der Dienst beginnt um sieben Uhr.", beispielUe: "El turno empieza a las siete." },
    { id: "bev0502", de: "die Stunde",    es: "la hora (duración)",         wortart: "sustantivo", beispiel: "Ich arbeite acht Stunden.", beispielUe: "Trabajo ocho horas." },
    { id: "bev0503", de: "die Minute",    es: "el minuto",                  wortart: "sustantivo", beispiel: "Das Essen ist in fünf Minuten fertig.", beispielUe: "La comida está lista en cinco minutos." },
    { id: "bev0504", de: "halb",          es: "y media (hacia la hora siguiente)", wortart: "adjetivo", beispiel: "Wir öffnen um halb zwölf.", beispielUe: "Abrimos a las once y media." },
    { id: "bev0505", de: "das Viertel",   es: "el cuarto (de hora)",        wortart: "sustantivo", beispiel: "Es ist Viertel nach acht.", beispielUe: "Son las ocho y cuarto." },
    { id: "bev0506", de: "früh",          es: "temprano",                   wortart: "adverbio", beispiel: "Ich komme morgen früh.", beispielUe: "Vengo mañana temprano." },
    { id: "bev0507", de: "spät",          es: "tarde",                      wortart: "adverbio", beispiel: "Es ist schon spät.", beispielUe: "Ya es tarde." },
    { id: "bev0508", de: "pünktlich",     es: "puntual",                    wortart: "adjetivo", beispiel: "In der Küche sind alle pünktlich.", beispielUe: "En la cocina todos son puntuales." },
    { id: "bev0509", de: "beginnen",      es: "empezar",                    wortart: "verbo", beispiel: "Der Service beginnt um zwölf.", beispielUe: "El servicio empieza a las doce." },
    { id: "bev0510", de: "morgen",        es: "mañana (el día siguiente)",  wortart: "adverbio", beispiel: "Morgen habe ich frei.", beispielUe: "Mañana tengo libre." }
  ],
  saetze: [
    { id: "bes0501", de: "Wie spät ist es?", es: "¿Qué hora es?" },
    { id: "bes0502", de: "Es ist halb acht.", es: "Son las siete y media." },
    { id: "bes0503", de: "Ich arbeite von acht bis vier.", es: "Trabajo de ocho a cuatro." },
    { id: "bes0504", de: "Um wie viel Uhr beginnt der Dienst?", es: "¿A qué hora empieza el turno?" },
    { id: "bes0505", de: "Entschuldigung, ich bin fünf Minuten zu spät.", es: "Perdón, llego cinco minutos tarde." }
  ],
  grammatik: {
    id: "beg05", titel: "Primeros pasos: decir la hora",
    erklaerung: `
      <p>En el trabajo la hora lo es todo: cuándo empieza el turno, cuándo llega el grupo,
      cuándo sale la mesa cuatro. Hay dos maneras de decirla.</p>
      <table>
        <tr><th>Hora</th><th>En la conversación</th><th>Oficial (horarios, radio)</th></tr>
        <tr><td>7:00</td><td>sieben Uhr</td><td>sieben Uhr</td></tr>
        <tr><td>7:10</td><td>zehn <strong>nach</strong> sieben</td><td>sieben Uhr zehn</td></tr>
        <tr><td>7:15</td><td>Viertel <strong>nach</strong> sieben</td><td>sieben Uhr fünfzehn</td></tr>
        <tr><td>7:30</td><td><strong>halb acht</strong></td><td>sieben Uhr dreißig</td></tr>
        <tr><td>7:45</td><td>Viertel <strong>vor</strong> acht</td><td>sieben Uhr fünfundvierzig</td></tr>
      </table>
      <div class="merke"><strong>¡Cuidado con halb!</strong> <em>halb acht</em> no son las
      ocho y media, sino las <strong>siete</strong> y media: «media hora hacia las ocho».
      Es el malentendido más típico del primer mes.</div>
      <ul>
        <li>¿A qué hora? → <em><strong>um</strong> sieben Uhr</em></li>
        <li>De … a … → <em><strong>von</strong> acht <strong>bis</strong> vier</em></li>
      </ul>`,
    uebungen: [
      { id: "beg0501", satz: "Der Dienst beginnt ___ sieben Uhr.", loesung: "um", tipps: ["um", "am", "im"], hinweis: "a las … = um", ue: "El turno empieza a las siete." },
      { id: "beg0502", satz: "Ich arbeite von acht ___ vier.", loesung: "bis", tipps: ["bis", "um", "nach"], hinweis: "de … a … = von … bis", ue: "Trabajo de ocho a cuatro." },
      { id: "beg0503", satz: "7:30 = halb ___", loesung: "acht", tipps: ["acht", "sieben", "neun"], hinweis: "halb mira a la hora siguiente", ue: "las siete y media" },
      { id: "beg0504", satz: "8:15 = Viertel ___ acht", loesung: "nach", tipps: ["nach", "vor", "um"], hinweis: "nach = y (después de)", ue: "las ocho y cuarto" },
      { id: "beg0505", satz: "8:45 = Viertel ___ neun", loesung: "vor", tipps: ["vor", "nach", "halb"], hinweis: "vor = menos (antes de)", ue: "las nueve menos cuarto" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 6, niveau: "A1", thema: "Los días de la semana y el plan",
  vokabeln: [
    { id: "bev0601", de: "der Montag",      es: "el lunes",          wortart: "sustantivo", beispiel: "Am Montag ist das Restaurant zu.", beispielUe: "El lunes el restaurante está cerrado." },
    { id: "bev0602", de: "der Dienstag",    es: "el martes",         wortart: "sustantivo", beispiel: "Am Dienstag kommt die Lieferung.", beispielUe: "El martes llega el pedido." },
    { id: "bev0603", de: "der Mittwoch",    es: "el miércoles",      wortart: "sustantivo", beispiel: "Mittwoch ist mein freier Tag.", beispielUe: "El miércoles es mi día libre." },
    { id: "bev0604", de: "der Donnerstag",  es: "el jueves",         wortart: "sustantivo", beispiel: "Am Donnerstag arbeite ich bis Mitternacht.", beispielUe: "El jueves trabajo hasta la medianoche." },
    { id: "bev0605", de: "der Freitag",     es: "el viernes",        wortart: "sustantivo", beispiel: "Am Freitag ist das Restaurant voll.", beispielUe: "El viernes el restaurante está lleno." },
    { id: "bev0606", de: "der Samstag",     es: "el sábado",         wortart: "sustantivo", beispiel: "Am Samstag haben wir eine Hochzeit.", beispielUe: "El sábado tenemos una boda." },
    { id: "bev0607", de: "der Sonntag",     es: "el domingo",        wortart: "sustantivo", beispiel: "Am Sonntag gibt es Brunch.", beispielUe: "El domingo hay brunch." },
    { id: "bev0608", de: "die Woche",       es: "la semana",         wortart: "sustantivo", beispiel: "Ich arbeite fünf Tage in der Woche.", beispielUe: "Trabajo cinco días a la semana." },
    { id: "bev0609", de: "das Wochenende",  es: "el fin de semana",  wortart: "sustantivo", beispiel: "Am Wochenende arbeiten alle.", beispielUe: "El fin de semana trabajan todos." },
    { id: "bev0610", de: "heute",           es: "hoy",               wortart: "adverbio", beispiel: "Heute bin ich in der Küche.", beispielUe: "Hoy estoy en la cocina." }
  ],
  saetze: [
    { id: "bes0601", de: "Am Montag habe ich frei.", es: "El lunes tengo libre." },
    { id: "bes0602", de: "Heute arbeite ich von zehn bis sechs.", es: "Hoy trabajo de diez a seis." },
    { id: "bes0603", de: "Wann arbeitest du diese Woche?", es: "¿Cuándo trabajas esta semana?" },
    { id: "bes0604", de: "Am Wochenende ist das Hotel voll.", es: "El fin de semana el hotel está lleno." },
    { id: "bes0605", de: "Kannst du am Samstag arbeiten?", es: "¿Puedes trabajar el sábado?" }
  ],
  grammatik: {
    id: "beg06", titel: "Primeros pasos: el verbo en segunda posición",
    erklaerung: `
      <p>La regla más importante del orden alemán: en una frase normal, <strong>el verbo
      va siempre en la segunda posición</strong>. Lo que va primero puede cambiar; el verbo,
      no.</p>
      <table>
        <tr><th>Posición 1</th><th>Posición 2 (verbo)</th><th>Resto</th></tr>
        <tr><td>Ich</td><td><strong>arbeite</strong></td><td>am Montag.</td></tr>
        <tr><td>Am Montag</td><td><strong>arbeite</strong></td><td>ich.</td></tr>
        <tr><td>Heute</td><td><strong>ist</strong></td><td>das Restaurant voll.</td></tr>
        <tr><td>Am Wochenende</td><td><strong>haben</strong></td><td>wir eine Hochzeit.</td></tr>
      </table>
      <div class="merke">Si empiezas con <em>heute</em>, <em>morgen</em> o <em>am Montag</em>,
      la persona (<em>ich</em>, <em>wir</em>…) pasa <strong>detrás</strong> del verbo:
      <em>Heute arbeite ich.</em> — nunca <em>Heute ich arbeite.</em></div>
      <p>Los días de la semana son masculinos (<em>der Montag</em>) y se usan con
      <strong>am</strong>: <em>am Montag, am Freitag, am Wochenende</em>.</p>`,
    uebungen: [
      { id: "beg0601", satz: "___ Montag habe ich frei.", loesung: "Am", tipps: ["Am", "Im", "Um"], hinweis: "con los días: am", ue: "El lunes tengo libre." },
      { id: "beg0602", satz: "Am Freitag ___ ich bis Mitternacht. (arbeiten)", loesung: "arbeite", tipps: ["arbeite", "arbeitet", "arbeiten"], hinweis: "verbo en 2.ª posición, forma de ich", ue: "El viernes trabajo hasta la medianoche." },
      { id: "beg0603", satz: "Heute ___ das Restaurant voll. (sein)", loesung: "ist", tipps: ["ist", "sind", "bin"], hinweis: "el verbo va justo después de heute", ue: "Hoy el restaurante está lleno." },
      { id: "beg0604", satz: "Am Wochenende ___ wir eine Hochzeit. (haben)", loesung: "haben", tipps: ["haben", "hat", "habt"], hinweis: "wir + haben", ue: "El fin de semana tenemos una boda." },
      { id: "beg0605", satz: "Ich arbeite fünf Tage in der ___.", loesung: "Woche", tipps: ["Woche", "Stunde", "Minute"], hinweis: "siete días = eine Woche", ue: "Trabajo cinco días a la semana." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 7, niveau: "A1", thema: "El lugar de trabajo",
  vokabeln: [
    { id: "bev0701", de: "das Restaurant",     es: "el restaurante",                 wortart: "sustantivo", beispiel: "Das Restaurant öffnet um zwölf.", beispielUe: "El restaurante abre a las doce." },
    { id: "bev0702", de: "der Gastraum",       es: "el comedor (sala de clientes)",  wortart: "sustantivo", beispiel: "Der Gastraum hat vierzig Plätze.", beispielUe: "El comedor tiene cuarenta lugares." },
    { id: "bev0703", de: "die Theke",          es: "la barra",                       wortart: "sustantivo", beispiel: "Die Gläser stehen an der Theke.", beispielUe: "Los vasos están en la barra." },
    { id: "bev0704", de: "das Lager",          es: "el almacén, la bodega",          wortart: "sustantivo", beispiel: "Die Kisten sind im Lager.", beispielUe: "Las cajas están en el almacén." },
    { id: "bev0705", de: "der Keller",         es: "el sótano",                      wortart: "sustantivo", beispiel: "Der Wein liegt im Keller.", beispielUe: "El vino está en el sótano." },
    { id: "bev0706", de: "die Toilette",       es: "el baño",                        wortart: "sustantivo", beispiel: "Die Toiletten sind links.", beispielUe: "Los baños están a la izquierda." },
    { id: "bev0707", de: "der Eingang",        es: "la entrada",                     wortart: "sustantivo", beispiel: "Die Gäste warten am Eingang.", beispielUe: "Los clientes esperan en la entrada." },
    { id: "bev0708", de: "der Ausgang",        es: "la salida",                      wortart: "sustantivo", beispiel: "Der Ausgang ist hinten.", beispielUe: "La salida está atrás." },
    { id: "bev0709", de: "die Terrasse",       es: "la terraza",                     wortart: "sustantivo", beispiel: "Im Sommer ist die Terrasse offen.", beispielUe: "En verano la terraza está abierta." },
    { id: "bev0710", de: "der Umkleideraum",   es: "el vestidor (del personal)",     wortart: "sustantivo", beispiel: "Der Umkleideraum ist neben der Küche.", beispielUe: "El vestidor está al lado de la cocina." }
  ],
  saetze: [
    { id: "bes0701", de: "Wo ist das Lager?", es: "¿Dónde está el almacén?" },
    { id: "bes0702", de: "Das Lager ist im Keller, gleich links.", es: "El almacén está en el sótano, a la izquierda." },
    { id: "bes0703", de: "Das ist der Gastraum.", es: "Este es el comedor." },
    { id: "bes0704", de: "Die Toilette ist dort rechts.", es: "El baño está allí a la derecha." },
    { id: "bes0705", de: "Ist die Terrasse heute offen?", es: "¿Está abierta hoy la terraza?" }
  ],
  grammatik: {
    id: "beg07", titel: "Primeros pasos: der, die, das — ein, eine",
    erklaerung: `
      <p>Cada sustantivo alemán tiene un género: masculino (<em>der</em>), femenino
      (<em>die</em>) o neutro (<em>das</em>). No coincide siempre con el español:
      <em>la entrada</em> es <strong>der</strong> Eingang.</p>
      <table>
        <tr><th>Género</th><th>Determinado</th><th>Indeterminado</th><th>Ejemplo</th></tr>
        <tr><td>masculino</td><td><strong>der</strong></td><td><strong>ein</strong></td><td>der / ein Eingang</td></tr>
        <tr><td>femenino</td><td><strong>die</strong></td><td><strong>eine</strong></td><td>die / eine Theke</td></tr>
        <tr><td>neutro</td><td><strong>das</strong></td><td><strong>ein</strong></td><td>das / ein Lager</td></tr>
        <tr><td>plural</td><td><strong>die</strong></td><td>—</td><td>die Toiletten</td></tr>
      </table>
      <div class="merke">Aprende cada palabra <strong>con su artículo</strong>, como una sola
      unidad: no «Lager», sino «das Lager». Dos pistas que ayudan: muchas palabras en
      <em>-e</em> son femeninas (<em>die Theke, die Terrasse, die Toilette</em>); las que
      terminan en <em>-raum</em> son masculinas (<em>der Gastraum</em>).</div>
      <p>Para preguntar dónde está algo: <em>Wo ist der Ausgang?</em> — <em>Da hinten.</em></p>`,
    uebungen: [
      { id: "beg0701", satz: "___ Lager ist im Keller.", loesung: "Das", tipps: ["Das", "Der", "Die"], hinweis: "das Lager (neutro)", ue: "El almacén está en el sótano." },
      { id: "beg0702", satz: "___ Theke ist neu.", loesung: "Die", tipps: ["Die", "Der", "Das"], hinweis: "die Theke (femenino)", ue: "La barra es nueva." },
      { id: "beg0703", satz: "Wo ist ___ Ausgang?", loesung: "der", tipps: ["der", "die", "das"], hinweis: "der Ausgang (masculino)", ue: "¿Dónde está la salida?" },
      { id: "beg0704", satz: "Hier ist ___ Umkleideraum.", loesung: "ein", tipps: ["ein", "eine", "einen"], hinweis: "masculino, indeterminado: ein", ue: "Aquí hay un vestidor." },
      { id: "beg0705", satz: "Das ist ___ Terrasse für Raucher.", loesung: "eine", tipps: ["eine", "ein", "einen"], hinweis: "femenino, indeterminado: eine", ue: "Esta es una terraza para fumadores." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 8, niveau: "A1", thema: "Ropa de trabajo e higiene",
  vokabeln: [
    { id: "bev0801", de: "die Kochjacke",   es: "la chaqueta de cocinero",      wortart: "sustantivo", beispiel: "Die Kochjacke ist weiß.", beispielUe: "La chaqueta de cocinero es blanca." },
    { id: "bev0802", de: "die Hose",        es: "el pantalón",                  wortart: "sustantivo", beispiel: "Ich brauche eine schwarze Hose.", beispielUe: "Necesito un pantalón negro." },
    { id: "bev0803", de: "der Schuh",       es: "el zapato",                    wortart: "sustantivo", beispiel: "Die Schuhe müssen geschlossen sein.", beispielUe: "Los zapatos tienen que ser cerrados." },
    { id: "bev0804", de: "die Mütze",       es: "el gorro",                     wortart: "sustantivo", beispiel: "Ohne Mütze nicht in die Küche!", beispielUe: "¡Sin gorro no se entra en la cocina!" },
    { id: "bev0805", de: "das Haarnetz",    es: "la redecilla para el pelo",    wortart: "sustantivo", beispiel: "Lange Haare kommen ins Haarnetz.", beispielUe: "El pelo largo va en la redecilla." },
    { id: "bev0806", de: "die Seife",       es: "el jabón",                     wortart: "sustantivo", beispiel: "Die Seife ist am Waschbecken.", beispielUe: "El jabón está en el lavamanos." },
    { id: "bev0807", de: "das Papiertuch",  es: "la toalla de papel",           wortart: "sustantivo", beispiel: "Trockne die Hände mit einem Papiertuch.", beispielUe: "Sécate las manos con una toalla de papel." },
    { id: "bev0808", de: "die Hand",        es: "la mano",                      wortart: "sustantivo", beispiel: "Vor der Arbeit wasche ich die Hände.", beispielUe: "Antes del trabajo me lavo las manos." },
    { id: "bev0809", de: "sauber",          es: "limpio",                       wortart: "adjetivo", beispiel: "Die Kochjacke ist sauber.", beispielUe: "La chaqueta está limpia." },
    { id: "bev0810", de: "schmutzig",       es: "sucio",                        wortart: "adjetivo", beispiel: "Die Hose ist schmutzig.", beispielUe: "El pantalón está sucio." }
  ],
  saetze: [
    { id: "bes0801", de: "Hast du eine Kochjacke für mich?", es: "¿Tienes una chaqueta de cocinero para mí?" },
    { id: "bes0802", de: "Ich habe keine Mütze.", es: "No tengo gorro." },
    { id: "bes0803", de: "Die Seife ist leer.", es: "Se acabó el jabón." },
    { id: "bes0804", de: "Die Schürze ist schmutzig.", es: "El delantal está sucio." },
    { id: "bes0805", de: "Hier ist ein Haarnetz für dich.", es: "Aquí tienes una redecilla." }
  ],
  grammatik: {
    id: "beg08", titel: "Primeros pasos: haben, einen y kein",
    erklaerung: `
      <p>Con <strong>haben</strong> (tener), <em>brauchen</em> (necesitar) y muchos otros
      verbos, la cosa que tienes o necesitas va en <strong>acusativo</strong>. La buena
      noticia: solo cambia el masculino.</p>
      <table>
        <tr><th>Género</th><th>Nominativo (sujeto)</th><th>Acusativo (objeto)</th><th>Negación</th></tr>
        <tr><td>masculino</td><td>ein Schuh</td><td><strong>einen</strong> Schuh</td><td><strong>keinen</strong> Schuh</td></tr>
        <tr><td>femenino</td><td>eine Mütze</td><td>eine Mütze</td><td>keine Mütze</td></tr>
        <tr><td>neutro</td><td>ein Haarnetz</td><td>ein Haarnetz</td><td>kein Haarnetz</td></tr>
        <tr><td>plural</td><td>—</td><td>Handschuhe</td><td>keine Handschuhe</td></tr>
      </table>
      <div class="merke">Para decir que <strong>no tienes</strong> algo, el alemán no usa
      <em>nicht ein</em>, sino <strong>kein</strong>: <em>Ich habe keine Mütze.</em> = No
      tengo gorro.</div>
      <p>El verbo <em>haben</em>: ich <strong>habe</strong>, du <strong>hast</strong>,
      er/sie <strong>hat</strong>, wir <strong>haben</strong>, Sie <strong>haben</strong>.</p>`,
    uebungen: [
      { id: "beg0801", satz: "Ich habe ___ Kochjacke.", loesung: "eine", tipps: ["eine", "einen", "ein"], hinweis: "femenino: no cambia", ue: "Tengo una chaqueta de cocinero." },
      { id: "beg0802", satz: "Hast du ___ Haarnetz für mich?", loesung: "ein", tipps: ["ein", "einen", "eine"], hinweis: "neutro: no cambia", ue: "¿Tienes una redecilla para mí?" },
      { id: "beg0803", satz: "Er hat ___ Mütze.", loesung: "keine", tipps: ["keine", "kein", "keinen"], hinweis: "negar un femenino: keine", ue: "Él no tiene gorro." },
      { id: "beg0804", satz: "Ich habe ___ Papiertuch mehr.", loesung: "kein", tipps: ["kein", "keine", "keinen"], hinweis: "negar un neutro: kein", ue: "Ya no tengo toalla de papel." },
      { id: "beg0805", satz: "Wir brauchen ___ Kühlschrank.", loesung: "einen", tipps: ["einen", "ein", "eine"], hinweis: "masculino en acusativo: einen", ue: "Necesitamos un refrigerador." }
    ]
  }
});
