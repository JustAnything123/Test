/* Tag 21–30 · Niveau A1 · Stadt und Verkehr, Freizeit, Wetter, Körper, Pläne
   Seit Oktober 2026. Tag 30 fasst A1 zusammen; ab Tag 31 beginnt A2. */

LEKTION('es-419', {
  tag: 21, niveau: "A1", thema: "In der Stadt",
  vokabeln: [
    { id: "av2101", es: "el banco",         de: "die Bank (Geldinstitut)", wortart: "Substantiv", beispiel: "El banco abre a las nueve.", beispielUe: "Die Bank öffnet um neun." },
    { id: "av2102", es: "la farmacia",      de: "die Apotheke",            wortart: "Substantiv", beispiel: "La farmacia está en la esquina.", beispielUe: "Die Apotheke ist an der Ecke." },
    { id: "av2103", es: "el supermercado",  de: "der Supermarkt",          wortart: "Substantiv", beispiel: "El supermercado cierra a las diez.", beispielUe: "Der Supermarkt schließt um zehn." },
    { id: "av2104", es: "el hospital",      de: "das Krankenhaus",         wortart: "Substantiv", beispiel: "El hospital está lejos.", beispielUe: "Das Krankenhaus ist weit weg." },
    { id: "av2105", es: "la iglesia",       de: "die Kirche",              wortart: "Substantiv", beispiel: "La iglesia es muy antigua.", beispielUe: "Die Kirche ist sehr alt." },
    { id: "av2106", es: "la plaza",         de: "der Platz",               wortart: "Substantiv", beispiel: "Nos vemos en la plaza.", beispielUe: "Wir sehen uns auf dem Platz." },
    { id: "av2107", es: "el museo",         de: "das Museum",              wortart: "Substantiv", beispiel: "El museo cierra los lunes.", beispielUe: "Das Museum ist montags geschlossen." },
    { id: "av2108", es: "la calle",         de: "die Straße",              wortart: "Substantiv", beispiel: "Vivo en esta calle.", beispielUe: "Ich wohne in dieser Straße." },
    { id: "av2109", es: "el parque",        de: "der Park",                wortart: "Substantiv", beispiel: "Corro en el parque.", beispielUe: "Ich laufe im Park." },
    { id: "av2110", es: "ir",               de: "gehen, fahren",           wortart: "Verb",       beispiel: "Voy al trabajo en metro.", beispielUe: "Ich fahre mit der U-Bahn zur Arbeit." }
  ],
  saetze: [
    { id: "as2101", es: "¿Adónde vas? Voy al banco.",                     de: "Wohin gehst du? Ich gehe zur Bank." },
    { id: "as2102", es: "Vamos a la plaza.",                              de: "Wir gehen zum Platz." },
    { id: "as2103", es: "¿Hay una farmacia cerca de aquí?",               de: "Gibt es hier in der Nähe eine Apotheke?" },
    { id: "as2104", es: "Mis amigos van al museo el domingo.",            de: "Meine Freunde gehen am Sonntag ins Museum." },
    { id: "as2105", es: "El parque está al final de la calle.",           de: "Der Park ist am Ende der Straße." }
  ],
  grammatik: {
    id: "ag21", titel: "ir — und warum a + el zu al wird",
    erklaerung: `
      <p><em>ir</em> (gehen, fahren) ist völlig unregelmäßig — aber eines der wichtigsten
      Verben überhaupt.</p>
      <table>
        <tr><th>Person</th><th>ir</th></tr>
        <tr><td>yo</td><td><strong>voy</strong></td></tr>
        <tr><td>tú</td><td><strong>vas</strong></td></tr>
        <tr><td>él / ella / usted</td><td><strong>va</strong></td></tr>
        <tr><td>nosotros</td><td><strong>vamos</strong></td></tr>
        <tr><td>ustedes / ellos</td><td><strong>van</strong></td></tr>
      </table>
      <p>Das Ziel steht mit <strong>a</strong>. Trifft <em>a</em> auf <em>el</em>, verschmelzen
      die beiden:</p>
      <table>
        <tr><th>Ziel</th><th>Spanisch</th></tr>
        <tr><td>el banco</td><td>Voy <strong>al</strong> banco.</td></tr>
        <tr><td>la farmacia</td><td>Voy <strong>a la</strong> farmacia.</td></tr>
        <tr><td>los museos</td><td>Voy <strong>a los</strong> museos.</td></tr>
        <tr><td>casa</td><td>Voy <strong>a casa</strong>. (ohne Artikel = nach Hause)</td></tr>
      </table>
      <div class="merke">Nur <em>a + el</em> verschmilzt zu <strong>al</strong>. Bei
      <em>la, los, las</em> bleibt alles getrennt. Gefragt wird mit <em>¿Adónde vas?</em></div>`,
    uebungen: [
      { id: "ag2101", satz: "Yo ___ al supermercado. (ir)", loesung: "voy", tipps: ["voy", "vas", "va"], hinweis: "yo: voy", ue: "Ich gehe zum Supermarkt." },
      { id: "ag2102", satz: "¿Adónde ___ tú?", loesung: "vas", tipps: ["vas", "va", "voy"], hinweis: "tú: vas", ue: "Wohin gehst du?" },
      { id: "ag2103", satz: "Nosotros vamos ___ parque.", loesung: "al", tipps: ["al", "a el", "a la"], hinweis: "a + el = al", ue: "Wir gehen in den Park." },
      { id: "ag2104", satz: "Ella va ___ farmacia.", loesung: "a la", tipps: ["a la", "al", "a el"], hinweis: "weiblich: a la", ue: "Sie geht zur Apotheke." },
      { id: "ag2105", satz: "Mis padres ___ al museo.", loesung: "van", tipps: ["van", "vamos", "va"], hinweis: "ellos: van", ue: "Meine Eltern gehen ins Museum." }
    ]
  }
});

