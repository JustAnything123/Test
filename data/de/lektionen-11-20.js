/* Día 11–20 · Nivel A1 · El pasado, el dativo y los primeros subordinados */

LEKTION('de', {
  tag: 11, niveau: "A1", thema: "Ayer",
  vokabeln: [
    { id: "v1101", de: "gestern",        es: "ayer",           wortart: "adverbio", beispiel: "Gestern habe ich gearbeitet.", beispielUe: "Ayer trabajé." },
    { id: "v1102", de: "kochen",         es: "cocinar",        wortart: "verbo", beispiel: "Ich habe Suppe gekocht.", beispielUe: "Cociné sopa." },
    { id: "v1103", de: "besuchen",       es: "visitar",        wortart: "verbo", beispiel: "Wir haben Oma besucht.", beispielUe: "Visitamos a la abuela." },
    { id: "v1104", de: "hören",          es: "oír, escuchar",  wortart: "verbo", beispiel: "Hast du das gehört?", beispielUe: "¿Escuchaste eso?" },
    { id: "v1105", de: "schreiben",      es: "escribir",       wortart: "verbo", beispiel: "Ich habe einen Brief geschrieben.", beispielUe: "Escribí una carta." },
    { id: "v1106", de: "vergessen",      es: "olvidar",        wortart: "verbo", beispiel: "Ich habe den Schlüssel vergessen.", beispielUe: "Olvidé la llave." },
    { id: "v1107", de: "finden",         es: "encontrar",      wortart: "verbo", beispiel: "Hast du es gefunden?", beispielUe: "¿Lo encontraste?" },
    { id: "v1108", de: "der Brief",      es: "la carta",       wortart: "sustantivo", beispiel: "Der Brief ist angekommen.", beispielUe: "La carta llegó." },
    { id: "v1109", de: "der Schlüssel",  es: "la llave",       wortart: "sustantivo", beispiel: "Wo ist mein Schlüssel?", beispielUe: "¿Dónde está mi llave?" },
    { id: "v1110", de: "letzte Woche",   es: "la semana pasada", wortart: "expresión", beispiel: "Letzte Woche war ich krank.", beispielUe: "La semana pasada estuve enfermo." }
  ],
  saetze: [
    { id: "s1101", de: "Gestern habe ich viel gearbeitet.",  es: "Ayer trabajé mucho." },
    { id: "s1102", de: "Wir haben einen Film gesehen.",      es: "Vimos una película." },
    { id: "s1103", de: "Hast du meinen Brief gelesen?",      es: "¿Leíste mi carta?" },
    { id: "s1104", de: "Sie hat den Schlüssel vergessen.",   es: "Ella olvidó la llave." },
    { id: "s1105", de: "Ich habe gestern nicht gekocht.",    es: "Ayer no cociné." }
  ],
  grammatik: {
    id: "g11", titel: "El Perfekt con haben",
    erklaerung: `
      <p>El alemán hablado usa casi siempre <strong>un solo tiempo pasado</strong>: el
      Perfekt. Corresponde tanto a «trabajé» como a «he trabajado» — no hay que elegir
      entre indefinido y pretérito perfecto como en español.</p>
      <div class="merke"><strong>Construcción:</strong> <em>haben</em> conjugado (posición 2)
      + participio <strong>al final</strong>.<br>
      <em>Ich <strong>habe</strong> gestern viel <strong>gearbeitet</strong>.</em></div>
      <p><strong>Cómo se forma el participio:</strong></p>
      <table>
        <tr><th>Tipo</th><th>Fórmula</th><th>Ejemplo</th></tr>
        <tr><td>regular</td><td><em>ge-</em> + raíz + <em>-t</em></td><td>machen → <em>ge</em>mach<em>t</em></td></tr>
        <tr><td>irregular</td><td><em>ge-</em> + raíz (a veces cambiada) + <em>-en</em></td><td>schreiben → <em>ge</em>schrieb<em>en</em></td></tr>
        <tr><td>verbo separable</td><td>prefijo + <em>ge</em> + …</td><td>einkaufen → ein<em>ge</em>kauft</td></tr>
        <tr><td>prefijo inseparable</td><td><strong>sin</strong> ge-</td><td>besuchen → besucht</td></tr>
        <tr><td>verbos en -ieren</td><td><strong>sin</strong> ge-</td><td>studieren → studiert</td></tr>
      </table>
      <div class="merke"><strong>Dos casos donde NO hay ge-:</strong> verbos con prefijo
      inseparable (<em>be-, ver-, er-, ent-, ge-, zer-</em>) y verbos terminados en
      <em>-ieren</em>.<br>
      <em>Ich habe <strong>bezahlt</strong>.</em> · <em>Wir haben <strong>telefoniert</strong>.</em></div>
      <p><strong>Participios irregulares frecuentes</strong> — hay que aprenderlos:</p>
      <table>
        <tr><td>essen → <em>gegessen</em></td><td>trinken → <em>getrunken</em></td></tr>
        <tr><td>lesen → <em>gelesen</em></td><td>schreiben → <em>geschrieben</em></td></tr>
        <tr><td>sehen → <em>gesehen</em></td><td>sprechen → <em>gesprochen</em></td></tr>
        <tr><td>nehmen → <em>genommen</em></td><td>finden → <em>gefunden</em></td></tr>
        <tr><td>helfen → <em>geholfen</em></td><td>vergessen → <em>vergessen</em></td></tr>
      </table>
      <p><strong>El paréntesis otra vez:</strong> igual que con los modales, el verbo
      conjugado va en posición 2 y la otra parte al final. Es el mismo principio.</p>`,
    uebungen: [
      { id: "g1101", satz: "Ich ___ gestern gearbeitet. (haben)", loesung: "habe", tipps: ["habe", "bin", "hat"], hinweis: "ich → ?", ue: "Ayer trabajé." },
      { id: "g1102", satz: "Wir haben einen Film ___ (sehen).", loesung: "gesehen", tipps: ["gesehen", "geseht", "sehen"], hinweis: "irregular", ue: "Vimos una película." },
      { id: "g1103", satz: "Sie hat den Schlüssel ___ (vergessen).", loesung: "vergessen", tipps: ["vergessen", "gevergessen", "vergesst"], hinweis: "ver- → sin ge-", ue: "Ella olvidó la llave." },
      { id: "g1104", satz: "Ich habe die Suppe ___ (kochen).", loesung: "gekocht", tipps: ["gekocht", "kochen", "gekochen"], hinweis: "regular", ue: "Cociné la sopa." },
      { id: "g1105", satz: "Wir haben gestern ___ (telefonieren).", loesung: "telefoniert", tipps: ["telefoniert", "getelefoniert", "telefonieren"], hinweis: "-ieren → sin ge-", ue: "Ayer hablamos por teléfono." }
    ]
  }
});

