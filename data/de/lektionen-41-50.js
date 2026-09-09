/* Día 41–50 · Nivel A2 · Relativos, genitivo y conectores */

LEKTION('de', {
  tag: 41, niveau: "A2", thema: "Personas y cosas concretas",
  vokabeln: [
    { id: "v4101", de: "der Bekannte",   es: "el conocido",    wortart: "sustantivo", beispiel: "Ein Bekannter hat angerufen.", beispielUe: "Un conocido llamó." },
    { id: "v4102", de: "die Wohnung mieten", es: "rentar el departamento", wortart: "expresión", beispiel: "Wir mieten eine Wohnung.", beispielUe: "Rentamos un departamento." },
    { id: "v4103", de: "empfehlen",      es: "recomendar",     wortart: "verbo", beispiel: "Das Restaurant, das er empfiehlt.", beispielUe: "El restaurante que él recomienda." },
    { id: "v4104", de: "der Vermieter",  es: "el arrendador",  wortart: "sustantivo", beispiel: "Der Vermieter wohnt oben.", beispielUe: "El arrendador vive arriba." },
    { id: "v4105", de: "das Gebäude",    es: "el edificio",    wortart: "sustantivo", beispiel: "Das Gebäude ist alt.", beispielUe: "El edificio es viejo." },
    { id: "v4106", de: "die Gegend",     es: "la zona",        wortart: "sustantivo", beispiel: "Die Gegend ist ruhig.", beispielUe: "La zona es tranquila." },
    { id: "v4107", de: "renovieren",     es: "renovar",        wortart: "verbo", beispiel: "Die Wohnung wurde renoviert.", beispielUe: "El departamento fue renovado." },
    { id: "v4108", de: "die Aussicht",   es: "la vista",       wortart: "sustantivo", beispiel: "Die Aussicht ist toll.", beispielUe: "La vista es genial." },
    { id: "v4109", de: "der Stock",      es: "el piso (nivel)", wortart: "sustantivo", beispiel: "Wir wohnen im dritten Stock.", beispielUe: "Vivimos en el tercer piso." },
    { id: "v4110", de: "der Aufzug",     es: "el elevador",    wortart: "sustantivo", beispiel: "Der Aufzug ist kaputt.", beispielUe: "El elevador está descompuesto." }
  ],
  saetze: [
    { id: "s4101", de: "Das ist der Mann, der nebenan wohnt.", es: "Ese es el hombre que vive al lado." },
    { id: "s4102", de: "Die Wohnung, die wir mieten, ist klein.", es: "El departamento que rentamos es pequeño." },
    { id: "s4103", de: "Das Buch, das ich lese, ist spannend.", es: "El libro que leo es emocionante." },
    { id: "s4104", de: "Die Leute, die hier arbeiten, sind nett.", es: "La gente que trabaja aquí es amable." },
    { id: "s4105", de: "Kennst du den Film, den er empfiehlt?", es: "¿Conoces la película que él recomienda?" }
  ],
  grammatik: {
    id: "g41", titel: "Oraciones de relativo",
    erklaerung: `
      <p>Donde el español usa siempre <em>que</em>, el alemán tiene una forma distinta
      según el género y el caso. Suena complicado, pero la tabla ya te resulta conocida.</p>
      <div class="merke"><strong>Los pronombres relativos son casi idénticos al artículo
      determinado</strong> — solo el dativo plural y el genitivo se salen.</div>
      <table>
        <tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Nominativo</td><td><em>der</em></td><td><em>die</em></td><td><em>das</em></td><td><em>die</em></td></tr>
        <tr><td>Acusativo</td><td><em>den</em></td><td><em>die</em></td><td><em>das</em></td><td><em>die</em></td></tr>
        <tr><td>Dativo</td><td><em>dem</em></td><td><em>der</em></td><td><em>dem</em></td><td><em>denen</em></td></tr>
      </table>
      <div class="merke"><strong>Dos preguntas te dan la forma correcta:</strong><br>
      1. ¿Qué <strong>género</strong> tiene la palabra a la que se refiere?<br>
      2. ¿Qué <strong>función</strong> tiene dentro de la subordinada?<br>
      El género viene de fuera, el caso de dentro.</div>
      <p><strong>Mira el mismo sustantivo en tres casos:</strong></p>
      <ul>
        <li><em>Der Mann, <strong>der</strong> dort wohnt.</em>
            (él vive → sujeto → nominativo)</li>
        <li><em>Der Mann, <strong>den</strong> ich kenne.</em>
            (yo lo conozco → objeto directo → acusativo)</li>
        <li><em>Der Mann, <strong>dem</strong> ich helfe.</em>
            (yo le ayudo → <em>helfen</em> pide dativo)</li>
      </ul>
      <p><strong>Y el verbo, como en toda subordinada, va al final:</strong>
      <em>Die Wohnung, die wir mieten <strong>wollen</strong>, ist klein.</em></p>
      <div class="merke"><strong>Dos reglas fijas:</strong><br>
      La coma es <strong>obligatoria</strong>, siempre.<br>
      El pronombre relativo <strong>nunca</strong> se omite. En español puedes decir «el
      libro que leí» o «el libro leído»; en alemán <em>das Buch, <strong>das</strong> ich
      las</em> — sin <em>das</em> la frase no existe.</div>
      <p><strong>Con preposición</strong> la preposición va delante del relativo:
      <em>Der Mann, <strong>mit dem</strong> ich spreche.</em> — El hombre con el que hablo.</p>`,
    uebungen: [
      { id: "g4101", satz: "Das ist der Mann, ___ nebenan wohnt.", loesung: "der", tipps: ["der", "den", "dem"], hinweis: "sujeto → nominativo", ue: "Ese es el hombre que vive al lado." },
      { id: "g4102", satz: "Kennst du den Film, ___ er empfiehlt?", loesung: "den", tipps: ["den", "der", "dem"], hinweis: "objeto directo masculino", ue: "¿Conoces la película que él recomienda?" },
      { id: "g4103", satz: "Die Wohnung, ___ wir mieten, ist klein.", loesung: "die", tipps: ["die", "der", "den"], hinweis: "femenino acusativo", ue: "El departamento que rentamos es pequeño." },
      { id: "g4104", satz: "Das Buch, ___ ich lese, ist gut.", loesung: "das", tipps: ["das", "dass", "der"], hinweis: "neutro", ue: "El libro que leo es bueno." },
      { id: "g4105", satz: "Der Mann, ___ ich helfe, ist mein Nachbar.", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "helfen → dativo", ue: "El hombre al que ayudo es mi vecino." }
    ]
  }
});

