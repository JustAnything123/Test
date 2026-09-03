/* Tag 1–10 · Niveau A2 · Grundlagen festigen
   Aufbau jeder Lektion: 10 Vokabeln, 5 Sätze, 1 Grammatikthema mit Übungen. */

LEKTIONEN.push({
  tag: 1, niveau: "A2", thema: "Sich vorstellen",
  vokabeln: [
    { id: "v0101", es: "el apellido",   de: "der Nachname",        wortart: "Substantiv", beispiel: "Mi apellido es García.", beispielDe: "Mein Nachname ist García." },
    { id: "v0102", es: "soltero",       de: "ledig",               wortart: "Adjektiv",   beispiel: "Mi hermano está soltero.", beispielDe: "Mein Bruder ist ledig." },
    { id: "v0103", es: "casado",        de: "verheiratet",         wortart: "Adjektiv",   beispiel: "Estoy casado desde 2020.", beispielDe: "Ich bin seit 2020 verheiratet." },
    { id: "v0104", es: "el barrio",     de: "das Viertel",         wortart: "Substantiv", beispiel: "Vivo en un barrio tranquilo.", beispielDe: "Ich wohne in einem ruhigen Viertel." },
    { id: "v0105", es: "amable",        de: "freundlich",          wortart: "Adjektiv",   beispiel: "Mis vecinos son muy amables.", beispielDe: "Meine Nachbarn sind sehr freundlich." },
    { id: "v0106", es: "el apodo",      de: "der Spitzname",       wortart: "Substantiv", beispiel: "Mi apodo es Nacho.", beispielDe: "Mein Spitzname ist Nacho." },
    { id: "v0107", es: "jubilado",      de: "im Ruhestand",        wortart: "Adjektiv",   beispiel: "Mi padre ya está jubilado.", beispielDe: "Mein Vater ist schon im Ruhestand." },
    { id: "v0108", es: "el idioma",     de: "die Sprache",         wortart: "Substantiv", beispiel: "El español es un idioma bonito.", beispielDe: "Spanisch ist eine schöne Sprache." },
    { id: "v0109", es: "conocer",       de: "kennenlernen",        wortart: "Verb",       beispiel: "Encantado de conocerte.", beispielDe: "Freut mich, dich kennenzulernen." },
    { id: "v0110", es: "el compañero",  de: "der Kollege",         wortart: "Substantiv", beispiel: "Él es mi compañero de trabajo.", beispielDe: "Er ist mein Arbeitskollege." }
  ],
  saetze: [
    { id: "s0101", es: "Me llamo Dennis y soy de Alemania.", de: "Ich heiße Dennis und komme aus Deutschland." },
    { id: "s0102", es: "Estoy muy contento hoy.",            de: "Ich bin heute sehr zufrieden." },
    { id: "s0103", es: "Mi mujer es profesora de música.",   de: "Meine Frau ist Musiklehrerin." },
    { id: "s0104", es: "Estamos en Madrid esta semana.",     de: "Wir sind diese Woche in Madrid." },
    { id: "s0105", es: "Somos cuatro en mi familia.",        de: "Wir sind vier in meiner Familie." }
  ],
  grammatik: {
    id: "g01", titel: "ser oder estar?",
    erklaerung: `
      <p>Das Deutsche hat nur <em>sein</em>. Spanisch hat zwei Verben dafür — und das ist
      der Fehler Nummer eins bei deutschen Lernenden. Die Faustregel:</p>
      <table>
        <tr><th>ser = <em>was etwas ist</em></th><th>estar = <em>wie/wo etwas gerade ist</em></th></tr>
        <tr><td>Herkunft: <em>Soy de Berlín.</em></td><td>Ort: <em>Estoy en Berlín.</em></td></tr>
        <tr><td>Beruf: <em>Es médica.</em></td><td>Zustand: <em>Está cansada.</em></td></tr>
        <tr><td>Eigenschaft: <em>Eres alto.</em></td><td>Stimmung: <em>Estás triste.</em></td></tr>
        <tr><td>Uhrzeit: <em>Son las tres.</em></td><td>Verlauf: <em>Está lloviendo.</em></td></tr>
      </table>
      <table>
        <tr><th></th><th>ser</th><th>estar</th></tr>
        <tr><td>yo</td><td>soy</td><td>estoy</td></tr>
        <tr><td>tú</td><td>eres</td><td>estás</td></tr>
        <tr><td>él / ella / usted</td><td>es</td><td>está</td></tr>
        <tr><td>nosotros</td><td>somos</td><td>estamos</td></tr>
        <tr><td>vosotros</td><td>sois</td><td>estáis</td></tr>
        <tr><td>ellos / ustedes</td><td>son</td><td>están</td></tr>
      </table>
      <div class="merke"><strong>Merke:</strong> Ort immer mit <em>estar</em> — außer bei
      Veranstaltungen: <em>La fiesta es en mi casa.</em> (Das Fest findet bei mir statt.)</div>
      <div class="merke"><strong>Bedeutungswechsel:</strong> <em>ser aburrido</em> = langweilig
      sein (als Person) · <em>estar aburrido</em> = sich langweilen (gerade jetzt).</div>`,
    uebungen: [
      { id: "g0101", satz: "Yo ___ de Alemania.",         loesung: "soy",   tipps: ["soy", "estoy"],   hinweis: "Herkunft", de: "Ich komme aus Deutschland." },
      { id: "g0102", satz: "Nosotros ___ en el hotel.",    loesung: "estamos", tipps: ["somos", "estamos"], hinweis: "Ort", de: "Wir sind im Hotel." },
      { id: "g0103", satz: "Mi hermana ___ enfermera.",    loesung: "es",    tipps: ["es", "está"],     hinweis: "Beruf", de: "Meine Schwester ist Krankenschwester." },
      { id: "g0104", satz: "¿Cómo ___ (tú) hoy?",          loesung: "estás", tipps: ["eres", "estás"],  hinweis: "Befinden", de: "Wie geht es dir heute?" },
      { id: "g0105", satz: "Los niños ___ cansados.",      loesung: "están", tipps: ["son", "están"],   hinweis: "vorübergehender Zustand", de: "Die Kinder sind müde." }
    ]
  }
});