LEKTION('de', {
  tag: 12, niveau: "A1", thema: "Movimiento y cambio",
  vokabeln: [
    { id: "v1201", de: "gehen",          es: "ir a pie",       wortart: "verbo", beispiel: "Ich bin nach Hause gegangen.", beispielUe: "Me fui a casa." },
    { id: "v1202", de: "bleiben",        es: "quedarse",       wortart: "verbo", beispiel: "Wir sind zu Hause geblieben.", beispielUe: "Nos quedamos en casa." },
    { id: "v1203", de: "fliegen",        es: "volar",          wortart: "verbo", beispiel: "Sie ist nach Madrid geflogen.", beispielUe: "Ella voló a Madrid." },
    { id: "v1204", de: "ankommen",       es: "llegar",         wortart: "verbo separable", beispiel: "Der Zug ist angekommen.", beispielUe: "El tren llegó." },
    { id: "v1205", de: "passieren",      es: "pasar, ocurrir", wortart: "verbo", beispiel: "Was ist passiert?", beispielUe: "¿Qué pasó?" },
    { id: "v1206", de: "einschlafen",    es: "quedarse dormido", wortart: "verbo separable", beispiel: "Ich bin früh eingeschlafen.", beispielUe: "Me dormí temprano." },
    { id: "v1207", de: "der Zug",        es: "el tren",        wortart: "sustantivo", beispiel: "Der Zug hat Verspätung.", beispielUe: "El tren tiene retraso." },
    { id: "v1208", de: "die Reise",      es: "el viaje",       wortart: "sustantivo", beispiel: "Die Reise war lang.", beispielUe: "El viaje fue largo." },
    { id: "v1209", de: "der Flughafen",  es: "el aeropuerto",  wortart: "sustantivo", beispiel: "Wir sind am Flughafen.", beispielUe: "Estamos en el aeropuerto." },
    { id: "v1210", de: "letztes Jahr",   es: "el año pasado",  wortart: "expresión", beispiel: "Letztes Jahr war ich in Peru.", beispielUe: "El año pasado estuve en Perú." }
  ],
  saetze: [
    { id: "s1201", de: "Ich bin gestern nach Hause gegangen.", es: "Ayer me fui a casa." },
    { id: "s1202", de: "Wir sind letztes Jahr nach Peru geflogen.", es: "El año pasado volamos a Perú." },
    { id: "s1203", de: "Der Zug ist pünktlich angekommen.",  es: "El tren llegó puntual." },
    { id: "s1204", de: "Sie ist zu Hause geblieben.",        es: "Ella se quedó en casa." },
    { id: "s1205", de: "Was ist gestern passiert?",          es: "¿Qué pasó ayer?" }
  ],
  grammatik: {
    id: "g12", titel: "El Perfekt con sein",
    erklaerung: `
      <p>Algunos verbos no forman el Perfekt con <em>haben</em>, sino con <em>sein</em>.
      En español esto no existe — allí todo va con <em>haber</em>. Pero la regla alemana es
      clara.</p>
      <div class="merke"><strong>Se usa sein con verbos que expresan:</strong><br>
      1. <strong>movimiento de un lugar a otro</strong>: gehen, fahren, fliegen, kommen,
      laufen, reisen<br>
      2. <strong>cambio de estado</strong>: aufstehen, einschlafen, aufwachen, sterben,
      werden<br>
      3. <strong>tres excepciones que hay que memorizar</strong>: <em>sein</em>,
      <em>bleiben</em>, <em>passieren</em></div>
      <table>
        <tr><th>con haben</th><th>con sein</th></tr>
        <tr><td>Ich <em>habe</em> gearbeitet.</td><td>Ich <em>bin</em> gegangen.</td></tr>
        <tr><td>Ich <em>habe</em> gegessen.</td><td>Ich <em>bin</em> gekommen.</td></tr>
        <tr><td>Ich <em>habe</em> geschlafen.</td><td>Ich <em>bin</em> eingeschlafen.</td></tr>
      </table>
      <p>Fíjate en la última fila: <em>schlafen</em> (dormir, un estado) va con
      <em>haben</em>; <em>einschlafen</em> (quedarse dormido, un cambio) va con
      <em>sein</em>.</p>
      <div class="merke"><strong>La prueba rápida:</strong> ¿el verbo tiene un objeto
      directo? Entonces <em>haben</em>, seguro. <em>Ich habe ein Buch gelesen.</em><br>
      ¿Describe un desplazamiento o un cambio, sin objeto? Probablemente <em>sein</em>.</div>
      <p><strong>Participios irregulares con sein:</strong></p>
      <table>
        <tr><td>gehen → <em>gegangen</em></td><td>kommen → <em>gekommen</em></td></tr>
        <tr><td>fahren → <em>gefahren</em></td><td>fliegen → <em>geflogen</em></td></tr>
        <tr><td>bleiben → <em>geblieben</em></td><td>sein → <em>gewesen</em></td></tr>
        <tr><td>werden → <em>geworden</em></td><td>laufen → <em>gelaufen</em></td></tr>
      </table>
      <div class="merke"><strong>Un detalle útil:</strong> en el alemán hablado del día a día
      se dice <em>Ich <strong>war</strong> in Berlin</em> (Präteritum) más que
      <em>Ich bin in Berlin gewesen</em>. Con <em>sein</em> y <em>haben</em> el Präteritum
      gana — lo veremos el día 37.</div>`,
    uebungen: [
      { id: "g1201", satz: "Ich ___ nach Hause gegangen.", loesung: "bin", tipps: ["bin", "habe", "ist"], hinweis: "movimiento → sein", ue: "Me fui a casa." },
      { id: "g1202", satz: "Wir ___ einen Film gesehen.", loesung: "haben", tipps: ["haben", "sind", "hat"], hinweis: "con objeto → haben", ue: "Vimos una película." },
      { id: "g1203", satz: "Der Zug ___ pünktlich angekommen.", loesung: "ist", tipps: ["ist", "hat", "sind"], hinweis: "movimiento → sein", ue: "El tren llegó puntual." },
      { id: "g1204", satz: "Sie ___ zu Hause geblieben.", loesung: "ist", tipps: ["ist", "hat", "war"], hinweis: "bleiben → excepción", ue: "Ella se quedó en casa." },
      { id: "g1205", satz: "Ich bin früh ___ (einschlafen).", loesung: "eingeschlafen", tipps: ["eingeschlafen", "geeinschlafen", "einschlafen"], hinweis: "separable: ge- en medio", ue: "Me dormí temprano." }
    ]
  }
});