LEKTION('de', {
  tag: 42, niveau: "A2", thema: "Pertenencia",
  vokabeln: [
    { id: "v4201", de: "der Besitzer",   es: "el dueño",       wortart: "sustantivo", beispiel: "Der Besitzer des Hauses.", beispielUe: "El dueño de la casa." },
    { id: "v4202", de: "das Ende",       es: "el final",       wortart: "sustantivo", beispiel: "Am Ende des Films.", beispielUe: "Al final de la película." },
    { id: "v4203", de: "der Anfang",     es: "el comienzo",    wortart: "sustantivo", beispiel: "Am Anfang des Jahres.", beispielUe: "Al comienzo del año." },
    { id: "v4204", de: "der Titel",      es: "el título",      wortart: "sustantivo", beispiel: "Der Titel des Buches.", beispielUe: "El título del libro." },
    { id: "v4205", de: "wegen",          es: "a causa de",     wortart: "preposición", beispiel: "Wegen des Regens bleiben wir.", beispielUe: "A causa de la lluvia nos quedamos." },
    { id: "v4206", de: "während",        es: "durante",        wortart: "preposición", beispiel: "Während des Sommers.", beispielUe: "Durante el verano." },
    { id: "v4207", de: "trotz",          es: "a pesar de",     wortart: "preposición", beispiel: "Trotz des Wetters gehen wir.", beispielUe: "A pesar del clima vamos." },
    { id: "v4208", de: "der Inhalt",     es: "el contenido",   wortart: "sustantivo", beispiel: "Der Inhalt der Mail ist wichtig.", beispielUe: "El contenido del correo es importante." },
    { id: "v4209", de: "die Bedeutung",  es: "el significado", wortart: "sustantivo", beispiel: "Die Bedeutung des Wortes.", beispielUe: "El significado de la palabra." },
    { id: "v4210", de: "die Farbe",      es: "el color",       wortart: "sustantivo", beispiel: "Die Farbe des Autos ist rot.", beispielUe: "El color del carro es rojo." }
  ],
  saetze: [
    { id: "s4201", de: "Das ist das Auto meines Bruders.",   es: "Ese es el carro de mi hermano." },
    { id: "s4202", de: "Der Titel des Buches ist lang.",     es: "El título del libro es largo." },
    { id: "s4203", de: "Wegen des Regens bleiben wir zu Hause.", es: "A causa de la lluvia nos quedamos en casa." },
    { id: "s4204", de: "Am Ende der Straße ist ein Park.",   es: "Al final de la calle hay un parque." },
    { id: "s4205", de: "Das ist das Auto von meinem Bruder.", es: "Ese es el carro de mi hermano." }
  ],
  grammatik: {
    id: "g42", titel: "El genitivo",
    erklaerung: `
      <p>El cuarto y último caso. Expresa pertenencia — lo que en español se dice con
      <em>de</em>.</p>
      <table>
        <tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Genitivo</td><td><em>des</em> Mann<em>es</em></td><td><em>der</em> Frau</td><td><em>des</em> Kind<em>es</em></td><td><em>der</em> Kinder</td></tr>
      </table>
      <div class="merke"><strong>Dos cosas cambian a la vez:</strong> el artículo
      (<em>des/der</em>) <strong>y</strong> el sustantivo masculino y neutro, que añade
      <em>-s</em> o <em>-es</em>.<br>
      <em>das Auto <strong>des</strong> Mann<strong>es</strong></em><br>
      Femenino y plural no añaden nada: <em>das Auto <strong>der</strong> Frau</em>.</div>
      <p><strong>Cuándo se añade -es y cuándo -s:</strong></p>
      <ul>
        <li><em>-es</em> en palabras de una sílaba o terminadas en s, ß, x, z:
            <em>des Kind<strong>es</strong></em>, <em>des Haus<strong>es</strong></em></li>
        <li><em>-s</em> en las demás: <em>des Lehrer<strong>s</strong></em>,
            <em>des Autos</em></li>
      </ul>
      <p><strong>Con nombres propios</strong> el genitivo va delante, como el inglés:
      <em><strong>Annas</strong> Buch</em>, <em><strong>Peters</strong> Auto</em> —
      sin apóstrofo.</p>
      <p><strong>Cuatro preposiciones piden genitivo:</strong></p>
      <table>
        <tr><td><em>wegen</em></td><td>a causa de</td><td>wegen <em>des</em> Regens</td></tr>
        <tr><td><em>während</em></td><td>durante</td><td>während <em>des</em> Sommers</td></tr>
        <tr><td><em>trotz</em></td><td>a pesar de</td><td>trotz <em>der</em> Kälte</td></tr>
        <tr><td><em>statt</em></td><td>en lugar de</td><td>statt <em>des</em> Buches</td></tr>
      </table>
      <div class="merke"><strong>Buena noticia para el habla cotidiana:</strong> el genitivo
      está desapareciendo del alemán hablado. En su lugar se usa <em>von</em> + dativo:<br>
      <em>das Auto <strong>meines Bruders</strong></em> (escrito, formal)<br>
      <em>das Auto <strong>von meinem Bruder</strong></em> (hablado, normal)<br>
      Incluso <em>wegen</em> se oye con dativo: <em>wegen dem Regen</em>. No es la norma
      escrita, pero lo dicen todos.</div>`,
    uebungen: [
      { id: "g4201", satz: "Das ist das Auto ___ Bruders. (mein)", loesung: "meines", tipps: ["meines", "meinem", "meiner"], hinweis: "genitivo masculino", ue: "Ese es el carro de mi hermano." },
      { id: "g4202", satz: "Der Titel ___ Buches ist lang. (das)", loesung: "des", tipps: ["des", "der", "dem"], hinweis: "neutro genitivo", ue: "El título del libro es largo." },
      { id: "g4203", satz: "Am Ende ___ Straße. (die)", loesung: "der", tipps: ["der", "des", "den"], hinweis: "femenino genitivo", ue: "Al final de la calle." },
      { id: "g4204", satz: "Wegen ___ Regens bleiben wir. (der Regen)", loesung: "des", tipps: ["des", "dem", "der"], hinweis: "wegen → genitivo", ue: "A causa de la lluvia nos quedamos." },
      { id: "g4205", satz: "Das Auto ___ meinem Bruder. (hablado)", loesung: "von", tipps: ["von", "des", "aus"], hinweis: "alternativa coloquial", ue: "El carro de mi hermano." }
    ]
  }
});

LEKTION('de', {
  tag: 43, niveau: "A2", thema: "Antes y después",
  vokabeln: [
    { id: "v4301", de: "nachdem",        es: "después de que", wortart: "conjunción", beispiel: "Nachdem ich gegessen hatte, ging ich.", beispielUe: "Después de haber comido, me fui." },
    { id: "v4302", de: "bevor",          es: "antes de que",   wortart: "conjunción", beispiel: "Bevor ich gehe, rufe ich an.", beispielUe: "Antes de irme, llamo." },
    { id: "v4303", de: "seitdem",        es: "desde que",      wortart: "conjunción", beispiel: "Seitdem er hier ist, geht alles besser.", beispielUe: "Desde que él está aquí, todo va mejor." },
    { id: "v4304", de: "bis",            es: "hasta que",      wortart: "conjunción", beispiel: "Warte, bis ich fertig bin.", beispielUe: "Espera hasta que termine." },
    { id: "v4305", de: "während",        es: "mientras",       wortart: "conjunción", beispiel: "Während ich koche, hört sie Musik.", beispielUe: "Mientras cocino, ella escucha música." },
    { id: "v4306", de: "sobald",         es: "en cuanto",      wortart: "conjunción", beispiel: "Sobald ich kann, komme ich.", beispielUe: "En cuanto pueda, voy." },
    { id: "v4307", de: "vorher",         es: "antes",          wortart: "adverbio", beispiel: "Vorher habe ich gearbeitet.", beispielUe: "Antes trabajé." },
    { id: "v4308", de: "danach",         es: "después",        wortart: "adverbio", beispiel: "Danach gehen wir essen.", beispielUe: "Después vamos a comer." },
    { id: "v4309", de: "inzwischen",     es: "mientras tanto", wortart: "adverbio", beispiel: "Inzwischen ist es spät.", beispielUe: "Mientras tanto se hizo tarde." },
    { id: "v4310", de: "zuerst",         es: "primero",        wortart: "adverbio", beispiel: "Zuerst esse ich, dann arbeite ich.", beispielUe: "Primero como, luego trabajo." }
  ],
  saetze: [
    { id: "s4301", de: "Nachdem ich gegessen hatte, ging ich schlafen.", es: "Después de haber comido, me fui a dormir." },
    { id: "s4302", de: "Bevor ich gehe, rufe ich dich an.", es: "Antes de irme, te llamo." },
    { id: "s4303", de: "Während ich koche, deckt er den Tisch.", es: "Mientras cocino, él pone la mesa." },
    { id: "s4304", de: "Seitdem er hier wohnt, ist es lauter.", es: "Desde que vive aquí, hay más ruido." },
    { id: "s4305", de: "Ich warte, bis du fertig bist.",     es: "Espero hasta que termines." }
  ],
  grammatik: {
    id: "g43", titel: "Conjunciones temporales y el Plusquamperfekt",
    erklaerung: `
      <p>Seis conjunciones que ordenan los hechos en el tiempo. Todas mandan el verbo
      al final.</p>
      <table>
        <tr><th>Conjunción</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td><em>bevor</em></td><td>antes de que</td><td>Bevor ich gehe, rufe ich an.</td></tr>
        <tr><td><em>nachdem</em></td><td>después de que</td><td>Nachdem ich gegessen hatte, ging ich.</td></tr>
        <tr><td><em>während</em></td><td>mientras</td><td>Während ich koche, liest er.</td></tr>
        <tr><td><em>seitdem</em></td><td>desde que</td><td>Seitdem er hier ist, geht es besser.</td></tr>
        <tr><td><em>bis</em></td><td>hasta que</td><td>Warte, bis ich fertig bin.</td></tr>
        <tr><td><em>sobald</em></td><td>en cuanto</td><td>Sobald ich kann, komme ich.</td></tr>
      </table>
      <div class="merke"><strong>La regla especial de <em>nachdem</em>:</strong> exige un
      <strong>salto de tiempo</strong>. Lo que pasó antes va un tiempo más atrás.<br>
      <em>Nachdem ich <strong>gegessen hatte</strong> (Plusquamperfekt),
      <strong>ging</strong> ich schlafen (Präteritum).</em><br>
      Es la misma lógica del español: «Después de que <strong>hube comido</strong>…» — solo
      que en alemán es obligatorio, no opcional.</div>
      <p><strong>El Plusquamperfekt</strong> se forma igual que el Perfekt, pero con
      <em>hatte</em> / <em>war</em> en lugar de <em>habe</em> / <em>bin</em>:</p>
      <table>
        <tr><th>Perfekt</th><th>Plusquamperfekt</th></tr>
        <tr><td>ich <em>habe</em> gegessen</td><td>ich <em>hatte</em> gegessen</td></tr>
        <tr><td>ich <em>bin</em> gegangen</td><td>ich <em>war</em> gegangen</td></tr>
      </table>
      <p><strong>Las combinaciones habituales con nachdem:</strong></p>
      <ul>
        <li>pasado: <em>Nachdem ich gegessen <strong>hatte</strong>, ging ich.</em></li>
        <li>presente: <em>Nachdem ich gegessen <strong>habe</strong>, gehe ich.</em></li>
      </ul>
      <div class="merke"><strong>No confundir <em>während</em> conjunción y preposición:</strong><br>
      <em>Während ich <strong>koche</strong>…</em> (conjunción, verbo al final)<br>
      <em>Während <strong>des Essens</strong>…</em> (preposición + genitivo)<br>
      La misma palabra, dos construcciones.</div>`,
    uebungen: [
      { id: "g4301", satz: "Bevor ich gehe, ___ ich dich an. (anrufen)", loesung: "rufe", tipps: ["rufe", "anrufe", "rufen"], hinweis: "frase principal, separable", ue: "Antes de irme te llamo." },
      { id: "g4302", satz: "Nachdem ich gegessen ___, ging ich schlafen.", loesung: "hatte", tipps: ["hatte", "habe", "war"], hinweis: "Plusquamperfekt", ue: "Después de haber comido me fui a dormir." },
      { id: "g4303", satz: "Während ich ___ (kochen), liest er.", loesung: "koche", tipps: ["koche", "kochen", "kocht"], hinweis: "verbo al final", ue: "Mientras cocino, él lee." },
      { id: "g4304", satz: "Ich warte, ___ du fertig bist. (hasta que)", loesung: "bis", tipps: ["bis", "seit", "bevor"], hinweis: "hasta que", ue: "Espero hasta que termines." },
      { id: "g4305", satz: "___ er hier wohnt, ist es lauter. (desde que)", loesung: "Seitdem", tipps: ["Seitdem", "Bevor", "Nachdem"], hinweis: "desde que", ue: "Desde que vive aquí hay más ruido." }
    ]
  }
});

