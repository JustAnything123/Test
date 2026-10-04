/* Tag 1–10 · Niveau A1 · Der Einstieg: grüßen, sich vorstellen, Zahlen, Dinge, Verben
   Seit Oktober 2026. Eigene IDs (av / as / ag), damit nichts mit den Tagen
   31–120 kollidiert. Aufbau wie überall: 10 Vokabeln, 5 Sätze, 1 Grammatik. */

LEKTION('es-419', {
  tag: 1, niveau: "A1", thema: "Hallo! Begrüßen und verabschieden",
  vokabeln: [
    { id: "av0101", es: "hola",          de: "hallo",                               wortart: "Ausdruck", beispiel: "¡Hola! ¿Qué tal?", beispielUe: "Hallo! Wie geht's?" },
    { id: "av0102", es: "buenos días",   de: "guten Morgen, guten Tag (vormittags)", wortart: "Ausdruck", beispiel: "Buenos días, señora López.", beispielUe: "Guten Morgen, Frau López." },
    { id: "av0103", es: "buenas tardes", de: "guten Tag (nachmittags)",              wortart: "Ausdruck", beispiel: "Buenas tardes, ¿cómo está?", beispielUe: "Guten Tag, wie geht es Ihnen?" },
    { id: "av0104", es: "buenas noches", de: "guten Abend; gute Nacht",              wortart: "Ausdruck", beispiel: "Buenas noches y hasta mañana.", beispielUe: "Gute Nacht und bis morgen." },
    { id: "av0105", es: "adiós",         de: "auf Wiedersehen, tschüss",             wortart: "Ausdruck", beispiel: "Adiós, nos vemos.", beispielUe: "Tschüss, wir sehen uns." },
    { id: "av0106", es: "chao",          de: "tschüss (locker)",                     wortart: "Ausdruck", beispiel: "¡Chao, hasta luego!", beispielUe: "Tschüss, bis später!" },
    { id: "av0107", es: "hasta luego",   de: "bis später",                           wortart: "Ausdruck", beispiel: "Hasta luego, Ana.", beispielUe: "Bis später, Ana." },
    { id: "av0108", es: "gracias",       de: "danke",                                wortart: "Ausdruck", beispiel: "Muchas gracias por todo.", beispielUe: "Vielen Dank für alles." },
    { id: "av0109", es: "por favor",     de: "bitte (bei einer Bitte)",              wortart: "Ausdruck", beispiel: "Un café, por favor.", beispielUe: "Einen Kaffee, bitte." },
    { id: "av0110", es: "de nada",       de: "gern geschehen",                       wortart: "Ausdruck", beispiel: "Gracias. De nada.", beispielUe: "Danke. Gern geschehen." }
  ],
  saetze: [
    { id: "as0101", es: "¡Hola! ¿Cómo estás?",                 de: "Hallo! Wie geht es dir?" },
    { id: "as0102", es: "Muy bien, gracias. ¿Y tú?",           de: "Sehr gut, danke. Und dir?" },
    { id: "as0103", es: "Buenos días, ¿cómo está usted?",      de: "Guten Morgen, wie geht es Ihnen?" },
    { id: "as0104", es: "Mucho gusto.",                        de: "Freut mich." },
    { id: "as0105", es: "Hasta mañana, que te vaya bien.",     de: "Bis morgen, mach's gut." }
  ],
  grammatik: {
    id: "ag01", titel: "Aussprache: so klingt Lateinamerika",
    erklaerung: `
      <p>Spanisch spricht man fast so, wie man es schreibt. Wer ein paar Regeln kennt, kann
      jedes Wort vorlesen — auch eines, das er noch nie gehört hat.</p>
      <table>
        <tr><th>Buchstabe</th><th>klingt wie</th><th>Beispiel</th></tr>
        <tr><td>h</td><td>stumm — man hört nichts</td><td><em>hola</em> = „ola"</td></tr>
        <tr><td>j, ge, gi</td><td>ch wie in „ach"</td><td><em>Jorge, gente</em></td></tr>
        <tr><td>ll, y</td><td>wie ein weiches „j" (Argentinien: „sch")</td><td><em>llamar, yo</em></td></tr>
        <tr><td>ñ</td><td>nj wie in „Champagner"</td><td><em>mañana, España</em></td></tr>
        <tr><td>c vor e/i, z</td><td>scharfes s — in Lateinamerika kein Lispeln</td><td><em>gracias, cerveza</em></td></tr>
        <tr><td>qu</td><td>k (das u ist stumm)</td><td><em>que, queso</em></td></tr>
        <tr><td>r am Anfang, rr</td><td>gerolltes Zungen-r</td><td><em>Rosa, perro</em></td></tr>
        <tr><td>v</td><td>fast wie b</td><td><em>vino</em> ≈ „bino"</td></tr>
      </table>
      <div class="merke"><strong>Betonung:</strong> Endet ein Wort auf Vokal, <em>n</em> oder
      <em>s</em>, wird die vorletzte Silbe betont (<em>ca-sa, ha-blan</em>). Sonst die letzte
      (<em>ha-blar, ciu-dad</em>). Ein Akzent zeigt die Ausnahme: <em>ca-fé, a-diós</em>.</div>
      <p>Fragen und Ausrufe bekommen vorne ein umgedrehtes Zeichen: <em>¿Cómo estás?</em>
      — <em>¡Hola!</em> Tagsüber grüßt man mit <em>buenos días</em> (bis Mittag),
      <em>buenas tardes</em> (bis zum Dunkelwerden), danach <em>buenas noches</em>.</p>`,
    uebungen: [
      { id: "ag0101", satz: "Buenas ___, ¿cómo está? (nachmittags)", loesung: "tardes", tipps: ["tardes", "noches", "días"], hinweis: "nachmittags", ue: "Guten Tag, wie geht es Ihnen?" },
      { id: "ag0102", satz: "Muchas ___ por la ayuda.", loesung: "gracias", tipps: ["gracias", "nada", "favor"], hinweis: "danke", ue: "Vielen Dank für die Hilfe." },
      { id: "ag0103", satz: "Gracias. De ___.", loesung: "nada", tipps: ["nada", "gracias", "favor"], hinweis: "gern geschehen", ue: "Danke. Gern geschehen." },
      { id: "ag0104", satz: "Un jugo, por ___.", loesung: "favor", tipps: ["favor", "gracias", "nada"], hinweis: "bitte", ue: "Einen Saft, bitte." },
      { id: "ag0105", satz: "Buenos ___, señor García. (morgens)", loesung: "días", tipps: ["días", "tardes", "noches"], hinweis: "vormittags", ue: "Guten Morgen, Herr García." }
    ]
  }
});