LEKTIONEN.push({
  tag: 2, niveau: "A2", thema: "Meine Wohnung",
  vokabeln: [
    { id: "v0201", es: "el piso",       de: "die Wohnung",     wortart: "Substantiv", beispiel: "Mi piso tiene tres habitaciones.", beispielDe: "Meine Wohnung hat drei Zimmer." },
    { id: "v0202", es: "el armario",    de: "der Schrank",     wortart: "Substantiv", beispiel: "La ropa está en el armario.", beispielDe: "Die Kleidung ist im Schrank." },
    { id: "v0203", es: "la nevera",     de: "der Kühlschrank", wortart: "Substantiv", beispiel: "No hay leche en la nevera.", beispielDe: "Es ist keine Milch im Kühlschrank." },
    { id: "v0204", es: "el pasillo",    de: "der Flur",        wortart: "Substantiv", beispiel: "El baño está al final del pasillo.", beispielDe: "Das Bad ist am Ende des Flurs." },
    { id: "v0205", es: "la escalera",   de: "die Treppe",      wortart: "Substantiv", beispiel: "Subimos por la escalera.", beispielDe: "Wir gehen die Treppe hoch." },
    { id: "v0206", es: "el vecino",     de: "der Nachbar",     wortart: "Substantiv", beispiel: "El vecino de arriba hace ruido.", beispielDe: "Der Nachbar von oben macht Lärm." },
    { id: "v0207", es: "amueblado",     de: "möbliert",        wortart: "Adjektiv",   beispiel: "Buscamos un piso amueblado.", beispielDe: "Wir suchen eine möblierte Wohnung." },
    { id: "v0208", es: "el alquiler",   de: "die Miete",       wortart: "Substantiv", beispiel: "El alquiler es muy caro aquí.", beispielDe: "Die Miete ist hier sehr teuer." },
    { id: "v0209", es: "la planta",     de: "das Stockwerk / die Pflanze", wortart: "Substantiv", beispiel: "Vivo en la tercera planta.", beispielDe: "Ich wohne im dritten Stock." },
    { id: "v0210", es: "el enchufe",    de: "die Steckdose",   wortart: "Substantiv", beispiel: "¿Dónde hay un enchufe?", beispielDe: "Wo gibt es eine Steckdose?" }
  ],
  saetze: [
    { id: "s0201", es: "Hay una lámpara sobre la mesa.",       de: "Es gibt eine Lampe auf dem Tisch." },
    { id: "s0202", es: "La lámpara está sobre la mesa.",       de: "Die Lampe ist auf dem Tisch." },
    { id: "s0203", es: "¿Hay un supermercado por aquí cerca?", de: "Gibt es hier in der Nähe einen Supermarkt?" },
    { id: "s0204", es: "No hay nadie en casa.",                de: "Es ist niemand zu Hause." },
    { id: "s0205", es: "Las llaves están en el cajón.",        de: "Die Schlüssel sind in der Schublade." }
  ],
  grammatik: {
    id: "g02", titel: "hay oder estar?",
    erklaerung: `
      <p><em>hay</em> heißt „es gibt" und ist unveränderlich — egal ob eine Sache oder
      hundert. <em>estar</em> sagt, <strong>wo</strong> etwas Bestimmtes ist.</p>
      <table>
        <tr><th>hay</th><th>estar</th></tr>
        <tr><td>etwas <strong>existiert</strong> (neu im Gespräch)</td><td>etwas <strong>Bekanntes</strong> befindet sich irgendwo</td></tr>
        <tr><td><em>Hay un banco en la esquina.</em></td><td><em>El banco está en la esquina.</em></td></tr>
        <tr><td>Es gibt eine Bank an der Ecke.</td><td>Die Bank ist an der Ecke.</td></tr>
      </table>
      <p>Der entscheidende Test ist das Wörtchen davor:</p>
      <ul>
        <li><strong>hay</strong> + <em>un, una, dos, mucho, algo, nada</em> oder gar nichts<br>
            <em>Hay una silla. · Hay tres sillas. · Hay agua. · No hay nada.</em></li>
        <li><strong>estar</strong> + <em>el, la, los, las, mi, tu, este</em> oder Name<br>
            <em>La silla está aquí. · Mi coche está fuera. · Ana está en casa.</em></li>
      </ul>
      <div class="merke"><strong>Nie:</strong> <s>Hay el banco</s> — bestimmter Artikel und
      <em>hay</em> vertragen sich nicht.</div>`,
    uebungen: [
      { id: "g0201", satz: "___ un problema con la nevera.", loesung: "Hay",  tipps: ["Hay", "Está"], hinweis: "un → ?", de: "Es gibt ein Problem mit dem Kühlschrank." },
      { id: "g0202", satz: "El baño ___ al lado de la cocina.", loesung: "está", tipps: ["hay", "está"], hinweis: "El → ?", de: "Das Bad ist neben der Küche." },
      { id: "g0203", satz: "¿Cuántas personas ___ en la fiesta?", loesung: "hay", tipps: ["hay", "están"], hinweis: "Anzahl", de: "Wie viele Leute sind auf der Party?" },
      { id: "g0204", satz: "Mis padres ___ en Valencia.", loesung: "están", tipps: ["hay", "están"], hinweis: "Mis → ?", de: "Meine Eltern sind in Valencia." },
      { id: "g0205", satz: "No ___ leche en casa.", loesung: "hay", tipps: ["hay", "está"], hinweis: "kein Artikel", de: "Es ist keine Milch im Haus." }
    ]
  }
});

LEKTIONEN.push({
  tag: 3, niveau: "A2", thema: "Mein Tagesablauf",
  vokabeln: [
    { id: "v0301", es: "empezar",    de: "anfangen",       wortart: "Verb", beispiel: "Empiezo a trabajar a las ocho.", beispielDe: "Ich fange um acht an zu arbeiten." },
    { id: "v0302", es: "volver",     de: "zurückkommen",   wortart: "Verb", beispiel: "Vuelvo a casa a las seis.", beispielDe: "Ich komme um sechs nach Hause." },
    { id: "v0303", es: "dormir",     de: "schlafen",       wortart: "Verb", beispiel: "Duermo ocho horas.", beispielDe: "Ich schlafe acht Stunden." },
    { id: "v0304", es: "pedir",      de: "bitten um / bestellen", wortart: "Verb", beispiel: "Pido un café con leche.", beispielDe: "Ich bestelle einen Milchkaffee." },
    { id: "v0305", es: "salir",      de: "hinausgehen",    wortart: "Verb", beispiel: "Salgo de casa muy temprano.", beispielDe: "Ich gehe sehr früh aus dem Haus." },
    { id: "v0306", es: "el horario", de: "der Zeitplan",   wortart: "Substantiv", beispiel: "Tengo un horario flexible.", beispielDe: "Ich habe einen flexiblen Zeitplan." },
    { id: "v0307", es: "el descanso",de: "die Pause",      wortart: "Substantiv", beispiel: "Hacemos un descanso a mediodía.", beispielDe: "Wir machen mittags eine Pause." },
    { id: "v0308", es: "madrugar",   de: "früh aufstehen", wortart: "Verb", beispiel: "No me gusta madrugar.", beispielDe: "Ich stehe nicht gern früh auf." },
    { id: "v0309", es: "el trayecto",de: "der Weg / die Strecke", wortart: "Substantiv", beispiel: "El trayecto dura media hora.", beispielDe: "Der Weg dauert eine halbe Stunde." },
    { id: "v0310", es: "soler",      de: "pflegen zu",     wortart: "Verb", beispiel: "Suelo desayunar en casa.", beispielDe: "Ich frühstücke normalerweise zu Hause." }
  ],
  saetze: [
    { id: "s0301", es: "Empiezo a trabajar a las nueve.",     de: "Ich fange um neun an zu arbeiten." },
    { id: "s0302", es: "Mi hermana duerme hasta muy tarde.",  de: "Meine Schwester schläft bis sehr spät." },
    { id: "s0303", es: "¿A qué hora vuelves del trabajo?",    de: "Um wie viel Uhr kommst du von der Arbeit zurück?" },
    { id: "s0304", es: "Siempre pedimos lo mismo.",           de: "Wir bestellen immer dasselbe." },
    { id: "s0305", es: "Salgo de casa a las siete y media.",  de: "Ich gehe um halb acht aus dem Haus." }
  ],
  grammatik: {
    id: "g03", titel: "Unregelmäßige Verben im Präsens",
    erklaerung: `
      <p>Bei vielen Verben ändert sich der Vokal im Stamm — aber nur dort, wo die Betonung
      hinfällt. Bei <em>nosotros</em> und <em>vosotros</em> bleibt alles normal. Diese Form
      nennt man deshalb „Schuh": die veränderten Formen bilden auf dem Papier einen Schuh.</p>
      <table>
        <tr><th></th><th>e → ie<br>empezar</th><th>o → ue<br>volver</th><th>e → i<br>pedir</th></tr>
        <tr><td>yo</td><td>emp<em>ie</em>zo</td><td>v<em>ue</em>lvo</td><td>p<em>i</em>do</td></tr>
        <tr><td>tú</td><td>emp<em>ie</em>zas</td><td>v<em>ue</em>lves</td><td>p<em>i</em>des</td></tr>
        <tr><td>él/ella</td><td>emp<em>ie</em>za</td><td>v<em>ue</em>lve</td><td>p<em>i</em>de</td></tr>
        <tr><td>nosotros</td><td>empezamos</td><td>volvemos</td><td>pedimos</td></tr>
        <tr><td>vosotros</td><td>empezáis</td><td>volvéis</td><td>pedís</td></tr>
        <tr><td>ellos</td><td>emp<em>ie</em>zan</td><td>v<em>ue</em>lven</td><td>p<em>i</em>den</td></tr>
      </table>
      <p>Dazu kommen Verben, die nur in der <em>yo</em>-Form aus der Reihe tanzen:</p>
      <ul>
        <li><em>hacer → hago</em>, <em>poner → pongo</em>, <em>salir → salgo</em></li>
        <li><em>traer → traigo</em>, <em>saber → sé</em>, <em>ver → veo</em>, <em>dar → doy</em></li>
        <li>Kombiniert: <em>tener → tengo, tienes…</em> · <em>venir → vengo, vienes…</em></li>
      </ul>
      <div class="merke"><strong>Merke:</strong> Welche Verben den Vokal wechseln, verrät kein
      Muster — das lernst du Wort für Wort. Gute Nachricht: es sind immer dieselben.</div>`,
    uebungen: [
      { id: "g0301", satz: "Yo ___ (empezar) a las ocho.", loesung: "empiezo", tipps: ["empiezo", "empezo"], hinweis: "e → ie", de: "Ich fange um acht an." },
      { id: "g0302", satz: "Nosotros ___ (volver) tarde.", loesung: "volvemos", tipps: ["volvemos", "vuelvemos"], hinweis: "nosotros bleibt regelmäßig!", de: "Wir kommen spät zurück." },
      { id: "g0303", satz: "Ella ___ (dormir) poco.", loesung: "duerme", tipps: ["duerme", "dorme"], hinweis: "o → ue", de: "Sie schläft wenig." },
      { id: "g0304", satz: "Yo ___ (salir) ahora.", loesung: "salgo", tipps: ["salgo", "salo"], hinweis: "nur yo unregelmäßig", de: "Ich gehe jetzt raus." },
      { id: "g0305", satz: "¿Qué ___ (pedir) vosotros?", loesung: "pedís", tipps: ["pedís", "pidéis"], hinweis: "vosotros bleibt regelmäßig!", de: "Was bestellt ihr?" }
    ]
  }
});

