/* Tag 11–20 · Niveau A1 · Familie, Zuhause, Uhrzeit, Essen und Einkaufen
   Seit Oktober 2026. */

LEKTION('es-419', {
  tag: 11, niveau: "A1", thema: "Die Familie",
  vokabeln: [
    { id: "av1101", es: "la familia",  de: "die Familie",     wortart: "Substantiv", beispiel: "Mi familia es grande.", beispielUe: "Meine Familie ist groß." },
    { id: "av1102", es: "el padre",    de: "der Vater",       wortart: "Substantiv", beispiel: "Mi padre es de Cali.", beispielUe: "Mein Vater ist aus Cali." },
    { id: "av1103", es: "la madre",    de: "die Mutter",      wortart: "Substantiv", beispiel: "Su madre trabaja en un hotel.", beispielUe: "Seine Mutter arbeitet in einem Hotel." },
    { id: "av1104", es: "el papá",     de: "der Papa",        wortart: "Substantiv", beispiel: "Mi papá cocina muy bien.", beispielUe: "Mein Papa kocht sehr gut." },
    { id: "av1105", es: "la mamá",     de: "die Mama",        wortart: "Substantiv", beispiel: "Llamo a mi mamá cada domingo.", beispielUe: "Ich rufe jeden Sonntag meine Mama an." },
    { id: "av1106", es: "el hermano",  de: "der Bruder",      wortart: "Substantiv", beispiel: "Mi hermano vive en Monterrey.", beispielUe: "Mein Bruder wohnt in Monterrey." },
    { id: "av1107", es: "la hermana",  de: "die Schwester",   wortart: "Substantiv", beispiel: "Mi hermana vive en Canadá.", beispielUe: "Meine Schwester wohnt in Kanada." },
    { id: "av1108", es: "el hijo",     de: "der Sohn",        wortart: "Substantiv", beispiel: "Su hijo tiene diez años.", beispielUe: "Ihr Sohn ist zehn." },
    { id: "av1109", es: "la hija",     de: "die Tochter",     wortart: "Substantiv", beispiel: "Nuestra hija estudia en Berlín.", beispielUe: "Unsere Tochter studiert in Berlin." },
    { id: "av1110", es: "el abuelo",   de: "der Großvater",   wortart: "Substantiv", beispiel: "Mi abuelo tiene ochenta años.", beispielUe: "Mein Opa ist achtzig." }
  ],
  saetze: [
    { id: "as1101", es: "Te presento a mi familia.",                  de: "Ich stelle dir meine Familie vor." },
    { id: "as1102", es: "Mis padres viven en Hamburgo.",              de: "Meine Eltern wohnen in Hamburg." },
    { id: "as1103", es: "¿Tienes hermanos? Sí, una hermana.",         de: "Hast du Geschwister? Ja, eine Schwester." },
    { id: "as1104", es: "Nuestros hijos hablan alemán y español.",    de: "Unsere Kinder sprechen Deutsch und Spanisch." },
    { id: "as1105", es: "Su abuela es muy simpática.",                de: "Seine Großmutter ist sehr nett." }
  ],
  grammatik: {
    id: "ag11", titel: "mi, tu, su — wem gehört was?",
    erklaerung: `
      <p>Die Possessivbegleiter stehen vor dem Nomen. Sie richten sich nach der Zahl dessen,
      was jemandem gehört — nicht nach dem Besitzer.</p>
      <table>
        <tr><th>Deutsch</th><th>eine Sache</th><th>mehrere</th></tr>
        <tr><td>mein</td><td><strong>mi</strong> hermano</td><td><strong>mis</strong> hermanos</td></tr>
        <tr><td>dein</td><td><strong>tu</strong> casa</td><td><strong>tus</strong> casas</td></tr>
        <tr><td>sein / ihr / Ihr</td><td><strong>su</strong> hijo</td><td><strong>sus</strong> hijos</td></tr>
        <tr><td>unser</td><td><strong>nuestro</strong> padre / <strong>nuestra</strong> madre</td><td>nuestros / nuestras</td></tr>
        <tr><td>euer / ihr (Plural)</td><td><strong>su</strong> familia</td><td><strong>sus</strong> padres</td></tr>
      </table>
      <div class="merke"><em>su</em> kann sein, ihr, Ihr oder euer bedeuten. Meist klärt das
      der Zusammenhang. Und Achtung: <em>tu</em> ohne Akzent heißt „dein", <em>tú</em> mit
      Akzent heißt „du".</div>
      <p>Der männliche Plural meint gemischte Gruppen: <em>los padres</em> = die Eltern,
      <em>los hermanos</em> = die Geschwister, <em>los hijos</em> = die Kinder.</p>`,
    uebungen: [
      { id: "ag1101", satz: "___ hermana vive en Canadá. (mein)", loesung: "Mi", tipps: ["Mi", "Mis", "Tu"], hinweis: "eine Person: mi", ue: "Meine Schwester wohnt in Kanada." },
      { id: "ag1102", satz: "___ padres son de Chile. (mein)", loesung: "Mis", tipps: ["Mis", "Mi", "Sus"], hinweis: "mehrere: mis", ue: "Meine Eltern sind aus Chile." },
      { id: "ag1103", satz: "¿Cómo se llama ___ hijo? (dein)", loesung: "tu", tipps: ["tu", "tú", "su"], hinweis: "tu ohne Akzent = dein", ue: "Wie heißt dein Sohn?" },
      { id: "ag1104", satz: "___ casa es pequeña. (unser)", loesung: "Nuestra", tipps: ["Nuestra", "Nuestro", "Nuestras"], hinweis: "casa ist weiblich", ue: "Unser Haus ist klein." },
      { id: "ag1105", satz: "Señor López, ¿es ___ hija? (Ihr)", loesung: "su", tipps: ["su", "tu", "sus"], hinweis: "usted → su", ue: "Herr López, ist das Ihre Tochter?" }
    ]
  }
});