LEKTION('de', {
  tag: 13, niveau: "A1", thema: "La hora y los números",
  vokabeln: [
    { id: "v1301", de: "die Stunde",     es: "la hora",        wortart: "sustantivo", beispiel: "Der Kurs dauert zwei Stunden.", beispielUe: "El curso dura dos horas." },
    { id: "v1302", de: "die Minute",     es: "el minuto",      wortart: "sustantivo", beispiel: "Warte fünf Minuten.", beispielUe: "Espera cinco minutos." },
    { id: "v1303", de: "halb",           es: "medio",          wortart: "adjetivo", beispiel: "Es ist halb acht.", beispielUe: "Son las siete y media." },
    { id: "v1304", de: "das Viertel",    es: "el cuarto",      wortart: "sustantivo", beispiel: "Viertel nach drei.", beispielUe: "Las tres y cuarto." },
    { id: "v1305", de: "der Termin",     es: "la cita",        wortart: "sustantivo", beispiel: "Ich habe einen Termin.", beispielUe: "Tengo una cita." },
    { id: "v1306", de: "früh",           es: "temprano",       wortart: "adjetivo", beispiel: "Es ist noch früh.", beispielUe: "Todavía es temprano." },
    { id: "v1307", de: "der Montag",     es: "el lunes",       wortart: "sustantivo", beispiel: "Am Montag arbeite ich.", beispielUe: "El lunes trabajo." },
    { id: "v1308", de: "das Wochenende", es: "el fin de semana", wortart: "sustantivo", beispiel: "Am Wochenende schlafe ich lang.", beispielUe: "El fin de semana duermo mucho." },
    { id: "v1309", de: "der Monat",      es: "el mes",         wortart: "sustantivo", beispiel: "Nächsten Monat komme ich.", beispielUe: "El mes que viene vengo." },
    { id: "v1310", de: "pünktlich",      es: "puntual",        wortart: "adjetivo", beispiel: "Sei bitte pünktlich!", beispielUe: "¡Sé puntual, por favor!" }
  ],
  saetze: [
    { id: "s1301", de: "Es ist halb neun.",                  es: "Son las ocho y media." },
    { id: "s1302", de: "Der Kurs beginnt um Viertel nach zehn.", es: "El curso empieza a las diez y cuarto." },
    { id: "s1303", de: "Am Montag habe ich einen Termin.",   es: "El lunes tengo una cita." },
    { id: "s1304", de: "Ich komme um zwanzig vor sechs.",    es: "Vengo a las seis menos veinte." },
    { id: "s1305", de: "Im August fahren wir nach Spanien.", es: "En agosto vamos a España." }
  ],
  grammatik: {
    id: "g13", titel: "Decir la hora y las preposiciones de tiempo",
    erklaerung: `
      <p>La hora alemana tiene una particularidad que confunde a todo hispanohablante:
      <em>halb</em> mira <strong>hacia adelante</strong>, no hacia atrás.</p>
      <div class="merke"><strong>halb acht = las siete y media</strong>, no las ocho y media.<br>
      El alemán dice «media hora <em>hacia</em> las ocho», el español «las siete <em>más</em>
      media». Es el error número uno — y puede costarte una cita.</div>
      <table>
        <tr><th>Reloj</th><th>Alemán</th><th>Español</th></tr>
        <tr><td>7:00</td><td>sieben Uhr</td><td>las siete</td></tr>
        <tr><td>7:15</td><td>Viertel nach sieben</td><td>las siete y cuarto</td></tr>
        <tr><td>7:30</td><td><em>halb acht</em></td><td>las siete y media</td></tr>
        <tr><td>7:45</td><td>Viertel vor acht</td><td>las ocho menos cuarto</td></tr>
        <tr><td>7:20</td><td>zwanzig nach sieben</td><td>las siete y veinte</td></tr>
        <tr><td>7:40</td><td>zwanzig vor acht</td><td>las ocho menos veinte</td></tr>
      </table>
      <p><strong>Las preposiciones de tiempo</strong> — hay que aprenderlas de memoria:</p>
      <table>
        <tr><th>Preposición</th><th>Se usa con</th><th>Ejemplo</th></tr>
        <tr><td><em>um</em></td><td>hora exacta</td><td><em>um</em> acht Uhr</td></tr>
        <tr><td><em>am</em></td><td>días y partes del día</td><td><em>am</em> Montag, <em>am</em> Abend</td></tr>
        <tr><td><em>im</em></td><td>meses y estaciones</td><td><em>im</em> August, <em>im</em> Sommer</td></tr>
        <tr><td>(sin preposición)</td><td>años</td><td>Ich bin 1990 geboren.</td></tr>
        <tr><td><em>von … bis</em></td><td>periodo</td><td><em>von</em> neun <em>bis</em> fünf</td></tr>
        <tr><td><em>seit</em></td><td>desde (y sigue)</td><td><em>seit</em> drei Jahren</td></tr>
      </table>
      <div class="merke"><strong>Una excepción notable:</strong> <em>in der Nacht</em>
      (femenino), no <s>am Nacht</s>. Y el año va <strong>sin preposición</strong>:
      <em>Ich bin 1985 geboren</em> — nunca <s>in 1985</s>, ese es un error típico
      influido por el inglés.</div>`,
    uebungen: [
      { id: "g1301", satz: "Es ist ___ acht. (7:30)", loesung: "halb", tipps: ["halb", "viertel", "zwanzig"], hinweis: "mira hacia adelante", ue: "Son las siete y media." },
      { id: "g1302", satz: "Der Kurs beginnt ___ neun Uhr.", loesung: "um", tipps: ["um", "am", "im"], hinweis: "hora exacta", ue: "El curso empieza a las nueve." },
      { id: "g1303", satz: "___ Montag habe ich Zeit.", loesung: "Am", tipps: ["Am", "Im", "Um"], hinweis: "día de la semana", ue: "El lunes tengo tiempo." },
      { id: "g1304", satz: "___ August fahren wir weg.", loesung: "Im", tipps: ["Im", "Am", "Um"], hinweis: "mes", ue: "En agosto nos vamos." },
      { id: "g1305", satz: "Viertel ___ acht (7:45)", loesung: "vor", tipps: ["vor", "nach", "halb"], hinweis: "antes de las ocho", ue: "Las ocho menos cuarto." }
    ]
  }
});

LEKTION('de', {
  tag: 14, niveau: "A1", thema: "Para quién y con qué",
  vokabeln: [
    { id: "v1401", de: "für",            es: "para",           wortart: "preposición", beispiel: "Das ist für dich.", beispielUe: "Esto es para ti." },
    { id: "v1402", de: "ohne",           es: "sin",            wortart: "preposición", beispiel: "Ohne dich gehe ich nicht.", beispielUe: "Sin ti no voy." },
    { id: "v1403", de: "durch",          es: "por, a través de", wortart: "preposición", beispiel: "Wir gehen durch den Park.", beispielUe: "Vamos por el parque." },
    { id: "v1404", de: "gegen",          es: "contra",         wortart: "preposición", beispiel: "Ich habe nichts gegen ihn.", beispielUe: "No tengo nada contra él." },
    { id: "v1405", de: "um",             es: "alrededor de",   wortart: "preposición", beispiel: "Wir sitzen um den Tisch.", beispielUe: "Estamos sentados alrededor de la mesa." },
    { id: "v1406", de: "das Geschenk",   es: "el regalo",      wortart: "sustantivo", beispiel: "Das Geschenk ist für dich.", beispielUe: "El regalo es para ti." },
    { id: "v1407", de: "der Park",       es: "el parque",      wortart: "sustantivo", beispiel: "Der Park ist schön.", beispielUe: "El parque es bonito." },
    { id: "v1408", de: "der Tisch",      es: "la mesa",        wortart: "sustantivo", beispiel: "Der Tisch ist groß.", beispielUe: "La mesa es grande." },
    { id: "v1409", de: "die Karte",      es: "la tarjeta",     wortart: "sustantivo", beispiel: "Ich schreibe eine Karte.", beispielUe: "Escribo una tarjeta." },
    { id: "v1410", de: "bringen",        es: "traer",          wortart: "verbo", beispiel: "Bring bitte das Buch mit.", beispielUe: "Trae el libro, por favor." }
  ],
  saetze: [
    { id: "s1401", de: "Das Geschenk ist für meinen Bruder.", es: "El regalo es para mi hermano." },
    { id: "s1402", de: "Ohne meinen Schlüssel kann ich nicht rein.", es: "Sin mi llave no puedo entrar." },
    { id: "s1403", de: "Wir gehen durch den Park nach Hause.", es: "Vamos a casa por el parque." },
    { id: "s1404", de: "Ich habe nichts gegen diese Idee.",   es: "No tengo nada en contra de esta idea." },
    { id: "s1405", de: "Die Kinder sitzen um den Tisch.",     es: "Los niños están sentados alrededor de la mesa." }
  ],
  grammatik: {
    id: "g14", titel: "Preposiciones con acusativo",
    erklaerung: `
      <p>En alemán cada preposición «manda» un caso determinado. Hay cinco que exigen
      <strong>siempre acusativo</strong>, sin excepción.</p>
      <div class="merke"><strong>Las cinco, en un truco de memoria:</strong>
      <strong>F</strong>ür — <strong>U</strong>m — <strong>G</strong>egen —
      <strong>O</strong>hne — <strong>D</strong>urch<br>
      Se recuerdan como <strong>FUGOD</strong>. Cinco palabras y ya no vuelves a dudar.</div>
      <table>
        <tr><th>Preposición</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td><em>für</em></td><td>para</td><td>Das ist für <em>den</em> Lehrer.</td></tr>
        <tr><td><em>um</em></td><td>alrededor de</td><td>Wir sitzen um <em>den</em> Tisch.</td></tr>
        <tr><td><em>gegen</em></td><td>contra</td><td>Ich bin gegen <em>den</em> Plan.</td></tr>
        <tr><td><em>ohne</em></td><td>sin</td><td>Ohne <em>meinen</em> Mantel gehe ich nicht.</td></tr>
        <tr><td><em>durch</em></td><td>por, a través de</td><td>Durch <em>den</em> Park.</td></tr>
      </table>
      <p><strong>Recuerda:</strong> solo el masculino cambia (<em>der</em> → <em>den</em>,
      <em>ein</em> → <em>einen</em>). Femenino, neutro y plural quedan igual — así que en
      la práctica solo tienes que fijarte en las palabras masculinas.</p>
      <div class="merke"><strong>Detalle:</strong> <em>ohne</em> se usa
      <strong>sin artículo</strong> muy a menudo, igual que en español:<br>
      <em>ohne Zucker</em> (sin azúcar), <em>ohne Auto</em> (sin carro)</div>
      <p><strong>Contracciones habituales:</strong> <em>für das</em> → <em>fürs</em>,
      <em>durch das</em> → <em>durchs</em>, <em>um das</em> → <em>ums</em>.
      Son coloquiales pero completamente normales.</p>`,
    uebungen: [
      { id: "g1401", satz: "Das Geschenk ist für ___ Bruder. (mein)", loesung: "meinen", tipps: ["meinen", "mein", "meine"], hinweis: "für → acusativo", ue: "El regalo es para mi hermano." },
      { id: "g1402", satz: "Wir gehen durch ___ Park. (der)", loesung: "den", tipps: ["den", "der", "dem"], hinweis: "durch → acusativo", ue: "Vamos por el parque." },
      { id: "g1403", satz: "Ohne ___ Schlüssel geht es nicht. (mein)", loesung: "meinen", tipps: ["meinen", "mein", "meinem"], hinweis: "ohne → acusativo", ue: "Sin mi llave no funciona." },
      { id: "g1404", satz: "Ich habe nichts gegen ___ Idee. (diese)", loesung: "diese", tipps: ["diese", "dieser", "diesen"], hinweis: "femenino no cambia", ue: "No tengo nada contra esta idea." },
      { id: "g1405", satz: "Die Kinder sitzen um ___ Tisch. (der)", loesung: "den", tipps: ["den", "dem", "der"], hinweis: "um → acusativo", ue: "Los niños están alrededor de la mesa." }
    ]
  }
});

