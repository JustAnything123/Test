/* Día 1–10 · Nivel A1 · Los cimientos
   Cada lección: 10 palabras, 5 frases, 1 tema de gramática con ejercicios.
   Campo "de" = alemán (lo que aprendes) · campo "es" = español (tu idioma). */

LEKTION('de', {
  tag: 1, niveau: "A1", thema: "Saludar y presentarse",
  vokabeln: [
    { id: "v0101", de: "der Name",       es: "el nombre",      wortart: "sustantivo", beispiel: "Mein Name ist Ana.", beispielUe: "Mi nombre es Ana." },
    { id: "v0102", de: "die Frau",       es: "la mujer",       wortart: "sustantivo", beispiel: "Die Frau heißt Marta.", beispielUe: "La mujer se llama Marta." },
    { id: "v0103", de: "der Mann",       es: "el hombre",      wortart: "sustantivo", beispiel: "Der Mann ist mein Vater.", beispielUe: "El hombre es mi padre." },
    { id: "v0104", de: "das Kind",       es: "el niño",        wortart: "sustantivo", beispiel: "Das Kind spielt draußen.", beispielUe: "El niño juega afuera." },
    { id: "v0105", de: "heißen",         es: "llamarse",       wortart: "verbo", beispiel: "Wie heißen Sie?", beispielUe: "¿Cómo se llama usted?" },
    { id: "v0106", de: "kommen",         es: "venir",          wortart: "verbo", beispiel: "Ich komme aus Mexiko.", beispielUe: "Vengo de México." },
    { id: "v0107", de: "wohnen",         es: "vivir (residir)", wortart: "verbo", beispiel: "Wir wohnen in Berlin.", beispielUe: "Vivimos en Berlín." },
    { id: "v0108", de: "die Stadt",      es: "la ciudad",      wortart: "sustantivo", beispiel: "Die Stadt ist schön.", beispielUe: "La ciudad es bonita." },
    { id: "v0109", de: "das Land",       es: "el país",        wortart: "sustantivo", beispiel: "Aus welchem Land kommst du?", beispielUe: "¿De qué país vienes?" },
    { id: "v0110", de: "der Freund",     es: "el amigo",       wortart: "sustantivo", beispiel: "Er ist mein Freund.", beispielUe: "Él es mi amigo." }
  ],
  saetze: [
    { id: "s0101", de: "Guten Tag, ich heiße Carlos.",       es: "Buenos días, me llamo Carlos." },
    { id: "s0102", de: "Wie heißt du?",                      es: "¿Cómo te llamas?" },
    { id: "s0103", de: "Ich komme aus Kolumbien.",           es: "Vengo de Colombia." },
    { id: "s0104", de: "Das ist meine Freundin Ana.",        es: "Esta es mi amiga Ana." },
    { id: "s0105", de: "Wir wohnen jetzt in Hamburg.",       es: "Ahora vivimos en Hamburgo." }
  ],
  grammatik: {
    id: "g01", titel: "Los tres artículos: der, die, das",
    erklaerung: `
      <p>Aquí está la primera gran diferencia con el español: el alemán tiene
      <strong>tres</strong> géneros, no dos.</p>
      <table>
        <tr><th>Género</th><th>Artículo</th><th>Ejemplo</th></tr>
        <tr><td>masculino</td><td><em>der</em></td><td>der Mann (el hombre)</td></tr>
        <tr><td>femenino</td><td><em>die</em></td><td>die Frau (la mujer)</td></tr>
        <tr><td>neutro</td><td><em>das</em></td><td>das Kind (el niño)</td></tr>
        <tr><td>plural (todos)</td><td><em>die</em></td><td>die Kinder (los niños)</td></tr>
      </table>
      <div class="merke"><strong>La mala noticia:</strong> el género casi nunca coincide con
      el español. <em>la leche</em> es <em><strong>die</strong> Milch</em> (bien), pero
      <em>el sol</em> es <em><strong>die</strong> Sonne</em> (femenino) y <em>la luna</em> es
      <em><strong>der</strong> Mond</em> (masculino). Y lo más extraño para nosotros:
      <em><strong>das</strong> Mädchen</em> (la chica) es neutro.</div>
      <div class="merke"><strong>La solución práctica:</strong> aprende cada sustantivo
      <strong>siempre con su artículo</strong>. No memorices «Tisch = mesa», sino
      «<em>der</em> Tisch». El artículo es parte de la palabra. En este curso todas las
      palabras vienen con artículo por esa razón.</div>
      <p><strong>Algunas reglas que sí funcionan</strong> — no son muchas, pero ayudan:</p>
      <ul>
        <li><em>die</em>: palabras que terminan en <em>-ung, -heit, -keit, -schaft, -ion, -tät</em><br>
            (die Zeitung, die Freiheit, die Universität)</li>
        <li><em>das</em>: palabras que terminan en <em>-chen, -lein, -ment, -um</em><br>
            (das Mädchen, das Dokument, das Museum)</li>
        <li><em>der</em>: días, meses, estaciones, puntos cardinales<br>
            (der Montag, der Juli, der Sommer, der Norden)</li>
      </ul>
      <p><strong>Y algo bueno:</strong> todos los sustantivos alemanes se escriben con
      <strong>mayúscula</strong>, siempre. <em>der Mann, die Stadt, das Buch</em>. Eso
      facilita mucho la lectura.</p>`,
    uebungen: [
      { id: "g0101", satz: "___ Mann kommt aus Spanien.", loesung: "Der", tipps: ["Der", "Die", "Das"], hinweis: "masculino", ue: "El hombre viene de España." },
      { id: "g0102", satz: "___ Frau heißt Marta.", loesung: "Die", tipps: ["Die", "Der", "Das"], hinweis: "femenino", ue: "La mujer se llama Marta." },
      { id: "g0103", satz: "___ Kind spielt draußen.", loesung: "Das", tipps: ["Das", "Der", "Die"], hinweis: "neutro", ue: "El niño juega afuera." },
      { id: "g0104", satz: "___ Mädchen ist sehr nett.", loesung: "Das", tipps: ["Das", "Die", "Der"], hinweis: "-chen siempre neutro", ue: "La chica es muy simpática." },
      { id: "g0105", satz: "___ Zeitung liegt auf dem Tisch.", loesung: "Die", tipps: ["Die", "Der", "Das"], hinweis: "-ung siempre femenino", ue: "El periódico está sobre la mesa." }
    ]
  }
});