LEKTION('es-419', {
  tag: 2, niveau: "A1", thema: "Wie heißt du? Name und Herkunft",
  vokabeln: [
    { id: "av0201", es: "llamarse",    de: "heißen",                     wortart: "Verb",       beispiel: "Me llamo Julia.", beispielUe: "Ich heiße Julia." },
    { id: "av0202", es: "el nombre",   de: "der Vorname, der Name",      wortart: "Substantiv", beispiel: "¿Cuál es tu nombre?", beispielUe: "Wie ist dein Name?" },
    { id: "av0203", es: "ser",         de: "sein (Wesen, Herkunft)",     wortart: "Verb",       beispiel: "Soy de Alemania.", beispielUe: "Ich bin aus Deutschland." },
    { id: "av0204", es: "el país",     de: "das Land",                   wortart: "Substantiv", beispiel: "México es un país grande.", beispielUe: "Mexiko ist ein großes Land." },
    { id: "av0205", es: "la ciudad",   de: "die Stadt",                  wortart: "Substantiv", beispiel: "Bogotá es una ciudad muy alta.", beispielUe: "Bogotá ist eine sehr hoch gelegene Stadt." },
    { id: "av0206", es: "de dónde",    de: "woher",                      wortart: "Fragewort",  beispiel: "¿De dónde eres?", beispielUe: "Woher kommst du?" },
    { id: "av0207", es: "el señor",    de: "der Herr",                   wortart: "Substantiv", beispiel: "El señor Ruiz es mi profesor.", beispielUe: "Herr Ruiz ist mein Lehrer." },
    { id: "av0208", es: "la señora",   de: "die Frau (Anrede)",          wortart: "Substantiv", beispiel: "La señora Pérez vive aquí.", beispielUe: "Frau Pérez wohnt hier." },
    { id: "av0209", es: "usted",       de: "Sie (höflich, eine Person)", wortart: "Pronomen",   beispiel: "¿Usted es el doctor Gómez?", beispielUe: "Sind Sie Doktor Gómez?" },
    { id: "av0210", es: "ustedes",     de: "ihr; Sie (mehrere)",         wortart: "Pronomen",   beispiel: "¿Ustedes son de Chile?", beispielUe: "Seid ihr aus Chile?" }
  ],
  saetze: [
    { id: "as0201", es: "Me llamo Tom y soy de Hamburgo.",   de: "Ich heiße Tom und komme aus Hamburg." },
    { id: "as0202", es: "¿Cómo te llamas?",                  de: "Wie heißt du?" },
    { id: "as0203", es: "¿De dónde es usted?",               de: "Woher kommen Sie?" },
    { id: "as0204", es: "Somos de Alemania, de Múnich.",     de: "Wir sind aus Deutschland, aus München." },
    { id: "as0205", es: "Ella es Lucía, mi amiga de Lima.",  de: "Das ist Lucía, meine Freundin aus Lima." }
  ],
  grammatik: {
    id: "ag02", titel: "Die Personalpronomen und ser",
    erklaerung: `
      <p><em>ser</em> heißt „sein" — für das, was jemand <strong>ist</strong>: Name, Herkunft,
      Beruf. Es ist unregelmäßig, also am besten gleich auswendig lernen.</p>
      <table>
        <tr><th>Person</th><th>ser</th><th>Beispiel</th></tr>
        <tr><td>yo (ich)</td><td><strong>soy</strong></td><td>Soy Tom.</td></tr>
        <tr><td>tú (du)</td><td><strong>eres</strong></td><td>¿Eres de Berlín?</td></tr>
        <tr><td>él / ella / usted (er / sie / Sie)</td><td><strong>es</strong></td><td>Ella es Lucía.</td></tr>
        <tr><td>nosotros / nosotras (wir)</td><td><strong>somos</strong></td><td>Somos alemanes.</td></tr>
        <tr><td>ustedes (ihr / Sie)</td><td><strong>son</strong></td><td>¿Ustedes son de Chile?</td></tr>
        <tr><td>ellos / ellas (sie)</td><td><strong>son</strong></td><td>Son de Perú.</td></tr>
      </table>
      <div class="merke"><strong>Kein vosotros:</strong> In Lateinamerika sagt man zu
      mehreren Personen immer <em>ustedes</em> — zu Freunden genauso wie zu Fremden. Das
      spanische <em>vosotros</em> brauchst du hier nicht. (In Argentinien sagt man statt
      <em>tú</em> oft <em>vos</em> — das lernst du später.)</div>
      <p>Das Pronomen lässt man meist weg, weil die Verbform schon zeigt, wer gemeint ist:
      <em>Soy de Berlín.</em> statt <em>Yo soy de Berlín.</em></p>`,
    uebungen: [
      { id: "ag0201", satz: "Yo ___ de Alemania.", loesung: "soy", tipps: ["soy", "eres", "es"], hinweis: "ser mit yo", ue: "Ich bin aus Deutschland." },
      { id: "ag0202", satz: "¿Tú ___ de México?", loesung: "eres", tipps: ["eres", "es", "soy"], hinweis: "ser mit tú", ue: "Bist du aus Mexiko?" },
      { id: "ag0203", satz: "Nosotros ___ de Colonia.", loesung: "somos", tipps: ["somos", "son", "sois"], hinweis: "ser mit nosotros", ue: "Wir sind aus Köln." },
      { id: "ag0204", satz: "¿Ustedes ___ de Perú?", loesung: "son", tipps: ["son", "sois", "somos"], hinweis: "ustedes statt vosotros", ue: "Seid ihr aus Peru?" },
      { id: "ag0205", satz: "Ella ___ Lucía.", loesung: "es", tipps: ["es", "está", "eres"], hinweis: "Name: ser", ue: "Sie ist Lucía." }
    ]
  }
});