LEKTION('es-419', {
  tag: 22, niveau: "A1", thema: "Unterwegs: Verkehrsmittel",
  vokabeln: [
    { id: "av2201", es: "el autobús",    de: "der Bus",                    wortart: "Substantiv", beispiel: "El autobús llega tarde.", beispielUe: "Der Bus kommt zu spät." },
    { id: "av2202", es: "el metro",      de: "die U-Bahn",                 wortart: "Substantiv", beispiel: "Tomo el metro todos los días.", beispielUe: "Ich nehme jeden Tag die U-Bahn." },
    { id: "av2203", es: "el tren",       de: "der Zug",                    wortart: "Substantiv", beispiel: "El tren sale a las diez.", beispielUe: "Der Zug fährt um zehn ab." },
    { id: "av2204", es: "el carro",      de: "das Auto",                   wortart: "Substantiv", beispiel: "No tengo carro.", beispielUe: "Ich habe kein Auto." },
    { id: "av2205", es: "la bicicleta",  de: "das Fahrrad",                wortart: "Substantiv", beispiel: "Voy a la oficina en bicicleta.", beispielUe: "Ich fahre mit dem Fahrrad ins Büro." },
    { id: "av2206", es: "el taxi",       de: "das Taxi",                   wortart: "Substantiv", beispiel: "Tomamos un taxi al aeropuerto.", beispielUe: "Wir nehmen ein Taxi zum Flughafen." },
    { id: "av2207", es: "a pie",         de: "zu Fuß",                     wortart: "Ausdruck",   beispiel: "La escuela está cerca, voy a pie.", beispielUe: "Die Schule ist nah, ich gehe zu Fuß." },
    { id: "av2208", es: "el boleto",     de: "die Fahrkarte",              wortart: "Substantiv", beispiel: "¿Dónde compro el boleto?", beispielUe: "Wo kaufe ich die Fahrkarte?" },
    { id: "av2209", es: "manejar",       de: "Auto fahren",                wortart: "Verb",       beispiel: "Mi esposa maneja muy bien.", beispielUe: "Meine Frau fährt sehr gut Auto." },
    { id: "av2210", es: "caminar",       de: "zu Fuß gehen, laufen",       wortart: "Verb",       beispiel: "Me gusta caminar por la ciudad.", beispielUe: "Ich laufe gern durch die Stadt." }
  ],
  saetze: [
    { id: "as2201", es: "¿Cómo vas al trabajo? En metro.",               de: "Wie kommst du zur Arbeit? Mit der U-Bahn." },
    { id: "as2202", es: "Voy a pie porque está cerca.",                  de: "Ich gehe zu Fuß, weil es nah ist." },
    { id: "as2203", es: "Un boleto para Cusco, por favor.",              de: "Eine Fahrkarte nach Cusco, bitte." },
    { id: "as2204", es: "No manejo, siempre tomo el autobús.",           de: "Ich fahre nicht Auto, ich nehme immer den Bus." },
    { id: "as2205", es: "El tren a Valparaíso sale a las nueve.",        de: "Der Zug nach Valparaíso fährt um neun ab." }
  ],
  grammatik: {
    id: "ag22", titel: "Wie kommst du hin? en, a pie, tomar",
    erklaerung: `
      <p>Mit welchem Verkehrsmittel man unterwegs ist, sagt man mit <strong>en</strong> —
      ohne Artikel. Nur zu Fuß ist anders.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th></tr>
        <tr><td>ir <strong>en</strong> autobús / metro / tren</td><td>mit dem Bus / der U-Bahn / dem Zug fahren</td></tr>
        <tr><td>ir <strong>en</strong> carro / bicicleta</td><td>mit dem Auto / dem Fahrrad fahren</td></tr>
        <tr><td>ir <strong>a pie</strong></td><td>zu Fuß gehen</td></tr>
        <tr><td><strong>tomar</strong> el autobús / un taxi</td><td>den Bus / ein Taxi nehmen</td></tr>
        <tr><td><strong>manejar</strong></td><td>Auto fahren (in Spanien: conducir)</td></tr>
      </table>
      <div class="merke">Für „Bus" gibt es viele regionale Wörter: <em>el camión</em>
      (Mexiko), <em>el colectivo</em> (Argentinien), <em>la guagua</em> (Karibik). <em>El
      autobús</em> versteht man überall — darum lernst du es zuerst.</div>`,
    uebungen: [
      { id: "ag2201", satz: "Voy al trabajo ___ metro.", loesung: "en", tipps: ["en", "a", "con"], hinweis: "Verkehrsmittel: en", ue: "Ich fahre mit der U-Bahn zur Arbeit." },
      { id: "ag2202", satz: "La escuela está cerca, voy ___ pie.", loesung: "a", tipps: ["a", "en", "de"], hinweis: "zu Fuß: a pie", ue: "Die Schule ist nah, ich gehe zu Fuß." },
      { id: "ag2203", satz: "Mi hermano ___ un taxi. (tomar)", loesung: "toma", tipps: ["toma", "tomas", "toman"], hinweis: "él: -a", ue: "Mein Bruder nimmt ein Taxi." },
      { id: "ag2204", satz: "Yo no ___ porque no tengo carro. (manejar)", loesung: "manejo", tipps: ["manejo", "maneja", "manejas"], hinweis: "yo: -o", ue: "Ich fahre nicht Auto, weil ich kein Auto habe." },
      { id: "ag2205", satz: "¿Dónde compro el ___?", loesung: "boleto", tipps: ["boleto", "tren", "carro"], hinweis: "Fahrkarte", ue: "Wo kaufe ich die Fahrkarte?" }
    ]
  }
});