LEKTIONEN.push({
  tag: 4, niveau: "A2", thema: "Morgens im Bad",
  vokabeln: [
    { id: "v0401", es: "despertarse",  de: "aufwachen",      wortart: "Verb", beispiel: "Me despierto a las siete.", beispielDe: "Ich wache um sieben auf." },
    { id: "v0402", es: "levantarse",   de: "aufstehen",      wortart: "Verb", beispiel: "Me levanto enseguida.", beispielDe: "Ich stehe sofort auf." },
    { id: "v0403", es: "ducharse",     de: "duschen",        wortart: "Verb", beispiel: "Se ducha por la mañana.", beispielDe: "Er/Sie duscht morgens." },
    { id: "v0404", es: "vestirse",     de: "sich anziehen",  wortart: "Verb", beispiel: "Nos vestimos rápido.", beispielDe: "Wir ziehen uns schnell an." },
    { id: "v0405", es: "peinarse",     de: "sich kämmen",    wortart: "Verb", beispiel: "Se peina delante del espejo.", beispielDe: "Er/Sie kämmt sich vor dem Spiegel." },
    { id: "v0406", es: "el espejo",    de: "der Spiegel",    wortart: "Substantiv", beispiel: "El espejo está sucio.", beispielDe: "Der Spiegel ist schmutzig." },
    { id: "v0407", es: "la toalla",    de: "das Handtuch",   wortart: "Substantiv", beispiel: "Necesito una toalla limpia.", beispielDe: "Ich brauche ein sauberes Handtuch." },
    { id: "v0408", es: "el cepillo de dientes", de: "die Zahnbürste", wortart: "Substantiv", beispiel: "Mi cepillo de dientes es azul.", beispielDe: "Meine Zahnbürste ist blau." },
    { id: "v0409", es: "acostarse",    de: "ins Bett gehen", wortart: "Verb", beispiel: "Me acuesto sobre las once.", beispielDe: "Ich gehe gegen elf ins Bett." },
    { id: "v0410", es: "quedarse",     de: "bleiben",        wortart: "Verb", beispiel: "Hoy me quedo en casa.", beispielDe: "Heute bleibe ich zu Hause." }
  ],
  saetze: [
    { id: "s0401", es: "Me levanto a las siete todos los días.", de: "Ich stehe jeden Tag um sieben auf." },
    { id: "s0402", es: "¿A qué hora te acuestas normalmente?",   de: "Wann gehst du normalerweise ins Bett?" },
    { id: "s0403", es: "Los niños se duchan antes de cenar.",    de: "Die Kinder duschen vor dem Abendessen." },
    { id: "s0404", es: "Nos quedamos en casa este fin de semana.", de: "Wir bleiben dieses Wochenende zu Hause." },
    { id: "s0405", es: "Voy a lavarme las manos.",               de: "Ich gehe mir die Hände waschen." }
  ],
  grammatik: {
    id: "g04", titel: "Reflexive Verben",
    erklaerung: `
      <p>Reflexive Verben beziehen die Handlung auf einen selbst. Im Wörterbuch erkennst du
      sie an der Endung <em>-se</em>: <em>levantarse</em>, <em>ducharse</em>.
      Das <em>-se</em> wird zur Person passend abgewandelt und <strong>vor</strong> das Verb gestellt.</p>
      <table>
        <tr><th>Person</th><th>Pronomen</th><th>Beispiel</th></tr>
        <tr><td>yo</td><td><em>me</em></td><td>me levanto</td></tr>
        <tr><td>tú</td><td><em>te</em></td><td>te levantas</td></tr>
        <tr><td>él/ella/usted</td><td><em>se</em></td><td>se levanta</td></tr>
        <tr><td>nosotros</td><td><em>nos</em></td><td>nos levantamos</td></tr>
        <tr><td>vosotros</td><td><em>os</em></td><td>os levantáis</td></tr>
        <tr><td>ellos/ustedes</td><td><em>se</em></td><td>se levantan</td></tr>
      </table>
      <p><strong>Zwei Stellungen sind möglich</strong>, wenn ein zweites Verb im Spiel ist:</p>
      <ul>
        <li>vorangestellt: <em>Me voy a duchar.</em></li>
        <li>angehängt: <em>Voy a ducharme.</em></li>
      </ul>
      <p>Beide sind völlig korrekt und bedeuten dasselbe.</p>
      <div class="merke"><strong>Wichtig:</strong> Bei Körperteilen und Kleidung steht im
      Spanischen der <strong>bestimmte Artikel</strong>, nicht das Possessivpronomen:
      <em>Me lavo <strong>las</strong> manos.</em> — wörtlich „Ich wasche mir die Hände".
      <s>Me lavo mis manos.</s> ist falsch.</div>`,
    uebungen: [
      { id: "g0401", satz: "Yo ___ levanto temprano.", loesung: "me", tipps: ["me", "te", "se"], hinweis: "yo → ?", de: "Ich stehe früh auf." },
      { id: "g0402", satz: "Nosotros ___ acostamos tarde.", loesung: "nos", tipps: ["nos", "os", "se"], hinweis: "nosotros → ?", de: "Wir gehen spät ins Bett." },
      { id: "g0403", satz: "¿A qué hora ___ despiertas?", loesung: "te", tipps: ["te", "me", "se"], hinweis: "tú → ?", de: "Wann wachst du auf?" },
      { id: "g0404", satz: "Ella se lava ___ dientes.", loesung: "los", tipps: ["los", "sus"], hinweis: "Körperteil → Artikel!", de: "Sie putzt sich die Zähne." },
      { id: "g0405", satz: "Los niños ___ visten solos.", loesung: "se", tipps: ["se", "nos", "os"], hinweis: "ellos → ?", de: "Die Kinder ziehen sich allein an." }
    ]
  }
});