LEKTION('es-419', {
  tag: 12, niveau: "A1", thema: "Mein Zuhause",
  vokabeln: [
    { id: "av1201", es: "la casa",      de: "das Haus; das Zuhause", wortart: "Substantiv", beispiel: "Mi casa tiene jardín.", beispielUe: "Mein Haus hat einen Garten." },
    { id: "av1202", es: "el cuarto",    de: "das Zimmer",            wortart: "Substantiv", beispiel: "El departamento tiene tres cuartos.", beispielUe: "Die Wohnung hat drei Zimmer." },
    { id: "av1203", es: "la cocina",    de: "die Küche",             wortart: "Substantiv", beispiel: "La cocina es pequeña pero bonita.", beispielUe: "Die Küche ist klein, aber schön." },
    { id: "av1204", es: "el baño",      de: "das Bad; die Toilette", wortart: "Substantiv", beispiel: "El baño está al fondo.", beispielUe: "Das Bad ist hinten." },
    { id: "av1205", es: "la sala",      de: "das Wohnzimmer",        wortart: "Substantiv", beispiel: "Vemos la tele en la sala.", beispielUe: "Wir sehen im Wohnzimmer fern." },
    { id: "av1206", es: "el jardín",    de: "der Garten",            wortart: "Substantiv", beispiel: "Los niños juegan en el jardín.", beispielUe: "Die Kinder spielen im Garten." },
    { id: "av1207", es: "la cama",      de: "das Bett",              wortart: "Substantiv", beispiel: "La cama es muy cómoda.", beispielUe: "Das Bett ist sehr bequem." },
    { id: "av1208", es: "grande",       de: "groß",                  wortart: "Adjektiv",   beispiel: "La sala es grande.", beispielUe: "Das Wohnzimmer ist groß." },
    { id: "av1209", es: "pequeño",      de: "klein",                 wortart: "Adjektiv",   beispiel: "Vivo en un cuarto pequeño.", beispielUe: "Ich wohne in einem kleinen Zimmer." },
    { id: "av1210", es: "bonito",       de: "schön, hübsch",         wortart: "Adjektiv",   beispiel: "¡Qué jardín tan bonito!", beispielUe: "Was für ein schöner Garten!" }
  ],
  saetze: [
    { id: "as1201", es: "En mi casa hay tres cuartos.",               de: "In meinem Haus gibt es drei Zimmer." },
    { id: "as1202", es: "¿Hay un baño aquí?",                         de: "Gibt es hier eine Toilette?" },
    { id: "as1203", es: "No hay jardín, pero hay un balcón.",         de: "Es gibt keinen Garten, aber einen Balkon." },
    { id: "as1204", es: "La cocina es nueva y muy bonita.",           de: "Die Küche ist neu und sehr schön." },
    { id: "as1205", es: "Hay dos camas en el cuarto.",                de: "Im Zimmer stehen zwei Betten." }
  ],
  grammatik: {
    id: "ag12", titel: "hay — es gibt",
    erklaerung: `
      <p>Für „es gibt" hat Spanisch ein einziges kleines Wort: <strong>hay</strong>. Es
      verändert sich nie — egal, ob es um eine Sache geht oder um viele.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th></tr>
        <tr><td><strong>Hay</strong> un baño.</td><td>Es gibt ein Bad.</td></tr>
        <tr><td><strong>Hay</strong> una cocina.</td><td>Es gibt eine Küche.</td></tr>
        <tr><td><strong>Hay</strong> tres cuartos.</td><td>Es gibt drei Zimmer.</td></tr>
        <tr><td>No <strong>hay</strong> jardín.</td><td>Es gibt keinen Garten.</td></tr>
        <tr><td>¿<strong>Hay</strong> un baño aquí?</td><td>Gibt es hier eine Toilette?</td></tr>
      </table>
      <div class="merke">Nach <em>hay</em> steht <strong>kein bestimmter Artikel</strong>:
      <em>Hay un baño</em>, nicht <em>hay el baño</em>. Für „kein" reicht ein
      <em>no</em> vor <em>hay</em>: <em>No hay jardín.</em></div>
      <p>Adjektive auf <em>-e</em> wie <em>grande</em> haben für männlich und weiblich
      dieselbe Form: <em>el cuarto grande, la sala grande</em>.</p>`,
    uebungen: [
      { id: "ag1201", satz: "En la casa ___ tres cuartos.", loesung: "hay", tipps: ["hay", "son", "es"], hinweis: "es gibt = hay", ue: "Im Haus gibt es drei Zimmer." },
      { id: "ag1202", satz: "¿___ un baño aquí?", loesung: "Hay", tipps: ["Hay", "Es", "Está"], hinweis: "gibt es …? = ¿hay …?", ue: "Gibt es hier eine Toilette?" },
      { id: "ag1203", satz: "No ___ jardín.", loesung: "hay", tipps: ["hay", "es", "tiene"], hinweis: "es gibt keinen = no hay", ue: "Es gibt keinen Garten." },
      { id: "ag1204", satz: "Hay ___ cama en el cuarto. (eins)", loesung: "una", tipps: ["una", "la", "un"], hinweis: "nach hay: un / una, nicht el / la", ue: "Im Zimmer steht ein Bett." },
      { id: "ag1205", satz: "La sala es muy ___. (groß)", loesung: "grande", tipps: ["grande", "granda", "grandes"], hinweis: "grande ist für beide Geschlechter gleich", ue: "Das Wohnzimmer ist sehr groß." }
    ]
  }
});