LEKTION('es-419', {
  tag: 23, niveau: "A1", thema: "Wo ist das? Ortsangaben",
  vokabeln: [
    { id: "av2301", es: "al lado de",      de: "neben",                 wortart: "Präposition", beispiel: "El banco está al lado del hotel.", beispielUe: "Die Bank ist neben dem Hotel." },
    { id: "av2302", es: "entre",           de: "zwischen",              wortart: "Präposition", beispiel: "La farmacia está entre el banco y el café.", beispielUe: "Die Apotheke ist zwischen der Bank und dem Café." },
    { id: "av2303", es: "delante de",      de: "vor",                   wortart: "Präposition", beispiel: "Te espero delante del cine.", beispielUe: "Ich warte vor dem Kino auf dich." },
    { id: "av2304", es: "encima de",       de: "auf, über",             wortart: "Präposition", beispiel: "Las llaves están encima de la mesa.", beispielUe: "Die Schlüssel liegen auf dem Tisch." },
    { id: "av2305", es: "debajo de",       de: "unter",                 wortart: "Präposition", beispiel: "El gato está debajo de la cama.", beispielUe: "Die Katze ist unter dem Bett." },
    { id: "av2306", es: "a la derecha",    de: "rechts",                wortart: "Ausdruck",    beispiel: "El baño está a la derecha.", beispielUe: "Das Bad ist rechts." },
    { id: "av2307", es: "a la izquierda",  de: "links",                 wortart: "Ausdruck",    beispiel: "La cocina está a la izquierda.", beispielUe: "Die Küche ist links." },
    { id: "av2308", es: "en",              de: "in, auf, an",           wortart: "Präposition", beispiel: "El libro está en la mochila.", beispielUe: "Das Buch ist im Rucksack." },
    { id: "av2309", es: "el hotel",        de: "das Hotel",             wortart: "Substantiv",  beispiel: "El hotel está en el centro.", beispielUe: "Das Hotel ist im Zentrum." },
    { id: "av2310", es: "el centro",       de: "das Zentrum",           wortart: "Substantiv",  beispiel: "Vivo en el centro de la ciudad.", beispielUe: "Ich wohne im Stadtzentrum." }
  ],
  saetze: [
    { id: "as2301", es: "¿Dónde está el hotel? Al lado del museo.",               de: "Wo ist das Hotel? Neben dem Museum." },
    { id: "as2302", es: "Mi celular está encima de la mesa.",                     de: "Mein Handy liegt auf dem Tisch." },
    { id: "as2303", es: "El supermercado está entre la farmacia y el banco.",     de: "Der Supermarkt ist zwischen der Apotheke und der Bank." },
    { id: "as2304", es: "Te espero delante del hotel.",                           de: "Ich warte vor dem Hotel auf dich." },
    { id: "as2305", es: "Los zapatos están debajo de la cama.",                   de: "Die Schuhe sind unter dem Bett." }
  ],
  grammatik: {
    id: "ag23", titel: "Wo ist …? estar mit Ortsangabe",
    erklaerung: `
      <p>Wo etwas ist, sagt man mit <em>estar</em> und einer Ortsangabe. Die meisten
      Ortsangaben enden auf <strong>de</strong>.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th><th>Beispiel</th></tr>
        <tr><td>al lado de</td><td>neben</td><td>al lado <strong>del</strong> banco</td></tr>
        <tr><td>delante de</td><td>vor</td><td>delante <strong>de la</strong> iglesia</td></tr>
        <tr><td>encima de</td><td>auf, über</td><td>encima de la mesa</td></tr>
        <tr><td>debajo de</td><td>unter</td><td>debajo de la cama</td></tr>
        <tr><td>entre … y …</td><td>zwischen … und …</td><td>entre el banco y el café</td></tr>
        <tr><td>a la derecha / izquierda</td><td>rechts / links</td><td>a la derecha del hotel</td></tr>
      </table>
      <div class="merke">Wie <em>a + el = al</em> verschmilzt auch <strong>de + el = del</strong>:
      <em>al lado del hotel</em>. Mit <em>la</em> bleibt es getrennt: <em>al lado de la
      farmacia</em>. Und für den Ort immer <em>estar</em>, nie <em>ser</em>.</div>`,
    uebungen: [
      { id: "ag2301", satz: "El banco está al lado ___ hotel.", loesung: "del", tipps: ["del", "de el", "de la"], hinweis: "de + el = del", ue: "Die Bank ist neben dem Hotel." },
      { id: "ag2302", satz: "Las llaves están encima ___ la mesa.", loesung: "de", tipps: ["de", "del", "en"], hinweis: "vor la: de bleibt getrennt", ue: "Die Schlüssel liegen auf dem Tisch." },
      { id: "ag2303", satz: "El gato está ___ de la cama. (unter)", loesung: "debajo", tipps: ["debajo", "encima", "delante"], hinweis: "unter", ue: "Die Katze ist unter dem Bett." },
      { id: "ag2304", satz: "La farmacia ___ entre el banco y el café.", loesung: "está", tipps: ["está", "es", "hay"], hinweis: "Ort: estar", ue: "Die Apotheke ist zwischen der Bank und dem Café." },
      { id: "ag2305", satz: "El baño está a la ___. (rechts)", loesung: "derecha", tipps: ["derecha", "izquierda", "delante"], hinweis: "rechts", ue: "Das Bad ist rechts." }
    ]
  }
});

LEKTION('es-419', {
  tag: 24, niveau: "A1", thema: "Freizeit und Hobbys",
  vokabeln: [
    { id: "av2401", es: "jugar",        de: "spielen",          wortart: "Verb",       beispiel: "Juego fútbol los sábados.", beispielUe: "Ich spiele samstags Fußball." },
    { id: "av2402", es: "bailar",       de: "tanzen",           wortart: "Verb",       beispiel: "Me gusta bailar salsa.", beispielUe: "Ich tanze gern Salsa." },
    { id: "av2403", es: "cantar",       de: "singen",           wortart: "Verb",       beispiel: "Mi hija canta muy bien.", beispielUe: "Meine Tochter singt sehr gut." },
    { id: "av2404", es: "nadar",        de: "schwimmen",        wortart: "Verb",       beispiel: "En verano nado en el mar.", beispielUe: "Im Sommer schwimme ich im Meer." },
    { id: "av2405", es: "correr",       de: "laufen, rennen",   wortart: "Verb",       beispiel: "Corro por la mañana.", beispielUe: "Ich laufe morgens." },
    { id: "av2406", es: "el fútbol",    de: "der Fußball",      wortart: "Substantiv", beispiel: "El fútbol es muy popular en Argentina.", beispielUe: "Fußball ist in Argentinien sehr beliebt." },
    { id: "av2407", es: "la música",    de: "die Musik",        wortart: "Substantiv", beispiel: "Escucho música en el metro.", beispielUe: "Ich höre Musik in der U-Bahn." },
    { id: "av2408", es: "la película",  de: "der Film",         wortart: "Substantiv", beispiel: "Vemos una película en casa.", beispielUe: "Wir sehen zu Hause einen Film." },
    { id: "av2409", es: "el cine",      de: "das Kino",         wortart: "Substantiv", beispiel: "¿Vamos al cine el viernes?", beispielUe: "Gehen wir am Freitag ins Kino?" },
    { id: "av2410", es: "gustar",       de: "gefallen",         wortart: "Verb",       beispiel: "Me gusta el cine mexicano.", beispielUe: "Mir gefällt das mexikanische Kino." }
  ],
  saetze: [
    { id: "as2401", es: "Me gusta mucho bailar.",                     de: "Ich tanze sehr gern." },
    { id: "as2402", es: "No me gustan las películas de terror.",      de: "Ich mag keine Horrorfilme." },
    { id: "as2403", es: "¿Te gusta el fútbol?",                       de: "Magst du Fußball?" },
    { id: "as2404", es: "Los domingos juego tenis con mi hermano.",   de: "Sonntags spiele ich mit meinem Bruder Tennis." },
    { id: "as2405", es: "A mi novia le gusta cantar.",                de: "Meine Freundin singt gern." }
  ],
  grammatik: {
    id: "ag24", titel: "me gusta oder me gustan?",
    erklaerung: `
      <p><em>gustar</em> funktioniert anders als „mögen". Wörtlich heißt es „gefallen": Das,
      was gefällt, ist das Subjekt — darum richtet sich das Verb danach.</p>
      <table>
        <tr><th>Spanisch</th><th>wörtlich</th><th>Deutsch</th></tr>
        <tr><td>Me <strong>gusta</strong> el cine.</td><td>Mir gefällt das Kino.</td><td>Ich mag Kino.</td></tr>
        <tr><td>Me <strong>gustan</strong> las películas.</td><td>Mir gefallen die Filme.</td><td>Ich mag Filme.</td></tr>
        <tr><td>Me <strong>gusta</strong> bailar.</td><td>Mir gefällt tanzen.</td><td>Ich tanze gern.</td></tr>
      </table>
      <table>
        <tr><th>wem?</th><th>me</th><th>te</th><th>le</th><th>nos</th><th>les</th></tr>
        <tr><td></td><td>mir</td><td>dir</td><td>ihm / ihr / Ihnen</td><td>uns</td><td>euch / ihnen</td></tr>
      </table>
      <div class="merke">Eine Sache oder eine Tätigkeit → <strong>gusta</strong>. Mehrere
      Dinge → <strong>gustan</strong>. Ab Tag 39 kommen Verben dazu, die genauso
      funktionieren (<em>encantar, interesar</em>).</div>
      <p><em>jugar</em> ändert <em>u</em> zu <em>ue</em>: juego, juegas, juega, jugamos,
      juegan. In Lateinamerika sagt man oft <em>jugar fútbol</em> ohne <em>al</em>.</p>`,
    uebungen: [
      { id: "ag2401", satz: "Me ___ el cine.", loesung: "gusta", tipps: ["gusta", "gustan", "gusto"], hinweis: "eine Sache: gusta", ue: "Mir gefällt das Kino." },
      { id: "ag2402", satz: "Me ___ las películas mexicanas.", loesung: "gustan", tipps: ["gustan", "gusta", "gustas"], hinweis: "mehrere: gustan", ue: "Mir gefallen mexikanische Filme." },
      { id: "ag2403", satz: "¿___ gusta bailar? (dir)", loesung: "Te", tipps: ["Te", "Me", "Le"], hinweis: "dir = te", ue: "Tanzt du gern?" },
      { id: "ag2404", satz: "Yo ___ fútbol los sábados. (jugar)", loesung: "juego", tipps: ["juego", "jugo", "juega"], hinweis: "u → ue", ue: "Ich spiele samstags Fußball." },
      { id: "ag2405", satz: "Nos gusta ___ en el mar. (schwimmen)", loesung: "nadar", tipps: ["nadar", "nadamos", "nado"], hinweis: "nach gusta: Infinitiv", ue: "Wir schwimmen gern im Meer." }
    ]
  }
});