LEKTIONEN.push({
  tag: 5, niveau: "A2", thema: "Was gerade passiert",
  vokabeln: [
    { id: "v0501", es: "el ruido",     de: "der Lärm",         wortart: "Substantiv", beispiel: "¿Qué es ese ruido?", beispielDe: "Was ist das für ein Lärm?" },
    { id: "v0502", es: "llover",       de: "regnen",           wortart: "Verb", beispiel: "Está lloviendo mucho.", beispielDe: "Es regnet stark." },
    { id: "v0503", es: "esperar",      de: "warten / hoffen",  wortart: "Verb", beispiel: "Estoy esperando el autobús.", beispielDe: "Ich warte auf den Bus." },
    { id: "v0504", es: "buscar",       de: "suchen",           wortart: "Verb", beispiel: "Estamos buscando las llaves.", beispielDe: "Wir suchen die Schlüssel." },
    { id: "v0505", es: "el momento",   de: "der Augenblick",   wortart: "Substantiv", beispiel: "En este momento no puedo.", beispielDe: "In diesem Augenblick kann ich nicht." },
    { id: "v0506", es: "arreglar",     de: "reparieren / regeln", wortart: "Verb", beispiel: "Está arreglando el coche.", beispielDe: "Er repariert gerade das Auto." },
    { id: "v0507", es: "mientras",     de: "während",          wortart: "Konjunktion", beispiel: "Leo mientras espero.", beispielDe: "Ich lese, während ich warte." },
    { id: "v0508", es: "el rato",      de: "die Weile",        wortart: "Substantiv", beispiel: "Espera un rato, por favor.", beispielDe: "Warte bitte eine Weile." },
    { id: "v0509", es: "ocupado",      de: "beschäftigt",      wortart: "Adjektiv", beispiel: "Ahora estoy ocupado.", beispielDe: "Ich bin gerade beschäftigt." },
    { id: "v0510", es: "seguir",       de: "weitermachen / folgen", wortart: "Verb", beispiel: "Sigo estudiando español.", beispielDe: "Ich lerne weiter Spanisch." }
  ],
  saetze: [
    { id: "s0501", es: "Estoy trabajando en un proyecto nuevo.", de: "Ich arbeite gerade an einem neuen Projekt." },
    { id: "s0502", es: "¿Qué estás haciendo ahora mismo?",       de: "Was machst du gerade jetzt?" },
    { id: "s0503", es: "Los niños están durmiendo.",             de: "Die Kinder schlafen gerade." },
    { id: "s0504", es: "Está lloviendo desde esta mañana.",      de: "Es regnet seit heute Morgen." },
    { id: "s0505", es: "Seguimos esperando una respuesta.",      de: "Wir warten weiterhin auf eine Antwort." }
  ],
  grammatik: {
    id: "g05", titel: "estar + Gerundio — gerade dabei sein",
    erklaerung: `
      <p>Was im Deutschen mit „gerade" umschrieben wird, hat das Spanische als eigene Form:
      <em>estar</em> + Gerundium.</p>
      <table>
        <tr><th>Endung</th><th>Gerundium</th><th>Beispiel</th></tr>
        <tr><td>-ar</td><td>-<em>ando</em></td><td>hablar → habl<em>ando</em></td></tr>
        <tr><td>-er</td><td>-<em>iendo</em></td><td>comer → com<em>iendo</em></td></tr>
        <tr><td>-ir</td><td>-<em>iendo</em></td><td>vivir → viv<em>iendo</em></td></tr>
      </table>
      <p><strong>Unregelmäßige Formen</strong>, die du oft brauchst:</p>
      <ul>
        <li><em>leer → leyendo</em>, <em>oír → oyendo</em>, <em>ir → yendo</em>
            (nach Vokal wird aus dem i ein y)</li>
        <li><em>dormir → durmiendo</em>, <em>pedir → pidiendo</em>,
            <em>decir → diciendo</em>, <em>venir → viniendo</em></li>
      </ul>
      <p>Statt <em>estar</em> gehen auch:</p>
      <ul>
        <li><em>seguir</em> + Gerundio = weiterhin tun: <em>Sigo trabajando.</em></li>
        <li><em>llevar</em> + Zeit + Gerundio = seit … tun: <em>Llevo dos años estudiando.</em></li>
      </ul>
      <div class="merke"><strong>Achtung, häufiger Fehler:</strong> Für die nahe Zukunft benutzt
      man das <strong>nicht</strong>. „Ich fahre morgen nach Madrid" heißt
      <em>Mañana voy a Madrid</em> — niemals <s>estoy yendo</s>.</div>`,
    uebungen: [
      { id: "g0501", satz: "Estoy ___ (trabajar) ahora.", loesung: "trabajando", tipps: ["trabajando", "trabajendo"], hinweis: "-ar → -ando", de: "Ich arbeite gerade." },
      { id: "g0502", satz: "Los niños están ___ (dormir).", loesung: "durmiendo", tipps: ["durmiendo", "dormiendo"], hinweis: "o → u", de: "Die Kinder schlafen gerade." },
      { id: "g0503", satz: "¿Qué estás ___ (leer)?", loesung: "leyendo", tipps: ["leyendo", "leiendo"], hinweis: "i → y nach Vokal", de: "Was liest du gerade?" },
      { id: "g0504", satz: "Estamos ___ (comer) paella.", loesung: "comiendo", tipps: ["comiendo", "comando"], hinweis: "-er → -iendo", de: "Wir essen gerade Paella." },
      { id: "g0505", satz: "Sigo ___ (esperar) su respuesta.", loesung: "esperando", tipps: ["esperando", "esperiendo"], hinweis: "-ar → -ando", de: "Ich warte weiterhin auf seine Antwort." }
    ]
  }
});