LEKTION('es-419', {
  tag: 13, niveau: "A1", thema: "Wie geht's? Wo bist du?",
  vokabeln: [
    { id: "av1301", es: "estar",      de: "sein (Ort, Befinden)", wortart: "Verb",     beispiel: "¿Dónde estás?", beispielUe: "Wo bist du?" },
    { id: "av1302", es: "bien",       de: "gut",                  wortart: "Adverb",   beispiel: "Estoy bien, gracias.", beispielUe: "Mir geht es gut, danke." },
    { id: "av1303", es: "mal",        de: "schlecht",             wortart: "Adverb",   beispiel: "Hoy estoy un poco mal.", beispielUe: "Heute geht es mir etwas schlecht." },
    { id: "av1304", es: "cansado",    de: "müde",                 wortart: "Adjektiv", beispiel: "Estoy cansado después del trabajo.", beispielUe: "Ich bin nach der Arbeit müde." },
    { id: "av1305", es: "contento",   de: "froh, zufrieden",      wortart: "Adjektiv", beispiel: "Estamos muy contentos aquí.", beispielUe: "Wir sind hier sehr zufrieden." },
    { id: "av1306", es: "enfermo",    de: "krank",                wortart: "Adjektiv", beispiel: "Mi hijo está enfermo.", beispielUe: "Mein Sohn ist krank." },
    { id: "av1307", es: "aquí",       de: "hier",                 wortart: "Adverb",   beispiel: "Estoy aquí, en la cocina.", beispielUe: "Ich bin hier, in der Küche." },
    { id: "av1308", es: "allí",       de: "dort",                 wortart: "Adverb",   beispiel: "El banco está allí.", beispielUe: "Die Bank ist dort." },
    { id: "av1309", es: "cerca",      de: "in der Nähe",          wortart: "Adverb",   beispiel: "El supermercado está cerca.", beispielUe: "Der Supermarkt ist in der Nähe." },
    { id: "av1310", es: "lejos",      de: "weit weg",             wortart: "Adverb",   beispiel: "Mi oficina está lejos.", beispielUe: "Mein Büro ist weit weg." }
  ],
  saetze: [
    { id: "as1301", es: "¿Cómo estás? Estoy bien, ¿y tú?",       de: "Wie geht's dir? Gut, und dir?" },
    { id: "as1302", es: "Estoy en la oficina.",                   de: "Ich bin im Büro." },
    { id: "as1303", es: "Mis padres están en Alemania.",          de: "Meine Eltern sind in Deutschland." },
    { id: "as1304", es: "¿Estás cansada? Sí, un poco.",           de: "Bist du müde? Ja, ein bisschen." },
    { id: "as1305", es: "La farmacia está muy cerca.",            de: "Die Apotheke ist ganz in der Nähe." }
  ],
  grammatik: {
    id: "ag13", titel: "estar — wo und wie",
    erklaerung: `
      <p>Spanisch hat zwei Verben für „sein". <em>ser</em> kennst du schon (Name, Herkunft,
      Beruf). <strong>estar</strong> brauchst du für den <strong>Ort</strong> und für das,
      wie es jemandem gerade <strong>geht</strong>.</p>
      <table>
        <tr><th>Person</th><th>estar</th><th>Beispiel</th></tr>
        <tr><td>yo</td><td><strong>estoy</strong></td><td>Estoy en casa.</td></tr>
        <tr><td>tú</td><td><strong>estás</strong></td><td>¿Cómo estás?</td></tr>
        <tr><td>él / ella / usted</td><td><strong>está</strong></td><td>Está cansada.</td></tr>
        <tr><td>nosotros</td><td><strong>estamos</strong></td><td>Estamos bien.</td></tr>
        <tr><td>ustedes / ellos</td><td><strong>están</strong></td><td>Están en Alemania.</td></tr>
      </table>
      <div class="merke">Der Ort steht immer mit <em>estar</em> — auch bei Städten und
      Ländern: <em>Lima está en Perú.</em> Die Herkunft aber mit <em>ser</em>: <em>Soy de
      Lima.</em> Ab Tag 31 schauen wir uns den Unterschied genauer an.</div>
      <p>Achte auf den Akzent: <em>está</em> (ist) — <em>esta</em> ohne Akzent heißt „diese".</p>`,
    uebungen: [
      { id: "ag1301", satz: "Yo ___ en casa. (estar)", loesung: "estoy", tipps: ["estoy", "soy", "está"], hinweis: "Ort: estar", ue: "Ich bin zu Hause." },
      { id: "ag1302", satz: "¿Cómo ___ tú?", loesung: "estás", tipps: ["estás", "eres", "está"], hinweis: "Befinden: estar", ue: "Wie geht es dir?" },
      { id: "ag1303", satz: "Lima ___ en Perú.", loesung: "está", tipps: ["está", "es", "hay"], hinweis: "Lage: estar", ue: "Lima liegt in Peru." },
      { id: "ag1304", satz: "Nosotros ___ cansados.", loesung: "estamos", tipps: ["estamos", "somos", "están"], hinweis: "Zustand: estar", ue: "Wir sind müde." },
      { id: "ag1305", satz: "Mi hija ___ enferma.", loesung: "está", tipps: ["está", "es", "esta"], hinweis: "Befinden: estar — mit Akzent", ue: "Meine Tochter ist krank." }
    ]
  }
});

LEKTION('es-419', {
  tag: 14, niveau: "A1", thema: "Wie spät ist es?",
  vokabeln: [
    { id: "av1401", es: "la hora",      de: "die Stunde; die Uhrzeit",  wortart: "Substantiv", beispiel: "¿Qué hora es?", beispielUe: "Wie spät ist es?" },
    { id: "av1402", es: "el minuto",    de: "die Minute",               wortart: "Substantiv", beispiel: "Espera cinco minutos.", beispielUe: "Warte fünf Minuten." },
    { id: "av1403", es: "el reloj",     de: "die Uhr",                  wortart: "Substantiv", beispiel: "Mi reloj no funciona.", beispielUe: "Meine Uhr geht nicht." },
    { id: "av1404", es: "la mañana",    de: "der Morgen, der Vormittag", wortart: "Substantiv", beispiel: "Trabajo por la mañana.", beispielUe: "Ich arbeite vormittags." },
    { id: "av1405", es: "la tarde",     de: "der Nachmittag",           wortart: "Substantiv", beispiel: "Por la tarde estudio.", beispielUe: "Nachmittags lerne ich." },
    { id: "av1406", es: "la noche",     de: "der Abend, die Nacht",     wortart: "Substantiv", beispiel: "Cenamos a las nueve de la noche.", beispielUe: "Wir essen um neun Uhr abends." },
    { id: "av1407", es: "el mediodía",  de: "der Mittag",               wortart: "Substantiv", beispiel: "Comemos al mediodía.", beispielUe: "Wir essen mittags." },
    { id: "av1408", es: "temprano",     de: "früh",                     wortart: "Adverb",     beispiel: "Me levanto temprano.", beispielUe: "Ich stehe früh auf." },
    { id: "av1409", es: "tarde",        de: "spät",                     wortart: "Adverb",     beispiel: "Ya es tarde.", beispielUe: "Es ist schon spät." },
    { id: "av1410", es: "en punto",     de: "Punkt (bei Uhrzeiten)",    wortart: "Ausdruck",   beispiel: "La clase empieza a las ocho en punto.", beispielUe: "Der Kurs beginnt Punkt acht." }
  ],
  saetze: [
    { id: "as1401", es: "Son las tres y media.",                 de: "Es ist halb vier." },
    { id: "as1402", es: "Es la una y cuarto.",                   de: "Es ist Viertel nach eins." },
    { id: "as1403", es: "¿A qué hora empieza la película?",      de: "Um wie viel Uhr fängt der Film an?" },
    { id: "as1404", es: "Son las ocho menos cuarto.",            de: "Es ist Viertel vor acht." },
    { id: "as1405", es: "Trabajo de nueve a cinco.",             de: "Ich arbeite von neun bis fünf." }
  ],
  grammatik: {
    id: "ag14", titel: "¿Qué hora es? — die Uhrzeit",
    erklaerung: `
      <p>Die Uhrzeit sagt man mit <em>ser</em>: <em>es la una</em> (1 Uhr, Einzahl),
      sonst <em>son las …</em> (Mehrzahl).</p>
      <table>
        <tr><th>Uhrzeit</th><th>Spanisch</th></tr>
        <tr><td>1:00</td><td><strong>Es</strong> la una.</td></tr>
        <tr><td>2:00</td><td><strong>Son</strong> las dos.</td></tr>
        <tr><td>2:10</td><td>Son las dos <strong>y</strong> diez.</td></tr>
        <tr><td>2:15</td><td>Son las dos <strong>y cuarto</strong>.</td></tr>
        <tr><td>2:30</td><td>Son las dos <strong>y media</strong>.</td></tr>
        <tr><td>2:45</td><td>Son las tres <strong>menos cuarto</strong>.</td></tr>
      </table>
      <div class="merke"><strong>Die deutsche Falle:</strong> „halb vier" ist 3:30 — auf
      Spanisch <em>las <strong>tres</strong> y media</em>, nicht <em>cuatro</em>. Das
      Spanische zählt von der vollen Stunde aus weiter, das Deutsche schaut schon auf die
      nächste.</div>
      <p>Um wie viel Uhr? → <em>¿A qué hora …?</em> — <em><strong>A</strong> las ocho.</em>
      In vielen Ländern hört man für 2:45 auch <em>un cuarto para las tres</em>.</p>`,
    uebungen: [
      { id: "ag1401", satz: "___ la una.", loesung: "Es", tipps: ["Es", "Son", "Está"], hinweis: "1 Uhr: Einzahl", ue: "Es ist ein Uhr." },
      { id: "ag1402", satz: "___ las cuatro.", loesung: "Son", tipps: ["Son", "Es", "Están"], hinweis: "ab 2 Uhr: Mehrzahl", ue: "Es ist vier Uhr." },
      { id: "ag1403", satz: "Son las tres y ___. (3:30)", loesung: "media", tipps: ["media", "medio", "cuarto"], hinweis: "halbe Stunde: y media", ue: "Es ist halb vier." },
      { id: "ag1404", satz: "Son las ocho ___ cuarto. (7:45)", loesung: "menos", tipps: ["menos", "y", "de"], hinweis: "Viertel vor: menos cuarto", ue: "Es ist Viertel vor acht." },
      { id: "ag1405", satz: "La clase empieza ___ las nueve.", loesung: "a", tipps: ["a", "en", "de"], hinweis: "um … Uhr = a las …", ue: "Der Kurs beginnt um neun." }
    ]
  }
});