LEKTION('es-419', {
  tag: 25, niveau: "A1", thema: "Das Wetter und die Jahreszeiten",
  vokabeln: [
    { id: "av2501", es: "el clima",       de: "das Klima, das Wetter",  wortart: "Substantiv", beispiel: "El clima de Medellín es muy agradable.", beispielUe: "Das Klima in Medellín ist sehr angenehm." },
    { id: "av2502", es: "el sol",         de: "die Sonne",              wortart: "Substantiv", beispiel: "Hoy hay mucho sol.", beispielUe: "Heute scheint viel die Sonne." },
    { id: "av2503", es: "el calor",       de: "die Hitze, die Wärme",   wortart: "Substantiv", beispiel: "En enero hace mucho calor en Buenos Aires.", beispielUe: "Im Januar ist es in Buenos Aires sehr heiß." },
    { id: "av2504", es: "el frío",        de: "die Kälte",              wortart: "Substantiv", beispiel: "En julio hace frío en Santiago.", beispielUe: "Im Juli ist es in Santiago kalt." },
    { id: "av2505", es: "la lluvia",      de: "der Regen",              wortart: "Substantiv", beispiel: "Con la lluvia hay mucho tráfico.", beispielUe: "Bei Regen gibt es viel Verkehr." },
    { id: "av2506", es: "la primavera",   de: "der Frühling",           wortart: "Substantiv", beispiel: "En primavera hay muchas flores.", beispielUe: "Im Frühling gibt es viele Blumen." },
    { id: "av2507", es: "el verano",      de: "der Sommer",             wortart: "Substantiv", beispiel: "En verano vamos a la playa.", beispielUe: "Im Sommer fahren wir an den Strand." },
    { id: "av2508", es: "el otoño",       de: "der Herbst",             wortart: "Substantiv", beispiel: "En otoño llueve mucho aquí.", beispielUe: "Im Herbst regnet es hier viel." },
    { id: "av2509", es: "el invierno",    de: "der Winter",             wortart: "Substantiv", beispiel: "En el sur de Chile, el invierno es largo.", beispielUe: "Im Süden Chiles ist der Winter lang." },
    { id: "av2510", es: "el grado",       de: "das Grad",               wortart: "Substantiv", beispiel: "Hoy hace treinta grados.", beispielUe: "Heute sind es dreißig Grad." }
  ],
  saetze: [
    { id: "as2501", es: "¿Qué tiempo hace hoy?",                       de: "Wie ist das Wetter heute?" },
    { id: "as2502", es: "Hace sol y mucho calor.",                     de: "Es ist sonnig und sehr heiß." },
    { id: "as2503", es: "En diciembre es verano en Argentina.",        de: "Im Dezember ist in Argentinien Sommer." },
    { id: "as2504", es: "Hoy hace frío, necesito una chaqueta.",       de: "Heute ist es kalt, ich brauche eine Jacke." },
    { id: "as2505", es: "Estamos a veinte grados.",                    de: "Wir haben zwanzig Grad." }
  ],
  grammatik: {
    id: "ag25", titel: "Das Wetter mit hacer",
    erklaerung: `
      <p>Über das Wetter spricht man meist mit <strong>hace</strong> (wörtlich „es macht")
      und einem Nomen.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th></tr>
        <tr><td><strong>Hace</strong> sol.</td><td>Die Sonne scheint.</td></tr>
        <tr><td><strong>Hace</strong> calor.</td><td>Es ist heiß.</td></tr>
        <tr><td><strong>Hace</strong> frío.</td><td>Es ist kalt.</td></tr>
        <tr><td><strong>Hace</strong> buen tiempo.</td><td>Es ist schönes Wetter.</td></tr>
        <tr><td>Llueve.</td><td>Es regnet.</td></tr>
        <tr><td>¿Qué tiempo <strong>hace</strong>?</td><td>Wie ist das Wetter?</td></tr>
      </table>
      <div class="merke">Weil <em>calor</em> und <em>frío</em> Nomen sind, heißt „sehr" hier
      <strong>mucho</strong>, nicht <em>muy</em>: <em>Hace mucho calor.</em></div>
      <p>Auf der Südhalbkugel sind die Jahreszeiten umgekehrt: In Chile und Argentinien ist
      Weihnachten im Sommer. In Ländern nahe am Äquator, etwa Kolumbien oder Ecuador,
      spricht man eher von Regen- und Trockenzeit.</p>`,
    uebungen: [
      { id: "ag2501", satz: "Hoy ___ mucho calor.", loesung: "hace", tipps: ["hace", "es", "está"], hinweis: "Wetter: hace", ue: "Heute ist es sehr heiß." },
      { id: "ag2502", satz: "Hace ___ frío. (sehr)", loesung: "mucho", tipps: ["mucho", "muy", "mucha"], hinweis: "vor einem Nomen: mucho", ue: "Es ist sehr kalt." },
      { id: "ag2503", satz: "¿Qué tiempo ___ hoy?", loesung: "hace", tipps: ["hace", "es", "hay"], hinweis: "nach dem Wetter fragt man mit hacer", ue: "Wie ist das Wetter heute?" },
      { id: "ag2504", satz: "En diciembre es ___ en Chile. (Sommer)", loesung: "verano", tipps: ["verano", "invierno", "otoño"], hinweis: "Südhalbkugel", ue: "Im Dezember ist in Chile Sommer." },
      { id: "ag2505", satz: "Hoy hace treinta ___.", loesung: "grados", tipps: ["grados", "grado", "calor"], hinweis: "Plural", ue: "Heute sind es dreißig Grad." }
    ]
  }
});