LEKTION('de', {
  tag: 44, niveau: "A2", thema: "Objetivos y consecuencias",
  vokabeln: [
    { id: "v4401", de: "damit",          es: "para que",       wortart: "conjunción", beispiel: "Ich erkläre es, damit du es verstehst.", beispielUe: "Lo explico para que lo entiendas." },
    { id: "v4402", de: "deswegen",       es: "por eso",        wortart: "adverbio", beispiel: "Es regnet, deswegen bleibe ich.", beispielUe: "Llueve, por eso me quedo." },
    { id: "v4403", de: "der Zweck",      es: "el propósito",   wortart: "sustantivo", beispiel: "Was ist der Zweck?", beispielUe: "¿Cuál es el propósito?" },
    { id: "v4404", de: "erreichen",      es: "alcanzar",       wortart: "verbo", beispiel: "Ich möchte mein Ziel erreichen.", beispielUe: "Quiero alcanzar mi meta." },
    { id: "v4405", de: "die Folge",      es: "la consecuencia", wortart: "sustantivo", beispiel: "Das hat Folgen.", beispielUe: "Eso tiene consecuencias." },
    { id: "v4406", de: "sparen",         es: "ahorrar",        wortart: "verbo", beispiel: "Ich spare, um zu reisen.", beispielUe: "Ahorro para viajar." },
    { id: "v4407", de: "sich bewerben",  es: "postularse",     wortart: "verbo reflexivo", beispiel: "Ich bewerbe mich um die Stelle.", beispielUe: "Me postulo para el puesto." },
    { id: "v4408", de: "die Stelle",     es: "el puesto",      wortart: "sustantivo", beispiel: "Die Stelle ist frei.", beispielUe: "El puesto está libre." },
    { id: "v4409", de: "notwendig",      es: "necesario",      wortart: "adjetivo", beispiel: "Das ist notwendig.", beispielUe: "Eso es necesario." },
    { id: "v4410", de: "der Vorteil",    es: "la ventaja",     wortart: "sustantivo", beispiel: "Das hat viele Vorteile.", beispielUe: "Eso tiene muchas ventajas." }
  ],
  saetze: [
    { id: "s4401", de: "Ich lerne Deutsch, um hier zu arbeiten.", es: "Aprendo alemán para trabajar aquí." },
    { id: "s4402", de: "Ich erkläre es, damit du es verstehst.", es: "Lo explico para que lo entiendas." },
    { id: "s4403", de: "Ich spare Geld, um zu reisen.",      es: "Ahorro dinero para viajar." },
    { id: "s4404", de: "Er ging, ohne etwas zu sagen.",      es: "Se fue sin decir nada." },
    { id: "s4405", de: "Statt zu arbeiten, schläft er.",     es: "En lugar de trabajar, duerme." }
  ],
  grammatik: {
    id: "g44", titel: "um zu, damit, ohne zu",
    erklaerung: `
      <p>Para expresar un objetivo hay dos caminos, y la elección depende de una sola
      pregunta: <strong>¿es el mismo sujeto?</strong></p>
      <div class="merke"><strong>La regla:</strong><br>
      <strong>Mismo sujeto</strong> → <em>um … zu</em> + infinitivo<br>
      <em>Ich lerne Deutsch, <strong>um</strong> hier <strong>zu arbeiten</strong>.</em>
      (yo aprendo, yo trabajo)<br>
      <strong>Sujetos distintos</strong> → <em>damit</em> + oración con verbo al final<br>
      <em>Ich erkläre es, <strong>damit du</strong> es <strong>verstehst</strong>.</em>
      (yo explico, tú entiendes)</div>
      <p>Es exactamente igual que el español: «para <strong>trabajar</strong>» (infinitivo,
      mismo sujeto) frente a «para <strong>que entiendas</strong>» (subjuntivo, otro
      sujeto). Solo que el alemán usa indicativo donde nosotros usamos subjuntivo.</p>
      <table>
        <tr><th>Construcción</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td><em>um … zu</em></td><td>para</td><td>Ich spare, <em>um zu</em> reisen.</td></tr>
        <tr><td><em>damit</em></td><td>para que</td><td>Ich helfe, <em>damit</em> es schneller geht.</td></tr>
        <tr><td><em>ohne … zu</em></td><td>sin</td><td>Er ging, <em>ohne</em> etwas <em>zu</em> sagen.</td></tr>
        <tr><td><em>(an)statt … zu</em></td><td>en lugar de</td><td><em>Statt zu</em> arbeiten, schläft er.</td></tr>
      </table>
      <div class="merke"><strong>Ojo con <em>damit</em>:</strong> no confundir con
      <em>damit</em> = «con eso» (da- + mit, día 37).<br>
      <em>Ich schreibe <strong>damit</strong>.</em> = Escribo con eso.<br>
      <em>Ich erkläre es, <strong>damit</strong> du es verstehst.</em> = para que lo
      entiendas.<br>
      La coma y la posición te dicen cuál es.</div>
      <p><strong>Ordenar consecuencias</strong> — estos adverbios ocupan la posición 1 y
      empujan el sujeto detrás del verbo:</p>
      <ul>
        <li><em>Es regnet, <strong>deshalb bleibe ich</strong> zu Hause.</em></li>
        <li><em>Es regnet, <strong>deswegen bleibe ich</strong> zu Hause.</em>
            (mismo significado)</li>
        <li><em>Es regnet, <strong>also bleibe ich</strong> zu Hause.</em></li>
      </ul>`,
    uebungen: [
      { id: "g4401", satz: "Ich lerne Deutsch, ___ hier zu arbeiten.", loesung: "um", tipps: ["um", "damit", "ohne"], hinweis: "mismo sujeto", ue: "Aprendo alemán para trabajar aquí." },
      { id: "g4402", satz: "Ich erkläre es, ___ du es verstehst.", loesung: "damit", tipps: ["damit", "um", "ohne"], hinweis: "otro sujeto", ue: "Lo explico para que lo entiendas." },
      { id: "g4403", satz: "Er ging, ohne etwas ___ sagen.", loesung: "zu", tipps: ["zu", "-", "um"], hinweis: "ohne … zu", ue: "Se fue sin decir nada." },
      { id: "g4404", satz: "Ich spare, um ___ reisen.", loesung: "zu", tipps: ["zu", "-", "für"], hinweis: "um … zu", ue: "Ahorro para viajar." },
      { id: "g4405", satz: "Es regnet, deshalb ___ ich zu Hause. (bleiben)", loesung: "bleibe", tipps: ["bleibe", "ich bleibe", "bleiben"], hinweis: "verbo antes del sujeto", ue: "Llueve, por eso me quedo en casa." }
    ]
  }
});