LEKTION('es-419', {
  tag: 15, niveau: "A1", thema: "Wochentage und Monate",
  vokabeln: [
    { id: "av1501", es: "el lunes",      de: "der Montag",      wortart: "Substantiv", beispiel: "El lunes tengo clase.", beispielUe: "Am Montag habe ich Unterricht." },
    { id: "av1502", es: "el martes",     de: "der Dienstag",    wortart: "Substantiv", beispiel: "Los martes juego fútbol.", beispielUe: "Dienstags spiele ich Fußball." },
    { id: "av1503", es: "el miércoles",  de: "der Mittwoch",    wortart: "Substantiv", beispiel: "El miércoles es mi día libre.", beispielUe: "Mittwoch ist mein freier Tag." },
    { id: "av1504", es: "el jueves",     de: "der Donnerstag",  wortart: "Substantiv", beispiel: "Nos vemos el jueves.", beispielUe: "Wir sehen uns am Donnerstag." },
    { id: "av1505", es: "el viernes",    de: "der Freitag",     wortart: "Substantiv", beispiel: "El viernes vamos al cine.", beispielUe: "Am Freitag gehen wir ins Kino." },
    { id: "av1506", es: "el sábado",     de: "der Samstag",     wortart: "Substantiv", beispiel: "El sábado no trabajo.", beispielUe: "Am Samstag arbeite ich nicht." },
    { id: "av1507", es: "el domingo",    de: "der Sonntag",     wortart: "Substantiv", beispiel: "Los domingos como con mi familia.", beispielUe: "Sonntags esse ich mit meiner Familie." },
    { id: "av1508", es: "la semana",     de: "die Woche",       wortart: "Substantiv", beispiel: "Trabajo cinco días a la semana.", beispielUe: "Ich arbeite fünf Tage pro Woche." },
    { id: "av1509", es: "el mes",        de: "der Monat",       wortart: "Substantiv", beispiel: "Mi cumpleaños es este mes.", beispielUe: "Mein Geburtstag ist diesen Monat." },
    { id: "av1510", es: "hoy",           de: "heute",           wortart: "Adverb",     beispiel: "Hoy es viernes.", beispielUe: "Heute ist Freitag." }
  ],
  saetze: [
    { id: "as1501", es: "Hoy es lunes, ¿verdad?",                  de: "Heute ist Montag, oder?" },
    { id: "as1502", es: "Los sábados duermo mucho.",               de: "Samstags schlafe ich viel." },
    { id: "as1503", es: "Mi cumpleaños es el diez de marzo.",      de: "Mein Geburtstag ist am zehnten März." },
    { id: "as1504", es: "La clase es los martes y jueves.",        de: "Der Kurs ist dienstags und donnerstags." },
    { id: "as1505", es: "¿Qué día es hoy?",                        de: "Welcher Tag ist heute?" }
  ],
  grammatik: {
    id: "ag15", titel: "el lunes oder los lunes? Tage und Daten",
    erklaerung: `
      <p>Vor Wochentagen steht auf Spanisch ein Artikel statt einer Präposition. Der Artikel
      zeigt, ob ein bestimmter Tag gemeint ist oder jede Woche.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th></tr>
        <tr><td><strong>el</strong> lunes</td><td>am (kommenden) Montag</td></tr>
        <tr><td><strong>los</strong> lunes</td><td>montags, jeden Montag</td></tr>
        <tr><td>Hoy es lunes.</td><td>Heute ist Montag. (ohne Artikel)</td></tr>
        <tr><td>el 10 de marzo</td><td>am 10. März</td></tr>
        <tr><td>en marzo</td><td>im März</td></tr>
      </table>
      <p>Die Monate: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre,
      octubre, noviembre, diciembre.</p>
      <div class="merke">Wochentage und Monate schreibt man <strong>klein</strong>. Und kein
      <em>en</em> vor dem Wochentag: <em>el lunes</em>, nicht <em>en lunes</em>. Das Datum
      baut man so: <em>el</em> + Zahl + <em>de</em> + Monat.</div>`,
    uebungen: [
      { id: "ag1501", satz: "___ lunes tengo clase. (diesen Montag)", loesung: "El", tipps: ["El", "Los", "En"], hinweis: "ein bestimmter Montag: el", ue: "Am Montag habe ich Unterricht." },
      { id: "ag1502", satz: "___ domingos como con mi familia. (jeden Sonntag)", loesung: "Los", tipps: ["Los", "El", "En"], hinweis: "jede Woche: los", ue: "Sonntags esse ich mit meiner Familie." },
      { id: "ag1503", satz: "Hoy ___ viernes.", loesung: "es", tipps: ["es", "está", "el"], hinweis: "heute ist …: hoy es", ue: "Heute ist Freitag." },
      { id: "ag1504", satz: "Mi cumpleaños es el diez ___ marzo.", loesung: "de", tipps: ["de", "en", "del"], hinweis: "el + Zahl + de + Monat", ue: "Mein Geburtstag ist am zehnten März." },
      { id: "ag1505", satz: "Trabajo cinco días a la ___.", loesung: "semana", tipps: ["semana", "mes", "hora"], hinweis: "pro Woche", ue: "Ich arbeite fünf Tage pro Woche." }
    ]
  }
});