LEKTIONEN.push({
  tag: 6, niveau: "A2", thema: "Einkaufen",
  vokabeln: [
    { id: "v0601", es: "la caja",      de: "die Kasse",       wortart: "Substantiv", beispiel: "Pago en la caja.", beispielDe: "Ich zahle an der Kasse." },
    { id: "v0602", es: "el carrito",   de: "der Einkaufswagen", wortart: "Substantiv", beispiel: "El carrito está lleno.", beispielDe: "Der Einkaufswagen ist voll." },
    { id: "v0603", es: "la oferta",    de: "das Angebot",     wortart: "Substantiv", beispiel: "Hoy hay muchas ofertas.", beispielDe: "Heute gibt es viele Angebote." },
    { id: "v0604", es: "gastar",       de: "ausgeben",        wortart: "Verb", beispiel: "Gasto mucho en comida.", beispielDe: "Ich gebe viel für Essen aus." },
    { id: "v0605", es: "devolver",     de: "zurückgeben",     wortart: "Verb", beispiel: "Quiero devolver esta camisa.", beispielDe: "Ich möchte dieses Hemd zurückgeben." },
    { id: "v0606", es: "el recibo",    de: "der Kassenbon",   wortart: "Substantiv", beispiel: "¿Me da el recibo?", beispielDe: "Geben Sie mir den Kassenbon?" },
    { id: "v0607", es: "barato",       de: "billig",          wortart: "Adjektiv", beispiel: "Este vino es muy barato.", beispielDe: "Dieser Wein ist sehr billig." },
    { id: "v0608", es: "probarse",     de: "anprobieren",     wortart: "Verb", beispiel: "¿Puedo probarme estos pantalones?", beispielDe: "Kann ich diese Hose anprobieren?" },
    { id: "v0609", es: "el tamaño",    de: "die Größe",       wortart: "Substantiv", beispiel: "¿Tiene otro tamaño?", beispielDe: "Haben Sie eine andere Größe?" },
    { id: "v0610", es: "la bolsa",     de: "die Tüte",        wortart: "Substantiv", beispiel: "¿Necesita una bolsa?", beispielDe: "Brauchen Sie eine Tüte?" }
  ],
  saetze: [
    { id: "s0601", es: "El pan lo compro cada mañana.",       de: "Das Brot kaufe ich jeden Morgen." },
    { id: "s0602", es: "¿Las manzanas? Las quiero maduras.",  de: "Die Äpfel? Ich möchte sie reif." },
    { id: "s0603", es: "No lo necesito, gracias.",            de: "Ich brauche es nicht, danke." },
    { id: "s0604", es: "Voy a comprarlo mañana.",             de: "Ich werde es morgen kaufen." },
    { id: "s0605", es: "¿Puedes ayudarme, por favor?",        de: "Kannst du mir bitte helfen?" }
  ],
  grammatik: {
    id: "g06", titel: "Direkte Objektpronomen (lo, la, los, las)",
    erklaerung: `
      <p>Statt ein Wort zu wiederholen, ersetzt du es. Im Deutschen: „Ich kaufe das Brot" →
      „Ich kaufe <strong>es</strong>". Der große Unterschied: Im Spanischen steht das
      Pronomen <strong>vor</strong> dem Verb.</p>
      <table>
        <tr><th>Wen/Was?</th><th>Pronomen</th><th>Beispiel</th></tr>
        <tr><td>mich</td><td><em>me</em></td><td>Ana me ve.</td></tr>
        <tr><td>dich</td><td><em>te</em></td><td>Ana te ve.</td></tr>
        <tr><td>ihn / es (männl.)</td><td><em>lo</em></td><td>Compro el pan → <em>Lo</em> compro.</td></tr>
        <tr><td>sie / es (weibl.)</td><td><em>la</em></td><td>Compro la leche → <em>La</em> compro.</td></tr>
        <tr><td>uns</td><td><em>nos</em></td><td>Ana nos ve.</td></tr>
        <tr><td>euch</td><td><em>os</em></td><td>Ana os ve.</td></tr>
        <tr><td>sie (Mehrzahl, männl.)</td><td><em>los</em></td><td>Compro los libros → <em>Los</em> compro.</td></tr>
        <tr><td>sie (Mehrzahl, weibl.)</td><td><em>las</em></td><td>Compro las flores → <em>Las</em> compro.</td></tr>
      </table>
      <p><strong>Wohin damit?</strong></p>
      <ul>
        <li>Ein Verb → davor: <em>Lo compro.</em></li>
        <li>Verneinung → hinter <em>no</em>: <em>No lo compro.</em></li>
        <li>Infinitiv oder Gerundio → davor <strong>oder</strong> angehängt:<br>
            <em>Lo voy a comprar.</em> = <em>Voy a comprar<strong>lo</strong>.</em></li>
        <li>Bejahter Befehl → immer angehängt: <em>¡Cómpra<strong>lo</strong>!</em></li>
      </ul>
      <div class="merke"><strong>Merke:</strong> Das Pronomen richtet sich nach dem Wort,
      das es ersetzt — <em>el pan</em> ist männlich, also <em>lo</em>, auch wenn Brot im
      Deutschen sächlich ist.</div>`,
    uebungen: [
      { id: "g0601", satz: "¿El periódico? ___ leo cada día.", loesung: "Lo", tipps: ["Lo", "La", "Los"], hinweis: "el periódico → ?", de: "Die Zeitung? Ich lese sie jeden Tag." },
      { id: "g0602", satz: "¿La ventana? No ___ abro.", loesung: "la", tipps: ["la", "lo", "las"], hinweis: "la ventana → ?", de: "Das Fenster? Ich mache es nicht auf." },
      { id: "g0603", satz: "¿Las llaves? ___ tengo yo.", loesung: "Las", tipps: ["Las", "Los", "La"], hinweis: "las llaves → ?", de: "Die Schlüssel? Ich habe sie." },
      { id: "g0604", satz: "Voy a comprar___ mañana.", loesung: "lo", tipps: ["lo", "le", "la"], hinweis: "an den Infinitiv angehängt", de: "Ich kaufe es morgen." },
      { id: "g0605", satz: "¿Me ayudas? Sí, ___ ayudo.", loesung: "te", tipps: ["te", "me", "lo"], hinweis: "dir/dich → ?", de: "Hilfst du mir? Ja, ich helfe dir." }
    ]
  }
});