LEKTION('de', {
  tag: 2, niveau: "A1", thema: "Yo, tú, nosotros",
  vokabeln: [
    { id: "v0201", de: "der Lehrer",     es: "el maestro",     wortart: "sustantivo", beispiel: "Der Lehrer ist freundlich.", beispielUe: "El maestro es amable." },
    { id: "v0202", de: "die Schule",     es: "la escuela",     wortart: "sustantivo", beispiel: "Die Schule ist groß.", beispielUe: "La escuela es grande." },
    { id: "v0203", de: "müde",           es: "cansado",        wortart: "adjetivo", beispiel: "Ich bin sehr müde.", beispielUe: "Estoy muy cansado." },
    { id: "v0204", de: "glücklich",      es: "feliz",          wortart: "adjetivo", beispiel: "Wir sind glücklich hier.", beispielUe: "Somos felices aquí." },
    { id: "v0205", de: "krank",          es: "enfermo",        wortart: "adjetivo", beispiel: "Mein Bruder ist krank.", beispielUe: "Mi hermano está enfermo." },
    { id: "v0206", de: "jung",           es: "joven",          wortart: "adjetivo", beispiel: "Sie ist noch jung.", beispielUe: "Ella todavía es joven." },
    { id: "v0207", de: "alt",            es: "viejo",          wortart: "adjetivo", beispiel: "Das Haus ist sehr alt.", beispielUe: "La casa es muy vieja." },
    { id: "v0208", de: "der Kollege",    es: "el colega",      wortart: "sustantivo", beispiel: "Mein Kollege heißt Tom.", beispielUe: "Mi colega se llama Tom." },
    { id: "v0209", de: "verheiratet",    es: "casado",         wortart: "adjetivo", beispiel: "Sind Sie verheiratet?", beispielUe: "¿Está usted casado?" },
    { id: "v0210", de: "der Beruf",      es: "la profesión",   wortart: "sustantivo", beispiel: "Was sind Sie von Beruf?", beispielUe: "¿Cuál es su profesión?" }
  ],
  saetze: [
    { id: "s0201", de: "Ich bin Lehrerin von Beruf.",        es: "Soy maestra de profesión." },
    { id: "s0202", de: "Bist du müde?",                      es: "¿Estás cansado?" },
    { id: "s0203", de: "Wir sind aus Argentinien.",          es: "Somos de Argentina." },
    { id: "s0204", de: "Sie ist meine Kollegin.",            es: "Ella es mi colega." },
    { id: "s0205", de: "Seid ihr schon lange hier?",         es: "¿Llevan ustedes mucho tiempo aquí?" }
  ],
  grammatik: {
    id: "g02", titel: "Pronombres personales y el verbo sein",
    erklaerung: `
      <p>El verbo <em>sein</em> corresponde a <strong>ser y estar a la vez</strong>. Aquí el
      alemán es más fácil que el español: no hay que elegir.</p>
      <table>
        <tr><th>Pronombre</th><th>Español</th><th>sein</th></tr>
        <tr><td>ich</td><td>yo</td><td>bin</td></tr>
        <tr><td>du</td><td>tú</td><td>bist</td></tr>
        <tr><td>er / sie / es</td><td>él / ella / ello</td><td>ist</td></tr>
        <tr><td>wir</td><td>nosotros</td><td>sind</td></tr>
        <tr><td>ihr</td><td>ustedes (informal)</td><td>seid</td></tr>
        <tr><td>sie</td><td>ellos</td><td>sind</td></tr>
        <tr><td>Sie</td><td>usted / ustedes (formal)</td><td>sind</td></tr>
      </table>
      <div class="merke"><strong>Ojo con las tres formas de «sie»:</strong><br>
      <em>sie ist</em> = ella es<br>
      <em>sie sind</em> = ellos son<br>
      <em>Sie sind</em> (con mayúscula) = usted es / ustedes son<br>
      El verbo y la mayúscula te dicen cuál es. En alemán escrito la mayúscula de
      <em>Sie</em> es obligatoria.</div>
      <p><strong>El pronombre nunca se omite.</strong> Esta es una diferencia importante:</p>
      <ul>
        <li>Español: «Soy de México» — sin <em>yo</em>.</li>
        <li>Alemán: <em><strong>Ich</strong> bin aus Mexiko.</em> — el <em>ich</em> es
            obligatorio.</li>
      </ul>
      <p>La razón: las terminaciones alemanas se repiten (<em>wir sind</em> / <em>sie
      sind</em>), así que sin pronombre no se sabría de quién se habla.</p>
      <div class="merke"><strong>Tratamiento formal:</strong> en alemán se usa
      <em>Sie</em> mucho más que <em>usted</em> en Latinoamérica. Con desconocidos,
      en tiendas, en el trabajo: siempre <em>Sie</em>, hasta que la otra persona
      proponga el <em>du</em>.</div>`,
    uebungen: [
      { id: "g0201", satz: "Ich ___ Lehrer von Beruf.", loesung: "bin", tipps: ["bin", "bist", "ist"], hinweis: "ich → ?", ue: "Soy maestro de profesión." },
      { id: "g0202", satz: "___ du müde?", loesung: "Bist", tipps: ["Bist", "Bin", "Ist"], hinweis: "du → ?", ue: "¿Estás cansado?" },
      { id: "g0203", satz: "Wir ___ aus Argentinien.", loesung: "sind", tipps: ["sind", "seid", "ist"], hinweis: "wir → ?", ue: "Somos de Argentina." },
      { id: "g0204", satz: "___ ihr schon lange hier?", loesung: "Seid", tipps: ["Seid", "Sind", "Seit"], hinweis: "ihr → ?", ue: "¿Llevan mucho tiempo aquí?" },
      { id: "g0205", satz: "___ Sie verheiratet? (formal)", loesung: "Sind", tipps: ["Sind", "Seid", "Bist"], hinweis: "Sie formal → ?", ue: "¿Está usted casado?" }
    ]
  }
});

LEKTION('de', {
  tag: 3, niveau: "A1", thema: "Mi día",
  vokabeln: [
    { id: "v0301", de: "arbeiten",       es: "trabajar",       wortart: "verbo", beispiel: "Ich arbeite im Büro.", beispielUe: "Trabajo en la oficina." },
    { id: "v0302", de: "lernen",         es: "aprender",       wortart: "verbo", beispiel: "Wir lernen Deutsch.", beispielUe: "Aprendemos alemán." },
    { id: "v0303", de: "spielen",        es: "jugar",          wortart: "verbo", beispiel: "Die Kinder spielen im Park.", beispielUe: "Los niños juegan en el parque." },
    { id: "v0304", de: "trinken",        es: "beber",          wortart: "verbo", beispiel: "Er trinkt Kaffee.", beispielUe: "Él bebe café." },
    { id: "v0305", de: "machen",         es: "hacer",          wortart: "verbo", beispiel: "Was machst du heute?", beispielUe: "¿Qué haces hoy?" },
    { id: "v0306", de: "der Morgen",     es: "la mañana",      wortart: "sustantivo", beispiel: "Am Morgen trinke ich Tee.", beispielUe: "Por la mañana tomo té." },
    { id: "v0307", de: "der Abend",      es: "la noche (temprano)", wortart: "sustantivo", beispiel: "Am Abend lese ich.", beispielUe: "Por la tarde-noche leo." },
    { id: "v0308", de: "die Arbeit",     es: "el trabajo",     wortart: "sustantivo", beispiel: "Die Arbeit beginnt um acht.", beispielUe: "El trabajo empieza a las ocho." },
    { id: "v0309", de: "immer",          es: "siempre",        wortart: "adverbio", beispiel: "Ich stehe immer früh auf.", beispielUe: "Siempre me levanto temprano." },
    { id: "v0310", de: "manchmal",       es: "a veces",        wortart: "adverbio", beispiel: "Manchmal koche ich.", beispielUe: "A veces cocino." }
  ],
  saetze: [
    { id: "s0301", de: "Ich arbeite von neun bis fünf.",     es: "Trabajo de nueve a cinco." },
    { id: "s0302", de: "Was machst du am Wochenende?",       es: "¿Qué haces el fin de semana?" },
    { id: "s0303", de: "Wir lernen jeden Tag Deutsch.",      es: "Aprendemos alemán todos los días." },
    { id: "s0304", de: "Er trinkt am Morgen immer Kaffee.",  es: "Él siempre toma café por la mañana." },
    { id: "s0305", de: "Manchmal spielen wir Fußball.",      es: "A veces jugamos fútbol." }
  ],
  grammatik: {
    id: "g03", titel: "El presente de los verbos regulares",
    erklaerung: `
      <p>Buenas noticias: el presente alemán es <strong>más sencillo</strong> que el español.
      Solo hay un tiempo presente, no dos como <em>hablo</em> / <em>estoy hablando</em>.</p>
      <div class="merke"><strong>Cómo funciona:</strong> quitas la terminación
      <em>-en</em> del infinitivo y añades la terminación de cada persona.<br>
      <em>lern<s>en</s></em> → <em>lern-</em> → <em>ich lern<strong>e</strong></em></div>
      <table>
        <tr><th>Persona</th><th>Terminación</th><th>lernen</th><th>arbeiten</th></tr>
        <tr><td>ich</td><td>-e</td><td>lerne</td><td>arbeite</td></tr>
        <tr><td>du</td><td>-st</td><td>lernst</td><td>arbeit<em>e</em>st</td></tr>
        <tr><td>er/sie/es</td><td>-t</td><td>lernt</td><td>arbeit<em>e</em>t</td></tr>
        <tr><td>wir</td><td>-en</td><td>lernen</td><td>arbeiten</td></tr>
        <tr><td>ihr</td><td>-t</td><td>lernt</td><td>arbeit<em>e</em>t</td></tr>
        <tr><td>sie/Sie</td><td>-en</td><td>lernen</td><td>arbeiten</td></tr>
      </table>
      <div class="merke"><strong>La e de apoyo:</strong> si la raíz termina en
      <em>-t</em>, <em>-d</em> o en un grupo difícil de pronunciar, se añade una
      <em>e</em> antes de la terminación:<br>
      <em>arbeit<strong>e</strong>st</em>, <em>find<strong>e</strong>t</em>,
      <em>öffn<strong>e</strong>t</em><br>
      Sin ella sería impronunciable: <s>arbeitst</s>.</div>
      <p><strong>Un solo presente para todo:</strong></p>
      <ul>
        <li><em>Ich lerne Deutsch.</em> = Aprendo alemán. / Estoy aprendiendo alemán.</li>
        <li><em>Morgen lerne ich Deutsch.</em> = Mañana voy a aprender alemán.</li>
      </ul>
      <p>El alemán usa el presente incluso para el futuro cercano. Es una preocupación
      menos.</p>`,
    uebungen: [
      { id: "g0301", satz: "Ich ___ (lernen) jeden Tag.", loesung: "lerne", tipps: ["lerne", "lernst", "lernt"], hinweis: "ich → -e", ue: "Aprendo todos los días." },
      { id: "g0302", satz: "Du ___ (spielen) sehr gut.", loesung: "spielst", tipps: ["spielst", "spielt", "spiele"], hinweis: "du → -st", ue: "Juegas muy bien." },
      { id: "g0303", satz: "Er ___ (trinken) Kaffee.", loesung: "trinkt", tipps: ["trinkt", "trinkst", "trinken"], hinweis: "er → -t", ue: "Él bebe café." },
      { id: "g0304", satz: "Wir ___ (machen) das zusammen.", loesung: "machen", tipps: ["machen", "macht", "mache"], hinweis: "wir → -en", ue: "Hacemos eso juntos." },
      { id: "g0305", satz: "Du ___ (arbeiten) zu viel.", loesung: "arbeitest", tipps: ["arbeitest", "arbeitst", "arbeitet"], hinweis: "raíz en -t → e de apoyo", ue: "Trabajas demasiado." }
    ]
  }
});