LEKTION('es-419', {
  tag: 16, niveau: "A1", thema: "Mahlzeiten und Gewohnheiten",
  vokabeln: [
    { id: "av1601", es: "desayunar",    de: "frühstücken",         wortart: "Verb",       beispiel: "Desayuno a las siete.", beispielUe: "Ich frühstücke um sieben." },
    { id: "av1602", es: "almorzar",     de: "zu Mittag essen",     wortart: "Verb",       beispiel: "Almorzamos en la oficina.", beispielUe: "Wir essen im Büro zu Mittag." },
    { id: "av1603", es: "cenar",        de: "zu Abend essen",      wortart: "Verb",       beispiel: "Cenamos tarde.", beispielUe: "Wir essen spät zu Abend." },
    { id: "av1604", es: "el desayuno",  de: "das Frühstück",       wortart: "Substantiv", beispiel: "El desayuno está listo.", beispielUe: "Das Frühstück ist fertig." },
    { id: "av1605", es: "el almuerzo",  de: "das Mittagessen",     wortart: "Substantiv", beispiel: "El almuerzo es la comida principal.", beispielUe: "Das Mittagessen ist die Hauptmahlzeit." },
    { id: "av1606", es: "la cena",      de: "das Abendessen",      wortart: "Substantiv", beispiel: "La cena es a las ocho.", beispielUe: "Das Abendessen ist um acht." },
    { id: "av1607", es: "siempre",      de: "immer",               wortart: "Adverb",     beispiel: "Siempre tomo café por la mañana.", beispielUe: "Morgens trinke ich immer Kaffee." },
    { id: "av1608", es: "a veces",      de: "manchmal",            wortart: "Adverb",     beispiel: "A veces como en un restaurante.", beispielUe: "Manchmal esse ich im Restaurant." },
    { id: "av1609", es: "normalmente",  de: "normalerweise",       wortart: "Adverb",     beispiel: "Normalmente trabajo hasta las cinco.", beispielUe: "Normalerweise arbeite ich bis fünf." },
    { id: "av1610", es: "después",      de: "danach, später",      wortart: "Adverb",     beispiel: "Primero trabajo y después estudio.", beispielUe: "Zuerst arbeite ich und danach lerne ich." }
  ],
  saetze: [
    { id: "as1601", es: "¿A qué hora desayunas?",                 de: "Um wie viel Uhr frühstückst du?" },
    { id: "as1602", es: "Normalmente almuerzo a la una.",         de: "Normalerweise esse ich um eins zu Mittag." },
    { id: "as1603", es: "Nunca ceno muy tarde.",                  de: "Ich esse nie sehr spät zu Abend." },
    { id: "as1604", es: "A veces desayunamos en un café.",        de: "Manchmal frühstücken wir in einem Café." },
    { id: "as1605", es: "Después del trabajo voy al gimnasio.",   de: "Nach der Arbeit gehe ich ins Fitnessstudio." }
  ],
  grammatik: {
    id: "ag16", titel: "Wie oft? siempre, a veces, nunca",
    erklaerung: `
      <p>Mit diesen Wörtern sagst du, wie oft du etwas tust. Sie stehen meist am Satzanfang
      oder direkt vor dem Verb.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th></tr>
        <tr><td>siempre</td><td>immer</td></tr>
        <tr><td>casi siempre</td><td>fast immer</td></tr>
        <tr><td>normalmente</td><td>normalerweise</td></tr>
        <tr><td>a veces</td><td>manchmal</td></tr>
        <tr><td>casi nunca</td><td>fast nie</td></tr>
        <tr><td>nunca</td><td>nie</td></tr>
      </table>
      <div class="merke"><em>nunca</em> vor dem Verb reicht allein: <em>Nunca ceno tarde.</em>
      Steht es hinter dem Verb, braucht man zusätzlich <em>no</em> davor: <em>No ceno nunca
      tarde.</em> — die doppelte Verneinung ist im Spanischen richtig.</div>
      <p><em>almorzar</em> ändert im Stamm <em>o</em> zu <em>ue</em>: almuerzo, almuerzas,
      almuerza, almorzamos, almuerzan — nur <em>nosotros</em> bleibt regelmäßig.</p>`,
    uebungen: [
      { id: "ag1601", satz: "___ tomo café por la mañana. (immer)", loesung: "Siempre", tipps: ["Siempre", "Nunca", "Después"], hinweis: "immer", ue: "Morgens trinke ich immer Kaffee." },
      { id: "ag1602", satz: "___ como carne, soy vegetariano. (nie)", loesung: "Nunca", tipps: ["Nunca", "Siempre", "A veces"], hinweis: "nie", ue: "Ich esse nie Fleisch, ich bin Vegetarier." },
      { id: "ag1603", satz: "Yo ___ a la una. (almorzar)", loesung: "almuerzo", tipps: ["almuerzo", "almorzo", "almuerza"], hinweis: "o → ue", ue: "Ich esse um eins zu Mittag." },
      { id: "ag1604", satz: "Nosotros ___ a las nueve. (cenar)", loesung: "cenamos", tipps: ["cenamos", "cenan", "ceno"], hinweis: "nosotros: -amos", ue: "Wir essen um neun zu Abend." },
      { id: "ag1605", satz: "Primero trabajo y ___ estudio.", loesung: "después", tipps: ["después", "antes", "siempre"], hinweis: "danach", ue: "Zuerst arbeite ich und danach lerne ich." }
    ]
  }
});

