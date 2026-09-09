/* Día 51–60 · Nivel A2 · Cierre del nivel */

LEKTION('de', {
  tag: 51, niveau: "A2", thema: "Viajar",
  vokabeln: [
    { id: "v5101", de: "die Reise buchen", es: "reservar el viaje", wortart: "expresión", beispiel: "Wir haben die Reise gebucht.", beispielUe: "Reservamos el viaje." },
    { id: "v5102", de: "das Gepäck",     es: "el equipaje",    wortart: "sustantivo", beispiel: "Mein Gepäck ist weg.", beispielUe: "Mi equipaje se perdió." },
    { id: "v5103", de: "der Koffer",     es: "la maleta",      wortart: "sustantivo", beispiel: "Der Koffer ist schwer.", beispielUe: "La maleta es pesada." },
    { id: "v5104", de: "umsteigen",      es: "hacer transbordo", wortart: "verbo separable", beispiel: "Wir müssen in Köln umsteigen.", beispielUe: "Tenemos que hacer transbordo en Colonia." },
    { id: "v5105", de: "die Verspätung", es: "el retraso",     wortart: "sustantivo", beispiel: "Der Zug hat Verspätung.", beispielUe: "El tren tiene retraso." },
    { id: "v5106", de: "die Unterkunft", es: "el alojamiento", wortart: "sustantivo", beispiel: "Die Unterkunft war gut.", beispielUe: "El alojamiento estuvo bien." },
    { id: "v5107", de: "die Fahrkarte",  es: "el boleto",      wortart: "sustantivo", beispiel: "Ich kaufe eine Fahrkarte.", beispielUe: "Compro un boleto." },
    { id: "v5108", de: "die Sehenswürdigkeit", es: "el lugar de interés", wortart: "sustantivo", beispiel: "Wir besuchen die Sehenswürdigkeiten.", beispielUe: "Visitamos los lugares de interés." },
    { id: "v5109", de: "sich verlaufen", es: "perderse",       wortart: "verbo reflexivo", beispiel: "Wir haben uns verlaufen.", beispielUe: "Nos perdimos." },
    { id: "v5110", de: "der Ausflug",    es: "la excursión",   wortart: "sustantivo", beispiel: "Wir machen einen Ausflug.", beispielUe: "Hacemos una excursión." }
  ],
  saetze: [
    { id: "s5101", de: "Der Zug, mit dem wir fahren, ist voll.", es: "El tren en el que vamos está lleno." },
    { id: "s5102", de: "Das Hotel, in dem wir wohnen, ist neu.", es: "El hotel en el que nos hospedamos es nuevo." },
    { id: "s5103", de: "Die Stadt, in die wir fahren, ist klein.", es: "La ciudad a la que vamos es pequeña." },
    { id: "s5104", de: "Der Freund, mit dem ich reise, ist Peruaner.", es: "El amigo con el que viajo es peruano." },
    { id: "s5105", de: "Das ist der Ort, wo ich geboren bin.", es: "Ese es el lugar donde nací." }
  ],
  grammatik: {
    id: "g51", titel: "Relativos con preposición",
    erklaerung: `
      <p>Cuando el relativo lleva preposición, esta va <strong>delante</strong> — nunca al
      final como en inglés.</p>
      <div class="merke"><strong>El orden:</strong> preposición + pronombre relativo.<br>
      <em>Der Zug, <strong>mit dem</strong> wir fahren.</em><br>
      No <s>Der Zug, den wir mit fahren</s>.</div>
      <p><strong>El caso lo decide la preposición</strong>, exactamente como en cualquier
      otra frase:</p>
      <table>
        <tr><th>Preposición</th><th>Caso</th><th>Ejemplo</th></tr>
        <tr><td><em>mit, von, zu, bei</em></td><td>dativo</td><td>der Freund, <em>mit dem</em> ich reise</td></tr>
        <tr><td><em>für, ohne, durch</em></td><td>acusativo</td><td>das Geschenk, <em>für das</em> ich danke</td></tr>
        <tr><td><em>in</em> (posición)</td><td>dativo</td><td>das Hotel, <em>in dem</em> wir wohnen</td></tr>
        <tr><td><em>in</em> (movimiento)</td><td>acusativo</td><td>die Stadt, <em>in die</em> wir fahren</td></tr>
      </table>
      <p>Fíjate en las dos últimas filas: la misma preposición, distinto caso — es la
      regla wo/wohin del día 29, aplicada al relativo.</p>
      <div class="merke"><strong>Alternativa fácil para lugares: <em>wo</em>.</strong><br>
      <em>Das Hotel, <strong>in dem</strong> wir wohnen…</em><br>
      = <em>Das Hotel, <strong>wo</strong> wir wohnen…</em><br>
      Con lugares las dos formas son correctas y <em>wo</em> es mucho más sencilla. En el
      habla cotidiana se usa casi siempre.</div>
      <p><strong>Y para preguntar por cosas</strong> se puede usar wo(r)- + preposición,
      como el día 37:<br>
      <em>Das Thema, <strong>worüber</strong> wir sprechen…</em> =
      <em>Das Thema, <strong>über das</strong> wir sprechen…</em></p>`,
    uebungen: [
      { id: "g5101", satz: "Der Zug, mit ___ wir fahren, ist voll.", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "mit → dativo", ue: "El tren en el que vamos está lleno." },
      { id: "g5102", satz: "Das Hotel, in ___ wir wohnen, ist neu.", loesung: "dem", tipps: ["dem", "das", "den"], hinweis: "posición → dativo", ue: "El hotel en el que nos hospedamos es nuevo." },
      { id: "g5103", satz: "Die Stadt, in ___ wir fahren, ist klein.", loesung: "die", tipps: ["die", "der", "dem"], hinweis: "movimiento → acusativo", ue: "La ciudad a la que vamos es pequeña." },
      { id: "g5104", satz: "Der Freund, mit ___ ich reise, ist nett.", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "mit → dativo", ue: "El amigo con el que viajo es amable." },
      { id: "g5105", satz: "Das ist der Ort, ___ ich geboren bin. (donde)", loesung: "wo", tipps: ["wo", "den", "wohin"], hinweis: "lugar → wo", ue: "Ese es el lugar donde nací." }
    ]
  }
});

