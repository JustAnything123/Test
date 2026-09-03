/* Tag 21–30 · Niveau A2 · Zukunft, Umschreibungen, Nebensätze */

LEKTIONEN.push({
  tag: 21, niveau: "A2", thema: "Pläne machen",
  vokabeln: [
    { id: "v2101", es: "el plan",        de: "der Plan",         wortart: "Substantiv", beispiel: "¿Tienes planes para el finde?", beispielDe: "Hast du Pläne fürs Wochenende?" },
    { id: "v2102", es: "el propósito",   de: "der Vorsatz",      wortart: "Substantiv", beispiel: "Mi propósito es aprender español.", beispielDe: "Mein Vorsatz ist, Spanisch zu lernen." },
    { id: "v2103", es: "apuntarse",      de: "sich anmelden",    wortart: "Verb", beispiel: "Me voy a apuntar a un curso.", beispielDe: "Ich werde mich für einen Kurs anmelden." },
    { id: "v2104", es: "el objetivo",    de: "das Ziel",         wortart: "Substantiv", beispiel: "Tenemos un objetivo claro.", beispielDe: "Wir haben ein klares Ziel." },
    { id: "v2105", es: "intentar",       de: "versuchen",        wortart: "Verb", beispiel: "Voy a intentarlo otra vez.", beispielDe: "Ich werde es nochmal versuchen." },
    { id: "v2106", es: "el fin de semana", de: "das Wochenende", wortart: "Substantiv", beispiel: "El fin de semana descanso.", beispielDe: "Am Wochenende ruhe ich mich aus." },
    { id: "v2107", es: "pronto",         de: "bald",             wortart: "Adverb", beispiel: "Nos vemos pronto.", beispielDe: "Wir sehen uns bald." },
    { id: "v2108", es: "dentro de",      de: "in (zeitlich)",    wortart: "Präposition", beispiel: "Vuelvo dentro de dos horas.", beispielDe: "Ich komme in zwei Stunden zurück." },
    { id: "v2109", es: "aplazar",        de: "verschieben",      wortart: "Verb", beispiel: "Vamos a aplazar la reunión.", beispielDe: "Wir werden die Sitzung verschieben." },
    { id: "v2110", es: "la agenda",      de: "der Terminkalender", wortart: "Substantiv", beispiel: "Lo apunto en mi agenda.", beispielDe: "Ich trage es in meinen Kalender ein." }
  ],
  saetze: [
    { id: "s2101", es: "Voy a estudiar español todos los días.", de: "Ich werde jeden Tag Spanisch lernen." },
    { id: "s2102", es: "¿Qué vas a hacer este fin de semana?",   de: "Was wirst du dieses Wochenende machen?" },
    { id: "s2103", es: "Vamos a mudarnos el mes que viene.",     de: "Wir werden nächsten Monat umziehen." },
    { id: "s2104", es: "Van a llegar sobre las nueve.",          de: "Sie werden gegen neun ankommen." },
    { id: "s2105", es: "Acabo de hablar con ella.",              de: "Ich habe gerade mit ihr gesprochen." }
  ],
  grammatik: {
    id: "g21", titel: "ir a + Infinitiv und andere Verbumschreibungen",
    erklaerung: `
      <p>Für die nahe Zukunft nimmt man im Alltag fast immer <em>ir a</em> + Infinitiv —
      genau wie im Deutschen „ich werde …" oder „ich habe vor zu …".</p>
      <table>
        <tr><th>Person</th><th>Form</th></tr>
        <tr><td>yo</td><td>voy a comer</td></tr>
        <tr><td>tú</td><td>vas a comer</td></tr>
        <tr><td>él/ella</td><td>va a comer</td></tr>
        <tr><td>nosotros</td><td>vamos a comer</td></tr>
        <tr><td>vosotros</td><td>vais a comer</td></tr>
        <tr><td>ellos</td><td>van a comer</td></tr>
      </table>
      <div class="merke">Das <em>a</em> darf nie fehlen: <em>Voy <strong>a</strong> comer.</em>
      — <s>Voy comer</s> ist falsch.</div>
      <p><strong>Weitere nützliche Umschreibungen</strong> — jede sagt etwas anderes über
      den Zeitpunkt oder die Art der Handlung:</p>
      <table>
        <tr><th>Ausdruck</th><th>Bedeutung</th><th>Beispiel</th></tr>
        <tr><td><em>acabar de</em> + Inf.</td><td>gerade eben getan</td><td>Acabo de llegar. (Ich bin gerade angekommen.)</td></tr>
        <tr><td><em>volver a</em> + Inf.</td><td>wieder tun</td><td>Vuelvo a intentarlo. (Ich versuche es nochmal.)</td></tr>
        <tr><td><em>soler</em> + Inf.</td><td>gewöhnlich tun</td><td>Suelo cenar tarde. (Ich esse meist spät.)</td></tr>
        <tr><td><em>empezar a</em> + Inf.</td><td>anfangen zu</td><td>Empiezo a entender. (Ich fange an zu verstehen.)</td></tr>
        <tr><td><em>dejar de</em> + Inf.</td><td>aufhören zu</td><td>Dejé de fumar. (Ich hörte auf zu rauchen.)</td></tr>
        <tr><td><em>seguir</em> + Gerundio</td><td>weiter tun</td><td>Sigo estudiando. (Ich lerne weiter.)</td></tr>
      </table>
      <div class="merke"><em>acabar de</em> ist besonders praktisch: Es ersetzt das,
      wofür Deutsch das Wort „gerade" braucht — und steht immer im Präsens, obwohl es
      Vergangenheit ausdrückt.</div>`,
    uebungen: [
      { id: "g2101", satz: "Yo ___ a estudiar esta tarde.", loesung: "voy", tipps: ["voy", "vas", "va"], hinweis: "yo → ?", de: "Ich werde heute Nachmittag lernen." },
      { id: "g2102", satz: "Nosotros vamos ___ viajar en julio.", loesung: "a", tipps: ["a", "de", "que"], hinweis: "das kleine Wörtchen", de: "Wir werden im Juli reisen." },
      { id: "g2103", satz: "___ de llegar. (ich, gerade eben)", loesung: "Acabo", tipps: ["Acabo", "Voy", "Suelo"], hinweis: "gerade eben", de: "Ich bin gerade angekommen." },
      { id: "g2104", satz: "___ cenar muy tarde. (ich pflege)", loesung: "Suelo", tipps: ["Suelo", "Voy", "Acabo"], hinweis: "gewohnheitsmäßig", de: "Ich esse gewöhnlich sehr spät." },
      { id: "g2105", satz: "Ella ___ a llamarte mañana.", loesung: "va", tipps: ["va", "van", "vas"], hinweis: "ella → ?", de: "Sie wird dich morgen anrufen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 22, niveau: "A2", thema: "Nächstes Jahr",
  vokabeln: [
    { id: "v2201", es: "el futuro",      de: "die Zukunft",      wortart: "Substantiv", beispiel: "Nadie conoce el futuro.", beispielDe: "Niemand kennt die Zukunft." },
    { id: "v2202", es: "el sueldo",      de: "das Gehalt",       wortart: "Substantiv", beispiel: "El sueldo subirá el año próximo.", beispielDe: "Das Gehalt wird nächstes Jahr steigen." },
    { id: "v2203", es: "mudarse",        de: "umziehen",         wortart: "Verb", beispiel: "Nos mudaremos a otra ciudad.", beispielDe: "Wir werden in eine andere Stadt ziehen." },
    { id: "v2204", es: "el ahorro",      de: "die Ersparnis",    wortart: "Substantiv", beispiel: "Necesitamos más ahorros.", beispielDe: "Wir brauchen mehr Ersparnisse." },
    { id: "v2205", es: "jubilarse",      de: "in Rente gehen",   wortart: "Verb", beispiel: "Se jubilará en cinco años.", beispielDe: "Er wird in fünf Jahren in Rente gehen." },
    { id: "v2206", es: "probablemente",  de: "wahrscheinlich",   wortart: "Adverb", beispiel: "Probablemente vendrá.", beispielDe: "Wahrscheinlich kommt er." },
    { id: "v2207", es: "quizás",         de: "vielleicht",       wortart: "Adverb", beispiel: "Quizás llueva mañana.", beispielDe: "Vielleicht regnet es morgen." },
    { id: "v2208", es: "seguramente",    de: "sicherlich",       wortart: "Adverb", beispiel: "Seguramente estará en casa.", beispielDe: "Er wird sicher zu Hause sein." },
    { id: "v2209", es: "la esperanza",   de: "die Hoffnung",     wortart: "Substantiv", beispiel: "No pierdo la esperanza.", beispielDe: "Ich verliere die Hoffnung nicht." },
    { id: "v2210", es: "el porvenir",    de: "die Zukunft (gehoben)", wortart: "Substantiv", beispiel: "Piensa en su porvenir.", beispielDe: "Er denkt an seine Zukunft." }
  ],
  saetze: [
    { id: "s2201", es: "El año que viene viviré en España.",  de: "Nächstes Jahr werde ich in Spanien leben." },
    { id: "s2202", es: "¿Qué harás después de la universidad?", de: "Was wirst du nach der Uni machen?" },
    { id: "s2203", es: "Tendremos que trabajar mucho.",       de: "Wir werden viel arbeiten müssen." },
    { id: "s2204", es: "Serán las tres, más o menos.",        de: "Es wird ungefähr drei Uhr sein." },
    { id: "s2205", es: "¿Dónde estará mi móvil?",             de: "Wo mag nur mein Handy sein?" }
  ],
  grammatik: {
    id: "g22", titel: "Futuro simple — die einfache Zukunft",
    erklaerung: `
      <p>Die einfachste Zeitform überhaupt: Du hängst die Endungen an den
      <strong>ganzen Infinitiv</strong> an — bei allen drei Verbgruppen dieselben.</p>
      <table>
        <tr><th>Person</th><th>Endung</th><th>hablar</th><th>comer</th></tr>
        <tr><td>yo</td><td>-é</td><td>hablaré</td><td>comeré</td></tr>
        <tr><td>tú</td><td>-ás</td><td>hablarás</td><td>comerás</td></tr>
        <tr><td>él/ella</td><td>-á</td><td>hablará</td><td>comerá</td></tr>
        <tr><td>nosotros</td><td>-emos</td><td>hablaremos</td><td>comeremos</td></tr>
        <tr><td>vosotros</td><td>-éis</td><td>hablaréis</td><td>comeréis</td></tr>
        <tr><td>ellos</td><td>-án</td><td>hablarán</td><td>comerán</td></tr>
      </table>
      <p><strong>Zwölf Verben mit verkürztem Stamm</strong> — die Endungen bleiben gleich:</p>
      <table>
        <tr><th>Verb</th><th>Stamm</th><th></th><th>Verb</th><th>Stamm</th></tr>
        <tr><td>tener</td><td>tendr-</td><td></td><td>hacer</td><td>har-</td></tr>
        <tr><td>poner</td><td>pondr-</td><td></td><td>decir</td><td>dir-</td></tr>
        <tr><td>venir</td><td>vendr-</td><td></td><td>poder</td><td>podr-</td></tr>
        <tr><td>salir</td><td>saldr-</td><td></td><td>saber</td><td>sabr-</td></tr>
        <tr><td>haber</td><td>habr-</td><td></td><td>querer</td><td>querr-</td></tr>
      </table>
      <div class="merke"><strong>Der zweite, überraschende Gebrauch:</strong> Das Futuro
      drückt auch eine <strong>Vermutung über die Gegenwart</strong> aus.<br>
      <em>¿Dónde <strong>estará</strong> Juan?</em> — Wo mag Juan wohl sein?<br>
      <em><strong>Serán</strong> las cinco.</em> — Es wird wohl fünf Uhr sein.<br>
      Das ist im Alltag sogar häufiger als die echte Zukunft.</div>
      <p><strong>Futuro oder <em>ir a</em>?</strong> Im gesprochenen Spanisch überwiegt
      <em>ir a</em> für konkrete Pläne. Das Futuro klingt förmlicher und passt zu
      Vorhersagen, Versprechen und Vermutungen.</p>`,
    uebungen: [
      { id: "g2201", satz: "Mañana ___ (hablar, yo) con el jefe.", loesung: "hablaré", tipps: ["hablaré", "hablará", "hablaría"], hinweis: "yo → -é", de: "Morgen werde ich mit dem Chef sprechen." },
      { id: "g2202", satz: "¿Qué ___ (hacer, tú) mañana?", loesung: "harás", tipps: ["harás", "hacerás", "harías"], hinweis: "Stamm har-", de: "Was wirst du morgen machen?" },
      { id: "g2203", satz: "Nosotros ___ (tener) que esperar.", loesung: "tendremos", tipps: ["tendremos", "teneremos"], hinweis: "Stamm tendr-", de: "Wir werden warten müssen." },
      { id: "g2204", satz: "___ (ser) las tres, más o menos.", loesung: "Serán", tipps: ["Serán", "Son", "Fueron"], hinweis: "Vermutung", de: "Es wird ungefähr drei sein." },
      { id: "g2205", satz: "Ellos ___ (venir) el sábado.", loesung: "vendrán", tipps: ["vendrán", "venirán", "vinieron"], hinweis: "Stamm vendr-", de: "Sie werden am Samstag kommen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 23, niveau: "A2", thema: "Im Büro",
  vokabeln: [
    { id: "v2301", es: "la reunión",     de: "die Besprechung",  wortart: "Substantiv", beispiel: "La reunión es a las diez.", beispielDe: "Die Besprechung ist um zehn." },
    { id: "v2302", es: "el informe",     de: "der Bericht",      wortart: "Substantiv", beispiel: "Tengo que entregar el informe.", beispielDe: "Ich muss den Bericht abgeben." },
    { id: "v2303", es: "el plazo",       de: "die Frist",        wortart: "Substantiv", beispiel: "El plazo termina el viernes.", beispielDe: "Die Frist endet am Freitag." },
    { id: "v2304", es: "encargarse de",  de: "sich kümmern um",  wortart: "Verb", beispiel: "Yo me encargo de eso.", beispielDe: "Ich kümmere mich darum." },
    { id: "v2305", es: "la empresa",     de: "die Firma",        wortart: "Substantiv", beispiel: "La empresa tiene cien empleados.", beispielDe: "Die Firma hat hundert Angestellte." },
    { id: "v2306", es: "el correo",      de: "die E-Mail",       wortart: "Substantiv", beispiel: "Te envío un correo.", beispielDe: "Ich schicke dir eine E-Mail." },
    { id: "v2307", es: "la factura",     de: "die Rechnung",     wortart: "Substantiv", beispiel: "Falta la factura.", beispielDe: "Die Rechnung fehlt." },
    { id: "v2308", es: "el despacho",    de: "das Büro (Raum)",  wortart: "Substantiv", beispiel: "Está en su despacho.", beispielDe: "Er ist in seinem Büro." },
    { id: "v2309", es: "contratar",      de: "einstellen",       wortart: "Verb", beispiel: "Van a contratar a dos personas.", beispielDe: "Sie werden zwei Leute einstellen." },
    { id: "v2310", es: "el sueldo",      de: "das Gehalt",       wortart: "Substantiv", beispiel: "El sueldo se paga a fin de mes.", beispielDe: "Das Gehalt wird zum Monatsende gezahlt." }
  ],
  saetze: [
    { id: "s2301", es: "Trabajo aquí desde hace tres años.",  de: "Ich arbeite seit drei Jahren hier." },
    { id: "s2302", es: "Este informe es para el jefe.",       de: "Dieser Bericht ist für den Chef." },
    { id: "s2303", es: "Gracias por tu ayuda.",               de: "Danke für deine Hilfe." },
    { id: "s2304", es: "Lo hago por ti, no por dinero.",      de: "Ich mache es für dich, nicht für Geld." },
    { id: "s2305", es: "Pasé por la oficina esta mañana.",    de: "Ich kam heute Morgen im Büro vorbei." }
  ],
  grammatik: {
    id: "g23", titel: "por oder para?",
    erklaerung: `
      <p>Beide heißen im Deutschen oft „für". Der Unterschied lässt sich auf eine Frage
      zurückführen: <strong>Blicke ich zurück (Grund) oder nach vorn (Ziel)?</strong></p>
      <table>
        <tr><th>por — zurück: Grund, Weg, Tausch</th><th>para — nach vorn: Ziel, Zweck, Empfänger</th></tr>
        <tr><td>Grund: <em>Lo hago por amor.</em><br>(aus Liebe)</td>
            <td>Zweck: <em>Estudio para aprender.</em><br>(um zu lernen)</td></tr>
        <tr><td>Ort hindurch: <em>Paso por el parque.</em></td>
            <td>Richtung: <em>Salgo para Madrid.</em></td></tr>
        <tr><td>Zeitraum: <em>Estudié por dos horas.</em></td>
            <td>Frist: <em>Es para el viernes.</em></td></tr>
        <tr><td>Tausch/Preis: <em>Lo compré por 20 euros.</em></td>
            <td>Empfänger: <em>Es un regalo para ti.</em></td></tr>
        <tr><td>Urheber (Passiv): <em>escrito por Cervantes</em></td>
            <td>Meinung: <em>Para mí, es fácil.</em></td></tr>
      </table>
      <div class="merke"><strong>Die Eselsbrücke:</strong><br>
      <em>por</em> = <strong>war</strong>um? (Ursache, es ist schon passiert)<br>
      <em>para</em> = wofür? wozu? (Ziel, es kommt noch)</div>
      <p><strong>Feste Wendungen mit por</strong> — einfach als Vokabel lernen:</p>
      <ul>
        <li><em>por favor</em> (bitte) · <em>por fin</em> (endlich) · <em>por eso</em> (deshalb)</li>
        <li><em>por supuesto</em> (selbstverständlich) · <em>por ejemplo</em> (zum Beispiel)</li>
        <li><em>por la mañana / tarde / noche</em> (morgens / nachmittags / abends)</li>
      </ul>
      <p><strong>Feste Wendungen mit para:</strong> <em>para siempre</em> (für immer),
      <em>para nada</em> (überhaupt nicht), <em>estar para</em> (kurz davor sein).</p>`,
    uebungen: [
      { id: "g2301", satz: "Este regalo es ___ ti.", loesung: "para", tipps: ["para", "por"], hinweis: "Empfänger", de: "Dieses Geschenk ist für dich." },
      { id: "g2302", satz: "Gracias ___ tu ayuda.", loesung: "por", tipps: ["por", "para"], hinweis: "Grund", de: "Danke für deine Hilfe." },
      { id: "g2303", satz: "Estudio mucho ___ aprobar el examen.", loesung: "para", tipps: ["para", "por"], hinweis: "Zweck", de: "Ich lerne viel, um die Prüfung zu bestehen." },
      { id: "g2304", satz: "Lo compré ___ veinte euros.", loesung: "por", tipps: ["por", "para"], hinweis: "Preis", de: "Ich kaufte es für zwanzig Euro." },
      { id: "g2305", satz: "El informe es ___ el viernes.", loesung: "para", tipps: ["para", "por"], hinweis: "Frist", de: "Der Bericht ist für Freitag." }
    ]
  }
});

LEKTIONEN.push({
  tag: 24, niveau: "A2", thema: "Meinung sagen",
  vokabeln: [
    { id: "v2401", es: "opinar",         de: "meinen",           wortart: "Verb", beispiel: "¿Qué opinas tú?", beispielDe: "Was meinst du?" },
    { id: "v2402", es: "estar de acuerdo", de: "einverstanden sein", wortart: "Verb", beispiel: "Estoy de acuerdo contigo.", beispielDe: "Ich bin mit dir einverstanden." },
    { id: "v2403", es: "en cambio",      de: "hingegen",         wortart: "Adverb", beispiel: "Yo, en cambio, prefiero el té.", beispielDe: "Ich hingegen bevorzuge Tee." },
    { id: "v2404", es: "sin embargo",    de: "jedoch",           wortart: "Adverb", beispiel: "Es caro; sin embargo, lo compro.", beispielDe: "Es ist teuer; ich kaufe es trotzdem." },
    { id: "v2405", es: "además",         de: "außerdem",         wortart: "Adverb", beispiel: "Además, no tengo tiempo.", beispielDe: "Außerdem habe ich keine Zeit." },
    { id: "v2406", es: "aunque",         de: "obwohl",           wortart: "Konjunktion", beispiel: "Aunque llueve, salgo.", beispielDe: "Obwohl es regnet, gehe ich raus." },
    { id: "v2407", es: "por lo tanto",   de: "daher",            wortart: "Adverb", beispiel: "Llegó tarde; por lo tanto, esperamos.", beispielDe: "Er kam spät; daher warteten wir." },
    { id: "v2408", es: "el punto de vista", de: "der Standpunkt", wortart: "Substantiv", beispiel: "Entiendo tu punto de vista.", beispielDe: "Ich verstehe deinen Standpunkt." },
    { id: "v2409", es: "a mi modo de ver", de: "meiner Ansicht nach", wortart: "Adverb", beispiel: "A mi modo de ver, es correcto.", beispielDe: "Meiner Ansicht nach ist es richtig." },
    { id: "v2410", es: "discutir",       de: "diskutieren / streiten", wortart: "Verb", beispiel: "No quiero discutir contigo.", beispielDe: "Ich will nicht mit dir streiten." }
  ],
  saetze: [
    { id: "s2401", es: "Creo que tienes razón.",              de: "Ich glaube, du hast recht." },
    { id: "s2402", es: "No estoy de acuerdo con esa idea.",   de: "Ich bin mit dieser Idee nicht einverstanden." },
    { id: "s2403", es: "Es caro, pero merece la pena.",       de: "Es ist teuer, aber es lohnt sich." },
    { id: "s2404", es: "Aunque es difícil, quiero intentarlo.", de: "Obwohl es schwierig ist, will ich es versuchen." },
    { id: "s2405", es: "Me parece que hay un error.",         de: "Mir scheint, es gibt einen Fehler." }
  ],
  grammatik: {
    id: "g24", titel: "Konnektoren — Sätze verbinden",
    erklaerung: `
      <p>Mit diesen kleinen Wörtern werden aus abgehackten Sätzen zusammenhängende Gedanken.
      Sie sind der schnellste Weg, erwachsener zu klingen.</p>
      <table>
        <tr><th>Zweck</th><th>Wort</th><th>Beispiel</th></tr>
        <tr><td>Grund</td><td><em>porque</em></td><td>No voy porque estoy cansado.</td></tr>
        <tr><td>Grund (Satzanfang)</td><td><em>como</em></td><td>Como estoy cansado, no voy.</td></tr>
        <tr><td>Folge</td><td><em>así que</em></td><td>Estoy cansado, así que no voy.</td></tr>
        <tr><td>Folge (förmlich)</td><td><em>por lo tanto</em></td><td>Llovía; por lo tanto, cancelamos.</td></tr>
        <tr><td>Gegensatz</td><td><em>pero</em></td><td>Es caro, pero bueno.</td></tr>
        <tr><td>Gegensatz (förmlich)</td><td><em>sin embargo</em></td><td>Es caro; sin embargo, lo compro.</td></tr>
        <tr><td>Einräumung</td><td><em>aunque</em></td><td>Aunque llueve, salgo.</td></tr>
        <tr><td>Ergänzung</td><td><em>además</em></td><td>Es tarde y además estoy cansado.</td></tr>
      </table>
      <div class="merke"><strong>Wichtiger Unterschied:</strong><br>
      <em>porque</em> (ein Wort) = weil → <em>No voy <strong>porque</strong> llueve.</em><br>
      <em>por qué</em> (zwei Wörter, mit Akzent) = warum → <em>¿<strong>Por qué</strong> no vienes?</em><br>
      <em>el porqué</em> (ein Wort mit Akzent) = der Grund → <em>No sé el porqué.</em></div>
      <p><strong>Meinung ausdrücken</strong> — diese Wendungen stehen mit dem normalen
      Indikativ, solange sie <strong>bejaht</strong> sind:</p>
      <ul>
        <li><em>Creo que…</em> · <em>Pienso que…</em> · <em>Me parece que…</em></li>
        <li><em>En mi opinión,…</em> · <em>Para mí,…</em> · <em>Desde mi punto de vista,…</em></li>
      </ul>
      <p>Verneint (<em>No creo que…</em>) ändert sich das — dazu kommen wir ab Tag 45.</p>`,
    uebungen: [
      { id: "g2401", satz: "No salgo ___ está lloviendo.", loesung: "porque", tipps: ["porque", "por qué", "aunque"], hinweis: "weil", de: "Ich gehe nicht raus, weil es regnet." },
      { id: "g2402", satz: "¿___ no vienes con nosotros?", loesung: "Por qué", tipps: ["Por qué", "Porque", "Como"], hinweis: "Frage: warum", de: "Warum kommst du nicht mit?" },
      { id: "g2403", satz: "___ es difícil, lo intento.", loesung: "Aunque", tipps: ["Aunque", "Porque", "Así que"], hinweis: "obwohl", de: "Obwohl es schwierig ist, versuche ich es." },
      { id: "g2404", satz: "Estoy cansado, ___ me voy a casa.", loesung: "así que", tipps: ["así que", "porque", "aunque"], hinweis: "Folge", de: "Ich bin müde, also gehe ich nach Hause." },
      { id: "g2405", satz: "Es caro; ___, lo compro.", loesung: "sin embargo", tipps: ["sin embargo", "porque", "además"], hinweis: "Gegensatz", de: "Es ist teuer; trotzdem kaufe ich es." }
    ]
  }
});

LEKTIONEN.push({
  tag: 25, niveau: "A2", thema: "Beschreiben und einordnen",
  vokabeln: [
    { id: "v2501", es: "el rasgo",       de: "das Merkmal",      wortart: "Substantiv", beispiel: "Es un rasgo típico.", beispielDe: "Das ist ein typisches Merkmal." },
    { id: "v2502", es: "sencillo",       de: "einfach / schlicht", wortart: "Adjektiv", beispiel: "Es una solución sencilla.", beispielDe: "Das ist eine einfache Lösung." },
    { id: "v2503", es: "el aspecto",     de: "das Aussehen",     wortart: "Substantiv", beispiel: "Tiene buen aspecto.", beispielDe: "Er sieht gut aus." },
    { id: "v2504", es: "cuyo",           de: "dessen / deren",   wortart: "Pronomen", beispiel: "El hombre cuyo coche vimos.", beispielDe: "Der Mann, dessen Auto wir sahen." },
    { id: "v2505", es: "el asunto",      de: "die Angelegenheit", wortart: "Substantiv", beispiel: "Es un asunto delicado.", beispielDe: "Das ist eine heikle Angelegenheit." },
    { id: "v2506", es: "destacar",       de: "hervorstechen",    wortart: "Verb", beispiel: "Destaca por su paciencia.", beispielDe: "Er sticht durch seine Geduld hervor." },
    { id: "v2507", es: "la calidad",     de: "die Qualität",     wortart: "Substantiv", beispiel: "La calidad es excelente.", beispielDe: "Die Qualität ist ausgezeichnet." },
    { id: "v2508", es: "adecuado",       de: "passend",          wortart: "Adjektiv", beispiel: "No es el momento adecuado.", beispielDe: "Es ist nicht der passende Moment." },
    { id: "v2509", es: "el conjunto",    de: "die Gesamtheit",   wortart: "Substantiv", beispiel: "En conjunto, está bien.", beispielDe: "Insgesamt ist es gut." },
    { id: "v2510", es: "concreto",       de: "konkret",          wortart: "Adjektiv", beispiel: "Dame un ejemplo concreto.", beispielDe: "Gib mir ein konkretes Beispiel." }
  ],
  saetze: [
    { id: "s2501", es: "La chica que vive aquí es mi vecina.",   de: "Das Mädchen, das hier wohnt, ist meine Nachbarin." },
    { id: "s2502", es: "El libro que me prestaste es genial.",   de: "Das Buch, das du mir geliehen hast, ist toll." },
    { id: "s2503", es: "Este es el pueblo donde nací.",          de: "Das ist das Dorf, wo ich geboren wurde." },
    { id: "s2504", es: "La persona con quien hablé era muy amable.", de: "Die Person, mit der ich sprach, war sehr freundlich." },
    { id: "s2505", es: "Es un problema que no tiene solución.",  de: "Das ist ein Problem, das keine Lösung hat." }
  ],
  grammatik: {
    id: "g25", titel: "Relativsätze mit que, donde, quien",
    erklaerung: `
      <p>Relativsätze hängen eine Zusatzinformation an ein Substantiv. Im Spanischen ist das
      <strong>einfacher als im Deutschen</strong>, weil sich das Relativpronomen meistens
      nicht verändert.</p>
      <table>
        <tr><th>Wort</th><th>wofür</th><th>Beispiel</th></tr>
        <tr><td><em>que</em></td><td>Personen <strong>und</strong> Sachen — der Standardfall</td>
            <td>El hombre <em>que</em> vino. · El libro <em>que</em> leí.</td></tr>
        <tr><td><em>donde</em></td><td>Orte</td><td>La ciudad <em>donde</em> vivo.</td></tr>
        <tr><td><em>quien / quienes</em></td><td>nur Personen, nach Präposition</td>
            <td>La mujer con <em>quien</em> hablé.</td></tr>
        <tr><td><em>cuyo/a/os/as</em></td><td>dessen/deren (Besitz)</td>
            <td>El autor <em>cuya</em> novela leí.</td></tr>
      </table>
      <div class="merke"><strong>Der große Vorteil gegenüber dem Deutschen:</strong>
      <em>que</em> bleibt immer <em>que</em> — kein der/die/das/dem/den, kein Geschlecht,
      kein Fall. Ein Wort für alles.</div>
      <div class="merke"><strong>Und der große Unterschied:</strong> <em>que</em> darf
      <strong>nie</strong> weggelassen werden.<br>
      Deutsch: „Das Buch, das ich gelesen habe" — man könnte auch „Das Buch, ich habe es
      gelesen" umbauen.<br>
      Spanisch: <em>El libro <strong>que</strong> leí.</em> — <em>que</em> ist Pflicht.</div>
      <p><strong>Mit Präposition:</strong> Bei Sachen kommt der Artikel dazu, bei Personen
      geht auch <em>quien</em>:</p>
      <ul>
        <li>Sache: <em>La casa <strong>en la que</strong> vivo.</em></li>
        <li>Person: <em>El amigo <strong>con quien</strong> viajé.</em>
            (= <em>con el que</em>)</li>
      </ul>
      <p><em>cuyo</em> richtet sich nach dem <strong>Besitz</strong>, nicht nach dem Besitzer:
      <em>el hombre <strong>cuya</strong> hija conozco</em> (hija ist weiblich).</p>`,
    uebungen: [
      { id: "g2501", satz: "El libro ___ leí era muy bueno.", loesung: "que", tipps: ["que", "quien", "donde"], hinweis: "Standardfall", de: "Das Buch, das ich las, war sehr gut." },
      { id: "g2502", satz: "Esta es la ciudad ___ nací.", loesung: "donde", tipps: ["donde", "que", "quien"], hinweis: "Ort", de: "Das ist die Stadt, wo ich geboren wurde." },
      { id: "g2503", satz: "La mujer con ___ hablé es médica.", loesung: "quien", tipps: ["quien", "que", "cuyo"], hinweis: "Person nach Präposition", de: "Die Frau, mit der ich sprach, ist Ärztin." },
      { id: "g2504", satz: "El autor ___ novela leí es español.", loesung: "cuya", tipps: ["cuya", "cuyo", "que"], hinweis: "la novela = weiblich", de: "Der Autor, dessen Roman ich las, ist Spanier." },
      { id: "g2505", satz: "Los amigos ___ vinieron ayer son de Perú.", loesung: "que", tipps: ["que", "quienes", "cuyos"], hinweis: "ohne Präposition", de: "Die Freunde, die gestern kamen, sind aus Peru." }
    ]
  }
});

LEKTIONEN.push({
  tag: 26, niveau: "A2", thema: "Verneinen",
  vokabeln: [
    { id: "v2601", es: "nadie",          de: "niemand",          wortart: "Pronomen", beispiel: "No hay nadie en casa.", beispielDe: "Es ist niemand zu Hause." },
    { id: "v2602", es: "nada",           de: "nichts",           wortart: "Pronomen", beispiel: "No dijo nada.", beispielDe: "Er sagte nichts." },
    { id: "v2603", es: "nunca",          de: "nie",              wortart: "Adverb", beispiel: "Nunca he estado allí.", beispielDe: "Ich war nie dort." },
    { id: "v2604", es: "tampoco",        de: "auch nicht",       wortart: "Adverb", beispiel: "Yo tampoco lo sé.", beispielDe: "Ich weiß es auch nicht." },
    { id: "v2605", es: "ningún",         de: "kein",             wortart: "Adjektiv", beispiel: "No tengo ningún problema.", beispielDe: "Ich habe kein Problem." },
    { id: "v2606", es: "jamás",          de: "niemals",          wortart: "Adverb", beispiel: "Jamás lo olvidaré.", beispielDe: "Ich werde es niemals vergessen." },
    { id: "v2607", es: "ni siquiera",    de: "nicht einmal",     wortart: "Adverb", beispiel: "Ni siquiera me saludó.", beispielDe: "Er grüßte mich nicht einmal." },
    { id: "v2608", es: "apenas",         de: "kaum",             wortart: "Adverb", beispiel: "Apenas lo conozco.", beispielDe: "Ich kenne ihn kaum." },
    { id: "v2609", es: "negar",          de: "leugnen",          wortart: "Verb", beispiel: "Negó todo.", beispielDe: "Er leugnete alles." },
    { id: "v2610", es: "sin",            de: "ohne",             wortart: "Präposition", beispiel: "Salió sin decir nada.", beispielDe: "Er ging, ohne etwas zu sagen." }
  ],
  saetze: [
    { id: "s2601", es: "No he visto a nadie hoy.",             de: "Ich habe heute niemanden gesehen." },
    { id: "s2602", es: "Nunca como carne por la noche.",       de: "Ich esse abends nie Fleisch." },
    { id: "s2603", es: "No tengo ningún problema con eso.",    de: "Ich habe damit kein Problem." },
    { id: "s2604", es: "Yo tampoco quiero ir.",                de: "Ich will auch nicht hingehen." },
    { id: "s2605", es: "No quiero ni café ni té.",             de: "Ich möchte weder Kaffee noch Tee." }
  ],
  grammatik: {
    id: "g26", titel: "Verneinung und die doppelte Verneinung",
    erklaerung: `
      <p>Im Deutschen ist die doppelte Verneinung falsch. Im Spanischen ist sie
      <strong>Pflicht</strong> — das ist gewöhnungsbedürftig, aber die Regel ist einfach.</p>
      <div class="merke"><strong>Die Regel:</strong> Steht das Verneinungswort
      <strong>hinter</strong> dem Verb, muss vor dem Verb ein <em>no</em> stehen.<br>
      <em><strong>No</strong> veo a <strong>nadie</strong>.</em> — Ich sehe niemanden.<br>
      Steht es <strong>vor</strong> dem Verb, fällt <em>no</em> weg.<br>
      <em><strong>Nadie</strong> viene.</em> — Niemand kommt.</div>
      <table>
        <tr><th>Wort vorn (ohne no)</th><th>Wort hinten (mit no)</th></tr>
        <tr><td><em>Nadie</em> vino.</td><td><em>No</em> vino <em>nadie</em>.</td></tr>
        <tr><td><em>Nunca</em> como carne.</td><td><em>No</em> como carne <em>nunca</em>.</td></tr>
        <tr><td><em>Nada</em> me sorprende.</td><td><em>No</em> me sorprende <em>nada</em>.</td></tr>
        <tr><td><em>Tampoco</em> lo sé.</td><td><em>No</em> lo sé <em>tampoco</em>.</td></tr>
      </table>
      <p>Beide Varianten bedeuten dasselbe. Die zweite ist im Alltag häufiger.</p>
      <p><strong>Weitere Verneinungswörter:</strong></p>
      <ul>
        <li><em>ningún / ninguna</em> = kein — steht fast immer im Singular:
            <em>No tengo <strong>ningún</strong> problema.</em></li>
        <li><em>ni … ni</em> = weder … noch: <em>No quiero <strong>ni</strong> café
            <strong>ni</strong> té.</em></li>
        <li><em>ni siquiera</em> = nicht einmal: <em>No me llamó <strong>ni siquiera</strong>.</em></li>
      </ul>
      <div class="merke"><strong>Achtung bei Personen:</strong> Vor <em>nadie</em> und
      <em>alguien</em> steht als Objekt ein <em>a</em>:
      <em>No conozco <strong>a</strong> nadie aquí.</em></div>
      <p><strong>Die Gegenstücke:</strong> <em>alguien</em> (jemand), <em>algo</em> (etwas),
      <em>siempre</em> (immer), <em>también</em> (auch), <em>algún</em> (irgendein).</p>`,
    uebungen: [
      { id: "g2601", satz: "___ veo a nadie.", loesung: "No", tipps: ["No", "Nunca", "Nada"], hinweis: "nadie steht hinten", de: "Ich sehe niemanden." },
      { id: "g2602", satz: "___ viene nadie los domingos.", loesung: "No", tipps: ["No", "Nadie", "Tampoco"], hinweis: "nadie steht hinten", de: "Sonntags kommt niemand." },
      { id: "g2603", satz: "No tengo ___ problema.", loesung: "ningún", tipps: ["ningún", "ninguno", "nada"], hinweis: "vor Substantiv", de: "Ich habe kein Problem." },
      { id: "g2604", satz: "Yo ___ quiero ir. (auch nicht)", loesung: "tampoco", tipps: ["tampoco", "también", "nunca"], hinweis: "auch nicht", de: "Ich will auch nicht hingehen." },
      { id: "g2605", satz: "No quiero ___ café ___ té.", loesung: "ni", tipps: ["ni", "no", "o"], hinweis: "weder … noch", de: "Ich möchte weder Kaffee noch Tee." }
    ]
  }
});

LEKTIONEN.push({
  tag: 27, niveau: "A2", thema: "Wetter und Jahreszeiten",
  vokabeln: [
    { id: "v2701", es: "la nube",        de: "die Wolke",        wortart: "Substantiv", beispiel: "El cielo está lleno de nubes.", beispielDe: "Der Himmel ist voller Wolken." },
    { id: "v2702", es: "la tormenta",    de: "das Gewitter",     wortart: "Substantiv", beispiel: "Se acerca una tormenta.", beispielDe: "Ein Gewitter zieht auf." },
    { id: "v2703", es: "nevar",          de: "schneien",         wortart: "Verb", beispiel: "En enero nieva mucho.", beispielDe: "Im Januar schneit es viel." },
    { id: "v2704", es: "el viento",      de: "der Wind",         wortart: "Substantiv", beispiel: "Hace mucho viento hoy.", beispielDe: "Heute ist es sehr windig." },
    { id: "v2705", es: "húmedo",         de: "feucht",           wortart: "Adjektiv", beispiel: "El aire está muy húmedo.", beispielDe: "Die Luft ist sehr feucht." },
    { id: "v2706", es: "la temporada",   de: "die Saison",       wortart: "Substantiv", beispiel: "Es temporada alta.", beispielDe: "Es ist Hochsaison." },
    { id: "v2707", es: "despejado",      de: "wolkenlos",        wortart: "Adjektiv", beispiel: "El cielo está despejado.", beispielDe: "Der Himmel ist wolkenlos." },
    { id: "v2708", es: "la sombra",      de: "der Schatten",     wortart: "Substantiv", beispiel: "Vamos a la sombra.", beispielDe: "Gehen wir in den Schatten." },
    { id: "v2709", es: "el granizo",     de: "der Hagel",        wortart: "Substantiv", beispiel: "Cayó granizo ayer.", beispielDe: "Gestern fiel Hagel." },
    { id: "v2710", es: "suave",          de: "mild / sanft",     wortart: "Adjektiv", beispiel: "El clima aquí es suave.", beispielDe: "Das Klima ist hier mild." }
  ],
  saetze: [
    { id: "s2701", es: "Hoy hace mucho calor y no hay viento.", de: "Heute ist es sehr heiß und es ist windstill." },
    { id: "s2702", es: "En invierno llueve casi todos los días.", de: "Im Winter regnet es fast jeden Tag." },
    { id: "s2703", es: "Habla muy despacio y claramente.",     de: "Er spricht sehr langsam und deutlich." },
    { id: "s2704", es: "Normalmente salgo temprano.",          de: "Normalerweise gehe ich früh los." },
    { id: "s2705", es: "Conduce con cuidado, por favor.",      de: "Fahr bitte vorsichtig." }
  ],
  grammatik: {
    id: "g27", titel: "Adverbien und die Wetter-Verben",
    erklaerung: `
      <p><strong>Adverbien auf -mente</strong> sagen, <em>wie</em> etwas geschieht — wie die
      deutsche Endung „-erweise" oder einfach das nackte Adjektiv.</p>
      <div class="merke"><strong>Bauplan:</strong> weibliche Form des Adjektivs + <em>-mente</em><br>
      <em>rápido → rápida → rápidamente</em><br>
      <em>fácil → fácil → fácilmente</em> (Adjektive ohne -o/-a bleiben, wie sie sind)</div>
      <p>Stehen zwei Adverbien nebeneinander, bekommt nur das <strong>letzte</strong> die
      Endung: <em>Habla lenta y claramente.</em></p>
      <p><strong>Häufige Adverbien ohne -mente</strong> — die musst du einfach kennen:</p>
      <ul>
        <li>Zeit: <em>siempre, nunca, ya, todavía, pronto, tarde, temprano, ahora, luego</em></li>
        <li>Art: <em>bien, mal, así, despacio, deprisa</em></li>
        <li>Menge: <em>mucho, poco, bastante, demasiado, casi</em></li>
      </ul>
      <div class="merke"><strong>Verwechslungsgefahr:</strong> <em>bueno/malo</em> sind
      Adjektive (beschreiben ein Ding), <em>bien/mal</em> sind Adverbien (beschreiben eine
      Handlung).<br>
      <em>Es un libro <strong>bueno</strong>.</em> — <em>Habla <strong>bien</strong> español.</em>
      Nicht <s>Habla bueno</s>.</div>
      <p><strong>Wetter-Verben.</strong> Diese Verben haben nur eine Form — die dritte Person
      Einzahl. Es gibt ja niemanden, der regnet:</p>
      <ul>
        <li><em>llover → llueve</em> (es regnet), <em>nevar → nieva</em> (es schneit)</li>
        <li>mit <em>hacer</em>: <em>hace frío / calor / sol / viento / buen tiempo</em></li>
        <li>mit <em>estar</em>: <em>está nublado / despejado / soleado</em></li>
        <li>mit <em>hay</em>: <em>hay niebla / tormenta / nubes</em></li>
      </ul>`,
    uebungen: [
      { id: "g2701", satz: "Habla muy ___ (lento).", loesung: "lentamente", tipps: ["lentamente", "lentomente", "lento"], hinweis: "weibl. Form + mente", de: "Er spricht sehr langsam." },
      { id: "g2702", satz: "Lo hizo ___ (fácil).", loesung: "fácilmente", tipps: ["fácilmente", "fácilamente"], hinweis: "endet nicht auf -o", de: "Er machte es leicht." },
      { id: "g2703", satz: "Hoy ___ mucho frío.", loesung: "hace", tipps: ["hace", "está", "hay"], hinweis: "frío → welches Verb?", de: "Heute ist es sehr kalt." },
      { id: "g2704", satz: "El cielo ___ nublado.", loesung: "está", tipps: ["está", "hace", "hay"], hinweis: "nublado → welches Verb?", de: "Der Himmel ist bewölkt." },
      { id: "g2705", satz: "Ella canta muy ___. (gut)", loesung: "bien", tipps: ["bien", "buena", "bueno"], hinweis: "Handlung → Adverb", de: "Sie singt sehr gut." }
    ]
  }
});

LEKTIONEN.push({
  tag: 28, niveau: "A2", thema: "Telefonieren und Nachfragen",
  vokabeln: [
    { id: "v2801", es: "colgar",         de: "auflegen",         wortart: "Verb", beispiel: "No cuelgues todavía.", beispielDe: "Leg noch nicht auf." },
    { id: "v2802", es: "marcar",         de: "wählen (Nummer)",  wortart: "Verb", beispiel: "Marcaste mal el número.", beispielDe: "Du hast die Nummer falsch gewählt." },
    { id: "v2803", es: "el recado",      de: "die Nachricht",    wortart: "Substantiv", beispiel: "¿Quiere dejar un recado?", beispielDe: "Möchten Sie eine Nachricht hinterlassen?" },
    { id: "v2804", es: "de parte de",    de: "im Auftrag von",   wortart: "Präposition", beispiel: "¿De parte de quién?", beispielDe: "Wer ist am Apparat?" },
    { id: "v2805", es: "la llamada",     de: "der Anruf",        wortart: "Substantiv", beispiel: "Tengo una llamada perdida.", beispielDe: "Ich habe einen verpassten Anruf." },
    { id: "v2806", es: "repetir",        de: "wiederholen",      wortart: "Verb", beispiel: "¿Puede repetirlo, por favor?", beispielDe: "Können Sie das wiederholen, bitte?" },
    { id: "v2807", es: "la señal",       de: "das Signal",       wortart: "Substantiv", beispiel: "No hay señal aquí.", beispielDe: "Hier gibt es kein Signal." },
    { id: "v2808", es: "aclarar",        de: "klarstellen",      wortart: "Verb", beispiel: "Quiero aclarar una cosa.", beispielDe: "Ich möchte eine Sache klarstellen." },
    { id: "v2809", es: "el malentendido", de: "das Missverständnis", wortart: "Substantiv", beispiel: "Fue un malentendido.", beispielDe: "Das war ein Missverständnis." },
    { id: "v2810", es: "enterarse",      de: "mitbekommen",      wortart: "Verb", beispiel: "No me enteré de nada.", beispielDe: "Ich habe nichts mitbekommen." }
  ],
  saetze: [
    { id: "s2801", es: "No sé dónde está mi móvil.",            de: "Ich weiß nicht, wo mein Handy ist." },
    { id: "s2802", es: "Me pregunto si vendrá mañana.",         de: "Ich frage mich, ob er morgen kommt." },
    { id: "s2803", es: "¿Puede decirme cuánto cuesta?",         de: "Können Sie mir sagen, was es kostet?" },
    { id: "s2804", es: "No entiendo qué quiere decir.",         de: "Ich verstehe nicht, was er sagen will." },
    { id: "s2805", es: "Dime cuándo puedes venir.",             de: "Sag mir, wann du kommen kannst." }
  ],
  grammatik: {
    id: "g28", titel: "Indirekte Fragen",
    erklaerung: `
      <p>Eine indirekte Frage ist eine Frage, die in einen anderen Satz eingebaut ist:
      „Wo ist er?" → „Ich weiß nicht, <strong>wo er ist</strong>."</p>
      <div class="merke"><strong>Die zwei Regeln:</strong><br>
      1. Das Fragewort behält seinen <strong>Akzent</strong>: <em>dónde, qué, cuándo, cómo,
      quién, cuánto, por qué</em>.<br>
      2. Die Wortstellung bleibt <strong>normal</strong> — anders als im Deutschen wird das
      Verb nicht nach hinten geschoben.</div>
      <table>
        <tr><th>direkte Frage</th><th>indirekte Frage</th></tr>
        <tr><td>¿Dónde está?</td><td>No sé <em>dónde está</em>.</td></tr>
        <tr><td>¿Qué quiere?</td><td>No entiendo <em>qué quiere</em>.</td></tr>
        <tr><td>¿Cuándo viene?</td><td>Dime <em>cuándo viene</em>.</td></tr>
        <tr><td>¿Cuánto cuesta?</td><td>Pregunta <em>cuánto cuesta</em>.</td></tr>
      </table>
      <p><strong>Ja-/Nein-Fragen</strong> werden mit <em>si</em> (ob) eingeleitet:</p>
      <ul>
        <li>¿Viene mañana? → <em>No sé <strong>si</strong> viene mañana.</em></li>
        <li>¿Está abierto? → <em>Pregunta <strong>si</strong> está abierto.</em></li>
      </ul>
      <div class="merke"><strong>Nicht verwechseln:</strong><br>
      <em>si</em> (ohne Akzent) = ob / wenn<br>
      <em>sí</em> (mit Akzent) = ja<br>
      <em>No sé si viene.</em> = Ich weiß nicht, ob er kommt.</div>
      <p><strong>Typische Einleitungen:</strong> <em>No sé…</em>, <em>Me pregunto…</em>,
      <em>¿Puedes decirme…?</em>, <em>Quiero saber…</em>, <em>No entiendo…</em>,
      <em>Dime…</em>.</p>`,
    uebungen: [
      { id: "g2801", satz: "No sé ___ está mi móvil.", loesung: "dónde", tipps: ["dónde", "donde", "que"], hinweis: "Fragewort mit Akzent", de: "Ich weiß nicht, wo mein Handy ist." },
      { id: "g2802", satz: "Me pregunto ___ vendrá mañana.", loesung: "si", tipps: ["si", "sí", "que"], hinweis: "Ja-/Nein-Frage", de: "Ich frage mich, ob er morgen kommt." },
      { id: "g2803", satz: "Dime ___ cuesta el billete.", loesung: "cuánto", tipps: ["cuánto", "cuanto", "qué"], hinweis: "wie viel", de: "Sag mir, was die Fahrkarte kostet." },
      { id: "g2804", satz: "No entiendo ___ quiere decir.", loesung: "qué", tipps: ["qué", "que", "cuál"], hinweis: "was", de: "Ich verstehe nicht, was er sagen will." },
      { id: "g2805", satz: "¿Sabes ___ llega el tren?", loesung: "cuándo", tipps: ["cuándo", "cuando", "dónde"], hinweis: "wann", de: "Weißt du, wann der Zug ankommt?" }
    ]
  }
});

LEKTIONEN.push({
  tag: 29, niveau: "A2", thema: "Essen und Trinken",
  vokabeln: [
    { id: "v2901", es: "la merienda",    de: "der Nachmittagsimbiss", wortart: "Substantiv", beispiel: "Los niños toman la merienda a las cinco.", beispielDe: "Die Kinder essen um fünf einen Imbiss." },
    { id: "v2902", es: "el aperitivo",   de: "der Aperitif",     wortart: "Substantiv", beispiel: "Tomamos un aperitivo antes.", beispielDe: "Wir nehmen vorher einen Aperitif." },
    { id: "v2903", es: "asar",           de: "braten",           wortart: "Verb", beispiel: "Vamos a asar carne.", beispielDe: "Wir werden Fleisch braten." },
    { id: "v2904", es: "el sabor",       de: "der Geschmack",    wortart: "Substantiv", beispiel: "Tiene un sabor raro.", beispielDe: "Es hat einen komischen Geschmack." },
    { id: "v2905", es: "soso",           de: "fad",              wortart: "Adjektiv", beispiel: "La sopa está sosa.", beispielDe: "Die Suppe ist fad." },
    { id: "v2906", es: "el ingrediente", de: "die Zutat",        wortart: "Substantiv", beispiel: "Faltan dos ingredientes.", beispielDe: "Es fehlen zwei Zutaten." },
    { id: "v2907", es: "probar",         de: "probieren",        wortart: "Verb", beispiel: "Prueba esta salsa.", beispielDe: "Probier diese Soße." },
    { id: "v2908", es: "la harina",      de: "das Mehl",         wortart: "Substantiv", beispiel: "Necesito medio kilo de harina.", beispielDe: "Ich brauche ein halbes Kilo Mehl." },
    { id: "v2909", es: "hervir",         de: "kochen (sieden)",  wortart: "Verb", beispiel: "Hierve el agua primero.", beispielDe: "Koche zuerst das Wasser." },
    { id: "v2910", es: "el postre",      de: "der Nachtisch",    wortart: "Substantiv", beispiel: "De postre, flan.", beispielDe: "Als Nachtisch Flan." }
  ],
  saetze: [
    { id: "s2901", es: "Aquí se come muy bien.",               de: "Hier isst man sehr gut." },
    { id: "s2902", es: "En España se cena muy tarde.",         de: "In Spanien isst man sehr spät zu Abend." },
    { id: "s2903", es: "Se venden pisos en esta calle.",       de: "In dieser Straße werden Wohnungen verkauft." },
    { id: "s2904", es: "¿Cómo se dice esto en español?",       de: "Wie sagt man das auf Spanisch?" },
    { id: "s2905", es: "Se necesita más azúcar.",              de: "Man braucht mehr Zucker." }
  ],
  grammatik: {
    id: "g29", titel: "Das unpersönliche se",
    erklaerung: `
      <p>Das deutsche „man" gibt es im Spanischen nicht als eigenes Wort. Stattdessen nimmt
      man <em>se</em> — und das ist im Alltag <strong>sehr</strong> häufig.</p>
      <table>
        <tr><th>Deutsch</th><th>Spanisch</th></tr>
        <tr><td>Hier isst man gut.</td><td><em>Aquí <strong>se come</strong> bien.</em></td></tr>
        <tr><td>Wie sagt man das?</td><td><em>¿Cómo <strong>se dice</strong>?</em></td></tr>
        <tr><td>Man darf hier nicht rauchen.</td><td><em>No <strong>se puede</strong> fumar aquí.</em></td></tr>
      </table>
      <div class="merke"><strong>Die eine Regel, die du beachten musst:</strong>
      Steht ein Substantiv dabei, richtet sich das Verb nach diesem Substantiv.<br>
      <em><strong>Se vende</strong> un piso.</em> (eine Wohnung → Einzahl)<br>
      <em><strong>Se venden</strong> pisos.</em> (mehrere Wohnungen → Mehrzahl)<br>
      Auf spanischen Schildern siehst du beides ständig.</div>
      <p><strong>Zwei Alternativen</strong> für „man":</p>
      <ul>
        <li><em>la gente</em> + Einzahl: <em>La gente aquí come tarde.</em></li>
        <li>3. Person Mehrzahl ohne Subjekt: <em>Dicen que va a llover.</em>
            (Man sagt, dass es regnen wird.)</li>
      </ul>
      <div class="merke"><strong>Vorsicht, drei verschiedene <em>se</em>:</strong><br>
      1. reflexiv: <em>Ana <strong>se</strong> lava.</em> (Ana wäscht sich)<br>
      2. unpersönlich: <em><strong>Se</strong> come bien.</em> (man isst gut)<br>
      3. statt <em>le</em>: <em><strong>Se</strong> lo doy.</em> (ich gebe es ihm, Tag 8)<br>
      Welches gemeint ist, verrät immer der Satzbau.</div>`,
    uebungen: [
      { id: "g2901", satz: "Aquí ___ come muy bien.", loesung: "se", tipps: ["se", "te", "uno"], hinweis: "man", de: "Hier isst man sehr gut." },
      { id: "g2902", satz: "___ venden pisos aquí.", loesung: "Se", tipps: ["Se", "Son", "Hay"], hinweis: "man verkauft", de: "Hier werden Wohnungen verkauft." },
      { id: "g2903", satz: "Se ___ (necesitar) dos huevos.", loesung: "necesitan", tipps: ["necesitan", "necesita"], hinweis: "dos huevos = Mehrzahl", de: "Man braucht zwei Eier." },
      { id: "g2904", satz: "Se ___ (hablar) español aquí.", loesung: "habla", tipps: ["habla", "hablan"], hinweis: "español = Einzahl", de: "Hier spricht man Spanisch." },
      { id: "g2905", satz: "¿Cómo ___ dice esto en español?", loesung: "se", tipps: ["se", "te", "lo"], hinweis: "wie sagt man", de: "Wie sagt man das auf Spanisch?" }
    ]
  }
});

LEKTIONEN.push({
  tag: 30, niveau: "A2", thema: "Wiederholung: A2 im Überblick",
  vokabeln: [
    { id: "v3001", es: "el resumen",     de: "die Zusammenfassung", wortart: "Substantiv", beispiel: "Hago un resumen del libro.", beispielDe: "Ich mache eine Zusammenfassung des Buches." },
    { id: "v3002", es: "repasar",        de: "wiederholen (lernen)", wortart: "Verb", beispiel: "Repaso la gramática cada semana.", beispielDe: "Ich wiederhole jede Woche die Grammatik." },
    { id: "v3003", es: "el logro",       de: "die Leistung",     wortart: "Substantiv", beispiel: "Es un gran logro.", beispielDe: "Das ist eine große Leistung." },
    { id: "v3004", es: "avanzar",        de: "vorankommen",      wortart: "Verb", beispiel: "Avanzo poco a poco.", beispielDe: "Ich komme nach und nach voran." },
    { id: "v3005", es: "la duda",        de: "der Zweifel",      wortart: "Substantiv", beispiel: "Tengo una duda.", beispielDe: "Ich habe eine Frage." },
    { id: "v3006", es: "poco a poco",    de: "nach und nach",    wortart: "Adverb", beispiel: "Poco a poco se aprende.", beispielDe: "Nach und nach lernt man es." },
    { id: "v3007", es: "el esfuerzo",    de: "die Anstrengung",  wortart: "Substantiv", beispiel: "Vale la pena el esfuerzo.", beispielDe: "Die Anstrengung lohnt sich." },
    { id: "v3008", es: "dominar",        de: "beherrschen",      wortart: "Verb", beispiel: "Todavía no domino el subjuntivo.", beispielDe: "Ich beherrsche den Subjuntivo noch nicht." },
    { id: "v3009", es: "la constancia",  de: "die Beharrlichkeit", wortart: "Substantiv", beispiel: "La constancia es la clave.", beispielDe: "Beharrlichkeit ist der Schlüssel." },
    { id: "v3010", es: "el reto",        de: "die Herausforderung", wortart: "Substantiv", beispiel: "Es un reto interesante.", beispielDe: "Das ist eine interessante Herausforderung." }
  ],
  saetze: [
    { id: "s3001", es: "Llevo un mes estudiando español.",      de: "Ich lerne seit einem Monat Spanisch." },
    { id: "s3002", es: "Antes no sabía nada, ahora entiendo mucho.", de: "Früher wusste ich nichts, jetzt verstehe ich viel." },
    { id: "s3003", es: "Ayer repasé todo lo que aprendí.",      de: "Gestern wiederholte ich alles, was ich gelernt habe." },
    { id: "s3004", es: "Voy a seguir practicando cada día.",    de: "Ich werde jeden Tag weiter üben." },
    { id: "s3005", es: "Poco a poco se llega lejos.",           de: "Nach und nach kommt man weit." }
  ],
  grammatik: {
    id: "g30", titel: "Alle Zeiten im Überblick",
    erklaerung: `
      <p>Nach 30 Tagen kannst du bereits fünf Zeitformen. Hier stehen sie nebeneinander —
      am Beispiel <em>hablar</em>, erste Person.</p>
      <table>
        <tr><th>Zeit</th><th>Form</th><th>wofür</th><th>Signalwörter</th></tr>
        <tr><td>Presente</td><td><em>hablo</em></td><td>jetzt, immer</td><td>ahora, siempre, normalmente</td></tr>
        <tr><td>estar + Gerundio</td><td><em>estoy hablando</em></td><td>gerade in diesem Moment</td><td>ahora mismo, en este momento</td></tr>
        <tr><td>Pretérito Perfecto</td><td><em>he hablado</em></td><td>Zeitraum läuft noch</td><td>hoy, esta semana, ya, todavía no, nunca</td></tr>
        <tr><td>Indefinido</td><td><em>hablé</em></td><td>abgeschlossenes Ereignis</td><td>ayer, el año pasado, en 2020</td></tr>
        <tr><td>Imperfecto</td><td><em>hablaba</em></td><td>Beschreibung, Gewohnheit</td><td>antes, siempre, todos los días</td></tr>
        <tr><td>Futuro / ir a</td><td><em>hablaré / voy a hablar</em></td><td>Zukunft, Vermutung</td><td>mañana, el año que viene</td></tr>
      </table>
      <div class="merke"><strong>Die drei Fragen, die dir fast immer weiterhelfen:</strong><br>
      1. Ist der Zeitraum vorbei? Ja → Indefinido. Nein → Perfecto.<br>
      2. Beschreibe ich, wie es war, oder was passierte? Beschreibung → Imperfecto.<br>
      3. Rede ich über einen konkreten Plan? Ja → <em>ir a</em>. Vermutung → Futuro.</div>
      <p><strong>Was ab morgen kommt:</strong> Der Übergang nach B1. Zuerst das Condicional
      („ich würde…"), dann das Plusquamperfekt, und ab Tag 43 das große Thema: der
      <strong>Subjuntivo</strong>. Der wirkt erst fremd, folgt aber klaren Regeln — und
      ohne ihn klingt Spanisch nie ganz erwachsen.</p>`,
    uebungen: [
      { id: "g3001", satz: "Hoy ___ (trabajar, yo) mucho.", loesung: "he trabajado", tipps: ["he trabajado", "trabajé", "trabajaba"], hinweis: "hoy = läuft noch", de: "Heute habe ich viel gearbeitet." },
      { id: "g3002", satz: "Ayer ___ (trabajar, yo) mucho.", loesung: "trabajé", tipps: ["trabajé", "he trabajado", "trabajaba"], hinweis: "ayer = abgeschlossen", de: "Gestern arbeitete ich viel." },
      { id: "g3003", satz: "Antes ___ (trabajar, yo) los sábados.", loesung: "trabajaba", tipps: ["trabajaba", "trabajé", "trabajo"], hinweis: "antes = Gewohnheit", de: "Früher arbeitete ich samstags." },
      { id: "g3004", satz: "Ahora mismo ___ (estar, yo) trabajando.", loesung: "estoy", tipps: ["estoy", "soy", "estaba"], hinweis: "gerade jetzt", de: "Gerade jetzt arbeite ich." },
      { id: "g3005", satz: "Mañana ___ (ir, yo) a trabajar temprano.", loesung: "voy", tipps: ["voy", "iré", "fui"], hinweis: "konkreter Plan", de: "Morgen werde ich früh arbeiten gehen." }
    ]
  }
});