LEKTION('es-419', {
  tag: 26, niveau: "A1", thema: "Der Körper und wie es mir geht",
  vokabeln: [
    { id: "av2601", es: "la cabeza",     de: "der Kopf",      wortart: "Substantiv", beispiel: "Me duele la cabeza.", beispielUe: "Ich habe Kopfschmerzen." },
    { id: "av2602", es: "el brazo",      de: "der Arm",       wortart: "Substantiv", beispiel: "Tengo un tatuaje en el brazo.", beispielUe: "Ich habe ein Tattoo am Arm." },
    { id: "av2603", es: "la pierna",     de: "das Bein",      wortart: "Substantiv", beispiel: "Me duele la pierna derecha.", beispielUe: "Mir tut das rechte Bein weh." },
    { id: "av2604", es: "la mano",       de: "die Hand",      wortart: "Substantiv", beispiel: "Tengo las manos frías.", beispielUe: "Ich habe kalte Hände." },
    { id: "av2605", es: "el pie",        de: "der Fuß",       wortart: "Substantiv", beispiel: "Tengo los pies cansados.", beispielUe: "Meine Füße sind müde." },
    { id: "av2606", es: "el ojo",        de: "das Auge",      wortart: "Substantiv", beispiel: "Mi hija tiene los ojos verdes.", beispielUe: "Meine Tochter hat grüne Augen." },
    { id: "av2607", es: "la boca",       de: "der Mund",      wortart: "Substantiv", beispiel: "El niño tiene chocolate en la boca.", beispielUe: "Das Kind hat Schokolade am Mund." },
    { id: "av2608", es: "el estómago",   de: "der Magen",     wortart: "Substantiv", beispiel: "Me duele el estómago.", beispielUe: "Ich habe Bauchschmerzen." },
    { id: "av2609", es: "la espalda",    de: "der Rücken",    wortart: "Substantiv", beispiel: "Tengo dolor de espalda.", beispielUe: "Ich habe Rückenschmerzen." },
    { id: "av2610", es: "el hambre",     de: "der Hunger",    wortart: "Substantiv", beispiel: "Tengo mucha hambre.", beispielUe: "Ich habe großen Hunger." }
  ],
  saetze: [
    { id: "as2601", es: "Tengo hambre, ¿comemos algo?",             de: "Ich habe Hunger, essen wir etwas?" },
    { id: "as2602", es: "¿Tienes sed? Sí, mucha.",                  de: "Hast du Durst? Ja, großen." },
    { id: "as2603", es: "Me duele un poco el estómago.",            de: "Mir tut der Magen ein bisschen weh." },
    { id: "as2604", es: "Tengo frío, ¿cierro la ventana?",          de: "Mir ist kalt, soll ich das Fenster zumachen?" },
    { id: "as2605", es: "El bebé tiene sueño.",                     de: "Das Baby ist müde." }
  ],
  grammatik: {
    id: "ag26", titel: "tener hambre — Spanisch hat, Deutsch ist",
    erklaerung: `
      <p>Viele Zustände, die man im Deutschen mit „sein" oder „mir ist" ausdrückt, sagt man
      im Spanischen mit <strong>tener</strong> und einem Nomen.</p>
      <table>
        <tr><th>Spanisch</th><th>Deutsch</th></tr>
        <tr><td>tener hambre</td><td>Hunger haben</td></tr>
        <tr><td>tener sed</td><td>Durst haben</td></tr>
        <tr><td>tener frío</td><td>frieren, mir ist kalt</td></tr>
        <tr><td>tener calor</td><td>mir ist warm / heiß</td></tr>
        <tr><td>tener sueño</td><td>müde sein, schläfrig sein</td></tr>
        <tr><td>tener miedo</td><td>Angst haben</td></tr>
      </table>
      <div class="merke">„Kalt" dreimal anders: Bei <strong>Personen</strong> <em>tener
      frío</em> (Tengo frío), beim <strong>Wetter</strong> <em>hacer frío</em> (Hace frío),
      bei <strong>Dingen</strong> <em>estar frío</em> (La sopa está fría).</div>
      <p>Weil <em>hambre</em> und <em>sed</em> weibliche Nomen sind, heißt „großer Hunger"
      <em>mucha hambre</em>. Und für Schmerzen sagt man <em>me duele …</em> — das lernst du
      an Tag 42 genauer.</p>`,
    uebungen: [
      { id: "ag2601", satz: "Tengo mucha ___. ¿Comemos?", loesung: "hambre", tipps: ["hambre", "sed", "sueño"], hinweis: "Hunger", ue: "Ich habe großen Hunger. Essen wir?" },
      { id: "ag2602", satz: "¿___ frío? (du)", loesung: "Tienes", tipps: ["Tienes", "Estás", "Hace"], hinweis: "Person: tener frío", ue: "Ist dir kalt?" },
      { id: "ag2603", satz: "En invierno ___ frío.", loesung: "hace", tipps: ["hace", "tiene", "está"], hinweis: "Wetter: hacer", ue: "Im Winter ist es kalt." },
      { id: "ag2604", satz: "Tengo ___ sed. (großen)", loesung: "mucha", tipps: ["mucha", "muy", "mucho"], hinweis: "sed ist weiblich", ue: "Ich habe großen Durst." },
      { id: "ag2605", satz: "Me duele la ___. (Kopf)", loesung: "cabeza", tipps: ["cabeza", "boca", "mano"], hinweis: "Kopf", ue: "Ich habe Kopfschmerzen." }
    ]
  }
});