LEKTION('es-419', {
  tag: 17, niveau: "A1", thema: "Lebensmittel",
  vokabeln: [
    { id: "av1701", es: "el pan",       de: "das Brot",                   wortart: "Substantiv", beispiel: "Compro pan en la panadería.", beispielUe: "Ich kaufe Brot in der Bäckerei." },
    { id: "av1702", es: "el queso",     de: "der Käse",                   wortart: "Substantiv", beispiel: "Me gusta el queso fresco.", beispielUe: "Ich mag Frischkäse." },
    { id: "av1703", es: "el huevo",     de: "das Ei",                     wortart: "Substantiv", beispiel: "Desayuno dos huevos.", beispielUe: "Ich esse zwei Eier zum Frühstück." },
    { id: "av1704", es: "la leche",     de: "die Milch",                  wortart: "Substantiv", beispiel: "¿Tomas café con leche?", beispielUe: "Trinkst du Milchkaffee?" },
    { id: "av1705", es: "el arroz",     de: "der Reis",                   wortart: "Substantiv", beispiel: "El arroz con pollo es típico.", beispielUe: "Reis mit Hähnchen ist typisch." },
    { id: "av1706", es: "los frijoles", de: "die Bohnen",                 wortart: "Substantiv", beispiel: "Los frijoles negros son muy ricos.", beispielUe: "Die schwarzen Bohnen sind sehr lecker." },
    { id: "av1707", es: "la carne",     de: "das Fleisch",                wortart: "Substantiv", beispiel: "No como carne.", beispielUe: "Ich esse kein Fleisch." },
    { id: "av1708", es: "el pollo",     de: "das Hähnchen",               wortart: "Substantiv", beispiel: "Quiero pollo con papas.", beispielUe: "Ich möchte Hähnchen mit Kartoffeln." },
    { id: "av1709", es: "el pescado",   de: "der Fisch (als Essen)",      wortart: "Substantiv", beispiel: "El pescado está fresco.", beispielUe: "Der Fisch ist frisch." },
    { id: "av1710", es: "querer",       de: "wollen, möchten; lieben",    wortart: "Verb",       beispiel: "Quiero un jugo de naranja.", beispielUe: "Ich möchte einen Orangensaft." }
  ],
  saetze: [
    { id: "as1701", es: "¿Qué quieres comer? Quiero arroz con pollo.",   de: "Was möchtest du essen? Ich möchte Reis mit Hähnchen." },
    { id: "as1702", es: "No queremos carne, gracias.",                   de: "Wir möchten kein Fleisch, danke." },
    { id: "as1703", es: "¿Hay huevos en el refrigerador?",               de: "Gibt es Eier im Kühlschrank?" },
    { id: "as1704", es: "El pan de aquí es muy rico.",                   de: "Das Brot hier ist sehr lecker." },
    { id: "as1705", es: "Mi hijo no quiere leche.",                      de: "Mein Sohn will keine Milch." }
  ],
  grammatik: {
    id: "ag17", titel: "querer — aus e wird ie",
    erklaerung: `
      <p>Bei manchen Verben ändert sich der Stammvokal, sobald er betont ist. Bei
      <em>querer</em> wird aus <em>e</em> ein <em>ie</em>.</p>
      <table>
        <tr><th>Person</th><th>querer</th></tr>
        <tr><td>yo</td><td>qu<strong>ie</strong>ro</td></tr>
        <tr><td>tú</td><td>qu<strong>ie</strong>res</td></tr>
        <tr><td>él / ella / usted</td><td>qu<strong>ie</strong>re</td></tr>
        <tr><td>nosotros</td><td>qu<strong>e</strong>remos</td></tr>
        <tr><td>ustedes / ellos</td><td>qu<strong>ie</strong>ren</td></tr>
      </table>
      <div class="merke">Nur <em>nosotros</em> bleibt regelmäßig (<em>queremos</em>), weil dort
      die Betonung auf der Endung liegt. Dasselbe Muster haben z. B. <em>empezar</em>
      (empiezo) und <em>preferir</em> (prefiero).</div>
      <p><em>querer</em> geht mit einem Nomen (<em>Quiero pan.</em>) oder mit einem
      Infinitiv (<em>Quiero comer.</em>). Zu Menschen heißt es „lieben":
      <em>Te quiero.</em> — Ich hab dich lieb.</p>`,
    uebungen: [
      { id: "ag1701", satz: "Yo ___ un café. (querer)", loesung: "quiero", tipps: ["quiero", "quero", "quiere"], hinweis: "e → ie", ue: "Ich möchte einen Kaffee." },
      { id: "ag1702", satz: "¿Tú ___ pollo o pescado?", loesung: "quieres", tipps: ["quieres", "queres", "quiere"], hinweis: "tú: quieres", ue: "Möchtest du Hähnchen oder Fisch?" },
      { id: "ag1703", satz: "Nosotros ___ comer aquí.", loesung: "queremos", tipps: ["queremos", "quieremos", "quieren"], hinweis: "nosotros: kein ie", ue: "Wir möchten hier essen." },
      { id: "ag1704", satz: "Mi hija no ___ leche.", loesung: "quiere", tipps: ["quiere", "quieres", "quieren"], hinweis: "ella: quiere", ue: "Meine Tochter will keine Milch." },
      { id: "ag1705", satz: "Soy vegetariana, no como ___.", loesung: "carne", tipps: ["carne", "queso", "pan"], hinweis: "Fleisch", ue: "Ich bin Vegetarierin, ich esse kein Fleisch." }
    ]
  }
});

LEKTION('es-419', {
  tag: 18, niveau: "A1", thema: "Im Café: Getränke bestellen",
  vokabeln: [
    { id: "av1801", es: "el agua",      de: "das Wasser",                  wortart: "Substantiv", beispiel: "Un agua sin gas, por favor.", beispielUe: "Ein stilles Wasser, bitte." },
    { id: "av1802", es: "el café",      de: "der Kaffee; das Café",        wortart: "Substantiv", beispiel: "Un café negro, por favor.", beispielUe: "Einen schwarzen Kaffee, bitte." },
    { id: "av1803", es: "el té",        de: "der Tee",                     wortart: "Substantiv", beispiel: "¿Quieres un té?", beispielUe: "Möchtest du einen Tee?" },
    { id: "av1804", es: "el jugo",      de: "der Saft",                    wortart: "Substantiv", beispiel: "Un jugo de mango, por favor.", beispielUe: "Einen Mangosaft, bitte." },
    { id: "av1805", es: "la cerveza",   de: "das Bier",                    wortart: "Substantiv", beispiel: "Dos cervezas bien frías.", beispielUe: "Zwei gut gekühlte Bier." },
    { id: "av1806", es: "el vino",      de: "der Wein",                    wortart: "Substantiv", beispiel: "Prefiero el vino tinto.", beispielUe: "Ich mag lieber Rotwein." },
    { id: "av1807", es: "el vaso",      de: "das Glas (zum Trinken)",      wortart: "Substantiv", beispiel: "Un vaso de agua, por favor.", beispielUe: "Ein Glas Wasser, bitte." },
    { id: "av1808", es: "la taza",      de: "die Tasse",                   wortart: "Substantiv", beispiel: "Una taza de té.", beispielUe: "Eine Tasse Tee." },
    { id: "av1809", es: "la botella",   de: "die Flasche",                 wortart: "Substantiv", beispiel: "Una botella de vino tinto.", beispielUe: "Eine Flasche Rotwein." },
    { id: "av1810", es: "caliente",     de: "heiß, warm (Getränk, Essen)", wortart: "Adjektiv",   beispiel: "El café está muy caliente.", beispielUe: "Der Kaffee ist sehr heiß." }
  ],
  saetze: [
    { id: "as1801", es: "Quisiera un café con leche, por favor.",      de: "Ich hätte gern einen Milchkaffee, bitte." },
    { id: "as1802", es: "Para mí, un jugo de naranja.",                 de: "Für mich einen Orangensaft." },
    { id: "as1803", es: "¿Me trae un vaso de agua, por favor?",         de: "Bringen Sie mir bitte ein Glas Wasser?" },
    { id: "as1804", es: "¿Algo más? No, gracias.",                      de: "Noch etwas? Nein, danke." },
    { id: "as1805", es: "La cerveza no está fría.",                     de: "Das Bier ist nicht kalt." }
  ],
  grammatik: {
    id: "ag18", titel: "Höflich bestellen",
    erklaerung: `
      <p>Im Café und im Restaurant reichen ein paar feste Wendungen. Mit ihnen klingst du
      höflich, ohne komplizierte Grammatik zu brauchen.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th></tr>
        <tr><td><strong>Quisiera</strong> un café.</td><td>Ich hätte gern einen Kaffee.</td></tr>
        <tr><td><strong>Para mí,</strong> un jugo.</td><td>Für mich einen Saft.</td></tr>
        <tr><td>¿<strong>Me trae</strong> un vaso de agua?</td><td>Bringen Sie mir ein Glas Wasser?</td></tr>
        <tr><td>¿<strong>Me da</strong> la carta, por favor?</td><td>Geben Sie mir bitte die Karte?</td></tr>
        <tr><td>Un agua <strong>con gas / sin gas</strong>.</td><td>Ein Wasser mit / ohne Kohlensäure.</td></tr>
      </table>
      <div class="merke"><em>el agua</em> ist eigentlich weiblich — es bekommt nur
      <em>el</em>, weil es mit einem betonten <em>a</em> beginnt. Das Adjektiv bleibt
      weiblich: <em>el agua fría</em>, im Plural <em>las aguas</em>.</div>
      <p>Nach Präpositionen heißt „ich" <strong>mí</strong> (mit Akzent): <em>para mí</em>.
      Ohne Akzent ist <em>mi</em> „mein".</p>`,
    uebungen: [
      { id: "ag1801", satz: "___ un café, por favor. (ich hätte gern)", loesung: "Quisiera", tipps: ["Quisiera", "Quiere", "Quisieras"], hinweis: "höflich: quisiera", ue: "Ich hätte gern einen Kaffee, bitte." },
      { id: "ag1802", satz: "Para ___, un jugo de mango.", loesung: "mí", tipps: ["mí", "mi", "yo"], hinweis: "nach para: mí mit Akzent", ue: "Für mich einen Mangosaft." },
      { id: "ag1803", satz: "¿Me ___ un vaso de agua? (traer, usted)", loesung: "trae", tipps: ["trae", "traes", "traigo"], hinweis: "usted: trae", ue: "Bringen Sie mir ein Glas Wasser?" },
      { id: "ag1804", satz: "El agua está muy ___. (kalt)", loesung: "fría", tipps: ["fría", "frío", "fríos"], hinweis: "agua ist weiblich", ue: "Das Wasser ist sehr kalt." },
      { id: "ag1805", satz: "Una ___ de té, por favor.", loesung: "taza", tipps: ["taza", "botella", "vaso"], hinweis: "Tasse", ue: "Eine Tasse Tee, bitte." }
    ]
  }
});