LEKTION('de', {
  tag: 4, niveau: "A1", thema: "Tener y no tener",
  vokabeln: [
    { id: "v0401", de: "haben",          es: "tener",          wortart: "verbo", beispiel: "Ich habe keine Zeit.", beispielUe: "No tengo tiempo." },
    { id: "v0402", de: "die Zeit",       es: "el tiempo",      wortart: "sustantivo", beispiel: "Hast du Zeit?", beispielUe: "¿Tienes tiempo?" },
    { id: "v0403", de: "das Geld",       es: "el dinero",      wortart: "sustantivo", beispiel: "Wir haben wenig Geld.", beispielUe: "Tenemos poco dinero." },
    { id: "v0404", de: "der Hunger",     es: "el hambre",      wortart: "sustantivo", beispiel: "Ich habe Hunger.", beispielUe: "Tengo hambre." },
    { id: "v0405", de: "die Frage",      es: "la pregunta",    wortart: "sustantivo", beispiel: "Ich habe eine Frage.", beispielUe: "Tengo una pregunta." },
    { id: "v0406", de: "das Problem",    es: "el problema",    wortart: "sustantivo", beispiel: "Es gibt ein Problem.", beispielUe: "Hay un problema." },
    { id: "v0407", de: "die Idee",       es: "la idea",        wortart: "sustantivo", beispiel: "Das ist eine gute Idee.", beispielUe: "Esa es una buena idea." },
    { id: "v0408", de: "das Auto",       es: "el carro",       wortart: "sustantivo", beispiel: "Wir haben kein Auto.", beispielUe: "No tenemos carro." },
    { id: "v0409", de: "die Wohnung",    es: "el departamento", wortart: "sustantivo", beispiel: "Die Wohnung ist klein.", beispielUe: "El departamento es pequeño." },
    { id: "v0410", de: "der Hund",       es: "el perro",       wortart: "sustantivo", beispiel: "Sie hat einen Hund.", beispielUe: "Ella tiene un perro." }
  ],
  saetze: [
    { id: "s0401", de: "Ich habe heute keine Zeit.",         es: "Hoy no tengo tiempo." },
    { id: "s0402", de: "Wir haben kein Auto.",               es: "No tenemos carro." },
    { id: "s0403", de: "Das ist nicht mein Buch.",           es: "Ese no es mi libro." },
    { id: "s0404", de: "Er kommt heute nicht.",              es: "Él no viene hoy." },
    { id: "s0405", de: "Hast du eine Idee?",                 es: "¿Tienes una idea?" }
  ],
  grammatik: {
    id: "g04", titel: "haben y la negación: nicht o kein",
    erklaerung: `
      <p><em>haben</em> es irregular solo en dos formas — muy fácil:</p>
      <table>
        <tr><td>ich <em>habe</em></td><td>wir <em>haben</em></td></tr>
        <tr><td>du <em>hast</em></td><td>ihr <em>habt</em></td></tr>
        <tr><td>er/sie/es <em>hat</em></td><td>sie/Sie <em>haben</em></td></tr>
      </table>
      <p>Ahora lo importante: el alemán tiene <strong>dos palabras</strong> para negar,
      donde el español solo tiene <em>no</em>.</p>
      <div class="merke"><strong>La regla, en una línea:</strong><br>
      <em>kein</em> niega un <strong>sustantivo</strong> · <em>nicht</em> niega
      <strong>todo lo demás</strong>.</div>
      <table>
        <tr><th>kein — ante sustantivo</th><th>nicht — ante verbo, adjetivo, etc.</th></tr>
        <tr><td><em>Ich habe <strong>kein</strong> Auto.</em></td><td><em>Ich komme <strong>nicht</strong>.</em></td></tr>
        <tr><td><em>Wir haben <strong>keine</strong> Zeit.</em></td><td><em>Das ist <strong>nicht</strong> gut.</em></td></tr>
        <tr><td><em>Er hat <strong>keinen</strong> Hund.</em></td><td><em>Sie wohnt <strong>nicht</strong> hier.</em></td></tr>
      </table>
      <p><strong>Cuidado, una excepción:</strong> si el sustantivo lleva artículo
      determinado (<em>der/die/das</em>) o un posesivo (<em>mein/dein</em>), se usa
      <em>nicht</em>:</p>
      <ul>
        <li><em>Das ist <strong>nicht</strong> mein Buch.</em> (no es <em>kein</em>)</li>
        <li><em>Ich kenne <strong>den</strong> Mann <strong>nicht</strong>.</em></li>
      </ul>
      <p><em>kein</em> se declina como <em>ein</em>: <em>kein</em> Auto, <em>keine</em>
      Zeit, <em>keinen</em> Hund. Lo veremos en detalle el día 5.</p>
      <div class="merke"><strong>Posición de nicht:</strong> normalmente al
      <strong>final</strong> de la frase — <em>Ich komme heute <strong>nicht</strong>.</em><br>
      Pero antes de un adjetivo o de una indicación de lugar:
      <em>Das ist <strong>nicht</strong> gut.</em> · <em>Ich wohne <strong>nicht</strong>
      in Berlin.</em></div>`,
    uebungen: [
      { id: "g0401", satz: "Ich ___ (haben) heute keine Zeit.", loesung: "habe", tipps: ["habe", "hast", "hat"], hinweis: "ich → ?", ue: "Hoy no tengo tiempo." },
      { id: "g0402", satz: "Er ___ (haben) einen Hund.", loesung: "hat", tipps: ["hat", "habt", "habe"], hinweis: "er → ?", ue: "Él tiene un perro." },
      { id: "g0403", satz: "Wir haben ___ Auto.", loesung: "kein", tipps: ["kein", "nicht", "keine"], hinweis: "sustantivo neutro", ue: "No tenemos carro." },
      { id: "g0404", satz: "Er kommt heute ___.", loesung: "nicht", tipps: ["nicht", "kein", "keine"], hinweis: "niega el verbo", ue: "Él no viene hoy." },
      { id: "g0405", satz: "Das ist ___ mein Buch.", loesung: "nicht", tipps: ["nicht", "kein", "keins"], hinweis: "posesivo → nicht", ue: "Ese no es mi libro." }
    ]
  }
});