LEKTION('de', {
  tag: 15, niveau: "A1", thema: "Dónde estoy",
  vokabeln: [
    { id: "v1501", de: "bei",            es: "en casa de, cerca de", wortart: "preposición", beispiel: "Ich wohne bei meinen Eltern.", beispielUe: "Vivo en casa de mis padres." },
    { id: "v1502", de: "mit",            es: "con",            wortart: "preposición", beispiel: "Ich fahre mit dem Bus.", beispielUe: "Voy en autobús." },
    { id: "v1503", de: "nach",           es: "a, después de",  wortart: "preposición", beispiel: "Wir fahren nach Berlin.", beispielUe: "Vamos a Berlín." },
    { id: "v1504", de: "von",            es: "de",             wortart: "preposición", beispiel: "Das ist von meiner Mutter.", beispielUe: "Esto es de mi madre." },
    { id: "v1505", de: "zu",             es: "a, hacia",       wortart: "preposición", beispiel: "Ich gehe zum Arzt.", beispielUe: "Voy al médico." },
    { id: "v1506", de: "aus",            es: "de (origen)",    wortart: "preposición", beispiel: "Sie kommt aus Bolivien.", beispielUe: "Ella viene de Bolivia." },
    { id: "v1507", de: "seit",           es: "desde hace",     wortart: "preposición", beispiel: "Ich lerne seit einem Jahr.", beispielUe: "Aprendo desde hace un año." },
    { id: "v1508", de: "der Arzt",       es: "el médico",      wortart: "sustantivo", beispiel: "Der Arzt kommt gleich.", beispielUe: "El médico viene enseguida." },
    { id: "v1509", de: "die Post",       es: "el correo",      wortart: "sustantivo", beispiel: "Ich gehe zur Post.", beispielUe: "Voy al correo." },
    { id: "v1510", de: "der Bahnhof",    es: "la estación",    wortart: "sustantivo", beispiel: "Der Bahnhof ist dort.", beispielUe: "La estación está allá." }
  ],
  saetze: [
    { id: "s1501", de: "Ich fahre mit dem Bus zur Arbeit.",  es: "Voy al trabajo en autobús." },
    { id: "s1502", de: "Sie wohnt bei ihrer Schwester.",     es: "Ella vive con su hermana." },
    { id: "s1503", de: "Nach dem Essen gehen wir spazieren.", es: "Después de comer salimos a pasear." },
    { id: "s1504", de: "Das Buch ist von meinem Vater.",     es: "El libro es de mi padre." },
    { id: "s1505", de: "Ich lerne seit einem Jahr Deutsch.", es: "Aprendo alemán desde hace un año." }
  ],
  grammatik: {
    id: "g15", titel: "Preposiciones con dativo",
    erklaerung: `
      <p>El <strong>dativo</strong> es el tercer caso. Marca el objeto indirecto — y también
      aparece obligatoriamente después de ciertas preposiciones.</p>
      <table>
        <tr><th></th><th>Nominativo</th><th>Acusativo</th><th>Dativo</th></tr>
        <tr><td>masculino</td><td>der / ein</td><td>den / einen</td><td><em>dem</em> / <em>einem</em></td></tr>
        <tr><td>femenino</td><td>die / eine</td><td>die / eine</td><td><em>der</em> / <em>einer</em></td></tr>
        <tr><td>neutro</td><td>das / ein</td><td>das / ein</td><td><em>dem</em> / <em>einem</em></td></tr>
        <tr><td>plural</td><td>die</td><td>die</td><td><em>den</em> + <em>-n</em></td></tr>
      </table>
      <div class="merke"><strong>Trampa del femenino:</strong> <em>der</em> en dativo es
      <strong>femenino</strong>, no masculino. <em>mit <strong>der</strong> Frau</em>. Esto
      confunde al principio: la misma palabra <em>der</em> significa cosas distintas según
      el caso.</div>
      <div class="merke"><strong>Las preposiciones de dativo — otro truco:</strong><br>
      <strong>Mit — nach — aus — bei — seit — von — zu</strong><br>
      Muchos estudiantes las cantan con la melodía de una canción infantil. Suena tonto,
      pero funciona: en tres días las tienes.</div>
      <table>
        <tr><td><em>mit</em></td><td>con</td><td>mit <em>dem</em> Bus</td></tr>
        <tr><td><em>nach</td><td>a (ciudades/países), después de</td><td>nach Berlin, nach <em>dem</em> Essen</td></tr>
        <tr><td><em>aus</em></td><td>de (origen, material)</td><td>aus <em>der</em> Schweiz</td></tr>
        <tr><td><em>bei</em></td><td>en casa de, en (empresa)</td><td>bei <em>meinen</em> Eltern</td></tr>
        <tr><td><em>seit</em></td><td>desde hace</td><td>seit <em>einem</em> Jahr</td></tr>
        <tr><td><em>von</em></td><td>de (procedencia, autor)</td><td>von <em>meinem</em> Vater</td></tr>
        <tr><td><em>zu</em></td><td>a (personas, lugares con función)</td><td>zu <em>dem</em> Arzt</td></tr>
      </table>
      <p><strong>Contracciones obligatorias en la práctica:</strong>
      <em>zu dem</em> → <em>zum</em> · <em>zu der</em> → <em>zur</em> ·
      <em>bei dem</em> → <em>beim</em> · <em>von dem</em> → <em>vom</em></p>
      <div class="merke"><strong>nach o zu:</strong> <em>nach</em> con ciudades y países sin
      artículo (<em>nach Berlin, nach Chile</em>); <em>zu</em> con personas y lugares
      concretos (<em>zum Arzt, zur Post</em>). Y una excepción fija:
      <em><strong>nach</strong> Hause</em> (a casa).</div>`,
    uebungen: [
      { id: "g1501", satz: "Ich fahre mit ___ Bus. (der)", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "mit → dativo", ue: "Voy en autobús." },
      { id: "g1502", satz: "Sie wohnt bei ___ Schwester. (ihre)", loesung: "ihrer", tipps: ["ihrer", "ihre", "ihren"], hinweis: "femenino dativo", ue: "Vive con su hermana." },
      { id: "g1503", satz: "Ich lerne seit ___ Jahr Deutsch. (ein)", loesung: "einem", tipps: ["einem", "ein", "einen"], hinweis: "das Jahr → dativo", ue: "Aprendo alemán desde hace un año." },
      { id: "g1504", satz: "Ich gehe ___ Arzt. (zu + dem)", loesung: "zum", tipps: ["zum", "zur", "zu dem"], hinweis: "contracción", ue: "Voy al médico." },
      { id: "g1505", satz: "Ich gehe ___ Post. (zu + der)", loesung: "zur", tipps: ["zur", "zum", "zu die"], hinweis: "die Post → femenino", ue: "Voy al correo." }
    ]
  }
});