LEKTION('es-419', {
  tag: 19, niveau: "A1", thema: "Auf dem Markt",
  vokabeln: [
    { id: "av1901", es: "el mercado",   de: "der Markt",       wortart: "Substantiv", beispiel: "Los sábados voy al mercado.", beispielUe: "Samstags gehe ich auf den Markt." },
    { id: "av1902", es: "costar",       de: "kosten",          wortart: "Verb",       beispiel: "¿Cuánto cuesta el kilo?", beispielUe: "Was kostet das Kilo?" },
    { id: "av1903", es: "el kilo",      de: "das Kilo",        wortart: "Substantiv", beispiel: "Un kilo de tomates, por favor.", beispielUe: "Ein Kilo Tomaten, bitte." },
    { id: "av1904", es: "la manzana",   de: "der Apfel",       wortart: "Substantiv", beispiel: "Las manzanas son de Chile.", beispielUe: "Die Äpfel sind aus Chile." },
    { id: "av1905", es: "el plátano",   de: "die Banane",      wortart: "Substantiv", beispiel: "Aquí el plátano es muy barato.", beispielUe: "Bananen sind hier sehr billig." },
    { id: "av1906", es: "la naranja",   de: "die Orange",      wortart: "Substantiv", beispiel: "Un kilo de naranjas para jugo.", beispielUe: "Ein Kilo Orangen zum Pressen." },
    { id: "av1907", es: "el tomate",    de: "die Tomate",      wortart: "Substantiv", beispiel: "Los tomates están muy rojos.", beispielUe: "Die Tomaten sind sehr rot." },
    { id: "av1908", es: "la papa",      de: "die Kartoffel",   wortart: "Substantiv", beispiel: "Las papas son de Perú.", beispielUe: "Die Kartoffeln sind aus Peru." },
    { id: "av1909", es: "la cebolla",   de: "die Zwiebel",     wortart: "Substantiv", beispiel: "Necesito dos cebollas.", beispielUe: "Ich brauche zwei Zwiebeln." },
    { id: "av1910", es: "el dinero",    de: "das Geld",        wortart: "Substantiv", beispiel: "No tengo mucho dinero.", beispielUe: "Ich habe nicht viel Geld." }
  ],
  saetze: [
    { id: "as1901", es: "¿Cuánto cuestan las manzanas?",         de: "Was kosten die Äpfel?" },
    { id: "as1902", es: "Medio kilo de cebollas, por favor.",    de: "Ein halbes Kilo Zwiebeln, bitte." },
    { id: "as1903", es: "Son veinte pesos el kilo.",             de: "Das Kilo kostet zwanzig Pesos." },
    { id: "as1904", es: "¿Algo más? Sí, un kilo de papas.",      de: "Noch etwas? Ja, ein Kilo Kartoffeln." },
    { id: "as1905", es: "Aquí tiene, muchas gracias.",           de: "Bitte schön, vielen Dank." }
  ],
  grammatik: {
    id: "ag19", titel: "¿Cuánto cuesta? Preise und Mengen",
    erklaerung: `
      <p>Auf dem Markt brauchst du drei Dinge: nach dem Preis fragen, eine Menge nennen und
      bezahlen. <em>costar</em> ändert dabei <em>o</em> zu <em>ue</em>.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th></tr>
        <tr><td>¿Cuánto <strong>cuesta</strong> el queso?</td><td>Was kostet der Käse? (eine Sache)</td></tr>
        <tr><td>¿Cuánto <strong>cuestan</strong> las papas?</td><td>Was kosten die Kartoffeln? (mehrere)</td></tr>
        <tr><td>un kilo <strong>de</strong> tomates</td><td>ein Kilo Tomaten</td></tr>
        <tr><td><strong>medio</strong> kilo de cebollas</td><td>ein halbes Kilo Zwiebeln</td></tr>
        <tr><td>una docena de huevos</td><td>ein Dutzend Eier</td></tr>
        <tr><td>¿Cuánto <strong>es</strong>?</td><td>Was macht das?</td></tr>
      </table>
      <div class="merke">Nach jeder Mengenangabe kommt <strong>de</strong> — und zwar ohne
      Artikel: <em>un kilo de tomates</em>, nicht <em>un kilo de los tomates</em>.</div>
      <p>Die Währung heißt in vielen Ländern <em>peso</em> (Mexiko, Kolumbien, Chile,
      Argentinien), in Peru <em>sol</em>, in Ecuador zahlt man mit Dollar.</p>`,
    uebungen: [
      { id: "ag1901", satz: "¿Cuánto ___ el kilo de tomates?", loesung: "cuesta", tipps: ["cuesta", "cuestan", "costa"], hinweis: "eine Sache: cuesta", ue: "Was kostet das Kilo Tomaten?" },
      { id: "ag1902", satz: "¿Cuánto ___ las manzanas?", loesung: "cuestan", tipps: ["cuestan", "cuesta", "costan"], hinweis: "mehrere: cuestan", ue: "Was kosten die Äpfel?" },
      { id: "ag1903", satz: "Un kilo ___ papas, por favor.", loesung: "de", tipps: ["de", "del", "con"], hinweis: "nach der Menge: de ohne Artikel", ue: "Ein Kilo Kartoffeln, bitte." },
      { id: "ag1904", satz: "___ kilo de cebollas. (halb)", loesung: "Medio", tipps: ["Medio", "Media", "Mitad"], hinweis: "kilo ist männlich: medio", ue: "Ein halbes Kilo Zwiebeln." },
      { id: "ag1905", satz: "¿Cuánto ___? Son cincuenta pesos.", loesung: "es", tipps: ["es", "está", "hay"], hinweis: "was macht das? = ¿cuánto es?", ue: "Was macht das? Fünfzig Pesos." }
    ]
  }
});