LEKTION('de', {
  tag: 5, niveau: "A1", thema: "En la tienda",
  vokabeln: [
    { id: "v0501", de: "kaufen",         es: "comprar",        wortart: "verbo", beispiel: "Ich kaufe einen Apfel.", beispielUe: "Compro una manzana." },
    { id: "v0502", de: "brauchen",       es: "necesitar",      wortart: "verbo", beispiel: "Wir brauchen Milch.", beispielUe: "Necesitamos leche." },
    { id: "v0503", de: "suchen",         es: "buscar",         wortart: "verbo", beispiel: "Ich suche einen Pullover.", beispielUe: "Busco un suéter." },
    { id: "v0504", de: "der Apfel",      es: "la manzana",     wortart: "sustantivo", beispiel: "Der Apfel ist rot.", beispielUe: "La manzana es roja." },
    { id: "v0505", de: "das Brot",       es: "el pan",         wortart: "sustantivo", beispiel: "Ich kaufe das Brot hier.", beispielUe: "Compro el pan aquí." },
    { id: "v0506", de: "die Milch",      es: "la leche",       wortart: "sustantivo", beispiel: "Die Milch ist frisch.", beispielUe: "La leche está fresca." },
    { id: "v0507", de: "der Preis",      es: "el precio",      wortart: "sustantivo", beispiel: "Der Preis ist gut.", beispielUe: "El precio es bueno." },
    { id: "v0508", de: "teuer",          es: "caro",           wortart: "adjetivo", beispiel: "Das ist zu teuer.", beispielUe: "Eso es demasiado caro." },
    { id: "v0509", de: "billig",         es: "barato",         wortart: "adjetivo", beispiel: "Hier ist es billig.", beispielUe: "Aquí es barato." },
    { id: "v0510", de: "der Markt",      es: "el mercado",     wortart: "sustantivo", beispiel: "Wir gehen auf den Markt.", beispielUe: "Vamos al mercado." }
  ],
  saetze: [
    { id: "s0501", de: "Ich kaufe einen Apfel und ein Brot.", es: "Compro una manzana y un pan." },
    { id: "s0502", de: "Wir brauchen keinen Zucker.",         es: "No necesitamos azúcar." },
    { id: "s0503", de: "Suchst du eine Wohnung?",             es: "¿Buscas un departamento?" },
    { id: "s0504", de: "Der Preis ist zu hoch.",              es: "El precio es demasiado alto." },
    { id: "s0505", de: "Ich nehme den roten Pullover.",       es: "Me llevo el suéter rojo." }
  ],
  grammatik: {
    id: "g05", titel: "El acusativo: solo cambia el masculino",
    erklaerung: `
      <p>El alemán marca la función de cada palabra en la frase con los llamados
      <strong>casos</strong>. El español no hace esto — usa el orden y las preposiciones.
      Hoy vemos el primero después del nominativo: el <strong>acusativo</strong>, que marca
      el objeto directo (el «qué»).</p>
      <div class="merke"><strong>La mejor noticia del alemán:</strong> en el acusativo
      <strong>solo cambia el masculino</strong>. Femenino, neutro y plural quedan igual.</div>
      <table>
        <tr><th></th><th>Nominativo (quién)</th><th>Acusativo (a quién / qué)</th></tr>
        <tr><td>masculino</td><td><em>der</em> Mann / <em>ein</em> Mann</td>
            <td><em>den</em> Mann / <em>einen</em> Mann</td></tr>
        <tr><td>femenino</td><td><em>die</em> Frau / <em>eine</em> Frau</td>
            <td><em>die</em> Frau / <em>eine</em> Frau</td></tr>
        <tr><td>neutro</td><td><em>das</em> Kind / <em>ein</em> Kind</td>
            <td><em>das</em> Kind / <em>ein</em> Kind</td></tr>
        <tr><td>plural</td><td><em>die</em> Kinder</td><td><em>die</em> Kinder</td></tr>
      </table>
      <p><strong>Ejemplo con el mismo sustantivo en las dos funciones:</strong></p>
      <ul>
        <li><em><strong>Der</strong> Mann kauft das Buch.</em> — El hombre compra el libro.
            (el hombre actúa → nominativo)</li>
        <li><em>Ich sehe <strong>den</strong> Mann.</em> — Veo al hombre.
            (el hombre recibe la acción → acusativo)</li>
      </ul>
      <div class="merke"><strong>Cómo encontrarlo:</strong> pregunta
      <em>«¿wen oder was?»</em> (¿a quién o qué?) después del verbo. La respuesta va en
      acusativo.<br>
      <em>Ich kaufe <strong>einen Apfel</strong>.</em> — ¿Qué compro? Una manzana.</div>
      <p><strong>Y kein sigue exactamente el mismo patrón:</strong>
      <em>kein</em> Auto → <em>kein</em> Auto · <em>ein</em> Hund → <em>einen</em> Hund →
      <em>keinen</em> Hund.</p>
      <p><strong>Truco para recordar:</strong> el masculino acusativo siempre termina en
      <em>-en</em>: d<em>en</em>, ein<em>en</em>, kein<em>en</em>, mein<em>en</em>.</p>`,
    uebungen: [
      { id: "g0501", satz: "Ich kaufe ___ Apfel. (ein)", loesung: "einen", tipps: ["einen", "ein", "eine"], hinweis: "der Apfel → acusativo", ue: "Compro una manzana." },
      { id: "g0502", satz: "Ich kaufe ___ Brot. (ein)", loesung: "ein", tipps: ["ein", "einen", "eine"], hinweis: "das Brot → no cambia", ue: "Compro un pan." },
      { id: "g0503", satz: "Ich sehe ___ Mann. (der)", loesung: "den", tipps: ["den", "der", "dem"], hinweis: "masculino acusativo", ue: "Veo al hombre." },
      { id: "g0504", satz: "Wir brauchen ___ Milch. (die)", loesung: "die", tipps: ["die", "der", "den"], hinweis: "femenino → no cambia", ue: "Necesitamos la leche." },
      { id: "g0505", satz: "Er hat ___ Hund. (kein)", loesung: "keinen", tipps: ["keinen", "kein", "keine"], hinweis: "der Hund → acusativo", ue: "Él no tiene perro." }
    ]
  }
});