LEKTION('de', {
  tag: 16, niveau: "A1", thema: "Ayudar y dar",
  vokabeln: [
    { id: "v1601", de: "gefallen",       es: "gustar",         wortart: "verbo", beispiel: "Das Buch gefällt mir.", beispielUe: "El libro me gusta." },
    { id: "v1602", de: "danken",         es: "agradecer",      wortart: "verbo", beispiel: "Ich danke dir sehr.", beispielUe: "Te agradezco mucho." },
    { id: "v1603", de: "gehören",        es: "pertenecer",     wortart: "verbo", beispiel: "Das Buch gehört mir.", beispielUe: "El libro me pertenece." },
    { id: "v1604", de: "antworten",      es: "responder",      wortart: "verbo", beispiel: "Antworte mir bitte.", beispielUe: "Respóndeme, por favor." },
    { id: "v1605", de: "schmecken",      es: "saber (a gusto)", wortart: "verbo", beispiel: "Der Kuchen schmeckt mir.", beispielUe: "El pastel me gusta." },
    { id: "v1606", de: "zeigen",         es: "mostrar",        wortart: "verbo", beispiel: "Zeig mir das Foto!", beispielUe: "¡Muéstrame la foto!" },
    { id: "v1607", de: "erklären",       es: "explicar",       wortart: "verbo", beispiel: "Er erklärt uns die Regel.", beispielUe: "Él nos explica la regla." },
    { id: "v1608", de: "leihen",         es: "prestar",        wortart: "verbo", beispiel: "Leihst du mir zehn Euro?", beispielUe: "¿Me prestas diez euros?" },
    { id: "v1609", de: "das Foto",       es: "la foto",        wortart: "sustantivo", beispiel: "Das Foto ist schön.", beispielUe: "La foto es bonita." },
    { id: "v1610", de: "der Kuchen",     es: "el pastel",      wortart: "sustantivo", beispiel: "Der Kuchen ist lecker.", beispielUe: "El pastel está rico." }
  ],
  saetze: [
    { id: "s1601", de: "Kannst du mir bitte helfen?",        es: "¿Puedes ayudarme, por favor?" },
    { id: "s1602", de: "Das Buch gefällt mir sehr gut.",     es: "El libro me gusta mucho." },
    { id: "s1603", de: "Ich gebe ihm das Geld morgen.",      es: "Le doy el dinero mañana." },
    { id: "s1604", de: "Zeigst du uns die Fotos?",           es: "¿Nos muestras las fotos?" },
    { id: "s1605", de: "Der Kuchen schmeckt mir nicht.",     es: "El pastel no me gusta." }
  ],
  grammatik: {
    id: "g16", titel: "Pronombres en dativo y verbos que lo exigen",
    erklaerung: `
      <p>Ya conoces el dativo después de preposiciones. Ahora su otro uso: el
      <strong>objeto indirecto</strong> — «a quién».</p>
      <table>
        <tr><th>Persona</th><th>Nominativo</th><th>Acusativo</th><th>Dativo</th></tr>
        <tr><td>yo</td><td>ich</td><td>mich</td><td><em>mir</em></td></tr>
        <tr><td>tú</td><td>du</td><td>dich</td><td><em>dir</em></td></tr>
        <tr><td>él</td><td>er</td><td>ihn</td><td><em>ihm</em></td></tr>
        <tr><td>ella</td><td>sie</td><td>sie</td><td><em>ihr</em></td></tr>
        <tr><td>ello</td><td>es</td><td>es</td><td><em>ihm</em></td></tr>
        <tr><td>nosotros</td><td>wir</td><td>uns</td><td><em>uns</em></td></tr>
        <tr><td>ustedes</td><td>ihr</td><td>euch</td><td><em>euch</em></td></tr>
        <tr><td>ellos</td><td>sie</td><td>sie</td><td><em>ihnen</em></td></tr>
        <tr><td>usted</td><td>Sie</td><td>Sie</td><td><em>Ihnen</em></td></tr>
      </table>
      <div class="merke"><strong>Verbos que SIEMPRE llevan dativo</strong> — no tienen
      objeto directo, solo indirecto:<br>
      <em>helfen</em> (ayudar) · <em>danken</em> (agradecer) · <em>gefallen</em> (gustar) ·
      <em>gehören</em> (pertenecer) · <em>antworten</em> (responder) ·
      <em>schmecken</em> (saber bien) · <em>passen</em> (quedar bien) ·
      <em>folgen</em> (seguir) · <em>glauben</em> (creer a alguien)</div>
      <p><strong>Ojo, aquí se equivocan casi todos los hispanohablantes:</strong></p>
      <ul>
        <li><em>Ich helfe <strong>dir</strong>.</em> — «Te ayudo». En español es objeto
            directo; en alemán, dativo. Nunca <s>Ich helfe dich</s>.</li>
        <li><em>Ich danke <strong>Ihnen</strong>.</em> — Le agradezco.</li>
      </ul>
      <div class="merke"><strong>gefallen funciona como «gustar»:</strong> lo que gusta es
      el sujeto, la persona va en dativo.<br>
      <em>Das Buch gefällt <strong>mir</strong>.</em> — El libro me gusta.<br>
      <em>Die Bücher gefallen <strong>mir</strong>.</em> — Los libros me gustan.<br>
      Igual que en español. Aquí sí coinciden los dos idiomas.</div>
      <p><strong>Con dos objetos</strong> (dar algo a alguien) el orden es:
      <strong>primero el dativo, después el acusativo</strong>.<br>
      <em>Ich gebe <strong>dir</strong> (dativo) <strong>das Buch</strong> (acusativo).</em></p>`,
    uebungen: [
      { id: "g1601", satz: "Kannst du ___ helfen? (a mí)", loesung: "mir", tipps: ["mir", "mich", "ich"], hinweis: "helfen → dativo", ue: "¿Puedes ayudarme?" },
      { id: "g1602", satz: "Das Buch gefällt ___ sehr. (a mí)", loesung: "mir", tipps: ["mir", "mich", "ich"], hinweis: "gefallen → dativo", ue: "El libro me gusta mucho." },
      { id: "g1603", satz: "Ich gebe ___ das Geld. (a él)", loesung: "ihm", tipps: ["ihm", "ihn", "er"], hinweis: "objeto indirecto", ue: "Le doy el dinero a él." },
      { id: "g1604", satz: "Zeigst du ___ die Fotos? (a nosotros)", loesung: "uns", tipps: ["uns", "wir", "unser"], hinweis: "dativo plural", ue: "¿Nos muestras las fotos?" },
      { id: "g1605", satz: "Ich danke ___ herzlich. (a usted)", loesung: "Ihnen", tipps: ["Ihnen", "Sie", "ihnen"], hinweis: "formal con mayúscula", ue: "Le agradezco de corazón." }
    ]
  }
});