LEKTION('de', {
  tag: 45, niveau: "A2", thema: "Naturaleza y clima",
  vokabeln: [
    { id: "v4501", de: "der Schnee",     es: "la nieve",       wortart: "sustantivo", beispiel: "Der Schnee ist geschmolzen.", beispielUe: "La nieve se derritió." },
    { id: "v4502", de: "der Wind",       es: "el viento",      wortart: "sustantivo", beispiel: "Der Wind ist stark.", beispielUe: "El viento es fuerte." },
    { id: "v4503", de: "die Wolke",      es: "la nube",        wortart: "sustantivo", beispiel: "Der Himmel ist voller Wolken.", beispielUe: "El cielo está lleno de nubes." },
    { id: "v4504", de: "das Gewitter",   es: "la tormenta",    wortart: "sustantivo", beispiel: "Ein Gewitter kommt.", beispielUe: "Viene una tormenta." },
    { id: "v4505", de: "der Wald",       es: "el bosque",      wortart: "sustantivo", beispiel: "Wir gehen im Wald spazieren.", beispielUe: "Paseamos por el bosque." },
    { id: "v4506", de: "der Berg",       es: "la montaña",     wortart: "sustantivo", beispiel: "Der Berg ist hoch.", beispielUe: "La montaña es alta." },
    { id: "v4507", de: "der See",        es: "el lago",        wortart: "sustantivo", beispiel: "Der See ist ruhig.", beispielUe: "El lago está tranquilo." },
    { id: "v4508", de: "die Umwelt",     es: "el medio ambiente", wortart: "sustantivo", beispiel: "Wir schützen die Umwelt.", beispielUe: "Protegemos el medio ambiente." },
    { id: "v4509", de: "der Müll",       es: "la basura",      wortart: "sustantivo", beispiel: "Wir trennen den Müll.", beispielUe: "Separamos la basura." },
    { id: "v4510", de: "schützen",       es: "proteger",       wortart: "verbo", beispiel: "Wir müssen die Natur schützen.", beispielUe: "Debemos proteger la naturaleza." }
  ],
  saetze: [
    { id: "s4501", de: "Obwohl es regnet, gehen wir spazieren.", es: "Aunque llueve, salimos a pasear." },
    { id: "s4502", de: "Es regnet, trotzdem gehen wir raus.", es: "Llueve, aun así salimos." },
    { id: "s4503", de: "Trotz des Regens gehen wir spazieren.", es: "A pesar de la lluvia salimos a pasear." },
    { id: "s4504", de: "Obwohl es kalt ist, ist es schön.", es: "Aunque hace frío, está bonito." },
    { id: "s4505", de: "Es war teuer, aber es hat sich gelohnt.", es: "Fue caro, pero valió la pena." }
  ],
  grammatik: {
    id: "g45", titel: "obwohl, trotzdem, trotz",
    erklaerung: `
      <p>Tres formas de decir «aunque» o «a pesar de» — que se construyen de forma
      completamente distinta. Es un punto donde muchos se equivocan.</p>
      <table>
        <tr><th>Palabra</th><th>Tipo</th><th>Construcción</th><th>Ejemplo</th></tr>
        <tr><td><em>obwohl</em></td><td>conjunción</td><td>verbo al <strong>final</strong></td>
            <td><em>Obwohl es <strong>regnet</strong>, gehe ich.</em></td></tr>
        <tr><td><em>trotzdem</em></td><td>adverbio</td><td>verbo en posición 2, sujeto detrás</td>
            <td><em>Es regnet, <strong>trotzdem gehe ich</strong>.</em></td></tr>
        <tr><td><em>trotz</em></td><td>preposición</td><td>+ genitivo</td>
            <td><em><strong>Trotz des Regens</strong> gehe ich.</em></td></tr>
      </table>
      <div class="merke"><strong>La misma idea, tres estructuras:</strong><br>
      <em><strong>Obwohl</strong> es regnet, gehe ich spazieren.</em><br>
      <em>Es regnet, <strong>trotzdem</strong> gehe ich spazieren.</em><br>
      <em><strong>Trotz</strong> des Regens gehe ich spazieren.</em><br>
      Elige una — pero no las mezcles. <s>Obwohl es regnet, trotzdem gehe ich</s> es un
      error típico.</div>
      <p><strong>El sistema completo de conectores</strong>, ordenado por tipo:</p>
      <table>
        <tr><th>Relación</th><th>Conjunción<br>(verbo al final)</th><th>Adverbio<br>(posición 1)</th><th>Preposición</th></tr>
        <tr><td>causa</td><td><em>weil</em></td><td><em>deshalb</em></td><td><em>wegen</em> + gen.</td></tr>
        <tr><td>concesión</td><td><em>obwohl</em></td><td><em>trotzdem</em></td><td><em>trotz</em> + gen.</td></tr>
        <tr><td>tiempo</td><td><em>während</em></td><td><em>inzwischen</em></td><td><em>während</em> + gen.</td></tr>
        <tr><td>finalidad</td><td><em>damit</em></td><td><em>dazu</em></td><td><em>zu</em> + dat.</td></tr>
      </table>
      <div class="merke"><strong>Cómo memorizarlo sin tabla:</strong> pregúntate qué sigue
      a la palabra.<br>
      ¿Sigue una <strong>frase completa con sujeto</strong>? → conjunción (verbo al final)
      o adverbio (verbo en posición 2).<br>
      ¿Sigue solo un <strong>sustantivo</strong>? → preposición.</div>`,
    uebungen: [
      { id: "g4501", satz: "___ es regnet, gehen wir spazieren.", loesung: "Obwohl", tipps: ["Obwohl", "Trotzdem", "Trotz"], hinweis: "conjunción + frase", ue: "Aunque llueve, salimos a pasear." },
      { id: "g4502", satz: "Es regnet, trotzdem ___ wir raus. (gehen)", loesung: "gehen", tipps: ["gehen", "wir gehen", "geht"], hinweis: "verbo antes del sujeto", ue: "Llueve, aun así salimos." },
      { id: "g4503", satz: "___ des Regens gehen wir spazieren.", loesung: "Trotz", tipps: ["Trotz", "Trotzdem", "Obwohl"], hinweis: "preposición + genitivo", ue: "A pesar de la lluvia salimos." },
      { id: "g4504", satz: "Obwohl es kalt ___ (sein), ist es schön.", loesung: "ist", tipps: ["ist", "ist kalt", "sei"], hinweis: "verbo al final", ue: "Aunque hace frío, está bonito." },
      { id: "g4505", satz: "Es regnet, ___ bleiben wir zu Hause. (por eso)", loesung: "deshalb", tipps: ["deshalb", "weil", "obwohl"], hinweis: "adverbio de causa", ue: "Llueve, por eso nos quedamos." }
    ]
  }
});