LEKTION('de', {
  tag: 6, niveau: "A1", thema: "Comer y dormir",
  vokabeln: [
    { id: "v0601", de: "essen",          es: "comer",          wortart: "verbo", beispiel: "Ich esse gern Fisch.", beispielUe: "Me gusta comer pescado." },
    { id: "v0602", de: "schlafen",       es: "dormir",         wortart: "verbo", beispiel: "Er schläft noch.", beispielUe: "Él todavía duerme." },
    { id: "v0603", de: "sprechen",       es: "hablar",         wortart: "verbo", beispiel: "Sprichst du Spanisch?", beispielUe: "¿Hablas español?" },
    { id: "v0604", de: "lesen",          es: "leer",           wortart: "verbo", beispiel: "Sie liest ein Buch.", beispielUe: "Ella lee un libro." },
    { id: "v0605", de: "fahren",         es: "ir en vehículo", wortart: "verbo", beispiel: "Wir fahren nach Köln.", beispielUe: "Vamos a Colonia." },
    { id: "v0606", de: "nehmen",         es: "tomar (agarrar)", wortart: "verbo", beispiel: "Ich nehme den Bus.", beispielUe: "Tomo el autobús." },
    { id: "v0607", de: "geben",          es: "dar",            wortart: "verbo", beispiel: "Gibst du mir das Buch?", beispielUe: "¿Me das el libro?" },
    { id: "v0608", de: "laufen",         es: "correr, caminar", wortart: "verbo", beispiel: "Er läuft jeden Morgen.", beispielUe: "Él corre cada mañana." },
    { id: "v0609", de: "das Frühstück",  es: "el desayuno",    wortart: "sustantivo", beispiel: "Das Frühstück ist fertig.", beispielUe: "El desayuno está listo." },
    { id: "v0610", de: "das Bett",       es: "la cama",        wortart: "sustantivo", beispiel: "Das Bett ist bequem.", beispielUe: "La cama es cómoda." }
  ],
  saetze: [
    { id: "s0601", de: "Er isst jeden Morgen ein Brot.",     es: "Él come un pan cada mañana." },
    { id: "s0602", de: "Sprichst du Deutsch?",               es: "¿Hablas alemán?" },
    { id: "s0603", de: "Sie schläft bis zehn Uhr.",          es: "Ella duerme hasta las diez." },
    { id: "s0604", de: "Ich nehme immer den Bus.",           es: "Siempre tomo el autobús." },
    { id: "s0605", de: "Wir fahren morgen nach München.",    es: "Mañana vamos a Múnich." }
  ],
  grammatik: {
    id: "g06", titel: "Verbos con cambio de vocal",
    erklaerung: `
      <p>Algunos verbos muy frecuentes cambian la vocal de la raíz — pero
      <strong>solo</strong> en <em>du</em> y <em>er/sie/es</em>. Todo lo demás es regular.</p>
      <table>
        <tr><th></th><th>e → i<br>sprechen</th><th>e → ie<br>lesen</th><th>a → ä<br>fahren</th></tr>
        <tr><td>ich</td><td>spreche</td><td>lese</td><td>fahre</td></tr>
        <tr><td>du</td><td>spr<em>i</em>chst</td><td>l<em>ie</em>st</td><td>f<em>ä</em>hrst</td></tr>
        <tr><td>er/sie/es</td><td>spr<em>i</em>cht</td><td>l<em>ie</em>st</td><td>f<em>ä</em>hrt</td></tr>
        <tr><td>wir</td><td>sprechen</td><td>lesen</td><td>fahren</td></tr>
        <tr><td>ihr</td><td>sprecht</td><td>lest</td><td>fahrt</td></tr>
        <tr><td>sie/Sie</td><td>sprechen</td><td>lesen</td><td>fahren</td></tr>
      </table>
      <div class="merke"><strong>Compáralo con el español:</strong> es el mismo fenómeno que
      en <em>poder → puedo</em> o <em>pedir → pido</em>. Y aquí también solo cambian algunas
      personas. La diferencia: en alemán son <em>du</em> y <em>er</em>, en español son todas
      menos <em>nosotros</em>.</div>
      <p><strong>Los más importantes, agrupados:</strong></p>
      <ul>
        <li><strong>e → i:</strong> sprechen, essen (<em>du isst</em>), geben
            (<em>du gibst</em>), nehmen (<em>du nimmst</em>), helfen (<em>du hilfst</em>)</li>
        <li><strong>e → ie:</strong> lesen, sehen (<em>du siehst</em>),
            empfehlen (<em>du empfiehlst</em>)</li>
        <li><strong>a → ä:</strong> fahren, schlafen (<em>du schläfst</em>),
            tragen (<em>du trägst</em>), laufen (<em>du läufst</em>), halten
            (<em>du hältst</em>)</li>
      </ul>
      <div class="merke"><strong>Dos irregulares que hay que saber de memoria:</strong><br>
      <em>nehmen</em> → ich nehme, <strong>du nimmst</strong>, <strong>er nimmt</strong><br>
      <em>essen</em> → ich esse, <strong>du isst</strong>, <strong>er isst</strong><br>
      Cambian más que la vocal, así que no siguen el patrón.</div>
      <p><strong>Y el más irregular de todos:</strong> <em>werden</em> (llegar a ser) —
      ich werde, <em>du wirst</em>, <em>er wird</em>. Lo necesitarás para el futuro y el
      pasivo.</p>`,
    uebungen: [
      { id: "g0601", satz: "Du ___ (sprechen) sehr gut Deutsch.", loesung: "sprichst", tipps: ["sprichst", "sprechst", "spricht"], hinweis: "e → i", ue: "Hablas muy bien alemán." },
      { id: "g0602", satz: "Er ___ (lesen) jeden Abend.", loesung: "liest", tipps: ["liest", "lest", "lesst"], hinweis: "e → ie", ue: "Él lee cada noche." },
      { id: "g0603", satz: "Sie ___ (fahren) nach Berlin.", loesung: "fährt", tipps: ["fährt", "fahrt", "fahrst"], hinweis: "a → ä", ue: "Ella va a Berlín." },
      { id: "g0604", satz: "Wir ___ (schlafen) bis neun.", loesung: "schlafen", tipps: ["schlafen", "schläfen", "schlaft"], hinweis: "wir no cambia", ue: "Dormimos hasta las nueve." },
      { id: "g0605", satz: "Du ___ (nehmen) den Bus.", loesung: "nimmst", tipps: ["nimmst", "nehmst", "nimst"], hinweis: "irregular", ue: "Tomas el autobús." }
    ]
  }
});