LEKTION('de', {
  tag: 17, niveau: "A1", thema: "Dar instrucciones",
  vokabeln: [
    { id: "v1701", de: "öffnen",         es: "abrir",          wortart: "verbo", beispiel: "Öffne bitte das Fenster.", beispielUe: "Abre la ventana, por favor." },
    { id: "v1702", de: "schließen",      es: "cerrar",         wortart: "verbo", beispiel: "Schließ die Tür!", beispielUe: "¡Cierra la puerta!" },
    { id: "v1703", de: "sagen",          es: "decir",          wortart: "verbo", beispiel: "Sag mir die Wahrheit.", beispielUe: "Dime la verdad." },
    { id: "v1704", de: "das Fenster",    es: "la ventana",     wortart: "sustantivo", beispiel: "Das Fenster ist offen.", beispielUe: "La ventana está abierta." },
    { id: "v1705", de: "die Tür",        es: "la puerta",      wortart: "sustantivo", beispiel: "Die Tür ist zu.", beispielUe: "La puerta está cerrada." },
    { id: "v1706", de: "leise",          es: "en voz baja",    wortart: "adjetivo", beispiel: "Sprich bitte leise.", beispielUe: "Habla en voz baja, por favor." },
    { id: "v1707", de: "vorsichtig",     es: "cuidadoso",      wortart: "adjetivo", beispiel: "Sei vorsichtig!", beispielUe: "¡Ten cuidado!" },
    { id: "v1708", de: "die Wahrheit",   es: "la verdad",      wortart: "sustantivo", beispiel: "Das ist die Wahrheit.", beispielUe: "Esa es la verdad." },
    { id: "v1709", de: "wiederholen",    es: "repetir",        wortart: "verbo", beispiel: "Wiederholen Sie bitte!", beispielUe: "¡Repita, por favor!" },
    { id: "v1710", de: "langsam",        es: "despacio",       wortart: "adjetivo", beispiel: "Sprich bitte langsam.", beispielUe: "Habla despacio, por favor." }
  ],
  saetze: [
    { id: "s1701", de: "Mach bitte das Fenster zu!",         es: "¡Cierra la ventana, por favor!" },
    { id: "s1702", de: "Sprechen Sie bitte langsamer!",      es: "¡Hable más despacio, por favor!" },
    { id: "s1703", de: "Kommt herein und setzt euch!",       es: "¡Entren y siéntense!" },
    { id: "s1704", de: "Sei bitte vorsichtig!",              es: "¡Ten cuidado, por favor!" },
    { id: "s1705", de: "Hilf mir mal kurz!",                 es: "¡Ayúdame un momento!" }
  ],
  grammatik: {
    id: "g17", titel: "El imperativo",
    erklaerung: `
      <p>El alemán tiene tres formas de imperativo, según a quién te dirijas.</p>
      <table>
        <tr><th>Persona</th><th>Cómo se forma</th><th>Ejemplo</th></tr>
        <tr><td><em>du</em></td><td>raíz sola, sin pronombre</td><td><em>Komm!</em> · <em>Mach das!</em></td></tr>
        <tr><td><em>ihr</em></td><td>como el presente, sin pronombre</td><td><em>Kommt!</em> · <em>Macht das!</em></td></tr>
        <tr><td><em>Sie</em></td><td>infinitivo + <em>Sie</em></td><td><em>Kommen Sie!</em></td></tr>
      </table>
      <div class="merke"><strong>La forma <em>du</em> es la más sencilla:</strong> toma el
      presente de <em>du</em> y quita la <em>-st</em>.<br>
      <em>du komm<s>st</s></em> → <em><strong>Komm!</strong></em><br>
      <em>du geh<s>st</s></em> → <em><strong>Geh!</strong></em></div>
      <p><strong>Cuidado con los verbos que cambian de vocal</strong> (día 6):</p>
      <ul>
        <li><strong>e → i sí se mantiene:</strong> <em>du sprichst</em> →
            <em><strong>Sprich!</strong></em> · <em>du hilfst</em> →
            <em><strong>Hilf!</strong></em> · <em>du nimmst</em> → <em><strong>Nimm!</strong></em></li>
        <li><strong>a → ä NO se mantiene:</strong> <em>du fährst</em> →
            <em><strong>Fahr!</strong></em> · <em>du schläfst</em> →
            <em><strong>Schlaf!</strong></em></li>
      </ul>
      <div class="merke"><strong>El irregular importante:</strong> <em>sein</em> hace
      <em><strong>Sei</strong> vorsichtig!</em> (du) · <em><strong>Seid</strong> ruhig!</em>
      (ihr) · <em><strong>Seien Sie</strong> so nett!</em> (Sie)</div>
      <p><strong>Suavizar el imperativo:</strong> en alemán una orden desnuda suena brusca.
      Se añade casi siempre <em>bitte</em>, y a menudo <em>mal</em> o <em>doch</em>:</p>
      <ul>
        <li><em>Komm <strong>bitte</strong> her.</em></li>
        <li><em>Hilf mir <strong>mal</strong> kurz.</em> (un momentito)</li>
        <li><em>Setz dich <strong>doch</strong>!</em> (¡pero siéntate!)</li>
      </ul>
      <p>Los verbos separables se parten también aquí:
      <em><strong>Mach</strong> das Fenster <strong>zu</strong>!</em></p>`,
    uebungen: [
      { id: "g1701", satz: "___ bitte das Fenster! (öffnen, du)", loesung: "Öffne", tipps: ["Öffne", "Öffnest", "Öffnen"], hinweis: "raíz sin -st", ue: "¡Abre la ventana!" },
      { id: "g1702", satz: "___ Sie bitte langsamer! (sprechen)", loesung: "Sprechen", tipps: ["Sprechen", "Sprich", "Sprecht"], hinweis: "infinitivo + Sie", ue: "¡Hable más despacio!" },
      { id: "g1703", satz: "___ mir bitte! (helfen, du)", loesung: "Hilf", tipps: ["Hilf", "Helf", "Hilfst"], hinweis: "e → i se mantiene", ue: "¡Ayúdame!" },
      { id: "g1704", satz: "___ bitte vorsichtig! (sein, du)", loesung: "Sei", tipps: ["Sei", "Bist", "Seid"], hinweis: "irregular", ue: "¡Ten cuidado!" },
      { id: "g1705", satz: "___ langsamer! (fahren, du)", loesung: "Fahr", tipps: ["Fahr", "Fähr", "Fahrst"], hinweis: "a → ä NO se mantiene", ue: "¡Conduce más despacio!" }
    ]
  }
});

LEKTION('de', {
  tag: 18, niveau: "A1", thema: "Hay y se dice",
  vokabeln: [
    { id: "v1801", de: "es gibt",        es: "hay",            wortart: "expresión", beispiel: "Hier gibt es ein Café.", beispielUe: "Aquí hay un café." },
    { id: "v1802", de: "man",            es: "se, uno",        wortart: "pronombre", beispiel: "Hier darf man nicht rauchen.", beispielUe: "Aquí no se puede fumar." },
    { id: "v1803", de: "das Café",       es: "el café (local)", wortart: "sustantivo", beispiel: "Das Café ist voll.", beispielUe: "El café está lleno." },
    { id: "v1804", de: "das Restaurant", es: "el restaurante", wortart: "sustantivo", beispiel: "Das Restaurant ist teuer.", beispielUe: "El restaurante es caro." },
    { id: "v1805", de: "rauchen",        es: "fumar",          wortart: "verbo", beispiel: "Hier darf man nicht rauchen.", beispielUe: "Aquí no se permite fumar." },
    { id: "v1806", de: "der Platz",      es: "el lugar, la plaza", wortart: "sustantivo", beispiel: "Ist hier noch ein Platz frei?", beispielUe: "¿Hay todavía un lugar libre?" },
    { id: "v1807", de: "frei",           es: "libre",          wortart: "adjetivo", beispiel: "Der Tisch ist frei.", beispielUe: "La mesa está libre." },
    { id: "v1808", de: "besetzt",        es: "ocupado",        wortart: "adjetivo", beispiel: "Alle Plätze sind besetzt.", beispielUe: "Todos los lugares están ocupados." },
    { id: "v1809", de: "die Toilette",   es: "el baño",        wortart: "sustantivo", beispiel: "Wo ist die Toilette?", beispielUe: "¿Dónde está el baño?" },
    { id: "v1810", de: "die Speisekarte", es: "el menú",       wortart: "sustantivo", beispiel: "Bringen Sie die Speisekarte?", beispielUe: "¿Trae el menú?" }
  ],
  saetze: [
    { id: "s1801", de: "In meiner Stadt gibt es viele Cafés.", es: "En mi ciudad hay muchos cafés." },
    { id: "s1802", de: "Gibt es hier eine Toilette?",        es: "¿Hay un baño aquí?" },
    { id: "s1803", de: "Hier darf man nicht rauchen.",       es: "Aquí no se puede fumar." },
    { id: "s1804", de: "Wie sagt man das auf Deutsch?",      es: "¿Cómo se dice eso en alemán?" },
    { id: "s1805", de: "Es gibt kein Problem.",              es: "No hay ningún problema." }
  ],
  grammatik: {
    id: "g18", titel: "es gibt y el pronombre man",
    erklaerung: `
      <p>Dos construcciones muy frecuentes que corresponden a estructuras que ya conoces
      del español.</p>
      <p><strong>1. <em>es gibt</em> = «hay»</strong></p>
      <div class="merke"><strong>Lo importante:</strong> <em>es gibt</em> se construye con
      <strong>acusativo</strong>, no con nominativo. Y no cambia nunca — ni en plural.<br>
      <em>Es gibt <strong>einen</strong> Park.</em> (un parque)<br>
      <em>Es gibt <strong>viele</strong> Cafés.</em> (muchos cafés — sigue siendo
      <em>gibt</em>, no <s>geben</s>)</div>
      <table>
        <tr><th>Español</th><th>Alemán</th></tr>
        <tr><td>Hay un problema.</td><td><em>Es gibt ein Problem.</em></td></tr>
        <tr><td>No hay tiempo.</td><td><em>Es gibt keine Zeit.</em></td></tr>
        <tr><td>¿Hay un baño?</td><td><em>Gibt es eine Toilette?</em></td></tr>
      </table>
      <p>Si la frase empieza por otra cosa, el <em>es</em> se mueve detrás del verbo:
      <em>In Berlin <strong>gibt es</strong> viele Museen.</em></p>
      <p><strong>2. <em>man</em> = «se» impersonal</strong></p>
      <div class="merke"><em>man</em> se conjuga siempre como <em>er/sie/es</em>:<br>
      <em>Hier <strong>spricht man</strong> Deutsch.</em> — Aquí se habla alemán.<br>
      <em>Wie <strong>sagt man</strong> das?</em> — ¿Cómo se dice eso?<br>
      Es exactamente el <em>se</em> impersonal del español.</div>
      <p><strong>Muy frecuente con verbos modales</strong> para reglas y prohibiciones:</p>
      <ul>
        <li><em>Hier <strong>darf man</strong> nicht rauchen.</em> — Aquí no se puede fumar.</li>
        <li><em><strong>Man muss</strong> hier bezahlen.</em> — Aquí hay que pagar.</li>
        <li><em><strong>Man kann</strong> mit Karte zahlen.</em> — Se puede pagar con tarjeta.</li>
      </ul>
      <div class="merke"><strong>No confundir:</strong> <em>man</em> (pronombre, con una n) y
      <em>der Mann</em> (el hombre, con dos n y mayúscula). Se pronuncian casi igual pero
      son cosas distintas.</div>`,
    uebungen: [
      { id: "g1801", satz: "Hier ___ es ein gutes Café.", loesung: "gibt", tipps: ["gibt", "geben", "ist"], hinweis: "invariable", ue: "Aquí hay un buen café." },
      { id: "g1802", satz: "Es gibt ___ Problem. (kein)", loesung: "kein", tipps: ["kein", "keinen", "keine"], hinweis: "das Problem, acusativo", ue: "No hay ningún problema." },
      { id: "g1803", satz: "Es gibt ___ Park in der Nähe. (ein)", loesung: "einen", tipps: ["einen", "ein", "eine"], hinweis: "der Park, acusativo", ue: "Hay un parque cerca." },
      { id: "g1804", satz: "Wie ___ (sagen) man das auf Deutsch?", loesung: "sagt", tipps: ["sagt", "sagen", "sage"], hinweis: "man → como er", ue: "¿Cómo se dice eso en alemán?" },
      { id: "g1805", satz: "Hier ___ (dürfen) man nicht rauchen.", loesung: "darf", tipps: ["darf", "dürfen", "darfst"], hinweis: "man → como er", ue: "Aquí no se puede fumar." }
    ]
  }
});