LEKTION('de', {
  tag: 52, niveau: "A2", thema: "Trabajo y solicitud",
  vokabeln: [
    { id: "v5201", de: "die Bewerbung",  es: "la solicitud",   wortart: "sustantivo", beispiel: "Ich schicke die Bewerbung ab.", beispielUe: "Envío la solicitud." },
    { id: "v5202", de: "der Lebenslauf", es: "el currículum",  wortart: "sustantivo", beispiel: "Mein Lebenslauf ist fertig.", beispielUe: "Mi currículum está listo." },
    { id: "v5203", de: "das Vorstellungsgespräch", es: "la entrevista", wortart: "sustantivo", beispiel: "Ich habe ein Vorstellungsgespräch.", beispielUe: "Tengo una entrevista." },
    { id: "v5204", de: "die Erfahrung",  es: "la experiencia", wortart: "sustantivo", beispiel: "Ich habe viel Erfahrung.", beispielUe: "Tengo mucha experiencia." },
    { id: "v5205", de: "die Ausbildung", es: "la formación",   wortart: "sustantivo", beispiel: "Ich mache eine Ausbildung.", beispielUe: "Hago una formación." },
    { id: "v5206", de: "einstellen",     es: "contratar",      wortart: "verbo separable", beispiel: "Sie stellen zwei Leute ein.", beispielUe: "Contratan a dos personas." },
    { id: "v5207", de: "kündigen",       es: "renunciar",      wortart: "verbo", beispiel: "Ich habe gekündigt.", beispielUe: "Renuncié." },
    { id: "v5208", de: "die Vollzeit",   es: "el tiempo completo", wortart: "sustantivo", beispiel: "Ich arbeite Vollzeit.", beispielUe: "Trabajo tiempo completo." },
    { id: "v5209", de: "der Vertrag",    es: "el contrato",    wortart: "sustantivo", beispiel: "Der Vertrag läuft ein Jahr.", beispielUe: "El contrato dura un año." },
    { id: "v5210", de: "die Kenntnisse", es: "los conocimientos", wortart: "sustantivo", beispiel: "Ich habe gute Deutschkenntnisse.", beispielUe: "Tengo buenos conocimientos de alemán." }
  ],
  saetze: [
    { id: "s5201", de: "Je mehr ich übe, desto besser werde ich.", es: "Cuanto más practico, mejor me vuelvo." },
    { id: "s5202", de: "Er ist nicht nur nett, sondern auch klug.", es: "Él no solo es amable, sino también inteligente." },
    { id: "s5203", de: "Entweder rufe ich an oder ich schreibe.", es: "O llamo o escribo." },
    { id: "s5204", de: "Weder er noch sie kommen morgen.",   es: "Ni él ni ella vienen mañana." },
    { id: "s5205", de: "Sowohl die Arbeit als auch das Team gefallen mir.", es: "Tanto el trabajo como el equipo me gustan." }
  ],
  grammatik: {
    id: "g52", titel: "Conectores dobles",
    erklaerung: `
      <p>Pares de palabras que enlazan dos elementos. Son el rasgo que distingue un texto
      A2 avanzado de uno básico.</p>
      <table>
        <tr><th>Par</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td><em>nicht nur … sondern auch</em></td><td>no solo… sino también</td>
            <td>Er ist <em>nicht nur</em> nett, <em>sondern auch</em> klug.</td></tr>
        <tr><td><em>entweder … oder</em></td><td>o… o</td>
            <td><em>Entweder</em> rufe ich an <em>oder</em> ich schreibe.</td></tr>
        <tr><td><em>weder … noch</em></td><td>ni… ni</td>
            <td><em>Weder</em> er <em>noch</em> sie kommen.</td></tr>
        <tr><td><em>sowohl … als auch</em></td><td>tanto… como</td>
            <td><em>Sowohl</em> er <em>als auch</em> sie kommen.</td></tr>
        <tr><td><em>je … desto</em></td><td>cuanto más… más</td>
            <td><em>Je</em> mehr ich übe, <em>desto</em> besser werde ich.</td></tr>
        <tr><td><em>zwar … aber</em></td><td>si bien… pero</td>
            <td>Es ist <em>zwar</em> teuer, <em>aber</em> gut.</td></tr>
      </table>
      <div class="merke"><strong>La estructura especial de <em>je … desto</em>:</strong><br>
      La parte con <em>je</em> es una <strong>subordinada</strong> — el verbo va al final.<br>
      La parte con <em>desto</em> empieza por <em>desto</em>, así que el verbo va detrás.<br>
      <em><strong>Je</strong> mehr ich <strong>übe</strong>, <strong>desto besser
      werde</strong> ich.</em><br>
      Es la única de la lista que cambia el orden de palabras.</div>
      <p><strong>Cuidado con <em>weder … noch</em>:</strong> ya es negativo, así que no
      lleva <em>nicht</em>.<br>
      <em>Weder er noch sie <strong>kommen</strong>.</em> — nunca
      <s>kommen nicht</s>.</p>
      <p><strong>Y una nota sobre <em>sondern</em>:</strong> solo aparece después de una
      negación, como vimos el día 19. Por eso <em>nicht nur … sondern auch</em> funciona:
      el <em>nicht</em> está en la primera parte.</p>`,
    uebungen: [
      { id: "g5201", satz: "Er ist nicht nur nett, ___ auch klug.", loesung: "sondern", tipps: ["sondern", "aber", "oder"], hinweis: "tras negación", ue: "No solo es amable, sino también inteligente." },
      { id: "g5202", satz: "___ rufe ich an oder ich schreibe.", loesung: "Entweder", tipps: ["Entweder", "Weder", "Sowohl"], hinweis: "o… o", ue: "O llamo o escribo." },
      { id: "g5203", satz: "___ er noch sie kommen morgen.", loesung: "Weder", tipps: ["Weder", "Entweder", "Sowohl"], hinweis: "ni… ni", ue: "Ni él ni ella vienen mañana." },
      { id: "g5204", satz: "Je mehr ich ___ (üben), desto besser werde ich.", loesung: "übe", tipps: ["übe", "üben", "übe ich"], hinweis: "je → verbo al final", ue: "Cuanto más practico, mejor me vuelvo." },
      { id: "g5205", satz: "___ die Arbeit als auch das Team gefallen mir.", loesung: "Sowohl", tipps: ["Sowohl", "Weder", "Entweder"], hinweis: "tanto… como", ue: "Tanto el trabajo como el equipo me gustan." }
    ]
  }
});

LEKTION('de', {
  tag: 53, niveau: "A2", thema: "Salud y bienestar",
  vokabeln: [
    { id: "v5301", de: "die Beschwerden", es: "las molestias", wortart: "sustantivo", beispiel: "Ich habe Beschwerden.", beispielUe: "Tengo molestias." },
    { id: "v5302", de: "sich untersuchen lassen", es: "hacerse revisar", wortart: "expresión", beispiel: "Ich lasse mich untersuchen.", beispielUe: "Me hago revisar." },
    { id: "v5303", de: "die Behandlung", es: "el tratamiento", wortart: "sustantivo", beispiel: "Die Behandlung hilft.", beispielUe: "El tratamiento ayuda." },
    { id: "v5304", de: "das Rezept",     es: "la receta médica", wortart: "sustantivo", beispiel: "Der Arzt gibt mir ein Rezept.", beispielUe: "El médico me da una receta." },
    { id: "v5305", de: "sich erholen",   es: "recuperarse",    wortart: "verbo reflexivo", beispiel: "Erhol dich gut.", beispielUe: "Recupérate bien." },
    { id: "v5306", de: "sich bewegen",   es: "moverse",        wortart: "verbo reflexivo", beispiel: "Man muss sich bewegen.", beispielUe: "Hay que moverse." },
    { id: "v5307", de: "die Ernährung",  es: "la alimentación", wortart: "sustantivo", beispiel: "Gesunde Ernährung ist wichtig.", beispielUe: "La alimentación sana es importante." },
    { id: "v5308", de: "vermeiden",      es: "evitar",         wortart: "verbo", beispiel: "Ich vermeide Zucker.", beispielUe: "Evito el azúcar." },
    { id: "v5309", de: "die Krankenkasse", es: "el seguro médico", wortart: "sustantivo", beispiel: "Die Krankenkasse zahlt das.", beispielUe: "El seguro paga eso." },
    { id: "v5310", de: "krankschreiben", es: "dar incapacidad", wortart: "verbo separable", beispiel: "Der Arzt hat mich krankgeschrieben.", beispielUe: "El médico me dio incapacidad." }
  ],
  saetze: [
    { id: "s5301", de: "Ich lasse mein Auto reparieren.",    es: "Mando reparar mi carro." },
    { id: "s5302", de: "Lass mich das machen!",              es: "¡Déjame hacer eso!" },
    { id: "s5303", de: "Er lässt sich die Haare schneiden.", es: "Se manda cortar el pelo." },
    { id: "s5304", de: "Ich höre die Kinder spielen.",       es: "Oigo jugar a los niños." },
    { id: "s5305", de: "Sie sieht ihn kommen.",              es: "Ella lo ve venir." }
  ],
  grammatik: {
    id: "g53", titel: "El verbo lassen",
    erklaerung: `
      <p><em>lassen</em> es uno de los verbos más útiles del alemán y tiene tres
      significados que el español expresa de formas muy distintas.</p>
      <table>
        <tr><th>Significado</th><th>Ejemplo</th><th>Español</th></tr>
        <tr><td>dejar (permitir)</td><td><em>Lass mich das machen!</em></td><td>¡Déjame hacer eso!</td></tr>
        <tr><td>mandar hacer</td><td><em>Ich lasse mein Auto reparieren.</em></td><td>Mando reparar mi carro.</td></tr>
        <tr><td>dejar (olvidar)</td><td><em>Ich habe den Schlüssel zu Hause gelassen.</em></td><td>Dejé la llave en casa.</td></tr>
      </table>
      <div class="merke"><strong>El uso más importante: mandar hacer algo.</strong><br>
      <em>Ich <strong>lasse</strong> mein Auto <strong>reparieren</strong>.</em><br>
      No lo reparo yo — hago que otro lo repare. El español necesita «mandar», «hacer que»
      o simplemente el contexto: «Reparo mi carro» (en el taller).</div>
      <p><strong>Construcción:</strong> <em>lassen</em> conjugado + infinitivo al final,
      <strong>sin <em>zu</em></strong>. Es como los modales.</p>
      <table>
        <tr><td>ich <em>lasse</em></td><td>wir <em>lassen</em></td></tr>
        <tr><td>du <em>lässt</em></td><td>ihr <em>lasst</em></td></tr>
        <tr><td>er <em>lässt</em></td><td>sie <em>lassen</em></td></tr>
      </table>
      <p><strong>Otros verbos que funcionan igual</strong> — infinitivo sin <em>zu</em>:</p>
      <ul>
        <li><em>sehen</em>: <em>Ich <strong>sehe</strong> ihn <strong>kommen</strong>.</em>
            (Lo veo venir.)</li>
        <li><em>hören</em>: <em>Ich <strong>höre</strong> die Kinder
            <strong>spielen</strong>.</em> (Oigo jugar a los niños.)</li>
        <li><em>gehen</em>: <em>Ich <strong>gehe</strong> <strong>schwimmen</strong>.</em>
            (Voy a nadar.)</li>
      </ul>
      <div class="merke"><strong>En Perfekt</strong> estos verbos hacen algo raro: en lugar
      del participio se repite el infinitivo.<br>
      <em>Ich habe mein Auto reparieren <strong>lassen</strong>.</em> (no <s>gelassen</s>)<br>
      <em>Ich habe ihn kommen <strong>sehen</strong>.</em> (no <s>gesehen</s>)<br>
      Se llama «doble infinitivo» y es una particularidad que hay que conocer.</div>`,
    uebungen: [
      { id: "g5301", satz: "Ich ___ mein Auto reparieren. (lassen)", loesung: "lasse", tipps: ["lasse", "lässt", "lassen"], hinweis: "ich → ?", ue: "Mando reparar mi carro." },
      { id: "g5302", satz: "Er ___ sich die Haare schneiden. (lassen)", loesung: "lässt", tipps: ["lässt", "lasst", "lasse"], hinweis: "er → con Umlaut", ue: "Se manda cortar el pelo." },
      { id: "g5303", satz: "Ich höre die Kinder ___ (spielen).", loesung: "spielen", tipps: ["spielen", "zu spielen", "gespielt"], hinweis: "sin zu", ue: "Oigo jugar a los niños." },
      { id: "g5304", satz: "Ich habe mein Auto reparieren ___. (lassen, Perfekt)", loesung: "lassen", tipps: ["lassen", "gelassen", "lässt"], hinweis: "doble infinitivo", ue: "Mandé reparar mi carro." },
      { id: "g5305", satz: "___ mich das machen! (lassen, Imperativ du)", loesung: "Lass", tipps: ["Lass", "Lasse", "Lässt"], hinweis: "imperativo", ue: "¡Déjame hacer eso!" }
    ]
  }
});