LEKTIONEN.push({
  tag: 7, niveau: "A2", thema: "Geschenke und Gefallen",
  vokabeln: [
    { id: "v0701", es: "regalar",      de: "schenken",        wortart: "Verb", beispiel: "Le regalo un libro a mi madre.", beispielDe: "Ich schenke meiner Mutter ein Buch." },
    { id: "v0702", es: "prestar",      de: "leihen (geben)",  wortart: "Verb", beispiel: "¿Me prestas tu bolígrafo?", beispielDe: "Leihst du mir deinen Kugelschreiber?" },
    { id: "v0703", es: "el favor",     de: "der Gefallen",    wortart: "Substantiv", beispiel: "¿Me haces un favor?", beispielDe: "Tust du mir einen Gefallen?" },
    { id: "v0704", es: "explicar",     de: "erklären",        wortart: "Verb", beispiel: "El profesor nos explica la lección.", beispielDe: "Der Lehrer erklärt uns die Lektion." },
    { id: "v0705", es: "contar",       de: "erzählen / zählen", wortart: "Verb", beispiel: "Te cuento una historia.", beispielDe: "Ich erzähle dir eine Geschichte." },
    { id: "v0706", es: "enviar",       de: "schicken",        wortart: "Verb", beispiel: "Le envío un correo.", beispielDe: "Ich schicke ihm/ihr eine E-Mail." },
    { id: "v0707", es: "el paquete",   de: "das Paket",       wortart: "Substantiv", beispiel: "Ha llegado un paquete.", beispielDe: "Ein Paket ist angekommen." },
    { id: "v0708", es: "agradecer",    de: "danken",          wortart: "Verb", beispiel: "Te agradezco mucho la ayuda.", beispielDe: "Ich danke dir sehr für die Hilfe." },
    { id: "v0709", es: "el cumpleaños",de: "der Geburtstag",  wortart: "Substantiv", beispiel: "Mañana es mi cumpleaños.", beispielDe: "Morgen ist mein Geburtstag." },
    { id: "v0710", es: "devolverle",   de: "ihm zurückgeben", wortart: "Verb", beispiel: "Tengo que devolverle el dinero.", beispielDe: "Ich muss ihm das Geld zurückgeben." }
  ],
  saetze: [
    { id: "s0701", es: "Le doy las gracias a mi profesora.", de: "Ich danke meiner Lehrerin." },
    { id: "s0702", es: "¿Me puedes prestar veinte euros?",   de: "Kannst du mir zwanzig Euro leihen?" },
    { id: "s0703", es: "Les escribo a mis padres cada semana.", de: "Ich schreibe meinen Eltern jede Woche." },
    { id: "s0704", es: "Nos explican todo con calma.",       de: "Sie erklären uns alles in Ruhe." },
    { id: "s0705", es: "Te cuento lo que pasó ayer.",        de: "Ich erzähle dir, was gestern passiert ist." }
  ],
  grammatik: {
    id: "g07", titel: "Indirekte Objektpronomen (me, te, le, nos, os, les)",
    erklaerung: `
      <p>Das indirekte Objekt beantwortet die Frage <strong>wem?</strong> —
      im Deutschen der Dativ.</p>
      <table>
        <tr><th>wem?</th><th>Pronomen</th><th>Beispiel</th></tr>
        <tr><td>mir</td><td><em>me</em></td><td>Me das el libro.</td></tr>
        <tr><td>dir</td><td><em>te</em></td><td>Te doy el libro.</td></tr>
        <tr><td>ihm / ihr / Ihnen</td><td><em>le</em></td><td>Le doy el libro.</td></tr>
        <tr><td>uns</td><td><em>nos</em></td><td>Nos dan el libro.</td></tr>
        <tr><td>euch</td><td><em>os</em></td><td>Os doy el libro.</td></tr>
        <tr><td>ihnen</td><td><em>les</em></td><td>Les doy el libro.</td></tr>
      </table>
      <p>Nur <em>le</em> und <em>les</em> unterscheiden sich von den direkten Pronomen —
      der Rest ist identisch. Das macht es einfacher, als es aussieht.</p>
      <div class="merke"><strong>Die spanische Eigenheit:</strong> Das Pronomen steht auch
      dann da, wenn die Person danach nochmal genannt wird:<br>
      <em><strong>Le</strong> doy el libro <strong>a Juan</strong>.</em><br>
      Wörtlich „Ihm gebe ich das Buch dem Juan". Klingt für deutsche Ohren doppelt gemoppelt,
      ist aber im Spanischen Pflicht.</div>
      <p>Häufige Verben mit indirektem Objekt: <em>dar</em> (geben), <em>decir</em> (sagen),
      <em>escribir</em> (schreiben), <em>explicar</em> (erklären), <em>preguntar</em> (fragen),
      <em>regalar</em> (schenken), <em>prestar</em> (leihen), <em>enviar</em> (schicken).</p>`,
    uebungen: [
      { id: "g0701", satz: "___ doy el libro a María.", loesung: "Le", tipps: ["Le", "La", "Lo"], hinweis: "a María = wem?", de: "Ich gebe María das Buch." },
      { id: "g0702", satz: "¿___ prestas tu coche? (a mí)", loesung: "Me", tipps: ["Me", "Te", "Le"], hinweis: "mir", de: "Leihst du mir dein Auto?" },
      { id: "g0703", satz: "___ escribo a mis padres.", loesung: "Les", tipps: ["Les", "Le", "Los"], hinweis: "Mehrzahl", de: "Ich schreibe meinen Eltern." },
      { id: "g0704", satz: "El guía ___ explica todo a nosotros.", loesung: "nos", tipps: ["nos", "os", "les"], hinweis: "uns", de: "Der Führer erklärt uns alles." },
      { id: "g0705", satz: "¿Qué ___ regalas a tu hermano?", loesung: "le", tipps: ["le", "lo", "les"], hinweis: "a tu hermano = einer Person", de: "Was schenkst du deinem Bruder?" }
    ]
  }
});