LEKTION('de', {
  tag: 46, niveau: "A2", thema: "Vida cotidiana",
  vokabeln: [
    { id: "v4601", de: "sich gewöhnen an", es: "acostumbrarse a", wortart: "verbo reflexivo", beispiel: "Ich gewöhne mich an das Wetter.", beispielUe: "Me acostumbro al clima." },
    { id: "v4602", de: "sich beschweren", es: "quejarse",      wortart: "verbo reflexivo", beispiel: "Er beschwert sich immer.", beispielUe: "Él siempre se queja." },
    { id: "v4603", de: "sich verabreden", es: "quedar",        wortart: "verbo reflexivo", beispiel: "Wir haben uns verabredet.", beispielUe: "Quedamos de vernos." },
    { id: "v4604", de: "sich vorstellen", es: "presentarse / imaginarse", wortart: "verbo reflexivo", beispiel: "Darf ich mich vorstellen?", beispielUe: "¿Me permite presentarme?" },
    { id: "v4605", de: "sich bedanken",  es: "dar las gracias", wortart: "verbo reflexivo", beispiel: "Ich möchte mich bedanken.", beispielUe: "Quiero dar las gracias." },
    { id: "v4606", de: "sich entschuldigen", es: "disculparse", wortart: "verbo reflexivo", beispiel: "Er hat sich entschuldigt.", beispielUe: "Él se disculpó." },
    { id: "v4607", de: "sich verspäten", es: "retrasarse",     wortart: "verbo reflexivo", beispiel: "Der Zug hat sich verspätet.", beispielUe: "El tren se retrasó." },
    { id: "v4608", de: "sich anmelden",  es: "registrarse",    wortart: "verbo reflexivo", beispiel: "Ich melde mich für den Kurs an.", beispielUe: "Me inscribo en el curso." },
    { id: "v4609", de: "sich umziehen",  es: "cambiarse de ropa", wortart: "verbo reflexivo", beispiel: "Ich ziehe mich schnell um.", beispielUe: "Me cambio rápido." },
    { id: "v4610", de: "sich auskennen", es: "conocer bien",   wortart: "verbo reflexivo", beispiel: "Er kennt sich gut aus.", beispielUe: "Él conoce bien el tema." }
  ],
  saetze: [
    { id: "s4601", de: "Ich habe mich an das Wetter gewöhnt.", es: "Me acostumbré al clima." },
    { id: "s4602", de: "Darf ich mich kurz vorstellen?",     es: "¿Me permite presentarme brevemente?" },
    { id: "s4603", de: "Der Zug hat sich um zehn Minuten verspätet.", es: "El tren se retrasó diez minutos." },
    { id: "s4604", de: "Ich möchte mich für den Kurs anmelden.", es: "Quiero inscribirme en el curso." },
    { id: "s4605", de: "Wir haben uns für Samstag verabredet.", es: "Quedamos para el sábado." }
  ],
  grammatik: {
    id: "g46", titel: "Verbos reflexivos en Perfekt y con preposición",
    erklaerung: `
      <p>Los reflexivos ya los conoces del día 22. Aquí lo que falta: cómo se comportan en
      pasado y qué preposición piden.</p>
      <div class="merke"><strong>En Perfekt todos van con <em>haben</em></strong> — sin
      excepción, aunque el verbo indique movimiento.<br>
      <em>Ich <strong>habe</strong> mich beeilt.</em> (me apuré)<br>
      <em>Er <strong>hat</strong> sich verspätet.</em> (se retrasó)</div>
      <p><strong>La posición del pronombre en Perfekt:</strong> justo detrás del verbo
      conjugado, nunca al final.</p>
      <ul>
        <li><em>Ich habe <strong>mich</strong> an das Wetter gewöhnt.</em></li>
        <li><em>Gestern habe ich <strong>mich</strong> verspätet.</em></li>
        <li>Si la frase empieza por otra cosa, el pronombre puede ir antes del sujeto:
            <em>Gestern hat <strong>sich</strong> der Zug verspätet.</em></li>
      </ul>
      <p><strong>Reflexivos con preposición fija</strong> — dos datos que aprender a la vez:</p>
      <table>
        <tr><td><em>sich freuen <strong>auf</strong></em></td><td>+ acus.</td><td>esperar con ganas (futuro)</td></tr>
        <tr><td><em>sich freuen <strong>über</strong></em></td><td>+ acus.</td><td>alegrarse de (presente/pasado)</td></tr>
        <tr><td><em>sich gewöhnen <strong>an</strong></em></td><td>+ acus.</td><td>acostumbrarse a</td></tr>
        <tr><td><em>sich interessieren <strong>für</strong></em></td><td>+ acus.</td><td>interesarse por</td></tr>
        <tr><td><em>sich ärgern <strong>über</strong></em></td><td>+ acus.</td><td>enojarse por</td></tr>
        <tr><td><em>sich beschweren <strong>über</strong></em></td><td>+ acus.</td><td>quejarse de</td></tr>
        <tr><td><em>sich erinnern <strong>an</strong></em></td><td>+ acus.</td><td>acordarse de</td></tr>
        <tr><td><em>sich anmelden <strong>für</strong></em></td><td>+ acus.</td><td>inscribirse en</td></tr>
      </table>
      <div class="merke"><strong>La diferencia entre <em>auf</em> y <em>über</em> con
      <em>sich freuen</em>:</strong><br>
      <em>Ich freue mich <strong>auf</strong> den Urlaub.</em> — Todavía no llegó, lo espero
      con ganas.<br>
      <em>Ich freue mich <strong>über</strong> das Geschenk.</em> — Ya lo tengo, me alegra.<br>
      Futuro → <em>auf</em>. Presente o pasado → <em>über</em>.</div>`,
    uebungen: [
      { id: "g4601", satz: "Ich ___ mich an das Wetter gewöhnt. (haben)", loesung: "habe", tipps: ["habe", "bin", "hatte"], hinweis: "reflexivos siempre con haben", ue: "Me acostumbré al clima." },
      { id: "g4602", satz: "Der Zug ___ sich verspätet. (haben)", loesung: "hat", tipps: ["hat", "ist", "war"], hinweis: "aunque sea movimiento", ue: "El tren se retrasó." },
      { id: "g4603", satz: "Ich freue mich ___ den Urlaub. (todavía no llega)", loesung: "auf", tipps: ["auf", "über", "für"], hinweis: "futuro", ue: "Espero las vacaciones con ganas." },
      { id: "g4604", satz: "Ich freue mich ___ das Geschenk. (ya lo tengo)", loesung: "über", tipps: ["über", "auf", "für"], hinweis: "presente", ue: "Me alegra el regalo." },
      { id: "g4605", satz: "Ich melde mich ___ den Kurs an.", loesung: "für", tipps: ["für", "auf", "an"], hinweis: "sich anmelden + ?", ue: "Me inscribo en el curso." }
    ]
  }
});