LEKTION('es-419', {
  tag: 3, niveau: "A1", thema: "Länder, Nationalitäten, Sprachen",
  vokabeln: [
    { id: "av0301", es: "alemán, alemana",          de: "deutsch; Deutscher, Deutsche",       wortart: "Adjektiv",   beispiel: "Soy alemán, de Berlín.", beispielUe: "Ich bin Deutscher, aus Berlin." },
    { id: "av0302", es: "mexicano, mexicana",       de: "mexikanisch; Mexikaner(in)",         wortart: "Adjektiv",   beispiel: "Mi esposa es mexicana.", beispielUe: "Meine Frau ist Mexikanerin." },
    { id: "av0303", es: "colombiano, colombiana",   de: "kolumbianisch; Kolumbianer(in)",     wortart: "Adjektiv",   beispiel: "El café colombiano es muy bueno.", beispielUe: "Der kolumbianische Kaffee ist sehr gut." },
    { id: "av0304", es: "argentino, argentina",     de: "argentinisch; Argentinier(in)",      wortart: "Adjektiv",   beispiel: "Mi profesor es argentino.", beispielUe: "Mein Lehrer ist Argentinier." },
    { id: "av0305", es: "peruano, peruana",         de: "peruanisch; Peruaner(in)",           wortart: "Adjektiv",   beispiel: "La comida peruana es famosa.", beispielUe: "Die peruanische Küche ist berühmt." },
    { id: "av0306", es: "el inglés",                de: "Englisch (die Sprache)",             wortart: "Substantiv", beispiel: "Hablo inglés en el trabajo.", beispielUe: "Ich spreche Englisch bei der Arbeit." },
    { id: "av0307", es: "el español",               de: "Spanisch (die Sprache)",             wortart: "Substantiv", beispiel: "Aprendo español desde enero.", beispielUe: "Ich lerne seit Januar Spanisch." },
    { id: "av0308", es: "hablar",                   de: "sprechen",                           wortart: "Verb",       beispiel: "¿Hablas español?", beispielUe: "Sprichst du Spanisch?" },
    { id: "av0309", es: "un poco",                  de: "ein bisschen",                       wortart: "Ausdruck",   beispiel: "Hablo un poco de español.", beispielUe: "Ich spreche ein bisschen Spanisch." },
    { id: "av0310", es: "también",                  de: "auch",                               wortart: "Adverb",     beispiel: "Yo también soy de Alemania.", beispielUe: "Ich bin auch aus Deutschland." }
  ],
  saetze: [
    { id: "as0301", es: "Soy alemana, pero vivo en Quito.",                  de: "Ich bin Deutsche, aber ich wohne in Quito." },
    { id: "as0302", es: "¿Hablas inglés?",                                   de: "Sprichst du Englisch?" },
    { id: "as0303", es: "Hablo alemán, inglés y un poco de español.",        de: "Ich spreche Deutsch, Englisch und ein bisschen Spanisch." },
    { id: "as0304", es: "Mi amigo es colombiano y mi amiga es peruana.",     de: "Mein Freund ist Kolumbianer und meine Freundin ist Peruanerin." },
    { id: "as0305", es: "Nosotros también somos alemanes.",                  de: "Wir sind auch Deutsche." }
  ],
  grammatik: {
    id: "ag03", titel: "Nationalitäten: männlich und weiblich",
    erklaerung: `
      <p>Im Spanischen ist fast jedes Wort männlich oder weiblich — auch die Nationalität.
      Sie richtet sich nach der Person, die man beschreibt.</p>
      <table>
        <tr><th>Regel</th><th>männlich</th><th>weiblich</th><th>Plural</th></tr>
        <tr><td>-o wird -a</td><td>mexican<strong>o</strong></td><td>mexican<strong>a</strong></td><td>mexicanos, mexicanas</td></tr>
        <tr><td>Konsonant + a</td><td>alemán</td><td>aleman<strong>a</strong></td><td>alemanes, alemanas</td></tr>
        <tr><td>Konsonant + a</td><td>inglés</td><td>ingles<strong>a</strong></td><td>ingleses, inglesas</td></tr>
        <tr><td>-e bleibt</td><td>estadounidense</td><td>estadounidense</td><td>estadounidenses</td></tr>
      </table>
      <div class="merke">Nationalitäten und Sprachen schreibt man <strong>klein</strong>:
      <em>alemán, el español</em>. Und der Akzent fällt in der weiblichen Form weg:
      <em>alemán → alemana, inglés → inglesa</em> — die Betonung bleibt trotzdem gleich.</div>
      <p>Eine gemischte Gruppe bekommt die männliche Pluralform: <em>Ana y Tom son
      alemanes.</em></p>`,
    uebungen: [
      { id: "ag0301", satz: "Ana es ___. (de México)", loesung: "mexicana", tipps: ["mexicana", "mexicano", "mexicanos"], hinweis: "weiblich: -a", ue: "Ana ist Mexikanerin." },
      { id: "ag0302", satz: "Hans es ___. (de Alemania)", loesung: "alemán", tipps: ["alemán", "alemana", "alemanes"], hinweis: "männlich, mit Akzent", ue: "Hans ist Deutscher." },
      { id: "ag0303", satz: "Laura y Sofía son ___. (de Colombia)", loesung: "colombianas", tipps: ["colombianas", "colombianos", "colombiana"], hinweis: "weiblich Plural", ue: "Laura und Sofía sind Kolumbianerinnen." },
      { id: "ag0304", satz: "Mi profesora es ___. (de Alemania)", loesung: "alemana", tipps: ["alemana", "alemán", "alemanas"], hinweis: "weiblich: ohne Akzent", ue: "Meine Lehrerin ist Deutsche." },
      { id: "ag0305", satz: "¿___ inglés? (tú, hablar)", loesung: "Hablas", tipps: ["Hablas", "Habla", "Hablo"], hinweis: "tú: -as", ue: "Sprichst du Englisch?" }
    ]
  }
});

LEKTION('es-419', {
  tag: 4, niveau: "A1", thema: "Zahlen bis 20 und das Alter",
  vokabeln: [
    { id: "av0401", es: "cero",            de: "null",                 wortart: "Zahl",       beispiel: "Mi número empieza con cero.", beispielUe: "Meine Nummer beginnt mit null." },
    { id: "av0402", es: "uno",             de: "eins",                 wortart: "Zahl",       beispiel: "Uno, dos, tres… ¡ya!", beispielUe: "Eins, zwei, drei … los!" },
    { id: "av0403", es: "cinco",           de: "fünf",                 wortart: "Zahl",       beispiel: "Somos cinco en la oficina.", beispielUe: "Wir sind fünf im Büro." },
    { id: "av0404", es: "diez",            de: "zehn",                 wortart: "Zahl",       beispiel: "Son diez pesos.", beispielUe: "Das sind zehn Pesos." },
    { id: "av0405", es: "quince",          de: "fünfzehn",             wortart: "Zahl",       beispiel: "Mi hija tiene quince años.", beispielUe: "Meine Tochter ist fünfzehn." },
    { id: "av0406", es: "veinte",          de: "zwanzig",              wortart: "Zahl",       beispiel: "Hay veinte alumnos en la clase.", beispielUe: "In der Klasse sind zwanzig Schüler." },
    { id: "av0407", es: "tener",           de: "haben",                wortart: "Verb",       beispiel: "Tengo dos hermanos.", beispielUe: "Ich habe zwei Geschwister." },
    { id: "av0408", es: "el año",          de: "das Jahr",             wortart: "Substantiv", beispiel: "¿Cuántos años tienes?", beispielUe: "Wie alt bist du?" },
    { id: "av0409", es: "el número",       de: "die Nummer, die Zahl", wortart: "Substantiv", beispiel: "¿Cuál es tu número de celular?", beispielUe: "Wie ist deine Handynummer?" },
    { id: "av0410", es: "cuántos, cuántas", de: "wie viele",           wortart: "Fragewort",  beispiel: "¿Cuántas personas son?", beispielUe: "Wie viele Personen sind es?" }
  ],
  saetze: [
    { id: "as0401", es: "Tengo veinte años.",                    de: "Ich bin zwanzig Jahre alt." },
    { id: "as0402", es: "¿Cuántos años tiene tu hijo?",          de: "Wie alt ist dein Sohn?" },
    { id: "as0403", es: "Mi número de celular es el ocho cinco dos.", de: "Meine Handynummer ist acht fünf zwei." },
    { id: "as0404", es: "Tenemos dos hijos.",                    de: "Wir haben zwei Kinder." },
    { id: "as0405", es: "La clase tiene doce alumnos.",          de: "Der Kurs hat zwölf Teilnehmer." }
  ],
  grammatik: {
    id: "ag04", titel: "tener — haben (und wie alt man ist)",
    erklaerung: `
      <p><em>tener</em> heißt „haben". Auf Spanisch <strong>hat</strong> man sein Alter:
      <em>Tengo 40 años.</em> — wörtlich „ich habe 40 Jahre".</p>
      <table>
        <tr><th>Person</th><th>tener</th></tr>
        <tr><td>yo</td><td><strong>tengo</strong></td></tr>
        <tr><td>tú</td><td><strong>tienes</strong></td></tr>
        <tr><td>él / ella / usted</td><td><strong>tiene</strong></td></tr>
        <tr><td>nosotros</td><td><strong>tenemos</strong></td></tr>
        <tr><td>ustedes / ellos</td><td><strong>tienen</strong></td></tr>
      </table>
      <table>
        <tr><th>0–10</th><th>11–20</th></tr>
        <tr><td>cero, uno, dos, tres, cuatro, cinco</td><td>once, doce, trece, catorce, quince</td></tr>
        <tr><td>seis, siete, ocho, nueve, diez</td><td>dieciséis, diecisiete, dieciocho, diecinueve, veinte</td></tr>
      </table>
      <div class="merke">Vor einem männlichen Nomen wird <em>uno</em> zu <strong>un</strong>,
      vor einem weiblichen zu <strong>una</strong>: <em>un hermano, una hermana</em>. Und das
      Alter nie mit <em>ser</em>: nicht <em>soy 40</em>, sondern <em>tengo 40 años</em>.</div>`,
    uebungen: [
      { id: "ag0401", satz: "Yo ___ veinte años.", loesung: "tengo", tipps: ["tengo", "tienes", "soy"], hinweis: "Alter: tener", ue: "Ich bin zwanzig Jahre alt." },
      { id: "ag0402", satz: "¿Cuántos años ___ tú?", loesung: "tienes", tipps: ["tienes", "tiene", "eres"], hinweis: "tener mit tú", ue: "Wie alt bist du?" },
      { id: "ag0403", satz: "Mi hermana ___ quince años.", loesung: "tiene", tipps: ["tiene", "tienen", "es"], hinweis: "tener mit ella", ue: "Meine Schwester ist fünfzehn." },
      { id: "ag0404", satz: "Nosotros ___ dos hijos.", loesung: "tenemos", tipps: ["tenemos", "tienen", "tengo"], hinweis: "tener mit nosotros", ue: "Wir haben zwei Kinder." },
      { id: "ag0405", satz: "Tengo ___ hermano. (1)", loesung: "un", tipps: ["un", "uno", "una"], hinweis: "vor männlichem Nomen: un", ue: "Ich habe einen Bruder." }
    ]
  }
});