LEKTIONEN.push({
  tag: 8, niveau: "A2", thema: "Im Restaurant",
  vokabeln: [
    { id: "v0801", es: "la carta",     de: "die Speisekarte", wortart: "Substantiv", beispiel: "¿Nos trae la carta?", beispielDe: "Bringen Sie uns die Karte?" },
    { id: "v0802", es: "el camarero",  de: "der Kellner",     wortart: "Substantiv", beispiel: "El camarero es muy simpático.", beispielDe: "Der Kellner ist sehr nett." },
    { id: "v0803", es: "la cuenta",    de: "die Rechnung",    wortart: "Substantiv", beispiel: "La cuenta, por favor.", beispielDe: "Die Rechnung, bitte." },
    { id: "v0804", es: "el plato",     de: "der Teller / das Gericht", wortart: "Substantiv", beispiel: "Este plato está riquísimo.", beispielDe: "Dieses Gericht ist köstlich." },
    { id: "v0805", es: "la propina",   de: "das Trinkgeld",   wortart: "Substantiv", beispiel: "Dejamos una propina.", beispielDe: "Wir lassen ein Trinkgeld da." },
    { id: "v0806", es: "el primero",   de: "die Vorspeise",   wortart: "Substantiv", beispiel: "De primero, una ensalada.", beispielDe: "Als Vorspeise einen Salat." },
    { id: "v0807", es: "el postre",    de: "die Nachspeise",  wortart: "Substantiv", beispiel: "¿Qué hay de postre?", beispielDe: "Was gibt es als Nachtisch?" },
    { id: "v0808", es: "recomendar",   de: "empfehlen",       wortart: "Verb", beispiel: "¿Qué me recomienda?", beispielDe: "Was empfehlen Sie mir?" },
    { id: "v0809", es: "picante",      de: "scharf",          wortart: "Adjektiv", beispiel: "No me gusta muy picante.", beispielDe: "Ich mag es nicht sehr scharf." },
    { id: "v0810", es: "reservar",     de: "reservieren",     wortart: "Verb", beispiel: "He reservado una mesa para dos.", beispielDe: "Ich habe einen Tisch für zwei reserviert." }
  ],
  saetze: [
    { id: "s0801", es: "¿La cuenta? Ya se la traigo.",        de: "Die Rechnung? Ich bringe sie Ihnen sofort." },
    { id: "s0802", es: "Me lo recomendó el camarero.",        de: "Der Kellner hat es mir empfohlen." },
    { id: "s0803", es: "¿Te lo pido yo?",                     de: "Soll ich es für dich bestellen?" },
    { id: "s0804", es: "Nos la trajeron muy rápido.",         de: "Sie brachten sie uns sehr schnell." },
    { id: "s0805", es: "Voy a pedírselo al camarero.",        de: "Ich werde es beim Kellner bestellen." }
  ],
  grammatik: {
    id: "g08", titel: "Beide Pronomen zusammen",
    erklaerung: `
      <p>Wenn beide Pronomen im Satz stehen, gilt eine feste Reihenfolge:</p>
      <div class="merke"><strong>Erst wem, dann was.</strong><br>
      indirekt (<em>me, te, le, nos, os, les</em>) <strong>vor</strong>
      direkt (<em>lo, la, los, las</em>)<br>
      <em>Me lo das.</em> — Du gibst es mir. (nie <s>Lo me das</s>)</div>
      <p><strong>Die eine Sonderregel:</strong> Treffen <em>le/les</em> und <em>lo/la/los/las</em>
      aufeinander, wird aus <em>le/les</em> ein <em>se</em>. Grund: <s>le lo</s> ist für
      spanische Ohren nicht aussprechbar.</p>
      <table>
        <tr><th>statt</th><th>heißt es</th><th>Bedeutung</th></tr>
        <tr><td><s>le lo</s></td><td><em>se lo</em></td><td>es ihm/ihr</td></tr>
        <tr><td><s>le la</s></td><td><em>se la</em></td><td>sie ihm/ihr</td></tr>
        <tr><td><s>les los</s></td><td><em>se los</em></td><td>sie ihnen</td></tr>
      </table>
      <p>Beispiel-Kette:</p>
      <ul>
        <li>Doy el libro a Juan. → <em>Le</em> doy el libro. → <em>Se lo</em> doy.</li>
        <li>Traigo la cuenta a ustedes. → <em>Les</em> traigo la cuenta. → <em>Se la</em> traigo.</li>
      </ul>
      <p>Beim Anhängen an einen Infinitiv rücken beide zusammen ans Ende und es kommt ein
      Akzent dazu: <em>Voy a dár<strong>selo</strong>.</em></p>`,
    uebungen: [
      { id: "g0801", satz: "¿El libro a Juan? ___ lo doy mañana.", loesung: "Se", tipps: ["Se", "Le", "Lo"], hinweis: "le + lo → ?", de: "Das Buch für Juan? Ich gebe es ihm morgen." },
      { id: "g0802", satz: "¿La carta? El camarero ___ la trae.", loesung: "nos", tipps: ["nos", "se", "les"], hinweis: "uns", de: "Die Karte? Der Kellner bringt sie uns." },
      { id: "g0803", satz: "Me ___ explicó muy bien. (el problema)", loesung: "lo", tipps: ["lo", "la", "le"], hinweis: "el problema → ?", de: "Er hat es mir sehr gut erklärt." },
      { id: "g0804", satz: "¿Las fotos? Te ___ envío hoy.", loesung: "las", tipps: ["las", "los", "la"], hinweis: "las fotos → ?", de: "Die Fotos? Ich schicke sie dir heute." },
      { id: "g0805", satz: "Voy a pedír___ al camarero. (se + lo)", loesung: "selo", tipps: ["selo", "lose", "sele"], hinweis: "beide angehängt", de: "Ich werde es beim Kellner bestellen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 9, niveau: "A2", thema: "Vorlieben und Freizeit",
  vokabeln: [
    { id: "v0901", es: "encantar",     de: "sehr gefallen",   wortart: "Verb", beispiel: "Me encanta el cine español.", beispielDe: "Ich liebe das spanische Kino." },
    { id: "v0902", es: "interesar",    de: "interessieren",   wortart: "Verb", beispiel: "Me interesa la historia.", beispielDe: "Geschichte interessiert mich." },
    { id: "v0903", es: "molestar",     de: "stören",          wortart: "Verb", beispiel: "Me molesta el ruido.", beispielDe: "Der Lärm stört mich." },
    { id: "v0904", es: "el ajedrez",   de: "das Schach",      wortart: "Substantiv", beispiel: "Juego al ajedrez los domingos.", beispielDe: "Sonntags spiele ich Schach." },
    { id: "v0905", es: "el senderismo",de: "das Wandern",     wortart: "Substantiv", beispiel: "Hacemos senderismo en verano.", beispielDe: "Im Sommer wandern wir." },
    { id: "v0906", es: "aburrirse",    de: "sich langweilen", wortart: "Verb", beispiel: "Nunca me aburro aquí.", beispielDe: "Hier langweile ich mich nie." },
    { id: "v0907", es: "el ocio",      de: "die Freizeit",    wortart: "Substantiv", beispiel: "Tengo poco tiempo de ocio.", beispielDe: "Ich habe wenig Freizeit." },
    { id: "v0908", es: "apetecer",     de: "Lust haben auf",  wortart: "Verb", beispiel: "¿Te apetece un café?", beispielDe: "Hast du Lust auf einen Kaffee?" },
    { id: "v0909", es: "quedar",       de: "sich verabreden", wortart: "Verb", beispiel: "Quedamos a las siete.", beispielDe: "Wir treffen uns um sieben." },
    { id: "v0910", es: "el aficionado",de: "der Fan",         wortart: "Substantiv", beispiel: "Soy aficionado al fútbol.", beispielDe: "Ich bin Fußballfan." }
  ],
  saetze: [
    { id: "s0901", es: "Me gusta mucho el chocolate.",        de: "Ich mag Schokolade sehr." },
    { id: "s0902", es: "No me gustan las películas largas.",  de: "Ich mag keine langen Filme." },
    { id: "s0903", es: "A mi hermana le encanta bailar.",     de: "Meine Schwester tanzt für ihr Leben gern." },
    { id: "s0904", es: "¿Te apetece salir esta noche?",       de: "Hast du Lust, heute Abend auszugehen?" },
    { id: "s0905", es: "A nosotros nos interesa el arte.",    de: "Uns interessiert Kunst." }
  ],
  grammatik: {
    id: "g09", titel: "gustar und Verben wie gustar",
    erklaerung: `
      <p><em>gustar</em> ist der Klassiker unter den Stolperfallen — es funktioniert
      <strong>umgekehrt</strong> zum deutschen „mögen". Wörtlich heißt es „gefallen".</p>
      <div class="merke">Deutsch: <strong>Ich</strong> mag den Kaffee. (ich = Subjekt)<br>
      Spanisch: <em>Me <strong>gusta</strong> el café.</em> — Der Kaffee gefällt mir.
      (<strong>el café</strong> = Subjekt!)</div>
      <p>Deshalb richtet sich das Verb nicht nach dir, sondern nach dem, was gefällt:</p>
      <table>
        <tr><th>Was gefällt</th><th>Form</th><th>Beispiel</th></tr>
        <tr><td>eine Sache</td><td><em>gusta</em></td><td>Me gusta el libro.</td></tr>
        <tr><td>mehrere Sachen</td><td><em>gustan</em></td><td>Me gustan los libros.</td></tr>
        <tr><td>ein Verb (Infinitiv)</td><td><em>gusta</em></td><td>Me gusta leer.</td></tr>
        <tr><td>mehrere Verben</td><td><em>gusta</em></td><td>Me gusta leer y escribir.</td></tr>
      </table>
      <p>Vor dem Pronomen kann zur Betonung <em>a mí, a ti, a él…</em> stehen:<br>
      <em><strong>A mí</strong> me gusta el té, pero <strong>a ella</strong> le gusta el café.</em></p>
      <p><strong>Genauso funktionieren:</strong></p>
      <ul>
        <li><em>encantar</em> — sehr gefallen: <em>Me encanta la playa.</em></li>
        <li><em>interesar</em> — interessieren: <em>Nos interesan los idiomas.</em></li>
        <li><em>molestar</em> — stören: <em>Le molesta el humo.</em></li>
        <li><em>doler</em> — wehtun: <em>Me duelen los pies.</em></li>
        <li><em>apetecer</em> — Lust haben: <em>¿Te apetece un helado?</em></li>
        <li><em>parecer</em> — erscheinen: <em>Me parece buena idea.</em></li>
      </ul>
      <div class="merke"><strong>Nie:</strong> <s>Yo gusto el café</s> — das hieße
      „Ich schmecke nach Kaffee".</div>`,
    uebungen: [
      { id: "g0901", satz: "Me ___ los libros de historia.", loesung: "gustan", tipps: ["gustan", "gusta"], hinweis: "los libros = Mehrzahl", de: "Ich mag Geschichtsbücher." },
      { id: "g0902", satz: "A Juan ___ gusta el fútbol.", loesung: "le", tipps: ["le", "lo", "se"], hinweis: "a Juan → ?", de: "Juan mag Fußball." },
      { id: "g0903", satz: "Nos ___ mucho viajar.", loesung: "encanta", tipps: ["encanta", "encantan"], hinweis: "viajar = ein Infinitiv", de: "Wir reisen für unser Leben gern." },
      { id: "g0904", satz: "¿Te ___ el ruido? (molestar)", loesung: "molesta", tipps: ["molesta", "molestan"], hinweis: "el ruido = Einzahl", de: "Stört dich der Lärm?" },
      { id: "g0905", satz: "A ellos ___ interesa el arte.", loesung: "les", tipps: ["les", "le", "los"], hinweis: "a ellos → ?", de: "Sie interessieren sich für Kunst." }
    ]
  }
});

LEKTIONEN.push({
  tag: 10, niveau: "A2", thema: "Familie",
  vokabeln: [
    { id: "v1001", es: "el sobrino",   de: "der Neffe",       wortart: "Substantiv", beispiel: "Mi sobrino tiene seis años.", beispielDe: "Mein Neffe ist sechs Jahre alt." },
    { id: "v1002", es: "el cuñado",    de: "der Schwager",    wortart: "Substantiv", beispiel: "Mi cuñado vive en Sevilla.", beispielDe: "Mein Schwager wohnt in Sevilla." },
    { id: "v1003", es: "el nieto",     de: "der Enkel",       wortart: "Substantiv", beispiel: "Tienen cuatro nietos.", beispielDe: "Sie haben vier Enkel." },
    { id: "v1004", es: "la pareja",    de: "der Partner / das Paar", wortart: "Substantiv", beispiel: "Vengo con mi pareja.", beispielDe: "Ich komme mit meinem Partner." },
    { id: "v1005", es: "el suegro",    de: "der Schwiegervater", wortart: "Substantiv", beispiel: "Mis suegros son muy amables.", beispielDe: "Meine Schwiegereltern sind sehr freundlich." },
    { id: "v1006", es: "mayor",        de: "älter",           wortart: "Adjektiv", beispiel: "Mi hermano mayor tiene 40 años.", beispielDe: "Mein älterer Bruder ist 40." },
    { id: "v1007", es: "menor",        de: "jünger",          wortart: "Adjektiv", beispiel: "Soy el menor de la familia.", beispielDe: "Ich bin der Jüngste in der Familie." },
    { id: "v1008", es: "parecerse a",  de: "ähnlich sehen",   wortart: "Verb", beispiel: "Se parece mucho a su padre.", beispielDe: "Er sieht seinem Vater sehr ähnlich." },
    { id: "v1009", es: "el antepasado",de: "der Vorfahre",    wortart: "Substantiv", beispiel: "Mis antepasados eran de Galicia.", beispielDe: "Meine Vorfahren kamen aus Galicien." },
    { id: "v1010", es: "criar",        de: "großziehen",      wortart: "Verb", beispiel: "Sus abuelos lo criaron.", beispielDe: "Seine Großeltern haben ihn großgezogen." }
  ],
  saetze: [
    { id: "s1001", es: "Esta es mi hermana y aquel es su marido.", de: "Das ist meine Schwester und das dort ist ihr Mann." },
    { id: "s1002", es: "Nuestros abuelos viven en el campo.",      de: "Unsere Großeltern leben auf dem Land." },
    { id: "s1003", es: "¿Es tuyo este coche?",                     de: "Ist das dein Auto?" },
    { id: "s1004", es: "Ese chico de allí es mi primo.",           de: "Der Junge dort ist mein Cousin." },
    { id: "s1005", es: "Mi sobrino se parece mucho a mí.",         de: "Mein Neffe sieht mir sehr ähnlich." }
  ],
  grammatik: {
    id: "g10", titel: "Possessiv- und Demonstrativbegleiter",
    erklaerung: `
      <p><strong>Besitz anzeigen.</strong> Vor dem Substantiv stehen die kurzen Formen.
      Sie richten sich nach der <strong>Sache</strong>, nicht nach dem Besitzer:</p>
      <table>
        <tr><th>Person</th><th>Einzahl</th><th>Mehrzahl</th></tr>
        <tr><td>mein</td><td>mi</td><td>mis</td></tr>
        <tr><td>dein</td><td>tu</td><td>tus</td></tr>
        <tr><td>sein/ihr/Ihr</td><td>su</td><td>sus</td></tr>
        <tr><td>unser</td><td>nuestro / nuestra</td><td>nuestros / nuestras</td></tr>
        <tr><td>euer</td><td>vuestro / vuestra</td><td>vuestros / vuestras</td></tr>
        <tr><td>ihr (Mehrzahl)</td><td>su</td><td>sus</td></tr>
      </table>
      <p><em>mi, tu, su</em> haben <strong>keine</strong> weibliche Form:
      <em>mi padre</em> und <em>mi madre</em>. Nur <em>nuestro/vuestro</em> passen sich an.</p>
      <p><strong>Nach dem Substantiv</strong> oder allein stehend nimmt man die langen Formen:
      <em>mío, tuyo, suyo, nuestro, vuestro</em> — <em>¿Es tuyo este libro? Sí, es mío.</em></p>
      <p><strong>Auf Sachen zeigen.</strong> Spanisch unterscheidet drei Entfernungen,
      Deutsch nur zwei:</p>
      <table>
        <tr><th>Entfernung</th><th>männl.</th><th>weibl.</th><th>Mehrzahl</th><th>Deutsch</th></tr>
        <tr><td>hier bei mir</td><td>este</td><td>esta</td><td>estos / estas</td><td>dieser hier</td></tr>
        <tr><td>bei dir</td><td>ese</td><td>esa</td><td>esos / esas</td><td>dieser / der da</td></tr>
        <tr><td>weit weg</td><td>aquel</td><td>aquella</td><td>aquellos / aquellas</td><td>jener dort</td></tr>
      </table>
      <div class="merke"><strong>Eselsbrücke:</strong> <em>este</em> hat ein <em>t</em>
      wie „this" — und wie <em>aquí</em> (hier) gehört es zu dir.</div>`,
    uebungen: [
      { id: "g1001", satz: "___ padres viven en Berlín. (mein)", loesung: "Mis", tipps: ["Mis", "Mi", "Míos"], hinweis: "padres = Mehrzahl", de: "Meine Eltern wohnen in Berlin." },
      { id: "g1002", satz: "___ casa es muy grande. (unser)", loesung: "Nuestra", tipps: ["Nuestra", "Nuestro", "Nuestras"], hinweis: "la casa = weiblich", de: "Unser Haus ist sehr groß." },
      { id: "g1003", satz: "___ libro de aquí es mío.", loesung: "Este", tipps: ["Este", "Ese", "Aquel"], hinweis: "de aquí = hier", de: "Dieses Buch hier gehört mir." },
      { id: "g1004", satz: "¿Ves ___ montaña allí a lo lejos?", loesung: "aquella", tipps: ["aquella", "esta", "esa"], hinweis: "a lo lejos = weit weg", de: "Siehst du jenen Berg dort in der Ferne?" },
      { id: "g1005", satz: "¿Es ___ este bolígrafo? (dein)", loesung: "tuyo", tipps: ["tuyo", "tu", "tuya"], hinweis: "allein stehend → lange Form", de: "Ist das dein Kugelschreiber?" }
    ]
  }
});