LEKTION('de', {
  tag: 7, niveau: "A1", thema: "Mi familia",
  vokabeln: [
    { id: "v0701", de: "die Familie",    es: "la familia",     wortart: "sustantivo", beispiel: "Meine Familie ist groß.", beispielUe: "Mi familia es grande." },
    { id: "v0702", de: "der Vater",      es: "el padre",       wortart: "sustantivo", beispiel: "Mein Vater arbeitet viel.", beispielUe: "Mi padre trabaja mucho." },
    { id: "v0703", de: "die Mutter",     es: "la madre",       wortart: "sustantivo", beispiel: "Meine Mutter kocht gern.", beispielUe: "A mi madre le gusta cocinar." },
    { id: "v0704", de: "der Bruder",     es: "el hermano",     wortart: "sustantivo", beispiel: "Mein Bruder ist jünger.", beispielUe: "Mi hermano es menor." },
    { id: "v0705", de: "die Schwester",  es: "la hermana",     wortart: "sustantivo", beispiel: "Meine Schwester studiert.", beispielUe: "Mi hermana estudia." },
    { id: "v0706", de: "die Eltern",     es: "los padres",     wortart: "sustantivo", beispiel: "Meine Eltern wohnen in Chile.", beispielUe: "Mis padres viven en Chile." },
    { id: "v0707", de: "die Großmutter", es: "la abuela",      wortart: "sustantivo", beispiel: "Meine Großmutter ist 80.", beispielUe: "Mi abuela tiene 80 años." },
    { id: "v0708", de: "der Sohn",       es: "el hijo",        wortart: "sustantivo", beispiel: "Ihr Sohn heißt Max.", beispielUe: "Su hijo se llama Max." },
    { id: "v0709", de: "die Tochter",    es: "la hija",        wortart: "sustantivo", beispiel: "Unsere Tochter ist fünf.", beispielUe: "Nuestra hija tiene cinco años." },
    { id: "v0710", de: "die Geschwister", es: "los hermanos",  wortart: "sustantivo", beispiel: "Hast du Geschwister?", beispielUe: "¿Tienes hermanos?" }
  ],
  saetze: [
    { id: "s0701", de: "Das ist mein Bruder.",               es: "Este es mi hermano." },
    { id: "s0702", de: "Meine Eltern wohnen in Peru.",       es: "Mis padres viven en Perú." },
    { id: "s0703", de: "Ist das deine Schwester?",           es: "¿Es esa tu hermana?" },
    { id: "s0704", de: "Ich kenne seinen Vater nicht.",      es: "No conozco a su padre." },
    { id: "s0705", de: "Unsere Wohnung ist klein.",          es: "Nuestro departamento es pequeño." }
  ],
  grammatik: {
    id: "g07", titel: "Los posesivos: mein, dein, sein",
    erklaerung: `
      <p>Los posesivos alemanes tienen algo que a los hispanohablantes nos sorprende:
      se declinan <strong>como el artículo indeterminado <em>ein</em></strong>. Si sabes
      <em>ein / einen / eine</em>, ya sabes esto.</p>
      <table>
        <tr><th>Persona</th><th>Posesivo</th><th>Persona</th><th>Posesivo</th></tr>
        <tr><td>ich</td><td><em>mein</em></td><td>wir</td><td><em>unser</em></td></tr>
        <tr><td>du</td><td><em>dein</em></td><td>ihr</td><td><em>euer</em></td></tr>
        <tr><td>er / es</td><td><em>sein</em></td><td>sie (ellos)</td><td><em>ihr</em></td></tr>
        <tr><td>sie (ella)</td><td><em>ihr</em></td><td>Sie (usted)</td><td><em>Ihr</em></td></tr>
      </table>
      <p><strong>Terminaciones — idénticas a <em>ein</em>:</strong></p>
      <table>
        <tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Nominativo</td><td>mein</td><td>mein<em>e</em></td><td>mein</td><td>mein<em>e</em></td></tr>
        <tr><td>Acusativo</td><td>mein<em>en</em></td><td>mein<em>e</em></td><td>mein</td><td>mein<em>e</em></td></tr>
      </table>
      <div class="merke"><strong>La diferencia clave con el español:</strong> el posesivo
      alemán se rige por <strong>lo poseído</strong>, no por quien posee — igual que en
      español. Pero además cambia según el <strong>caso</strong>:<br>
      <em><strong>Mein</strong> Bruder kommt.</em> (nominativo)<br>
      <em>Ich sehe <strong>meinen</strong> Bruder.</em> (acusativo)</div>
      <div class="merke"><strong>Cuidado con <em>ihr</em>:</strong> tiene tres significados.<br>
      <em>ihr Vater</em> = el padre de ella <strong>o</strong> el padre de ellos<br>
      <em>Ihr Vater</em> (mayúscula) = el padre de usted<br>
      El contexto y la mayúscula lo aclaran.</div>
      <p><strong>Una irregularidad:</strong> <em>euer</em> pierde la <em>e</em> al declinarse:
      <em>euer Haus</em>, pero <em>eu<s>e</s>re Wohnung</em>, <em>eu<s>e</s>ren Vater</em>.</p>`,
    uebungen: [
      { id: "g0701", satz: "Das ist ___ Bruder. (mein)", loesung: "mein", tipps: ["mein", "meine", "meinen"], hinweis: "nominativo masculino", ue: "Este es mi hermano." },
      { id: "g0702", satz: "Ich sehe ___ Bruder. (mein)", loesung: "meinen", tipps: ["meinen", "mein", "meine"], hinweis: "acusativo masculino", ue: "Veo a mi hermano." },
      { id: "g0703", satz: "___ Schwester heißt Ana. (mein)", loesung: "Meine", tipps: ["Meine", "Mein", "Meinen"], hinweis: "die Schwester → femenino", ue: "Mi hermana se llama Ana." },
      { id: "g0704", satz: "___ Eltern wohnen in Chile. (mein)", loesung: "Meine", tipps: ["Meine", "Mein", "Meinen"], hinweis: "plural", ue: "Mis padres viven en Chile." },
      { id: "g0705", satz: "Ich kenne ___ Vater nicht. (sein)", loesung: "seinen", tipps: ["seinen", "sein", "seine"], hinweis: "acusativo masculino", ue: "No conozco a su padre." }
    ]
  }
});

LEKTION('de', {
  tag: 8, niveau: "A1", thema: "Poder, querer, deber",
  vokabeln: [
    { id: "v0801", de: "können",         es: "poder",          wortart: "verbo modal", beispiel: "Ich kann gut kochen.", beispielUe: "Sé cocinar bien." },
    { id: "v0802", de: "wollen",         es: "querer",         wortart: "verbo modal", beispiel: "Wir wollen nach Wien.", beispielUe: "Queremos ir a Viena." },
    { id: "v0803", de: "müssen",         es: "tener que",      wortart: "verbo modal", beispiel: "Ich muss jetzt gehen.", beispielUe: "Tengo que irme ahora." },
    { id: "v0804", de: "möchten",        es: "querría, quisiera", wortart: "verbo modal", beispiel: "Ich möchte einen Kaffee.", beispielUe: "Quisiera un café." },
    { id: "v0805", de: "helfen",         es: "ayudar",         wortart: "verbo", beispiel: "Kannst du mir helfen?", beispielUe: "¿Puedes ayudarme?" },
    { id: "v0806", de: "verstehen",      es: "entender",       wortart: "verbo", beispiel: "Ich verstehe das nicht.", beispielUe: "No entiendo eso." },
    { id: "v0807", de: "warten",         es: "esperar",        wortart: "verbo", beispiel: "Wir warten auf dich.", beispielUe: "Te esperamos." },
    { id: "v0808", de: "bezahlen",       es: "pagar",          wortart: "verbo", beispiel: "Ich möchte bezahlen.", beispielUe: "Quisiera pagar." },
    { id: "v0809", de: "die Hilfe",      es: "la ayuda",       wortart: "sustantivo", beispiel: "Danke für deine Hilfe.", beispielUe: "Gracias por tu ayuda." },
    { id: "v0810", de: "schnell",        es: "rápido",         wortart: "adjetivo", beispiel: "Du sprichst zu schnell.", beispielUe: "Hablas demasiado rápido." }
  ],
  saetze: [
    { id: "s0801", de: "Ich kann heute nicht kommen.",       es: "Hoy no puedo venir." },
    { id: "s0802", de: "Wir müssen morgen früh aufstehen.",  es: "Mañana tenemos que levantarnos temprano." },
    { id: "s0803", de: "Möchtest du einen Kaffee trinken?",  es: "¿Quisieras tomar un café?" },
    { id: "s0804", de: "Kannst du mir bitte helfen?",        es: "¿Puedes ayudarme, por favor?" },
    { id: "s0805", de: "Er will nächstes Jahr studieren.",   es: "Él quiere estudiar el año que viene." }
  ],
  grammatik: {
    id: "g08", titel: "Verbos modales y el infinitivo al final",
    erklaerung: `
      <p>Los verbos modales tienen dos particularidades. La primera es su conjugación
      irregular; la segunda es <strong>mucho más importante</strong> y va a acompañarte todo
      el curso.</p>
      <table>
        <tr><th></th><th>können</th><th>wollen</th><th>müssen</th><th>möchten</th></tr>
        <tr><td>ich</td><td>kann</td><td>will</td><td>muss</td><td>möchte</td></tr>
        <tr><td>du</td><td>kannst</td><td>willst</td><td>musst</td><td>möchtest</td></tr>
        <tr><td>er/sie/es</td><td>kann</td><td>will</td><td>muss</td><td>möchte</td></tr>
        <tr><td>wir</td><td>können</td><td>wollen</td><td>müssen</td><td>möchten</td></tr>
        <tr><td>ihr</td><td>könnt</td><td>wollt</td><td>müsst</td><td>möchtet</td></tr>
        <tr><td>sie/Sie</td><td>können</td><td>wollen</td><td>müssen</td><td>möchten</td></tr>
      </table>
      <div class="merke"><strong>Fíjate:</strong> <em>ich</em> y <em>er</em> tienen la
      <strong>misma forma</strong> y no llevan terminación. <em>ich kann</em>, <em>er kann</em>
      — nunca <s>er kannt</s>. Esto vale para todos los modales.</div>
      <div class="merke"><strong>La regla del paréntesis — la más importante de hoy:</strong><br>
      El verbo modal va en <strong>posición 2</strong>, el infinitivo se va al
      <strong>final de la frase</strong>.<br>
      <em>Ich <strong>muss</strong> heute früh nach Hause <strong>gehen</strong>.</em><br>
      En español todo va junto: «Tengo que irme temprano a casa». En alemán los dos verbos
      abrazan la frase.</div>
      <p><strong>Compara:</strong></p>
      <table>
        <tr><th>Español</th><th>Alemán</th></tr>
        <tr><td>Quiero comprar un carro.</td><td><em>Ich <strong>will</strong> ein Auto <strong>kaufen</strong>.</em></td></tr>
        <tr><td>¿Puedes ayudarme mañana?</td><td><em><strong>Kannst</strong> du mir morgen <strong>helfen</strong>?</em></td></tr>
      </table>
      <p><strong>Diferencias de significado importantes:</strong></p>
      <ul>
        <li><em>können</em> = poder <strong>y</strong> saber hacer algo:
            <em>Ich kann schwimmen.</em> = Sé nadar.</li>
        <li><em>wollen</em> = querer con voluntad firme. Para pedir algo con cortesía usa
            <em>möchten</em>: en un restaurante se dice <em>Ich <strong>möchte</strong>
            einen Kaffee</em>, nunca <em>Ich will…</em> (suena exigente).</li>
        <li><em>müssen</em> = tener que. Negado significa «no hace falta»:
            <em>Du musst nicht kommen.</em> = No hace falta que vengas.</li>
      </ul>`,
    uebungen: [
      { id: "g0801", satz: "Ich ___ (können) heute nicht kommen.", loesung: "kann", tipps: ["kann", "kanne", "kannst"], hinweis: "ich → sin terminación", ue: "Hoy no puedo venir." },
      { id: "g0802", satz: "Wir ___ (müssen) früh aufstehen.", loesung: "müssen", tipps: ["müssen", "müsst", "muss"], hinweis: "wir → ?", ue: "Tenemos que levantarnos temprano." },
      { id: "g0803", satz: "Ich möchte einen Kaffee ___ (trinken).", loesung: "trinken", tipps: ["trinken", "trinke", "trinkt"], hinweis: "infinitivo al final", ue: "Quisiera tomar un café." },
      { id: "g0804", satz: "___ (können) du mir helfen?", loesung: "Kannst", tipps: ["Kannst", "Kann", "Könnt"], hinweis: "du → ?", ue: "¿Puedes ayudarme?" },
      { id: "g0805", satz: "Er ___ (wollen) nächstes Jahr studieren.", loesung: "will", tipps: ["will", "willt", "wollt"], hinweis: "er → sin terminación", ue: "Él quiere estudiar el año que viene." }
    ]
  }
});