LEKTION('es-419', {
  tag: 5, niveau: "A1", thema: "Zahlen bis 100 und Telefonnummern",
  vokabeln: [
    { id: "av0501", es: "treinta",     de: "dreißig",   wortart: "Zahl",       beispiel: "El mes tiene treinta días.", beispielUe: "Der Monat hat dreißig Tage." },
    { id: "av0502", es: "cuarenta",    de: "vierzig",   wortart: "Zahl",       beispiel: "Mi papá tiene cuarenta y cinco años.", beispielUe: "Mein Vater ist fünfundvierzig." },
    { id: "av0503", es: "cincuenta",   de: "fünfzig",   wortart: "Zahl",       beispiel: "Son cincuenta pesos, por favor.", beispielUe: "Das macht fünfzig Pesos, bitte." },
    { id: "av0504", es: "sesenta",     de: "sechzig",   wortart: "Zahl",       beispiel: "Una hora tiene sesenta minutos.", beispielUe: "Eine Stunde hat sechzig Minuten." },
    { id: "av0505", es: "setenta",     de: "siebzig",   wortart: "Zahl",       beispiel: "Mi abuela tiene setenta años.", beispielUe: "Meine Oma ist siebzig." },
    { id: "av0506", es: "ochenta",     de: "achtzig",   wortart: "Zahl",       beispiel: "El boleto cuesta ochenta pesos.", beispielUe: "Die Fahrkarte kostet achtzig Pesos." },
    { id: "av0507", es: "noventa",     de: "neunzig",   wortart: "Zahl",       beispiel: "El curso dura noventa minutos.", beispielUe: "Der Kurs dauert neunzig Minuten." },
    { id: "av0508", es: "cien",        de: "hundert",   wortart: "Zahl",       beispiel: "Hay cien personas en la fiesta.", beispielUe: "Auf dem Fest sind hundert Leute." },
    { id: "av0509", es: "el teléfono", de: "das Telefon", wortart: "Substantiv", beispiel: "¿Me das tu teléfono?", beispielUe: "Gibst du mir deine Telefonnummer?" },
    { id: "av0510", es: "el celular",  de: "das Handy", wortart: "Substantiv", beispiel: "Mi celular no tiene batería.", beispielUe: "Mein Handy hat keinen Akku mehr." }
  ],
  saetze: [
    { id: "as0501", es: "Tengo treinta y cuatro años.",                         de: "Ich bin vierunddreißig." },
    { id: "as0502", es: "Mi número es el cincuenta y cinco, veintiuno, ochenta.", de: "Meine Nummer ist fünfundfünfzig, einundzwanzig, achtzig." },
    { id: "as0503", es: "El libro cuesta veintiocho pesos.",                    de: "Das Buch kostet achtundzwanzig Pesos." },
    { id: "as0504", es: "Vivo en la calle Bolívar, número cuarenta y dos.",     de: "Ich wohne in der Calle Bolívar Nummer zweiundvierzig." },
    { id: "as0505", es: "¿Me repites el número, por favor?",                    de: "Wiederholst du mir die Nummer, bitte?" }
  ],
  grammatik: {
    id: "ag05", titel: "Zahlen von 21 bis 100",
    erklaerung: `
      <p>Gute Nachricht für Deutschsprachige: Spanische Zahlen sagt man in der Reihenfolge,
      in der man sie schreibt — erst die Zehner, dann die Einer.</p>
      <table>
        <tr><th>Zahl</th><th>Spanisch</th><th>Hinweis</th></tr>
        <tr><td>21</td><td><strong>veintiuno</strong></td><td>bis 29 in einem Wort</td></tr>
        <tr><td>22</td><td>veintidós</td><td>mit Akzent</td></tr>
        <tr><td>26</td><td>veintiséis</td><td>mit Akzent</td></tr>
        <tr><td>31</td><td>treinta <strong>y</strong> uno</td><td>ab 31 drei Wörter</td></tr>
        <tr><td>45</td><td>cuarenta y cinco</td><td></td></tr>
        <tr><td>99</td><td>noventa y nueve</td><td></td></tr>
        <tr><td>100</td><td><strong>cien</strong></td><td>101 = ciento uno</td></tr>
      </table>
      <div class="merke">45 ist auf Spanisch „vierzig und fünf" — also genau umgekehrt wie
      „fünfundvierzig". Lies Zahlen anfangs langsam von links nach rechts, dann passiert
      kein Dreher.</div>
      <p>Telefonnummern sagt man in vielen Ländern in Zweiergruppen: 55 21 80 =
      <em>cincuenta y cinco, veintiuno, ochenta</em>.</p>`,
    uebungen: [
      { id: "ag0501", satz: "21 = ___", loesung: "veintiuno", tipps: ["veintiuno", "veinte y uno", "uno y veinte"], hinweis: "bis 29 in einem Wort", ue: "einundzwanzig" },
      { id: "ag0502", satz: "35 = treinta ___ cinco", loesung: "y", tipps: ["y", "e", "con"], hinweis: "ab 31: Zehner + y + Einer", ue: "fünfunddreißig" },
      { id: "ag0503", satz: "Una hora tiene ___ minutos. (60)", loesung: "sesenta", tipps: ["sesenta", "setenta", "seis"], hinweis: "60", ue: "Eine Stunde hat sechzig Minuten." },
      { id: "ag0504", satz: "Hay ___ personas en la fiesta. (100)", loesung: "cien", tipps: ["cien", "ciento", "mil"], hinweis: "genau 100: cien", ue: "Auf dem Fest sind hundert Leute." },
      { id: "ag0505", satz: "Mi papá tiene ___ años. (50)", loesung: "cincuenta", tipps: ["cincuenta", "quince", "cinco"], hinweis: "50", ue: "Mein Vater ist fünfzig." }
    ]
  }
});

