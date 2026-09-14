/* Ruta temática «Alemán en el trabajo» · Día 17–24 · Hotel
   Recepción, habitaciones, housekeeping y el trato con el huésped. */

LEKTION('de-beruf', {
  tag: 17, niveau: "A2", thema: "El hotel: áreas y oficios",
  vokabeln: [
    { id: "bv1701", de: "das Hotel",           es: "el hotel",                   wortart: "sustantivo", beispiel: "Das Hotel hat achtzig Zimmer.", beispielUe: "El hotel tiene ochenta habitaciones." },
    { id: "bv1702", de: "die Rezeption",       es: "la recepción",               wortart: "sustantivo", beispiel: "Ich arbeite an der Rezeption.", beispielUe: "Trabajo en recepción." },
    { id: "bv1703", de: "die Lobby",           es: "el vestíbulo",               wortart: "sustantivo", beispiel: "Warten Sie bitte in der Lobby.", beispielUe: "Espere en el vestíbulo, por favor." },
    { id: "bv1704", de: "die Reinigungskraft", es: "el personal de limpieza",    wortart: "sustantivo", beispiel: "Die Reinigungskraft ist schon da.", beispielUe: "El personal de limpieza ya está." },
    { id: "bv1705", de: "der Hausmeister",     es: "el encargado de mantenimiento", wortart: "sustantivo", beispiel: "Der Hausmeister repariert das.", beispielUe: "El encargado lo repara." },
    { id: "bv1706", de: "der Empfangschef",    es: "el jefe de recepción",       wortart: "sustantivo", beispiel: "Der Empfangschef kommt gleich.", beispielUe: "El jefe de recepción viene enseguida." },
    { id: "bv1707", de: "zuständig",           es: "responsable, competente",    wortart: "adjetivo", beispiel: "Dafür bin ich nicht zuständig.", beispielUe: "De eso no me encargo yo." },
    { id: "bv1708", de: "das Gepäck",          es: "el equipaje",                wortart: "sustantivo", beispiel: "Ihr Gepäck steht in der Lobby.", beispielUe: "Su equipaje está en el vestíbulo." },
    { id: "bv1709", de: "der Aufzug",          es: "el ascensor",                wortart: "sustantivo", beispiel: "Der Aufzug ist gleich rechts.", beispielUe: "El ascensor está a la derecha." },
    { id: "bv1710", de: "die Etage",           es: "la planta",                  wortart: "sustantivo", beispiel: "Ihr Zimmer ist in der dritten Etage.", beispielUe: "Su habitación está en la tercera planta." }
  ],
  saetze: [
    { id: "bs1701", de: "Guten Tag, mein Name ist Sofia, ich bin an der Rezeption.", es: "Buenos días, me llamo Sofía, estoy en recepción." },
    { id: "bs1702", de: "Dafür ist meine Kollegin zuständig.", es: "De eso se encarga mi colega." },
    { id: "bs1703", de: "Der Aufzug ist gleich rechts.", es: "El ascensor está justo a la derecha." },
    { id: "bs1704", de: "Ihr Zimmer liegt in der dritten Etage.", es: "Su habitación está en la tercera planta." },
    { id: "bs1705", de: "Darf ich Ihnen mit dem Gepäck helfen?", es: "¿Le ayudo con el equipaje?" }
  ],
  grammatik: {
    id: "bg17", titel: "Recursos: presentarse y decir de qué se encarga uno",
    erklaerung: `
      <p>En un hotel el huésped no sabe quién hace qué. Dos frases resuelven el noventa por
      ciento de las situaciones: quién eres y si es tu tarea o no.</p>
      <table>
        <tr><th>Situación</th><th>Frase</th></tr>
        <tr><td>presentarse</td><td>Guten Tag, <strong>mein Name ist</strong> Sofia.</td></tr>
        <tr><td>es tu tarea</td><td><strong>Dafür bin ich zuständig</strong>, gern.</td></tr>
        <tr><td>no es tu tarea</td><td>Dafür ist <strong>meine Kollegin</strong> zuständig. <strong>Ich hole sie.</strong></td></tr>
        <tr><td>no lo sabes</td><td><strong>Das weiß ich nicht genau, aber ich frage nach.</strong></td></tr>
      </table>
      <div class="merke">Nunca dejes al huésped con un <em>nein</em> seco. La fórmula
      profesional siempre tiene dos partes: lo que no puedes hacer <strong>y</strong> lo
      que sí harás: <em>Das kann ich leider nicht entscheiden, aber ich frage meinen
      Chef.</em></div>
      <p>Los oficios del hotel y sus artículos — hay que aprenderlos con el artículo, porque
      el género no se puede adivinar:</p>
      <ul>
        <li><strong>die</strong> Rezeption, <strong>die</strong> Lobby, <strong>die</strong> Etage</li>
        <li><strong>der</strong> Aufzug, <strong>der</strong> Hausmeister, <strong>der</strong> Empfangschef</li>
        <li><strong>das</strong> Hotel, <strong>das</strong> Gepäck, <strong>das</strong> Zimmer</li>
      </ul>
      <p>Y una trampa clásica: <em>das Gepäck</em> es <strong>singular</strong> aunque sean
      cinco maletas. <em>Ihr Gepäck ist schon oben</em>, nunca <em>sind</em>.</p>`,
    uebungen: [
      { id: "bg1701", satz: "Mein ___ ist Ana, ich arbeite an der Rezeption.", loesung: "Name", tipps: ["Name", "Namen", "Nahme"], hinweis: "mein Name ist ...", ue: "Me llamo Ana, trabajo en recepción." },
      { id: "bg1702", satz: "Dafür ___ ich leider nicht zuständig.", loesung: "bin", tipps: ["bin", "ist", "habe"], hinweis: "ich + sein", ue: "De eso lamentablemente no me encargo yo." },
      { id: "bg1703", satz: "Ihr Zimmer ist in der dritten ___.", loesung: "Etage", tipps: ["Etage", "Lobby", "Rezeption"], hinweis: "la planta del edificio", ue: "Su habitación está en la tercera planta." },
      { id: "bg1704", satz: "Darf ich Ihr ___ nehmen?", loesung: "Gepäck", tipps: ["Gepäck", "Gepäcke", "Koffer"], hinweis: "neutro y siempre singular", ue: "¿Me permite su equipaje?" },
      { id: "bg1705", satz: "Meine Kollegin ___ Ihnen gern weiter.", loesung: "hilft", tipps: ["hilft", "helfen", "geholfen"], hinweis: "sie + helfen: e → i", ue: "Mi colega le ayuda con gusto." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 18, niveau: "A2", thema: "Tipos de habitación y equipamiento",
  vokabeln: [
    { id: "bv1801", de: "das Einzelzimmer", es: "la habitación individual", wortart: "sustantivo", beispiel: "Ein Einzelzimmer kostet 95 Euro.", beispielUe: "Una individual cuesta 95 euros." },
    { id: "bv1802", de: "das Doppelzimmer", es: "la habitación doble",      wortart: "sustantivo", beispiel: "Wir haben noch ein Doppelzimmer.", beispielUe: "Nos queda una habitación doble." },
    { id: "bv1803", de: "die Suite",        es: "la suite",                 wortart: "sustantivo", beispiel: "Die Suite ist im vierten Stock.", beispielUe: "La suite está en el cuarto piso." },
    { id: "bv1804", de: "das Bad",          es: "el baño",                  wortart: "sustantivo", beispiel: "Das Bad hat eine Wanne.", beispielUe: "El baño tiene bañera." },
    { id: "bv1805", de: "die Dusche",       es: "la ducha",                 wortart: "sustantivo", beispiel: "Die Dusche funktioniert nicht.", beispielUe: "La ducha no funciona." },
    { id: "bv1806", de: "der Balkon",       es: "el balcón",                wortart: "sustantivo", beispiel: "Das Zimmer hat einen Balkon.", beispielUe: "La habitación tiene balcón." },
    { id: "bv1807", de: "die Klimaanlage",  es: "el aire acondicionado",    wortart: "sustantivo", beispiel: "Die Klimaanlage ist leise.", beispielUe: "El aire acondicionado es silencioso." },
    { id: "bv1808", de: "der Safe",         es: "la caja fuerte",           wortart: "sustantivo", beispiel: "Der Safe ist im Schrank.", beispielUe: "La caja fuerte está en el armario." },
    { id: "bv1809", de: "die Aussicht",     es: "la vista",                 wortart: "sustantivo", beispiel: "Das Zimmer hat eine schöne Aussicht.", beispielUe: "La habitación tiene buena vista." },
    { id: "bv1810", de: "barrierefrei",     es: "accesible, sin barreras",  wortart: "adjetivo", beispiel: "Wir haben barrierefreie Zimmer.", beispielUe: "Tenemos habitaciones accesibles." }
  ],
  saetze: [
    { id: "bs1801", de: "Möchten Sie ein Einzelzimmer oder ein Doppelzimmer?", es: "¿Desea una habitación individual o doble?" },
    { id: "bs1802", de: "Das Zimmer hat einen Balkon und Blick auf den Park.", es: "La habitación tiene balcón y vista al parque." },
    { id: "bs1803", de: "Alle Zimmer sind mit Klimaanlage ausgestattet.", es: "Todas las habitaciones tienen aire acondicionado." },
    { id: "bs1804", de: "Der Safe befindet sich im Schrank.", es: "La caja fuerte está en el armario." },
    { id: "bs1805", de: "Wir haben auch barrierefreie Zimmer im Erdgeschoss.", es: "También tenemos habitaciones accesibles en la planta baja." }
  ],
  grammatik: {
    id: "bg18", titel: "Recursos: describir y ofrecer una habitación",
    erklaerung: `
      <p>Describir una habitación son tres frases, siempre las mismas, y dos estructuras
      que conviene tener automatizadas: <strong>haben</strong> + acusativo y
      <strong>sein mit</strong> + dativo.</p>
      <table>
        <tr><th>Estructura</th><th>Ejemplo</th></tr>
        <tr><td>Das Zimmer <strong>hat</strong> + acusativo</td><td>Das Zimmer hat <strong>einen</strong> Balkon.</td></tr>
        <tr><td>Das Zimmer ist <strong>mit</strong> + dativo</td><td>Das Zimmer ist <strong>mit einer</strong> Klimaanlage ausgestattet.</td></tr>
        <tr><td>Das Zimmer <strong>liegt</strong> + lugar</td><td>Das Zimmer liegt <strong>im</strong> dritten Stock.</td></tr>
      </table>
      <div class="merke">Cuidado con el masculino: <em>der Balkon</em> se convierte en
      <strong>einen</strong> Balkon detrás de <em>haben</em>, porque es acusativo. Femenino
      y neutro no cambian: <em>eine Dusche</em>, <em>ein Bad</em>. Es el error número uno de
      los hispanohablantes al describir habitaciones.</div>
      <p>Las plantas del edificio, de abajo arriba:</p>
      <ul>
        <li><strong>das Erdgeschoss</strong> — planta baja (no es «el primer piso»)</li>
        <li><strong>der erste Stock</strong> / <strong>die erste Etage</strong> — primer piso</li>
        <li><strong>das Untergeschoss</strong> — sótano</li>
      </ul>
      <p>Ofrecer alternativas cuando lo que piden no está libre: <em>Ein Zimmer mit Balkon
      haben wir leider nicht mehr, aber ich kann Ihnen ein Zimmer mit Blick auf den Garten
      anbieten.</em></p>`,
    uebungen: [
      { id: "bg1801", satz: "Möchten Sie ein Zimmer ___ Balkon?", loesung: "mit", tipps: ["mit", "ohne", "für"], hinweis: "mit = con", ue: "¿Desea una habitación con balcón?" },
      { id: "bg1802", satz: "Das Zimmer hat ___ Balkon.", loesung: "einen", tipps: ["einen", "ein", "eine"], hinweis: "haben + acusativo, masculino", ue: "La habitación tiene balcón." },
      { id: "bg1803", satz: "Alle Zimmer sind mit ___ ausgestattet.", loesung: "Klimaanlage", tipps: ["Klimaanlage", "Balkon", "Safe"], hinweis: "el aire acondicionado", ue: "Todas las habitaciones tienen aire acondicionado." },
      { id: "bg1804", satz: "Wir haben auch ___ Zimmer.", loesung: "barrierefreie", tipps: ["barrierefreie", "barrierefrei", "barrierefreies"], hinweis: "plural sin artículo: terminación -e", ue: "También tenemos habitaciones accesibles." },
      { id: "bg1805", satz: "Ein ___ kostet 95 Euro pro Nacht.", loesung: "Einzelzimmer", tipps: ["Einzelzimmer", "Doppelzimmer", "Suite"], hinweis: "para una persona", ue: "Una individual cuesta 95 euros por noche." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 19, niveau: "B1", thema: "El check-in",
  vokabeln: [
    { id: "bv1901", de: "die Anmeldung",    es: "el registro",               wortart: "sustantivo", beispiel: "Die Anmeldung dauert fünf Minuten.", beispielUe: "El registro dura cinco minutos." },
    { id: "bv1902", de: "der Ausweis",      es: "el documento de identidad", wortart: "sustantivo", beispiel: "Darf ich Ihren Ausweis sehen?", beispielUe: "¿Me permite su documento?" },
    { id: "bv1903", de: "der Meldeschein",  es: "la ficha de registro",      wortart: "sustantivo", beispiel: "Bitte füllen Sie den Meldeschein aus.", beispielUe: "Rellene la ficha, por favor." },
    { id: "bv1904", de: "die Ankunft",      es: "la llegada",                wortart: "sustantivo", beispiel: "Ihre Ankunft ist für heute notiert.", beispielUe: "Su llegada está anotada para hoy." },
    { id: "bv1905", de: "die Unterschrift", es: "la firma",                  wortart: "sustantivo", beispiel: "Hier fehlt noch Ihre Unterschrift.", beispielUe: "Aquí falta su firma." },
    { id: "bv1906", de: "der Schlüssel",    es: "la llave",                  wortart: "sustantivo", beispiel: "Der Schlüssel ist an der Rezeption.", beispielUe: "La llave está en recepción." },
    { id: "bv1907", de: "die Zimmerkarte",  es: "la tarjeta de habitación",  wortart: "sustantivo", beispiel: "Hier ist Ihre Zimmerkarte.", beispielUe: "Aquí tiene su tarjeta." },
    { id: "bv1908", de: "einchecken",       es: "hacer el check-in",         wortart: "verbo separable", beispiel: "Sie können ab 15 Uhr einchecken.", beispielUe: "Pueden registrarse a partir de las 15." },
    { id: "bv1909", de: "die Buchung",      es: "la reserva",                wortart: "sustantivo", beispiel: "Auf welchen Namen läuft die Buchung?", beispielUe: "¿A nombre de quién está la reserva?" },
    { id: "bv1910", de: "inbegriffen",      es: "incluido",                  wortart: "adjetivo", beispiel: "Das Frühstück ist inbegriffen.", beispielUe: "El desayuno está incluido." }
  ],
  saetze: [
    { id: "bs1901", de: "Herzlich willkommen, auf welchen Namen läuft die Buchung?", es: "Bienvenido, ¿a nombre de quién está la reserva?" },
    { id: "bs1902", de: "Darf ich bitte Ihren Ausweis sehen?", es: "¿Me permite su documento de identidad?" },
    { id: "bs1903", de: "Bitte unterschreiben Sie hier unten.", es: "Firme aquí abajo, por favor." },
    { id: "bs1904", de: "Das Frühstück ist im Preis inbegriffen.", es: "El desayuno está incluido en el precio." },
    { id: "bs1905", de: "Hier ist Ihre Zimmerkarte, Zimmer 214.", es: "Aquí tiene su tarjeta, habitación 214." }
  ],
  grammatik: {
    id: "bg19", titel: "Recursos: hacer un check-in completo",
    erklaerung: `
      <p>El check-in es un guion de seis pasos. Si lo sigues siempre igual, no olvidas nada
      y además ganas seguridad al hablar.</p>
      <table>
        <tr><th>Paso</th><th>Frase</th></tr>
        <tr><td>1. Saludar</td><td>Herzlich willkommen im Hotel Adler!</td></tr>
        <tr><td>2. Buscar la reserva</td><td><strong>Auf welchen Namen läuft die Buchung?</strong></td></tr>
        <tr><td>3. Documento</td><td><strong>Darf ich bitte Ihren Ausweis sehen?</strong></td></tr>
        <tr><td>4. Firma</td><td><strong>Bitte unterschreiben Sie hier.</strong></td></tr>
        <tr><td>5. Informar</td><td>Das Frühstück ist von 7 bis 10 Uhr, <strong>im Preis inbegriffen</strong>.</td></tr>
        <tr><td>6. Entregar la llave</td><td>Hier ist Ihre Zimmerkarte. <strong>Ich wünsche Ihnen einen angenehmen Aufenthalt!</strong></td></tr>
      </table>
      <div class="merke">La fórmula de despedida del check-in se dice siempre entera:
      <strong>Ich wünsche Ihnen einen angenehmen Aufenthalt.</strong> Es tan fija como
      <em>guten Appetit</em> en el restaurante.</div>
      <p>La hora se dice en formato de 24 horas en todo contexto profesional:</p>
      <ul>
        <li>15:00 → <strong>fünfzehn Uhr</strong> (no <em>drei Uhr nachmittags</em>)</li>
        <li>15:30 → <strong>fünfzehn Uhr dreißig</strong> o <strong>halb vier</strong></li>
        <li><em>halb vier</em> significa las 15:30, no las 16:30. Es media hora
        <strong>hacia</strong> las cuatro — la trampa favorita del alemán.</li>
      </ul>`,
    uebungen: [
      { id: "bg1901", satz: "___ ich bitte Ihren Ausweis sehen?", loesung: "Darf", tipps: ["Darf", "Muss", "Kann"], hinweis: "la fórmula de cortesía", ue: "¿Me permite su documento?" },
      { id: "bg1902", satz: "Bitte ___ Sie hier unten.", loesung: "unterschreiben", tipps: ["unterschreiben", "unterschreibt", "unterschrieben"], hinweis: "imperativo de cortesía con Sie", ue: "Firme aquí abajo, por favor." },
      { id: "bg1903", satz: "Das Frühstück ist im Preis ___.", loesung: "inbegriffen", tipps: ["inbegriffen", "begriffen", "eingebaut"], hinweis: "incluido", ue: "El desayuno está incluido en el precio." },
      { id: "bg1904", satz: "Hier ist Ihre ___, Zimmer 214.", loesung: "Zimmerkarte", tipps: ["Zimmerkarte", "Speisekarte", "Kreditkarte"], hinweis: "la tarjeta que abre la habitación", ue: "Aquí tiene su tarjeta, habitación 214." },
      { id: "bg1905", satz: "Auf welchen Namen ___ die Buchung?", loesung: "läuft", tipps: ["läuft", "laufen", "gelaufen"], hinweis: "sie + laufen: a → ä", ue: "¿A nombre de quién está la reserva?" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 20, niveau: "B1", thema: "Check-out y factura",
  vokabeln: [
    { id: "bv2001", de: "auschecken",      es: "hacer el check-out",      wortart: "verbo separable", beispiel: "Wann möchten Sie auschecken?", beispielUe: "¿Cuándo desea hacer el check-out?" },
    { id: "bv2002", de: "die Abreise",     es: "la salida",               wortart: "sustantivo", beispiel: "Ihre Abreise ist morgen.", beispielUe: "Su salida es mañana." },
    { id: "bv2003", de: "die Minibar",     es: "el minibar",              wortart: "sustantivo", beispiel: "Die Minibar wird extra berechnet.", beispielUe: "El minibar se cobra aparte." },
    { id: "bv2004", de: "die Übernachtung", es: "la noche de alojamiento", wortart: "sustantivo", beispiel: "Zwei Übernachtungen mit Frühstück.", beispielUe: "Dos noches con desayuno." },
    { id: "bv2005", de: "der Zuschlag",    es: "el recargo",              wortart: "sustantivo", beispiel: "Für den Hund gibt es einen Zuschlag.", beispielUe: "Por el perro hay un recargo." },
    { id: "bv2006", de: "die Quittung",    es: "el recibo",               wortart: "sustantivo", beispiel: "Möchten Sie eine Quittung?", beispielUe: "¿Desea un recibo?" },
    { id: "bv2007", de: "die Position",    es: "la partida de la factura", wortart: "sustantivo", beispiel: "Diese Position erkläre ich Ihnen.", beispielUe: "Le explico esta partida." },
    { id: "bv2008", de: "der Aufenthalt",  es: "la estancia",             wortart: "sustantivo", beispiel: "Wie war Ihr Aufenthalt?", beispielUe: "¿Qué tal su estancia?" },
    { id: "bv2009", de: "das Gepäckdepot", es: "la consigna de equipaje", wortart: "sustantivo", beispiel: "Das Gepäckdepot ist kostenlos.", beispielUe: "La consigna es gratuita." },
    { id: "bv2010", de: "spätestens",      es: "a más tardar",            wortart: "adverbio", beispiel: "Check-out ist spätestens um elf.", beispielUe: "El check-out es a las once a más tardar." }
  ],
  saetze: [
    { id: "bs2001", de: "Der Check-out ist spätestens um elf Uhr.", es: "El check-out es a las once como máximo." },
    { id: "bs2002", de: "Haben Sie etwas aus der Minibar genommen?", es: "¿Consumió algo del minibar?" },
    { id: "bs2003", de: "Zwei Übernachtungen mit Frühstück, das macht 230 Euro.", es: "Dos noches con desayuno, son 230 euros." },
    { id: "bs2004", de: "Möchten Sie die Quittung auf die Firma?", es: "¿Desea el recibo a nombre de la empresa?" },
    { id: "bs2005", de: "Gern können Sie Ihr Gepäck bis nachmittags bei uns lassen.", es: "Con gusto puede dejar su equipaje con nosotros hasta la tarde." }
  ],
  grammatik: {
    id: "bg20", titel: "Recursos: explicar una factura",
    erklaerung: `
      <p>La factura es el momento en que más preguntas recibe la recepción. Hay que saber
      nombrar cada partida y, sobre todo, explicarla sin ponerse a la defensiva.</p>
      <table>
        <tr><th>Partida</th><th>Cómo se dice</th></tr>
        <tr><td>alojamiento</td><td>zwei <strong>Übernachtungen</strong> à 95 Euro</td></tr>
        <tr><td>desayuno</td><td>Frühstück, <strong>pro Person und Nacht</strong></td></tr>
        <tr><td>minibar</td><td>Minibar, <strong>laut Verbrauch</strong></td></tr>
        <tr><td>recargo</td><td><strong>Zuschlag</strong> für das Haustier</td></tr>
        <tr><td>tasa turística</td><td>die <strong>Kurtaxe</strong> / die City Tax</td></tr>
      </table>
      <div class="merke">Cuando el huésped protesta por una partida, primero se comprueba,
      nunca se justifica: <em>Einen Moment, ich schaue nach.</em> Y si el hotel se
      equivocó: <em>Sie haben völlig recht, das nehmen wir selbstverständlich herunter.</em></div>
      <p>La preposición <strong>pro</strong> se usa sin artículo y es fija:</p>
      <ul>
        <li><strong>pro Nacht</strong> — por noche</li>
        <li><strong>pro Person</strong> — por persona</li>
        <li><strong>pro Zimmer</strong> — por habitación</li>
      </ul>
      <p>Y la pregunta de cierre que todo hotel quiere oír: <em>Wie war Ihr Aufenthalt bei
      uns?</em> — abre la puerta a una buena reseña, y te avisa de un problema antes de que
      llegue a internet.</p>`,
    uebungen: [
      { id: "bg2001", satz: "Bis wann müssen wir ___?", loesung: "auschecken", tipps: ["auschecken", "ausgecheckt", "checke aus"], hinweis: "infinitivo detrás de müssen", ue: "¿Hasta cuándo tenemos que hacer el check-out?" },
      { id: "bg2002", satz: "Der Check-out ist ___ um elf Uhr.", loesung: "spätestens", tipps: ["spätestens", "später", "spät"], hinweis: "a más tardar", ue: "El check-out es a las once a más tardar." },
      { id: "bg2003", satz: "Haben Sie etwas aus der ___ genommen?", loesung: "Minibar", tipps: ["Minibar", "Quittung", "Position"], hinweis: "el pequeño frigorífico del cuarto", ue: "¿Consumió algo del minibar?" },
      { id: "bg2004", satz: "Diese ___ auf der Rechnung erkläre ich Ihnen.", loesung: "Position", tipps: ["Position", "Portion", "Quittung"], hinweis: "una línea de la factura", ue: "Le explico esta partida de la factura." },
      { id: "bg2005", satz: "Das Zimmer kostet 95 Euro ___ Nacht.", loesung: "pro", tipps: ["pro", "für", "in"], hinweis: "pro + sustantivo sin artículo", ue: "La habitación cuesta 95 euros por noche." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 21, niveau: "B1", thema: "Housekeeping: limpieza y ropa",
  vokabeln: [
    { id: "bv2101", de: "die Zimmerreinigung", es: "la limpieza de habitaciones", wortart: "sustantivo", beispiel: "Die Zimmerreinigung beginnt um neun.", beispielUe: "La limpieza empieza a las nueve." },
    { id: "bv2102", de: "die Bettwäsche",      es: "la ropa de cama",            wortart: "sustantivo", beispiel: "Die Bettwäsche wird täglich gewechselt.", beispielUe: "La ropa de cama se cambia a diario." },
    { id: "bv2103", de: "das Handtuch",        es: "la toalla",                  wortart: "sustantivo", beispiel: "Im Bad fehlt ein Handtuch.", beispielUe: "En el baño falta una toalla." },
    { id: "bv2104", de: "der Staubsauger",     es: "la aspiradora",              wortart: "sustantivo", beispiel: "Der Staubsauger steht im Flur.", beispielUe: "La aspiradora está en el pasillo." },
    { id: "bv2105", de: "das Putzmittel",      es: "el producto de limpieza",    wortart: "sustantivo", beispiel: "Die Putzmittel sind im Wagen.", beispielUe: "Los productos están en el carro." },
    { id: "bv2106", de: "die Fundsache",       es: "el objeto perdido",          wortart: "sustantivo", beispiel: "Fundsachen kommen an die Rezeption.", beispielUe: "Los objetos perdidos van a recepción." },
    { id: "bv2107", de: "wechseln",            es: "cambiar",                    wortart: "verbo", beispiel: "Ich wechsle die Handtücher.", beispielUe: "Cambio las toallas." },
    { id: "bv2108", de: "der Zimmerstatus",    es: "el estado de la habitación", wortart: "sustantivo", beispiel: "Ich melde den Zimmerstatus.", beispielUe: "Informo el estado de la habitación." },
    { id: "bv2109", de: "beziehen",            es: "hacer la cama",              wortart: "verbo", beispiel: "Das Bett muss neu bezogen werden.", beispielUe: "Hay que cambiar la cama." },
    { id: "bv2110", de: "nachfüllen",          es: "reponer",                    wortart: "verbo separable", beispiel: "Bitte füllen Sie die Seife nach.", beispielUe: "Reponga el jabón, por favor." }
  ],
  saetze: [
    { id: "bs2101", de: "Zimmer 212 ist fertig und sauber.", es: "La habitación 212 está lista y limpia." },
    { id: "bs2102", de: "Ich wechsle die Handtücher und die Bettwäsche.", es: "Cambio las toallas y la ropa de cama." },
    { id: "bs2103", de: "Im Bad fehlt noch Seife.", es: "En el baño todavía falta jabón." },
    { id: "bs2104", de: "Ich habe eine Brille im Zimmer gefunden.", es: "Encontré unas gafas en la habitación." },
    { id: "bs2105", de: "Der Gast möchte nicht gestört werden.", es: "El huésped no quiere que lo molesten." }
  ],
  grammatik: {
    id: "bg21", titel: "Recursos: informar el estado de una habitación",
    erklaerung: `
      <p>Housekeeping y recepción trabajan con un vocabulario común muy corto. Estos cuatro
      estados se comunican decenas de veces al día.</p>
      <table>
        <tr><th>Estado</th><th>Alemán</th><th>Significado</th></tr>
        <tr><td>listo</td><td>Zimmer 212 ist <strong>fertig</strong>.</td><td>limpia, se puede entregar</td></tr>
        <tr><td>ocupado</td><td>Das Zimmer ist <strong>belegt</strong>.</td><td>hay un huésped dentro</td></tr>
        <tr><td>libre</td><td>Das Zimmer ist <strong>frei</strong>.</td><td>sin ocupar</td></tr>
        <tr><td>no molestar</td><td>Das Schild <strong>Bitte nicht stören</strong> hängt.</td><td>no se entra</td></tr>
      </table>
      <div class="merke">Una regla absoluta: con el cartel <em>Bitte nicht stören</em> no se
      entra nunca, ni para dejar toallas. Se informa a recepción: <em>Zimmer 305 konnte ich
      nicht reinigen, das Schild hing an der Tür.</em></div>
      <p>Los objetos perdidos tienen su propio protocolo, y conviene decirlo con estas
      palabras exactas:</p>
      <ul>
        <li><strong>Ich habe etwas gefunden</strong> — encontré algo</li>
        <li><strong>in Zimmer 212, im Bad / unter dem Bett</strong> — dónde</li>
        <li><strong>Ich bringe es an die Rezeption</strong> — dónde se entrega</li>
      </ul>
      <p>Y la pasiva que domina este ámbito, porque no importa quién hace la tarea:
      <em>Die Bettwäsche <strong>wird</strong> täglich <strong>gewechselt</strong>. Das Bad
      <strong>wird</strong> gründlich <strong>gereinigt</strong>.</em></p>`,
    uebungen: [
      { id: "bg2101", satz: "Ich ___ die Handtücher.", loesung: "wechsle", tipps: ["wechsle", "wechseln", "gewechselt"], hinweis: "ich + verbo en -e", ue: "Cambio las toallas." },
      { id: "bg2102", satz: "Das Bett muss frisch ___ werden.", loesung: "bezogen", tipps: ["bezogen", "beziehen", "bezieht"], hinweis: "pasiva con modal: participio + werden", ue: "Hay que cambiar la cama." },
      { id: "bg2103", satz: "Zimmer 212 ist ___ und kann vergeben werden.", loesung: "fertig", tipps: ["fertig", "belegt", "gestört"], hinweis: "limpia y lista", ue: "La 212 está lista y se puede entregar." },
      { id: "bg2104", satz: "Ich habe eine ___ im Zimmer gefunden.", loesung: "Fundsache", tipps: ["Fundsache", "Bettwäsche", "Putzmittel"], hinweis: "objeto olvidado por el huésped", ue: "Encontré un objeto perdido en la habitación." },
      { id: "bg2105", satz: "Bitte ___ Sie die Seife nach. (nachfüllen)", loesung: "füllen", tipps: ["füllen", "füllt", "gefüllt"], hinweis: "separable: nach va al final", ue: "Reponga el jabón, por favor." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 22, niveau: "B1", thema: "Peticiones del huésped e información",
  vokabeln: [
    { id: "bv2201", de: "die Auskunft",         es: "la información",     wortart: "sustantivo", beispiel: "Ich gebe Ihnen gern Auskunft.", beispielUe: "Con gusto le informo." },
    { id: "bv2202", de: "der Weg",              es: "el camino",          wortart: "sustantivo", beispiel: "Ich zeige Ihnen den Weg.", beispielUe: "Le muestro el camino." },
    { id: "bv2203", de: "geradeaus",            es: "recto",              wortart: "adverbio", beispiel: "Gehen Sie immer geradeaus.", beispielUe: "Siga siempre recto." },
    { id: "bv2204", de: "die Kreuzung",         es: "el cruce",           wortart: "sustantivo", beispiel: "An der Kreuzung links.", beispielUe: "En el cruce a la izquierda." },
    { id: "bv2205", de: "die Haltestelle",      es: "la parada",          wortart: "sustantivo", beispiel: "Die Haltestelle ist dort drüben.", beispielUe: "La parada está allí enfrente." },
    { id: "bv2206", de: "die Sehenswürdigkeit", es: "el lugar de interés", wortart: "sustantivo", beispiel: "Die Altstadt ist die schönste Sehenswürdigkeit.", beispielUe: "El casco antiguo es lo más bonito." },
    { id: "bv2207", de: "empfehlenswert",       es: "recomendable",       wortart: "adjetivo", beispiel: "Das Museum ist sehr empfehlenswert.", beispielUe: "El museo es muy recomendable." },
    { id: "bv2208", de: "zu Fuß",               es: "a pie",              wortart: "expresión", beispiel: "Das sind zehn Minuten zu Fuß.", beispielUe: "Son diez minutos a pie." },
    { id: "bv2209", de: "die Umgebung",         es: "los alrededores",    wortart: "sustantivo", beispiel: "In der Umgebung gibt es viel zu sehen.", beispielUe: "En los alrededores hay mucho que ver." },
    { id: "bv2210", de: "buchen",               es: "reservar",           wortart: "verbo", beispiel: "Soll ich Ihnen Karten buchen?", beispielUe: "¿Le reservo entradas?" }
  ],
  saetze: [
    { id: "bs2201", de: "Gehen Sie geradeaus bis zur Kreuzung.", es: "Siga recto hasta el cruce." },
    { id: "bs2202", de: "Die Haltestelle ist fünf Minuten zu Fuß entfernt.", es: "La parada está a cinco minutos a pie." },
    { id: "bs2203", de: "Soll ich Ihnen ein Taxi bestellen?", es: "¿Le pido un taxi?" },
    { id: "bs2204", de: "Das Museum kann ich Ihnen sehr empfehlen.", es: "El museo se lo puedo recomendar mucho." },
    { id: "bs2205", de: "Möchten Sie einen Tisch im Restaurant buchen?", es: "¿Desea reservar mesa en el restaurante?" }
  ],
  grammatik: {
    id: "bg22", titel: "Recursos: indicar el camino",
    erklaerung: `
      <p>Indicar un camino se hace con imperativo de cortesía y cuatro preposiciones. Con
      este bloque puedes explicar casi cualquier ruta sin dudar.</p>
      <table>
        <tr><th>Alemán</th><th>Español</th></tr>
        <tr><td>Gehen Sie <strong>geradeaus</strong>.</td><td>Siga recto.</td></tr>
        <tr><td>Gehen Sie <strong>bis zur</strong> Kreuzung.</td><td>Vaya hasta el cruce.</td></tr>
        <tr><td><strong>An der</strong> Ampel <strong>links</strong>.</td><td>En el semáforo a la izquierda.</td></tr>
        <tr><td><strong>Nach</strong> hundert Metern <strong>rechts</strong>.</td><td>A los cien metros a la derecha.</td></tr>
        <tr><td>Das Museum ist <strong>auf der rechten Seite</strong>.</td><td>El museo está a mano derecha.</td></tr>
      </table>
      <div class="merke">Dos parejas que se confunden: <strong>links / rechts</strong> son
      direcciones («a la izquierda»), <strong>auf der linken / rechten Seite</strong> es
      posición («en el lado izquierdo»). Y <strong>bis zu</strong> siempre lleva dativo:
      <em>bis zur Kreuzung</em> (die), <em>bis zum Bahnhof</em> (der).</div>
      <p>Calcular distancias con dos expresiones fijas:</p>
      <ul>
        <li><strong>Das sind zehn Minuten zu Fuß.</strong> — diez minutos andando</li>
        <li><strong>Das ist etwa einen Kilometer entfernt.</strong> — está a un kilómetro</li>
      </ul>
      <p>Y ofrecer siempre el paso siguiente, que es lo que distingue a un buen recepcionista:
      <em>Soll ich Ihnen den Weg auf der Karte einzeichnen?</em> o <em>Möchten Sie, dass ich
      ein Taxi bestelle?</em></p>`,
    uebungen: [
      { id: "bg2201", satz: "Gehen Sie hier ___ und dann links.", loesung: "geradeaus", tipps: ["geradeaus", "rechts", "zurück"], hinweis: "recto", ue: "Siga recto aquí y luego a la izquierda." },
      { id: "bg2202", satz: "Die Haltestelle ist fünf Minuten ___ Fuß.", loesung: "zu", tipps: ["zu", "mit", "auf"], hinweis: "expresión fija: zu Fuß", ue: "La parada está a cinco minutos a pie." },
      { id: "bg2203", satz: "Soll ich Ihnen ein Taxi ___?", loesung: "bestellen", tipps: ["bestellen", "bestellt", "bestelle"], hinweis: "infinitivo detrás de soll", ue: "¿Le pido un taxi?" },
      { id: "bg2204", satz: "Das Museum ist sehr ___.", loesung: "empfehlenswert", tipps: ["empfehlenswert", "empfehlen", "empfohlen"], hinweis: "adjetivo: recomendable", ue: "El museo es muy recomendable." },
      { id: "bg2205", satz: "Gehen Sie ___ zur Kreuzung.", loesung: "bis", tipps: ["bis", "nach", "an"], hinweis: "bis zu + dativo", ue: "Vaya hasta el cruce." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 23, niveau: "B1", thema: "Problemas en el hotel",
  vokabeln: [
    { id: "bv2301", de: "die Störung",       es: "la molestia, la avería",   wortart: "sustantivo", beispiel: "Entschuldigen Sie die Störung.", beispielUe: "Disculpe la molestia." },
    { id: "bv2302", de: "defekt",            es: "averiado",                 wortart: "adjetivo", beispiel: "Der Fernseher ist defekt.", beispielUe: "El televisor está averiado." },
    { id: "bv2303", de: "der Lärm",          es: "el ruido",                 wortart: "sustantivo", beispiel: "Der Lärm kommt von der Straße.", beispielUe: "El ruido viene de la calle." },
    { id: "bv2304", de: "die Heizung",       es: "la calefacción",           wortart: "sustantivo", beispiel: "Die Heizung wird nicht warm.", beispielUe: "La calefacción no calienta." },
    { id: "bv2305", de: "reparieren",        es: "reparar",                  wortart: "verbo", beispiel: "Der Hausmeister repariert es heute.", beispielUe: "El encargado lo repara hoy." },
    { id: "bv2306", de: "umbuchen",          es: "cambiar la reserva",       wortart: "verbo separable", beispiel: "Wir buchen Sie gern um.", beispielUe: "Con gusto le cambiamos la reserva." },
    { id: "bv2307", de: "das Ersatzzimmer",  es: "la habitación alternativa", wortart: "sustantivo", beispiel: "Wir haben ein Ersatzzimmer frei.", beispielUe: "Tenemos una habitación alternativa libre." },
    { id: "bv2308", de: "weiterleiten",      es: "transmitir, pasar",        wortart: "verbo separable", beispiel: "Ich leite das weiter.", beispielUe: "Lo paso al departamento." },
    { id: "bv2309", de: "dringend",          es: "urgente",                  wortart: "adjetivo", beispiel: "Das ist dringend.", beispielUe: "Eso es urgente." },
    { id: "bv2310", de: "sich kümmern um",   es: "ocuparse de",              wortart: "verbo reflexivo", beispiel: "Ich kümmere mich darum.", beispielUe: "Me ocupo de eso." }
  ],
  saetze: [
    { id: "bs2301", de: "Die Heizung in Zimmer 301 ist defekt.", es: "La calefacción de la 301 está averiada." },
    { id: "bs2302", de: "Ich leite das sofort an den Hausmeister weiter.", es: "Lo paso enseguida al encargado de mantenimiento." },
    { id: "bs2303", de: "Wir können Ihnen ein anderes Zimmer anbieten.", es: "Podemos ofrecerle otra habitación." },
    { id: "bs2304", de: "Es tut mir leid, dass Sie schlecht geschlafen haben.", es: "Lamento que haya dormido mal." },
    { id: "bs2305", de: "Ich kümmere mich persönlich darum.", es: "Me ocupo personalmente." }
  ],
  grammatik: {
    id: "bg23", titel: "Recursos: recoger un problema y pasarlo",
    erklaerung: `
      <p>Ante un problema, recepción hace siempre lo mismo: anota, se disculpa, actúa e
      informa. Lo que el huésped no soporta es quedarse sin respuesta.</p>
      <table>
        <tr><th>Paso</th><th>Frase</th></tr>
        <tr><td>1. Anotar</td><td>Was genau ist passiert? Ich <strong>notiere</strong> das.</td></tr>
        <tr><td>2. Disculparse</td><td><strong>Das tut mir leid</strong>, das hätte nicht passieren dürfen.</td></tr>
        <tr><td>3. Actuar</td><td>Ich <strong>leite</strong> das sofort <strong>weiter</strong> / Ich <strong>kümmere mich</strong> darum.</td></tr>
        <tr><td>4. Informar</td><td>Ich <strong>melde mich</strong> in zehn Minuten bei Ihnen.</td></tr>
      </table>
      <div class="merke"><strong>sich kümmern</strong> lleva siempre la preposición
      <em>um</em>: <em>Ich kümmere mich <strong>um</strong> das Problem.</em> Cuando el
      objeto ya se nombró, se sustituye por <strong>darum</strong>: <em>Ich kümmere mich
      <strong>darum</strong>.</em> Esa palabra sola vale como respuesta completa.</div>
      <p>Cómo se dice que algo no funciona — tres formas, de la más neutra a la más técnica:</p>
      <ul>
        <li><strong>funktioniert nicht</strong> — no funciona (siempre correcto)</li>
        <li><strong>ist defekt</strong> — está averiado (lenguaje de mantenimiento)</li>
        <li><strong>ist kaputt</strong> — está roto (coloquial, mejor no ante el huésped)</li>
      </ul>
      <p>Y la frase de compensación, que solo se dice si tienes permiso para ofrecerla:
      <em>Als Entschuldigung möchten wir Ihnen das Frühstück anbieten.</em></p>`,
    uebungen: [
      { id: "bg2301", satz: "Die Heizung im Zimmer ist ___.", loesung: "defekt", tipps: ["defekt", "dringend", "fertig"], hinweis: "averiada", ue: "La calefacción de la habitación está averiada." },
      { id: "bg2302", satz: "Ich ___ mich sofort darum.", loesung: "kümmere", tipps: ["kümmere", "kümmern", "gekümmert"], hinweis: "reflexivo con ich", ue: "Me ocupo enseguida." },
      { id: "bg2303", satz: "Ich leite das an den Hausmeister ___.", loesung: "weiter", tipps: ["weiter", "vor", "nach"], hinweis: "separable: weiterleiten", ue: "Se lo paso al encargado de mantenimiento." },
      { id: "bg2304", satz: "Wir können Ihnen ein ___ anbieten.", loesung: "Ersatzzimmer", tipps: ["Ersatzzimmer", "Einzelzimmer", "Gepäckdepot"], hinweis: "otra habitación a cambio", ue: "Podemos ofrecerle otra habitación." },
      { id: "bg2305", satz: "Das ist ___, ich rufe sofort an.", loesung: "dringend", tipps: ["dringend", "defekt", "ruhig"], hinweis: "urgente", ue: "Eso es urgente, llamo enseguida." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 24, niveau: "B1", thema: "Desayuno y servicio de habitaciones",
  vokabeln: [
    { id: "bv2401", de: "das Frühstücksbuffet", es: "el bufé de desayuno",         wortart: "sustantivo", beispiel: "Das Frühstücksbuffet ist im Erdgeschoss.", beispielUe: "El bufé está en la planta baja." },
    { id: "bv2402", de: "das Rührei",           es: "el huevo revuelto",           wortart: "sustantivo", beispiel: "Das Rührei ist frisch.", beispielUe: "El huevo revuelto está recién hecho." },
    { id: "bv2403", de: "das Brötchen",         es: "el panecillo",                wortart: "sustantivo", beispiel: "Die Brötchen kommen um sechs.", beispielUe: "Los panecillos llegan a las seis." },
    { id: "bv2404", de: "die Marmelade",        es: "la mermelada",                wortart: "sustantivo", beispiel: "Wir haben vier Sorten Marmelade.", beispielUe: "Tenemos cuatro tipos de mermelada." },
    { id: "bv2405", de: "der Zimmerservice",    es: "el servicio de habitaciones", wortart: "sustantivo", beispiel: "Der Zimmerservice bringt es hoch.", beispielUe: "El servicio de habitaciones lo sube." },
    { id: "bv2406", de: "die Kanne",            es: "la jarra",                    wortart: "sustantivo", beispiel: "Eine Kanne Kaffee, bitte.", beispielUe: "Una jarra de café, por favor." },
    { id: "bv2407", de: "der Aufschnitt",       es: "los fiambres",                wortart: "sustantivo", beispiel: "Der Aufschnitt liegt links.", beispielUe: "Los fiambres están a la izquierda." },
    { id: "bv2408", de: "nachlegen",            es: "reponer comida",              wortart: "verbo separable", beispiel: "Ich lege frische Brötchen nach.", beispielUe: "Repongo panecillos frescos." },
    { id: "bv2409", de: "warmhalten",           es: "mantener caliente",           wortart: "verbo separable", beispiel: "Wir halten das Essen warm.", beispielUe: "Mantenemos la comida caliente." },
    { id: "bv2410", de: "abholen",              es: "recoger",                     wortart: "verbo separable", beispiel: "Ich hole das Tablett später ab.", beispielUe: "Recojo la bandeja más tarde." }
  ],
  saetze: [
    { id: "bs2401", de: "Das Frühstücksbuffet ist von sieben bis zehn Uhr geöffnet.", es: "El bufé de desayuno está abierto de siete a diez." },
    { id: "bs2402", de: "Möchten Sie Kaffee oder lieber Tee?", es: "¿Desea café o prefiere té?" },
    { id: "bs2403", de: "Ich lege gleich frische Brötchen nach.", es: "Enseguida repongo panecillos frescos." },
    { id: "bs2404", de: "Der Zimmerservice bringt das Frühstück aufs Zimmer.", es: "El servicio de habitaciones sube el desayuno." },
    { id: "bs2405", de: "Soll ich das Tablett später abholen?", es: "¿Recojo la bandeja más tarde?" }
  ],
  grammatik: {
    id: "bg24", titel: "Recursos: el bufé y el servicio de habitaciones",
    erklaerung: `
      <p>El desayuno es el turno con más contacto directo con el huésped. Casi todo se
      resuelve con horarios, ofrecimientos y verbos separables.</p>
      <table>
        <tr><th>Función</th><th>Frase</th></tr>
        <tr><td>horario</td><td>Das Frühstück ist <strong>von</strong> sieben <strong>bis</strong> zehn Uhr.</td></tr>
        <tr><td>ofrecer</td><td><strong>Möchten Sie</strong> Kaffee <strong>oder lieber</strong> Tee?</td></tr>
        <tr><td>reponer</td><td>Ich <strong>lege</strong> frische Brötchen <strong>nach</strong>.</td></tr>
        <tr><td>recoger</td><td>Ich <strong>hole</strong> das Tablett später <strong>ab</strong>.</td></tr>
      </table>
      <div class="merke">Los verbos separables de este turno tienen todos la misma
      mecánica: la parte conjugada va en la posición dos y el prefijo se va al final de la
      frase. <em>Ich <strong>lege</strong> in fünf Minuten frisches Obst <strong>nach</strong>.</em>
      Cuanto más larga la frase, más lejos queda el prefijo — pero nunca desaparece.</div>
      <p>Preposiciones de tiempo que se repiten a diario:</p>
      <ul>
        <li><strong>von ... bis ...</strong> — de siete a diez</li>
        <li><strong>ab</strong> sieben Uhr — a partir de las siete</li>
        <li><strong>bis</strong> zehn Uhr — hasta las diez</li>
        <li><strong>zwischen</strong> sieben <strong>und</strong> zehn — entre siete y diez</li>
      </ul>
      <p>Para el servicio de habitaciones, la frase de entrega es fija: <em>Ihr Frühstück,
      guten Appetit! Soll ich das Tablett später abholen oder stellen Sie es vor die Tür?</em></p>`,
    uebungen: [
      { id: "bg2401", satz: "Das Frühstück gibt es von sieben ___ zehn Uhr.", loesung: "bis", tipps: ["bis", "ab", "zwischen"], hinweis: "von ... bis ...", ue: "El desayuno es de siete a diez." },
      { id: "bg2402", satz: "Bitte ___ Sie Brötchen nach. (nachlegen)", loesung: "legen", tipps: ["legen", "legt", "gelegt"], hinweis: "separable: nach va al final", ue: "Reponga panecillos, por favor." },
      { id: "bg2403", satz: "Möchten Sie eine ___ Kaffee?", loesung: "Kanne", tipps: ["Kanne", "Flasche", "Tasse"], hinweis: "el recipiente grande de café", ue: "¿Desea una jarra de café?" },
      { id: "bg2404", satz: "Der ___ bringt das Essen aufs Zimmer.", loesung: "Zimmerservice", tipps: ["Zimmerservice", "Zimmerstatus", "Aufschnitt"], hinweis: "el servicio de habitaciones", ue: "El servicio de habitaciones sube la comida." },
      { id: "bg2405", satz: "Ich hole das Tablett später ___.", loesung: "ab", tipps: ["ab", "auf", "an"], hinweis: "separable: abholen", ue: "Recojo la bandeja más tarde." }
    ]
  }
});