LEKTION('es-419', {
  tag: 20, niveau: "A1", thema: "Kleidung",
  vokabeln: [
    { id: "av2001", es: "la ropa",       de: "die Kleidung",           wortart: "Substantiv", beispiel: "Compro ropa en el centro.", beispielUe: "Ich kaufe Kleidung im Zentrum." },
    { id: "av2002", es: "la camisa",     de: "das Hemd",               wortart: "Substantiv", beispiel: "La camisa blanca es para la oficina.", beispielUe: "Das weiße Hemd ist fürs Büro." },
    { id: "av2003", es: "la camiseta",   de: "das T-Shirt",            wortart: "Substantiv", beispiel: "Llevo una camiseta azul.", beispielUe: "Ich trage ein blaues T-Shirt." },
    { id: "av2004", es: "el pantalón",   de: "die Hose",               wortart: "Substantiv", beispiel: "El pantalón es muy largo.", beispielUe: "Die Hose ist sehr lang." },
    { id: "av2005", es: "la falda",      de: "der Rock",               wortart: "Substantiv", beispiel: "Me gusta tu falda.", beispielUe: "Mir gefällt dein Rock." },
    { id: "av2006", es: "el vestido",    de: "das Kleid",              wortart: "Substantiv", beispiel: "Ella lleva un vestido rojo.", beispielUe: "Sie trägt ein rotes Kleid." },
    { id: "av2007", es: "los zapatos",   de: "die Schuhe",             wortart: "Substantiv", beispiel: "Necesito zapatos nuevos.", beispielUe: "Ich brauche neue Schuhe." },
    { id: "av2008", es: "la chaqueta",   de: "die Jacke",              wortart: "Substantiv", beispiel: "Hoy llevo una chaqueta negra.", beispielUe: "Heute trage ich eine schwarze Jacke." },
    { id: "av2009", es: "llevar",        de: "tragen; mitnehmen",      wortart: "Verb",       beispiel: "¿Qué llevas hoy?", beispielUe: "Was trägst du heute?" },
    { id: "av2010", es: "nuevo",         de: "neu",                    wortart: "Adjektiv",   beispiel: "Mi celular es nuevo.", beispielUe: "Mein Handy ist neu." }
  ],
  saetze: [
    { id: "as2001", es: "Llevo una camisa blanca y un pantalón negro.",   de: "Ich trage ein weißes Hemd und eine schwarze Hose." },
    { id: "as2002", es: "¿Te gusta mi vestido nuevo?",                    de: "Gefällt dir mein neues Kleid?" },
    { id: "as2003", es: "Los zapatos rojos son muy bonitos.",             de: "Die roten Schuhe sind sehr schön." },
    { id: "as2004", es: "Necesito una chaqueta para el invierno.",        de: "Ich brauche eine Jacke für den Winter." },
    { id: "as2005", es: "La ropa está en el cuarto.",                     de: "Die Kleidung ist im Zimmer." }
  ],
  grammatik: {
    id: "ag20", titel: "Adjektive passen sich an",
    erklaerung: `
      <p>Ein Adjektiv richtet sich im Spanischen nach seinem Nomen — im Geschlecht und in
      der Zahl. Und es steht normalerweise <strong>hinter</strong> dem Nomen.</p>
      <table>
        <tr><th></th><th>Singular</th><th>Plural</th></tr>
        <tr><td>männlich, -o</td><td>el pantalón negr<strong>o</strong></td><td>los pantalones negr<strong>os</strong></td></tr>
        <tr><td>weiblich, -a</td><td>la falda negr<strong>a</strong></td><td>las faldas negr<strong>as</strong></td></tr>
        <tr><td>Adjektiv auf -e</td><td>la camisa verde</td><td>las camisas verde<strong>s</strong></td></tr>
        <tr><td>Adjektiv auf Konsonant</td><td>el vestido azul</td><td>los vestidos azul<strong>es</strong></td></tr>
      </table>
      <div class="merke">Adjektive auf <em>-e</em> oder Konsonant haben <strong>keine</strong>
      weibliche Form: <em>un vestido verde, una falda verde</em>. Nur im Plural kommt
      <em>-s</em> oder <em>-es</em> dazu.</div>
      <p><em>llevar</em> heißt „tragen" (Kleidung) und auch „mitnehmen": <em>Llevo
      un paraguas.</em> — Ich nehme einen Schirm mit.</p>`,
    uebungen: [
      { id: "ag2001", satz: "Llevo una falda ___. (negro)", loesung: "negra", tipps: ["negra", "negro", "negras"], hinweis: "falda ist weiblich", ue: "Ich trage einen schwarzen Rock." },
      { id: "ag2002", satz: "Los zapatos son ___. (nuevo)", loesung: "nuevos", tipps: ["nuevos", "nuevo", "nuevas"], hinweis: "männlich Plural", ue: "Die Schuhe sind neu." },
      { id: "ag2003", satz: "Me gustan las camisas ___. (blanco)", loesung: "blancas", tipps: ["blancas", "blancos", "blanca"], hinweis: "weiblich Plural", ue: "Mir gefallen die weißen Hemden." },
      { id: "ag2004", satz: "Ella lleva un vestido ___. (verde)", loesung: "verde", tipps: ["verde", "verda", "verdes"], hinweis: "Adjektive auf -e: eine Form im Singular", ue: "Sie trägt ein grünes Kleid." },
      { id: "ag2005", satz: "¿Qué ___ hoy? (tú, llevar)", loesung: "llevas", tipps: ["llevas", "lleva", "llevo"], hinweis: "tú: -as", ue: "Was trägst du heute?" }
    ]
  }
});