LEKTION('es-419', {
  tag: 6, niveau: "A1", thema: "Dinge im Alltag: el, la, un, una",
  vokabeln: [
    { id: "av0601", es: "el libro",       de: "das Buch",            wortart: "Substantiv", beispiel: "El libro está en la mesa.", beispielUe: "Das Buch liegt auf dem Tisch." },
    { id: "av0602", es: "la mesa",        de: "der Tisch",           wortart: "Substantiv", beispiel: "La mesa es de madera.", beispielUe: "Der Tisch ist aus Holz." },
    { id: "av0603", es: "la silla",       de: "der Stuhl",           wortart: "Substantiv", beispiel: "Hay una silla libre.", beispielUe: "Es gibt einen freien Stuhl." },
    { id: "av0604", es: "la puerta",      de: "die Tür",             wortart: "Substantiv", beispiel: "La puerta está abierta.", beispielUe: "Die Tür ist offen." },
    { id: "av0605", es: "la ventana",     de: "das Fenster",         wortart: "Substantiv", beispiel: "La ventana es muy grande.", beispielUe: "Das Fenster ist sehr groß." },
    { id: "av0606", es: "la llave",       de: "der Schlüssel",       wortart: "Substantiv", beispiel: "¿Dónde está la llave?", beispielUe: "Wo ist der Schlüssel?" },
    { id: "av0607", es: "el bolígrafo",   de: "der Kugelschreiber",  wortart: "Substantiv", beispiel: "¿Me prestas un bolígrafo?", beispielUe: "Leihst du mir einen Kuli?" },
    { id: "av0608", es: "el cuaderno",    de: "das Heft",            wortart: "Substantiv", beispiel: "Escribo las palabras en mi cuaderno.", beispielUe: "Ich schreibe die Wörter in mein Heft." },
    { id: "av0609", es: "la computadora", de: "der Computer",        wortart: "Substantiv", beispiel: "La computadora es nueva.", beispielUe: "Der Computer ist neu." },
    { id: "av0610", es: "el papel",       de: "das Papier",          wortart: "Substantiv", beispiel: "Necesito un papel.", beispielUe: "Ich brauche ein Blatt Papier." }
  ],
  saetze: [
    { id: "as0601", es: "¿Qué es esto? Es una llave.",           de: "Was ist das? Das ist ein Schlüssel." },
    { id: "as0602", es: "La computadora está en la mesa.",       de: "Der Computer steht auf dem Tisch." },
    { id: "as0603", es: "Necesito un bolígrafo y un papel.",     de: "Ich brauche einen Kuli und ein Blatt Papier." },
    { id: "as0604", es: "La silla es muy cómoda.",               de: "Der Stuhl ist sehr bequem." },
    { id: "as0605", es: "El cuaderno es de Pablo.",              de: "Das Heft gehört Pablo." }
  ],
  grammatik: {
    id: "ag06", titel: "Die Artikel: el, la, un, una",
    erklaerung: `
      <p>Spanisch hat nur zwei Geschlechter: männlich und weiblich. Ein „das" gibt es nicht.
      Und das Geschlecht stimmt oft nicht mit dem Deutschen überein: <em>der Tisch</em> ist
      <strong>la</strong> mesa, <em>das Buch</em> ist <strong>el</strong> libro.</p>
      <table>
        <tr><th></th><th>bestimmt</th><th>unbestimmt</th><th>Beispiel</th></tr>
        <tr><td>männlich</td><td><strong>el</strong></td><td><strong>un</strong></td><td>el / un libro</td></tr>
        <tr><td>weiblich</td><td><strong>la</strong></td><td><strong>una</strong></td><td>la / una mesa</td></tr>
      </table>
      <table>
        <tr><th>Endung</th><th>meist</th><th>Ausnahmen</th></tr>
        <tr><td>-o</td><td>männlich: el libro</td><td>la mano, la foto</td></tr>
        <tr><td>-a</td><td>weiblich: la mesa</td><td>el día, el mapa, el problema</td></tr>
        <tr><td>-ción, -dad</td><td>weiblich: la ciudad</td><td></td></tr>
      </table>
      <div class="merke">Lerne jedes Nomen <strong>mit Artikel</strong>, als eine Einheit:
      nicht „mesa", sondern „la mesa". Dann musst du später nie raten.</div>`,
    uebungen: [
      { id: "ag0601", satz: "___ libro es interesante.", loesung: "El", tipps: ["El", "La", "Los"], hinweis: "libro ist männlich", ue: "Das Buch ist interessant." },
      { id: "ag0602", satz: "___ mesa es grande.", loesung: "La", tipps: ["La", "El", "Un"], hinweis: "mesa ist weiblich", ue: "Der Tisch ist groß." },
      { id: "ag0603", satz: "Tengo ___ computadora nueva.", loesung: "una", tipps: ["una", "un", "la"], hinweis: "unbestimmt, weiblich", ue: "Ich habe einen neuen Computer." },
      { id: "ag0604", satz: "Necesito ___ cuaderno.", loesung: "un", tipps: ["un", "una", "uno"], hinweis: "unbestimmt, männlich", ue: "Ich brauche ein Heft." },
      { id: "ag0605", satz: "___ día es muy bonito.", loesung: "El", tipps: ["El", "La", "Una"], hinweis: "Ausnahme: día ist männlich", ue: "Der Tag ist sehr schön." }
    ]
  }
});