LEKTION('de', {
  tag: 47, niveau: "A2", thema: "En el banco y con dinero",
  vokabeln: [
    { id: "v4701", de: "das Konto",      es: "la cuenta",      wortart: "sustantivo", beispiel: "Ich eröffne ein Konto.", beispielUe: "Abro una cuenta." },
    { id: "v4702", de: "überweisen",     es: "transferir",     wortart: "verbo", beispiel: "Ich überweise das Geld.", beispielUe: "Transfiero el dinero." },
    { id: "v4703", de: "abheben",        es: "retirar",        wortart: "verbo separable", beispiel: "Ich hebe Geld ab.", beispielUe: "Retiro dinero." },
    { id: "v4704", de: "die Gebühr",     es: "la comisión",    wortart: "sustantivo", beispiel: "Die Gebühren sind hoch.", beispielUe: "Las comisiones son altas." },
    { id: "v4705", de: "der Kredit",     es: "el crédito",     wortart: "sustantivo", beispiel: "Wir brauchen einen Kredit.", beispielUe: "Necesitamos un crédito." },
    { id: "v4706", de: "sparen",         es: "ahorrar",        wortart: "verbo", beispiel: "Ich spare jeden Monat.", beispielUe: "Ahorro cada mes." },
    { id: "v4707", de: "die Steuer",     es: "el impuesto",    wortart: "sustantivo", beispiel: "Die Steuern sind hoch.", beispielUe: "Los impuestos son altos." },
    { id: "v4708", de: "das Gehalt",     es: "el sueldo",      wortart: "sustantivo", beispiel: "Mein Gehalt kommt am Ersten.", beispielUe: "Mi sueldo llega el primero." },
    { id: "v4709", de: "die Versicherung", es: "el seguro",    wortart: "sustantivo", beispiel: "Die Versicherung zahlt das.", beispielUe: "El seguro paga eso." },
    { id: "v4710", de: "der Betrag",     es: "el importe",     wortart: "sustantivo", beispiel: "Der Betrag stimmt nicht.", beispielUe: "El importe no coincide." }
  ],
  saetze: [
    { id: "s4701", de: "Wenn ich mehr Geld hätte, würde ich reisen.", es: "Si tuviera más dinero, viajaría." },
    { id: "s4702", de: "Ich würde gern ein Konto eröffnen.", es: "Me gustaría abrir una cuenta." },
    { id: "s4703", de: "An deiner Stelle würde ich sparen.", es: "En tu lugar yo ahorraría." },
    { id: "s4704", de: "Wenn ich Zeit hätte, käme ich mit.", es: "Si tuviera tiempo, iría contigo." },
    { id: "s4705", de: "Es wäre besser, wenn wir warten.",   es: "Sería mejor que esperáramos." }
  ],
  grammatik: {
    id: "g47", titel: "Konjunktiv II para lo irreal",
    erklaerung: `
      <p>El día 38 usaste el Konjunktiv II para pedir con cortesía. Su segundo uso es
      hablar de lo <strong>irreal</strong> — lo que sería si las cosas fueran distintas.</p>
      <div class="merke"><strong>La estructura, idéntica al español:</strong><br>
      <em><strong>Wenn</strong> ich mehr Geld <strong>hätte</strong>, <strong>würde</strong>
      ich reisen.</em><br>
      «Si <strong>tuviera</strong> más dinero, <strong>viajaría</strong>.»<br>
      Condición en Konjunktiv II, consecuencia con <em>würde</em>.</div>
      <p><strong>Las formas que se usan de verdad</strong> — el resto se construye con
      <em>würde</em>:</p>
      <table>
        <tr><th>Verbo</th><th>Präteritum</th><th>Konjunktiv II</th></tr>
        <tr><td>sein</td><td>war</td><td><em>wäre</em></td></tr>
        <tr><td>haben</td><td>hatte</td><td><em>hätte</em></td></tr>
        <tr><td>werden</td><td>wurde</td><td><em>würde</em></td></tr>
        <tr><td>können</td><td>konnte</td><td><em>könnte</em></td></tr>
        <tr><td>müssen</td><td>musste</td><td><em>müsste</em></td></tr>
        <tr><td>kommen</td><td>kam</td><td><em>käme</em></td></tr>
        <tr><td>gehen</td><td>ging</td><td><em>ginge</em></td></tr>
        <tr><td>wissen</td><td>wusste</td><td><em>wüsste</em></td></tr>
      </table>
      <div class="merke"><strong>Regla práctica:</strong> con <em>sein, haben</em>, los
      modales y unos pocos verbos frecuentes se usa la forma propia. Con todos los demás,
      <em>würde</em> + infinitivo. Nadie dice <em>ich schwömme</em> — se dice
      <em>ich würde schwimmen</em>.</div>
      <p><strong>Los usos principales:</strong></p>
      <ul>
        <li>condición irreal: <em>Wenn ich Zeit <strong>hätte</strong>,
            <strong>käme</strong> ich.</em></li>
        <li>consejo: <em>An deiner Stelle <strong>würde</strong> ich sparen.</em></li>
        <li>deseo: <em>Ich <strong>wäre</strong> gern reicher.</em></li>
        <li>propuesta suave: <em>Es <strong>wäre</strong> besser, wenn wir warten.</em></li>
      </ul>
      <p><strong>Sin <em>wenn</em>:</strong> se puede empezar directamente por el verbo,
      como en español con «de tener…»:<br>
      <em><strong>Hätte</strong> ich mehr Zeit, würde ich mitkommen.</em></p>`,
    uebungen: [
      { id: "g4701", satz: "Wenn ich mehr Geld ___ (haben), würde ich reisen.", loesung: "hätte", tipps: ["hätte", "hatte", "habe"], hinweis: "condición irreal", ue: "Si tuviera más dinero viajaría." },
      { id: "g4702", satz: "Ich ___ gern ein Konto eröffnen. (werden)", loesung: "würde", tipps: ["würde", "wurde", "werde"], hinweis: "deseo cortés", ue: "Me gustaría abrir una cuenta." },
      { id: "g4703", satz: "Es ___ besser, wenn wir warten. (sein)", loesung: "wäre", tipps: ["wäre", "war", "ist"], hinweis: "sería", ue: "Sería mejor que esperáramos." },
      { id: "g4704", satz: "An deiner Stelle ___ ich sparen. (werden)", loesung: "würde", tipps: ["würde", "wurde", "werde"], hinweis: "consejo", ue: "En tu lugar yo ahorraría." },
      { id: "g4705", satz: "Wenn ich Zeit hätte, ___ ich mit. (kommen)", loesung: "käme", tipps: ["käme", "kam", "komme"], hinweis: "forma propia con Umlaut", ue: "Si tuviera tiempo iría contigo." }
    ]
  }
});