LEKTION('de', {
  tag: 19, niveau: "A1", thema: "Unir ideas",
  vokabeln: [
    { id: "v1901", de: "und",            es: "y",              wortart: "conjunción", beispiel: "Ich lerne und arbeite.", beispielUe: "Estudio y trabajo." },
    { id: "v1902", de: "oder",           es: "o",              wortart: "conjunción", beispiel: "Tee oder Kaffee?", beispielUe: "¿Té o café?" },
    { id: "v1903", de: "aber",           es: "pero",           wortart: "conjunción", beispiel: "Es ist teuer, aber gut.", beispielUe: "Es caro, pero bueno." },
    { id: "v1904", de: "denn",           es: "pues, porque",   wortart: "conjunción", beispiel: "Ich bleibe, denn es regnet.", beispielUe: "Me quedo, pues llueve." },
    { id: "v1905", de: "sondern",        es: "sino",           wortart: "conjunción", beispiel: "Nicht heute, sondern morgen.", beispielUe: "No hoy, sino mañana." },
    { id: "v1906", de: "regnen",         es: "llover",         wortart: "verbo", beispiel: "Es regnet seit gestern.", beispielUe: "Llueve desde ayer." },
    { id: "v1907", de: "müde sein",      es: "estar cansado",  wortart: "expresión", beispiel: "Ich bin müde.", beispielUe: "Estoy cansado." },
    { id: "v1908", de: "trotzdem",       es: "a pesar de eso", wortart: "adverbio", beispiel: "Es regnet, trotzdem gehe ich.", beispielUe: "Llueve, aun así voy." },
    { id: "v1909", de: "deshalb",        es: "por eso",        wortart: "adverbio", beispiel: "Es regnet, deshalb bleibe ich.", beispielUe: "Llueve, por eso me quedo." },
    { id: "v1910", de: "das Wetter",     es: "el clima",       wortart: "sustantivo", beispiel: "Das Wetter ist schlecht.", beispielUe: "El clima está malo." }
  ],
  saetze: [
    { id: "s1901", de: "Ich lerne Deutsch und arbeite hier.", es: "Aprendo alemán y trabajo aquí." },
    { id: "s1902", de: "Es ist teuer, aber es ist gut.",     es: "Es caro, pero es bueno." },
    { id: "s1903", de: "Ich bleibe zu Hause, denn es regnet.", es: "Me quedo en casa, pues llueve." },
    { id: "s1904", de: "Nicht heute, sondern morgen.",       es: "No hoy, sino mañana." },
    { id: "s1905", de: "Es regnet, deshalb bleibe ich hier.", es: "Llueve, por eso me quedo aquí." }
  ],
  grammatik: {
    id: "g19", titel: "Conjunciones que no cambian el orden",
    erklaerung: `
      <p>Hay cinco conjunciones que unen dos frases <strong>sin tocar el orden de
      palabras</strong>. Son las más fáciles del alemán — y por eso las primeras que se
      aprenden.</p>
      <div class="merke"><strong>Las cinco, con truco:</strong>
      <strong>A</strong>ber — <strong>D</strong>enn — <strong>U</strong>nd —
      <strong>S</strong>ondern — <strong>O</strong>der<br>
      Iniciales: <strong>ADUSO</strong>. Después de ellas, el verbo sigue en posición 2,
      como si nada hubiera pasado.</div>
      <table>
        <tr><th>Conjunción</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td><em>und</em></td><td>y</td><td>Ich komme <em>und</em> <strong>bringe</strong> Wein mit.</td></tr>
        <tr><td><em>oder</em></td><td>o</td><td>Kommst du <em>oder</em> <strong>bleibst</strong> du?</td></tr>
        <tr><td><em>aber</em></td><td>pero</td><td>Es ist teuer, <em>aber</em> es <strong>ist</strong> gut.</td></tr>
        <tr><td><em>denn</em></td><td>pues, porque</td><td>Ich bleibe, <em>denn</em> es <strong>regnet</strong>.</td></tr>
        <tr><td><em>sondern</em></td><td>sino</td><td>Nicht heute, <em>sondern</em> morgen.</td></tr>
      </table>
      <div class="merke"><strong>aber o sondern:</strong> igual que en español
      «pero» y «sino».<br>
      <em>sondern</em> solo después de una <strong>negación</strong>, para corregirla:
      <em>Er kommt <strong>nicht</strong> heute, <strong>sondern</strong> morgen.</em><br>
      <em>aber</em> en todos los demás casos: <em>Es ist teuer, <strong>aber</strong>
      gut.</em></div>
      <p><strong>Cuidado con estos dos falsos amigos del orden:</strong>
      <em>deshalb</em> (por eso) y <em>trotzdem</em> (aun así) <strong>no</strong> son
      conjunciones ADUSO. Son adverbios y ocupan la posición 1, así que el sujeto pasa
      detrás del verbo:</p>
      <ul>
        <li><em>Es regnet, <strong>deshalb bleibe ich</strong> zu Hause.</em>
            (no <s>deshalb ich bleibe</s>)</li>
        <li><em>Es regnet, <strong>trotzdem gehe ich</strong> spazieren.</em></li>
      </ul>
      <p><strong>Y el gran contraste que verás mañana:</strong> <em>denn</em> (ADUSO,
      orden normal) y <em>weil</em> (subordinada, verbo al final) significan lo mismo, pero
      se construyen de forma opuesta.</p>`,
    uebungen: [
      { id: "g1901", satz: "Ich bleibe, denn es ___ (regnen).", loesung: "regnet", tipps: ["regnet", "regnen", "geregnet"], hinweis: "denn → orden normal", ue: "Me quedo, pues llueve." },
      { id: "g1902", satz: "Es ist teuer, ___ es ist sehr gut.", loesung: "aber", tipps: ["aber", "sondern", "denn"], hinweis: "sin negación previa", ue: "Es caro, pero es muy bueno." },
      { id: "g1903", satz: "Nicht heute, ___ morgen.", loesung: "sondern", tipps: ["sondern", "aber", "oder"], hinweis: "corrige una negación", ue: "No hoy, sino mañana." },
      { id: "g1904", satz: "Es regnet, deshalb ___ ich zu Hause. (bleiben)", loesung: "bleibe", tipps: ["bleibe", "ich bleibe", "bleiben"], hinweis: "deshalb → verbo antes del sujeto", ue: "Llueve, por eso me quedo en casa." },
      { id: "g1905", satz: "Kommst du ___ bleibst du hier?", loesung: "oder", tipps: ["oder", "und", "aber"], hinweis: "alternativa", ue: "¿Vienes o te quedas aquí?" }
    ]
  }
});