LEKTION('es-419', {
  tag: 7, niveau: "A1", thema: "Farben und der Plural",
  vokabeln: [
    { id: "av0701", es: "el color",  de: "die Farbe", wortart: "Substantiv", beispiel: "¿De qué color es tu carro?", beispielUe: "Welche Farbe hat dein Auto?" },
    { id: "av0702", es: "rojo",      de: "rot",       wortart: "Adjektiv",   beispiel: "La puerta es roja.", beispielUe: "Die Tür ist rot." },
    { id: "av0703", es: "azul",      de: "blau",      wortart: "Adjektiv",   beispiel: "El cielo está azul.", beispielUe: "Der Himmel ist blau." },
    { id: "av0704", es: "verde",     de: "grün",      wortart: "Adjektiv",   beispiel: "Me gusta el color verde.", beispielUe: "Mir gefällt die Farbe Grün." },
    { id: "av0705", es: "amarillo",  de: "gelb",      wortart: "Adjektiv",   beispiel: "Los taxis son amarillos.", beispielUe: "Die Taxis sind gelb." },
    { id: "av0706", es: "negro",     de: "schwarz",   wortart: "Adjektiv",   beispiel: "Tengo un gato negro.", beispielUe: "Ich habe eine schwarze Katze." },
    { id: "av0707", es: "blanco",    de: "weiß",      wortart: "Adjektiv",   beispiel: "La casa es blanca.", beispielUe: "Das Haus ist weiß." },
    { id: "av0708", es: "gris",      de: "grau",      wortart: "Adjektiv",   beispiel: "Hoy el día está gris.", beispielUe: "Heute ist der Tag grau." },
    { id: "av0709", es: "morado",    de: "lila",      wortart: "Adjektiv",   beispiel: "Mi color favorito es el morado.", beispielUe: "Meine Lieblingsfarbe ist Lila." },
    { id: "av0710", es: "rosado",    de: "rosa",      wortart: "Adjektiv",   beispiel: "Es una flor rosada.", beispielUe: "Das ist eine rosa Blume." }
  ],
  saetze: [
    { id: "as0701", es: "Los zapatos negros son nuevos.",             de: "Die schwarzen Schuhe sind neu." },
    { id: "as0702", es: "Tengo dos gatos blancos.",                   de: "Ich habe zwei weiße Katzen." },
    { id: "as0703", es: "Las mesas son verdes.",                      de: "Die Tische sind grün." },
    { id: "as0704", es: "¿De qué color es tu celular? Es azul.",      de: "Welche Farbe hat dein Handy? Es ist blau." },
    { id: "as0705", es: "Los lápices son amarillos.",                 de: "Die Bleistifte sind gelb." }
  ],
  grammatik: {
    id: "ag07", titel: "Der Plural: -s und -es",
    erklaerung: `
      <p>Der spanische Plural ist viel einfacher als der deutsche. Es gibt im Grunde nur
      zwei Endungen:</p>
      <table>
        <tr><th>Wort endet auf</th><th>Plural</th><th>Beispiel</th></tr>
        <tr><td>Vokal</td><td><strong>+ s</strong></td><td>libro → libro<strong>s</strong>, casa → casa<strong>s</strong></td></tr>
        <tr><td>Konsonant</td><td><strong>+ es</strong></td><td>color → color<strong>es</strong>, papel → papel<strong>es</strong></td></tr>
        <tr><td>-z</td><td><strong>-ces</strong></td><td>lápiz → lápi<strong>ces</strong></td></tr>
      </table>
      <table>
        <tr><th></th><th>Singular</th><th>Plural</th></tr>
        <tr><td>männlich</td><td>el / un</td><td><strong>los / unos</strong></td></tr>
        <tr><td>weiblich</td><td>la / una</td><td><strong>las / unas</strong></td></tr>
      </table>
      <div class="merke">Farben sind Adjektive und passen sich an — Geschlecht und Zahl:
      <em>el carro rojo → los carros rojos; la casa blanca → las casas blancas</em>. Und
      sie stehen <strong>hinter</strong> dem Nomen. Farben auf -e oder Konsonant haben keine
      weibliche Form: <em>la mesa verde, la camisa azul</em>.</div>
      <p>Für „braun" sagt man in Lateinamerika oft <em>café</em> — und das verändert sich
      nie: <em>los ojos café</em>.</p>`,
    uebungen: [
      { id: "ag0701", satz: "un libro, dos ___", loesung: "libros", tipps: ["libros", "libroes", "libro"], hinweis: "Vokal + s", ue: "ein Buch, zwei Bücher" },
      { id: "ag0702", satz: "un color, tres ___", loesung: "colores", tipps: ["colores", "colors", "colorés"], hinweis: "Konsonant + es", ue: "eine Farbe, drei Farben" },
      { id: "ag0703", satz: "un lápiz, cuatro ___", loesung: "lápices", tipps: ["lápices", "lápizes", "lápiz"], hinweis: "-z wird zu -ces", ue: "ein Bleistift, vier Bleistifte" },
      { id: "ag0704", satz: "___ casas son blancas.", loesung: "Las", tipps: ["Las", "Los", "La"], hinweis: "weiblich Plural", ue: "Die Häuser sind weiß." },
      { id: "ag0705", satz: "Los carros son ___. (rojo)", loesung: "rojos", tipps: ["rojos", "rojo", "rojas"], hinweis: "Adjektiv: männlich Plural", ue: "Die Autos sind rot." }
    ]
  }
});