LEKTION('de', {
  tag: 54, niveau: "A2", thema: "Tecnología",
  vokabeln: [
    { id: "v5401", de: "das Gerät",      es: "el aparato",     wortart: "sustantivo", beispiel: "Das Gerät funktioniert nicht.", beispielUe: "El aparato no funciona." },
    { id: "v5402", de: "herunterladen",  es: "descargar",      wortart: "verbo separable", beispiel: "Ich lade die App herunter.", beispielUe: "Descargo la aplicación." },
    { id: "v5403", de: "speichern",      es: "guardar",        wortart: "verbo", beispiel: "Hast du das gespeichert?", beispielUe: "¿Guardaste eso?" },
    { id: "v5404", de: "das Passwort",   es: "la contraseña",  wortart: "sustantivo", beispiel: "Ich habe das Passwort vergessen.", beispielUe: "Olvidé la contraseña." },
    { id: "v5405", de: "die Datei",      es: "el archivo",     wortart: "sustantivo", beispiel: "Die Datei ist zu groß.", beispielUe: "El archivo es muy grande." },
    { id: "v5406", de: "aktualisieren",  es: "actualizar",     wortart: "verbo", beispiel: "Ich muss das System aktualisieren.", beispielUe: "Tengo que actualizar el sistema." },
    { id: "v5407", de: "die Verbindung", es: "la conexión",    wortart: "sustantivo", beispiel: "Die Verbindung ist schlecht.", beispielUe: "La conexión es mala." },
    { id: "v5408", de: "der Bildschirm", es: "la pantalla",    wortart: "sustantivo", beispiel: "Der Bildschirm ist kaputt.", beispielUe: "La pantalla está rota." },
    { id: "v5409", de: "einschalten",    es: "encender",       wortart: "verbo separable", beispiel: "Schalt das Licht ein.", beispielUe: "Enciende la luz." },
    { id: "v5410", de: "ausschalten",    es: "apagar",         wortart: "verbo separable", beispiel: "Schalt den Computer aus.", beispielUe: "Apaga la computadora." }
  ],
  saetze: [
    { id: "s5401", de: "Das ist ein sehr gut funktionierendes Gerät.", es: "Ese es un aparato que funciona muy bien." },
    { id: "s5402", de: "Die heruntergeladene Datei ist zu groß.", es: "El archivo descargado es demasiado grande." },
    { id: "s5403", de: "Das gespeicherte Dokument ist weg.", es: "El documento guardado desapareció." },
    { id: "s5404", de: "Der lachende Mann ist mein Kollege.", es: "El hombre que ríe es mi colega." },
    { id: "s5405", de: "Die geschriebene Nachricht kam nie an.", es: "El mensaje escrito nunca llegó." }
  ],
  grammatik: {
    id: "g54", titel: "Participios como adjetivo",
    erklaerung: `
      <p>Los dos participios alemanes pueden funcionar como adjetivos, delante del
      sustantivo — igual que en español «el archivo <em>descargado</em>».</p>
      <table>
        <tr><th>Participio</th><th>Formación</th><th>Sentido</th><th>Ejemplo</th></tr>
        <tr><td>Partizip I</td><td>infinitivo + <em>-d</em></td><td>activo, en curso</td>
            <td>der <em>lachend<strong>e</strong></em> Mann (el hombre que ríe)</td></tr>
        <tr><td>Partizip II</td><td>el del Perfekt</td><td>pasivo, terminado</td>
            <td>die <em>geschrieben<strong>e</strong></em> Nachricht (el mensaje escrito)</td></tr>
      </table>
      <div class="merke"><strong>La diferencia en una línea:</strong><br>
      Partizip I → <strong>quien hace</strong> la acción: <em>das schlafende Kind</em>
      (el niño que duerme)<br>
      Partizip II → <strong>lo que recibió</strong> la acción: <em>das gekochte Essen</em>
      (la comida cocinada)</div>
      <p><strong>Y llevan terminación de adjetivo</strong>, con las mismas reglas del día
      31–33:</p>
      <ul>
        <li><em>der lachend<strong>e</strong> Mann</em> (tras artículo determinado)</li>
        <li><em>ein lachend<strong>er</strong> Mann</em> (tras artículo indeterminado)</li>
        <li><em>mit dem lachend<strong>en</strong> Mann</em> (dativo)</li>
      </ul>
      <p><strong>El Partizip I no existe en español</strong> como adjetivo. Se traduce con
      una oración de relativo:</p>
      <table>
        <tr><th>Alemán</th><th>Español</th></tr>
        <tr><td><em>das weinende Kind</em></td><td>el niño que llora</td></tr>
        <tr><td><em>die kommende Woche</em></td><td>la semana que viene</td></tr>
        <tr><td><em>ein funktionierendes Gerät</em></td><td>un aparato que funciona</td></tr>
      </table>
      <div class="merke"><strong>Muy útil para leer:</strong> el alemán escrito comprime así
      oraciones enteras. <em>Die gestern von uns bestellte Ware</em> = «la mercancía que
      encargamos ayer». En B1 y B2 verás construcciones cada vez más largas de este tipo.</div>`,
    uebungen: [
      { id: "g5401", satz: "Der lachend___ Mann ist mein Kollege.", loesung: "e", tipps: ["e", "er", "en"], hinweis: "tras der, nominativo", ue: "El hombre que ríe es mi colega." },
      { id: "g5402", satz: "Die heruntergeladen___ Datei ist groß.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "tras die, nominativo", ue: "El archivo descargado es grande." },
      { id: "g5403", satz: "Ein funktionierend___ Gerät wäre gut.", loesung: "es", tipps: ["es", "e", "er"], hinweis: "das Gerät, tras ein", ue: "Un aparato que funcione sería bueno." },
      { id: "g5404", satz: "Das gespeichert___ Dokument ist weg.", loesung: "e", tipps: ["e", "en", "es"], hinweis: "tras das, nominativo", ue: "El documento guardado desapareció." },
      { id: "g5405", satz: "Mit dem lachend___ Kind war es schön.", loesung: "en", tipps: ["en", "e", "em"], hinweis: "dativo", ue: "Con el niño que reía fue bonito." }
    ]
  }
});

LEKTION('de', {
  tag: 55, niveau: "A2", thema: "Educación y aprendizaje",
  vokabeln: [
    { id: "v5501", de: "die Universität", es: "la universidad", wortart: "sustantivo", beispiel: "Ich studiere an der Universität.", beispielUe: "Estudio en la universidad." },
    { id: "v5502", de: "das Studium",    es: "la carrera",     wortart: "sustantivo", beispiel: "Mein Studium dauert vier Jahre.", beispielUe: "Mi carrera dura cuatro años." },
    { id: "v5503", de: "die Vorlesung",  es: "la clase magistral", wortart: "sustantivo", beispiel: "Die Vorlesung war interessant.", beispielUe: "La clase fue interesante." },
    { id: "v5504", de: "die Kenntnis",   es: "el conocimiento", wortart: "sustantivo", beispiel: "Er hat gute Kenntnisse.", beispielUe: "Él tiene buenos conocimientos." },
    { id: "v5505", de: "sich weiterbilden", es: "capacitarse", wortart: "verbo reflexivo", beispiel: "Ich bilde mich weiter.", beispielUe: "Me capacito." },
    { id: "v5506", de: "der Kurs",       es: "el curso",       wortart: "sustantivo", beispiel: "Der Kurs beginnt im Mai.", beispielUe: "El curso empieza en mayo." },
    { id: "v5507", de: "das Zeugnis",    es: "el certificado", wortart: "sustantivo", beispiel: "Ich brauche mein Zeugnis.", beispielUe: "Necesito mi certificado." },
    { id: "v5508", de: "sich konzentrieren", es: "concentrarse", wortart: "verbo reflexivo", beispiel: "Ich kann mich nicht konzentrieren.", beispielUe: "No puedo concentrarme." },
    { id: "v5509", de: "auswendig lernen", es: "aprender de memoria", wortart: "expresión", beispiel: "Ich lerne die Wörter auswendig.", beispielUe: "Aprendo las palabras de memoria." },
    { id: "v5510", de: "das Wissen",     es: "el saber",       wortart: "sustantivo", beispiel: "Wissen ist Macht.", beispielUe: "El saber es poder." }
  ],
  saetze: [
    { id: "s5501", de: "Der Kurs findet jeden Montag statt.", es: "El curso tiene lugar cada lunes." },
    { id: "s5502", de: "Ich habe an der Prüfung teilgenommen.", es: "Participé en el examen." },
    { id: "s5503", de: "Wir treffen eine Entscheidung.",     es: "Tomamos una decisión." },
    { id: "s5504", de: "Sie hat mir eine Frage gestellt.",   es: "Ella me hizo una pregunta." },
    { id: "s5505", de: "Das kommt zur Sprache.",             es: "Eso saldrá a colación." }
  ],
  grammatik: {
    id: "g55", titel: "Combinaciones fijas de nombre y verbo",
    erklaerung: `
      <p>El alemán tiene muchas expresiones donde el verbo casi no aporta significado —
      todo está en el sustantivo. Se llaman <em>Funktionsverbgefüge</em> y son muy
      frecuentes en textos formales.</p>
      <table>
        <tr><th>Expresión</th><th>Significado</th><th>Verbo simple</th></tr>
        <tr><td><em>eine Frage stellen</em></td><td>hacer una pregunta</td><td>= fragen</td></tr>
        <tr><td><em>eine Entscheidung treffen</em></td><td>tomar una decisión</td><td>= entscheiden</td></tr>
        <tr><td><em>Rücksicht nehmen</em></td><td>tener consideración</td><td>—</td></tr>
        <tr><td><em>in Frage kommen</em></td><td>ser una opción</td><td>—</td></tr>
        <tr><td><em>zur Verfügung stehen</em></td><td>estar disponible</td><td>—</td></tr>
        <tr><td><em>statt|finden</em></td><td>tener lugar</td><td>—</td></tr>
        <tr><td><em>teil|nehmen an</em></td><td>participar en</td><td>= mitmachen</td></tr>
        <tr><td><em>Bescheid geben</em></td><td>avisar</td><td>= informieren</td></tr>
      </table>
      <div class="merke"><strong>Por qué importan:</strong> no se pueden traducir palabra
      por palabra. «Hacer una pregunta» no es <s>eine Frage machen</s>, sino <em>eine Frage
      <strong>stellen</strong></em> (literalmente «poner una pregunta»). Cada una hay que
      aprenderla entera.</div>
      <p><strong>Los verbos que aparecen una y otra vez:</strong></p>
      <ul>
        <li><em>stellen</em>: eine Frage stellen, einen Antrag stellen (presentar una
            solicitud)</li>
        <li><em>treffen</em>: eine Entscheidung treffen, eine Wahl treffen, Vorbereitungen
            treffen</li>
        <li><em>nehmen</em>: Rücksicht nehmen, Abschied nehmen (despedirse), teilnehmen</li>
        <li><em>geben</em>: Bescheid geben, Auskunft geben (dar información)</li>
        <li><em>machen</em>: einen Fehler machen, Urlaub machen, Sport machen</li>
      </ul>
      <div class="merke"><strong>Nota de aprendizaje:</strong> estas expresiones se aprenden
      como vocabulario, no como gramática. Cuando encuentres una, apúntala completa — con
      su artículo y su verbo.</div>`,
    uebungen: [
      { id: "g5501", satz: "Sie hat mir eine Frage ___. (stellen)", loesung: "gestellt", tipps: ["gestellt", "gemacht", "gegeben"], hinweis: "eine Frage + ?", ue: "Ella me hizo una pregunta." },
      { id: "g5502", satz: "Wir müssen eine Entscheidung ___. (treffen)", loesung: "treffen", tipps: ["treffen", "machen", "nehmen"], hinweis: "Entscheidung + ?", ue: "Tenemos que tomar una decisión." },
      { id: "g5503", satz: "Der Kurs ___ jeden Montag statt. (stattfinden)", loesung: "findet", tipps: ["findet", "stattfindet", "steht"], hinweis: "separable", ue: "El curso tiene lugar cada lunes." },
      { id: "g5504", satz: "Ich habe an der Prüfung ___. (teilnehmen)", loesung: "teilgenommen", tipps: ["teilgenommen", "genommen teil", "teilnehmen"], hinweis: "participio separable", ue: "Participé en el examen." },
      { id: "g5505", satz: "Gib mir bitte ___. (avisar)", loesung: "Bescheid", tipps: ["Bescheid", "Antwort", "Auskunft"], hinweis: "Bescheid geben", ue: "Avísame, por favor." }
    ]
  }
});

LEKTION('de', {
  tag: 56, niveau: "A2", thema: "Contar historias",
  vokabeln: [
    { id: "v5601", de: "geschehen",      es: "suceder",        wortart: "verbo", beispiel: "Was ist geschehen?", beispielUe: "¿Qué sucedió?" },
    { id: "v5602", de: "plötzlich",      es: "de repente",     wortart: "adverbio", beispiel: "Plötzlich klingelte es.", beispielUe: "De repente sonó el timbre." },
    { id: "v5603", de: "der Zufall",     es: "la casualidad",  wortart: "sustantivo", beispiel: "Das war ein Zufall.", beispielUe: "Fue una casualidad." },
    { id: "v5604", de: "erschrecken",    es: "asustarse",      wortart: "verbo", beispiel: "Ich bin erschrocken.", beispielUe: "Me asusté." },
    { id: "v5605", de: "bemerken",       es: "notar",          wortart: "verbo", beispiel: "Ich habe nichts bemerkt.", beispielUe: "No noté nada." },
    { id: "v5606", de: "verschwinden",   es: "desaparecer",    wortart: "verbo", beispiel: "Der Schlüssel ist verschwunden.", beispielUe: "La llave desapareció." },
    { id: "v5607", de: "auffallen",      es: "llamar la atención", wortart: "verbo separable", beispiel: "Das ist mir aufgefallen.", beispielUe: "Eso me llamó la atención." },
    { id: "v5608", de: "sich herausstellen", es: "resultar",   wortart: "verbo reflexivo", beispiel: "Es stellte sich heraus, dass...", beispielUe: "Resultó que…" },
    { id: "v5609", de: "schließlich",    es: "finalmente",     wortart: "adverbio", beispiel: "Schließlich ging alles gut.", beispielUe: "Finalmente todo salió bien." },
    { id: "v5610", de: "der Verlauf",    es: "el transcurso",  wortart: "sustantivo", beispiel: "Im Verlauf des Tages.", beispielUe: "En el transcurso del día." }
  ],
  saetze: [
    { id: "s5601", de: "Ich ging nach Hause, weil es spät war.", es: "Me fui a casa porque era tarde." },
    { id: "s5602", de: "Als ich ankam, regnete es stark.",   es: "Cuando llegué, llovía fuerte." },
    { id: "s5603", de: "Er sagte nichts und ging einfach weg.", es: "No dijo nada y simplemente se fue." },
    { id: "s5604", de: "Wir wussten nicht, was passiert war.", es: "No sabíamos qué había pasado." },
    { id: "s5605", de: "Nachdem alle gegangen waren, räumte ich auf.", es: "Después de que todos se fueron, ordené." }
  ],
  grammatik: {
    id: "g56", titel: "El Präteritum de los verbos normales",
    erklaerung: `
      <p>Hasta ahora usabas el Präteritum solo con <em>sein, haben</em> y los modales.
      En textos escritos — cuentos, novelas, noticias — se usa con todos los verbos.</p>
      <p><strong>Verbos regulares:</strong> raíz + <em>-te</em> + terminación</p>
      <table>
        <tr><th></th><th>machen</th><th>arbeiten</th></tr>
        <tr><td>ich</td><td>mach<em>te</em></td><td>arbeit<em>ete</em></td></tr>
        <tr><td>du</td><td>mach<em>test</em></td><td>arbeit<em>etest</em></td></tr>
        <tr><td>er/sie/es</td><td>mach<em>te</em></td><td>arbeit<em>ete</em></td></tr>
        <tr><td>wir</td><td>mach<em>ten</em></td><td>arbeit<em>eten</em></td></tr>
        <tr><td>ihr</td><td>mach<em>tet</em></td><td>arbeit<em>etet</em></td></tr>
        <tr><td>sie/Sie</td><td>mach<em>ten</em></td><td>arbeit<em>eten</em></td></tr>
      </table>
      <p><strong>Verbos irregulares:</strong> cambian la vocal y no llevan <em>-te</em></p>
      <table>
        <tr><th>Infinitivo</th><th>Präteritum</th><th>Infinitivo</th><th>Präteritum</th></tr>
        <tr><td>gehen</td><td><em>ging</em></td><td>kommen</td><td><em>kam</em></td></tr>
        <tr><td>sehen</td><td><em>sah</em></td><td>geben</td><td><em>gab</em></td></tr>
        <tr><td>finden</td><td><em>fand</em></td><td>nehmen</td><td><em>nahm</em></td></tr>
        <tr><td>sprechen</td><td><em>sprach</em></td><td>bleiben</td><td><em>blieb</em></td></tr>
        <tr><td>schreiben</td><td><em>schrieb</em></td><td>wissen</td><td><em>wusste</em></td></tr>
      </table>
      <div class="merke"><strong>La forma <em>ich</em> y <em>er</em> es la misma y no lleva
      terminación:</strong> <em>ich ging</em>, <em>er ging</em>. Las demás personas añaden
      <em>-st, -en, -t, -en</em>.</div>
      <div class="merke"><strong>Cuándo usar cuál — la regla práctica:</strong><br>
      <strong>Hablando</strong> → Perfekt: <em>Ich <strong>bin</strong> nach Hause
      <strong>gegangen</strong>.</em><br>
      <strong>Escribiendo</strong> (relatos, informes) → Präteritum: <em>Ich
      <strong>ging</strong> nach Hause.</em><br>
      Excepción: <em>sein, haben</em> y los modales van en Präteritum también al hablar.</div>
      <p>En el sur de Alemania y en Austria el Perfekt domina aún más; en el norte se oye
      más el Präteritum. Ninguna de las dos es incorrecta.</p>`,
    uebungen: [
      { id: "g5601", satz: "Ich ___ nach Hause. (gehen, Präteritum)", loesung: "ging", tipps: ["ging", "gehte", "gegangen"], hinweis: "irregular", ue: "Me fui a casa." },
      { id: "g5602", satz: "Er ___ nichts. (sagen, Präteritum)", loesung: "sagte", tipps: ["sagte", "sagt", "sagete"], hinweis: "regular", ue: "No dijo nada." },
      { id: "g5603", satz: "Wir ___ nicht, was passiert war. (wissen)", loesung: "wussten", tipps: ["wussten", "wissten", "wüssten"], hinweis: "irregular", ue: "No sabíamos qué había pasado." },
      { id: "g5604", satz: "Sie ___ einen Brief. (schreiben, Präteritum)", loesung: "schrieb", tipps: ["schrieb", "schreibte", "geschrieben"], hinweis: "irregular", ue: "Ella escribió una carta." },
      { id: "g5605", satz: "Ich ___ den ganzen Tag. (arbeiten, Präteritum)", loesung: "arbeitete", tipps: ["arbeitete", "arbeitte", "arbeitet"], hinweis: "raíz en -t → e de apoyo", ue: "Trabajé todo el día." }
    ]
  }
});

LEKTION('de', {
  tag: 57, niveau: "A2", thema: "Comparar y valorar",
  vokabeln: [
    { id: "v5701", de: "der Unterschied", es: "la diferencia", wortart: "sustantivo", beispiel: "Der Unterschied ist klein.", beispielUe: "La diferencia es pequeña." },
    { id: "v5702", de: "ähnlich",        es: "parecido",       wortart: "adjetivo", beispiel: "Die beiden sind sich ähnlich.", beispielUe: "Los dos se parecen." },
    { id: "v5703", de: "vergleichen",    es: "comparar",       wortart: "verbo", beispiel: "Vergleich die Preise!", beispielUe: "¡Compara los precios!" },
    { id: "v5704", de: "der Nachteil",   es: "la desventaja",  wortart: "sustantivo", beispiel: "Das hat auch Nachteile.", beispielUe: "Eso también tiene desventajas." },
    { id: "v5705", de: "bevorzugen",     es: "preferir",       wortart: "verbo", beispiel: "Ich bevorzuge Tee.", beispielUe: "Prefiero el té." },
    { id: "v5706", de: "die Möglichkeit", es: "la posibilidad", wortart: "sustantivo", beispiel: "Es gibt zwei Möglichkeiten.", beispielUe: "Hay dos posibilidades." },
    { id: "v5707", de: "entscheidend",   es: "decisivo",       wortart: "adjetivo", beispiel: "Das ist entscheidend.", beispielUe: "Eso es decisivo." },
    { id: "v5708", de: "im Vergleich zu", es: "en comparación con", wortart: "expresión", beispiel: "Im Vergleich zu früher ist es besser.", beispielUe: "En comparación con antes es mejor." },
    { id: "v5709", de: "einerseits",     es: "por un lado",    wortart: "adverbio", beispiel: "Einerseits ja, andererseits nein.", beispielUe: "Por un lado sí, por otro no." },
    { id: "v5710", de: "andererseits",   es: "por otro lado",  wortart: "adverbio", beispiel: "Andererseits ist es teuer.", beispielUe: "Por otro lado es caro." }
  ],
  saetze: [
    { id: "s5701", de: "Berlin ist die größte Stadt Deutschlands.", es: "Berlín es la ciudad más grande de Alemania." },
    { id: "s5702", de: "Das ist der beste Kaffee der Stadt.", es: "Ese es el mejor café de la ciudad." },
    { id: "s5703", de: "Er arbeitet am schnellsten von allen.", es: "Él trabaja más rápido que todos." },
    { id: "s5704", de: "Je länger ich hier bin, desto besser gefällt es mir.", es: "Cuanto más tiempo estoy aquí, más me gusta." },
    { id: "s5705", de: "Das ist nicht so einfach, wie es aussieht.", es: "Eso no es tan fácil como parece." }
  ],
  grammatik: {
    id: "g57", titel: "El superlativo con adjetivos",
    erklaerung: `
      <p>El comparativo lo conoces del día 21. El superlativo tiene dos formas, según su
      posición en la frase.</p>
      <table>
        <tr><th>Posición</th><th>Forma</th><th>Ejemplo</th></tr>
        <tr><td>delante del sustantivo</td><td>artículo + adjetivo + <em>-ste</em> + terminación</td>
            <td><em>die größt<strong>e</strong> Stadt</em></td></tr>
        <tr><td>después del verbo</td><td><em>am</em> + adjetivo + <em>-sten</em></td>
            <td><em>Berlin ist am größten.</em></td></tr>
      </table>
      <div class="merke"><strong>Cuál usar:</strong><br>
      Si le sigue un sustantivo → forma con artículo: <em>die <strong>schönste</strong>
      Stadt</em><br>
      Si está solo, tras el verbo → forma con <em>am</em>: <em>Diese Stadt ist
      <strong>am schönsten</strong>.</em></div>
      <p><strong>Y el superlativo con artículo lleva terminación de adjetivo</strong>, con
      las reglas del día 31:</p>
      <ul>
        <li><em>der best<strong>e</strong> Kaffee</em> (nominativo)</li>
        <li><em>den best<strong>en</strong> Kaffee</em> (acusativo)</li>
        <li><em>mit dem best<strong>en</strong> Kaffee</em> (dativo)</li>
      </ul>
      <p><strong>La preposición del superlativo es genitivo o <em>von</em>:</strong></p>
      <ul>
        <li><em>die größte Stadt <strong>Deutschlands</strong></em> (genitivo, formal)</li>
        <li><em>die größte Stadt <strong>von</strong> Deutschland</em> (más coloquial)</li>
      </ul>
      <div class="merke"><strong>Cuidado con el español:</strong> nosotros decimos «el más
      grande <strong>de</strong> Alemania». El alemán usa genitivo o <em>von</em>, nunca
      <s>aus</s>.</div>
      <p><strong>Comparaciones de igualdad y desigualdad</strong> — repaso del día 21:</p>
      <ul>
        <li><em>so … wie</em> (igualdad): <em>nicht so einfach, <strong>wie</strong> es
            aussieht</em></li>
        <li><em>als</em> (desigualdad): <em>größer <strong>als</strong> Berlin</em></li>
      </ul>`,
    uebungen: [
      { id: "g5701", satz: "Berlin ist die größt___ Stadt Deutschlands.", loesung: "e", tipps: ["e", "en", "este"], hinweis: "tras die, nominativo", ue: "Berlín es la ciudad más grande de Alemania." },
      { id: "g5702", satz: "Er arbeitet ___ schnellsten. (am/der)", loesung: "am", tipps: ["am", "der", "das"], hinweis: "tras el verbo", ue: "Él trabaja más rápido." },
      { id: "g5703", satz: "Das ist der best___ Kaffee der Stadt.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "nominativo masculino", ue: "Ese es el mejor café de la ciudad." },
      { id: "g5704", satz: "Ich trinke den best___ Kaffee.", loesung: "en", tipps: ["en", "e", "er"], hinweis: "acusativo masculino", ue: "Tomo el mejor café." },
      { id: "g5705", satz: "Nicht so einfach, ___ es aussieht.", loesung: "wie", tipps: ["wie", "als", "dass"], hinweis: "igualdad", ue: "No tan fácil como parece." }
    ]
  }
});

LEKTION('de', {
  tag: 58, niveau: "A2", thema: "Vivir en Alemania",
  vokabeln: [
    { id: "v5801", de: "das Amt",        es: "la oficina pública", wortart: "sustantivo", beispiel: "Ich muss zum Amt.", beispielUe: "Tengo que ir a la oficina." },
    { id: "v5802", de: "die Anmeldung",  es: "el empadronamiento", wortart: "sustantivo", beispiel: "Die Anmeldung ist Pflicht.", beispielUe: "El empadronamiento es obligatorio." },
    { id: "v5803", de: "der Ausweis",    es: "la identificación", wortart: "sustantivo", beispiel: "Zeigen Sie Ihren Ausweis.", beispielUe: "Muestre su identificación." },
    { id: "v5804", de: "das Formular",   es: "el formulario",  wortart: "sustantivo", beispiel: "Füllen Sie das Formular aus.", beispielUe: "Llene el formulario." },
    { id: "v5805", de: "die Frist",      es: "el plazo",       wortart: "sustantivo", beispiel: "Die Frist ist wichtig.", beispielUe: "El plazo es importante." },
    { id: "v5806", de: "beantragen",     es: "solicitar",      wortart: "verbo", beispiel: "Ich beantrage ein Visum.", beispielUe: "Solicito una visa." },
    { id: "v5807", de: "die Aufenthaltserlaubnis", es: "el permiso de residencia", wortart: "sustantivo", beispiel: "Ich habe eine Aufenthaltserlaubnis.", beispielUe: "Tengo un permiso de residencia." },
    { id: "v5808", de: "der Termin",     es: "la cita",        wortart: "sustantivo", beispiel: "Ich brauche einen Termin.", beispielUe: "Necesito una cita." },
    { id: "v5809", de: "die Bescheinigung", es: "la constancia", wortart: "sustantivo", beispiel: "Ich brauche eine Bescheinigung.", beispielUe: "Necesito una constancia." },
    { id: "v5810", de: "zuständig sein", es: "ser competente", wortart: "expresión", beispiel: "Wer ist dafür zuständig?", beispielUe: "¿Quién es responsable de eso?" }
  ],
  saetze: [
    { id: "s5801", de: "Das Formular muss ausgefüllt werden.", es: "El formulario debe ser llenado." },
    { id: "s5802", de: "Der Antrag ist schon gestellt worden.", es: "La solicitud ya fue presentada." },
    { id: "s5803", de: "Hier ist ein Termin zu vereinbaren.", es: "Aquí hay que acordar una cita." },
    { id: "s5804", de: "Das lässt sich leicht erledigen.",   es: "Eso se puede resolver fácilmente." },
    { id: "s5805", de: "Die Frist ist nicht verlängerbar.",  es: "El plazo no es prorrogable." }
  ],
  grammatik: {
    id: "g58", titel: "Alternativas a la pasiva",
    erklaerung: `
      <p>El alemán tiene tres construcciones que significan lo mismo que
      <em>kann/muss … werden</em> pero son más elegantes. Aparecen constantemente en textos
      oficiales.</p>
      <table>
        <tr><th>Construcción</th><th>Equivale a</th><th>Ejemplo</th></tr>
        <tr><td><em>sein</em> + <em>zu</em> + infinitivo</td><td>muss/kann … werden</td>
            <td><em>Das ist zu erledigen.</em> = Das muss erledigt werden.</td></tr>
        <tr><td><em>sich lassen</em> + infinitivo</td><td>kann … werden</td>
            <td><em>Das lässt sich machen.</em> = Das kann gemacht werden.</td></tr>
        <tr><td>adjetivo en <em>-bar</em></td><td>kann … werden</td>
            <td><em>Das ist machbar.</em> = Das kann gemacht werden.</td></tr>
      </table>
      <div class="merke"><strong>La más útil al hablar: <em>sich lassen</em>.</strong><br>
      <em>Das <strong>lässt sich</strong> leicht erledigen.</em> — «Eso se resuelve
      fácilmente.»<br>
      Corresponde exactamente al «se puede» del español, pero suena más natural en alemán
      que <em>kann gemacht werden</em>.</div>
      <p><strong>La terminación <em>-bar</em></strong> forma adjetivos a partir de verbos —
      igual que el español <em>-ble</em>:</p>
      <table>
        <tr><td><em>machbar</em></td><td>factible</td><td><em>lesbar</em></td><td>legible</td></tr>
        <tr><td><em>essbar</em></td><td>comestible</td><td><em>trinkbar</em></td><td>potable</td></tr>
        <tr><td><em>bezahlbar</em></td><td>pagable</td><td><em>verständlich</em></td><td>comprensible</td></tr>
      </table>
      <p>Con <em>un-</em> delante se niega: <em>unbezahlbar</em> (impagable),
      <em>unverständlich</em> (incomprensible).</p>
      <div class="merke"><strong><em>sein</em> + <em>zu</em> es lo más formal.</strong>
      Lo verás en avisos y documentos:<br>
      <em>Das Formular <strong>ist</strong> vollständig <strong>auszufüllen</strong>.</em>
      — «El formulario debe llenarse completamente.»<br>
      Fíjate: con verbo separable, el <em>zu</em> va en medio, como el día 40.</div>`,
    uebungen: [
      { id: "g5801", satz: "Das ___ sich leicht machen. (lassen)", loesung: "lässt", tipps: ["lässt", "lasst", "lasse"], hinweis: "das → er-Form", ue: "Eso se puede hacer fácilmente." },
      { id: "g5802", satz: "Das Formular ist auszu___. (füllen)", loesung: "füllen", tipps: ["füllen", "gefüllt", "füllt"], hinweis: "sein + zu + infinitivo", ue: "El formulario debe llenarse." },
      { id: "g5803", satz: "Das Problem ist lös___. (adjetivo)", loesung: "bar", tipps: ["bar", "lich", "sam"], hinweis: "-ble → -bar", ue: "El problema es soluble." },
      { id: "g5804", satz: "Die Frist ist nicht verlänger___.", loesung: "bar", tipps: ["bar", "lich", "sam"], hinweis: "prorrogable", ue: "El plazo no es prorrogable." },
      { id: "g5805", satz: "Das ___ sich nicht ändern. (lassen)", loesung: "lässt", tipps: ["lässt", "lasst", "ließ"], hinweis: "no se puede cambiar", ue: "Eso no se puede cambiar." }
    ]
  }
});

LEKTION('de', {
  tag: 59, niveau: "A2", thema: "Cultura y ocio",
  vokabeln: [
    { id: "v5901", de: "die Veranstaltung", es: "el evento",   wortart: "sustantivo", beispiel: "Die Veranstaltung war voll.", beispielUe: "El evento estaba lleno." },
    { id: "v5902", de: "die Eintrittskarte", es: "la entrada", wortart: "sustantivo", beispiel: "Die Eintrittskarte kostet zehn Euro.", beispielUe: "La entrada cuesta diez euros." },
    { id: "v5903", de: "das Theater",    es: "el teatro",      wortart: "sustantivo", beispiel: "Wir gehen ins Theater.", beispielUe: "Vamos al teatro." },
    { id: "v5904", de: "die Vorstellung", es: "la función",    wortart: "sustantivo", beispiel: "Die Vorstellung beginnt um acht.", beispielUe: "La función empieza a las ocho." },
    { id: "v5905", de: "die Ausstellung", es: "la exposición", wortart: "sustantivo", beispiel: "Die Ausstellung ist kostenlos.", beispielUe: "La exposición es gratuita." },
    { id: "v5906", de: "sich amüsieren", es: "divertirse",     wortart: "verbo reflexivo", beispiel: "Wir haben uns amüsiert.", beispielUe: "Nos divertimos." },
    { id: "v5907", de: "das Publikum",   es: "el público",     wortart: "sustantivo", beispiel: "Das Publikum war begeistert.", beispielUe: "El público estaba entusiasmado." },
    { id: "v5908", de: "begeistert",     es: "entusiasmado",   wortart: "adjetivo", beispiel: "Ich bin begeistert!", beispielUe: "¡Estoy entusiasmado!" },
    { id: "v5909", de: "empfehlenswert", es: "recomendable",   wortart: "adjetivo", beispiel: "Der Film ist empfehlenswert.", beispielUe: "La película es recomendable." },
    { id: "v5910", de: "der Eindruck",   es: "la impresión",   wortart: "sustantivo", beispiel: "Ich hatte einen guten Eindruck.", beispielUe: "Tuve una buena impresión." }
  ],
  saetze: [
    { id: "s5901", de: "Ich gehe heute Abend mit Freunden ins Theater.", es: "Esta noche voy al teatro con amigos." },
    { id: "s5902", de: "Gestern haben wir uns im Park getroffen.", es: "Ayer nos vimos en el parque." },
    { id: "s5903", de: "Er hat mir das Buch gestern gegeben.", es: "Él me dio el libro ayer." },
    { id: "s5904", de: "Ich habe es ihm schon gesagt.",      es: "Ya se lo dije." },
    { id: "s5905", de: "Wir fahren morgen früh mit dem Zug nach Wien.", es: "Mañana temprano vamos a Viena en tren." }
  ],
  grammatik: {
    id: "g59", titel: "El orden de palabras: repaso completo",
    erklaerung: `
      <p>El orden alemán no es libre. Con estas reglas cubres el noventa por ciento de los
      casos.</p>
      <div class="merke"><strong>1. El verbo conjugado.</strong><br>
      Frase normal → posición 2 · Pregunta sí/no → posición 1 · Subordinada → final</div>
      <div class="merke"><strong>2. Los complementos: TE-KA-MO-LO</strong><br>
      <strong>Te</strong>mporal → <strong>Ka</strong>usal → <strong>Mo</strong>dal →
      <strong>Lo</strong>kal<br>
      <em>Ich fahre <strong>morgen</strong> (te) <strong>wegen der Arbeit</strong> (ka)
      <strong>mit dem Zug</strong> (mo) <strong>nach Wien</strong> (lo).</em></div>
      <div class="merke"><strong>3. Los objetos:</strong><br>
      dos sustantivos → dativo primero: <em>Ich gebe <strong>dem Mann das Buch</strong>.</em><br>
      un pronombre → el pronombre primero: <em>Ich gebe <strong>es</strong> dem Mann.</em><br>
      dos pronombres → acusativo primero: <em>Ich gebe <strong>es ihm</strong>.</em></div>
      <p><strong>4. La posición de <em>nicht</em>:</strong></p>
      <table>
        <tr><th>Qué niega</th><th>Posición</th><th>Ejemplo</th></tr>
        <tr><td>toda la frase</td><td>al final</td><td>Ich komme heute <em>nicht</em>.</td></tr>
        <tr><td>un adjetivo</td><td>delante de él</td><td>Das ist <em>nicht</em> gut.</td></tr>
        <tr><td>un lugar</td><td>delante de él</td><td>Ich wohne <em>nicht</em> in Berlin.</td></tr>
        <tr><td>con verbo separado</td><td>antes del prefijo</td><td>Ich rufe dich <em>nicht</em> an.</td></tr>
      </table>
      <p><strong>5. Los pronombres van adelante</strong>, justo detrás del verbo:</p>
      <ul>
        <li><em>Gestern habe <strong>ich es ihm</strong> gesagt.</em></li>
        <li><em>Ich habe <strong>mich</strong> gestern verspätet.</em></li>
      </ul>
      <div class="merke"><strong>Un consejo para practicar:</strong> escribe una frase larga
      y luego cámbiala de orden empezando por otro elemento. Si el verbo sigue en posición 2,
      lo estás haciendo bien.</div>`,
    uebungen: [
      { id: "g5901", satz: "Morgen ___ wir nach Wien. (fahren)", loesung: "fahren", tipps: ["fahren", "wir fahren", "fahrt"], hinweis: "verbo en posición 2", ue: "Mañana vamos a Viena." },
      { id: "g5902", satz: "Ich fahre morgen ___ nach Wien. (mit dem Zug)", loesung: "mit dem Zug", tipps: ["mit dem Zug", "nach Wien morgen"], hinweis: "modo antes del lugar", ue: "Mañana voy a Viena en tren." },
      { id: "g5903", satz: "Ich habe ___ schon gesagt. (es + ihm)", loesung: "es ihm", tipps: ["es ihm", "ihm es", "ihn es"], hinweis: "dos pronombres: acusativo primero", ue: "Ya se lo dije." },
      { id: "g5904", satz: "Ich rufe dich heute ___ an.", loesung: "nicht", tipps: ["nicht", "kein", "nichts"], hinweis: "antes del prefijo", ue: "Hoy no te llamo." },
      { id: "g5905", satz: "Ich gebe ___ das Buch. (dem Mann)", loesung: "dem Mann", tipps: ["dem Mann", "das Buch dem Mann"], hinweis: "dativo antes que acusativo", ue: "Le doy el libro al hombre." }
    ]
  }
});

LEKTION('de', {
  tag: 60, niveau: "A2", thema: "Repaso: A2 completo",
  vokabeln: [
    { id: "v6001", de: "die Zwischenbilanz", es: "el balance parcial", wortart: "sustantivo", beispiel: "Zeit für eine Zwischenbilanz.", beispielUe: "Hora de un balance parcial." },
    { id: "v6002", de: "beherrschen",    es: "dominar",        wortart: "verbo", beispiel: "Ich beherrsche die Grundlagen.", beispielUe: "Domino los fundamentos." },
    { id: "v6003", de: "die Grundlage",  es: "el fundamento",  wortart: "sustantivo", beispiel: "Die Grundlagen sitzen.", beispielUe: "Los fundamentos están firmes." },
    { id: "v6004", de: "der Meilenstein", es: "el hito",       wortart: "sustantivo", beispiel: "Das ist ein Meilenstein.", beispielUe: "Ese es un hito." },
    { id: "v6005", de: "sich trauen",    es: "atreverse",      wortart: "verbo reflexivo", beispiel: "Trau dich zu sprechen!", beispielUe: "¡Atrévete a hablar!" },
    { id: "v6006", de: "die Sicherheit", es: "la seguridad",   wortart: "sustantivo", beispiel: "Du gewinnst an Sicherheit.", beispielUe: "Ganas seguridad." },
    { id: "v6007", de: "das Selbstvertrauen", es: "la confianza en uno mismo", wortart: "sustantivo", beispiel: "Mein Selbstvertrauen wächst.", beispielUe: "Mi confianza crece." },
    { id: "v6008", de: "dranbleiben",    es: "seguir con ello", wortart: "verbo separable", beispiel: "Bleib einfach dran!", beispielUe: "¡Simplemente sigue!" },
    { id: "v6009", de: "der Alltag",     es: "la vida diaria", wortart: "sustantivo", beispiel: "Im Alltag brauche ich Deutsch.", beispielUe: "En la vida diaria necesito alemán." },
    { id: "v6010", de: "sich verständigen", es: "hacerse entender", wortart: "verbo reflexivo", beispiel: "Ich kann mich verständigen.", beispielUe: "Puedo hacerme entender." }
  ],
  saetze: [
    { id: "s6001", de: "Ich lerne seit zwei Monaten jeden Tag.", es: "Aprendo cada día desde hace dos meses." },
    { id: "s6002", de: "Obwohl es schwer war, habe ich weitergemacht.", es: "Aunque fue difícil, seguí adelante." },
    { id: "s6003", de: "Ich kann mich im Alltag gut verständigen.", es: "Puedo comunicarme bien en el día a día." },
    { id: "s6004", de: "Wenn ich weitermache, erreiche ich B1.", es: "Si sigo así, alcanzo el B1." },
    { id: "s6005", de: "Das war der schwierigste Teil bisher.", es: "Esa fue la parte más difícil hasta ahora." }
  ],
  grammatik: {
    id: "g60", titel: "A2 completo — dónde estás",
    erklaerung: `
      <p>Sesenta días, 600 palabras, 60 temas de gramática. Esto es lo que ya dominas.</p>
      <p><strong>La gramática del A2:</strong></p>
      <table>
        <tr><th>Área</th><th>Contenido</th></tr>
        <tr><td>Casos</td><td>los cuatro completos, con adjetivos en los tres sistemas</td></tr>
        <tr><td>Tiempos</td><td>Präsens, Perfekt, Präteritum, Plusquamperfekt</td></tr>
        <tr><td>Modos</td><td>Imperativ, Konjunktiv II, Konjunktiv I (reconocer)</td></tr>
        <tr><td>Subordinadas</td><td>weil, dass, ob, wenn, als, obwohl, damit, nachdem, relativas</td></tr>
        <tr><td>Voz</td><td>pasiva en todos los tiempos y sus alternativas</td></tr>
        <tr><td>Estructuras</td><td>zu + infinitivo, um zu, lassen, participios como adjetivo</td></tr>
      </table>
      <div class="merke"><strong>Lo que puedes hacer</strong> — descripción oficial del A2:<br>
      entender frases sobre temas de relevancia inmediata (familia, compras, trabajo,
      entorno), comunicarte en situaciones rutinarias, describir tu origen y formación,
      y contar cosas del pasado con cierto detalle.</div>
      <p><strong>Las cinco reglas que resumen todo lo aprendido:</strong></p>
      <ol>
        <li>El verbo conjugado va en <strong>posición 2</strong>; la segunda parte, al final.</li>
        <li>En subordinada, el verbo va <strong>al final</strong>.</li>
        <li>La preposición manda el caso; si no hay, manda el verbo; si tampoco,
            decide la función.</li>
        <li>El adjetivo completa lo que el artículo no dice.</li>
        <li>Los sustantivos se aprenden <strong>con artículo</strong>. Siempre.</li>
      </ol>
      <div class="merke"><strong>Lo que viene en el B1:</strong> menos gramática nueva, más
      precisión. Aprenderás a decir lo mismo de tres maneras y a elegir la adecuada. Y por
      fin podrás leer textos auténticos — noticias, correos de trabajo, instrucciones — sin
      diccionario cada dos líneas.</div>
      <p style="text-align:center;margin-top:1.3rem"><strong>¡Excelente! Ya tienes el A2.
      Estás a mitad de camino.</strong></p>`,
    uebungen: [
      { id: "g6001", satz: "Obwohl es schwer ___, habe ich weitergemacht. (sein)", loesung: "war", tipps: ["war", "ist", "wäre"], hinweis: "subordinada, verbo al final", ue: "Aunque fue difícil, seguí." },
      { id: "g6002", satz: "Ich kann ___ gut verständigen. (a mí)", loesung: "mich", tipps: ["mich", "mir", "sich"], hinweis: "reflexivo acusativo", ue: "Puedo comunicarme bien." },
      { id: "g6003", satz: "Das war der schwierigst___ Teil.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "superlativo, nominativo", ue: "Esa fue la parte más difícil." },
      { id: "g6004", satz: "Wenn ich weitermache, ___ ich B1. (erreichen)", loesung: "erreiche", tipps: ["erreiche", "erreichen", "erreicht"], hinweis: "frase principal", ue: "Si sigo, alcanzo el B1." },
      { id: "g6005", satz: "Ich lerne ___ zwei Monaten jeden Tag.", loesung: "seit", tipps: ["seit", "vor", "für"], hinweis: "desde hace", ue: "Aprendo desde hace dos meses." }
    ]
  }
});