LEKTION('de', {
  tag: 20, niveau: "A1", thema: "Explicar razones",
  vokabeln: [
    { id: "v2001", de: "weil",           es: "porque",         wortart: "conjunción", beispiel: "Ich bleibe, weil es regnet.", beispielUe: "Me quedo porque llueve." },
    { id: "v2002", de: "der Grund",      es: "la razón",       wortart: "sustantivo", beispiel: "Was ist der Grund?", beispielUe: "¿Cuál es la razón?" },
    { id: "v2003", de: "die Erkältung",  es: "el resfriado",   wortart: "sustantivo", beispiel: "Ich habe eine Erkältung.", beispielUe: "Tengo un resfriado." },
    { id: "v2004", de: "der Stress",     es: "el estrés",      wortart: "sustantivo", beispiel: "Ich habe viel Stress.", beispielUe: "Tengo mucho estrés." },
    { id: "v2005", de: "wichtig",        es: "importante",     wortart: "adjetivo", beispiel: "Das ist sehr wichtig.", beispielUe: "Eso es muy importante." },
    { id: "v2006", de: "schwierig",      es: "difícil",        wortart: "adjetivo", beispiel: "Die Prüfung war schwierig.", beispielUe: "El examen fue difícil." },
    { id: "v2007", de: "die Prüfung",    es: "el examen",      wortart: "sustantivo", beispiel: "Die Prüfung ist am Montag.", beispielUe: "El examen es el lunes." },
    { id: "v2008", de: "üben",           es: "practicar",      wortart: "verbo", beispiel: "Ich übe jeden Tag.", beispielUe: "Practico todos los días." },
    { id: "v2009", de: "genug",          es: "suficiente",     wortart: "adverbio", beispiel: "Ich habe genug Zeit.", beispielUe: "Tengo tiempo suficiente." },
    { id: "v2010", de: "leider",         es: "lamentablemente", wortart: "adverbio", beispiel: "Leider kann ich nicht.", beispielUe: "Lamentablemente no puedo." }
  ],
  saetze: [
    { id: "s2001", de: "Ich bleibe zu Hause, weil es regnet.", es: "Me quedo en casa porque llueve." },
    { id: "s2002", de: "Er kommt nicht, weil er krank ist.",  es: "Él no viene porque está enfermo." },
    { id: "s2003", de: "Weil ich müde bin, gehe ich schlafen.", es: "Como estoy cansado, me voy a dormir." },
    { id: "s2004", de: "Ich lerne Deutsch, weil ich hier arbeite.", es: "Aprendo alemán porque trabajo aquí." },
    { id: "s2005", de: "Sie übt viel, weil die Prüfung schwierig ist.", es: "Ella practica mucho porque el examen es difícil." }
  ],
  grammatik: {
    id: "g20", titel: "weil y el verbo al final",
    erklaerung: `
      <p>Aquí llega la segunda gran regla del orden alemán — y la que más cuesta a los
      hispanohablantes, porque el español no hace nada parecido.</p>
      <div class="merke"><strong>En una oración subordinada, el verbo conjugado va al
      FINAL.</strong><br>
      <em>Ich bleibe zu Hause, <strong>weil</strong> es <strong>regnet</strong>.</em><br>
      Literalmente: «Me quedo en casa, porque ello llueve».</div>
      <table>
        <tr><th>Frase principal</th><th>Subordinada con weil</th></tr>
        <tr><td>Es <em>regnet</em>.</td><td>…, weil es <em>regnet</em>.</td></tr>
        <tr><td>Er <em>ist</em> krank.</td><td>…, weil er krank <em>ist</em>.</td></tr>
        <tr><td>Ich <em>habe</em> keine Zeit.</td><td>…, weil ich keine Zeit <em>habe</em>.</td></tr>
        <tr><td>Ich <em>muss</em> arbeiten.</td><td>…, weil ich arbeiten <em>muss</em>.</td></tr>
      </table>
      <p>Fíjate en la última línea: con verbo modal, <strong>el modal va al final</strong>,
      detrás del infinitivo. <em>…weil ich arbeiten <strong>muss</strong>.</em></p>
      <div class="merke"><strong>Coma obligatoria.</strong> A diferencia del español, en
      alemán la subordinada <strong>siempre</strong> se separa con coma:<br>
      <em>Ich bleibe<strong>,</strong> weil es regnet.</em></div>
      <p><strong>La subordinada también puede ir delante.</strong> Entonces ocupa la
      posición 1 completa, y el verbo principal la sigue inmediatamente:</p>
      <ul>
        <li><em><strong>Weil ich müde bin</strong>, <strong>gehe</strong> ich schlafen.</em></li>
      </ul>
      <p>Quedan dos verbos juntos separados por coma — es correcto y muy típico del alemán.</p>
      <div class="merke"><strong>weil o denn:</strong> significan lo mismo, pero se
      construyen al revés.<br>
      <em>Ich bleibe, <strong>denn</strong> es <strong>regnet</strong>.</em> (verbo en
      posición 2)<br>
      <em>Ich bleibe, <strong>weil</strong> es <strong>regnet</strong>.</em> (verbo al final)<br>
      En este caso coinciden porque la frase es corta. Con frases largas la diferencia
      salta a la vista.</div>
      <p>Casi todas las conjunciones alemanas mandan el verbo al final —
      <em>dass, wenn, ob, obwohl, damit</em>… Las cinco de ayer (ADUSO) son la excepción.</p>`,
    uebungen: [
      { id: "g2001", satz: "Ich bleibe, weil es ___ (regnen).", loesung: "regnet", tipps: ["regnet", "regnen", "es regnet"], hinweis: "verbo al final", ue: "Me quedo porque llueve." },
      { id: "g2002", satz: "Er kommt nicht, weil er krank ___ (sein).", loesung: "ist", tipps: ["ist", "ist krank", "sein"], hinweis: "verbo al final", ue: "No viene porque está enfermo." },
      { id: "g2003", satz: "Ich lerne, weil ich hier ___ (arbeiten).", loesung: "arbeite", tipps: ["arbeite", "arbeiten", "arbeitet"], hinweis: "ich + final", ue: "Aprendo porque trabajo aquí." },
      { id: "g2004", satz: "Weil ich müde bin, ___ ich schlafen. (gehen)", loesung: "gehe", tipps: ["gehe", "ich gehe", "gehen"], hinweis: "subordinada delante → verbo enseguida", ue: "Como estoy cansado, me voy a dormir." },
      { id: "g2005", satz: "Ich komme nicht, weil ich arbeiten ___ (müssen).", loesung: "muss", tipps: ["muss", "müssen", "musst"], hinweis: "el modal al final del todo", ue: "No voy porque tengo que trabajar." }
    ]
  }
});
