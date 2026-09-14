/* Ruta temática «Alemán en el trabajo» · Día 1–8 · La cocina
   Vocabulario y frases del turno diario en la cocina de un restaurante. */

LEKTION('de-beruf', {
  tag: 1, niveau: "A2", thema: "En la cocina: aparatos y puestos",
  vokabeln: [
    { id: "bv0101", de: "die Küche",         es: "la cocina",             wortart: "sustantivo", beispiel: "Die Küche öffnet um zehn Uhr.", beispielUe: "La cocina abre a las diez." },
    { id: "bv0102", de: "der Herd",          es: "la estufa",             wortart: "sustantivo", beispiel: "Der Herd ist noch an.", beispielUe: "La estufa todavía está encendida." },
    { id: "bv0103", de: "der Backofen",      es: "el horno",              wortart: "sustantivo", beispiel: "Der Backofen hat 180 Grad.", beispielUe: "El horno está a 180 grados." },
    { id: "bv0104", de: "die Pfanne",        es: "la sartén",             wortart: "sustantivo", beispiel: "Die Pfanne ist heiß.", beispielUe: "La sartén está caliente." },
    { id: "bv0105", de: "der Topf",          es: "la olla",               wortart: "sustantivo", beispiel: "Der Topf steht auf dem Herd.", beispielUe: "La olla está en la estufa." },
    { id: "bv0106", de: "das Schneidebrett", es: "la tabla de cortar",    wortart: "sustantivo", beispiel: "Nimm ein sauberes Schneidebrett.", beispielUe: "Toma una tabla limpia." },
    { id: "bv0107", de: "das Messer",        es: "el cuchillo",           wortart: "sustantivo", beispiel: "Das Messer ist sehr scharf.", beispielUe: "El cuchillo está muy afilado." },
    { id: "bv0108", de: "die Spülmaschine",  es: "el lavavajillas",       wortart: "sustantivo", beispiel: "Die Spülmaschine ist fertig.", beispielUe: "El lavavajillas terminó." },
    { id: "bv0109", de: "der Kühlschrank",   es: "el refrigerador",       wortart: "sustantivo", beispiel: "Die Butter liegt im Kühlschrank.", beispielUe: "La mantequilla está en el refrigerador." },
    { id: "bv0110", de: "die Arbeitsfläche", es: "la superficie de trabajo", wortart: "sustantivo", beispiel: "Halte die Arbeitsfläche sauber.", beispielUe: "Mantén limpia la superficie de trabajo." }
  ],
  saetze: [
    { id: "bs0101", de: "Stell den Topf bitte auf den Herd.", es: "Pon la olla en la estufa, por favor." },
    { id: "bs0102", de: "Vorsicht, das Messer ist scharf.", es: "Cuidado, el cuchillo está afilado." },
    { id: "bs0103", de: "Der Backofen ist noch heiß.", es: "El horno todavía está caliente." },
    { id: "bs0104", de: "Ich räume gerade die Spülmaschine ein.", es: "Estoy cargando el lavavajillas." },
    { id: "bs0105", de: "Wo steht die große Pfanne?", es: "¿Dónde está la sartén grande?" }
  ],
  grammatik: {
    id: "bg01", titel: "Recursos: entender órdenes en la cocina (imperativo)",
    erklaerung: `
      <p>En una cocina casi todo se dice en <strong>imperativo</strong>, y casi siempre en
      la forma <em>du</em>, porque el equipo se tutea. Entender esa forma es lo primero
      que necesitas para trabajar sin perderte.</p>
      <table>
        <tr><th>Infinitiv</th><th>du (tú)</th><th>ihr (ustedes, equipo)</th><th>Sie (usted)</th></tr>
        <tr><td>holen</td><td><strong>Hol!</strong></td><td>Holt!</td><td>Holen Sie!</td></tr>
        <tr><td>machen</td><td><strong>Mach!</strong></td><td>Macht!</td><td>Machen Sie!</td></tr>
        <tr><td>geben</td><td><strong>Gib!</strong></td><td>Gebt!</td><td>Geben Sie!</td></tr>
        <tr><td>warten</td><td><strong>Warte!</strong></td><td>Wartet!</td><td>Warten Sie!</td></tr>
      </table>
      <div class="merke">La forma <em>du</em> se hace con la raíz del verbo y sin -st:
      <em>du holst</em> → <strong>hol!</strong> Los verbos que cambian e → i mantienen el
      cambio: <em>du gibst</em> → <strong>gib!</strong> Pero los que cambian a → ä lo
      pierden: <em>du fährst</em> → <strong>fahr!</strong></div>
      <p>Verbos separables: el prefijo salta al final.</p>
      <ul>
        <li>aufräumen → <strong>Räum</strong> die Station <strong>auf!</strong></li>
        <li>anmachen → <strong>Mach</strong> den Herd <strong>an!</strong></li>
        <li>ausmachen → <strong>Mach</strong> den Ofen <strong>aus!</strong></li>
      </ul>
      <p>Con <em>bitte</em> suena cortés, sin <em>bitte</em> suena a orden rápida. En
      pleno servicio nadie es descortés por decir <em>Gib mir die Pfanne!</em> — es
      simplemente el tono del trabajo.</p>`,
    uebungen: [
      { id: "bg0101", satz: "___ bitte die große Pfanne! (holen)", loesung: "Hol", tipps: ["Hol", "Holst", "Geholt"], hinweis: "imperativo de du, sin -st", ue: "¡Trae la sartén grande, por favor!" },
      { id: "bg0102", satz: "___ Sie den Ofen bitte vor. (vorheizen)", loesung: "Heizen", tipps: ["Heizen", "Heizt", "Heiz"], hinweis: "forma de cortesía con Sie", ue: "Precaliente el horno, por favor." },
      { id: "bg0103", satz: "___ mir bitte das Salz! (geben)", loesung: "Gib", tipps: ["Gib", "Gebe", "Gibst"], hinweis: "e → i se mantiene en el imperativo", ue: "¡Pásame la sal!" },
      { id: "bg0104", satz: "___ kurz, die Soße ist gleich fertig. (warten)", loesung: "Warte", tipps: ["Warte", "Wartest", "Wartet"], hinweis: "raíz en -t añade una -e", ue: "Espera, la salsa está casi lista." },
      { id: "bg0105", satz: "___ bitte den Herd aus. (ausmachen)", loesung: "Mach", tipps: ["Mach", "Machst", "Macht"], hinweis: "verbo separable: el prefijo aus va al final", ue: "Apaga la estufa, por favor." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 2, niveau: "A2", thema: "Cortar y preparar",
  vokabeln: [
    { id: "bv0201", de: "schneiden",     es: "cortar",             wortart: "verbo", beispiel: "Schneide die Paprika in Streifen.", beispielUe: "Corta el pimiento en tiras." },
    { id: "bv0202", de: "schälen",       es: "pelar",              wortart: "verbo", beispiel: "Ich schäle zehn Kilo Kartoffeln.", beispielUe: "Pelo diez kilos de papas." },
    { id: "bv0203", de: "würfeln",       es: "cortar en cubos",    wortart: "verbo", beispiel: "Würfle die Zwiebeln klein.", beispielUe: "Corta la cebolla en cubos pequeños." },
    { id: "bv0204", de: "hacken",        es: "picar",              wortart: "verbo", beispiel: "Hack bitte die Petersilie.", beispielUe: "Pica el perejil, por favor." },
    { id: "bv0205", de: "reiben",        es: "rallar",             wortart: "verbo", beispiel: "Reib den Käse für die Pasta.", beispielUe: "Ralla el queso para la pasta." },
    { id: "bv0206", de: "die Scheibe",   es: "la rodaja",          wortart: "sustantivo", beispiel: "Zehn Scheiben Schinken, bitte.", beispielUe: "Diez rodajas de jamón, por favor." },
    { id: "bv0207", de: "der Streifen",  es: "la tira",            wortart: "sustantivo", beispiel: "Das Fleisch kommt in Streifen.", beispielUe: "La carne va en tiras." },
    { id: "bv0208", de: "waschen",       es: "lavar",              wortart: "verbo", beispiel: "Wasch den Salat gründlich.", beispielUe: "Lava bien la lechuga." },
    { id: "bv0209", de: "wiegen",        es: "pesar",              wortart: "verbo", beispiel: "Wieg bitte 300 Gramm ab.", beispielUe: "Pesa 300 gramos, por favor." },
    { id: "bv0210", de: "die Schüssel",  es: "el bol",             wortart: "sustantivo", beispiel: "Die Schüssel steht im Kühlschrank.", beispielUe: "El bol está en el refrigerador." }
  ],
  saetze: [
    { id: "bs0201", de: "Schneide die Paprika bitte in Streifen.", es: "Corta el pimiento en tiras, por favor." },
    { id: "bs0202", de: "Soll ich die Zwiebeln fein hacken?", es: "¿Pico la cebolla fina?" },
    { id: "bs0203", de: "Ich wiederhole: zwei Kilo Kartoffeln schälen.", es: "Repito: pelar dos kilos de papas." },
    { id: "bs0204", de: "Wie fein soll ich das schneiden?", es: "¿De qué grosor lo corto?" },
    { id: "bs0205", de: "Alles klar, mache ich sofort.", es: "Entendido, lo hago enseguida." }
  ],
  grammatik: {
    id: "bg02", titel: "Recursos: confirmar y repetir una instrucción",
    erklaerung: `
      <p>En cocina, repetir la orden en voz alta no es de torpes: es lo que se espera.
      Así el jefe de cocina sabe que la información llegó bien. Tres pasos y tienes la
      situación resuelta.</p>
      <table>
        <tr><th>Paso</th><th>Frase</th><th>Cuándo</th></tr>
        <tr><td>1. Confirmar</td><td><strong>Ja, Chef.</strong> / <strong>Alles klar.</strong> / <strong>Mache ich.</strong></td><td>entendiste</td></tr>
        <tr><td>2. Repetir</td><td><strong>Ich wiederhole:</strong> zwei Kilo Kartoffeln schälen.</td><td>para asegurar</td></tr>
        <tr><td>3. Preguntar</td><td><strong>Soll ich</strong> die Zwiebeln fein hacken?</td><td>si dudas</td></tr>
      </table>
      <div class="merke">Nunca digas <em>ja</em> si no entendiste. Una pregunta cuesta
      tres segundos; un plato mal hecho cuesta el plato, el tiempo y la mesa.</div>
      <p>Para preguntar úsate estas dos estructuras, que cubren casi todo:</p>
      <ul>
        <li><strong>Soll ich ...?</strong> — ¿quieres que yo ...? <em>Soll ich das Fleisch schon anbraten?</em></li>
        <li><strong>Wie ...?</strong> — <em>Wie fein? Wie viel? Wie lange?</em></li>
      </ul>
      <p>Y si de verdad no entendiste nada: <em>Entschuldigung, ich habe das nicht
      verstanden. Können Sie das bitte wiederholen?</em></p>`,
    uebungen: [
      { id: "bg0201", satz: "___ die Zwiebeln bitte fein. (hacken)", loesung: "Hack", tipps: ["Hack", "Hackt", "Gehackt"], hinweis: "imperativo de du", ue: "Pica la cebolla fina, por favor." },
      { id: "bg0202", satz: "___ ich die Kartoffeln schälen?", loesung: "Soll", tipps: ["Soll", "Sollst", "Sollen"], hinweis: "Soll ich ...? = ¿quieres que yo ...?", ue: "¿Pelo las papas?" },
      { id: "bg0203", satz: "Ich ___: Tomaten in Scheiben schneiden.", loesung: "wiederhole", tipps: ["wiederhole", "wiederholen", "wiederholt"], hinweis: "ich + verbo en -e", ue: "Repito: cortar los tomates en rodajas." },
      { id: "bg0204", satz: "___ fein soll ich den Käse reiben?", loesung: "Wie", tipps: ["Wie", "Was", "Wer"], hinweis: "wie = cómo, en qué grado", ue: "¿Qué tan fino rallo el queso?" },
      { id: "bg0205", satz: "Alles ___, mache ich sofort.", loesung: "klar", tipps: ["klar", "gut", "fertig"], hinweis: "Alles klar = entendido", ue: "Entendido, lo hago enseguida." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 3, niveau: "A2", thema: "Métodos de cocción",
  vokabeln: [
    { id: "bv0301", de: "braten",      es: "freír en la sartén",        wortart: "verbo", beispiel: "Brate das Fleisch scharf an.", beispielUe: "Sella la carne a fuego fuerte." },
    { id: "bv0302", de: "kochen",      es: "hervir, cocinar",           wortart: "verbo", beispiel: "Das Wasser kocht schon.", beispielUe: "El agua ya hierve." },
    { id: "bv0303", de: "dünsten",     es: "rehogar",                   wortart: "verbo", beispiel: "Dünste das Gemüse kurz.", beispielUe: "Rehoga la verdura un momento." },
    { id: "bv0304", de: "schmoren",    es: "estofar",                   wortart: "verbo", beispiel: "Das Rind schmort zwei Stunden.", beispielUe: "La res se estofa dos horas." },
    { id: "bv0305", de: "blanchieren", es: "escaldar",                  wortart: "verbo", beispiel: "Die Bohnen werden blanchiert.", beispielUe: "Las judías se escaldan." },
    { id: "bv0306", de: "frittieren",  es: "freír en aceite abundante", wortart: "verbo", beispiel: "Wir frittieren die Pommes frisch.", beispielUe: "Freímos las papas al momento." },
    { id: "bv0307", de: "backen",      es: "hornear",                   wortart: "verbo", beispiel: "Das Brot backt 40 Minuten.", beispielUe: "El pan se hornea 40 minutos." },
    { id: "bv0308", de: "grillen",     es: "asar a la parrilla",        wortart: "verbo", beispiel: "Grill die Zucchini kurz.", beispielUe: "Asa el calabacín un momento." },
    { id: "bv0309", de: "der Deckel",  es: "la tapa",                   wortart: "sustantivo", beispiel: "Leg den Deckel auf den Topf.", beispielUe: "Pon la tapa en la olla." },
    { id: "bv0310", de: "die Hitze",   es: "el fuego, el calor",        wortart: "sustantivo", beispiel: "Dreh die Hitze runter.", beispielUe: "Baja el fuego." }
  ],
  saetze: [
    { id: "bs0301", de: "Brate das Fleisch bitte scharf an.", es: "Sella la carne a fuego fuerte, por favor." },
    { id: "bs0302", de: "Die Suppe köchelt seit einer Stunde.", es: "La sopa hierve a fuego lento desde hace una hora." },
    { id: "bs0303", de: "Wie lange muss der Fisch im Ofen bleiben?", es: "¿Cuánto tiempo tiene que estar el pescado en el horno?" },
    { id: "bs0304", de: "Das Gemüse wird nur kurz blanchiert.", es: "La verdura solo se escalda un momento." },
    { id: "bs0305", de: "Zwei Steaks medium, eins durch.", es: "Dos bistecs a punto, uno bien cocido." }
  ],
  grammatik: {
    id: "bg03", titel: "Recursos: puntos de cocción y tiempos",
    erklaerung: `
      <p>Dos informaciones se piden y se dan cien veces por turno: <strong>qué punto</strong>
      y <strong>cuánto tiempo</strong>. Apréndelas como bloques fijos.</p>
      <table>
        <tr><th>Alemán</th><th>Español</th><th>En la comanda se dice</th></tr>
        <tr><td>blutig / englisch</td><td>poco hecho, rojo</td><td>einmal blutig</td></tr>
        <tr><td>medium / rosa</td><td>a punto</td><td>einmal medium</td></tr>
        <tr><td>durch / gut durch</td><td>bien cocido</td><td>einmal durch</td></tr>
      </table>
      <p>Para el tiempo funcionan siempre estas tres formas:</p>
      <ul>
        <li><strong>Das braucht noch drei Minuten.</strong> — le faltan tres minutos</li>
        <li><strong>Das dauert zehn Minuten.</strong> — tarda diez minutos</li>
        <li><strong>In zwei Minuten ist es fertig.</strong> — en dos minutos está listo</li>
      </ul>
      <div class="merke">Ojo con <em>noch</em> y <em>schon</em>: <em>noch drei Minuten</em> =
      todavía faltan tres; <em>schon fertig</em> = ya está listo. Una sílaba cambia todo el
      sentido para el compañero que espera el plato.</div>
      <p>Y las tres frases del fuego: <strong>Dreh die Hitze hoch / runter</strong> (sube /
      baja el fuego) y <strong>Nimm es vom Feuer</strong> (retíralo del fuego).</p>`,
    uebungen: [
      { id: "bg0301", satz: "Der Gast möchte das Steak ganz ___.", loesung: "durch", tipps: ["durch", "blutig", "medium"], hinweis: "bien cocido", ue: "El cliente quiere el bistec bien cocido." },
      { id: "bg0302", satz: "Die Nudeln brauchen noch drei ___.", loesung: "Minuten", tipps: ["Minuten", "Minute", "Stunden"], hinweis: "plural después de drei", ue: "A la pasta le faltan tres minutos." },
      { id: "bg0303", satz: "___ die Hitze runter, es kocht über! (drehen)", loesung: "Dreh", tipps: ["Dreh", "Drehst", "Gedreht"], hinweis: "imperativo de du", ue: "¡Baja el fuego, se está saliendo!" },
      { id: "bg0304", satz: "Das Fleisch muss zehn Minuten ___.", loesung: "ruhen", tipps: ["ruhen", "ruht", "geruht"], hinweis: "infinitivo detrás de muss", ue: "La carne tiene que reposar diez minutos." },
      { id: "bg0305", satz: "Leg bitte den ___ auf den Topf.", loesung: "Deckel", tipps: ["Deckel", "Topf", "Herd"], hinweis: "masculino, acusativo: den", ue: "Pon la tapa en la olla, por favor." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 4, niveau: "A2", thema: "Carne y pescado",
  vokabeln: [
    { id: "bv0401", de: "das Rindfleisch",     es: "la carne de res",   wortart: "sustantivo", beispiel: "Das Rindfleisch kommt frisch.", beispielUe: "La carne de res llega fresca." },
    { id: "bv0402", de: "das Schweinefleisch", es: "la carne de cerdo", wortart: "sustantivo", beispiel: "Wir braten Schweinefleisch an.", beispielUe: "Sellamos carne de cerdo." },
    { id: "bv0403", de: "das Hähnchen",        es: "el pollo",          wortart: "sustantivo", beispiel: "Das Hähnchen ist im Ofen.", beispielUe: "El pollo está en el horno." },
    { id: "bv0404", de: "der Lachs",           es: "el salmón",         wortart: "sustantivo", beispiel: "Der Lachs kommt ohne Haut.", beispielUe: "El salmón va sin piel." },
    { id: "bv0405", de: "die Garnele",         es: "el camarón",        wortart: "sustantivo", beispiel: "Die Garnelen sind schon geputzt.", beispielUe: "Los camarones ya están limpios." },
    { id: "bv0406", de: "das Filet",           es: "el filete",         wortart: "sustantivo", beispiel: "Zwei Filets, bitte.", beispielUe: "Dos filetes, por favor." },
    { id: "bv0407", de: "die Wurst",           es: "la salchicha",      wortart: "sustantivo", beispiel: "Die Wurst liegt im Kühlhaus.", beispielUe: "La salchicha está en la cámara." },
    { id: "bv0408", de: "der Speck",           es: "el tocino",         wortart: "sustantivo", beispiel: "Etwas Speck in die Pfanne.", beispielUe: "Un poco de tocino a la sartén." },
    { id: "bv0409", de: "mariniert",           es: "marinado",          wortart: "adjetivo", beispiel: "Das Fleisch ist schon mariniert.", beispielUe: "La carne ya está marinada." },
    { id: "bv0410", de: "die Bestellung",      es: "el pedido, la comanda", wortart: "sustantivo", beispiel: "Die Bestellung ist raus.", beispielUe: "El pedido ya salió." }
  ],
  saetze: [
    { id: "bs0401", de: "Zwei Mal Rinderfilet, einmal medium, einmal durch.", es: "Dos filetes de res: uno a punto, otro bien cocido." },
    { id: "bs0402", de: "Der Lachs kommt ohne Haut auf den Teller.", es: "El salmón va al plato sin piel." },
    { id: "bs0403", de: "Tisch sieben wartet auf die Vorspeisen.", es: "La mesa siete espera las entradas." },
    { id: "bs0404", de: "Die Garnelen sind schon mariniert.", es: "Los camarones ya están marinados." },
    { id: "bs0405", de: "Wir haben kein Hähnchen mehr.", es: "Ya no nos queda pollo." }
  ],
  grammatik: {
    id: "bg04", titel: "Recursos: cantar la comanda en la cocina",
    erklaerung: `
      <p>Cuando entra una comanda, la cocina la canta en voz alta con una fórmula fija y
      muy corta. No se habla en frases completas: se dice cantidad, plato y punto.</p>
      <table>
        <tr><th>Fórmula</th><th>Ejemplo</th><th>Significado</th></tr>
        <tr><td>Zahl + <strong>mal</strong> + Gericht</td><td>Zwei mal Lachs!</td><td>dos de salmón</td></tr>
        <tr><td><strong>einmal</strong> + Gericht + Garstufe</td><td>Einmal Rind medium!</td><td>uno de res a punto</td></tr>
        <tr><td>Tisch + Zahl</td><td>Tisch fünf, drei Vorspeisen!</td><td>mesa cinco, tres entradas</td></tr>
      </table>
      <div class="merke">La respuesta estándar de quien recibe la comanda es una sola
      palabra: <strong>Kommt!</strong> (¡va!) o <strong>Verstanden!</strong> (¡entendido!).
      Cuando el plato está listo se grita <strong>Abholen!</strong> o <strong>Bitte
      abholen, Tisch sieben!</strong></div>
      <p>Palabras que oirás cada noche en el pase:</p>
      <ul>
        <li><strong>anrichten</strong> — emplatar</li>
        <li><strong>nachschieben</strong> — mandar el siguiente plato</li>
        <li><strong>Wie weit seid ihr?</strong> — ¿cómo van?</li>
        <li><strong>Das geht raus!</strong> — ¡eso sale ya!</li>
      </ul>`,
    uebungen: [
      { id: "bg0401", satz: "___ Mal Lachs und einmal Rind!", loesung: "Zwei", tipps: ["Zwei", "Zweite", "Zweimal"], hinweis: "número + mal", ue: "¡Dos de salmón y uno de res!" },
      { id: "bg0402", satz: "Tisch fünf: einmal Hähnchen ___ Reis.", loesung: "mit", tipps: ["mit", "für", "von"], hinweis: "mit = con, guarnición", ue: "Mesa cinco: un pollo con arroz." },
      { id: "bg0403", satz: "Die Vorspeisen sind fertig — bitte ___!", loesung: "abholen", tipps: ["abholen", "abgeholt", "holt ab"], hinweis: "infinitivo como orden en el pase", ue: "Las entradas están listas, ¡a recoger!" },
      { id: "bg0404", satz: "___! Kommt in fünf Minuten.", loesung: "Verstanden", tipps: ["Verstanden", "Verstehen", "Versteht"], hinweis: "participio usado como respuesta", ue: "¡Entendido! Va en cinco minutos." },
      { id: "bg0405", satz: "Das Filet ist ___, es kann raus.", loesung: "fertig", tipps: ["fertig", "frisch", "kalt"], hinweis: "fertig = listo", ue: "El filete está listo, puede salir." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 5, niveau: "A2", thema: "Verduras, frutas y hierbas",
  vokabeln: [
    { id: "bv0501", de: "die Zwiebel",    es: "la cebolla",     wortart: "sustantivo", beispiel: "Die Zwiebeln sind geschält.", beispielUe: "Las cebollas están peladas." },
    { id: "bv0502", de: "der Knoblauch",  es: "el ajo",         wortart: "sustantivo", beispiel: "Wir brauchen mehr Knoblauch.", beispielUe: "Necesitamos más ajo." },
    { id: "bv0503", de: "die Kartoffel",  es: "la papa",        wortart: "sustantivo", beispiel: "Die Kartoffeln kochen schon.", beispielUe: "Las papas ya se están cociendo." },
    { id: "bv0504", de: "die Möhre",      es: "la zanahoria",   wortart: "sustantivo", beispiel: "Schneide die Möhren in Scheiben.", beispielUe: "Corta las zanahorias en rodajas." },
    { id: "bv0505", de: "der Pilz",       es: "el champiñón",   wortart: "sustantivo", beispiel: "Die Pilze werden gebraten.", beispielUe: "Los champiñones se saltean." },
    { id: "bv0506", de: "die Zitrone",    es: "el limón",       wortart: "sustantivo", beispiel: "Eine Scheibe Zitrone dazu.", beispielUe: "Con una rodaja de limón." },
    { id: "bv0507", de: "die Petersilie", es: "el perejil",     wortart: "sustantivo", beispiel: "Frische Petersilie darüber.", beispielUe: "Perejil fresco por encima." },
    { id: "bv0508", de: "der Thymian",    es: "el tomillo",     wortart: "sustantivo", beispiel: "Thymian kommt an die Soße.", beispielUe: "El tomillo va en la salsa." },
    { id: "bv0509", de: "frisch",         es: "fresco",         wortart: "adjetivo", beispiel: "Der Salat ist nicht mehr frisch.", beispielUe: "La lechuga ya no está fresca." },
    { id: "bv0510", de: "die Lieferung",  es: "la entrega",     wortart: "sustantivo", beispiel: "Die Lieferung ist da.", beispielUe: "Llegó la entrega." }
  ],
  saetze: [
    { id: "bs0501", de: "Die Lieferung ist vollständig.", es: "La entrega está completa." },
    { id: "bs0502", de: "Zwei Kisten Tomaten fehlen.", es: "Faltan dos cajas de tomates." },
    { id: "bs0503", de: "Bitte lagere die Möhren im Kühlhaus.", es: "Guarda las zanahorias en la cámara fría, por favor." },
    { id: "bs0504", de: "Der Salat sieht nicht mehr frisch aus.", es: "La lechuga ya no se ve fresca." },
    { id: "bs0505", de: "Wir brauchen morgen mehr Knoblauch.", es: "Mañana necesitamos más ajo." }
  ],
  grammatik: {
    id: "bg05", titel: "Recursos: recibir y controlar la mercancía",
    erklaerung: `
      <p>Quien recibe la entrega firma, y con la firma asume que todo estaba bien. Por eso
      hay que saber decir tres cosas con claridad: <strong>está completo</strong>,
      <strong>falta algo</strong>, <strong>la calidad no es buena</strong>.</p>
      <table>
        <tr><th>Situación</th><th>Frase</th></tr>
        <tr><td>todo bien</td><td>Die Lieferung ist <strong>vollständig</strong>.</td></tr>
        <tr><td>falta algo</td><td>Zwei Kisten <strong>fehlen</strong>. / Hier <strong>fehlt</strong> der Fisch.</td></tr>
        <tr><td>mala calidad</td><td>Die Ware ist <strong>nicht in Ordnung</strong>. / Der Salat ist <strong>verdorben</strong>.</td></tr>
        <tr><td>devolver</td><td>Das <strong>nehmen wir nicht an</strong>. Das geht <strong>zurück</strong>.</td></tr>
      </table>
      <div class="merke"><strong>fehlen</strong> funciona como <em>faltar</em> en español:
      lo que falta es el sujeto. <em>Zwei Kisten fehlen</em> (plural) pero <em>eine Kiste
      fehlt</em> (singular). No digas <em>ich fehle zwei Kisten</em>.</div>
      <p>El papel que se firma se llama <strong>der Lieferschein</strong> (albarán). Dos
      frases útiles: <em>Ich unterschreibe den Lieferschein</em> y <em>Bitte notieren Sie
      das auf dem Lieferschein.</em></p>`,
    uebungen: [
      { id: "bg0501", satz: "Die ___ ist gerade gekommen.", loesung: "Lieferung", tipps: ["Lieferung", "Lieferschein", "Ware"], hinweis: "femenino: die", ue: "La entrega acaba de llegar." },
      { id: "bg0502", satz: "Bitte ___ Sie die Ware auf Frische.", loesung: "prüfen", tipps: ["prüfen", "prüft", "geprüft"], hinweis: "cortesía con Sie: infinitivo", ue: "Revise la frescura de la mercancía." },
      { id: "bg0503", satz: "Die Tomaten sind nicht mehr ___.", loesung: "frisch", tipps: ["frisch", "fertig", "voll"], hinweis: "adjetivo sin terminación tras sein", ue: "Los tomates ya no están frescos." },
      { id: "bg0504", satz: "Hier ___ zwei Kisten Salat.", loesung: "fehlen", tipps: ["fehlen", "fehlt", "gefehlt"], hinweis: "sujeto plural: zwei Kisten", ue: "Aquí faltan dos cajas de lechuga." },
      { id: "bg0505", satz: "Ich ___ den Lieferschein.", loesung: "unterschreibe", tipps: ["unterschreibe", "unterschreiben", "unterschrieben"], hinweis: "ich + verbo en -e", ue: "Firmo el albarán." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 6, niveau: "A2", thema: "Cantidades, medidas y recetas",
  vokabeln: [
    { id: "bv0601", de: "das Gramm",      es: "el gramo",          wortart: "sustantivo", beispiel: "500 Gramm Mehl, bitte.", beispielUe: "500 gramos de harina, por favor." },
    { id: "bv0602", de: "der Liter",      es: "el litro",          wortart: "sustantivo", beispiel: "Zwei Liter Milch fehlen.", beispielUe: "Faltan dos litros de leche." },
    { id: "bv0603", de: "der Esslöffel",  es: "la cucharada",      wortart: "sustantivo", beispiel: "Zwei Esslöffel Öl dazu.", beispielUe: "Añade dos cucharadas de aceite." },
    { id: "bv0604", de: "der Teelöffel",  es: "la cucharadita",    wortart: "sustantivo", beispiel: "Ein Teelöffel Zucker reicht.", beispielUe: "Una cucharadita de azúcar basta." },
    { id: "bv0605", de: "die Prise",      es: "la pizca",          wortart: "sustantivo", beispiel: "Nur eine Prise Salz.", beispielUe: "Solo una pizca de sal." },
    { id: "bv0606", de: "das Rezept",     es: "la receta",         wortart: "sustantivo", beispiel: "Das Rezept hängt an der Wand.", beispielUe: "La receta está en la pared." },
    { id: "bv0607", de: "die Zutat",      es: "el ingrediente",    wortart: "sustantivo", beispiel: "Alle Zutaten sind da.", beispielUe: "Están todos los ingredientes." },
    { id: "bv0608", de: "die Portion",    es: "la porción",        wortart: "sustantivo", beispiel: "Das reicht für zwölf Portionen.", beispielUe: "Alcanza para doce porciones." },
    { id: "bv0609", de: "ungefähr",       es: "aproximadamente",   wortart: "adverbio", beispiel: "Das dauert ungefähr zehn Minuten.", beispielUe: "Tarda unos diez minutos." },
    { id: "bv0610", de: "verdoppeln",     es: "duplicar",          wortart: "verbo", beispiel: "Wir verdoppeln das Rezept.", beispielUe: "Duplicamos la receta." }
  ],
  saetze: [
    { id: "bs0601", de: "Das Rezept reicht für zwölf Portionen.", es: "La receta alcanza para doce porciones." },
    { id: "bs0602", de: "Gib zwei Esslöffel Öl in die Pfanne.", es: "Pon dos cucharadas de aceite en la sartén." },
    { id: "bs0603", de: "Wie viel Gramm Zucker kommen hinein?", es: "¿Cuántos gramos de azúcar llevan?" },
    { id: "bs0604", de: "Eine Prise Salz reicht völlig.", es: "Una pizca de sal es más que suficiente." },
    { id: "bs0605", de: "Für heute Abend verdoppeln wir alles.", es: "Para esta noche duplicamos todo." }
  ],
  grammatik: {
    id: "bg06", titel: "Recursos: cantidades y medidas",
    erklaerung: `
      <p>Hay una regla alemana que sorprende a todo hispanohablante: después de una medida
      <strong>no se usa la preposición de</strong>. Se dicen las dos palabras seguidas.</p>
      <table>
        <tr><th>Español</th><th>Alemán</th></tr>
        <tr><td>dos kilos <em>de</em> papas</td><td>zwei Kilo Kartoffeln</td></tr>
        <tr><td>un litro <em>de</em> leche</td><td>ein Liter Milch</td></tr>
        <tr><td>una pizca <em>de</em> sal</td><td>eine Prise Salz</td></tr>
        <tr><td>tres cucharadas <em>de</em> aceite</td><td>drei Esslöffel Öl</td></tr>
      </table>
      <div class="merke">Las medidas masculinas y neutras se quedan en <strong>singular</strong>
      aunque haya varias: <em>zwei Kilo</em>, <em>drei Liter</em>, <em>500 Gramm</em>. Pero
      las femeninas sí llevan plural: <em>zwei Fla</em><em>schen</em>, <em>drei Prisen</em>,
      <em>vier Tassen</em>.</div>
      <p>Preguntar cantidades:</p>
      <ul>
        <li><strong>Wie viel</strong> Mehl? — incontable, singular</li>
        <li><strong>Wie viele</strong> Eier? — contable, plural</li>
        <li><strong>Für wie viele Personen?</strong> — ¿para cuántas personas?</li>
      </ul>`,
    uebungen: [
      { id: "bg0601", satz: "Nimm bitte eine ___ Salz.", loesung: "Prise", tipps: ["Prise", "Prisen", "Portion"], hinweis: "eine + singular", ue: "Toma una pizca de sal." },
      { id: "bg0602", satz: "Das Rezept ist für vier ___.", loesung: "Portionen", tipps: ["Portionen", "Portion", "Prisen"], hinweis: "vier + plural femenino", ue: "La receta es para cuatro porciones." },
      { id: "bg0603", satz: "Wir brauchen 500 ___ Mehl.", loesung: "Gramm", tipps: ["Gramm", "Gramme", "Liter"], hinweis: "medida neutra: sin plural", ue: "Necesitamos 500 gramos de harina." },
      { id: "bg0604", satz: "Für acht Personen musst du alles ___.", loesung: "verdoppeln", tipps: ["verdoppeln", "verdoppelt", "verdopple"], hinweis: "infinitivo detrás de musst", ue: "Para ocho personas tienes que duplicar todo." },
      { id: "bg0605", satz: "___ viele Eier kommen in den Teig?", loesung: "Wie", tipps: ["Wie", "Was", "Wer"], hinweis: "wie viele + contable", ue: "¿Cuántos huevos lleva la masa?" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 7, niveau: "B1", thema: "Mise en place, puestos y turnos",
  vokabeln: [
    { id: "bv0701", de: "die Vorbereitung", es: "la preparación",       wortart: "sustantivo", beispiel: "Die Vorbereitung dauert zwei Stunden.", beispielUe: "La preparación dura dos horas." },
    { id: "bv0702", de: "der Posten",       es: "el puesto de trabajo", wortart: "sustantivo", beispiel: "Ich arbeite am kalten Posten.", beispielUe: "Trabajo en el puesto frío." },
    { id: "bv0703", de: "die Schicht",      es: "el turno",             wortart: "sustantivo", beispiel: "Meine Schicht endet um 23 Uhr.", beispielUe: "Mi turno termina a las 23." },
    { id: "bv0704", de: "die Übergabe",     es: "el traspaso de turno", wortart: "sustantivo", beispiel: "Die Übergabe dauert zehn Minuten.", beispielUe: "El traspaso dura diez minutos." },
    { id: "bv0705", de: "der Dienstplan",   es: "el plan de turnos",    wortart: "sustantivo", beispiel: "Der Dienstplan hängt im Büro.", beispielUe: "El plan de turnos está en la oficina." },
    { id: "bv0706", de: "die Pause",        es: "el descanso",          wortart: "sustantivo", beispiel: "Ich mache jetzt Pause.", beispielUe: "Ahora tomo mi descanso." },
    { id: "bv0707", de: "vorbereiten",      es: "preparar",             wortart: "verbo separable", beispiel: "Ich bereite die Soßen vor.", beispielUe: "Preparo las salsas." },
    { id: "bv0708", de: "auffüllen",        es: "reponer",              wortart: "verbo separable", beispiel: "Füll bitte den Salat auf.", beispielUe: "Repón la ensalada, por favor." },
    { id: "bv0709", de: "die Frühschicht",  es: "el turno de mañana",   wortart: "sustantivo", beispiel: "Die Frühschicht beginnt um sechs.", beispielUe: "El turno de mañana empieza a las seis." },
    { id: "bv0710", de: "die Spätschicht",  es: "el turno de tarde",    wortart: "sustantivo", beispiel: "Wer hat heute Spätschicht?", beispielUe: "¿Quién tiene turno de tarde hoy?" }
  ],
  saetze: [
    { id: "bs0701", de: "Alles ist vorbereitet, du kannst übernehmen.", es: "Todo está preparado, puedes tomar el relevo." },
    { id: "bs0702", de: "Die Frühschicht beginnt um sechs Uhr.", es: "El turno de mañana empieza a las seis." },
    { id: "bs0703", de: "Die Soße ist alle, ich koche neue.", es: "Se acabó la salsa, hago más." },
    { id: "bs0704", de: "Kannst du morgen für mich einspringen?", es: "¿Puedes cubrirme mañana?" },
    { id: "bs0705", de: "Im Kühlhaus steht noch vorbereitetes Gemüse.", es: "En la cámara queda verdura ya preparada." }
  ],
  grammatik: {
    id: "bg07", titel: "Recursos: el traspaso de turno",
    erklaerung: `
      <p>El traspaso es la conversación más importante del día: en dos minutos se dice qué
      está hecho, qué falta y qué hay que vigilar. Sigue siempre el mismo orden.</p>
      <table>
        <tr><th>Punto</th><th>Frase modelo</th></tr>
        <tr><td>1. Qué está listo</td><td>Die Soßen <strong>sind fertig</strong>, das Gemüse <strong>ist vorbereitet</strong>.</td></tr>
        <tr><td>2. Qué falta</td><td>Der Salat <strong>muss noch</strong> aufgefüllt <strong>werden</strong>.</td></tr>
        <tr><td>3. Qué vigilar</td><td><strong>Achtung:</strong> Der Braten ist seit 16 Uhr im Ofen.</td></tr>
        <tr><td>4. Cerrar</td><td><strong>Ich übergebe dir die Station.</strong> Alles klar?</td></tr>
      </table>
      <div class="merke">La forma <em>muss noch ... werden</em> es pasiva con modal y es
      justo la que se usa aquí, porque importa la tarea, no quién la hace:
      <em>Die Teller müssen noch poliert werden.</em></div>
      <p>Verbos separables del turno — el prefijo se va al final:</p>
      <ul>
        <li><strong>auffüllen</strong>: Ich <strong>fülle</strong> den Salat <strong>auf</strong>.</li>
        <li><strong>vorbereiten</strong>: Ich <strong>bereite</strong> alles <strong>vor</strong>.</li>
        <li><strong>einspringen</strong>: Kannst du <strong>einspringen</strong>? (cubrir a alguien)</li>
        <li><strong>abgeben</strong>: Ich <strong>gebe</strong> die Station <strong>ab</strong>.</li>
      </ul>`,
    uebungen: [
      { id: "bg0701", satz: "Ich ___ dir jetzt die Station.", loesung: "übergebe", tipps: ["übergebe", "übergeben", "übergab"], hinweis: "ich + verbo en -e", ue: "Ahora te traspaso la estación." },
      { id: "bg0702", satz: "Die Soße ist fertig, den Salat musst du noch ___.", loesung: "auffüllen", tipps: ["auffüllen", "aufgefüllt", "fülle auf"], hinweis: "infinitivo detrás de musst", ue: "La salsa está lista, la ensalada todavía hay que reponerla." },
      { id: "bg0703", satz: "Meine ___ endet um 16 Uhr.", loesung: "Schicht", tipps: ["Schicht", "Pause", "Übergabe"], hinweis: "femenino: die Schicht", ue: "Mi turno termina a las 16." },
      { id: "bg0704", satz: "Steht das im ___?", loesung: "Dienstplan", tipps: ["Dienstplan", "Lieferschein", "Rezept"], hinweis: "el plan de turnos", ue: "¿Eso está en el plan de turnos?" },
      { id: "bg0705", satz: "Die Teller müssen noch poliert ___.", loesung: "werden", tipps: ["werden", "sein", "haben"], hinweis: "pasiva con modal: muss ... werden", ue: "Los platos todavía hay que abrillantarlos." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 8, niveau: "B1", thema: "Higiene y HACCP",
  vokabeln: [
    { id: "bv0801", de: "die Hygiene",            es: "la higiene",             wortart: "sustantivo", beispiel: "Hygiene ist das Wichtigste.", beispielUe: "La higiene es lo más importante." },
    { id: "bv0802", de: "die Kühlkette",          es: "la cadena de frío",      wortart: "sustantivo", beispiel: "Die Kühlkette darf nicht unterbrochen werden.", beispielUe: "La cadena de frío no debe interrumpirse." },
    { id: "bv0803", de: "die Temperatur",         es: "la temperatura",         wortart: "sustantivo", beispiel: "Ich messe jeden Morgen die Temperatur.", beispielUe: "Mido la temperatura cada mañana." },
    { id: "bv0804", de: "das Haltbarkeitsdatum",  es: "la fecha de caducidad",  wortart: "sustantivo", beispiel: "Prüf das Haltbarkeitsdatum.", beispielUe: "Revisa la fecha de caducidad." },
    { id: "bv0805", de: "desinfizieren",          es: "desinfectar",            wortart: "verbo", beispiel: "Desinfizier die Fläche bitte.", beispielUe: "Desinfecta la superficie, por favor." },
    { id: "bv0806", de: "die Handschuhe",         es: "los guantes",            wortart: "sustantivo (plural)", beispiel: "Zieh frische Handschuhe an.", beispielUe: "Ponte guantes limpios." },
    { id: "bv0807", de: "die Schürze",            es: "el delantal",            wortart: "sustantivo", beispiel: "Die Schürze ist schmutzig.", beispielUe: "El delantal está sucio." },
    { id: "bv0808", de: "verderben",              es: "echarse a perder",       wortart: "verbo", beispiel: "Das Fleisch ist verdorben.", beispielUe: "La carne se echó a perder." },
    { id: "bv0809", de: "das Protokoll",          es: "el registro",            wortart: "sustantivo", beispiel: "Trag es ins Protokoll ein.", beispielUe: "Anótalo en el registro." },
    { id: "bv0810", de: "die Kontrolle",          es: "el control",             wortart: "sustantivo", beispiel: "Morgen ist Kontrolle.", beispielUe: "Mañana hay control." }
  ],
  saetze: [
    { id: "bs0801", de: "Die Kühlung muss unter sieben Grad bleiben.", es: "La refrigeración debe mantenerse por debajo de siete grados." },
    { id: "bs0802", de: "Ich trage die Temperatur ins Protokoll ein.", es: "Anoto la temperatura en el registro." },
    { id: "bs0803", de: "Rohes Fleisch und Salat nie auf dasselbe Brett.", es: "Nunca carne cruda y ensalada en la misma tabla." },
    { id: "bs0804", de: "Wechsle bitte die Handschuhe.", es: "Cambia los guantes, por favor." },
    { id: "bs0805", de: "Diese Ware ist verdorben und muss weg.", es: "Esta mercancía está en mal estado y hay que tirarla." }
  ],
  grammatik: {
    id: "bg08", titel: "Recursos: documentar temperaturas y controles",
    erklaerung: `
      <p>En Alemania la higiene alimentaria se documenta por escrito. Cada cocina lleva un
      <strong>Protokoll</strong> con temperaturas y controles, y en una inspección hay que
      poder explicarlo. Estas son las frases que se repiten.</p>
      <table>
        <tr><th>Acción</th><th>Frase</th></tr>
        <tr><td>medir</td><td>Ich <strong>messe</strong> die Temperatur um 8 Uhr.</td></tr>
        <tr><td>anotar</td><td>Ich <strong>trage</strong> den Wert <strong>ein</strong>.</td></tr>
        <tr><td>avisar</td><td>Die Kühlung ist <strong>zu warm</strong>. Ich <strong>melde</strong> das.</td></tr>
        <tr><td>tirar</td><td>Die Ware ist <strong>abgelaufen</strong> und kommt <strong>in den Müll</strong>.</td></tr>
      </table>
      <div class="merke">Distingue dos palabras que se confunden: <strong>abgelaufen</strong>
      = caducado (pasó la fecha) y <strong>verdorben</strong> = estropeado (huele o se ve
      mal). Un producto puede estar abgelaufen sin estar verdorben, pero igual sale de la
      cocina.</div>
      <p>Reglas que oirás como frase hecha:</p>
      <ul>
        <li><strong>First in, first out</strong> — die ältere Ware kommt nach vorne.</li>
        <li><strong>Hände waschen</strong> — vor der Arbeit, nach jeder Pause, nach rohem Fleisch.</li>
        <li><strong>Kühlkette</strong> — tiefgekühlte Ware sofort ins Gefrierhaus.</li>
        <li><strong>Getrennte Bretter</strong> — rohes Fleisch niemals mit Salat mischen.</li>
      </ul>`,
    uebungen: [
      { id: "bg0801", satz: "Bitte ___ Sie die Temperatur jeden Morgen.", loesung: "messen", tipps: ["messen", "misst", "gemessen"], hinweis: "cortesía con Sie: infinitivo", ue: "Mida la temperatura cada mañana." },
      { id: "bg0802", satz: "Ich trage den Wert ins ___ ein.", loesung: "Protokoll", tipps: ["Protokoll", "Rezept", "Lieferschein"], hinweis: "el registro de control", ue: "Anoto el valor en el registro." },
      { id: "bg0803", satz: "Die Kühlkette darf nicht ___ werden.", loesung: "unterbrochen", tipps: ["unterbrochen", "unterbrechen", "unterbricht"], hinweis: "pasiva: participio + werden", ue: "La cadena de frío no debe interrumpirse." },
      { id: "bg0804", satz: "Der Joghurt ist seit gestern ___.", loesung: "abgelaufen", tipps: ["abgelaufen", "verdorben", "frisch"], hinweis: "pasó la fecha de caducidad", ue: "El yogur está caducado desde ayer." },
      { id: "bg0805", satz: "Vor der Arbeit ___ ich mir die Hände.", loesung: "wasche", tipps: ["wasche", "waschen", "gewaschen"], hinweis: "ich + verbo en -e", ue: "Antes del trabajo me lavo las manos." }
    ]
  }
});