LEKTION('de', {
  tag: 48, niveau: "A2", thema: "Medios de comunicación",
  vokabeln: [
    { id: "v4801", de: "die Nachricht",  es: "la noticia",     wortart: "sustantivo", beispiel: "Die Nachricht ist wichtig.", beispielUe: "La noticia es importante." },
    { id: "v4802", de: "die Zeitung",    es: "el periódico",   wortart: "sustantivo", beispiel: "Ich lese die Zeitung.", beispielUe: "Leo el periódico." },
    { id: "v4803", de: "die Sendung",    es: "el programa",    wortart: "sustantivo", beispiel: "Die Sendung beginnt gleich.", beispielUe: "El programa empieza pronto." },
    { id: "v4804", de: "berichten",      es: "informar",       wortart: "verbo", beispiel: "Sie berichten über den Unfall.", beispielUe: "Informan sobre el accidente." },
    { id: "v4805", de: "der Unfall",     es: "el accidente",   wortart: "sustantivo", beispiel: "Es gab einen Unfall.", beispielUe: "Hubo un accidente." },
    { id: "v4806", de: "die Werbung",    es: "la publicidad",  wortart: "sustantivo", beispiel: "Die Werbung nervt.", beispielUe: "La publicidad molesta." },
    { id: "v4807", de: "veröffentlichen", es: "publicar",      wortart: "verbo", beispiel: "Der Artikel wurde veröffentlicht.", beispielUe: "El artículo fue publicado." },
    { id: "v4808", de: "der Artikel",    es: "el artículo",    wortart: "sustantivo", beispiel: "Der Artikel ist lang.", beispielUe: "El artículo es largo." },
    { id: "v4809", de: "die Quelle",     es: "la fuente",      wortart: "sustantivo", beispiel: "Welche Quelle hast du?", beispielUe: "¿Qué fuente tienes?" },
    { id: "v4810", de: "abonnieren",     es: "suscribirse",    wortart: "verbo", beispiel: "Ich habe die Zeitung abonniert.", beispielUe: "Me suscribí al periódico." }
  ],
  saetze: [
    { id: "s4801", de: "Der Artikel wurde gestern veröffentlicht.", es: "El artículo fue publicado ayer." },
    { id: "s4802", de: "Über den Unfall wird viel berichtet.", es: "Se informa mucho sobre el accidente." },
    { id: "s4803", de: "Die Sendung kann online gesehen werden.", es: "El programa puede verse en línea." },
    { id: "s4804", de: "Die Zeitung ist gerade gelesen worden.", es: "El periódico acaba de ser leído." },
    { id: "s4805", de: "Das Buch ist auf Deutsch geschrieben.", es: "El libro está escrito en alemán." }
  ],
  grammatik: {
    id: "g48", titel: "Pasiva: todas las formas",
    erklaerung: `
      <p>La pasiva la conoces del día 39. Aquí el cuadro completo, con los tiempos que
      faltaban.</p>
      <table>
        <tr><th>Tiempo</th><th>Construcción</th><th>Ejemplo</th></tr>
        <tr><td>Präsens</td><td><em>wird</em> + Partizip</td><td>Das Buch <em>wird gelesen</em>.</td></tr>
        <tr><td>Präteritum</td><td><em>wurde</em> + Partizip</td><td>Das Buch <em>wurde gelesen</em>.</td></tr>
        <tr><td>Perfekt</td><td><em>ist</em> + Partizip + <em>worden</em></td><td>Das Buch <em>ist gelesen worden</em>.</td></tr>
        <tr><td>Plusquamperfekt</td><td><em>war</em> + Partizip + <em>worden</em></td><td>Das Buch <em>war gelesen worden</em>.</td></tr>
        <tr><td>con modal</td><td>modal + Partizip + <em>werden</em></td><td>Das <em>muss gelesen werden</em>.</td></tr>
      </table>
      <div class="merke"><strong>La pasiva de estado (<em>Zustandspassiv</em>)</strong> es
      otra cosa: describe el resultado, no el proceso.<br>
      <em>Die Tür <strong>wird</strong> geschlossen.</em> — Alguien la está cerrando.<br>
      <em>Die Tür <strong>ist</strong> geschlossen.</em> — Está cerrada, punto.<br>
      Es la diferencia entre <em>ser</em> y <em>estar</em> del español — y aquí sí
      coinciden los dos idiomas.</div>
      <p><strong>Verbos sin objeto directo</strong> forman una pasiva impersonal con
      <em>es</em>:</p>
      <ul>
        <li><em><strong>Es</strong> wird viel gearbeitet.</em> — Se trabaja mucho.</li>
        <li><em>Hier <strong>wird</strong> nicht geraucht.</em> — Aquí no se fuma.</li>
      </ul>
      <p>Si la frase empieza por otra cosa, el <em>es</em> desaparece — es solo un relleno
      para la posición 1.</p>
      <div class="merke"><strong>Cuándo usar la pasiva y cuándo no:</strong> el alemán la
      usa en textos técnicos, instrucciones, noticias y avisos. Al hablar es más natural
      <em>man</em>: <em><strong>Man</strong> arbeitet hier viel</em> suena mejor que
      <em>Es wird hier viel gearbeitet</em>.</div>`,
    uebungen: [
      { id: "g4801", satz: "Der Artikel ___ gestern veröffentlicht. (Präteritum)", loesung: "wurde", tipps: ["wurde", "wird", "worden"], hinweis: "pasado", ue: "El artículo fue publicado ayer." },
      { id: "g4802", satz: "Das Buch ist gelesen ___. (Perfekt Passiv)", loesung: "worden", tipps: ["worden", "geworden", "werden"], hinweis: "sin ge-", ue: "El libro ha sido leído." },
      { id: "g4803", satz: "Die Sendung kann online gesehen ___.", loesung: "werden", tipps: ["werden", "worden", "wird"], hinweis: "con modal", ue: "El programa puede verse en línea." },
      { id: "g4804", satz: "Die Tür ___ geschlossen. (estado)", loesung: "ist", tipps: ["ist", "wird", "wurde"], hinweis: "resultado", ue: "La puerta está cerrada." },
      { id: "g4805", satz: "Hier ___ nicht geraucht. (impersonal)", loesung: "wird", tipps: ["wird", "werden", "ist"], hinweis: "pasiva impersonal", ue: "Aquí no se fuma." }
    ]
  }
});

LEKTION('de', {
  tag: 49, niveau: "A2", thema: "Sentimientos y relaciones",
  vokabeln: [
    { id: "v4901", de: "das Gefühl",     es: "el sentimiento", wortart: "sustantivo", beispiel: "Ich habe ein gutes Gefühl.", beispielUe: "Tengo un buen presentimiento." },
    { id: "v4902", de: "sich verlieben", es: "enamorarse",     wortart: "verbo reflexivo", beispiel: "Er hat sich verliebt.", beispielUe: "Él se enamoró." },
    { id: "v4903", de: "vertrauen",      es: "confiar",        wortart: "verbo", beispiel: "Ich vertraue dir.", beispielUe: "Confío en ti." },
    { id: "v4904", de: "sich streiten",  es: "pelearse",       wortart: "verbo reflexivo", beispiel: "Wir streiten uns selten.", beispielUe: "Rara vez peleamos." },
    { id: "v4905", de: "sich versöhnen", es: "reconciliarse",  wortart: "verbo reflexivo", beispiel: "Sie haben sich versöhnt.", beispielUe: "Se reconciliaron." },
    { id: "v4906", de: "eifersüchtig",   es: "celoso",         wortart: "adjetivo", beispiel: "Er ist eifersüchtig.", beispielUe: "Él es celoso." },
    { id: "v4907", de: "die Sehnsucht",  es: "la nostalgia",   wortart: "sustantivo", beispiel: "Ich habe Sehnsucht nach Hause.", beispielUe: "Tengo nostalgia de mi casa." },
    { id: "v4908", de: "enttäuscht",     es: "decepcionado",   wortart: "adjetivo", beispiel: "Ich bin enttäuscht.", beispielUe: "Estoy decepcionado." },
    { id: "v4909", de: "stolz auf",      es: "orgulloso de",   wortart: "adjetivo", beispiel: "Ich bin stolz auf dich.", beispielUe: "Estoy orgulloso de ti." },
    { id: "v4910", de: "sich kümmern um", es: "cuidar de",     wortart: "verbo reflexivo", beispiel: "Sie kümmert sich um die Kinder.", beispielUe: "Ella cuida de los niños." }
  ],
  saetze: [
    { id: "s4901", de: "Er sagte, dass er müde sei.",        es: "Él dijo que estaba cansado." },
    { id: "s4902", de: "Sie sagte, sie komme später.",       es: "Ella dijo que vendría más tarde." },
    { id: "s4903", de: "Er meinte, er habe keine Zeit.",     es: "Él dijo que no tenía tiempo." },
    { id: "s4904", de: "Sie fragte, ob wir mitkommen.",      es: "Ella preguntó si íbamos." },
    { id: "s4905", de: "Er hat gesagt, dass er anruft.",     es: "Él dijo que llamaría." }
  ],
  grammatik: {
    id: "g49", titel: "Contar lo que otros dijeron",
    erklaerung: `
      <p>Para repetir lo que alguien dijo hay dos caminos: uno cotidiano y uno formal.
      En A2 basta el primero, pero conviene reconocer el segundo.</p>
      <p><strong>1. El camino cotidiano — con <em>dass</em> e indicativo:</strong></p>
      <ul>
        <li><em>Er hat gesagt, <strong>dass</strong> er müde <strong>ist</strong>.</em></li>
        <li><em>Sie hat gesagt, <strong>dass</strong> sie später <strong>kommt</strong>.</em></li>
      </ul>
      <div class="merke"><strong>Gran ventaja frente al español:</strong> no hay que cambiar
      la forma del verbo. El español dice «dijo que <strong>estaba</strong> cansado» — pasa
      del presente al imperfecto. El alemán deja <em>ist</em> tal cual.</div>
      <p><strong>2. El camino formal — Konjunktiv I</strong>, típico de periódicos y textos
      escritos:</p>
      <table>
        <tr><th>Estilo directo</th><th>Konjunktiv I</th></tr>
        <tr><td>«Ich <em>bin</em> müde.»</td><td>Er sagte, er <em>sei</em> müde.</td></tr>
        <tr><td>«Ich <em>komme</em> später.»</td><td>Sie sagte, sie <em>komme</em> später.</td></tr>
        <tr><td>«Ich <em>habe</em> keine Zeit.»</td><td>Er meinte, er <em>habe</em> keine Zeit.</td></tr>
      </table>
      <p>El Konjunktiv I se forma con la raíz del infinitivo + <em>-e</em>:
      <em>komm<strong>e</strong></em>, <em>hab<strong>e</strong></em>,
      <em>geh<strong>e</strong></em>. La única forma realmente irregular es
      <em>sein</em> → <em>sei, seist, sei, seien</em>.</p>
      <div class="merke"><strong>Para qué sirve:</strong> el Konjunktiv I marca distancia —
      «esto lo dice él, yo no lo afirmo». Es el equivalente del español «según él» o del
      condicional periodístico. Reconocerlo te ayuda a leer noticias alemanas.</div>
      <p><strong>Preguntas indirectas</strong> funcionan como el día 27:
      <em>Sie fragte, <strong>ob</strong> wir <strong>mitkommen</strong>.</em></p>`,
    uebungen: [
      { id: "g4901", satz: "Er hat gesagt, dass er müde ___ (sein).", loesung: "ist", tipps: ["ist", "sei", "wäre"], hinweis: "coloquial → indicativo", ue: "Dijo que estaba cansado." },
      { id: "g4902", satz: "Er sagte, er ___ müde. (Konjunktiv I)", loesung: "sei", tipps: ["sei", "ist", "war"], hinweis: "formal", ue: "Dijo que estaba cansado." },
      { id: "g4903", satz: "Sie sagte, sie ___ später. (kommen, Konj. I)", loesung: "komme", tipps: ["komme", "kommt", "käme"], hinweis: "raíz + e", ue: "Dijo que vendría más tarde." },
      { id: "g4904", satz: "Sie fragte, ___ wir mitkommen.", loesung: "ob", tipps: ["ob", "dass", "wenn"], hinweis: "pregunta sí/no", ue: "Preguntó si íbamos." },
      { id: "g4905", satz: "Er meinte, er ___ keine Zeit. (haben, Konj. I)", loesung: "habe", tipps: ["habe", "hat", "hätte"], hinweis: "raíz + e", ue: "Dijo que no tenía tiempo." }
    ]
  }
});

