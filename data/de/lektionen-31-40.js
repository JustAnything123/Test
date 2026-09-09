/* Día 31–40 · Nivel A2 · La declinación del adjetivo y las subordinadas */

LEKTION('de', {
  tag: 31, niveau: "A2", thema: "La oficina",
  vokabeln: [
    { id: "v3101", de: "die Besprechung", es: "la reunión",    wortart: "sustantivo", beispiel: "Die Besprechung dauert lange.", beispielUe: "La reunión dura mucho." },
    { id: "v3102", de: "der Bericht",    es: "el informe",     wortart: "sustantivo", beispiel: "Der Bericht ist fertig.", beispielUe: "El informe está listo." },
    { id: "v3103", de: "die Frist",      es: "el plazo",       wortart: "sustantivo", beispiel: "Die Frist läuft morgen ab.", beispielUe: "El plazo vence mañana." },
    { id: "v3104", de: "der Kollege",    es: "el colega",      wortart: "sustantivo", beispiel: "Der neue Kollege ist nett.", beispielUe: "El nuevo colega es amable." },
    { id: "v3105", de: "die Abteilung",  es: "el departamento", wortart: "sustantivo", beispiel: "Ich arbeite in dieser Abteilung.", beispielUe: "Trabajo en este departamento." },
    { id: "v3106", de: "die Unterlagen", es: "los documentos", wortart: "sustantivo", beispiel: "Bring die Unterlagen mit.", beispielUe: "Trae los documentos." },
    { id: "v3107", de: "erledigen",      es: "resolver, hacer", wortart: "verbo", beispiel: "Ich habe das erledigt.", beispielUe: "Ya lo hice." },
    { id: "v3108", de: "der Vorschlag",  es: "la propuesta",   wortart: "sustantivo", beispiel: "Das ist ein guter Vorschlag.", beispielUe: "Esa es una buena propuesta." },
    { id: "v3109", de: "zuständig",      es: "responsable",    wortart: "adjetivo", beispiel: "Wer ist dafür zuständig?", beispielUe: "¿Quién es responsable de eso?" },
    { id: "v3110", de: "die Besprechung leiten", es: "dirigir la reunión", wortart: "expresión", beispiel: "Sie leitet die Besprechung.", beispielUe: "Ella dirige la reunión." }
  ],
  saetze: [
    { id: "s3101", de: "Der neue Kollege sitzt neben mir.",  es: "El nuevo colega se sienta a mi lado." },
    { id: "s3102", de: "Ich lese den langen Bericht.",       es: "Leo el informe largo." },
    { id: "s3103", de: "Die wichtigen Unterlagen sind hier.", es: "Los documentos importantes están aquí." },
    { id: "s3104", de: "Mit dem alten Computer geht das nicht.", es: "Con la computadora vieja eso no funciona." },
    { id: "s3105", de: "Das ist die beste Lösung für das Problem.", es: "Esa es la mejor solución para el problema." }
  ],
  grammatik: {
    id: "g31", titel: "Adjetivos tras artículo determinado",
    erklaerung: `
      <p>En español el adjetivo cambia poco: <em>alto, alta, altos, altas</em>. En alemán
      cambia según <strong>caso, género y número</strong> — y según qué artículo lo
      precede. Este es el tema que más práctica necesita de todo el A2.</p>
      <div class="merke"><strong>La buena noticia:</strong> tras <em>der/die/das</em> solo
      hay <strong>dos terminaciones posibles</strong>: <em>-e</em> y <em>-en</em>. Y la
      mayoría de las casillas son <em>-en</em>.</div>
      <table>
        <tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Nominativo</td><td>der gut<em>e</em></td><td>die gut<em>e</em></td><td>das gut<em>e</em></td><td>die gut<em>en</em></td></tr>
        <tr><td>Acusativo</td><td>den gut<em>en</em></td><td>die gut<em>e</em></td><td>das gut<em>e</em></td><td>die gut<em>en</em></td></tr>
        <tr><td>Dativo</td><td>dem gut<em>en</em></td><td>der gut<em>en</em></td><td>dem gut<em>en</em></td><td>den gut<em>en</em></td></tr>
      </table>
      <div class="merke"><strong>La regla en una línea:</strong> las cinco casillas de
      arriba a la izquierda llevan <em>-e</em>; <strong>todo lo demás lleva
      <em>-en</em></strong>.<br>
      Dicho de otro modo: si el artículo ya te dice el caso claramente (den, dem, der en
      dativo), el adjetivo se relaja y pone <em>-en</em>.</div>
      <p><strong>Ejemplos con el mismo adjetivo:</strong></p>
      <ul>
        <li><em>D<strong>er</strong> neu<strong>e</strong> Kollege ist nett.</em> (nominativo)</li>
        <li><em>Ich kenne d<strong>en</strong> neu<strong>en</strong> Kollegen.</em> (acusativo)</li>
        <li><em>Ich spreche mit d<strong>em</strong> neu<strong>en</strong> Kollegen.</em> (dativo)</li>
      </ul>
      <p><strong>Lo mismo vale tras</strong> <em>dieser, jeder, welcher, alle</em> — todos
      los que se declinan como <em>der</em>.</p>
      <div class="merke"><strong>Consejo práctico:</strong> no intentes memorizar la tabla.
      Aprende la regla («-e arriba a la izquierda, -en el resto») y deja que la repetición
      haga el trabajo. En tres semanas te saldrá sin pensar.</div>`,
    uebungen: [
      { id: "g3101", satz: "Der neu___ Kollege ist nett.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "nominativo masculino", ue: "El nuevo colega es amable." },
      { id: "g3102", satz: "Ich lese den lang___ Bericht.", loesung: "en", tipps: ["en", "e", "er"], hinweis: "acusativo masculino", ue: "Leo el informe largo." },
      { id: "g3103", satz: "Die wichtig___ Unterlagen sind hier.", loesung: "en", tipps: ["en", "e", "es"], hinweis: "plural", ue: "Los documentos importantes están aquí." },
      { id: "g3104", satz: "Mit dem alt___ Computer geht das nicht.", loesung: "en", tipps: ["en", "e", "em"], hinweis: "dativo", ue: "Con la computadora vieja no funciona." },
      { id: "g3105", satz: "Das ist die best___ Lösung.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "nominativo femenino", ue: "Esa es la mejor solución." }
    ]
  }
});

LEKTION('de', {
  tag: 32, niveau: "A2", thema: "Comprar y elegir",
  vokabeln: [
    { id: "v3201", de: "das Angebot",    es: "la oferta",      wortart: "sustantivo", beispiel: "Das ist ein gutes Angebot.", beispielUe: "Esa es una buena oferta." },
    { id: "v3202", de: "die Qualität",   es: "la calidad",     wortart: "sustantivo", beispiel: "Die Qualität ist hoch.", beispielUe: "La calidad es alta." },
    { id: "v3203", de: "günstig",        es: "económico",      wortart: "adjetivo", beispiel: "Das ist ein günstiger Preis.", beispielUe: "Ese es un precio económico." },
    { id: "v3204", de: "die Auswahl",    es: "la selección",   wortart: "sustantivo", beispiel: "Die Auswahl ist groß.", beispielUe: "La selección es grande." },
    { id: "v3205", de: "empfehlen",      es: "recomendar",     wortart: "verbo", beispiel: "Was empfehlen Sie mir?", beispielUe: "¿Qué me recomienda?" },
    { id: "v3206", de: "die Marke",      es: "la marca",       wortart: "sustantivo", beispiel: "Welche Marke ist das?", beispielUe: "¿Qué marca es esa?" },
    { id: "v3207", de: "gebraucht",      es: "usado",          wortart: "adjetivo", beispiel: "Ich kaufe ein gebrauchtes Auto.", beispielUe: "Compro un carro usado." },
    { id: "v3208", de: "die Garantie",   es: "la garantía",    wortart: "sustantivo", beispiel: "Gibt es eine Garantie?", beispielUe: "¿Hay garantía?" },
    { id: "v3209", de: "die Rechnung",   es: "la factura",     wortart: "sustantivo", beispiel: "Die Rechnung, bitte.", beispielUe: "La cuenta, por favor." },
    { id: "v3210", de: "sich entscheiden", es: "decidirse",    wortart: "verbo reflexivo", beispiel: "Ich kann mich nicht entscheiden.", beispielUe: "No puedo decidirme." }
  ],
  saetze: [
    { id: "s3201", de: "Ich suche einen günstigen Laptop.", es: "Busco una laptop económica." },
    { id: "s3202", de: "Das ist ein sehr gutes Angebot.",   es: "Esa es una oferta muy buena." },
    { id: "s3203", de: "Wir haben eine große Auswahl.",     es: "Tenemos una gran selección." },
    { id: "s3204", de: "Mit einem neuen Computer wäre es leichter.", es: "Con una computadora nueva sería más fácil." },
    { id: "s3205", de: "Ich kaufe kein gebrauchtes Auto.",  es: "No compro un carro usado." }
  ],
  grammatik: {
    id: "g32", titel: "Adjetivos tras artículo indeterminado",
    erklaerung: `
      <p>Tras <em>ein/eine</em>, <em>kein</em> y los posesivos (<em>mein, dein…</em>) el
      adjetivo trabaja más. Razón: <em>ein</em> no siempre indica el género, así que el
      adjetivo tiene que hacerlo por él.</p>
      <table>
        <tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Nominativo</td><td>ein gut<em>er</em></td><td>eine gut<em>e</em></td><td>ein gut<em>es</em></td><td>meine gut<em>en</em></td></tr>
        <tr><td>Acusativo</td><td>einen gut<em>en</em></td><td>eine gut<em>e</em></td><td>ein gut<em>es</em></td><td>meine gut<em>en</em></td></tr>
        <tr><td>Dativo</td><td>einem gut<em>en</em></td><td>einer gut<em>en</em></td><td>einem gut<em>en</em></td><td>meinen gut<em>en</em></td></tr>
      </table>
      <div class="merke"><strong>Las tres casillas que hay que aprender de verdad:</strong><br>
      <em>ein gut<strong>er</strong> Mann</em> (masc. nom.)<br>
      <em>ein gut<strong>es</strong> Kind</em> (neutro nom. y acus.)<br>
      <em>eine gut<strong>e</strong> Frau</em> (fem. nom. y acus.)<br>
      Todo lo demás es <em>-en</em>. De nuevo: la mayoría es <em>-en</em>.</div>
      <p><strong>Compara los dos sistemas:</strong></p>
      <table>
        <tr><th>tras der/die/das</th><th>tras ein/eine</th></tr>
        <tr><td><em>der neu<strong>e</strong> Wagen</em></td><td><em>ein neu<strong>er</strong> Wagen</em></td></tr>
        <tr><td><em>das neu<strong>e</strong> Auto</em></td><td><em>ein neu<strong>es</strong> Auto</em></td></tr>
        <tr><td><em>die neu<strong>e</strong> Idee</em></td><td><em>eine neu<strong>e</strong> Idee</em></td></tr>
      </table>
      <div class="merke"><strong>El principio que explica todo:</strong> la terminación del
      artículo determinado (<em>d-<strong>er</strong></em>, <em>d-<strong>as</strong></em>)
      «salta» al adjetivo cuando el artículo indeterminado no la lleva.<br>
      d<strong>er</strong> Mann → ein gut<strong>er</strong> Mann<br>
      d<strong>as</strong> Kind → ein gut<strong>es</strong> Kind<br>
      Si entiendes esto, no necesitas la tabla.</div>
      <p><strong>Ojo:</strong> <em>kein</em> y los posesivos se declinan igual que
      <em>ein</em>, pero <strong>sí tienen plural</strong>:
      <em>mein<strong>e</strong> gut<strong>en</strong> Freunde</em>.</p>`,
    uebungen: [
      { id: "g3201", satz: "Das ist ein gut___ Angebot.", loesung: "es", tipps: ["es", "e", "er"], hinweis: "das Angebot → neutro", ue: "Esa es una buena oferta." },
      { id: "g3202", satz: "Ich suche einen günstig___ Laptop.", loesung: "en", tipps: ["en", "er", "es"], hinweis: "acusativo masculino", ue: "Busco una laptop económica." },
      { id: "g3203", satz: "Ein neu___ Kollege kommt morgen.", loesung: "er", tipps: ["er", "e", "en"], hinweis: "nominativo masculino", ue: "Un nuevo colega viene mañana." },
      { id: "g3204", satz: "Wir haben eine groß___ Auswahl.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "femenino acusativo", ue: "Tenemos una gran selección." },
      { id: "g3205", satz: "Mit einem neu___ Computer geht es.", loesung: "en", tipps: ["en", "em", "er"], hinweis: "dativo", ue: "Con una computadora nueva funciona." }
    ]
  }
});

LEKTION('de', {
  tag: 33, niveau: "A2", thema: "Comer bien",
  vokabeln: [
    { id: "v3301", de: "die Zutat",      es: "el ingrediente", wortart: "sustantivo", beispiel: "Wir brauchen frische Zutaten.", beispielUe: "Necesitamos ingredientes frescos." },
    { id: "v3302", de: "frisch",         es: "fresco",         wortart: "adjetivo", beispiel: "Frisches Brot schmeckt besser.", beispielUe: "El pan fresco sabe mejor." },
    { id: "v3303", de: "das Gemüse",     es: "la verdura",     wortart: "sustantivo", beispiel: "Ich esse viel Gemüse.", beispielUe: "Como mucha verdura." },
    { id: "v3304", de: "das Fleisch",    es: "la carne",       wortart: "sustantivo", beispiel: "Ich esse kein Fleisch.", beispielUe: "No como carne." },
    { id: "v3305", de: "das Rezept",     es: "la receta",      wortart: "sustantivo", beispiel: "Hast du das Rezept?", beispielUe: "¿Tienes la receta?" },
    { id: "v3306", de: "salzig",         es: "salado",         wortart: "adjetivo", beispiel: "Die Suppe ist zu salzig.", beispielUe: "La sopa está muy salada." },
    { id: "v3307", de: "süß",            es: "dulce",          wortart: "adjetivo", beispiel: "Der Kuchen ist sehr süß.", beispielUe: "El pastel está muy dulce." },
    { id: "v3308", de: "der Geschmack",  es: "el sabor",       wortart: "sustantivo", beispiel: "Der Geschmack ist gut.", beispielUe: "El sabor es bueno." },
    { id: "v3309", de: "backen",         es: "hornear",        wortart: "verbo", beispiel: "Ich backe einen Kuchen.", beispielUe: "Horneo un pastel." },
    { id: "v3310", de: "vegetarisch",    es: "vegetariano",    wortart: "adjetivo", beispiel: "Ich esse vegetarisch.", beispielUe: "Como vegetariano." }
  ],
  saetze: [
    { id: "s3301", de: "Ich trinke gern kalten Kaffee.",    es: "Me gusta tomar café frío." },
    { id: "s3302", de: "Frisches Brot schmeckt am besten.", es: "El pan fresco es el que mejor sabe." },
    { id: "s3303", de: "Wir kaufen deutsches Bier.",        es: "Compramos cerveza alemana." },
    { id: "s3304", de: "Mit frischem Gemüse schmeckt es besser.", es: "Con verdura fresca sabe mejor." },
    { id: "s3305", de: "Sie isst nur vegetarisches Essen.", es: "Ella solo come comida vegetariana." }
  ],
  grammatik: {
    id: "g33", titel: "Adjetivos sin artículo",
    erklaerung: `
      <p>El tercer y último caso: cuando no hay artículo, el adjetivo tiene que aportar
      <strong>toda</strong> la información gramatical.</p>
      <div class="merke"><strong>La regla más elegante del alemán:</strong> sin artículo,
      el adjetivo toma exactamente <strong>la terminación del artículo determinado</strong>.<br>
      d<strong>er</strong> Kaffee → kalt<strong>er</strong> Kaffee<br>
      d<strong>as</strong> Brot → frisch<strong>es</strong> Brot<br>
      d<strong>ie</strong> Milch → warm<strong>e</strong> Milch</div>
      <table>
        <tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Nominativo</td><td>gut<em>er</em> Wein</td><td>gut<em>e</em> Milch</td><td>gut<em>es</em> Brot</td><td>gut<em>e</em> Ideen</td></tr>
        <tr><td>Acusativo</td><td>gut<em>en</em> Wein</td><td>gut<em>e</em> Milch</td><td>gut<em>es</em> Brot</td><td>gut<em>e</em> Ideen</td></tr>
        <tr><td>Dativo</td><td>gut<em>em</em> Wein</td><td>gut<em>er</em> Milch</td><td>gut<em>em</em> Brot</td><td>gut<em>en</em> Ideen</td></tr>
      </table>
      <p><strong>¿Cuándo no hay artículo?</strong></p>
      <ul>
        <li>Sustantivos incontables: <em>Ich trinke <strong>kalten Kaffee</strong>.</em></li>
        <li>Plurales generales: <em>Hier gibt es <strong>frische Brötchen</strong>.</em></li>
        <li>Tras cantidades: <em>ein Glas <strong>kaltes Wasser</strong></em>,
            <em>viel <strong>frisches Obst</strong></em></li>
        <li>En listas y anuncios: <em>Gesucht: <strong>erfahrener Mitarbeiter</strong></em></li>
      </ul>
      <div class="merke"><strong>El resumen de los tres sistemas:</strong><br>
      tras <em>der</em> → el adjetivo se relaja (<em>-e</em> o <em>-en</em>)<br>
      tras <em>ein</em> → el adjetivo ayuda un poco (<em>-er</em>, <em>-es</em>, <em>-e</em>
      donde <em>ein</em> falla)<br>
      sin artículo → el adjetivo lo hace todo (copia la terminación de <em>der</em>)<br>
      <strong>Cuanto menos dice el artículo, más dice el adjetivo.</strong> Ese es todo el
      sistema.</div>`,
    uebungen: [
      { id: "g3301", satz: "Ich trinke kalt___ Kaffee.", loesung: "en", tipps: ["en", "er", "es"], hinweis: "der Kaffee, acusativo", ue: "Tomo café frío." },
      { id: "g3302", satz: "Frisch___ Brot schmeckt gut.", loesung: "es", tipps: ["es", "er", "e"], hinweis: "das Brot, nominativo", ue: "El pan fresco sabe bien." },
      { id: "g3303", satz: "Wir kaufen deutsch___ Bier.", loesung: "es", tipps: ["es", "en", "e"], hinweis: "das Bier, acusativo", ue: "Compramos cerveza alemana." },
      { id: "g3304", satz: "Mit frisch___ Gemüse schmeckt es besser.", loesung: "em", tipps: ["em", "en", "es"], hinweis: "das Gemüse, dativo", ue: "Con verdura fresca sabe mejor." },
      { id: "g3305", satz: "Hier gibt es gut___ Ideen.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "plural acusativo", ue: "Aquí hay buenas ideas." }
    ]
  }
});

LEKTION('de', {
  tag: 34, niveau: "A2", thema: "Contar el pasado",
  vokabeln: [
    { id: "v3401", de: "damals",         es: "en aquel entonces", wortart: "adverbio", beispiel: "Damals war alles anders.", beispielUe: "En aquel entonces todo era distinto." },
    { id: "v3402", de: "früher",         es: "antes",          wortart: "adverbio", beispiel: "Früher wohnte ich in Chile.", beispielUe: "Antes vivía en Chile." },
    { id: "v3403", de: "die Kindheit",   es: "la infancia",    wortart: "sustantivo", beispiel: "Meine Kindheit war schön.", beispielUe: "Mi infancia fue bonita." },
    { id: "v3404", de: "die Erinnerung", es: "el recuerdo",    wortart: "sustantivo", beispiel: "Ich habe gute Erinnerungen.", beispielUe: "Tengo buenos recuerdos." },
    { id: "v3405", de: "erzählen",       es: "contar",         wortart: "verbo", beispiel: "Erzähl mir davon!", beispielUe: "¡Cuéntame de eso!" },
    { id: "v3406", de: "das Ereignis",   es: "el acontecimiento", wortart: "sustantivo", beispiel: "Das war ein wichtiges Ereignis.", beispielUe: "Fue un acontecimiento importante." },
    { id: "v3407", de: "die Vergangenheit", es: "el pasado",   wortart: "sustantivo", beispiel: "Das gehört zur Vergangenheit.", beispielUe: "Eso pertenece al pasado." },
    { id: "v3408", de: "geboren",        es: "nacido",         wortart: "adjetivo", beispiel: "Ich bin 1990 geboren.", beispielUe: "Nací en 1990." },
    { id: "v3409", de: "aufwachsen",     es: "crecer",         wortart: "verbo separable", beispiel: "Ich bin in Lima aufgewachsen.", beispielUe: "Crecí en Lima." },
    { id: "v3410", de: "verändern",      es: "cambiar",        wortart: "verbo", beispiel: "Alles hat sich verändert.", beispielUe: "Todo ha cambiado." }
  ],
  saetze: [
    { id: "s3401", de: "Früher war alles anders.",           es: "Antes todo era distinto." },
    { id: "s3402", de: "Ich hatte damals kein Auto.",        es: "En aquel entonces no tenía carro." },
    { id: "s3403", de: "Wir konnten nicht kommen.",          es: "No pudimos venir." },
    { id: "s3404", de: "Als Kind wollte ich Arzt werden.",   es: "De niño quería ser médico." },
    { id: "s3405", de: "Es gab damals kein Internet.",       es: "En aquel entonces no había internet." }
  ],
  grammatik: {
    id: "g34", titel: "El Präteritum de sein, haben y los modales",
    erklaerung: `
      <p>El alemán tiene un segundo pasado, el <em>Präteritum</em>. Es la forma escrita —
      pero con unos pocos verbos se usa también al hablar, y es obligatorio saberlos.</p>
      <div class="merke"><strong>Estos seis van casi siempre en Präteritum</strong>, incluso
      hablando:<br>
      <em>sein, haben</em> y los modales <em>können, müssen, wollen, dürfen</em>.<br>
      Se dice <em>Ich <strong>war</strong> in Berlin</em>, no <em>Ich bin in Berlin
      gewesen</em>. Y <em>Ich <strong>hatte</strong> keine Zeit</em>, no <em>Ich habe keine
      Zeit gehabt</em>.</div>
      <table>
        <tr><th></th><th>sein</th><th>haben</th><th>können</th><th>müssen</th></tr>
        <tr><td>ich</td><td>war</td><td>hatte</td><td>konnte</td><td>musste</td></tr>
        <tr><td>du</td><td>warst</td><td>hattest</td><td>konntest</td><td>musstest</td></tr>
        <tr><td>er/sie/es</td><td>war</td><td>hatte</td><td>konnte</td><td>musste</td></tr>
        <tr><td>wir</td><td>waren</td><td>hatten</td><td>konnten</td><td>mussten</td></tr>
        <tr><td>ihr</td><td>wart</td><td>hattet</td><td>konntet</td><td>musstet</td></tr>
        <tr><td>sie/Sie</td><td>waren</td><td>hatten</td><td>konnten</td><td>mussten</td></tr>
      </table>
      <div class="merke"><strong>Fíjate:</strong> <em>ich</em> y <em>er</em> tienen otra vez
      la misma forma, sin terminación. Es una constante del alemán.</div>
      <p><strong>Los modales pierden el Umlaut</strong> en Präteritum:
      <em>können → konnte</em>, <em>müssen → musste</em>, <em>dürfen → durfte</em>,
      <em>mögen → mochte</em>. Solo <em>wollen → wollte</em> y <em>sollen → sollte</em>
      no cambian, porque no tenían Umlaut.</p>
      <p><strong>Y dos formas más que necesitas:</strong></p>
      <ul>
        <li><em>es gibt</em> → <em>es <strong>gab</strong></em> (había)</li>
        <li><em>werden</em> → <em>ich <strong>wurde</strong></em> (llegué a ser)</li>
      </ul>
      <div class="merke"><strong>Comparación con el español:</strong> el Präteritum cubre
      tanto el imperfecto como el indefinido. <em>Ich war</em> significa «yo era»
      <strong>y</strong> «yo fui». El alemán no hace esa distinción — una preocupación
      menos para ti.</div>`,
    uebungen: [
      { id: "g3401", satz: "Früher ___ alles anders. (sein)", loesung: "war", tipps: ["war", "ist", "bin"], hinweis: "es → Präteritum", ue: "Antes todo era distinto." },
      { id: "g3402", satz: "Ich ___ damals kein Auto. (haben)", loesung: "hatte", tipps: ["hatte", "habe", "hätte"], hinweis: "ich → ?", ue: "Antes no tenía carro." },
      { id: "g3403", satz: "Wir ___ nicht kommen. (können)", loesung: "konnten", tipps: ["konnten", "könnten", "konnte"], hinweis: "wir, sin Umlaut", ue: "No pudimos venir." },
      { id: "g3404", satz: "Als Kind ___ ich Arzt werden. (wollen)", loesung: "wollte", tipps: ["wollte", "will", "wollen"], hinweis: "ich → ?", ue: "De niño quería ser médico." },
      { id: "g3405", satz: "Damals ___ es kein Internet. (es gibt)", loesung: "gab", tipps: ["gab", "gibt", "gegeben"], hinweis: "forma especial", ue: "Entonces no había internet." }
    ]
  }
});

LEKTION('de', {
  tag: 35, niveau: "A2", thema: "Opiniones",
  vokabeln: [
    { id: "v3501", de: "die Meinung",    es: "la opinión",     wortart: "sustantivo", beispiel: "Was ist deine Meinung?", beispielUe: "¿Cuál es tu opinión?" },
    { id: "v3502", de: "glauben",        es: "creer",          wortart: "verbo", beispiel: "Ich glaube, dass es stimmt.", beispielUe: "Creo que es cierto." },
    { id: "v3503", de: "denken",         es: "pensar",         wortart: "verbo", beispiel: "Ich denke, du hast recht.", beispielUe: "Pienso que tienes razón." },
    { id: "v3504", de: "hoffen",         es: "esperar",        wortart: "verbo", beispiel: "Ich hoffe, dass du kommst.", beispielUe: "Espero que vengas." },
    { id: "v3505", de: "vermuten",       es: "suponer",        wortart: "verbo", beispiel: "Ich vermute, er kommt später.", beispielUe: "Supongo que viene más tarde." },
    { id: "v3506", de: "sicher",         es: "seguro",         wortart: "adjetivo", beispiel: "Ich bin ganz sicher.", beispielUe: "Estoy completamente seguro." },
    { id: "v3507", de: "recht haben",    es: "tener razón",    wortart: "expresión", beispiel: "Du hast recht.", beispielUe: "Tienes razón." },
    { id: "v3508", de: "zustimmen",      es: "estar de acuerdo", wortart: "verbo separable", beispiel: "Ich stimme dir zu.", beispielUe: "Estoy de acuerdo contigo." },
    { id: "v3509", de: "bezweifeln",     es: "dudar de",       wortart: "verbo", beispiel: "Das bezweifle ich.", beispielUe: "Eso lo dudo." },
    { id: "v3510", de: "die Ansicht",    es: "el punto de vista", wortart: "sustantivo", beispiel: "Meiner Ansicht nach ist das falsch.", beispielUe: "A mi parecer eso es falso." }
  ],
  saetze: [
    { id: "s3501", de: "Ich glaube, dass er recht hat.",     es: "Creo que él tiene razón." },
    { id: "s3502", de: "Es ist wichtig, dass wir pünktlich sind.", es: "Es importante que seamos puntuales." },
    { id: "s3503", de: "Ich hoffe, dass alles gut geht.",    es: "Espero que todo salga bien." },
    { id: "s3504", de: "Er sagt, dass er morgen kommt.",     es: "Él dice que viene mañana." },
    { id: "s3505", de: "Ich weiß, dass du viel arbeitest.",  es: "Sé que trabajas mucho." }
  ],
  grammatik: {
    id: "g35", titel: "Oraciones con dass",
    erklaerung: `
      <p><em>dass</em> corresponde a «que» y — como <em>weil</em> — manda el verbo al
      final de la subordinada.</p>
      <table>
        <tr><th>Frase suelta</th><th>Con dass</th></tr>
        <tr><td>Er <em>hat</em> recht.</td><td>Ich glaube, dass er recht <em>hat</em>.</td></tr>
        <tr><td>Wir <em>sind</em> pünktlich.</td><td>Es ist wichtig, dass wir pünktlich <em>sind</em>.</td></tr>
        <tr><td>Du <em>arbeitest</em> viel.</td><td>Ich weiß, dass du viel <em>arbeitest</em>.</td></tr>
      </table>
      <div class="merke"><strong>Gran ventaja frente al español:</strong> después de
      <em>dass</em> el verbo va siempre en <strong>indicativo</strong>. No existe el
      subjuntivo español.<br>
      <em>Espero que <strong>vengas</strong></em> (subjuntivo) →
      <em>Ich hoffe, dass du <strong>kommst</strong></em> (indicativo normal).<br>
      Uno de los pocos puntos donde el alemán es claramente más simple.</div>
      <p><strong>Verbos que suelen llevar dass:</strong> <em>glauben, denken, meinen,
      hoffen, wissen, sagen, finden, vermuten</em> y expresiones como <em>Es ist
      wichtig/schade/klar, dass…</em></p>
      <div class="merke"><strong>dass a menudo se puede omitir</strong> — pero entonces el
      verbo vuelve a la posición 2:<br>
      <em>Ich glaube, <strong>dass</strong> er recht <strong>hat</strong>.</em><br>
      <em>Ich glaube, er <strong>hat</strong> recht.</em><br>
      Las dos son correctas. La segunda es más habitual al hablar.</div>
      <p><strong>No confundir <em>dass</em> con <em>das</em>:</strong></p>
      <ul>
        <li><em>das</em> (una s) = el artículo neutro o el pronombre «eso»:
            <em><strong>Das</strong> Buch ist gut.</em> · <em><strong>Das</strong> weiß ich.</em></li>
        <li><em>dass</em> (dos s) = la conjunción «que»:
            <em>Ich weiß, <strong>dass</strong> du kommst.</em></li>
      </ul>
      <p><strong>La prueba:</strong> si puedes sustituirlo por <em>dieses</em> o
      <em>welches</em>, es <em>das</em>. Si no, es <em>dass</em>.</p>`,
    uebungen: [
      { id: "g3501", satz: "Ich glaube, dass er recht ___ (haben).", loesung: "hat", tipps: ["hat", "hat recht", "haben"], hinweis: "verbo al final", ue: "Creo que tiene razón." },
      { id: "g3502", satz: "Es ist wichtig, dass wir pünktlich ___ (sein).", loesung: "sind", tipps: ["sind", "sind pünktlich", "seien"], hinweis: "indicativo, al final", ue: "Es importante que seamos puntuales." },
      { id: "g3503", satz: "Ich hoffe, dass alles gut ___ (gehen).", loesung: "geht", tipps: ["geht", "gehe", "gehen"], hinweis: "indicativo, no subjuntivo", ue: "Espero que todo salga bien." },
      { id: "g3504", satz: "Ich weiß, ___ du viel arbeitest.", loesung: "dass", tipps: ["dass", "das", "was"], hinweis: "conjunción, dos s", ue: "Sé que trabajas mucho." },
      { id: "g3505", satz: "___ Buch ist sehr gut.", loesung: "Das", tipps: ["Das", "Dass", "Der"], hinweis: "artículo, una s", ue: "El libro es muy bueno." }
    ]
  }
});

LEKTION('de', {
  tag: 36, niveau: "A2", thema: "Cuando era niño",
  vokabeln: [
    { id: "v3601", de: "der Schüler",    es: "el alumno",      wortart: "sustantivo", beispiel: "Ich war ein guter Schüler.", beispielUe: "Era un buen alumno." },
    { id: "v3602", de: "das Fach",       es: "la materia",     wortart: "sustantivo", beispiel: "Mein Lieblingsfach war Mathe.", beispielUe: "Mi materia favorita era mate." },
    { id: "v3603", de: "die Klasse",     es: "el grupo, la clase", wortart: "sustantivo", beispiel: "Wir waren 30 in der Klasse.", beispielUe: "Éramos 30 en la clase." },
    { id: "v3604", de: "die Note",       es: "la calificación", wortart: "sustantivo", beispiel: "Ich hatte gute Noten.", beispielUe: "Tenía buenas calificaciones." },
    { id: "v3605", de: "die Pause",      es: "el recreo",      wortart: "sustantivo", beispiel: "In der Pause spielten wir.", beispielUe: "En el recreo jugábamos." },
    { id: "v3606", de: "streng",         es: "estricto",       wortart: "adjetivo", beispiel: "Der Lehrer war streng.", beispielUe: "El maestro era estricto." },
    { id: "v3607", de: "die Hausaufgabe", es: "la tarea",      wortart: "sustantivo", beispiel: "Ich mache meine Hausaufgaben.", beispielUe: "Hago mi tarea." },
    { id: "v3608", de: "bestehen",       es: "aprobar",        wortart: "verbo", beispiel: "Ich habe die Prüfung bestanden.", beispielUe: "Aprobé el examen." },
    { id: "v3609", de: "sich langweilen", es: "aburrirse",     wortart: "verbo reflexivo", beispiel: "Ich habe mich nie gelangweilt.", beispielUe: "Nunca me aburrí." },
    { id: "v3610", de: "der Abschluss",  es: "el título",      wortart: "sustantivo", beispiel: "Ich habe einen Abschluss.", beispielUe: "Tengo un título." }
  ],
  saetze: [
    { id: "s3601", de: "Als ich klein war, wohnte ich in Peru.", es: "Cuando era pequeño, vivía en Perú." },
    { id: "s3602", de: "Wenn ich Zeit hatte, ging ich schwimmen.", es: "Cuando tenía tiempo, iba a nadar." },
    { id: "s3603", de: "Als ich ankam, war niemand da.",     es: "Cuando llegué, no había nadie." },
    { id: "s3604", de: "Immer wenn es regnete, blieben wir zu Hause.", es: "Siempre que llovía, nos quedábamos en casa." },
    { id: "s3605", de: "Als ich die Prüfung bestand, war ich froh.", es: "Cuando aprobé el examen, estaba contento." }
  ],
  grammatik: {
    id: "g36", titel: "als o wenn en pasado",
    erklaerung: `
      <p>Los dos significan «cuando», pero no son intercambiables. La diferencia está en
      <strong>cuántas veces</strong> ocurrió algo.</p>
      <div class="merke"><strong>La regla:</strong><br>
      <em>als</em> = <strong>una sola vez</strong> en el pasado<br>
      <em>wenn</em> = <strong>varias veces</strong> (siempre que) o presente/futuro</div>
      <table>
        <tr><th>als — una vez, pasado</th><th>wenn — repetido o presente</th></tr>
        <tr><td><em>Als ich ankam, war niemand da.</em><br>Cuando llegué (una vez)…</td>
            <td><em>Wenn ich ankam, war niemand da.</em><br>Cuando llegaba (cada vez)…</td></tr>
        <tr><td><em>Als ich klein war…</em><br>(un periodo único de la vida)</td>
            <td><em>Wenn ich Zeit habe…</em><br>(cada vez que tengo tiempo)</td></tr>
      </table>
      <div class="merke"><strong>El truco infalible:</strong> ¿puedes añadir «siempre»?
      Entonces es <em>wenn</em>.<br>
      «(Siempre) que llovía, nos quedábamos» → <em>wenn</em><br>
      «Cuando nació mi hija» — no puede ser «siempre que nació» → <em>als</em></div>
      <p><strong>Ojo con un caso especial:</strong> <em>Als ich klein war</em> parece un
      periodo largo y repetido, pero se usa <em>als</em>. Razón: la infancia es
      <strong>un solo</strong> periodo en tu vida, no algo que se repita.</p>
      <p><strong>Los tres significados de wenn</strong> — por eso se confunde tanto:</p>
      <ul>
        <li>cuando (repetido, pasado): <em>Wenn ich Zeit hatte, ging ich schwimmen.</em></li>
        <li>cuando (presente/futuro): <em>Wenn ich Zeit habe, komme ich.</em></li>
        <li>si (condición): <em>Wenn du willst, helfe ich dir.</em></li>
      </ul>
      <p><em>als</em> tiene además otro uso, sin relación con el tiempo: «como» en el
      sentido de función — <em>Ich arbeite <strong>als</strong> Lehrer.</em> (Trabajo
      como maestro.) Y «que» en comparaciones: <em>größer <strong>als</strong> du</em>.</p>`,
    uebungen: [
      { id: "g3601", satz: "___ ich klein war, wohnte ich in Peru.", loesung: "Als", tipps: ["Als", "Wenn", "Wann"], hinweis: "un periodo único", ue: "Cuando era pequeño vivía en Perú." },
      { id: "g3602", satz: "Immer ___ es regnete, blieben wir daheim.", loesung: "wenn", tipps: ["wenn", "als", "wann"], hinweis: "repetido", ue: "Siempre que llovía nos quedábamos." },
      { id: "g3603", satz: "___ ich ankam, war niemand da.", loesung: "Als", tipps: ["Als", "Wenn", "Wann"], hinweis: "una vez", ue: "Cuando llegué no había nadie." },
      { id: "g3604", satz: "___ ich Zeit habe, komme ich vorbei.", loesung: "Wenn", tipps: ["Wenn", "Als", "Wann"], hinweis: "presente", ue: "Cuando tenga tiempo paso." },
      { id: "g3605", satz: "___ ich die Prüfung bestand, war ich froh.", loesung: "Als", tipps: ["Als", "Wenn", "Wann"], hinweis: "una vez, pasado", ue: "Cuando aprobé el examen estaba contento." }
    ]
  }
});

LEKTION('de', {
  tag: 37, niveau: "A2", thema: "Esperar y pensar en algo",
  vokabeln: [
    { id: "v3701", de: "warten auf",     es: "esperar a",      wortart: "verbo con preposición", beispiel: "Ich warte auf den Bus.", beispielUe: "Espero el autobús." },
    { id: "v3702", de: "denken an",      es: "pensar en",      wortart: "verbo con preposición", beispiel: "Ich denke an dich.", beispielUe: "Pienso en ti." },
    { id: "v3703", de: "sich freuen auf", es: "esperar con ganas", wortart: "verbo con preposición", beispiel: "Ich freue mich auf den Urlaub.", beispielUe: "Espero con ganas las vacaciones." },
    { id: "v3704", de: "sich freuen über", es: "alegrarse de", wortart: "verbo con preposición", beispiel: "Ich freue mich über das Geschenk.", beispielUe: "Me alegra el regalo." },
    { id: "v3705", de: "sprechen über",  es: "hablar de",      wortart: "verbo con preposición", beispiel: "Wir sprechen über die Arbeit.", beispielUe: "Hablamos del trabajo." },
    { id: "v3706", de: "sich interessieren für", es: "interesarse por", wortart: "verbo con preposición", beispiel: "Ich interessiere mich für Musik.", beispielUe: "Me intereso por la música." },
    { id: "v3707", de: "Angst haben vor", es: "tener miedo de", wortart: "expresión", beispiel: "Ich habe Angst vor Hunden.", beispielUe: "Tengo miedo a los perros." },
    { id: "v3708", de: "sich kümmern um", es: "ocuparse de",   wortart: "verbo con preposición", beispiel: "Ich kümmere mich um alles.", beispielUe: "Me ocupo de todo." },
    { id: "v3709", de: "bitten um",      es: "pedir",          wortart: "verbo con preposición", beispiel: "Ich bitte um Hilfe.", beispielUe: "Pido ayuda." },
    { id: "v3710", de: "sich ärgern über", es: "enojarse por", wortart: "verbo con preposición", beispiel: "Ich ärgere mich über den Lärm.", beispielUe: "Me enojo por el ruido." }
  ],
  saetze: [
    { id: "s3701", de: "Ich warte auf den Bus.",             es: "Espero el autobús." },
    { id: "s3702", de: "Worauf wartest du?",                 es: "¿Qué esperas?" },
    { id: "s3703", de: "Ich freue mich darauf.",             es: "Lo espero con ganas." },
    { id: "s3704", de: "An wen denkst du?",                  es: "¿En quién piensas?" },
    { id: "s3705", de: "Ich interessiere mich sehr dafür.",  es: "Me intereso mucho por eso." }
  ],
  grammatik: {
    id: "g37", titel: "Verbos con preposición fija",
    erklaerung: `
      <p>Muchos verbos alemanes exigen una preposición determinada — y casi nunca es la
      misma que en español. Hay que aprenderlos como una unidad, igual que aprendes el
      artículo con el sustantivo.</p>
      <table>
        <tr><th>Alemán</th><th>Español</th><th>Caso</th></tr>
        <tr><td><em>warten <strong>auf</strong></em></td><td>esperar <strong>a</strong></td><td>acusativo</td></tr>
        <tr><td><em>denken <strong>an</strong></em></td><td>pensar <strong>en</strong></td><td>acusativo</td></tr>
        <tr><td><em>sprechen <strong>über</strong></em></td><td>hablar <strong>de</strong></td><td>acusativo</td></tr>
        <tr><td><em>sich interessieren <strong>für</strong></em></td><td>interesarse <strong>por</strong></td><td>acusativo</td></tr>
        <tr><td><em>Angst haben <strong>vor</strong></em></td><td>tener miedo <strong>a</strong></td><td>dativo</td></tr>
        <tr><td><em>sich kümmern <strong>um</strong></em></td><td>ocuparse <strong>de</strong></td><td>acusativo</td></tr>
        <tr><td><em>bitten <strong>um</strong></em></td><td>pedir (algo)</td><td>acusativo</td></tr>
      </table>
      <div class="merke"><strong>Fíjate:</strong> «hablar <em>de</em>» es <em>sprechen
      <strong>über</strong></em> (sobre), no <s>sprechen von</s> en este sentido. Y
      «pensar <em>en</em>» es <em>denken <strong>an</strong></em>. Traducir la preposición
      del español es el error más frecuente.</div>
      <p><strong>Preguntar por ello — dos formas según sea persona o cosa:</strong></p>
      <table>
        <tr><th>Cosa: wo(r)- + preposición</th><th>Persona: preposición + interrogativo</th></tr>
        <tr><td><em><strong>Worauf</strong> wartest du?</em><br>¿Qué esperas?</td>
            <td><em><strong>Auf wen</strong> wartest du?</em><br>¿A quién esperas?</td></tr>
        <tr><td><em><strong>Woran</strong> denkst du?</em></td>
            <td><em><strong>An wen</strong> denkst du?</em></td></tr>
      </table>
      <p><strong>Y para referirse a algo ya mencionado: da(r)- + preposición</strong></p>
      <ul>
        <li><em>Ich freue mich <strong>darauf</strong>.</em> — Lo espero con ganas.</li>
        <li><em>Ich interessiere mich <strong>dafür</strong>.</em> — Me intereso por eso.</li>
        <li><em>Ich denke <strong>daran</strong>.</em> — Pienso en ello.</li>
      </ul>
      <div class="merke"><strong>La r se añade</strong> cuando la preposición empieza por
      vocal: <em>wo<strong>r</strong>auf, da<strong>r</strong>an, wo<strong>r</strong>über</em>.
      Sin vocal no hace falta: <em>womit, damit, wofür, dafür</em>.</div>`,
    uebungen: [
      { id: "g3701", satz: "Ich warte ___ den Bus.", loesung: "auf", tipps: ["auf", "für", "an"], hinweis: "warten + ?", ue: "Espero el autobús." },
      { id: "g3702", satz: "Ich denke oft ___ dich.", loesung: "an", tipps: ["an", "auf", "über"], hinweis: "denken + ?", ue: "Pienso a menudo en ti." },
      { id: "g3703", satz: "___ wartest du? (¿qué?)", loesung: "Worauf", tipps: ["Worauf", "Auf wen", "Wofür"], hinweis: "cosa → wo(r)-", ue: "¿Qué esperas?" },
      { id: "g3704", satz: "___ denkst du? (¿en quién?)", loesung: "An wen", tipps: ["An wen", "Woran", "Wen"], hinweis: "persona", ue: "¿En quién piensas?" },
      { id: "g3705", satz: "Ich interessiere mich sehr ___. (por eso)", loesung: "dafür", tipps: ["dafür", "darauf", "daran"], hinweis: "für → da + für", ue: "Me intereso mucho por eso." }
    ]
  }
});

LEKTION('de', {
  tag: 38, niveau: "A2", thema: "Deseos y cortesía",
  vokabeln: [
    { id: "v3801", de: "der Wunsch",     es: "el deseo",       wortart: "sustantivo", beispiel: "Was ist Ihr Wunsch?", beispielUe: "¿Cuál es su deseo?" },
    { id: "v3802", de: "höflich",        es: "cortés",         wortart: "adjetivo", beispiel: "Er ist immer höflich.", beispielUe: "Él siempre es cortés." },
    { id: "v3803", de: "bitten",         es: "pedir",          wortart: "verbo", beispiel: "Darf ich Sie um etwas bitten?", beispielUe: "¿Puedo pedirle algo?" },
    { id: "v3804", de: "der Gefallen",   es: "el favor",       wortart: "sustantivo", beispiel: "Tust du mir einen Gefallen?", beispielUe: "¿Me haces un favor?" },
    { id: "v3805", de: "gern haben",     es: "querer, apreciar", wortart: "expresión", beispiel: "Ich habe dich gern.", beispielUe: "Te quiero bien." },
    { id: "v3806", de: "die Bitte",      es: "la petición",    wortart: "sustantivo", beispiel: "Ich habe eine Bitte.", beispielUe: "Tengo una petición." },
    { id: "v3807", de: "stören",         es: "molestar",       wortart: "verbo", beispiel: "Störe ich?", beispielUe: "¿Molesto?" },
    { id: "v3808", de: "die Gelegenheit", es: "la oportunidad", wortart: "sustantivo", beispiel: "Bei Gelegenheit rufe ich an.", beispielUe: "En cuanto pueda llamo." },
    { id: "v3809", de: "entschuldigen",  es: "disculpar",      wortart: "verbo", beispiel: "Entschuldigen Sie bitte.", beispielUe: "Disculpe, por favor." },
    { id: "v3810", de: "danken",         es: "agradecer",      wortart: "verbo", beispiel: "Ich danke Ihnen sehr.", beispielUe: "Le agradezco mucho." }
  ],
  saetze: [
    { id: "s3801", de: "Ich hätte gern einen Kaffee.",       es: "Quisiera un café." },
    { id: "s3802", de: "Könnten Sie mir bitte helfen?",      es: "¿Podría ayudarme, por favor?" },
    { id: "s3803", de: "Wären Sie so nett?",                 es: "¿Sería tan amable?" },
    { id: "s3804", de: "Ich würde gern mitkommen.",          es: "Me gustaría acompañarlos." },
    { id: "s3805", de: "Das wäre wirklich toll.",            es: "Eso sería realmente genial." }
  ],
  grammatik: {
    id: "g38", titel: "Konjunktiv II para la cortesía",
    erklaerung: `
      <p>Igual que el español usa el condicional para ser cortés («¿podría…?»), el alemán
      tiene el <em>Konjunktiv II</em>. En A2 basta con conocer unas pocas formas —
      son las que se usan cada día.</p>
      <table>
        <tr><th>Verbo</th><th>Konjunktiv II</th><th>Ejemplo</th></tr>
        <tr><td>haben</td><td><em>hätte</em></td><td>Ich <em>hätte</em> gern einen Kaffee.</td></tr>
        <tr><td>sein</td><td><em>wäre</em></td><td>Das <em>wäre</em> toll.</td></tr>
        <tr><td>können</td><td><em>könnte</em></td><td><em>Könnten</em> Sie mir helfen?</td></tr>
        <tr><td>werden</td><td><em>würde</em></td><td>Ich <em>würde</em> gern mitkommen.</td></tr>
        <tr><td>mögen</td><td><em>möchte</em></td><td>Ich <em>möchte</em> zahlen.</td></tr>
      </table>
      <div class="merke"><strong>Cómo se reconocen:</strong> son las formas del Präteritum
      <strong>con Umlaut</strong>.<br>
      <em>hatte</em> → <em>h<strong>ä</strong>tte</em> · <em>war</em> →
      <em>w<strong>ä</strong>re</em> · <em>konnte</em> → <em>k<strong>ö</strong>nnte</em><br>
      Ese punto sobre la vocal marca la diferencia entre «tenía» y «tendría».</div>
      <p><strong>Conjugación de hätte y wäre</strong> — las dos más usadas:</p>
      <table>
        <tr><td>ich <em>hätte</em> / <em>wäre</em></td><td>wir <em>hätten</em> / <em>wären</em></td></tr>
        <tr><td>du <em>hättest</em> / <em>wärst</em></td><td>ihr <em>hättet</em> / <em>wärt</em></td></tr>
        <tr><td>er <em>hätte</em> / <em>wäre</em></td><td>sie <em>hätten</em> / <em>wären</em></td></tr>
      </table>
      <div class="merke"><strong>Para todos los demás verbos: <em>würde</em> + infinitivo.</strong><br>
      <em>Ich <strong>würde</strong> gern nach Berlin <strong>fahren</strong>.</em><br>
      Es exactamente como el español «iría» — solo que el alemán lo construye con dos
      palabras. No hace falta aprender formas especiales de cada verbo.</div>
      <p><strong>Para qué se usa:</strong></p>
      <ul>
        <li>pedir con cortesía: <em>Könnten Sie…? Würden Sie…?</em></li>
        <li>expresar deseos: <em>Ich hätte gern… / Ich würde gern…</em></li>
        <li>dar consejos: <em>An deiner Stelle würde ich…</em></li>
        <li>hablar de lo irreal: <em>Wenn ich Zeit hätte, käme ich.</em></li>
      </ul>`,
    uebungen: [
      { id: "g3801", satz: "Ich ___ gern einen Kaffee. (haben)", loesung: "hätte", tipps: ["hätte", "hatte", "habe"], hinweis: "con Umlaut", ue: "Quisiera un café." },
      { id: "g3802", satz: "___ Sie mir bitte helfen? (können)", loesung: "Könnten", tipps: ["Könnten", "Konnten", "Können"], hinweis: "cortesía", ue: "¿Podría ayudarme?" },
      { id: "g3803", satz: "Das ___ wirklich toll. (sein)", loesung: "wäre", tipps: ["wäre", "war", "ist"], hinweis: "sería", ue: "Eso sería genial." },
      { id: "g3804", satz: "Ich ___ gern mitkommen. (werden)", loesung: "würde", tipps: ["würde", "wurde", "werde"], hinweis: "würde + infinitivo", ue: "Me gustaría acompañarlos." },
      { id: "g3805", satz: "___ Sie so nett? (sein)", loesung: "Wären", tipps: ["Wären", "Waren", "Sind"], hinweis: "muy cortés", ue: "¿Sería tan amable?" }
    ]
  }
});

LEKTION('de', {
  tag: 39, niveau: "A2", thema: "Cómo se hace",
  vokabeln: [
    { id: "v3901", de: "herstellen",     es: "fabricar",       wortart: "verbo separable", beispiel: "Hier werden Autos hergestellt.", beispielUe: "Aquí se fabrican carros." },
    { id: "v3902", de: "bauen",          es: "construir",      wortart: "verbo", beispiel: "Das Haus wird gebaut.", beispielUe: "La casa se está construyendo." },
    { id: "v3903", de: "reparieren",     es: "reparar",        wortart: "verbo", beispiel: "Das Auto wird repariert.", beispielUe: "El carro se está reparando." },
    { id: "v3904", de: "verkaufen",      es: "vender",         wortart: "verbo", beispiel: "Hier werden Blumen verkauft.", beispielUe: "Aquí se venden flores." },
    { id: "v3905", de: "die Fabrik",     es: "la fábrica",     wortart: "sustantivo", beispiel: "Die Fabrik ist groß.", beispielUe: "La fábrica es grande." },
    { id: "v3906", de: "das Material",   es: "el material",    wortart: "sustantivo", beispiel: "Das Material ist teuer.", beispielUe: "El material es caro." },
    { id: "v3907", de: "die Maschine",   es: "la máquina",     wortart: "sustantivo", beispiel: "Die Maschine funktioniert nicht.", beispielUe: "La máquina no funciona." },
    { id: "v3908", de: "benutzen",       es: "usar",           wortart: "verbo", beispiel: "Das wird oft benutzt.", beispielUe: "Eso se usa mucho." },
    { id: "v3909", de: "der Vorgang",    es: "el proceso",     wortart: "sustantivo", beispiel: "Der Vorgang dauert lange.", beispielUe: "El proceso dura mucho." },
    { id: "v3910", de: "prüfen",         es: "revisar",        wortart: "verbo", beispiel: "Alles wird geprüft.", beispielUe: "Todo se revisa." }
  ],
  saetze: [
    { id: "s3901", de: "Hier werden Autos hergestellt.",     es: "Aquí se fabrican carros." },
    { id: "s3902", de: "Das Haus wird gerade gebaut.",       es: "La casa se está construyendo." },
    { id: "s3903", de: "Der Brief wurde gestern geschrieben.", es: "La carta fue escrita ayer." },
    { id: "s3904", de: "Die Rechnung muss heute bezahlt werden.", es: "La cuenta tiene que pagarse hoy." },
    { id: "s3905", de: "Das Formular wird von mir ausgefüllt.", es: "El formulario es llenado por mí." }
  ],
  grammatik: {
    id: "g39", titel: "La voz pasiva",
    erklaerung: `
      <p>El alemán usa la pasiva <strong>mucho más</strong> que el español, sobre todo en
      textos técnicos, instrucciones y noticias. Donde nosotros decimos «se fabrica», el
      alemán suele decir «es fabricado».</p>
      <div class="merke"><strong>Construcción:</strong> <em>werden</em> conjugado +
      participio al final.<br>
      <em>Hier <strong>werden</strong> Autos <strong>hergestellt</strong>.</em></div>
      <p><strong>Es el mismo paréntesis</strong> que ya conoces del Perfekt y los modales:
      verbo conjugado en posición 2, la otra parte al final.</p>
      <table>
        <tr><th>Tiempo</th><th>Forma</th><th>Ejemplo</th></tr>
        <tr><td>Presente</td><td><em>wird</em> + participio</td><td>Das Haus <em>wird gebaut</em>.</td></tr>
        <tr><td>Präteritum</td><td><em>wurde</em> + participio</td><td>Das Haus <em>wurde gebaut</em>.</td></tr>
        <tr><td>Perfekt</td><td><em>ist</em> + part. + <em>worden</em></td><td>Das Haus <em>ist gebaut worden</em>.</td></tr>
        <tr><td>con modal</td><td>modal + part. + <em>werden</em></td><td>Das <em>muss bezahlt werden</em>.</td></tr>
      </table>
      <div class="merke"><strong>Ojo con el Perfekt de la pasiva:</strong> el participio de
      <em>werden</em> es <em>geworden</em> normalmente, pero en la pasiva se convierte en
      <em>worden</em>, sin ge-.<br>
      <em>Das Haus ist gebaut <strong>worden</strong>.</em></div>
      <p><strong>Quién lo hace</strong> — se indica con <em>von</em> + dativo, aunque a
      menudo se omite:</p>
      <ul>
        <li><em>Das Formular wird <strong>von mir</strong> ausgefüllt.</em></li>
        <li><em>Der Brief wurde <strong>von der Sekretärin</strong> geschrieben.</em></li>
      </ul>
      <div class="merke"><strong>Diferencia importante con el español:</strong> el español
      prefiere «se + verbo» («aquí se venden flores»). El alemán tiene esa opción
      (<em>man verkauft hier Blumen</em>), pero suena menos formal. En textos escritos
      domina la pasiva con <em>werden</em>.</div>
      <p><strong>No confundir</strong> con <em>sein</em> + participio, que describe un
      <strong>estado</strong>, no un proceso:</p>
      <ul>
        <li><em>Die Tür <strong>wird</strong> geschlossen.</em> — La puerta se está cerrando.</li>
        <li><em>Die Tür <strong>ist</strong> geschlossen.</em> — La puerta está cerrada.</li>
      </ul>`,
    uebungen: [
      { id: "g3901", satz: "Hier ___ Autos hergestellt. (werden)", loesung: "werden", tipps: ["werden", "wird", "sind"], hinweis: "Autos = plural", ue: "Aquí se fabrican carros." },
      { id: "g3902", satz: "Das Haus ___ gerade gebaut. (werden)", loesung: "wird", tipps: ["wird", "werden", "ist"], hinweis: "das Haus = singular", ue: "La casa se está construyendo." },
      { id: "g3903", satz: "Der Brief ___ gestern geschrieben. (werden, Präteritum)", loesung: "wurde", tipps: ["wurde", "wird", "worden"], hinweis: "pasado", ue: "La carta fue escrita ayer." },
      { id: "g3904", satz: "Die Rechnung muss heute bezahlt ___.", loesung: "werden", tipps: ["werden", "wird", "worden"], hinweis: "con modal → infinitivo", ue: "La cuenta debe pagarse hoy." },
      { id: "g3905", satz: "Das Haus ist gebaut ___. (Perfekt Passiv)", loesung: "worden", tipps: ["worden", "geworden", "werden"], hinweis: "sin ge-", ue: "La casa ha sido construida." }
    ]
  }
});

LEKTION('de', {
  tag: 40, niveau: "A2", thema: "Planes e intenciones",
  vokabeln: [
    { id: "v4001", de: "vorhaben",       es: "planear",        wortart: "verbo separable", beispiel: "Was hast du heute vor?", beispielUe: "¿Qué planeas hoy?" },
    { id: "v4002", de: "beschließen",    es: "decidir",        wortart: "verbo", beispiel: "Wir haben beschlossen zu gehen.", beispielUe: "Decidimos irnos." },
    { id: "v4003", de: "versuchen",      es: "intentar",       wortart: "verbo", beispiel: "Ich versuche zu verstehen.", beispielUe: "Intento entender." },
    { id: "v4004", de: "vergessen",      es: "olvidar",        wortart: "verbo", beispiel: "Vergiss nicht anzurufen!", beispielUe: "¡No olvides llamar!" },
    { id: "v4005", de: "aufhören",       es: "dejar de",       wortart: "verbo separable", beispiel: "Ich höre auf zu rauchen.", beispielUe: "Dejo de fumar." },
    { id: "v4006", de: "anfangen",       es: "empezar a",      wortart: "verbo separable", beispiel: "Ich fange an zu lernen.", beispielUe: "Empiezo a aprender." },
    { id: "v4007", de: "die Absicht",    es: "la intención",   wortart: "sustantivo", beispiel: "Das war nicht meine Absicht.", beispielUe: "Esa no era mi intención." },
    { id: "v4008", de: "sich vornehmen", es: "proponerse",     wortart: "verbo reflexivo", beispiel: "Ich habe mir das vorgenommen.", beispielUe: "Me lo propuse." },
    { id: "v4009", de: "der Plan",       es: "el plan",        wortart: "sustantivo", beispiel: "Der Plan funktioniert.", beispielUe: "El plan funciona." },
    { id: "v4010", de: "erlauben",       es: "permitir",       wortart: "verbo", beispiel: "Erlaubst du mir zu gehen?", beispielUe: "¿Me permites irme?" }
  ],
  saetze: [
    { id: "s4001", de: "Ich habe vor, Deutsch zu lernen.",   es: "Tengo previsto aprender alemán." },
    { id: "s4002", de: "Es ist wichtig, jeden Tag zu üben.", es: "Es importante practicar todos los días." },
    { id: "s4003", de: "Ich versuche, pünktlich zu sein.",   es: "Intento ser puntual." },
    { id: "s4004", de: "Vergiss nicht, mich anzurufen!",     es: "¡No olvides llamarme!" },
    { id: "s4005", de: "Ich habe keine Zeit, ins Kino zu gehen.", es: "No tengo tiempo de ir al cine." }
  ],
  grammatik: {
    id: "g40", titel: "Infinitivo con zu",
    erklaerung: `
      <p>Cuando dos verbos se encuentran, el segundo suele llevar <em>zu</em> — igual que
      el inglés <em>to</em>. El español no pone nada («intento entender») o pone
      <em>de/a/que</em> («dejo <strong>de</strong> fumar»).</p>
      <div class="merke"><strong>Estructura:</strong> el grupo con <em>zu</em> va al
      <strong>final</strong> de la frase, y el infinitivo cierra.<br>
      <em>Ich versuche, pünktlich <strong>zu sein</strong>.</em><br>
      <em>Es ist wichtig, jeden Tag <strong>zu üben</strong>.</em></div>
      <p><strong>¿Cuándo se pone zu y cuándo no?</strong></p>
      <table>
        <tr><th>SIN zu</th><th>CON zu</th></tr>
        <tr><td>verbos modales:<br><em>Ich muss arbeiten.</em></td>
            <td>casi todos los demás:<br><em>Ich versuche zu arbeiten.</em></td></tr>
        <tr><td><em>werden, lassen, sehen, hören</em>:<br><em>Ich höre ihn singen.</em></td>
            <td>expresiones con adjetivo:<br><em>Es ist gut zu wissen.</em></td></tr>
      </table>
      <div class="merke"><strong>La regla práctica:</strong> tras un verbo modal
      <strong>nunca</strong> hay <em>zu</em>. En casi todos los demás casos, sí.</div>
      <p><strong>Con verbos separables, el zu va EN MEDIO:</strong></p>
      <ul>
        <li>anrufen → <em>an<strong>zu</strong>rufen</em>:
            <em>Vergiss nicht, mich an<strong>zu</strong>rufen.</em></li>
        <li>aufstehen → <em>auf<strong>zu</strong>stehen</em></li>
        <li>einkaufen → <em>ein<strong>zu</strong>kaufen</em></li>
      </ul>
      <p>Se escribe todo junto, en una sola palabra. Es una de las cosas más llamativas del
      alemán escrito.</p>
      <p><strong>Verbos que suelen llevar zu:</strong> <em>versuchen, vergessen, anfangen,
      aufhören, beschließen, hoffen, erlauben, verbieten, sich freuen, Zeit haben,
      Lust haben, vorhaben</em>.</p>
      <div class="merke"><strong>La coma:</strong> se pone antes del grupo con <em>zu</em>
      cuando este tiene más elementos. Con un solo infinitivo no hace falta:<br>
      <em>Ich versuche zu schlafen.</em> (sin coma)<br>
      <em>Ich versuche, heute früh zu schlafen.</em> (con coma)</div>`,
    uebungen: [
      { id: "g4001", satz: "Ich versuche, pünktlich ___ sein.", loesung: "zu", tipps: ["zu", "-", "für"], hinweis: "versuchen → con zu", ue: "Intento ser puntual." },
      { id: "g4002", satz: "Ich muss heute ___ arbeiten.", loesung: "", tipps: ["", "zu", "für"], hinweis: "modal → sin zu", ue: "Hoy tengo que trabajar." },
      { id: "g4003", satz: "Vergiss nicht, mich an___rufen!", loesung: "zu", tipps: ["zu", "-", "ge"], hinweis: "separable → zu en medio", ue: "¡No olvides llamarme!" },
      { id: "g4004", satz: "Es ist wichtig, jeden Tag ___ üben.", loesung: "zu", tipps: ["zu", "-", "für"], hinweis: "expresión con adjetivo", ue: "Es importante practicar cada día." },
      { id: "g4005", satz: "Ich habe keine Zeit, ins Kino ___ gehen.", loesung: "zu", tipps: ["zu", "-", "für"], hinweis: "Zeit haben → con zu", ue: "No tengo tiempo de ir al cine." }
    ]
  }
});