LEKTION('es-419', {
  tag: 8, niveau: "A1", thema: "Arbeit und Beruf: Verben auf -ar",
  vokabeln: [
    { id: "av0801", es: "trabajar",                     de: "arbeiten",                           wortart: "Verb",       beispiel: "Trabajo en un banco.", beispielUe: "Ich arbeite in einer Bank." },
    { id: "av0802", es: "estudiar",                     de: "studieren, lernen",                  wortart: "Verb",       beispiel: "Estudio español por las tardes.", beispielUe: "Ich lerne nachmittags Spanisch." },
    { id: "av0803", es: "el trabajo",                   de: "die Arbeit",                         wortart: "Substantiv", beispiel: "Mi trabajo es interesante.", beispielUe: "Meine Arbeit ist interessant." },
    { id: "av0804", es: "la oficina",                   de: "das Büro",                           wortart: "Substantiv", beispiel: "La oficina está en el centro.", beispielUe: "Das Büro ist im Zentrum." },
    { id: "av0805", es: "el profesor, la profesora",    de: "der Lehrer, die Lehrerin",           wortart: "Substantiv", beispiel: "La profesora es muy simpática.", beispielUe: "Die Lehrerin ist sehr nett." },
    { id: "av0806", es: "el médico, la médica",         de: "der Arzt, die Ärztin",               wortart: "Substantiv", beispiel: "Mi hermana es médica.", beispielUe: "Meine Schwester ist Ärztin." },
    { id: "av0807", es: "el estudiante",                de: "der Student, der Schüler",           wortart: "Substantiv", beispiel: "Soy estudiante de ingeniería.", beispielUe: "Ich studiere Ingenieurwesen." },
    { id: "av0808", es: "el ingeniero, la ingeniera",   de: "der Ingenieur, die Ingenieurin",     wortart: "Substantiv", beispiel: "Él es ingeniero en una empresa alemana.", beispielUe: "Er ist Ingenieur in einer deutschen Firma." },
    { id: "av0809", es: "llegar",                       de: "ankommen",                           wortart: "Verb",       beispiel: "Llego a la oficina a las ocho.", beispielUe: "Ich komme um acht im Büro an." },
    { id: "av0810", es: "tomar",                        de: "nehmen; trinken",                    wortart: "Verb",       beispiel: "Tomo el autobús a las siete.", beispielUe: "Ich nehme um sieben den Bus." }
  ],
  saetze: [
    { id: "as0801", es: "¿Dónde trabajas? Trabajo en un hospital.",   de: "Wo arbeitest du? Ich arbeite in einem Krankenhaus." },
    { id: "as0802", es: "Mi hermano estudia medicina.",               de: "Mein Bruder studiert Medizin." },
    { id: "as0803", es: "Hablamos español en la clase.",              de: "Wir sprechen im Kurs Spanisch." },
    { id: "as0804", es: "Ustedes trabajan mucho.",                    de: "Ihr arbeitet viel." },
    { id: "as0805", es: "¿A qué te dedicas? Soy profesora.",          de: "Was machst du beruflich? Ich bin Lehrerin." }
  ],
  grammatik: {
    id: "ag08", titel: "Regelmäßige Verben auf -ar",
    erklaerung: `
      <p>Die meisten spanischen Verben enden auf <em>-ar</em> und folgen genau einem Muster:
      <em>-ar</em> weg, Endung dran.</p>
      <table>
        <tr><th>Person</th><th>Endung</th><th>hablar</th><th>trabajar</th></tr>
        <tr><td>yo</td><td>-o</td><td>habl<strong>o</strong></td><td>trabaj<strong>o</strong></td></tr>
        <tr><td>tú</td><td>-as</td><td>habl<strong>as</strong></td><td>trabaj<strong>as</strong></td></tr>
        <tr><td>él / ella / usted</td><td>-a</td><td>habl<strong>a</strong></td><td>trabaj<strong>a</strong></td></tr>
        <tr><td>nosotros</td><td>-amos</td><td>habl<strong>amos</strong></td><td>trabaj<strong>amos</strong></td></tr>
        <tr><td>ustedes / ellos</td><td>-an</td><td>habl<strong>an</strong></td><td>trabaj<strong>an</strong></td></tr>
      </table>
      <div class="merke">In Lateinamerika haben <em>ustedes</em> und <em>ellos</em>
      <strong>dieselbe</strong> Form: <em>ustedes trabajan, ellos trabajan</em>. Du lernst
      also nur fünf Formen statt sechs.</div>
      <p>Den Beruf sagt man ohne Artikel, wie im Deutschen: <em>Soy médico.</em> — „Ich bin
      Arzt." Die Frage dazu: <em>¿A qué te dedicas?</em> (Was machst du beruflich?)</p>`,
    uebungen: [
      { id: "ag0801", satz: "Yo ___ en una oficina. (trabajar)", loesung: "trabajo", tipps: ["trabajo", "trabajas", "trabaja"], hinweis: "yo: -o", ue: "Ich arbeite in einem Büro." },
      { id: "ag0802", satz: "¿Tú ___ español? (estudiar)", loesung: "estudias", tipps: ["estudias", "estudia", "estudio"], hinweis: "tú: -as", ue: "Lernst du Spanisch?" },
      { id: "ag0803", satz: "Ella ___ a las ocho. (llegar)", loesung: "llega", tipps: ["llega", "llegas", "llegan"], hinweis: "ella: -a", ue: "Sie kommt um acht an." },
      { id: "ag0804", satz: "Nosotros ___ el autobús. (tomar)", loesung: "tomamos", tipps: ["tomamos", "toman", "tomáis"], hinweis: "nosotros: -amos", ue: "Wir nehmen den Bus." },
      { id: "ag0805", satz: "Ustedes ___ mucho. (trabajar)", loesung: "trabajan", tipps: ["trabajan", "trabajáis", "trabajamos"], hinweis: "ustedes: -an", ue: "Ihr arbeitet viel." }
    ]
  }
});

LEKTION('es-419', {
  tag: 9, niveau: "A1", thema: "Essen, lesen, wohnen: Verben auf -er und -ir",
  vokabeln: [
    { id: "av0901", es: "comer",         de: "essen",              wortart: "Verb",       beispiel: "Comemos a las dos.", beispielUe: "Wir essen um zwei." },
    { id: "av0902", es: "beber",         de: "trinken",            wortart: "Verb",       beispiel: "Bebo mucha agua.", beispielUe: "Ich trinke viel Wasser." },
    { id: "av0903", es: "vivir",         de: "wohnen, leben",      wortart: "Verb",       beispiel: "Vivo en un departamento pequeño.", beispielUe: "Ich wohne in einer kleinen Wohnung." },
    { id: "av0904", es: "leer",          de: "lesen",              wortart: "Verb",       beispiel: "Leo el periódico en el celular.", beispielUe: "Ich lese die Zeitung auf dem Handy." },
    { id: "av0905", es: "escribir",      de: "schreiben",          wortart: "Verb",       beispiel: "Escribo un mensaje a mi mamá.", beispielUe: "Ich schreibe meiner Mama eine Nachricht." },
    { id: "av0906", es: "aprender",      de: "lernen",             wortart: "Verb",       beispiel: "Aprendo cinco palabras nuevas cada día.", beispielUe: "Ich lerne jeden Tag fünf neue Wörter." },
    { id: "av0907", es: "abrir",         de: "öffnen",             wortart: "Verb",       beispiel: "La tienda abre a las nueve.", beispielUe: "Der Laden öffnet um neun." },
    { id: "av0908", es: "el periódico",  de: "die Zeitung",        wortart: "Substantiv", beispiel: "El periódico es gratis.", beispielUe: "Die Zeitung ist kostenlos." },
    { id: "av0909", es: "el mensaje",    de: "die Nachricht",      wortart: "Substantiv", beispiel: "Tengo un mensaje de Ana.", beispielUe: "Ich habe eine Nachricht von Ana." },
    { id: "av0910", es: "la palabra",    de: "das Wort",           wortart: "Substantiv", beispiel: "¿Qué significa esta palabra?", beispielUe: "Was bedeutet dieses Wort?" }
  ],
  saetze: [
    { id: "as0901", es: "¿Dónde vives? Vivo en Bogotá.",                de: "Wo wohnst du? Ich wohne in Bogotá." },
    { id: "as0902", es: "Comemos arroz con frijoles.",                  de: "Wir essen Reis mit Bohnen." },
    { id: "as0903", es: "Mi papá lee el periódico todos los días.",     de: "Mein Vater liest jeden Tag die Zeitung." },
    { id: "as0904", es: "Escribo mensajes en español.",                 de: "Ich schreibe Nachrichten auf Spanisch." },
    { id: "as0905", es: "Los niños aprenden muy rápido.",               de: "Kinder lernen sehr schnell." }
  ],
  grammatik: {
    id: "ag09", titel: "Regelmäßige Verben auf -er und -ir",
    erklaerung: `
      <p>Die zweite und dritte Verbgruppe funktionieren wie die <em>-ar</em>-Verben — nur
      mit <em>e</em> statt <em>a</em> in der Endung.</p>
      <table>
        <tr><th>Person</th><th>comer</th><th>vivir</th></tr>
        <tr><td>yo</td><td>com<strong>o</strong></td><td>viv<strong>o</strong></td></tr>
        <tr><td>tú</td><td>com<strong>es</strong></td><td>viv<strong>es</strong></td></tr>
        <tr><td>él / ella / usted</td><td>com<strong>e</strong></td><td>viv<strong>e</strong></td></tr>
        <tr><td>nosotros</td><td>com<strong>emos</strong></td><td>viv<strong>imos</strong></td></tr>
        <tr><td>ustedes / ellos</td><td>com<strong>en</strong></td><td>viv<strong>en</strong></td></tr>
      </table>
      <div class="merke"><em>-er</em> und <em>-ir</em> unterscheiden sich nur bei
      <strong>nosotros</strong>: <em>comemos</em>, aber <em>vivimos</em>. Alles andere ist
      gleich.</div>
      <p>Fürs Trinken sagt man in Lateinamerika im Alltag oft <em>tomar</em> statt
      <em>beber</em>: <em>¿Qué quieres tomar?</em> — Was möchtest du trinken?</p>`,
    uebungen: [
      { id: "ag0901", satz: "Yo ___ en Lima. (vivir)", loesung: "vivo", tipps: ["vivo", "vives", "vive"], hinweis: "yo: -o", ue: "Ich wohne in Lima." },
      { id: "ag0902", satz: "¿Tú ___ carne? (comer)", loesung: "comes", tipps: ["comes", "come", "comas"], hinweis: "tú: -es", ue: "Isst du Fleisch?" },
      { id: "ag0903", satz: "Nosotros ___ en un departamento. (vivir)", loesung: "vivimos", tipps: ["vivimos", "vivemos", "viven"], hinweis: "-ir mit nosotros: -imos", ue: "Wir wohnen in einer Wohnung." },
      { id: "ag0904", satz: "Ella ___ un libro. (leer)", loesung: "lee", tipps: ["lee", "lees", "leen"], hinweis: "ella: -e", ue: "Sie liest ein Buch." },
      { id: "ag0905", satz: "Ustedes ___ muy bien. (escribir)", loesung: "escriben", tipps: ["escriben", "escribís", "escribimos"], hinweis: "ustedes: -en", ue: "Ihr schreibt sehr gut." }
    ]
  }
});