LEKTION('de', {
  tag: 9, niveau: "A1", thema: "La rutina diaria",
  vokabeln: [
    { id: "v0901", de: "aufstehen",      es: "levantarse",     wortart: "verbo separable", beispiel: "Ich stehe um sieben auf.", beispielUe: "Me levanto a las siete." },
    { id: "v0902", de: "anfangen",       es: "empezar",        wortart: "verbo separable", beispiel: "Der Kurs fängt um neun an.", beispielUe: "El curso empieza a las nueve." },
    { id: "v0903", de: "einkaufen",      es: "hacer compras",  wortart: "verbo separable", beispiel: "Wir kaufen am Samstag ein.", beispielUe: "Hacemos las compras el sábado." },
    { id: "v0904", de: "mitkommen",      es: "venir con",      wortart: "verbo separable", beispiel: "Kommst du mit?", beispielUe: "¿Vienes conmigo?" },
    { id: "v0905", de: "anrufen",        es: "llamar por teléfono", wortart: "verbo separable", beispiel: "Ich rufe dich später an.", beispielUe: "Te llamo más tarde." },
    { id: "v0906", de: "fernsehen",      es: "ver televisión", wortart: "verbo separable", beispiel: "Abends sehe ich fern.", beispielUe: "Por la noche veo televisión." },
    { id: "v0907", de: "zurückkommen",   es: "regresar",       wortart: "verbo separable", beispiel: "Er kommt um sechs zurück.", beispielUe: "Él regresa a las seis." },
    { id: "v0908", de: "aufhören",       es: "dejar de",       wortart: "verbo separable", beispiel: "Hör bitte auf!", beispielUe: "¡Para, por favor!" },
    { id: "v0909", de: "die Uhr",        es: "el reloj",       wortart: "sustantivo", beispiel: "Meine Uhr ist kaputt.", beispielUe: "Mi reloj está descompuesto." },
    { id: "v0910", de: "spät",           es: "tarde",          wortart: "adjetivo", beispiel: "Es ist schon spät.", beispielUe: "Ya es tarde." }
  ],
  saetze: [
    { id: "s0901", de: "Ich stehe jeden Tag um sechs auf.",  es: "Me levanto todos los días a las seis." },
    { id: "s0902", de: "Der Unterricht fängt um acht an.",   es: "La clase empieza a las ocho." },
    { id: "s0903", de: "Rufst du mich heute Abend an?",      es: "¿Me llamas esta noche?" },
    { id: "s0904", de: "Wir kaufen samstags immer ein.",     es: "Siempre hacemos las compras los sábados." },
    { id: "s0905", de: "Sie kommt um sieben Uhr zurück.",    es: "Ella regresa a las siete." }
  ],
  grammatik: {
    id: "g09", titel: "Verbos separables",
    erklaerung: `
      <p>Esta es probablemente la característica más extraña del alemán para un
      hispanohablante: hay verbos que <strong>se parten en dos</strong> al conjugarse.</p>
      <div class="merke"><strong>Cómo funciona:</strong> el prefijo se separa y se va al
      <strong>final de la frase</strong>.<br>
      Infinitivo: <em>auf<strong>stehen</strong></em><br>
      Conjugado: <em>Ich <strong>stehe</strong> um sieben Uhr <strong>auf</strong>.</em></div>
      <table>
        <tr><th>Infinitivo</th><th>En la frase</th></tr>
        <tr><td>an<em>rufen</em></td><td>Ich <em>rufe</em> dich <strong>an</strong>.</td></tr>
        <tr><td>ein<em>kaufen</em></td><td>Wir <em>kaufen</em> heute <strong>ein</strong>.</td></tr>
        <tr><td>mit<em>kommen</em></td><td><em>Kommst</em> du <strong>mit</strong>?</td></tr>
        <tr><td>fern<em>sehen</em></td><td>Er <em>sieht</em> gern <strong>fern</strong>.</td></tr>
      </table>
      <p><strong>Los prefijos separables más comunes:</strong>
      <em>ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, zu-, zurück-, weg-, hin-, her-</em></p>
      <div class="merke"><strong>Cómo reconocerlos al oír:</strong> en los verbos separables
      el acento va <strong>en el prefijo</strong>: <em><strong>AUF</strong>stehen</em>,
      <em><strong>AN</strong>rufen</em>. En los inseparables va en la raíz:
      <em>ver<strong>STE</strong>hen</em>, <em>be<strong>ZAH</strong>len</em>.</div>
      <p><strong>Prefijos que NO se separan nunca:</strong>
      <em>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</em><br>
      <em>Ich <strong>verstehe</strong> das.</em> (no <s>Ich stehe das ver</s>)<br>
      <em>Ich <strong>bezahle</strong> die Rechnung.</em></p>
      <div class="merke"><strong>Con un verbo modal el prefijo NO se separa:</strong><br>
      <em>Ich muss früh <strong>aufstehen</strong>.</em> — el verbo va entero al final,
      porque está en infinitivo.<br>
      Compara: <em>Ich <strong>stehe</strong> früh <strong>auf</strong>.</em> (sin modal,
      separado)</div>`,
    uebungen: [
      { id: "g0901", satz: "Ich ___ um sieben ___. (aufstehen)", loesung: "stehe", tipps: ["stehe", "aufstehe", "steh"], hinweis: "la parte conjugada", ue: "Me levanto a las siete." },
      { id: "g0902", satz: "Ich stehe um sieben ___. (aufstehen)", loesung: "auf", tipps: ["auf", "an", "aus"], hinweis: "el prefijo al final", ue: "Me levanto a las siete." },
      { id: "g0903", satz: "___ du heute mit? (mitkommen)", loesung: "Kommst", tipps: ["Kommst", "Mitkommst", "Komm"], hinweis: "du → ?", ue: "¿Vienes hoy?" },
      { id: "g0904", satz: "Ich muss früh ___. (aufstehen)", loesung: "aufstehen", tipps: ["aufstehen", "auf stehen", "stehen auf"], hinweis: "con modal queda entero", ue: "Tengo que levantarme temprano." },
      { id: "g0905", satz: "Ich ___ (verstehen) das nicht.", loesung: "verstehe", tipps: ["verstehe", "stehe", "verstehst"], hinweis: "ver- no se separa", ue: "No entiendo eso." }
    ]
  }
});