LEKTION('de', {
  tag: 50, niveau: "A2", thema: "Repaso intermedio",
  vokabeln: [
    { id: "v5001", de: "der Überblick",  es: "la visión general", wortart: "sustantivo", beispiel: "Ich habe den Überblick verloren.", beispielUe: "Perdí la visión general." },
    { id: "v5002", de: "zusammenfassen", es: "resumir",        wortart: "verbo separable", beispiel: "Fass das kurz zusammen.", beispielUe: "Resume eso brevemente." },
    { id: "v5003", de: "der Zusammenhang", es: "la relación",  wortart: "sustantivo", beispiel: "Ich sehe den Zusammenhang.", beispielUe: "Veo la relación." },
    { id: "v5004", de: "vertiefen",      es: "profundizar",    wortart: "verbo", beispiel: "Wir vertiefen das Thema.", beispielUe: "Profundizamos en el tema." },
    { id: "v5005", de: "das Beispiel",   es: "el ejemplo",     wortart: "sustantivo", beispiel: "Gib mir ein Beispiel.", beispielUe: "Dame un ejemplo." },
    { id: "v5006", de: "die Übung",      es: "el ejercicio",   wortart: "sustantivo", beispiel: "Übung macht den Meister.", beispielUe: "La práctica hace al maestro." },
    { id: "v5007", de: "der Zweifel",    es: "la duda",        wortart: "sustantivo", beispiel: "Ich habe keine Zweifel.", beispielUe: "No tengo dudas." },
    { id: "v5008", de: "klappen",        es: "funcionar",      wortart: "verbo", beispiel: "Das hat gut geklappt.", beispielUe: "Eso funcionó bien." },
    { id: "v5009", de: "der Aufwand",    es: "el esfuerzo",    wortart: "sustantivo", beispiel: "Der Aufwand lohnt sich.", beispielUe: "El esfuerzo vale la pena." },
    { id: "v5010", de: "sich lohnen",    es: "valer la pena",  wortart: "verbo reflexivo", beispiel: "Es lohnt sich wirklich.", beispielUe: "Realmente vale la pena." }
  ],
  saetze: [
    { id: "s5001", de: "Ich lerne seit fünfzig Tagen Deutsch.", es: "Aprendo alemán desde hace cincuenta días." },
    { id: "s5002", de: "Obwohl es schwer ist, macht es Spaß.", es: "Aunque es difícil, es divertido." },
    { id: "s5003", de: "Der Kurs, den ich mache, ist gut.",  es: "El curso que hago es bueno." },
    { id: "s5004", de: "Wenn ich mehr üben würde, wäre ich besser.", es: "Si practicara más, sería mejor." },
    { id: "s5005", de: "Es lohnt sich, jeden Tag zu lernen.", es: "Vale la pena estudiar todos los días." }
  ],
  grammatik: {
    id: "g50", titel: "Los cuatro casos: el sistema completo",
    erklaerung: `
      <p>Ya conoces los cuatro casos alemanes. Aquí están en una sola tabla — la única que
      conviene tener presente.</p>
      <table>
        <tr><th>Caso</th><th>Pregunta</th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Nominativo</td><td>wer/was?</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Akkusativ</td><td>wen/was?</td><td><em>den</em></td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Dativ</td><td>wem?</td><td><em>dem</em></td><td><em>der</em></td><td><em>dem</em></td><td><em>den</em>+n</td></tr>
        <tr><td>Genitiv</td><td>wessen?</td><td><em>des</em>+s</td><td><em>der</em></td><td><em>des</em>+s</td><td><em>der</em></td></tr>
      </table>
      <div class="merke"><strong>Cómo saber qué caso usar — tres preguntas en orden:</strong><br>
      1. ¿Hay una <strong>preposición</strong>? Ella manda. (FUGOD → acusativo,
      mit-nach-aus… → dativo, wo/wohin → según movimiento)<br>
      2. ¿El <strong>verbo</strong> pide un caso especial? (<em>helfen, danken, gefallen</em>
      → dativo)<br>
      3. Si no: ¿quién actúa → nominativo, a quién/qué → acusativo, a quién (indirecto)
      → dativo.</div>
      <p><strong>Lo que has aprendido en el A2:</strong></p>
      <table>
        <tr><td>declinación del adjetivo (3 sistemas)</td><td>Präteritum de sein/haben/modales</td></tr>
        <tr><td>oraciones con dass, ob, weil, obwohl</td><td>als o wenn en pasado</td></tr>
        <tr><td>oraciones de relativo</td><td>genitivo y sus preposiciones</td></tr>
        <tr><td>verbos con preposición fija</td><td>Konjunktiv II (cortesía e irrealidad)</td></tr>
        <tr><td>la voz pasiva en todos los tiempos</td><td>infinitivo con zu, um zu, ohne zu</td></tr>
        <tr><td>Plusquamperfekt y nachdem</td><td>estilo indirecto</td></tr>
      </table>
      <div class="merke"><strong>Lo que viene en el B1:</strong> más conectores, el
      Konjunktiv II en pasado, los participios como adjetivo y — sobre todo — la capacidad
      de decir lo mismo de varias maneras. La gramática nueva será menos; el trabajo estará
      en la precisión.</div>`,
    uebungen: [
      { id: "g5001", satz: "Ich helfe ___ Mann. (der)", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "helfen → dativo", ue: "Ayudo al hombre." },
      { id: "g5002", satz: "Ich sehe ___ Mann. (der)", loesung: "den", tipps: ["den", "dem", "der"], hinweis: "objeto directo", ue: "Veo al hombre." },
      { id: "g5003", satz: "Das ist das Auto ___ Mannes. (der)", loesung: "des", tipps: ["des", "dem", "den"], hinweis: "genitivo", ue: "Ese es el carro del hombre." },
      { id: "g5004", satz: "Der Kurs, ___ ich mache, ist gut.", loesung: "den", tipps: ["den", "der", "dem"], hinweis: "relativo, acusativo", ue: "El curso que hago es bueno." },
      { id: "g5005", satz: "Wenn ich mehr üben ___, wäre ich besser. (werden)", loesung: "würde", tipps: ["würde", "wurde", "werde"], hinweis: "condición irreal", ue: "Si practicara más sería mejor." }
    ]
  }
});
