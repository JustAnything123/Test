/* Ruta temática «Alemán en el trabajo» · Día 43–45 · Vocabulario técnico de hotel
   Los tipos de habitación y de cama con su nombre exacto, la ropa y el baño pieza por
   pieza, y los términos internos de limpieza — incluidos los cargos de la casa, que en
   hotelería alemana llevan casi todos nombre francés. */

LEKTION('de-beruf', {
  tag: 43, niveau: "B1", thema: "Tipos de habitación, camas y regímenes",
  vokabeln: [
    { id: "bv4301", de: "das Zweibettzimmer",     es: "la habitación con dos camas", wortart: "sustantivo", beispiel: "Das Zweibettzimmer hat zwei Einzelbetten.", beispielUe: "La habitación de dos camas tiene dos camas individuales." },
    { id: "bv4302", de: "das Familienzimmer",     es: "la habitación familiar",      wortart: "sustantivo", beispiel: "Das Familienzimmer ist für vier Personen.", beispielUe: "La habitación familiar es para cuatro personas." },
    { id: "bv4303", de: "das Verbindungszimmer",  es: "la habitación comunicada",    wortart: "sustantivo", beispiel: "Wir haben zwei Verbindungszimmer frei.", beispielUe: "Tenemos dos habitaciones comunicadas libres." },
    { id: "bv4304", de: "die Juniorsuite",        es: "la junior suite",             wortart: "sustantivo", beispiel: "Die Juniorsuite hat einen Sitzbereich.", beispielUe: "La junior suite tiene zona de estar." },
    { id: "bv4305", de: "das französische Bett",  es: "la cama de matrimonio pequeña", wortart: "sustantivo", beispiel: "Das französische Bett ist 140 Zentimeter breit.", beispielUe: "La cama francesa mide 140 centímetros." },
    { id: "bv4306", de: "das Zustellbett",        es: "la cama supletoria",          wortart: "sustantivo", beispiel: "Ein Zustellbett kostet dreißig Euro.", beispielUe: "Una cama supletoria cuesta treinta euros." },
    { id: "bv4307", de: "das Gitterbett",         es: "la cuna",                     wortart: "sustantivo", beispiel: "Brauchen Sie ein Gitterbett für das Baby?", beispielUe: "¿Necesitan una cuna para el bebé?" },
    { id: "bv4308", de: "die Halbpension",        es: "la media pensión",            wortart: "sustantivo", beispiel: "Halbpension heißt Frühstück und Abendessen.", beispielUe: "Media pensión es desayuno y cena." },
    { id: "bv4309", de: "die Vollpension",        es: "la pensión completa",         wortart: "sustantivo", beispiel: "Vollpension enthält drei Mahlzeiten.", beispielUe: "La pensión completa incluye tres comidas." },
    { id: "bv4310", de: "der Aufpreis",           es: "el suplemento",               wortart: "sustantivo", beispiel: "Der Aufpreis beträgt zwanzig Euro.", beispielUe: "El suplemento es de veinte euros." }
  ],
  saetze: [
    { id: "bs4301", de: "Möchten Sie ein Doppelzimmer oder ein Zweibettzimmer?", es: "¿Desean una habitación doble o con dos camas?" },
    { id: "bs4302", de: "Halbpension heißt Frühstück und Abendessen.", es: "Media pensión significa desayuno y cena." },
    { id: "bs4303", de: "Für das Kind stellen wir gern ein Zustellbett dazu.", es: "Para el niño añadimos con gusto una cama supletoria." },
    { id: "bs4304", de: "Die Juniorsuite kostet vierzig Euro Aufpreis.", es: "La junior suite cuesta cuarenta euros de suplemento." },
    { id: "bs4305", de: "Das Frühstück ist im Preis inbegriffen.", es: "El desayuno está incluido en el precio." }
  ],
  grammatik: {
    id: "bg43", titel: "Recursos: explicar qué incluye una tarifa",
    erklaerung: `
      <p>La pregunta que más oirás en recepción es «¿y eso qué incluye?». Hay tres verbos
      para contestarla, y se confunden mucho porque en español los tres suenan parecido.</p>
      <table>
        <tr><th>Verbo</th><th>Caso</th><th>Ejemplo</th></tr>
        <tr><td><strong>enthalten</strong> (contener)</td><td>+ Akkusativ</td><td>Der Preis enthält <strong>das Frühstück</strong>.</td></tr>
        <tr><td><strong>bestehen aus</strong> (constar de)</td><td>+ Dativ</td><td>Halbpension besteht aus <strong>zwei Mahlzeiten</strong>.</td></tr>
        <tr><td><strong>gehören zu</strong> (formar parte de)</td><td>+ Dativ</td><td>Das Frühstück gehört <strong>zum Zimmerpreis</strong>.</td></tr>
      </table>
      <div class="merke">Dos palabras cortas te ahorran frases enteras:
      <strong>inbegriffen</strong> o <strong>inklusive</strong> (incluido) y
      <strong>zuzüglich</strong> (más, aparte). <em>Das Frühstück ist inbegriffen.
      Die Kurtaxe ist zuzüglich.</em></div>
      <p>Para el precio en sí, el verbo profesional no es <em>kosten</em> sino
      <strong>betragen</strong> (ascender a), y va con Akkusativ:</p>
      <ul>
        <li>Der Aufpreis <strong>beträgt</strong> zwanzig Euro.</li>
        <li>Die Anzahlung <strong>beträgt</strong> dreißig Prozent.</li>
      </ul>`,
    uebungen: [
      { id: "bg4301", satz: "Der Preis ___ das Frühstück. (enthalten)", loesung: "enthält", tipps: ["enthält", "enthaltet", "enthalten"], hinweis: "e → ä en la 3ª persona", ue: "El precio incluye el desayuno." },
      { id: "bg4302", satz: "Halbpension besteht ___ zwei Mahlzeiten.", loesung: "aus", tipps: ["aus", "von", "zu"], hinweis: "bestehen aus + Dativ", ue: "Media pensión consta de dos comidas." },
      { id: "bg4303", satz: "Das Frühstück ist im Preis ___.", loesung: "inbegriffen", tipps: ["inbegriffen", "zuzüglich", "begriffen"], hinweis: "incluido", ue: "El desayuno está incluido en el precio." },
      { id: "bg4304", satz: "Der Aufpreis ___ zwanzig Euro. (betragen)", loesung: "beträgt", tipps: ["beträgt", "betragt", "betragen"], hinweis: "a → ä en la 3ª persona", ue: "El suplemento asciende a veinte euros." },
      { id: "bg4305", satz: "Das Frühstück gehört ___ Zimmerpreis. (zu dem)", loesung: "zum", tipps: ["zum", "zur", "zu den"], hinweis: "zu + dem = zum", ue: "El desayuno forma parte del precio de la habitación." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 44, niveau: "B1", thema: "Ropa de cama, toallas y baño",
  vokabeln: [
    { id: "bv4401", de: "das Spannbettuch",   es: "la sábana bajera",        wortart: "sustantivo", beispiel: "Das Spannbettuch ist fleckig.", beispielUe: "La sábana bajera tiene manchas." },
    { id: "bv4402", de: "der Bettbezug",      es: "la funda nórdica",        wortart: "sustantivo", beispiel: "Der Bettbezug muss gewechselt werden.", beispielUe: "Hay que cambiar la funda nórdica." },
    { id: "bv4403", de: "der Kissenbezug",    es: "la funda de almohada",    wortart: "sustantivo", beispiel: "Zwei Kissenbezüge pro Bett.", beispielUe: "Dos fundas de almohada por cama." },
    { id: "bv4404", de: "die Bettdecke",      es: "el edredón",              wortart: "sustantivo", beispiel: "Die Bettdecke ist zu dünn.", beispielUe: "El edredón es demasiado fino." },
    { id: "bv4405", de: "die Tagesdecke",     es: "el cubrecama",            wortart: "sustantivo", beispiel: "Die Tagesdecke kommt zum Schluss drauf.", beispielUe: "El cubrecama va al final." },
    { id: "bv4406", de: "das Badetuch",       es: "la toalla de baño",       wortart: "sustantivo", beispiel: "Jeder Gast bekommt ein Badetuch.", beispielUe: "Cada huésped recibe una toalla de baño." },
    { id: "bv4407", de: "das Gästehandtuch",  es: "la toalla de manos",      wortart: "sustantivo", beispiel: "Das Gästehandtuch hängt neben dem Waschbecken.", beispielUe: "La toalla de manos cuelga junto al lavabo." },
    { id: "bv4408", de: "der Waschlappen",    es: "la manopla de baño",      wortart: "sustantivo", beispiel: "Waschlappen legen wir gefaltet hin.", beispielUe: "Las manoplas las dejamos dobladas." },
    { id: "bv4409", de: "die Badematte",      es: "la alfombrilla de baño",  wortart: "sustantivo", beispiel: "Die Badematte liegt vor der Dusche.", beispielUe: "La alfombrilla va delante de la ducha." },
    { id: "bv4410", de: "der Bademantel",     es: "el albornoz",             wortart: "sustantivo", beispiel: "Der Bademantel hängt im Schrank.", beispielUe: "El albornoz cuelga en el armario." }
  ],
  saetze: [
    { id: "bs4401", de: "Bring der Kollegin bitte zwei frische Badetücher.", es: "Lleva a la compañera dos toallas de baño limpias." },
    { id: "bs4402", de: "In Zimmer zwölf fehlt ein Kissenbezug.", es: "En la habitación doce falta una funda de almohada." },
    { id: "bs4403", de: "Die Bettwäsche wird alle drei Tage gewechselt.", es: "La ropa de cama se cambia cada tres días." },
    { id: "bs4404", de: "Kannst du dem Gast noch einen Bademantel bringen?", es: "¿Puedes llevarle al huésped un albornoz más?" },
    { id: "bs4405", de: "Die Badematte liegt vor der Dusche.", es: "La alfombrilla va delante de la ducha." }
  ],
  grammatik: {
    id: "bg44", titel: "Recursos: quién recibe qué",
    erklaerung: `
      <p>En housekeeping casi todas las frases tienen la misma forma: alguien
      <strong>lleva algo a alguien</strong>. En alemán eso significa dos objetos en la
      misma frase — y el orden no es libre.</p>
      <table>
        <tr><th>Quién</th><th>A quién (Dativ)</th><th>Qué (Akkusativ)</th></tr>
        <tr><td>Ich bringe</td><td><strong>dem Gast</strong></td><td><strong>ein Handtuch</strong>.</td></tr>
        <tr><td>Sie gibt</td><td><strong>der Kollegin</strong></td><td><strong>den Schlüssel</strong>.</td></tr>
      </table>
      <div class="merke"><strong>La regla:</strong> la persona (Dativ) va antes que la cosa
      (Akkusativ). Piénsalo así: primero se dice a quién, luego qué. Verbos que funcionan
      siempre así: <em>bringen, geben, zeigen, reichen, schicken</em>.</div>
      <p>Solo hay una excepción, y es fácil de notar: si la cosa se sustituye por un
      pronombre (<em>es, ihn, sie</em>), el pronombre salta al principio:</p>
      <ul>
        <li>Ich bringe <strong>dem Gast das Handtuch</strong>. — normal</li>
        <li>Ich bringe <strong>es dem Gast</strong>. — con pronombre, la cosa va primero</li>
      </ul>
      <p>Recuerda las terminaciones del Dativ, que son las que fallan:
      der → <strong>dem</strong>, das → <strong>dem</strong>, die → <strong>der</strong>,
      plural → <strong>den</strong> + <strong>-n</strong> en el sustantivo
      (<em>den Gäste<strong>n</strong></em>).</p>`,
    uebungen: [
      { id: "bg4401", satz: "Ich bringe ___ Gast ein Handtuch. (der)", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "la persona va en Dativ", ue: "Le llevo una toalla al huésped." },
      { id: "bg4402", satz: "Gib ___ Kollegin bitte den Schlüssel. (die)", loesung: "der", tipps: ["der", "die", "dem"], hinweis: "die → der im Dativ", ue: "Dale la llave a la compañera." },
      { id: "bg4403", satz: "Wir bringen den ___ frische Handtücher. (die Gäste)", loesung: "Gästen", tipps: ["Gästen", "Gäste", "Gastes"], hinweis: "plural en Dativ: + n", ue: "Les llevamos toallas limpias a los huéspedes." },
      { id: "bg4404", satz: "In der Reihenfolge steht die Person ___ der Sache.", loesung: "vor", tipps: ["vor", "nach", "neben"], hinweis: "Dativ antes que Akkusativ", ue: "En el orden, la persona va antes que la cosa." },
      { id: "bg4405", satz: "Die Bettwäsche ___ alle drei Tage gewechselt. (werden)", loesung: "wird", tipps: ["wird", "werden", "ist"], hinweis: "singular → wird", ue: "La ropa de cama se cambia cada tres días." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 45, niveau: "B2", thema: "Limpieza, estado de habitación y cargos de la casa",
  vokabeln: [
    { id: "bv4501", de: "das Abreisezimmer",   es: "la habitación de salida",     wortart: "sustantivo", beispiel: "Abreisezimmer werden zuerst gereinigt.", beispielUe: "Las habitaciones de salida se limpian primero." },
    { id: "bv4502", de: "das Bleibezimmer",    es: "la habitación de cliente que sigue", wortart: "sustantivo", beispiel: "Bleibezimmer brauchen weniger Zeit.", beispielUe: "Las habitaciones ocupadas llevan menos tiempo." },
    { id: "bv4503", de: "der Reinigungswagen", es: "el carro de limpieza",        wortart: "sustantivo", beispiel: "Der Reinigungswagen steht auf dem Flur.", beispielUe: "El carro de limpieza está en el pasillo." },
    { id: "bv4504", de: "das Mikrofasertuch",  es: "el paño de microfibra",       wortart: "sustantivo", beispiel: "Nimm ein sauberes Mikrofasertuch.", beispielUe: "Toma un paño de microfibra limpio." },
    { id: "bv4505", de: "der Glasreiniger",    es: "el limpiacristales",          wortart: "sustantivo", beispiel: "Der Glasreiniger ist für den Spiegel.", beispielUe: "El limpiacristales es para el espejo." },
    { id: "bv4506", de: "der Sanitärreiniger", es: "el limpiador sanitario",      wortart: "sustantivo", beispiel: "Sanitärreiniger nur im Bad benutzen.", beispielUe: "El limpiador sanitario solo en el baño." },
    { id: "bv4507", de: "die Hausdame",        es: "la gobernanta",               wortart: "sustantivo", beispiel: "Die Hausdame kontrolliert die Zimmer.", beispielUe: "La gobernanta controla las habitaciones." },
    { id: "bv4508", de: "der Chef de Rang",    es: "el jefe de rango",            wortart: "sustantivo", beispiel: "Der Chef de Rang betreut sechs Tische.", beispielUe: "El jefe de rango atiende seis mesas." },
    { id: "bv4509", de: "der Sommelier",       es: "el sumiller",                 wortart: "sustantivo", beispiel: "Der Sommelier berät bei der Weinkarte.", beispielUe: "El sumiller asesora con la carta de vinos." },
    { id: "bv4510", de: "der Sous-Chef",       es: "el segundo de cocina",        wortart: "sustantivo", beispiel: "Der Sous-Chef vertritt den Küchenchef.", beispielUe: "El segundo de cocina sustituye al jefe." }
  ],
  saetze: [
    { id: "bs4501", de: "Zimmer vierzehn ist ein Abreisezimmer.", es: "La habitación catorce es de salida." },
    { id: "bs4502", de: "Für den Spiegel nimmst du den Glasreiniger.", es: "Para el espejo tomas el limpiacristales." },
    { id: "bs4503", de: "Die Hausdame kontrolliert jedes Zimmer nach der Reinigung.", es: "La gobernanta controla cada habitación tras la limpieza." },
    { id: "bs4504", de: "Wer ist heute für die dritte Etage zuständig?", es: "¿Quién es hoy responsable de la tercera planta?" },
    { id: "bs4505", de: "Das Zimmer ist fertig und kann verkauft werden.", es: "La habitación está lista y se puede vender." }
  ],
  grammatik: {
    id: "bg45", titel: "Recursos: repaso — construye tú mismo el término",
    erklaerung: `
      <p>Último día de la ruta técnica. Aquí no hay gramática nueva: hay una comprobación
      de que ya no necesitas que nadie te enseñe la palabra, porque puedes
      <strong>construirla</strong>. Vuelve a la regla del día 31 y míralo con todo lo que
      has aprendido desde entonces.</p>
      <table>
        <tr><th>Base</th><th>Familia completa</th></tr>
        <tr><td><strong>das Messer</strong></td><td>Koch-, Schäl-, Brot-, Filetier-, Ausbein-, Fleisch-, Fisch-, Buttermesser</td></tr>
        <tr><td><strong>der Teller</strong></td><td>Platz-, Speise-, Suppen-, Vorspeisen-, Dessert-, Brot-, Pastateller</td></tr>
        <tr><td><strong>das Glas</strong></td><td>Wasser-, Weißwein-, Rotwein-, Longdrinkglas</td></tr>
        <tr><td><strong>das Zimmer</strong></td><td>Einzel-, Doppel-, Zweibett-, Familien-, Verbindungs-, Abreise-, Bleibezimmer</td></tr>
        <tr><td><strong>der Reiniger</strong></td><td>Glas-, Sanitär-, Allzweckreiniger</td></tr>
      </table>
      <div class="merke">Tres cosas y ya lo tienes todo: la palabra importante va
      <strong>al final</strong>, esa palabra da el <strong>artículo</strong>, y si delante
      hay un verbo se usa solo la <strong>raíz</strong>. Con eso puedes leer una carta,
      una lista de pedido o un manual de limpieza que nunca has visto.</div>
      <p>Una advertencia honesta para el trabajo real: en hotelería alemana muchos cargos
      son palabras francesas y <strong>no</strong> se construyen así —
      <em>Chef de Rang, Commis, Sommelier, Sous-Chef, Gouvernante</em>. Esas hay que
      aprenderlas tal cual. Es la excepción, no la regla.</p>
      <p>Y en la comanda se abrevia todo: <em>1x Rumpsteak medium</em>, <em>2x Pils</em>,
      <em>DZ</em> (Doppelzimmer), <em>EZ</em> (Einzelzimmer), <em>HP</em> (Halbpension),
      <em>VP</em> (Vollpension). Nadie escribe la palabra entera con prisa.</p>`,
    uebungen: [
      { id: "bg4501", satz: "Ein Reiniger für Glas ist der ___.", loesung: "Glasreiniger", tipps: ["Glasreiniger", "Reinigerglas", "Glasesreiniger"], hinweis: "lo importante va al final", ue: "Un limpiador para cristal es der Glasreiniger." },
      { id: "bg4502", satz: "Ein Zimmer mit zwei Betten ist das ___.", loesung: "Zweibettzimmer", tipps: ["Zweibettzimmer", "Zimmerzweibett", "Zweibettenzimmer"], hinweis: "Zwei + Bett + Zimmer", ue: "Una habitación con dos camas es das Zweibettzimmer." },
      { id: "bg4503", satz: "Es heißt ___ Suppenteller, denn es heißt der Teller.", loesung: "der", tipps: ["der", "das", "die"], hinweis: "el artículo lo da la última palabra", ue: "Se dice der Suppenteller, porque es der Teller." },
      { id: "bg4504", satz: "Ein Glas für Wasser ist das ___.", loesung: "Wasserglas", tipps: ["Wasserglas", "Glaswasser", "Wassersglas"], hinweis: "Wasser + Glas", ue: "Un vaso para agua es das Wasserglas." },
      { id: "bg4505", satz: "In der Comanda heißt DZ ___.", loesung: "Doppelzimmer", tipps: ["Doppelzimmer", "Dreizimmer", "Duschzimmer"], hinweis: "abreviatura de recepción", ue: "En la comanda, DZ significa Doppelzimmer." }
    ]
  }
});