LEKTION('es-419', {
  tag: 27, niveau: "A1", thema: "Wie ist er? Wie ist sie? Personen beschreiben",
  vokabeln: [
    { id: "av2701", es: "alto",         de: "groß (Person)",                wortart: "Adjektiv", beispiel: "Mi hermano es muy alto.", beispielUe: "Mein Bruder ist sehr groß." },
    { id: "av2702", es: "bajo",         de: "klein (Person)",               wortart: "Adjektiv", beispiel: "Mi abuela es baja.", beispielUe: "Meine Oma ist klein." },
    { id: "av2703", es: "joven",        de: "jung",                         wortart: "Adjektiv", beispiel: "La profesora es muy joven.", beispielUe: "Die Lehrerin ist sehr jung." },
    { id: "av2704", es: "simpático",    de: "nett, sympathisch",            wortart: "Adjektiv", beispiel: "Tus amigos son muy simpáticos.", beispielUe: "Deine Freunde sind sehr nett." },
    { id: "av2705", es: "tímido",       de: "schüchtern",                   wortart: "Adjektiv", beispiel: "Al principio soy un poco tímido.", beispielUe: "Am Anfang bin ich ein bisschen schüchtern." },
    { id: "av2706", es: "divertido",    de: "lustig",                       wortart: "Adjektiv", beispiel: "La película es muy divertida.", beispielUe: "Der Film ist sehr lustig." },
    { id: "av2707", es: "inteligente",  de: "klug, intelligent",            wortart: "Adjektiv", beispiel: "Es una niña muy inteligente.", beispielUe: "Sie ist ein sehr kluges Mädchen." },
    { id: "av2708", es: "serio",        de: "ernst",                        wortart: "Adjektiv", beispiel: "Mi jefe es un poco serio.", beispielUe: "Mein Chef ist ein bisschen ernst." },
    { id: "av2709", es: "rubio",        de: "blond",                        wortart: "Adjektiv", beispiel: "No todos los alemanes son rubios.", beispielUe: "Nicht alle Deutschen sind blond." },
    { id: "av2710", es: "moreno",       de: "dunkelhaarig; dunkelhäutig",   wortart: "Adjektiv", beispiel: "Mi novio es moreno.", beispielUe: "Mein Freund ist dunkelhaarig." }
  ],
  saetze: [
    { id: "as2701", es: "¿Cómo es tu hermana? Es alta y morena.",      de: "Wie ist deine Schwester? Sie ist groß und dunkelhaarig." },
    { id: "as2702", es: "Mi jefe es simpático pero un poco serio.",    de: "Mein Chef ist nett, aber ein bisschen ernst." },
    { id: "as2703", es: "Somos muy diferentes.",                       de: "Wir sind sehr verschieden." },
    { id: "as2704", es: "Tiene el pelo largo y los ojos azules.",      de: "Sie hat lange Haare und blaue Augen." },
    { id: "as2705", es: "Mis compañeros de clase son muy divertidos.", de: "Meine Kurskameraden sind sehr lustig." }
  ],
  grammatik: {
    id: "ag27", titel: "Personen beschreiben mit ser und tener",
    erklaerung: `
      <p>Wie jemand <strong>ist</strong> — Aussehen und Charakter —, sagt man mit
      <em>ser</em>. Was jemand <strong>hat</strong> — Haare, Augen —, mit <em>tener</em>.</p>
      <table>
        <tr><th>ser + Adjektiv</th><th>tener + Nomen</th></tr>
        <tr><td>Es alto / alta.</td><td>Tiene el pelo largo / corto.</td></tr>
        <tr><td>Es joven.</td><td>Tiene el pelo rubio / negro.</td></tr>
        <tr><td>Es simpático / simpática.</td><td>Tiene los ojos azules / verdes.</td></tr>
        <tr><td>Es serio / seria.</td><td>Tiene los ojos café.</td></tr>
      </table>
      <table>
        <tr><th>Abstufung</th><th>Beispiel</th></tr>
        <tr><td>muy (sehr)</td><td>Es muy simpática.</td></tr>
        <tr><td>bastante (ziemlich)</td><td>Es bastante alto.</td></tr>
        <tr><td>un poco (ein bisschen)</td><td>Es un poco tímido.</td></tr>
      </table>
      <div class="merke"><em>un poco</em> benutzt man fast nur bei Eigenschaften, die nicht
      ganz positiv sind: <em>un poco serio, un poco tímido</em> — nicht <em>un poco
      simpático</em>. Das klänge wie ein versteckter Vorwurf.</div>`,
    uebungen: [
      { id: "ag2701", satz: "Mi hermano ___ muy alto.", loesung: "es", tipps: ["es", "está", "tiene"], hinweis: "Aussehen: ser", ue: "Mein Bruder ist sehr groß." },
      { id: "ag2702", satz: "Ella ___ los ojos verdes.", loesung: "tiene", tipps: ["tiene", "es", "está"], hinweis: "Augen: tener", ue: "Sie hat grüne Augen." },
      { id: "ag2703", satz: "Mis amigas son muy ___. (simpático)", loesung: "simpáticas", tipps: ["simpáticas", "simpáticos", "simpática"], hinweis: "weiblich Plural", ue: "Meine Freundinnen sind sehr nett." },
      { id: "ag2704", satz: "Al principio soy un ___ tímido.", loesung: "poco", tipps: ["poco", "muy", "mucho"], hinweis: "ein bisschen", ue: "Am Anfang bin ich ein bisschen schüchtern." },
      { id: "ag2705", satz: "La profesora es muy ___. (jung)", loesung: "joven", tipps: ["joven", "jóvena", "jóvenes"], hinweis: "joven hat keine weibliche Form", ue: "Die Lehrerin ist sehr jung." }
    ]
  }
});

LEKTION('es-419', {
  tag: 28, niveau: "A1", thema: "Können und müssen",
  vokabeln: [
    { id: "av2801", es: "poder",       de: "können, dürfen",              wortart: "Verb",     beispiel: "¿Puedo abrir la ventana?", beispielUe: "Darf ich das Fenster öffnen?" },
    { id: "av2802", es: "tener que",   de: "müssen",                      wortart: "Ausdruck", beispiel: "Tengo que trabajar mañana.", beispielUe: "Ich muss morgen arbeiten." },
    { id: "av2803", es: "saber",       de: "wissen; können (gelernt)",    wortart: "Verb",     beispiel: "¿Sabes nadar?", beispielUe: "Kannst du schwimmen?" },
    { id: "av2804", es: "ayudar",      de: "helfen",                      wortart: "Verb",     beispiel: "¿Me puedes ayudar?", beispielUe: "Kannst du mir helfen?" },
    { id: "av2805", es: "cerrar",      de: "schließen, zumachen",         wortart: "Verb",     beispiel: "La tienda cierra a las ocho.", beispielUe: "Der Laden schließt um acht." },
    { id: "av2806", es: "entrar",      de: "hineingehen, eintreten",      wortart: "Verb",     beispiel: "No se puede entrar con perros.", beispielUe: "Mit Hunden darf man nicht hinein." },
    { id: "av2807", es: "la ayuda",    de: "die Hilfe",                   wortart: "Substantiv", beispiel: "Gracias por tu ayuda.", beispielUe: "Danke für deine Hilfe." },
    { id: "av2808", es: "pasar",       de: "hereinkommen; vorbeikommen",  wortart: "Verb",     beispiel: "Pase, por favor.", beispielUe: "Kommen Sie bitte herein." },
    { id: "av2809", es: "fácil",       de: "leicht, einfach",             wortart: "Adjektiv", beispiel: "Esta palabra es fácil.", beispielUe: "Dieses Wort ist leicht." },
    { id: "av2810", es: "difícil",     de: "schwierig",                   wortart: "Adjektiv", beispiel: "La gramática es un poco difícil.", beispielUe: "Die Grammatik ist ein bisschen schwierig." }
  ],
  saetze: [
    { id: "as2801", es: "¿Puedes hablar más despacio, por favor?",  de: "Kannst du bitte langsamer sprechen?" },
    { id: "as2802", es: "Hoy no puedo, tengo que trabajar.",        de: "Heute kann ich nicht, ich muss arbeiten." },
    { id: "as2803", es: "¿Se puede pagar con tarjeta?",             de: "Kann man mit Karte zahlen?" },
    { id: "as2804", es: "Tenemos que llegar a las ocho.",           de: "Wir müssen um acht da sein." },
    { id: "as2805", es: "No sé nadar.",                             de: "Ich kann nicht schwimmen." }
  ],
  grammatik: {
    id: "ag28", titel: "poder, saber und tener que",
    erklaerung: `
      <p>Nach <em>poder</em>, <em>saber</em> und <em>tener que</em> folgt einfach ein
      Infinitiv — wie im Deutschen nach „können" und „müssen".</p>
      <table>
        <tr><th>Person</th><th>poder (o → ue)</th><th>tener que</th></tr>
        <tr><td>yo</td><td><strong>puedo</strong></td><td>tengo que</td></tr>
        <tr><td>tú</td><td>puedes</td><td>tienes que</td></tr>
        <tr><td>él / ella / usted</td><td>puede</td><td>tiene que</td></tr>
        <tr><td>nosotros</td><td>podemos</td><td>tenemos que</td></tr>
        <tr><td>ustedes / ellos</td><td>pueden</td><td>tienen que</td></tr>
      </table>
      <div class="merke">„Können" hat zwei Übersetzungen: <strong>poder</strong> = es ist
      möglich oder erlaubt (<em>Hoy no puedo nadar, hace frío.</em>), <strong>saber</strong>
      = ich habe es gelernt (<em>Sé nadar.</em>). <em>saber</em> ist bei <em>yo</em>
      unregelmäßig: <strong>sé</strong>.</div>
      <p><em>¿Se puede …?</em> fragt, ob etwas erlaubt ist: <em>¿Se puede entrar?</em></p>`,
    uebungen: [
      { id: "ag2801", satz: "¿___ ayudarme? (du, können)", loesung: "Puedes", tipps: ["Puedes", "Puede", "Puedo"], hinweis: "tú: puedes", ue: "Kannst du mir helfen?" },
      { id: "ag2802", satz: "Hoy no ___, tengo que trabajar. (ich, können)", loesung: "puedo", tipps: ["puedo", "podo", "sé"], hinweis: "o → ue", ue: "Heute kann ich nicht, ich muss arbeiten." },
      { id: "ag2803", satz: "Tengo ___ estudiar.", loesung: "que", tipps: ["que", "de", "a"], hinweis: "müssen = tener que", ue: "Ich muss lernen." },
      { id: "ag2804", satz: "¿___ nadar? (du, gelernt)", loesung: "Sabes", tipps: ["Sabes", "Puedes", "Tienes"], hinweis: "gelernte Fähigkeit: saber", ue: "Kannst du schwimmen?" },
      { id: "ag2805", satz: "Nosotros ___ que salir temprano.", loesung: "tenemos", tipps: ["tenemos", "tienen", "tengo"], hinweis: "nosotros: tenemos", ue: "Wir müssen früh losgehen." }
    ]
  }
});

