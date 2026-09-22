/* Ruta temática «Alemán en el trabajo» · Día 31–37 · Vocabulario técnico de cocina
   Aquí ya no aprendes la palabra general («das Messer»), sino la familia completa:
   qué cuchillo, qué olla, qué corte, qué pieza de carne. Es el vocabulario con el
   que de verdad se habla en una cocina profesional. */

LEKTION('de-beruf', {
  tag: 31, niveau: "B1", thema: "Cuchillos y herramientas de corte",
  vokabeln: [
    { id: "bv3101", de: "das Kochmesser",     es: "el cuchillo de chef",     wortart: "sustantivo", beispiel: "Das Kochmesser ist das wichtigste Messer.", beispielUe: "El cuchillo de chef es el más importante." },
    { id: "bv3102", de: "das Schälmesser",    es: "la puntilla",             wortart: "sustantivo", beispiel: "Nimm das Schälmesser für die Kartoffeln.", beispielUe: "Toma la puntilla para las papas." },
    { id: "bv3103", de: "das Brotmesser",     es: "el cuchillo de pan",      wortart: "sustantivo", beispiel: "Das Brotmesser hat einen Wellenschliff.", beispielUe: "El cuchillo de pan tiene filo de sierra." },
    { id: "bv3104", de: "das Filetiermesser", es: "el cuchillo fileteador",  wortart: "sustantivo", beispiel: "Das Filetiermesser ist lang und biegsam.", beispielUe: "El fileteador es largo y flexible." },
    { id: "bv3105", de: "das Ausbeinmesser",  es: "el cuchillo deshuesador", wortart: "sustantivo", beispiel: "Das Ausbeinmesser ist schmal und fest.", beispielUe: "El deshuesador es estrecho y firme." },
    { id: "bv3106", de: "das Santokumesser",  es: "el cuchillo santoku",     wortart: "sustantivo", beispiel: "Das Santokumesser kommt aus Japan.", beispielUe: "El santoku viene de Japón." },
    { id: "bv3107", de: "der Wetzstahl",      es: "la chaira",               wortart: "sustantivo", beispiel: "Zieh das Messer über den Wetzstahl.", beispielUe: "Pasa el cuchillo por la chaira." },
    { id: "bv3108", de: "der Sparschäler",    es: "el pelador",              wortart: "sustantivo", beispiel: "Der Sparschäler geht schneller.", beispielUe: "El pelador va más rápido." },
    { id: "bv3109", de: "das Wiegemesser",    es: "la media luna",           wortart: "sustantivo", beispiel: "Mit dem Wiegemesser hackst du die Kräuter.", beispielUe: "Con la media luna picas las hierbas." },
    { id: "bv3110", de: "die Klinge",         es: "la hoja",                 wortart: "sustantivo", beispiel: "Die Klinge ist stumpf.", beispielUe: "La hoja está sin filo." }
  ],
  saetze: [
    { id: "bs3101", de: "Welches Messer nehme ich für den Fisch?", es: "¿Qué cuchillo tomo para el pescado?" },
    { id: "bs3102", de: "Nimm bitte das Brotmesser, nicht das Kochmesser.", es: "Toma el cuchillo de pan, no el de chef." },
    { id: "bs3103", de: "Mit dem Filetiermesser löst du den Fisch von der Gräte.", es: "Con el fileteador separas el pescado de la espina." },
    { id: "bs3104", de: "Ein stumpfes Messer ist gefährlicher als ein scharfes.", es: "Un cuchillo sin filo es más peligroso que uno afilado." },
    { id: "bs3105", de: "Leg das Messer bitte nie ins Spülbecken.", es: "Por favor, nunca dejes el cuchillo en el fregadero." }
  ],
  grammatik: {
    id: "bg31", titel: "Recursos: cómo se construye una palabra técnica",
    erklaerung: `
      <p>Este es el día más rentable de toda la ruta. El alemán casi no inventa palabras
      nuevas: las <strong>pega</strong>. Si entiendes la regla, dejas de memorizar cien
      palabras y entiendes mil.</p>
      <table>
        <tr><th>Para qué</th><th>+ Cosa</th><th>Palabra técnica</th></tr>
        <tr><td>Brot (pan)</td><td>Messer</td><td><strong>das Brotmesser</strong></td></tr>
        <tr><td>Fleisch (carne)</td><td>Messer</td><td><strong>das Fleischmesser</strong></td></tr>
        <tr><td>Fisch (pescado)</td><td>Messer</td><td><strong>das Fischmesser</strong></td></tr>
        <tr><td>Suppe (sopa)</td><td>Teller</td><td><strong>der Suppenteller</strong></td></tr>
        <tr><td>Salat (ensalada)</td><td>Teller</td><td><strong>der Salatteller</strong></td></tr>
      </table>
      <div class="merke"><strong>La regla de oro:</strong> la palabra importante va
      <strong>al final</strong>, y esa última palabra decide el artículo.
      <em>das</em> Messer → <em>das</em> Fleischmesser. <em>der</em> Teller →
      <em>der</em> Suppenteller. Lo de delante solo dice «¿para qué?».</div>
      <p>A veces aparece una letra de unión entre las dos partes, casi siempre
      <strong>-n</strong> o <strong>-s</strong>. No cambia nada del significado, solo
      hace la palabra más fácil de pronunciar:</p>
      <ul>
        <li>Suppe + <strong>n</strong> + Teller → der Suppe<strong>n</strong>teller</li>
        <li>Arbeit + <strong>s</strong> + Fläche → die Arbeit<strong>s</strong>fläche</li>
        <li>Salat + Teller → der Salatteller <em>(sin letra de unión)</em></li>
      </ul>
      <p>Cuando lo de delante es un <strong>verbo</strong>, se usa solo la raíz, sin la
      terminación <em>-en</em>: filetier<strong>en</strong> + Messer → das
      <strong>Filetier</strong>messer. Igual: Brat<em>en</em> → die <strong>Brat</strong>pfanne.</p>`,
    uebungen: [
      { id: "bg3101", satz: "Ein Messer für Brot ist das ___.", loesung: "Brotmesser", tipps: ["Brotmesser", "Messerbrot", "Brotesmesser"], hinweis: "lo importante va al final", ue: "Un cuchillo para pan es das Brotmesser." },
      { id: "bg3102", satz: "Es heißt ___ Fleischmesser, denn es heißt das Messer.", loesung: "das", tipps: ["das", "der", "die"], hinweis: "el artículo lo da la última palabra", ue: "Se dice das Fleischmesser, porque es das Messer." },
      { id: "bg3103", satz: "Ein Teller für Suppe ist der ___.", loesung: "Suppenteller", tipps: ["Suppenteller", "Suppeteller", "Tellersuppe"], hinweis: "Suppe + n + Teller", ue: "Un plato para sopa es der Suppenteller." },
      { id: "bg3104", satz: "Ein Messer zum Filetieren ist das ___.", loesung: "Filetiermesser", tipps: ["Filetiermesser", "Filetierenmesser", "Messerfiletier"], hinweis: "raíz del verbo, sin -en", ue: "Un cuchillo para filetear es das Filetiermesser." },
      { id: "bg3105", satz: "Bei zusammengesetzten Wörtern steht das wichtigste Wort ___.", loesung: "hinten", tipps: ["hinten", "vorne", "in der Mitte"], hinweis: "el núcleo va al final", ue: "En las palabras compuestas, la palabra principal va al final." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 32, niveau: "B1", thema: "Ollas, sartenes y aparatos de cocina grande",
  vokabeln: [
    { id: "bv3201", de: "der Kochtopf",       es: "la olla",                 wortart: "sustantivo", beispiel: "Der Kochtopf ist zu klein.", beispielUe: "La olla es demasiado pequeña." },
    { id: "bv3202", de: "die Bratpfanne",     es: "la sartén",               wortart: "sustantivo", beispiel: "Die Bratpfanne ist beschichtet.", beispielUe: "La sartén es antiadherente." },
    { id: "bv3203", de: "der Bräter",         es: "la rustidera",            wortart: "sustantivo", beispiel: "Der Bräter kommt in den Backofen.", beispielUe: "La rustidera va al horno." },
    { id: "bv3204", de: "die Kasserolle",     es: "el cazo",                 wortart: "sustantivo", beispiel: "In der Kasserolle kocht die Soße.", beispielUe: "En el cazo hierve la salsa." },
    { id: "bv3205", de: "die Sauteuse",       es: "la sartén honda",         wortart: "sustantivo", beispiel: "Nimm die Sauteuse für die Soße.", beispielUe: "Toma la sartén honda para la salsa." },
    { id: "bv3206", de: "der Wok",            es: "el wok",                  wortart: "sustantivo", beispiel: "Im Wok geht alles sehr schnell.", beispielUe: "En el wok todo va muy rápido." },
    { id: "bv3207", de: "der Schnellkochtopf", es: "la olla a presión",      wortart: "sustantivo", beispiel: "Der Schnellkochtopf spart Zeit.", beispielUe: "La olla a presión ahorra tiempo." },
    { id: "bv3208", de: "der Salamander",     es: "la salamandra",           wortart: "sustantivo", beispiel: "Unter dem Salamander wird überbacken.", beispielUe: "Bajo la salamandra se gratina." },
    { id: "bv3209", de: "die Kippbratpfanne", es: "la sartén basculante",    wortart: "sustantivo", beispiel: "Die Kippbratpfanne fasst zwanzig Portionen.", beispielUe: "La sartén basculante lleva veinte porciones." },
    { id: "bv3210", de: "der Kombidämpfer",   es: "el horno mixto",          wortart: "sustantivo", beispiel: "Der Kombidämpfer läuft mit Dampf.", beispielUe: "El horno mixto trabaja con vapor." }
  ],
  saetze: [
    { id: "bs3201", de: "Stell den Bräter bitte in den Backofen.", es: "Pon la rustidera en el horno, por favor." },
    { id: "bs3202", de: "Der Kombidämpfer läuft auf hundertsechzig Grad.", es: "El horno mixto está a ciento sesenta grados." },
    { id: "bs3203", de: "Unter dem Salamander überbacken wir das Gratin.", es: "Bajo la salamandra gratinamos el gratén." },
    { id: "bs3204", de: "In der Kippbratpfanne braten wir zwanzig Portionen.", es: "En la sartén basculante freímos veinte porciones." },
    { id: "bs3205", de: "Der Topf steht schon auf dem Herd.", es: "La olla ya está en la estufa." }
  ],
  grammatik: {
    id: "bg32", titel: "Recursos: decir dónde poner algo y dónde está",
    erklaerung: `
      <p>En la cocina dices cien veces al día dónde va algo. El alemán distingue de forma
      muy estricta entre <strong>movimiento</strong> y <strong>lugar</strong>, y lo marca
      cambiando el caso después de la preposición.</p>
      <table>
        <tr><th>Pregunta</th><th>Caso</th><th>Ejemplo</th></tr>
        <tr><td><strong>Wohin?</strong> (¿adónde?)</td><td>Akkusativ</td><td>Stell den Topf auf <strong>den</strong> Herd.</td></tr>
        <tr><td><strong>Wo?</strong> (¿dónde?)</td><td>Dativ</td><td>Der Topf steht auf <strong>dem</strong> Herd.</td></tr>
      </table>
      <div class="merke">Truco seguro: si hay <strong>movimiento</strong> hacia un sitio,
      Akkusativ. Si algo simplemente <strong>está</strong> en un sitio, Dativ.
      Las preposiciones que funcionan así son: in, auf, an, unter, über, vor, hinter,
      neben, zwischen.</div>
      <p>Los verbos vienen en pareja y te avisan del caso antes incluso de la preposición:</p>
      <ul>
        <li><strong>stellen</strong> (poner de pie) → Akkusativ · <strong>stehen</strong> (estar de pie) → Dativ</li>
        <li><strong>legen</strong> (acostar) → Akkusativ · <strong>liegen</strong> (estar acostado) → Dativ</li>
      </ul>
      <p>Formas contraídas que oirás todo el turno: in + dem = <strong>im</strong>,
      in + das = <strong>ins</strong>, an + dem = <strong>am</strong>.</p>`,
    uebungen: [
      { id: "bg3201", satz: "Stell den Topf auf ___ Herd. (der)", loesung: "den", tipps: ["den", "dem", "der"], hinweis: "wohin? → Akkusativ", ue: "Pon la olla en la estufa." },
      { id: "bg3202", satz: "Der Topf steht auf ___ Herd. (der)", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "wo? → Dativ", ue: "La olla está en la estufa." },
      { id: "bg3203", satz: "Leg das Fleisch in ___ Pfanne. (die)", loesung: "die", tipps: ["die", "der", "den"], hinweis: "wohin? → Akkusativ", ue: "Pon la carne en la sartén." },
      { id: "bg3204", satz: "Das Fleisch liegt in ___ Pfanne. (die)", loesung: "der", tipps: ["der", "die", "dem"], hinweis: "wo? → Dativ femenino", ue: "La carne está en la sartén." },
      { id: "bg3205", satz: "Der Bräter steht ___ Backofen. (in dem)", loesung: "im", tipps: ["im", "ins", "in den"], hinweis: "in + dem = im", ue: "La rustidera está en el horno." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 33, niveau: "B1", thema: "Utensilios y aparatos pequeños",
  vokabeln: [
    { id: "bv3301", de: "der Schneebesen",   es: "el batidor de varillas",  wortart: "sustantivo", beispiel: "Der Schneebesen hängt an der Wand.", beispielUe: "El batidor cuelga en la pared." },
    { id: "bv3302", de: "der Pfannenwender", es: "la espátula de sartén",   wortart: "sustantivo", beispiel: "Nimm den Pfannenwender für das Ei.", beispielUe: "Toma la espátula para el huevo." },
    { id: "bv3303", de: "die Schöpfkelle",   es: "el cucharón",             wortart: "sustantivo", beispiel: "Eine Schöpfkelle ist eine Portion Suppe.", beispielUe: "Un cucharón es una porción de sopa." },
    { id: "bv3304", de: "der Schaumlöffel",  es: "la espumadera",           wortart: "sustantivo", beispiel: "Hol die Klöße mit dem Schaumlöffel raus.", beispielUe: "Saca las albóndigas con la espumadera." },
    { id: "bv3305", de: "die Küchenzange",   es: "las pinzas de cocina",    wortart: "sustantivo", beispiel: "Wende das Steak mit der Küchenzange.", beispielUe: "Voltea el bife con las pinzas." },
    { id: "bv3306", de: "der Teigschaber",   es: "la lengua de goma",       wortart: "sustantivo", beispiel: "Mit dem Teigschaber wird die Schüssel leer.", beispielUe: "Con la lengua el bol queda vacío." },
    { id: "bv3307", de: "das Sieb",          es: "el colador",              wortart: "sustantivo", beispiel: "Gieß die Soße durch ein Sieb.", beispielUe: "Cuela la salsa por un colador." },
    { id: "bv3308", de: "der Durchschlag",   es: "el escurridor",           wortart: "sustantivo", beispiel: "Die Nudeln kommen in den Durchschlag.", beispielUe: "La pasta va al escurridor." },
    { id: "bv3309", de: "die Küchenwaage",   es: "la báscula de cocina",    wortart: "sustantivo", beispiel: "Die Küchenwaage steht neben dem Mehl.", beispielUe: "La báscula está junto a la harina." },
    { id: "bv3310", de: "der Pürierstab",    es: "la batidora de mano",     wortart: "sustantivo", beispiel: "Der Pürierstab steht im Schrank.", beispielUe: "La batidora de mano está en el armario." }
  ],
  saetze: [
    { id: "bs3301", de: "Gib mir bitte den Schaumlöffel.", es: "Pásame la espumadera, por favor." },
    { id: "bs3302", de: "Mit dem Schneebesen rührst du die Soße glatt.", es: "Con el batidor dejas la salsa sin grumos." },
    { id: "bs3303", de: "Gieß die Nudeln in den Durchschlag.", es: "Echa la pasta en el escurridor." },
    { id: "bs3304", de: "Wieg die Zutaten auf der Küchenwaage ab.", es: "Pesa los ingredientes en la báscula." },
    { id: "bs3305", de: "Wo ist die Zange? Ich finde sie nicht.", es: "¿Dónde están las pinzas? No las encuentro." }
  ],
  grammatik: {
    id: "bg33", titel: "Recursos: con qué herramienta y para qué",
    erklaerung: `
      <p>Dos fórmulas cubren casi todo lo que dirás sobre una herramienta: con cuál
      trabajas, y para qué sirve.</p>
      <table>
        <tr><th>Fórmula</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td><strong>mit</strong> + Dativ</td><td>con qué</td><td><strong>mit dem</strong> Schneebesen rühren</td></tr>
        <tr><td><strong>zum</strong> + infinitivo</td><td>para qué</td><td>ein Sieb <strong>zum</strong> Abgießen</td></tr>
      </table>
      <div class="merke"><strong>mit</strong> lleva <em>siempre</em> Dativ, sin
      excepciones: der → <strong>dem</strong>, das → <strong>dem</strong>,
      die → <strong>der</strong>, plural → <strong>den</strong> (+ n).</div>
      <p>En <strong>zum</strong> + infinitivo, el verbo se escribe con mayúscula porque
      funciona como sustantivo: <em>zum Abgießen, zum Wenden, zum Abwiegen, zum Rühren</em>.
      Es la forma más corta de explicar para qué es un utensilio:</p>
      <ul>
        <li>Der Durchschlag ist <strong>zum Abgießen</strong>. — El escurridor es para escurrir.</li>
        <li>Die Zange ist <strong>zum Wenden</strong>. — Las pinzas son para voltear.</li>
        <li>Die Waage ist <strong>zum Abwiegen</strong>. — La báscula es para pesar.</li>
      </ul>`,
    uebungen: [
      { id: "bg3301", satz: "Ich rühre die Soße mit ___ Schneebesen. (der)", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "mit siempre + Dativ", ue: "Remuevo la salsa con el batidor." },
      { id: "bg3302", satz: "Nimm ein Sieb ___ Abgießen. (zu dem)", loesung: "zum", tipps: ["zum", "zur", "für"], hinweis: "zu + dem = zum", ue: "Toma un colador para escurrir." },
      { id: "bg3303", satz: "Wende das Fleisch mit ___ Küchenzange. (die)", loesung: "der", tipps: ["der", "die", "dem"], hinweis: "die → der im Dativ", ue: "Voltea la carne con las pinzas." },
      { id: "bg3304", satz: "Gieß die Soße durch ein ___. (Sieb)", loesung: "Sieb", tipps: ["Sieb", "Siebe", "Sieben"], hinweis: "durch + Akkusativ, singular", ue: "Cuela la salsa por un colador." },
      { id: "bg3305", satz: "Die Waage ist ___ Abwiegen da. (zu dem)", loesung: "zum", tipps: ["zum", "zur", "zu"], hinweis: "zum + infinitivo en mayúscula", ue: "La báscula es para pesar." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 34, niveau: "B2", thema: "Cortes y técnicas de preparación",
  vokabeln: [
    { id: "bv3401", de: "die Julienne",   es: "la juliana",            wortart: "sustantivo", beispiel: "Schneide die Möhren in Julienne.", beispielUe: "Corta las zanahorias en juliana." },
    { id: "bv3402", de: "die Brunoise",   es: "la brunoise",           wortart: "sustantivo", beispiel: "Die Brunoise ist ein winziger Würfel.", beispielUe: "La brunoise es un dado diminuto." },
    { id: "bv3403", de: "der Würfel",     es: "el dado",               wortart: "sustantivo", beispiel: "Schneide den Speck in Würfel.", beispielUe: "Corta el tocino en dados." },
    { id: "bv3404", de: "der Ring",       es: "el aro",                wortart: "sustantivo", beispiel: "Schneide die Zwiebel in Ringe.", beispielUe: "Corta la cebolla en aros." },
    { id: "bv3405", de: "die Chiffonade", es: "la chifonada",          wortart: "sustantivo", beispiel: "Basilikum wird als Chiffonade geschnitten.", beispielUe: "La albahaca se corta en chifonada." },
    { id: "bv3406", de: "tournieren",     es: "tornear",               wortart: "verbo", beispiel: "Die Kartoffeln werden tourniert.", beispielUe: "Las papas se tornean." },
    { id: "bv3407", de: "filetieren",     es: "filetear",              wortart: "verbo", beispiel: "Bitte den Lachs filetieren.", beispielUe: "Filetea el salmón, por favor." },
    { id: "bv3408", de: "entgräten",      es: "quitar las espinas",    wortart: "verbo", beispiel: "Hast du den Fisch entgrätet?", beispielUe: "¿Le quitaste las espinas al pescado?" },
    { id: "bv3409", de: "parieren",       es: "limpiar la carne",      wortart: "verbo", beispiel: "Das Filet muss noch pariert werden.", beispielUe: "El solomillo todavía hay que limpiarlo." },
    { id: "bv3410", de: "ausbeinen",      es: "deshuesar",             wortart: "verbo", beispiel: "Der Metzger beint die Keule aus.", beispielUe: "El carnicero deshuesa la pierna." }
  ],
  saetze: [
    { id: "bs3401", de: "Schneide die Möhren in feine Julienne.", es: "Corta las zanahorias en juliana fina." },
    { id: "bs3402", de: "Die Brunoise ist ein ganz kleiner Würfel.", es: "La brunoise es un dado muy pequeño." },
    { id: "bs3403", de: "Schneide die Zwiebel in dünne Ringe.", es: "Corta la cebolla en aros finos." },
    { id: "bs3404", de: "Bitte den Lachs filetieren und entgräten.", es: "Filetea el salmón y quítale las espinas." },
    { id: "bs3405", de: "Wie groß soll der Würfel sein?", es: "¿De qué tamaño debe ser el dado?" }
  ],
  grammatik: {
    id: "bg34", titel: "Recursos: herramientas que llevan dentro su verbo",
    erklaerung: `
      <p>Ayer viste que delante de la palabra puede ir un sustantivo (Brot + Messer).
      También puede ir un <strong>verbo</strong> — y entonces la herramienta te dice
      ella misma para qué sirve. Solo se usa la <strong>raíz</strong>, sin el
      <em>-en</em> del infinitivo.</p>
      <table>
        <tr><th>Verbo</th><th>Raíz</th><th>Herramienta</th></tr>
        <tr><td>schneiden (cortar)</td><td>schneide-</td><td>das <strong>Schneide</strong>brett</td></tr>
        <tr><td>braten (freír)</td><td>brat-</td><td>die <strong>Brat</strong>pfanne</td></tr>
        <tr><td>rühren (remover)</td><td>rühr-</td><td>die <strong>Rühr</strong>schüssel</td></tr>
        <tr><td>messen (medir)</td><td>mess-</td><td>der <strong>Mess</strong>becher</td></tr>
        <tr><td>kochen (cocer)</td><td>koch-</td><td>der <strong>Koch</strong>topf</td></tr>
      </table>
      <div class="merke">Funciona también al revés: si ves una palabra larga que no
      conoces, tápala por la mitad. <em>Spülmaschine</em> = spülen (fregar) + Maschine.
      Ya sabes lo que es sin haberla aprendido nunca.</div>
      <p>Los verbos de técnica que terminan en <strong>-ieren</strong> (filetieren,
      tournieren, parieren, marinieren) vienen del francés y forman el participio
      <strong>sin ge-</strong>: <em>Der Fisch ist filetiert.</em> — no «gefiletiert».</p>`,
    uebungen: [
      { id: "bg3401", satz: "Ein Brett zum Schneiden ist das ___.", loesung: "Schneidebrett", tipps: ["Schneidebrett", "Schneidenbrett", "Brettschneide"], hinweis: "raíz del verbo + sustantivo", ue: "Una tabla para cortar es das Schneidebrett." },
      { id: "bg3402", satz: "Eine Pfanne zum Braten ist die ___.", loesung: "Bratpfanne", tipps: ["Bratpfanne", "Bratenpfanne", "Pfannenbrat"], hinweis: "braten → brat-", ue: "Una sartén para freír es die Bratpfanne." },
      { id: "bg3403", satz: "Ein Becher zum Messen ist der ___.", loesung: "Messbecher", tipps: ["Messbecher", "Messenbecher", "Becherness"], hinweis: "messen → mess-", ue: "Un vaso para medir es der Messbecher." },
      { id: "bg3404", satz: "Der Fisch ist schon ___. (filetieren)", loesung: "filetiert", tipps: ["filetiert", "gefiletiert", "filetieren"], hinweis: "verbos en -ieren: participio sin ge-", ue: "El pescado ya está fileteado." },
      { id: "bg3405", satz: "Bei diesen Wörtern steht vorne der ___ des Verbs.", loesung: "Stamm", tipps: ["Stamm", "Infinitiv", "Artikel"], hinweis: "la raíz, sin -en", ue: "En estas palabras, delante va la raíz del verbo." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 35, niveau: "B1", thema: "Piezas de carne y puntos de cocción",
  vokabeln: [
    { id: "bv3501", de: "das Rinderfilet",  es: "el solomillo de res",   wortart: "sustantivo", beispiel: "Das Rinderfilet ist das zarteste Stück.", beispielUe: "El solomillo es la pieza más tierna." },
    { id: "bv3502", de: "das Rumpsteak",    es: "el bife de lomo",       wortart: "sustantivo", beispiel: "Das Rumpsteak hat einen Fettrand.", beispielUe: "El bife de lomo tiene un borde de grasa." },
    { id: "bv3503", de: "das Entrecôte",    es: "el entrecot",           wortart: "sustantivo", beispiel: "Einmal Entrecôte medium, bitte.", beispielUe: "Un entrecot al punto, por favor." },
    { id: "bv3504", de: "die Hüfte",        es: "la cadera",             wortart: "sustantivo", beispiel: "Die Hüfte ist mager und günstig.", beispielUe: "La cadera es magra y económica." },
    { id: "bv3505", de: "der Nacken",       es: "el cogote",             wortart: "sustantivo", beispiel: "Aus dem Nacken machen wir Gulasch.", beispielUe: "Del cogote hacemos gulash." },
    { id: "bv3506", de: "das Kotelett",     es: "la chuleta",            wortart: "sustantivo", beispiel: "Das Kotelett kommt vom Schwein.", beispielUe: "La chuleta viene del cerdo." },
    { id: "bv3507", de: "die Haxe",         es: "el codillo",            wortart: "sustantivo", beispiel: "Die Haxe braucht drei Stunden.", beispielUe: "El codillo necesita tres horas." },
    { id: "bv3508", de: "das Hackfleisch",  es: "la carne molida",       wortart: "sustantivo", beispiel: "Hackfleisch muss am selben Tag verbraucht werden.", beispielUe: "La carne molida se usa el mismo día." },
    { id: "bv3509", de: "blutig",           es: "poco hecho",            wortart: "adjetivo", beispiel: "Der Gast möchte das Steak blutig.", beispielUe: "El cliente quiere el bife poco hecho." },
    { id: "bv3510", de: "durchgebraten",    es: "bien cocido",           wortart: "adjetivo", beispiel: "Einmal durchgebraten, bitte.", beispielUe: "Uno bien cocido, por favor." }
  ],
  saetze: [
    { id: "bs3501", de: "Wie hätten Sie das Steak gern?", es: "¿Cómo desea el bife?" },
    { id: "bs3502", de: "Das Rinderfilet ist das zarteste Stück vom Rind.", es: "El solomillo es la pieza más tierna de la res." },
    { id: "bs3503", de: "Einmal Entrecôte rosa, bitte.", es: "Un entrecot al punto, por favor." },
    { id: "bs3504", de: "Der Nacken eignet sich gut zum Schmoren.", es: "El cogote va bien para estofar." },
    { id: "bs3505", de: "Tut mir leid, das Steak ist zu durch.", es: "Lo siento, el bife está demasiado hecho." }
  ],
  grammatik: {
    id: "bg35", titel: "Recursos: describir un plato con adjetivos",
    erklaerung: `
      <p>«Das Filet» lo sabes. Pero en la carta y en la mesa casi nunca va solo: es
      <em>das zarte Filet</em>, <em>ein blutiges Steak</em>, <em>die kleinen Kartoffeln</em>.
      El adjetivo en alemán cambia de terminación, y eso asusta más de lo que debería,
      porque en el servicio se usan sobre todo dos casos.</p>
      <table>
        <tr><th></th><th>der</th><th>das</th><th>die</th><th>plural</th></tr>
        <tr><td><strong>Nominativ</strong> (es ist …)</td><td>der zart<strong>e</strong></td><td>das zart<strong>e</strong></td><td>die zart<strong>e</strong></td><td>die zart<strong>en</strong></td></tr>
        <tr><td><strong>Akkusativ</strong> (ich nehme …)</td><td>den zart<strong>en</strong></td><td>das zart<strong>e</strong></td><td>die zart<strong>e</strong></td><td>die zart<strong>en</strong></td></tr>
      </table>
      <div class="merke">Con artículo definido solo existen dos terminaciones:
      <strong>-e</strong> y <strong>-en</strong>. La única casilla que cambia entre
      Nominativ y Akkusativ es la de <em>der</em>: <em>der zarte</em> → <em>den zarten</em>.</div>
      <p>Con <strong>ein/eine</strong> el adjetivo tiene que cargar él con la información
      que el artículo no da, así que allí sí aparece <strong>-er</strong> y
      <strong>-es</strong>:</p>
      <ul>
        <li>ein zart<strong>er</strong> Braten <em>(der Braten)</em></li>
        <li>ein blutig<strong>es</strong> Steak <em>(das Steak)</em></li>
        <li>eine frisch<strong>e</strong> Soße <em>(die Soße)</em></li>
      </ul>`,
    uebungen: [
      { id: "bg3501", satz: "Das ___ Filet ist fertig. (zart)", loesung: "zarte", tipps: ["zarte", "zarter", "zartes"], hinweis: "das + adjetivo → -e", ue: "El solomillo tierno está listo." },
      { id: "bg3502", satz: "Der ___ Braten braucht zwei Stunden. (groß)", loesung: "große", tipps: ["große", "großer", "großen"], hinweis: "der + adjetivo → -e", ue: "El asado grande necesita dos horas." },
      { id: "bg3503", satz: "Wir servieren ein ___ Steak. (blutig)", loesung: "blutiges", tipps: ["blutiges", "blutige", "blutiger"], hinweis: "ein + neutro → -es", ue: "Servimos un bife poco hecho." },
      { id: "bg3504", satz: "Ich nehme den ___ Fisch. (frisch)", loesung: "frischen", tipps: ["frischen", "frische", "frischer"], hinweis: "Akkusativ masculino → -en", ue: "Tomo el pescado fresco." },
      { id: "bg3505", satz: "Die ___ Kartoffeln sind fertig. (klein)", loesung: "kleinen", tipps: ["kleinen", "kleine", "kleiner"], hinweis: "plural con artículo → -en", ue: "Las papas pequeñas están listas." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 36, niveau: "B1", thema: "Pescados y mariscos en detalle",
  vokabeln: [
    { id: "bv3601", de: "die Forelle",       es: "la trucha",          wortart: "sustantivo", beispiel: "Die Forelle kommt aus dem Süßwasser.", beispielUe: "La trucha viene de agua dulce." },
    { id: "bv3602", de: "die Dorade",        es: "la dorada",          wortart: "sustantivo", beispiel: "Die Dorade wird im Ganzen gegrillt.", beispielUe: "La dorada se asa entera." },
    { id: "bv3603", de: "der Zander",        es: "la lucioperca",      wortart: "sustantivo", beispiel: "Der Zander ist heute frisch.", beispielUe: "La lucioperca está fresca hoy." },
    { id: "bv3604", de: "der Thunfisch",     es: "el atún",            wortart: "sustantivo", beispiel: "Thunfisch servieren wir rosa.", beispielUe: "El atún lo servimos poco hecho." },
    { id: "bv3605", de: "der Kabeljau",      es: "el bacalao",         wortart: "sustantivo", beispiel: "Der Kabeljau zerfällt leicht.", beispielUe: "El bacalao se deshace fácilmente." },
    { id: "bv3606", de: "die Muschel",       es: "el mejillón",        wortart: "sustantivo", beispiel: "Die Muscheln müssen geschlossen sein.", beispielUe: "Los mejillones tienen que estar cerrados." },
    { id: "bv3607", de: "die Jakobsmuschel", es: "la vieira",          wortart: "sustantivo", beispiel: "Jakobsmuscheln brauchen nur zwei Minuten.", beispielUe: "Las vieiras necesitan solo dos minutos." },
    { id: "bv3608", de: "der Tintenfisch",   es: "el calamar",         wortart: "sustantivo", beispiel: "Der Tintenfisch wird schnell zäh.", beispielUe: "El calamar se pone duro rápido." },
    { id: "bv3609", de: "der Hummer",        es: "la langosta",        wortart: "sustantivo", beispiel: "Der Hummer wird heute geliefert.", beispielUe: "La langosta llega hoy." },
    { id: "bv3610", de: "die Gräte",         es: "la espina",          wortart: "sustantivo", beispiel: "Achtung, hier ist noch eine Gräte.", beispielUe: "Cuidado, aquí queda una espina." }
  ],
  saetze: [
    { id: "bs3601", de: "Die Muscheln müssen vor dem Kochen geschlossen sein.", es: "Los mejillones deben estar cerrados antes de cocer." },
    { id: "bs3602", de: "Der Hummer wird heute frisch geliefert.", es: "La langosta llega fresca hoy." },
    { id: "bs3603", de: "Achtung, der Fisch hat noch Gräten.", es: "Cuidado, el pescado todavía tiene espinas." },
    { id: "bs3604", de: "Als Vorspeise haben wir heute Jakobsmuscheln.", es: "De entrada tenemos hoy vieiras." },
    { id: "bs3605", de: "Ist der Fisch frisch oder tiefgekühlt?", es: "¿El pescado es fresco o congelado?" }
  ],
  grammatik: {
    id: "bg36", titel: "Recursos: los plurales de la carta",
    erklaerung: `
      <p>En una carta y en una comanda casi todo va en plural: <em>zwei Forellen, drei
      Hummer, vier Gläser</em>. El alemán no tiene una sola terminación de plural como el
      español; tiene cinco grupos. La buena noticia: son predecibles.</p>
      <table>
        <tr><th>Grupo</th><th>Singular</th><th>Plural</th></tr>
        <tr><td>+ <strong>-n / -en</strong> (casi todos los femeninos)</td><td>die Muschel</td><td>die Muschel<strong>n</strong></td></tr>
        <tr><td>+ <strong>-e</strong> (muchos masculinos)</td><td>der Fisch</td><td>die Fisch<strong>e</strong></td></tr>
        <tr><td>+ <strong>-er</strong> + Umlaut</td><td>das Glas</td><td>die Gl<strong>ä</strong>s<strong>er</strong></td></tr>
        <tr><td><strong>sin cambio</strong> (terminados en -er, -en, -el)</td><td>der Hummer</td><td>die Hummer</td></tr>
        <tr><td>+ <strong>-s</strong> (extranjerismos)</td><td>das Steak</td><td>die Steak<strong>s</strong></td></tr>
      </table>
      <div class="merke">En plural, el artículo es <strong>die</strong> para los tres
      géneros. Eso ya te ahorra la mitad del problema: <em>die Fische, die Muscheln,
      die Gläser</em>.</div>
      <p>Truco práctico para la comanda: los sustantivos acabados en <strong>-er</strong>,
      <strong>-en</strong> o <strong>-el</strong> casi nunca cambian. <em>der Hummer →
      die Hummer</em>, <em>der Teller → die Teller</em>, <em>der Löffel → die Löffel</em>.</p>`,
    uebungen: [
      { id: "bg3601", satz: "eine Muschel, viele ___", loesung: "Muscheln", tipps: ["Muscheln", "Muschels", "Muschele"], hinweis: "femenino → + n", ue: "un mejillón, muchos mejillones" },
      { id: "bg3602", satz: "ein Hummer, zwei ___", loesung: "Hummer", tipps: ["Hummer", "Hummern", "Hummers"], hinweis: "terminado en -er: sin cambio", ue: "una langosta, dos langostas" },
      { id: "bg3603", satz: "eine Gräte, viele ___", loesung: "Gräten", tipps: ["Gräten", "Grätes", "Grätei"], hinweis: "femenino → + n", ue: "una espina, muchas espinas" },
      { id: "bg3604", satz: "ein Fisch, viele ___", loesung: "Fische", tipps: ["Fische", "Fischen", "Fischs"], hinweis: "masculino → + e", ue: "un pescado, muchos pescados" },
      { id: "bg3605", satz: "ein Glas, viele ___", loesung: "Gläser", tipps: ["Gläser", "Glase", "Glasen"], hinweis: "-er + Umlaut", ue: "un vaso, muchos vasos" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 37, niveau: "B1", thema: "Verduras, hierbas y especias en detalle",
  vokabeln: [
    { id: "bv3701", de: "der Lauch",        es: "el puerro",          wortart: "sustantivo", beispiel: "Der Lauch muss gut gewaschen werden.", beispielUe: "El puerro hay que lavarlo bien." },
    { id: "bv3702", de: "der Fenchel",      es: "el hinojo",          wortart: "sustantivo", beispiel: "Fenchel schmeckt leicht nach Anis.", beispielUe: "El hinojo sabe un poco a anís." },
    { id: "bv3703", de: "die Aubergine",    es: "la berenjena",       wortart: "sustantivo", beispiel: "Die Aubergine zieht viel Öl.", beispielUe: "La berenjena absorbe mucho aceite." },
    { id: "bv3704", de: "die Zucchini",     es: "el calabacín",       wortart: "sustantivo", beispiel: "Die Zucchini wird nur kurz gebraten.", beispielUe: "El calabacín se saltea poco." },
    { id: "bv3705", de: "die Paprika",      es: "el pimiento",        wortart: "sustantivo", beispiel: "Nimm die rote Paprika.", beispielUe: "Toma el pimiento rojo." },
    { id: "bv3706", de: "der Kohlrabi",     es: "el colinabo",        wortart: "sustantivo", beispiel: "Kohlrabi isst man auch roh.", beispielUe: "El colinabo también se come crudo." },
    { id: "bv3707", de: "der Rosmarin",     es: "el romero",          wortart: "sustantivo", beispiel: "Rosmarin passt gut zu Lamm.", beispielUe: "El romero va bien con cordero." },
    { id: "bv3708", de: "der Schnittlauch", es: "el cebollín",        wortart: "sustantivo", beispiel: "Schnittlauch kommt erst zum Schluss.", beispielUe: "El cebollín va al final." },
    { id: "bv3709", de: "das Lorbeerblatt", es: "la hoja de laurel",  wortart: "sustantivo", beispiel: "Nimm das Lorbeerblatt vor dem Servieren raus.", beispielUe: "Saca el laurel antes de servir." },
    { id: "bv3710", de: "die Muskatnuss",   es: "la nuez moscada",    wortart: "sustantivo", beispiel: "Etwas Muskatnuss in die Soße.", beispielUe: "Un poco de nuez moscada en la salsa." }
  ],
  saetze: [
    { id: "bs3701", de: "Der Lauch muss gut gewaschen werden.", es: "El puerro hay que lavarlo bien." },
    { id: "bs3702", de: "Nimm bitte ein Lorbeerblatt für die Soße.", es: "Toma una hoja de laurel para la salsa." },
    { id: "bs3703", de: "Die Suppe schmeckt nach Muskatnuss.", es: "La sopa sabe a nuez moscada." },
    { id: "bs3704", de: "Schneide den Schnittlauch in feine Röllchen.", es: "Corta el cebollín en aritos finos." },
    { id: "bs3705", de: "Das riecht nach frischem Rosmarin.", es: "Esto huele a romero fresco." }
  ],
  grammatik: {
    id: "bg37", titel: "Recursos: hablar de sabor y olor",
    erklaerung: `
      <p>En la cocina y en la mesa se habla todo el rato de a qué sabe y a qué huele algo.
      Son tres estructuras fijas, y las tres llevan Dativ.</p>
      <table>
        <tr><th>Estructura</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td><strong>schmecken nach</strong> + Dativ</td><td>saber a</td><td>Das schmeckt <strong>nach Knoblauch</strong>.</td></tr>
        <tr><td><strong>riechen nach</strong> + Dativ</td><td>oler a</td><td>Es riecht <strong>nach Rosmarin</strong>.</td></tr>
        <tr><td><strong>passen zu</strong> + Dativ</td><td>pegar con</td><td>Rosmarin passt <strong>zu Lamm</strong>.</td></tr>
      </table>
      <div class="merke">Ojo con <strong>schmecken</strong> a secas: significa «gustar
      de sabor» y la persona va en Dativ, igual que <em>gustar</em> en español:
      <em>Das Gericht schmeckt <strong>dem Gast</strong>.</em> — El plato le gusta al cliente.</div>
      <p>Cuando después de <strong>nach</strong> no hay artículo pero sí adjetivo, el
      adjetivo tiene que marcar el Dativ él solo, con <strong>-em</strong> (der/das) o
      <strong>-er</strong> (die):</p>
      <ul>
        <li>Es riecht nach frisch<strong>em</strong> Rosmarin. <em>(der Rosmarin)</em></li>
        <li>Es schmeckt nach frisch<strong>er</strong> Zitrone. <em>(die Zitrone)</em></li>
      </ul>
      <p>Y para avisar de que algo está pasado de punto, basta con <strong>zu</strong> +
      adjetivo: <em>zu salzig, zu scharf, zu kalt, zu süß</em>.</p>`,
    uebungen: [
      { id: "bg3701", satz: "Die Soße schmeckt ___ Knoblauch.", loesung: "nach", tipps: ["nach", "zu", "an"], hinweis: "schmecken nach = saber a", ue: "La salsa sabe a ajo." },
      { id: "bg3702", satz: "Das riecht nach ___ Rosmarin. (frisch)", loesung: "frischem", tipps: ["frischem", "frischer", "frisches"], hinweis: "nach + Dativ, sin artículo → -em", ue: "Esto huele a romero fresco." },
      { id: "bg3703", satz: "Die Suppe ist ___ salzig.", loesung: "zu", tipps: ["zu", "nach", "viel"], hinweis: "zu + adjetivo = demasiado", ue: "La sopa está demasiado salada." },
      { id: "bg3704", satz: "Das Gericht schmeckt ___ Gast sehr gut. (der)", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "schmecken + persona en Dativ", ue: "El plato le gusta mucho al cliente." },
      { id: "bg3705", satz: "Rosmarin passt gut ___ Lamm.", loesung: "zu", tipps: ["zu", "nach", "an"], hinweis: "passen zu + Dativ", ue: "El romero va bien con el cordero." }
    ]
  }
});