LEKTION('es-419', {
  tag: 10, niveau: "A1", thema: "Fragen stellen",
  vokabeln: [
    { id: "av1001", es: "qué",         de: "was",                 wortart: "Fragewort",  beispiel: "¿Qué haces?", beispielUe: "Was machst du?" },
    { id: "av1002", es: "quién",       de: "wer",                 wortart: "Fragewort",  beispiel: "¿Quién es ella?", beispielUe: "Wer ist sie?" },
    { id: "av1003", es: "dónde",       de: "wo",                  wortart: "Fragewort",  beispiel: "¿Dónde está el baño?", beispielUe: "Wo ist die Toilette?" },
    { id: "av1004", es: "cuándo",      de: "wann",                wortart: "Fragewort",  beispiel: "¿Cuándo es la fiesta?", beispielUe: "Wann ist das Fest?" },
    { id: "av1005", es: "cómo",        de: "wie",                 wortart: "Fragewort",  beispiel: "¿Cómo se dice «Haus» en español?", beispielUe: "Wie sagt man „Haus“ auf Spanisch?" },
    { id: "av1006", es: "por qué",     de: "warum",               wortart: "Fragewort",  beispiel: "¿Por qué estudias español?", beispielUe: "Warum lernst du Spanisch?" },
    { id: "av1007", es: "porque",      de: "weil",                wortart: "Konjunktion", beispiel: "Porque trabajo en Chile.", beispielUe: "Weil ich in Chile arbeite." },
    { id: "av1008", es: "cuál",        de: "welcher, welche",     wortart: "Fragewort",  beispiel: "¿Cuál es tu libro?", beispielUe: "Welches ist dein Buch?" },
    { id: "av1009", es: "adónde",      de: "wohin",               wortart: "Fragewort",  beispiel: "¿Adónde vas?", beispielUe: "Wohin gehst du?" },
    { id: "av1010", es: "la pregunta", de: "die Frage",           wortart: "Substantiv", beispiel: "Tengo una pregunta.", beispielUe: "Ich habe eine Frage." }
  ],
  saetze: [
    { id: "as1001", es: "¿Qué estudias?",                                 de: "Was studierst du?" },
    { id: "as1002", es: "¿Dónde trabaja tu hermana?",                     de: "Wo arbeitet deine Schwester?" },
    { id: "as1003", es: "¿Cuándo llegas a casa?",                         de: "Wann kommst du nach Hause?" },
    { id: "as1004", es: "¿Por qué no comes? Porque no tengo hambre.",     de: "Warum isst du nicht? Weil ich keinen Hunger habe." },
    { id: "as1005", es: "¿Quién habla inglés aquí?",                      de: "Wer spricht hier Englisch?" }
  ],
  grammatik: {
    id: "ag10", titel: "Fragewörter — immer mit Akzent",
    erklaerung: `
      <p>Spanische Fragewörter tragen <strong>immer</strong> einen Akzent. Die Frage beginnt
      mit <em>¿</em> und endet mit <em>?</em>.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th><th>Beispiel</th></tr>
        <tr><td>qué</td><td>was</td><td>¿Qué haces?</td></tr>
        <tr><td>quién / quiénes</td><td>wer</td><td>¿Quién es?</td></tr>
        <tr><td>dónde</td><td>wo</td><td>¿Dónde vives?</td></tr>
        <tr><td>de dónde</td><td>woher</td><td>¿De dónde eres?</td></tr>
        <tr><td>adónde</td><td>wohin</td><td>¿Adónde vas?</td></tr>
        <tr><td>cuándo</td><td>wann</td><td>¿Cuándo llegas?</td></tr>
        <tr><td>cómo</td><td>wie</td><td>¿Cómo estás?</td></tr>
        <tr><td>cuánto / cuántos</td><td>wie viel / wie viele</td><td>¿Cuántos años tienes?</td></tr>
        <tr><td>cuál</td><td>welcher</td><td>¿Cuál es tu número?</td></tr>
        <tr><td>por qué</td><td>warum</td><td>¿Por qué no vienes?</td></tr>
      </table>
      <div class="merke"><strong>por qué</strong> (warum, zwei Wörter, Akzent) und
      <strong>porque</strong> (weil, ein Wort, kein Akzent) klingen fast gleich, sind aber
      verschiedene Wörter: <em>¿Por qué estudias? — Porque me gusta.</em></div>`,
    uebungen: [
      { id: "ag1001", satz: "¿___ te llamas?", loesung: "Cómo", tipps: ["Cómo", "Qué", "Quién"], hinweis: "nach dem Namen fragt man mit wie", ue: "Wie heißt du?" },
      { id: "ag1002", satz: "¿___ vives? En Quito.", loesung: "Dónde", tipps: ["Dónde", "Cuándo", "Quién"], hinweis: "wo", ue: "Wo wohnst du? In Quito." },
      { id: "ag1003", satz: "¿___ es tu cumpleaños?", loesung: "Cuándo", tipps: ["Cuándo", "Dónde", "Cómo"], hinweis: "wann", ue: "Wann hast du Geburtstag?" },
      { id: "ag1004", satz: "¿___ es ese señor? Es mi jefe.", loesung: "Quién", tipps: ["Quién", "Qué", "Cuál"], hinweis: "nach einer Person: wer", ue: "Wer ist dieser Herr? Das ist mein Chef." },
      { id: "ag1005", satz: "Estudio español ___ trabajo en México.", loesung: "porque", tipps: ["porque", "por qué", "qué"], hinweis: "weil = porque (ein Wort, ohne Akzent)", ue: "Ich lerne Spanisch, weil ich in Mexiko arbeite." }
    ]
  }
});