LEKTION('es-419', {
  tag: 29, niveau: "A1", thema: "Pläne fürs Wochenende",
  vokabeln: [
    { id: "av2901", es: "hacer",             de: "machen, tun",                  wortart: "Verb",       beispiel: "¿Qué haces el sábado?", beispielUe: "Was machst du am Samstag?" },
    { id: "av2902", es: "la fiesta",         de: "das Fest, die Party",          wortart: "Substantiv", beispiel: "Hay una fiesta en casa de Pedro.", beispielUe: "Bei Pedro ist eine Party." },
    { id: "av2903", es: "invitar",           de: "einladen",                     wortart: "Verb",       beispiel: "Te invito a mi cumpleaños.", beispielUe: "Ich lade dich zu meinem Geburtstag ein." },
    { id: "av2904", es: "visitar",           de: "besuchen",                     wortart: "Verb",       beispiel: "Visito a mis abuelos el domingo.", beispielUe: "Am Sonntag besuche ich meine Großeltern." },
    { id: "av2905", es: "la playa",          de: "der Strand",                   wortart: "Substantiv", beispiel: "La playa está a diez minutos.", beispielUe: "Der Strand ist zehn Minuten entfernt." },
    { id: "av2906", es: "la montaña",        de: "der Berg; das Gebirge",        wortart: "Substantiv", beispiel: "Me gusta caminar en la montaña.", beispielUe: "Ich wandere gern in den Bergen." },
    { id: "av2907", es: "el concierto",      de: "das Konzert",                  wortart: "Substantiv", beispiel: "El concierto empieza a las nueve.", beispielUe: "Das Konzert beginnt um neun." },
    { id: "av2908", es: "el amigo, la amiga", de: "der Freund, die Freundin",    wortart: "Substantiv", beispiel: "Salgo con mis amigos.", beispielUe: "Ich gehe mit meinen Freunden aus." },
    { id: "av2909", es: "juntos",            de: "zusammen",                     wortart: "Adjektiv",   beispiel: "¿Comemos juntos?", beispielUe: "Essen wir zusammen?" },
    { id: "av2910", es: "esta noche",        de: "heute Abend",                  wortart: "Ausdruck",   beispiel: "Esta noche vamos al cine.", beispielUe: "Heute Abend gehen wir ins Kino." }
  ],
  saetze: [
    { id: "as2901", es: "¿Qué vas a hacer el sábado?",          de: "Was machst du am Samstag?" },
    { id: "as2902", es: "Voy a visitar a mi familia.",          de: "Ich werde meine Familie besuchen." },
    { id: "as2903", es: "Vamos a ir a la playa.",               de: "Wir fahren an den Strand." },
    { id: "as2904", es: "¿Quieres venir a mi fiesta?",          de: "Möchtest du zu meiner Party kommen?" },
    { id: "as2905", es: "Mañana no hago nada.",                 de: "Morgen mache ich nichts." }
  ],
  grammatik: {
    id: "ag29", titel: "hacer und ir a + Infinitiv",
    erklaerung: `
      <p><em>hacer</em> (machen) ist nur bei <em>yo</em> unregelmäßig. Und mit <em>ir a</em>
      + Infinitiv sprichst du über Pläne — so, wie man im Deutschen „ich werde …" oder
      einfach das Präsens benutzt.</p>
      <table>
        <tr><th>Person</th><th>hacer</th><th>ir a + Infinitiv</th></tr>
        <tr><td>yo</td><td><strong>hago</strong></td><td>voy a comer</td></tr>
        <tr><td>tú</td><td>haces</td><td>vas a visitar</td></tr>
        <tr><td>él / ella / usted</td><td>hace</td><td>va a ir</td></tr>
        <tr><td>nosotros</td><td>hacemos</td><td>vamos a bailar</td></tr>
        <tr><td>ustedes / ellos</td><td>hacen</td><td>van a cenar</td></tr>
      </table>
      <div class="merke">In Lateinamerika ist <em>ir a</em> + Infinitiv im Alltag viel häufiger
      als das Futur: <em>Voy a llamar a mi mamá.</em> — Ich rufe meine Mama an. Mehr dazu an
      Tag 51.</div>
      <p>Wenn eine <strong>Person</strong> das Objekt ist, steht ein <strong>a</strong>
      davor: <em>Visito <strong>a</strong> mis abuelos.</em> — aber <em>Visito el museo.</em></p>`,
    uebungen: [
      { id: "ag2901", satz: "¿Qué ___ tú el domingo? (hacer)", loesung: "haces", tipps: ["haces", "hace", "hago"], hinweis: "tú: haces", ue: "Was machst du am Sonntag?" },
      { id: "ag2902", satz: "Yo no ___ nada hoy. (hacer)", loesung: "hago", tipps: ["hago", "hace", "haco"], hinweis: "yo: hago", ue: "Ich mache heute nichts." },
      { id: "ag2903", satz: "Voy ___ visitar a mi abuela.", loesung: "a", tipps: ["a", "de", "que"], hinweis: "ir a + Infinitiv", ue: "Ich werde meine Oma besuchen." },
      { id: "ag2904", satz: "Nosotros ___ a ir a la playa.", loesung: "vamos", tipps: ["vamos", "van", "voy"], hinweis: "nosotros: vamos", ue: "Wir werden an den Strand fahren." },
      { id: "ag2905", satz: "Visito ___ mis amigos en Lima.", loesung: "a", tipps: ["a", "con", "de"], hinweis: "Person als Objekt: a", ue: "Ich besuche meine Freunde in Lima." }
    ]
  }
});