LEKTION('de', {
  tag: 10, niveau: "A1", thema: "Preguntar y responder",
  vokabeln: [
    { id: "v1001", de: "wer",            es: "quién",          wortart: "interrogativo", beispiel: "Wer ist das?", beispielUe: "¿Quién es ese?" },
    { id: "v1002", de: "was",            es: "qué",            wortart: "interrogativo", beispiel: "Was machst du?", beispielUe: "¿Qué haces?" },
    { id: "v1003", de: "wo",             es: "dónde",          wortart: "interrogativo", beispiel: "Wo wohnst du?", beispielUe: "¿Dónde vives?" },
    { id: "v1004", de: "wann",           es: "cuándo",         wortart: "interrogativo", beispiel: "Wann kommst du?", beispielUe: "¿Cuándo vienes?" },
    { id: "v1005", de: "warum",          es: "por qué",        wortart: "interrogativo", beispiel: "Warum lernst du Deutsch?", beispielUe: "¿Por qué aprendes alemán?" },
    { id: "v1006", de: "wie",            es: "cómo",           wortart: "interrogativo", beispiel: "Wie geht es dir?", beispielUe: "¿Cómo estás?" },
    { id: "v1007", de: "wohin",          es: "adónde",         wortart: "interrogativo", beispiel: "Wohin fährst du?", beispielUe: "¿Adónde vas?" },
    { id: "v1008", de: "wie viel",       es: "cuánto",         wortart: "interrogativo", beispiel: "Wie viel kostet das?", beispielUe: "¿Cuánto cuesta eso?" },
    { id: "v1009", de: "welcher",        es: "cuál",           wortart: "interrogativo", beispiel: "Welcher Bus fährt zum Bahnhof?", beispielUe: "¿Qué autobús va a la estación?" },
    { id: "v1010", de: "die Antwort",    es: "la respuesta",   wortart: "sustantivo", beispiel: "Die Antwort ist einfach.", beispielUe: "La respuesta es sencilla." }
  ],
  saetze: [
    { id: "s1001", de: "Woher kommst du?",                   es: "¿De dónde vienes?" },
    { id: "s1002", de: "Wie viel kostet das Buch?",          es: "¿Cuánto cuesta el libro?" },
    { id: "s1003", de: "Hast du morgen Zeit?",               es: "¿Tienes tiempo mañana?" },
    { id: "s1004", de: "Heute gehe ich ins Kino.",           es: "Hoy voy al cine." },
    { id: "s1005", de: "Warum kommst du nicht mit?",         es: "¿Por qué no vienes?" }
  ],
  grammatik: {
    id: "g10", titel: "El verbo en segunda posición",
    erklaerung: `
      <p>Esta es <strong>la</strong> regla del orden de palabras alemán. Si te quedas con
      una sola cosa de todo el nivel A1, que sea esta.</p>
      <div class="merke"><strong>En una frase enunciativa, el verbo conjugado ocupa
      SIEMPRE la posición 2.</strong> No la segunda palabra — el segundo
      <strong>elemento</strong>.</div>
      <table>
        <tr><th>Posición 1</th><th>2 (verbo)</th><th>resto</th></tr>
        <tr><td>Ich</td><td><em>gehe</em></td><td>heute ins Kino.</td></tr>
        <tr><td>Heute</td><td><em>gehe</em></td><td>ich ins Kino.</td></tr>
        <tr><td>Ins Kino</td><td><em>gehe</em></td><td>ich heute.</td></tr>
        <tr><td>Morgen früh</td><td><em>gehe</em></td><td>ich ins Kino.</td></tr>
      </table>
      <p>Puedes empezar la frase por donde quieras — pero entonces el sujeto pasa
      <strong>detrás</strong> del verbo. Esto se llama inversión y en español no existe:
      «Hoy <strong>yo voy</strong> al cine» / <em>Heute <strong>gehe ich</strong> ins
      Kino.</em></p>
      <p><strong>Las tres estructuras básicas:</strong></p>
      <table>
        <tr><th>Tipo</th><th>Verbo</th><th>Ejemplo</th></tr>
        <tr><td>Enunciativa</td><td>posición 2</td><td>Du <em>kommst</em> morgen.</td></tr>
        <tr><td>Pregunta con W</td><td>posición 2</td><td>Wann <em>kommst</em> du?</td></tr>
        <tr><td>Pregunta sí/no</td><td>posición 1</td><td><em>Kommst</em> du morgen?</td></tr>
      </table>
      <div class="merke"><strong>Buena noticia:</strong> para preguntar sí/no basta con
      poner el verbo al principio. No hace falta nada más — ni <em>¿…?</em> al revés, ni
      auxiliares como en inglés.<br>
      <em>Du hast Zeit.</em> → <em><strong>Hast</strong> du Zeit?</em></div>
      <p><strong>Las palabras interrogativas empiezan casi todas por W:</strong>
      <em>wer, was, wo, wann, warum, wie, woher, wohin, welcher, wie viel</em>.
      Por eso se llaman <em>W-Fragen</em>.</p>`,
    uebungen: [
      { id: "g1001", satz: "Heute ___ (gehen) ich ins Kino.", loesung: "gehe", tipps: ["gehe", "gehen", "geht"], hinweis: "verbo en posición 2", ue: "Hoy voy al cine." },
      { id: "g1002", satz: "Morgen ___ wir nach Berlin. (fahren)", loesung: "fahren", tipps: ["fahren", "fahrt", "fährt"], hinweis: "wir → ?", ue: "Mañana vamos a Berlín." },
      { id: "g1003", satz: "___ kommst du? (cuándo)", loesung: "Wann", tipps: ["Wann", "Wo", "Wie"], hinweis: "tiempo", ue: "¿Cuándo vienes?" },
      { id: "g1004", satz: "___ du morgen Zeit? (haben)", loesung: "Hast", tipps: ["Hast", "Du hast", "Habst"], hinweis: "pregunta sí/no → verbo primero", ue: "¿Tienes tiempo mañana?" },
      { id: "g1005", satz: "___ kommst du? (de dónde)", loesung: "Woher", tipps: ["Woher", "Wohin", "Wo"], hinweis: "origen", ue: "¿De dónde vienes?" }
    ]
  }
});