LEKTION('es-419', {
  tag: 30, niveau: "A1", thema: "Wiederholung: Das kann ich schon",
  vokabeln: [
    { id: "av3001", es: "entender",       de: "verstehen",              wortart: "Verb",       beispiel: "No entiendo esta palabra.", beispielUe: "Ich verstehe dieses Wort nicht." },
    { id: "av3002", es: "despacio",       de: "langsam",                wortart: "Adverb",     beispiel: "Más despacio, por favor.", beispielUe: "Langsamer, bitte." },
    { id: "av3003", es: "significar",     de: "bedeuten",               wortart: "Verb",       beispiel: "¿Qué significa «mañana»?", beispielUe: "Was bedeutet „mañana“?" },
    { id: "av3004", es: "la respuesta",   de: "die Antwort",            wortart: "Substantiv", beispiel: "Gracias por la respuesta.", beispielUe: "Danke für die Antwort." },
    { id: "av3005", es: "la frase",       de: "der Satz",               wortart: "Substantiv", beispiel: "Escribe una frase con «tener».", beispielUe: "Schreib einen Satz mit „tener“." },
    { id: "av3006", es: "el ejemplo",     de: "das Beispiel",           wortart: "Substantiv", beispiel: "¿Me das un ejemplo?", beispielUe: "Gibst du mir ein Beispiel?" },
    { id: "av3007", es: "correcto",       de: "richtig",                wortart: "Adjektiv",   beispiel: "Todo está correcto.", beispielUe: "Alles ist richtig." },
    { id: "av3008", es: "la clase",       de: "der Unterricht, der Kurs", wortart: "Substantiv", beispiel: "La clase de español es los martes.", beispielUe: "Der Spanischkurs ist dienstags." },
    { id: "av3009", es: "practicar",      de: "üben",                   wortart: "Verb",       beispiel: "Practico español con una amiga peruana.", beispielUe: "Ich übe Spanisch mit einer peruanischen Freundin." },
    { id: "av3010", es: "el principiante", de: "der Anfänger",          wortart: "Substantiv", beispiel: "Soy principiante, hablo un poco.", beispielUe: "Ich bin Anfänger, ich spreche ein bisschen." }
  ],
  saetze: [
    { id: "as3001", es: "Perdón, no entiendo. ¿Puede hablar más despacio?",   de: "Entschuldigung, ich verstehe nicht. Können Sie langsamer sprechen?" },
    { id: "as3002", es: "¿Cómo se escribe tu nombre?",                        de: "Wie schreibt man deinen Namen?" },
    { id: "as3003", es: "Estudio español porque quiero viajar a México.",     de: "Ich lerne Spanisch, weil ich nach Mexiko reisen möchte." },
    { id: "as3004", es: "Practico todos los días un poco.",                   de: "Ich übe jeden Tag ein bisschen." },
    { id: "as3005", es: "Ya hablo un poco de español.",                       de: "Ich spreche schon ein bisschen Spanisch." }
  ],
  grammatik: {
    id: "ag30", titel: "A1 im Überblick: die sechs wichtigsten Verben",
    erklaerung: `
      <p>In 30 Tagen hast du die Grundlagen gelegt. Diese sechs unregelmäßigen Verben
      tragen fast jeden Satz im Alltag — hier stehen sie nebeneinander.</p>
      <table>
        <tr><th></th><th>yo</th><th>tú</th><th>él / ella / usted</th><th>nosotros</th><th>ustedes / ellos</th></tr>
        <tr><td><strong>ser</strong></td><td>soy</td><td>eres</td><td>es</td><td>somos</td><td>son</td></tr>
        <tr><td><strong>estar</strong></td><td>estoy</td><td>estás</td><td>está</td><td>estamos</td><td>están</td></tr>
        <tr><td><strong>tener</strong></td><td>tengo</td><td>tienes</td><td>tiene</td><td>tenemos</td><td>tienen</td></tr>
        <tr><td><strong>ir</strong></td><td>voy</td><td>vas</td><td>va</td><td>vamos</td><td>van</td></tr>
        <tr><td><strong>hacer</strong></td><td>hago</td><td>haces</td><td>hace</td><td>hacemos</td><td>hacen</td></tr>
        <tr><td><strong>poder</strong></td><td>puedo</td><td>puedes</td><td>puede</td><td>podemos</td><td>pueden</td></tr>
      </table>
      <div class="merke">Mit diesen sechs Verben und den regelmäßigen Endungen auf
      <em>-ar, -er, -ir</em> kannst du dich vorstellen, einkaufen, bestellen, nach dem Weg
      fragen und Pläne machen. Ab Tag 31 beginnt A2: <em>ser</em> oder <em>estar</em> im
      Detail, reflexive Verben und die Vergangenheit.</div>
      <p>Nach Tag 30 wartet die Prüfung A1 auf dich — nach dem Vorbild des DELE A1.</p>`,
    uebungen: [
      { id: "ag3001", satz: "Yo ___ de Alemania. (ser)", loesung: "soy", tipps: ["soy", "estoy", "tengo"], hinweis: "Herkunft: ser", ue: "Ich komme aus Deutschland." },
      { id: "ag3002", satz: "Mis padres ___ en casa. (estar)", loesung: "están", tipps: ["están", "son", "estan"], hinweis: "Ort: estar — mit Akzent", ue: "Meine Eltern sind zu Hause." },
      { id: "ag3003", satz: "¿Cuántos años ___ tu hijo? (tener)", loesung: "tiene", tipps: ["tiene", "es", "tienes"], hinweis: "Alter: tener", ue: "Wie alt ist dein Sohn?" },
      { id: "ag3004", satz: "Mañana ___ a la playa. (wir, ir)", loesung: "vamos", tipps: ["vamos", "van", "voy"], hinweis: "nosotros: vamos", ue: "Morgen fahren wir an den Strand." },
      { id: "ag3005", satz: "¿___ hablar más despacio? (Sie, können)", loesung: "Puede", tipps: ["Puede", "Puedes", "Pueden"], hinweis: "usted: puede", ue: "Können Sie langsamer sprechen?" }
    ]
  }
});
