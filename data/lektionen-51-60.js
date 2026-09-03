/* Tag 51–60 · Niveau B1 · Vertiefung und Abschluss */

LEKTIONEN.push({
  tag: 51, niveau: "B1", thema: "Geld und Behörden",
  vokabeln: [
    { id: "v5101", es: "el trámite",     de: "der Behördengang", wortart: "Substantiv", beispiel: "Es un trámite sencillo.", beispielDe: "Das ist ein einfacher Behördengang." },
    { id: "v5102", es: "el impuesto",    de: "die Steuer",       wortart: "Substantiv", beispiel: "Hay que pagar impuestos.", beispielDe: "Man muss Steuern zahlen." },
    { id: "v5103", es: "la cuenta",      de: "das Konto",        wortart: "Substantiv", beispiel: "Abrí una cuenta en el banco.", beispielDe: "Ich eröffnete ein Konto bei der Bank." },
    { id: "v5104", es: "el préstamo",    de: "das Darlehen",     wortart: "Substantiv", beispiel: "Pedimos un préstamo.", beispielDe: "Wir beantragten ein Darlehen." },
    { id: "v5105", es: "el recibo",      de: "der Beleg",        wortart: "Substantiv", beispiel: "Guarde el recibo.", beispielDe: "Bewahren Sie den Beleg auf." },
    { id: "v5106", es: "el ingreso",     de: "das Einkommen",    wortart: "Substantiv", beispiel: "Sus ingresos son bajos.", beispielDe: "Sein Einkommen ist niedrig." },
    { id: "v5107", es: "el gasto",       de: "die Ausgabe",      wortart: "Substantiv", beispiel: "Los gastos han subido.", beispielDe: "Die Ausgaben sind gestiegen." },
    { id: "v5108", es: "solicitar",      de: "beantragen",       wortart: "Verb", beispiel: "Solicité una ayuda.", beispielDe: "Ich beantragte eine Beihilfe." },
    { id: "v5109", es: "el plazo",       de: "die Rate / Frist", wortart: "Substantiv", beispiel: "Lo pago a plazos.", beispielDe: "Ich zahle es in Raten." },
    { id: "v5110", es: "el sello",       de: "der Stempel",      wortart: "Substantiv", beispiel: "Falta el sello oficial.", beispielDe: "Der amtliche Stempel fehlt." }
  ],
  saetze: [
    { id: "s5101", es: "Si tuviera más dinero, viajaría más.",   de: "Wenn ich mehr Geld hätte, würde ich mehr reisen." },
    { id: "s5102", es: "Si fuera tú, hablaría con el banco.",    de: "Wenn ich du wäre, würde ich mit der Bank sprechen." },
    { id: "s5103", es: "Me gustaría que me explicaran el trámite.", de: "Ich hätte gern, dass man mir den Vorgang erklärt." },
    { id: "s5104", es: "Ojalá pudiéramos pagarlo de una vez.",   de: "Wenn wir es doch auf einmal zahlen könnten." },
    { id: "s5105", es: "Si supiera la respuesta, te la diría.",  de: "Wenn ich die Antwort wüsste, würde ich sie dir sagen." }
  ],
  grammatik: {
    id: "g51", titel: "Imperfecto de Subjuntivo — die Bildung",
    erklaerung: `
      <p>Die zweite Subjuntiv-Form. Sie klingt zunächst kompliziert, ist aber
      <strong>vollkommen regelmäßig</strong> — es gibt keine einzige Ausnahme.</p>
      <div class="merke"><strong>Der Bauplan in drei Schritten:</strong><br>
      1. Nimm die <em>ellos</em>-Form im Indefinido: <em>hablar → hablaron</em><br>
      2. Streiche <em>-ron</em>: <em>habla-</em><br>
      3. Hänge an: <em>-ra, -ras, -ra, -ramos, -rais, -ran</em></div>
      <table>
        <tr><th></th><th>hablar<br>(hablaron)</th><th>comer<br>(comieron)</th><th>tener<br>(tuvieron)</th></tr>
        <tr><td>yo</td><td>habla<em>ra</em></td><td>comie<em>ra</em></td><td>tuvie<em>ra</em></td></tr>
        <tr><td>tú</td><td>habla<em>ras</em></td><td>comie<em>ras</em></td><td>tuvie<em>ras</em></td></tr>
        <tr><td>él/ella</td><td>habla<em>ra</em></td><td>comie<em>ra</em></td><td>tuvie<em>ra</em></td></tr>
        <tr><td>nosotros</td><td>hablá<em>ramos</em></td><td>comié<em>ramos</em></td><td>tuvié<em>ramos</em></td></tr>
        <tr><td>vosotros</td><td>habla<em>rais</em></td><td>comie<em>rais</em></td><td>tuvie<em>rais</em></td></tr>
        <tr><td>ellos</td><td>habla<em>ran</em></td><td>comie<em>ran</em></td><td>tuvie<em>ran</em></td></tr>
      </table>
      <p><strong>Weil der Indefinido-Stamm die Grundlage ist, kommen alle
      Unregelmäßigkeiten von dort automatisch mit:</strong></p>
      <ul>
        <li><em>ser/ir → fueron → fuera, fueras, fuera…</em></li>
        <li><em>hacer → hicieron → hiciera…</em> · <em>poder → pudieron → pudiera…</em></li>
        <li><em>saber → supieron → supiera…</em> · <em>decir → dijeron → dijera…</em></li>
        <li><em>estar → estuvieron → estuviera…</em> · <em>haber → hubieron → hubiera…</em></li>
      </ul>
      <div class="merke"><strong>Zwei gleichwertige Endungen:</strong> Es gibt auch die
      Variante auf <em>-se</em> (<em>hablase, hablases…</em>). Sie bedeutet exakt dasselbe,
      klingt aber literarischer. Für dich reicht die <em>-ra</em>-Form völlig —
      erkennen solltest du die andere trotzdem.</div>`,
    uebungen: [
      { id: "g5101", satz: "Si ___ (tener, yo) tiempo, iría contigo.", loesung: "tuviera", tipps: ["tuviera", "tenía", "tendría"], hinweis: "tuvieron → tuvie-", de: "Wenn ich Zeit hätte, käme ich mit." },
      { id: "g5102", satz: "Si ___ (ser, yo) tú, no lo haría.", loesung: "fuera", tipps: ["fuera", "era", "sería"], hinweis: "fueron → fue-", de: "Wenn ich du wäre, würde ich es nicht tun." },
      { id: "g5103", satz: "Ojalá ___ (poder, nosotros) ayudar.", loesung: "pudiéramos", tipps: ["pudiéramos", "podríamos", "podemos"], hinweis: "pudieron → pudie-", de: "Wenn wir doch helfen könnten." },
      { id: "g5104", satz: "Si ___ (saber, yo) la respuesta, te la diría.", loesung: "supiera", tipps: ["supiera", "sabría", "sabía"], hinweis: "supieron → supie-", de: "Wenn ich die Antwort wüsste, sagte ich sie dir." },
      { id: "g5105", satz: "Me gustaría que me lo ___ (explicar, ellos).", loesung: "explicaran", tipps: ["explicaran", "explican", "explicarían"], hinweis: "explicaron → explica-", de: "Ich hätte gern, dass sie es mir erklären." }
    ]
  }
});

LEKTIONEN.push({
  tag: 52, niveau: "B1", thema: "Träume und Möglichkeiten",
  vokabeln: [
    { id: "v5201", es: "el sueño",       de: "der Traum",        wortart: "Substantiv", beispiel: "Es un sueño hecho realidad.", beispielDe: "Das ist ein wahr gewordener Traum." },
    { id: "v5202", es: "imaginarse",     de: "sich vorstellen",  wortart: "Verb", beispiel: "Imagínate que ganas la lotería.", beispielDe: "Stell dir vor, du gewinnst im Lotto." },
    { id: "v5203", es: "la oportunidad", de: "die Gelegenheit",  wortart: "Substantiv", beispiel: "No pierdas esta oportunidad.", beispielDe: "Verpass diese Gelegenheit nicht." },
    { id: "v5204", es: "atreverse a",    de: "wagen",            wortart: "Verb", beispiel: "Si me atreviera, lo haría.", beispielDe: "Wenn ich mich trauen würde, täte ich es." },
    { id: "v5205", es: "renunciar a",    de: "verzichten auf",   wortart: "Verb", beispiel: "No quiero renunciar a nada.", beispielDe: "Ich will auf nichts verzichten." },
    { id: "v5206", es: "el cambio",      de: "die Veränderung",  wortart: "Substantiv", beispiel: "Necesito un cambio.", beispielDe: "Ich brauche eine Veränderung." },
    { id: "v5207", es: "merecer",        de: "verdienen",        wortart: "Verb", beispiel: "Te lo mereces.", beispielDe: "Du hast es verdient." },
    { id: "v5208", es: "la meta",        de: "das Ziel",         wortart: "Substantiv", beispiel: "Mi meta es hablar con soltura.", beispielDe: "Mein Ziel ist es, flüssig zu sprechen." },
    { id: "v5209", es: "el fracaso",     de: "der Misserfolg",   wortart: "Substantiv", beispiel: "El fracaso enseña mucho.", beispielDe: "Misserfolg lehrt viel." },
    { id: "v5210", es: "valer la pena",  de: "sich lohnen",      wortart: "Verb", beispiel: "Vale la pena intentarlo.", beispielDe: "Es lohnt sich, es zu versuchen." }
  ],
  saetze: [
    { id: "s5201", es: "Si tuviera más tiempo, aprendería otro idioma.", de: "Wenn ich mehr Zeit hätte, würde ich eine weitere Sprache lernen." },
    { id: "s5202", es: "Si viviera en España, hablaría mejor.",  de: "Wenn ich in Spanien lebte, würde ich besser sprechen." },
    { id: "s5203", es: "¿Qué harías si te tocara la lotería?",   de: "Was würdest du tun, wenn du im Lotto gewinnen würdest?" },
    { id: "s5204", es: "Si pudiera, me mudaría al campo.",       de: "Wenn ich könnte, würde ich aufs Land ziehen." },
    { id: "s5205", es: "Yo en tu lugar, no lo pensaría tanto.",  de: "An deiner Stelle würde ich nicht so lange überlegen." }
  ],
  grammatik: {
    id: "g52", titel: "Bedingungssätze Typ 2 — irreale Bedingungen",
    erklaerung: `
      <p>Der irreale Bedingungssatz beschreibt etwas, das gerade <strong>nicht</strong> der
      Fall ist: „Wenn ich reich wäre…" — bin ich aber nicht.</p>
      <div class="merke"><strong>Der Bauplan — und er ist immer derselbe:</strong><br>
      <em>si</em> + <strong>Imperfecto de Subjuntivo</strong> ,
      <strong>Condicional simple</strong><br>
      <em>Si <strong>tuviera</strong> dinero, <strong>viajaría</strong> más.</em></div>
      <table>
        <tr><th>Typ</th><th>Bedingung</th><th>Folge</th><th>Beispiel</th></tr>
        <tr><td>1 — real (Tag 46)</td><td>Presente Indikativ</td><td>Presente / Futuro</td>
            <td>Si <em>tengo</em> tiempo, <em>iré</em>.</td></tr>
        <tr><td>2 — irreal</td><td>Imperfecto Subjuntivo</td><td>Condicional</td>
            <td>Si <em>tuviera</em> tiempo, <em>iría</em>.</td></tr>
      </table>
      <p>Der Unterschied in der Bedeutung:</p>
      <ul>
        <li><em>Si tengo tiempo, iré.</em> — Kann gut sein, dass ich Zeit habe.</li>
        <li><em>Si tuviera tiempo, iría.</em> — Ich habe keine Zeit, deshalb gehe ich nicht.</li>
      </ul>
      <div class="merke"><strong>Die goldene Regel bleibt:</strong> Nach <em>si</em> steht
      <strong>nie</strong> Condicional und <strong>nie</strong> Presente de Subjuntivo.<br>
      Richtig: <em>Si <strong>tuviera</strong>…, <strong>iría</strong>.</em><br>
      Falsch: <s>Si tendría…</s> · <s>Si tenga…</s></div>
      <p><strong>Häufige Wendungen mit diesem Muster:</strong></p>
      <ul>
        <li><em>Si yo fuera tú…</em> / <em>Yo que tú…</em> — an deiner Stelle</li>
        <li><em>¿Qué harías si…?</em> — Was würdest du tun, wenn…?</li>
        <li><em>Como si</em> + Imperfecto de Subjuntivo — als ob:
            <em>Habla como si <strong>fuera</strong> experto.</em></li>
        <li><em>Ojalá</em> + Imperfecto de Subjuntivo — wenn doch nur:
            <em>Ojalá <strong>pudiera</strong> ayudarte.</em></li>
      </ul>
      <p><em>como si</em> steht <strong>immer</strong> mit dem Imperfecto de Subjuntivo —
      auch im Präsens, weil ein Vergleich mit etwas Unwirklichem gezogen wird.</p>`,
    uebungen: [
      { id: "g5201", satz: "Si ___ (tener, yo) dinero, viajaría.", loesung: "tuviera", tipps: ["tuviera", "tengo", "tendría"], hinweis: "nach si: Imperfecto Subj.", de: "Wenn ich Geld hätte, würde ich reisen." },
      { id: "g5202", satz: "Si tuviera dinero, ___ (viajar, yo) más.", loesung: "viajaría", tipps: ["viajaría", "viajara", "viajaré"], hinweis: "Folge: Condicional", de: "Wenn ich Geld hätte, würde ich mehr reisen." },
      { id: "g5203", satz: "¿Qué ___ (hacer, tú) si fueras rico?", loesung: "harías", tipps: ["harías", "hicieras", "harás"], hinweis: "Folge: Condicional", de: "Was würdest du tun, wenn du reich wärst?" },
      { id: "g5204", satz: "Habla como si ___ (ser) experto.", loesung: "fuera", tipps: ["fuera", "es", "sería"], hinweis: "como si → immer Subj.", de: "Er redet, als ob er Experte wäre." },
      { id: "g5205", satz: "Si ___ (vivir, yo) allí, hablaría mejor.", loesung: "viviera", tipps: ["viviera", "vivo", "viviría"], hinweis: "nach si", de: "Wenn ich dort lebte, würde ich besser sprechen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 53, niveau: "B1", thema: "Bedauern und Rückschau",
  vokabeln: [
    { id: "v5301", es: "arrepentirse de", de: "bereuen",         wortart: "Verb", beispiel: "Me arrepiento de no haberlo dicho.", beispielDe: "Ich bereue, es nicht gesagt zu haben." },
    { id: "v5302", es: "haber podido",   de: "gekonnt haben",    wortart: "Verb", beispiel: "Ojalá hubiera podido ir.", beispielDe: "Hätte ich doch gehen können." },
    { id: "v5303", es: "la equivocación", de: "der Irrtum",      wortart: "Substantiv", beispiel: "Fue una equivocación mía.", beispielDe: "Das war ein Irrtum von mir." },
    { id: "v5304", es: "de haberlo sabido", de: "hätte ich es gewusst", wortart: "Ausdruck", beispiel: "De haberlo sabido, habría venido.", beispielDe: "Hätte ich es gewusst, wäre ich gekommen." },
    { id: "v5305", es: "perderse",       de: "verpassen",        wortart: "Verb", beispiel: "Te perdiste una buena fiesta.", beispielDe: "Du hast eine gute Party verpasst." },
    { id: "v5306", es: "el remordimiento", de: "die Gewissensbisse", wortart: "Substantiv", beispiel: "Siente remordimiento.", beispielDe: "Er hat Gewissensbisse." },
    { id: "v5307", es: "la culpa",       de: "die Schuld",       wortart: "Substantiv", beispiel: "No fue culpa tuya.", beispielDe: "Das war nicht deine Schuld." },
    { id: "v5308", es: "reprochar",      de: "vorwerfen",        wortart: "Verb", beispiel: "No te reprocho nada.", beispielDe: "Ich werfe dir nichts vor." },
    { id: "v5309", es: "haberse dado cuenta", de: "es bemerkt haben", wortart: "Verb", beispiel: "Debería haberme dado cuenta.", beispielDe: "Ich hätte es merken müssen." },
    { id: "v5310", es: "en su momento",  de: "seinerzeit",       wortart: "Adverb", beispiel: "En su momento no lo vi claro.", beispielDe: "Seinerzeit war es mir nicht klar." }
  ],
  saetze: [
    { id: "s5301", es: "Si hubiera estudiado más, habría aprobado.", de: "Wenn ich mehr gelernt hätte, hätte ich bestanden." },
    { id: "s5302", es: "Ojalá hubiera venido con vosotros.",     de: "Wäre ich doch mit euch gekommen." },
    { id: "s5303", es: "Deberías haberme avisado antes.",        de: "Du hättest mir früher Bescheid sagen sollen." },
    { id: "s5304", es: "Podría haber sido peor.",                de: "Es hätte schlimmer sein können." },
    { id: "s5305", es: "No me arrepiento de nada de lo que hice.", de: "Ich bereue nichts von dem, was ich tat." }
  ],
  grammatik: {
    id: "g53", titel: "Bedingungssätze Typ 3 — was hätte sein können",
    erklaerung: `
      <p>Der dritte Typ blickt zurück auf etwas, das <strong>nicht mehr zu ändern</strong>
      ist: „Wenn ich das gewusst hätte…" Damit hast du alle drei Typen beisammen.</p>
      <div class="merke"><strong>Der Bauplan:</strong><br>
      <em>si</em> + <strong>hubiera</strong> + Partizip ,
      <strong>habría</strong> + Partizip<br>
      <em>Si <strong>hubiera estudiado</strong>, <strong>habría aprobado</strong>.</em></div>
      <table>
        <tr><th>Typ</th><th>Bedingung</th><th>Folge</th></tr>
        <tr><td>1 — möglich</td><td>si + Presente</td><td>Futuro / Presente</td></tr>
        <tr><td>2 — unwahrscheinlich</td><td>si + Imperfecto Subj.</td><td>Condicional</td></tr>
        <tr><td>3 — vorbei</td><td>si + hubiera + Partizip</td><td>habría + Partizip</td></tr>
      </table>
      <p>Am selben Beispiel:</p>
      <ul>
        <li><em>Si <strong>tengo</strong> tiempo, <strong>iré</strong>.</em> — kann sein</li>
        <li><em>Si <strong>tuviera</strong> tiempo, <strong>iría</strong>.</em> — habe ich aber nicht</li>
        <li><em>Si <strong>hubiera tenido</strong> tiempo, <strong>habría ido</strong>.</em>
            — hatte ich damals nicht, jetzt zu spät</li>
      </ul>
      <p><em>hubiera</em> ist das Imperfecto de Subjuntivo von <em>haber</em>:
      <em>hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran</em>.<br>
      <em>habría</em> ist das Condicional von <em>haber</em>.</p>
      <div class="merke"><strong>Im gesprochenen Spanisch</strong> hört man oft
      <em>hubiera</em> in beiden Satzhälften: <em>Si hubiera estudiado, hubiera aprobado.</em>
      Das ist umgangssprachlich völlig üblich.</div>
      <p><strong>Verwandte Wendungen für Bedauern:</strong></p>
      <ul>
        <li><em>Ojalá <strong>hubiera</strong> venido.</em> — Wäre ich doch gekommen.</li>
        <li><em><strong>Debería haber</strong> ido.</em> — Ich hätte gehen sollen.</li>
        <li><em><strong>Podría haber</strong> sido peor.</em> — Es hätte schlimmer sein können.</li>
        <li><em><strong>Tendría que haber</strong> llamado.</em> — Ich hätte anrufen müssen.</li>
      </ul>`,
    uebungen: [
      { id: "g5301", satz: "Si ___ (haber, yo) estudiado, habría aprobado.", loesung: "hubiera", tipps: ["hubiera", "habría", "había"], hinweis: "nach si", de: "Hätte ich gelernt, hätte ich bestanden." },
      { id: "g5302", satz: "Si hubiera estudiado, ___ (haber, yo) aprobado.", loesung: "habría", tipps: ["habría", "hubiera", "había"], hinweis: "Folge: Condicional", de: "Hätte ich gelernt, hätte ich bestanden." },
      { id: "g5303", satz: "Ojalá ___ (haber, yo) venido con vosotros.", loesung: "hubiera", tipps: ["hubiera", "habría", "he"], hinweis: "ojalá + Bedauern", de: "Wäre ich doch mitgekommen." },
      { id: "g5304", satz: "___ (deber, tú) haberme avisado.", loesung: "Deberías", tipps: ["Deberías", "Debiste", "Debes"], hinweis: "du hättest sollen", de: "Du hättest mich informieren sollen." },
      { id: "g5305", satz: "___ (poder) haber sido peor.", loesung: "Podría", tipps: ["Podría", "Puede", "Pudo"], hinweis: "es hätte können", de: "Es hätte schlimmer sein können." }
    ]
  }
});

LEKTIONEN.push({
  tag: 54, niveau: "B1", thema: "Gesundheit und Wohlbefinden",
  vokabeln: [
    { id: "v5401", es: "el bienestar",   de: "das Wohlbefinden", wortart: "Substantiv", beispiel: "El bienestar es lo primero.", beispielDe: "Das Wohlbefinden geht vor." },
    { id: "v5402", es: "el estrés",      de: "der Stress",       wortart: "Substantiv", beispiel: "Tengo mucho estrés últimamente.", beispielDe: "Ich habe in letzter Zeit viel Stress." },
    { id: "v5403", es: "descansar",      de: "sich ausruhen",    wortart: "Verb", beispiel: "Es importante que descanses.", beispielDe: "Es ist wichtig, dass du dich ausruhst." },
    { id: "v5404", es: "la alimentación", de: "die Ernährung",   wortart: "Substantiv", beispiel: "Cuido mi alimentación.", beispielDe: "Ich achte auf meine Ernährung." },
    { id: "v5405", es: "el hábito",      de: "die Gewohnheit",   wortart: "Substantiv", beispiel: "Cambié mis hábitos.", beispielDe: "Ich änderte meine Gewohnheiten." },
    { id: "v5406", es: "el esfuerzo",    de: "die Anstrengung",  wortart: "Substantiv", beispiel: "Requiere mucho esfuerzo.", beispielDe: "Das erfordert viel Anstrengung." },
    { id: "v5407", es: "el sueño",       de: "der Schlaf",       wortart: "Substantiv", beispiel: "Duermo mal, tengo poco sueño.", beispielDe: "Ich schlafe schlecht, ich habe wenig Schlaf." },
    { id: "v5408", es: "prevenir",       de: "vorbeugen",        wortart: "Verb", beispiel: "Más vale prevenir que curar.", beispielDe: "Vorbeugen ist besser als heilen." },
    { id: "v5409", es: "el chequeo",     de: "die Vorsorgeuntersuchung", wortart: "Substantiv", beispiel: "Me hice un chequeo anual.", beispielDe: "Ich machte eine jährliche Untersuchung." },
    { id: "v5410", es: "el equilibrio",  de: "das Gleichgewicht", wortart: "Substantiv", beispiel: "Busco el equilibrio entre trabajo y vida.", beispielDe: "Ich suche das Gleichgewicht zwischen Arbeit und Leben." }
  ],
  saetze: [
    { id: "s5401", es: "Me dijo que descansara más.",            de: "Er sagte mir, ich solle mich mehr ausruhen." },
    { id: "s5402", es: "Quería que fuéramos al médico juntos.",  de: "Er wollte, dass wir zusammen zum Arzt gehen." },
    { id: "s5403", es: "Era importante que durmiera bien.",      de: "Es war wichtig, dass er gut schlief." },
    { id: "s5404", es: "No creía que fuera tan grave.",          de: "Ich glaubte nicht, dass es so ernst wäre." },
    { id: "s5405", es: "Buscaba a alguien que me entendiera.",   de: "Ich suchte jemanden, der mich verstünde." }
  ],
  grammatik: {
    id: "g54", titel: "Imperfecto de Subjuntivo im Nebensatz",
    erklaerung: `
      <p>Alle Subjuntiv-Auslöser, die du seit Tag 37 kennst, gelten auch in der Vergangenheit.
      Nur die Form wechselt: Steht der Hauptsatz in der Vergangenheit, steht auch der
      Nebensatz im Imperfecto de Subjuntivo.</p>
      <div class="merke"><strong>Die Zeitenfolge:</strong><br>
      Hauptsatz Gegenwart → Nebensatz <strong>Presente</strong> de Subjuntivo<br>
      <em>Quiero que <strong>vengas</strong>.</em><br>
      Hauptsatz Vergangenheit → Nebensatz <strong>Imperfecto</strong> de Subjuntivo<br>
      <em>Quería que <strong>vinieras</strong>.</em></div>
      <table>
        <tr><th>Gegenwart</th><th>Vergangenheit</th></tr>
        <tr><td>Quiero que <em>vengas</em>.</td><td>Quería que <em>vinieras</em>.</td></tr>
        <tr><td>Me alegro de que <em>estés</em> aquí.</td><td>Me alegré de que <em>estuvieras</em> aquí.</td></tr>
        <tr><td>Es importante que <em>descanses</em>.</td><td>Era importante que <em>descansaras</em>.</td></tr>
        <tr><td>No creo que <em>sea</em> grave.</td><td>No creía que <em>fuera</em> grave.</td></tr>
        <tr><td>Busco a alguien que me <em>entienda</em>.</td><td>Buscaba a alguien que me <em>entendiera</em>.</td></tr>
        <tr><td>Te digo que <em>vengas</em>.</td><td>Te dije que <em>vinieras</em>.</td></tr>
      </table>
      <p><strong>Auslöser für den Hauptsatz in der Vergangenheit:</strong> Indefinido
      (<em>quise, dije</em>), Imperfecto (<em>quería, era</em>), Pluscuamperfecto
      (<em>había dicho</em>) und Condicional (<em>me gustaría</em>).</p>
      <div class="merke"><strong>Achtung — <em>me gustaría</em> zählt dazu:</strong><br>
      <em>Me gustaría que <strong>vinieras</strong>.</em> — Ich hätte gern, dass du kommst.<br>
      Obwohl es sich auf die Zukunft bezieht, verlangt das Condicional den Imperfecto
      de Subjuntivo. Das ist die höfliche Standardformulierung im Spanischen.</div>
      <p>Damit hast du das Subjuntiv-System komplett: <em>Presente</em> für Gegenwart und
      Zukunft, <em>Imperfecto</em> für Vergangenheit und Irreales, <em>hubiera + Partizip</em>
      für Verpasstes.</p>`,
    uebungen: [
      { id: "g5401", satz: "Quería que ___ (venir, tú) conmigo.", loesung: "vinieras", tipps: ["vinieras", "vengas", "vienes"], hinweis: "Hauptsatz Vergangenheit", de: "Ich wollte, dass du mitkommst." },
      { id: "g5402", satz: "Me dijo que ___ (descansar, yo) más.", loesung: "descansara", tipps: ["descansara", "descanse", "descanso"], hinweis: "dijo → Imperfecto Subj.", de: "Er sagte, ich solle mich mehr ausruhen." },
      { id: "g5403", satz: "Era importante que ___ (dormir, él) bien.", loesung: "durmiera", tipps: ["durmiera", "duerma", "dormía"], hinweis: "durmieron → durmie-", de: "Es war wichtig, dass er gut schlief." },
      { id: "g5404", satz: "No creía que ___ (ser) tan grave.", loesung: "fuera", tipps: ["fuera", "sea", "era"], hinweis: "creía → Imperfecto Subj.", de: "Ich glaubte nicht, dass es so ernst wäre." },
      { id: "g5405", satz: "Me gustaría que ___ (venir, vosotros).", loesung: "vinierais", tipps: ["vinierais", "vengáis", "venís"], hinweis: "Condicional → Imperfecto Subj.", de: "Ich hätte gern, dass ihr kommt." }
    ]
  }
});

LEKTIONEN.push({
  tag: 55, niveau: "B1", thema: "Medien und Meinungsbildung",
  vokabeln: [
    { id: "v5501", es: "el medio",       de: "das Medium",       wortart: "Substantiv", beispiel: "Los medios informan a diario.", beispielDe: "Die Medien berichten täglich." },
    { id: "v5502", es: "la portada",     de: "die Titelseite",   wortart: "Substantiv", beispiel: "Salió en la portada.", beispielDe: "Es erschien auf der Titelseite." },
    { id: "v5503", es: "el reportaje",   de: "die Reportage",    wortart: "Substantiv", beispiel: "Vi un reportaje muy bueno.", beispielDe: "Ich sah eine sehr gute Reportage." },
    { id: "v5504", es: "difundir",       de: "verbreiten",       wortart: "Verb", beispiel: "Difundieron la noticia rápido.", beispielDe: "Sie verbreiteten die Nachricht schnell." },
    { id: "v5505", es: "el bulo",        de: "die Falschmeldung", wortart: "Substantiv", beispiel: "Era un bulo, no era verdad.", beispielDe: "Es war eine Falschmeldung, es stimmte nicht." },
    { id: "v5506", es: "contrastar",     de: "gegenprüfen",      wortart: "Verb", beispiel: "Hay que contrastar la información.", beispielDe: "Man muss die Information gegenprüfen." },
    { id: "v5507", es: "la audiencia",   de: "das Publikum",     wortart: "Substantiv", beispiel: "El programa tiene mucha audiencia.", beispielDe: "Die Sendung hat viele Zuschauer." },
    { id: "v5508", es: "el enfoque",     de: "der Blickwinkel",  wortart: "Substantiv", beispiel: "Es un enfoque distinto.", beispielDe: "Das ist ein anderer Blickwinkel." },
    { id: "v5509", es: "sesgado",        de: "einseitig",        wortart: "Adjektiv", beispiel: "El artículo está sesgado.", beispielDe: "Der Artikel ist einseitig." },
    { id: "v5510", es: "la fuente",      de: "die Quelle",       wortart: "Substantiv", beispiel: "Cita siempre tus fuentes.", beispielDe: "Nenne immer deine Quellen." }
  ],
  saetze: [
    { id: "s5501", es: "Lo que más me interesa es la política.", de: "Was mich am meisten interessiert, ist Politik." },
    { id: "s5502", es: "Lo bueno es que hay muchas fuentes.",    de: "Das Gute ist, dass es viele Quellen gibt." },
    { id: "s5503", es: "No es lo que parece.",                   de: "Es ist nicht das, was es scheint." },
    { id: "s5504", es: "Todo lo que dijo era falso.",            de: "Alles, was er sagte, war falsch." },
    { id: "s5505", es: "Lo importante es contrastar la información.", de: "Wichtig ist, die Information gegenzuprüfen." }
  ],
  grammatik: {
    id: "g55", titel: "Das neutrale lo",
    erklaerung: `
      <p><em>lo</em> ist ein kleines Wort mit großer Wirkung — und es hat im Deutschen kein
      direktes Gegenstück. Es macht aus Adjektiven und ganzen Sätzen ein Substantiv.</p>
      <p><strong>1. <em>lo</em> + Adjektiv = „das … daran"</strong></p>
      <table>
        <tr><td><em>lo bueno</em></td><td>das Gute (daran)</td></tr>
        <tr><td><em>lo difícil</em></td><td>das Schwierige</td></tr>
        <tr><td><em>lo importante</em></td><td>das Wichtige</td></tr>
        <tr><td><em>lo mejor</em></td><td>das Beste</td></tr>
      </table>
      <p><em><strong>Lo mejor</strong> del viaje fue la comida.</em> — Das Beste an der
      Reise war das Essen.</p>
      <p><strong>2. <em>lo que</em> = „das, was"</strong> — sehr häufig:</p>
      <ul>
        <li><em><strong>Lo que</strong> dices es cierto.</em> — Was du sagst, stimmt.</li>
        <li><em>No entiendo <strong>lo que</strong> pasa.</em> — Ich verstehe nicht, was los ist.</li>
        <li><em>Todo <strong>lo que</strong> necesito.</em> — Alles, was ich brauche.</li>
      </ul>
      <div class="merke"><strong>Der Satzanfang-Trick:</strong> Mit <em>lo que</em> kannst du
      etwas betonen, indem du es nach vorn holst:<br>
      <em><strong>Lo que</strong> más me gusta <strong>es</strong> viajar.</em><br>
      = Was mir am besten gefällt, ist Reisen.<br>
      Diese Struktur klingt sehr natürlich und macht deine Sätze abwechslungsreicher.</div>
      <p><strong>3. <em>lo de</em> = „die Sache mit"</strong></p>
      <ul>
        <li><em><strong>Lo de</strong> ayer fue un malentendido.</em> — Die Sache von gestern
            war ein Missverständnis.</li>
        <li><em>¿Qué tal <strong>lo de</strong> tu trabajo?</em> — Wie läuft das mit deiner Arbeit?</li>
      </ul>
      <p><strong>4. <em>lo</em> + Adjektiv + <em>que</em> = „wie … etwas ist"</strong><br>
      <em>No sabes <strong>lo difícil que</strong> es.</em> — Du weißt nicht, wie schwer das ist.</p>
      <div class="merke"><strong>Nicht verwechseln</strong> mit dem Objektpronomen <em>lo</em>
      aus Tag 6 (<em>Lo compro</em> = ich kaufe es). Das neutrale <em>lo</em> steht immer vor
      einem Adjektiv, vor <em>que</em> oder vor <em>de</em>.</div>`,
    uebungen: [
      { id: "g5501", satz: "___ que más me gusta es viajar.", loesung: "Lo", tipps: ["Lo", "El", "La"], hinweis: "das, was", de: "Was mir am besten gefällt, ist Reisen." },
      { id: "g5502", satz: "___ bueno es que tenemos tiempo.", loesung: "Lo", tipps: ["Lo", "El", "Es"], hinweis: "lo + Adjektiv", de: "Das Gute ist, dass wir Zeit haben." },
      { id: "g5503", satz: "No entiendo lo ___ dices.", loesung: "que", tipps: ["que", "de", "cual"], hinweis: "das, was", de: "Ich verstehe nicht, was du sagst." },
      { id: "g5504", satz: "Lo ___ ayer fue un error.", loesung: "de", tipps: ["de", "que", "en"], hinweis: "die Sache von", de: "Die Sache von gestern war ein Fehler." },
      { id: "g5505", satz: "No sabes lo difícil ___ es.", loesung: "que", tipps: ["que", "de", "como"], hinweis: "wie schwer es ist", de: "Du weißt nicht, wie schwer das ist." }
    ]
  }
});

LEKTIONEN.push({
  tag: 56, niveau: "B1", thema: "Beziehungen und Gefühle",
  vokabeln: [
    { id: "v5601", es: "la confianza",   de: "das Vertrauen",    wortart: "Substantiv", beispiel: "La confianza se gana.", beispielDe: "Vertrauen muss man sich verdienen." },
    { id: "v5602", es: "llevarse bien",  de: "sich gut verstehen", wortart: "Verb", beispiel: "Nos llevamos muy bien.", beispielDe: "Wir verstehen uns sehr gut." },
    { id: "v5603", es: "enfadarse",      de: "sich ärgern",      wortart: "Verb", beispiel: "Se enfadó conmigo.", beispielDe: "Er ärgerte sich über mich." },
    { id: "v5604", es: "el malentendido", de: "das Missverständnis", wortart: "Substantiv", beispiel: "Fue solo un malentendido.", beispielDe: "Das war nur ein Missverständnis." },
    { id: "v5605", es: "perdonar",       de: "verzeihen",        wortart: "Verb", beispiel: "Espero que me perdones.", beispielDe: "Ich hoffe, du verzeihst mir." },
    { id: "v5606", es: "el cariño",      de: "die Zuneigung",    wortart: "Substantiv", beispiel: "Le tengo mucho cariño.", beispielDe: "Ich habe ihn sehr gern." },
    { id: "v5607", es: "echar de menos", de: "vermissen",        wortart: "Verb", beispiel: "Te echo mucho de menos.", beispielDe: "Ich vermisse dich sehr." },
    { id: "v5608", es: "apoyar",         de: "unterstützen",     wortart: "Verb", beispiel: "Siempre me ha apoyado.", beispielDe: "Er hat mich immer unterstützt." },
    { id: "v5609", es: "el compromiso",  de: "die Verbindlichkeit", wortart: "Substantiv", beispiel: "Hace falta compromiso.", beispielDe: "Es braucht Verbindlichkeit." },
    { id: "v5610", es: "sincero",        de: "aufrichtig",       wortart: "Adjektiv", beispiel: "Sé sincero conmigo.", beispielDe: "Sei aufrichtig zu mir." }
  ],
  saetze: [
    { id: "s5601", es: "Nos vemos todos los viernes.",           de: "Wir sehen uns jeden Freitag." },
    { id: "s5602", es: "Se ayudan mutuamente.",                  de: "Sie helfen einander." },
    { id: "s5603", es: "Se me olvidó llamarte, perdona.",        de: "Ich habe vergessen, dich anzurufen, entschuldige." },
    { id: "s5604", es: "Se me rompió el móvil ayer.",            de: "Mir ist gestern das Handy kaputtgegangen." },
    { id: "s5605", es: "Nos conocemos desde hace años.",         de: "Wir kennen uns seit Jahren." }
  ],
  grammatik: {
    id: "g56", titel: "Gegenseitigkeit und das se der Unabsichtlichkeit",
    erklaerung: `
      <p>Zwei weitere Gesichter des vielseitigen <em>se</em> — beide sehr alltäglich.</p>
      <p><strong>1. Gegenseitige Handlungen</strong> („einander"). Dafür braucht das Spanische
      kein eigenes Wort, es nutzt die Mehrzahl-Reflexivpronomen:</p>
      <table>
        <tr><td><em>nos</em></td><td><em>Nos vemos mañana.</em></td><td>Wir sehen uns morgen.</td></tr>
        <tr><td><em>os</em></td><td><em>¿Os conocéis?</em></td><td>Kennt ihr euch?</td></tr>
        <tr><td><em>se</em></td><td><em>Se ayudan.</em></td><td>Sie helfen einander.</td></tr>
      </table>
      <p>Zur Verdeutlichung kann man <em>mutuamente</em> oder <em>el uno al otro</em>
      ergänzen: <em>Se ayudan <strong>mutuamente</strong>.</em></p>
      <p><strong>2. Das <em>se</em> der Unabsichtlichkeit</strong> — eine sehr spanische
      Konstruktion. Sie sagt: Es ist passiert, ich kann nichts dafür.</p>
      <div class="merke"><strong>Bauplan:</strong> <em>se</em> + indirektes Pronomen +
      Verb (richtet sich nach der Sache!)<br>
      <em><strong>Se me</strong> rompió el vaso.</em><br>
      Wörtlich: „Das Glas zerbrach sich mir." — Mir ist das Glas kaputtgegangen.</div>
      <table>
        <tr><th>ich sage die Schuld ein</th><th>es ist einfach passiert</th></tr>
        <tr><td><em>Rompí el vaso.</em><br>(Ich zerbrach das Glas.)</td>
            <td><em>Se me rompió el vaso.</em><br>(Mir ging das Glas kaputt.)</td></tr>
        <tr><td><em>Olvidé las llaves.</em></td><td><em>Se me olvidaron las llaves.</em></td></tr>
        <tr><td><em>Perdí el móvil.</em></td><td><em>Se me perdió el móvil.</em></td></tr>
      </table>
      <p><strong>Beachte:</strong> Das Verb richtet sich nach der Sache, nicht nach der Person:<br>
      <em>Se me <strong>olvidó</strong> la cita.</em> (eine Sache)<br>
      <em>Se me <strong>olvidaron</strong> las llaves.</em> (mehrere)</p>
      <p><strong>Typische Verben:</strong> <em>olvidar, romper, perder, caer, quemar,
      acabar, ocurrir</em>.<br>
      <em>Se me ocurrió una idea.</em> — Mir kam eine Idee.</p>`,
    uebungen: [
      { id: "g5601", satz: "___ vemos mañana. (wir uns)", loesung: "Nos", tipps: ["Nos", "Se", "Os"], hinweis: "nosotros", de: "Wir sehen uns morgen." },
      { id: "g5602", satz: "Ellos ___ ayudan mutuamente.", loesung: "se", tipps: ["se", "nos", "os"], hinweis: "ellos", de: "Sie helfen einander." },
      { id: "g5603", satz: "Se ___ olvidó llamarte. (mir)", loesung: "me", tipps: ["me", "te", "le"], hinweis: "mir", de: "Ich habe vergessen, dich anzurufen." },
      { id: "g5604", satz: "Se me ___ (romper) el móvil ayer.", loesung: "rompió", tipps: ["rompió", "rompieron", "rompí"], hinweis: "el móvil = Einzahl", de: "Mir ging gestern das Handy kaputt." },
      { id: "g5605", satz: "Se me ___ (olvidar) las llaves.", loesung: "olvidaron", tipps: ["olvidaron", "olvidó", "olvidé"], hinweis: "las llaves = Mehrzahl", de: "Ich habe die Schlüssel vergessen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 57, niveau: "B1", thema: "Diskutieren und Argumentieren",
  vokabeln: [
    { id: "v5701", es: "el argumento",   de: "das Argument",     wortart: "Substantiv", beispiel: "Es un argumento sólido.", beispielDe: "Das ist ein stichhaltiges Argument." },
    { id: "v5702", es: "matizar",        de: "differenzieren",   wortart: "Verb", beispiel: "Habría que matizar eso.", beispielDe: "Das müsste man differenzieren." },
    { id: "v5703", es: "rebatir",        de: "widerlegen",       wortart: "Verb", beispiel: "Rebatió todos mis puntos.", beispielDe: "Er widerlegte alle meine Punkte." },
    { id: "v5704", es: "la postura",     de: "die Haltung",      wortart: "Substantiv", beispiel: "Entiendo tu postura.", beispielDe: "Ich verstehe deine Haltung." },
    { id: "v5705", es: "coincidir",      de: "übereinstimmen",   wortart: "Verb", beispiel: "Coincido contigo en eso.", beispielDe: "Darin stimme ich mit dir überein." },
    { id: "v5706", es: "la objeción",    de: "der Einwand",      wortart: "Substantiv", beispiel: "Tengo una objeción.", beispielDe: "Ich habe einen Einwand." },
    { id: "v5707", es: "plantear",       de: "aufwerfen",        wortart: "Verb", beispiel: "Planteó una buena pregunta.", beispielDe: "Er warf eine gute Frage auf." },
    { id: "v5708", es: "el matiz",       de: "die Nuance",       wortart: "Substantiv", beispiel: "Hay un matiz importante.", beispielDe: "Es gibt eine wichtige Nuance." },
    { id: "v5709", es: "por su parte",   de: "seinerseits",      wortart: "Adverb", beispiel: "Ella, por su parte, no dijo nada.", beispielDe: "Sie ihrerseits sagte nichts." },
    { id: "v5710", es: "en definitiva",  de: "letztlich",        wortart: "Adverb", beispiel: "En definitiva, hay que decidir.", beispielDe: "Letztlich muss man entscheiden." }
  ],
  saetze: [
    { id: "s5701", es: "Estoy de acuerdo hasta cierto punto.",   de: "Ich stimme bis zu einem gewissen Punkt zu." },
    { id: "s5702", es: "Entiendo tu punto, pero no lo comparto.", de: "Ich verstehe deinen Punkt, teile ihn aber nicht." },
    { id: "s5703", es: "Habría que tener en cuenta otros factores.", de: "Man müsste andere Faktoren berücksichtigen." },
    { id: "s5704", es: "Depende de cómo se mire.",               de: "Das hängt davon ab, wie man es betrachtet." },
    { id: "s5705", es: "En mi opinión, deberíamos esperar.",     de: "Meiner Meinung nach sollten wir warten." }
  ],
  grammatik: {
    id: "g57", titel: "Höflich widersprechen und abwägen",
    erklaerung: `
      <p>Auf B1 geht es nicht mehr nur darum, verstanden zu werden, sondern
      <strong>angemessen</strong> zu formulieren. Diese Bausteine machen den Unterschied.</p>
      <p><strong>Zustimmen — abgestuft:</strong></p>
      <ul>
        <li><em>Estoy totalmente de acuerdo.</em> — Ich stimme völlig zu.</li>
        <li><em>Tienes razón.</em> — Du hast recht.</li>
        <li><em>Coincido contigo.</em> — Ich stimme mit dir überein.</li>
        <li><em>Hasta cierto punto, sí.</em> — Bis zu einem gewissen Punkt, ja.</li>
      </ul>
      <p><strong>Widersprechen — ohne unhöflich zu sein.</strong> Der spanische Weg ist,
      erst zuzustimmen und dann einzuschränken:</p>
      <table>
        <tr><td><em>Entiendo tu punto, <strong>pero</strong>…</em></td><td>Ich verstehe dich, aber…</td></tr>
        <tr><td><em>Puede ser, <strong>aunque</strong>…</em></td><td>Kann sein, obwohl…</td></tr>
        <tr><td><em>No estoy del todo de acuerdo.</em></td><td>Ich stimme nicht ganz zu.</td></tr>
        <tr><td><em>Yo lo veo de otra manera.</em></td><td>Ich sehe das anders.</td></tr>
        <tr><td><em>Habría que matizar eso.</em></td><td>Das müsste man differenzieren.</td></tr>
      </table>
      <div class="merke"><strong>Das Condicional macht höflich.</strong> Vergleiche:<br>
      <em>Hay que esperar.</em> (Man muss warten. — bestimmt)<br>
      <em><strong>Habría que</strong> esperar.</em> (Man müsste warten. — vorsichtig)<br>
      <em><strong>Deberíamos</strong> esperar.</em> (Wir sollten warten.)<br>
      <em><strong>Yo diría que</strong> es mejor esperar.</em> (Ich würde sagen…)</div>
      <p><strong>Abwägen und einschränken:</strong></p>
      <ul>
        <li><em>Depende de…</em> — Das hängt ab von…</li>
        <li><em>Por un lado… por otro lado…</em> — Einerseits… andererseits…</li>
        <li><em>Hay que tener en cuenta que…</em> — Man muss bedenken, dass…</li>
        <li><em>Todo depende de cómo se mire.</em> — Das ist Ansichtssache.</li>
        <li><em>En cierto modo…</em> — In gewisser Weise…</li>
      </ul>`,
    uebungen: [
      { id: "g5701", satz: "___ que esperar un poco. (man müsste)", loesung: "Habría", tipps: ["Habría", "Hay", "Habrá"], hinweis: "höflich = Condicional", de: "Man müsste ein wenig warten." },
      { id: "g5702", satz: "___ (deber, nosotros) pensarlo mejor.", loesung: "Deberíamos", tipps: ["Deberíamos", "Debemos", "Debimos"], hinweis: "wir sollten", de: "Wir sollten besser darüber nachdenken." },
      { id: "g5703", satz: "Entiendo tu punto, ___ no lo comparto.", loesung: "pero", tipps: ["pero", "porque", "así que"], hinweis: "Gegensatz", de: "Ich verstehe dich, teile es aber nicht." },
      { id: "g5704", satz: "Yo ___ (decir) que es mejor esperar.", loesung: "diría", tipps: ["diría", "digo", "dije"], hinweis: "ich würde sagen", de: "Ich würde sagen, es ist besser zu warten." },
      { id: "g5705", satz: "Hay que tener ___ cuenta otros factores.", loesung: "en", tipps: ["en", "a", "de"], hinweis: "feste Wendung", de: "Man muss andere Faktoren berücksichtigen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 58, niveau: "B1", thema: "Redewendungen im Alltag",
  vokabeln: [
    { id: "v5801", es: "dar igual",      de: "egal sein",        wortart: "Verb", beispiel: "Me da igual, decide tú.", beispielDe: "Mir ist es egal, entscheide du." },
    { id: "v5802", es: "hacer caso",     de: "beachten",         wortart: "Verb", beispiel: "No le hagas caso.", beispielDe: "Beachte ihn nicht." },
    { id: "v5803", es: "tener ganas de", de: "Lust haben auf",   wortart: "Verb", beispiel: "Tengo ganas de verte.", beispielDe: "Ich habe Lust, dich zu sehen." },
    { id: "v5804", es: "estar harto de", de: "satt haben",       wortart: "Verb", beispiel: "Estoy harto de esperar.", beispielDe: "Ich habe das Warten satt." },
    { id: "v5805", es: "meter la pata",  de: "ins Fettnäpfchen treten", wortart: "Verb", beispiel: "Metí la pata otra vez.", beispielDe: "Ich bin wieder ins Fettnäpfchen getreten." },
    { id: "v5806", es: "costar trabajo", de: "schwerfallen",     wortart: "Verb", beispiel: "Me cuesta trabajo levantarme.", beispielDe: "Es fällt mir schwer aufzustehen." },
    { id: "v5807", es: "dar la lata",    de: "auf die Nerven gehen", wortart: "Verb", beispiel: "No me des la lata.", beispielDe: "Geh mir nicht auf die Nerven." },
    { id: "v5808", es: "estar en las nubes", de: "geistig abwesend sein", wortart: "Verb", beispiel: "Hoy estás en las nubes.", beispielDe: "Du bist heute völlig abwesend." },
    { id: "v5809", es: "ponerse las pilas", de: "sich am Riemen reißen", wortart: "Verb", beispiel: "Tengo que ponerme las pilas.", beispielDe: "Ich muss mich am Riemen reißen." },
    { id: "v5810", es: "echar una mano", de: "zur Hand gehen",   wortart: "Verb", beispiel: "¿Me echas una mano?", beispielDe: "Gehst du mir zur Hand?" }
  ],
  saetze: [
    { id: "s5801", es: "Me da igual, decide tú.",                de: "Mir ist es egal, entscheide du." },
    { id: "s5802", es: "Tengo muchas ganas de verte.",           de: "Ich freue mich sehr darauf, dich zu sehen." },
    { id: "s5803", es: "Me cuesta mucho madrugar.",              de: "Es fällt mir sehr schwer, früh aufzustehen." },
    { id: "s5804", es: "¿Me echas una mano con esto?",           de: "Gehst du mir hiermit zur Hand?" },
    { id: "s5805", es: "Ponte las pilas, que queda poco tiempo.", de: "Reiß dich am Riemen, es bleibt wenig Zeit." }
  ],
  grammatik: {
    id: "g58", titel: "Verben, die anders funktionieren",
    erklaerung: `
      <p>Eine Gruppe sehr häufiger Verben folgt dem <em>gustar</em>-Muster (Tag 9):
      Die Person steht im Dativ, das Verb richtet sich nach der Sache. Wer sie kennt,
      klingt sofort viel idiomatischer.</p>
      <table>
        <tr><th>Ausdruck</th><th>Bedeutung</th><th>Beispiel</th></tr>
        <tr><td><em>dar igual</em></td><td>egal sein</td><td>Me da igual.</td></tr>
        <tr><td><em>costar</em></td><td>schwerfallen</td><td>Me cuesta madrugar.</td></tr>
        <tr><td><em>hacer falta</em></td><td>nötig sein</td><td>Me hace falta ayuda.</td></tr>
        <tr><td><em>quedar</em></td><td>übrig bleiben / stehen</td><td>Me quedan dos días.</td></tr>
        <tr><td><em>sobrar</em></td><td>übrig sein</td><td>Nos sobra comida.</td></tr>
        <tr><td><em>apetecer</em></td><td>Lust haben</td><td>¿Te apetece un café?</td></tr>
        <tr><td><em>convenir</em></td><td>ratsam sein</td><td>Te conviene descansar.</td></tr>
        <tr><td><em>tocar</em></td><td>an der Reihe sein</td><td>Me toca a mí.</td></tr>
      </table>
      <p><strong>Feste Wendungen mit <em>tener</em></strong> — hier steht kein Artikel:</p>
      <ul>
        <li><em>tener ganas de</em> (Lust haben), <em>tener prisa</em> (es eilig haben)</li>
        <li><em>tener razón</em> (recht haben), <em>tener cuidado</em> (aufpassen)</li>
        <li><em>tener suerte</em> (Glück haben), <em>tener miedo</em> (Angst haben)</li>
        <li><em>tener sentido</em> (Sinn ergeben), <em>tener en cuenta</em> (berücksichtigen)</li>
      </ul>
      <p><strong>Feste Wendungen mit <em>dar</em>, <em>hacer</em> und <em>echar</em>:</strong></p>
      <ul>
        <li><em>dar un paseo</em> (spazieren gehen), <em>dar las gracias</em> (danken),
            <em>dar miedo</em> (Angst machen)</li>
        <li><em>hacer caso</em> (beachten), <em>hacer falta</em> (fehlen),
            <em>hacer daño</em> (wehtun)</li>
        <li><em>echar de menos</em> (vermissen), <em>echar una mano</em> (helfen)</li>
      </ul>
      <div class="merke"><strong>Warum das wichtig ist:</strong> Diese Wendungen kann man
      nicht Wort für Wort aus dem Deutschen übersetzen. Sie einzeln zu lernen bringt mehr
      als zwanzig neue Einzelvokabeln — sie kommen in jedem Gespräch vor.</div>`,
    uebungen: [
      { id: "g5801", satz: "Me ___ igual, decide tú.", loesung: "da", tipps: ["da", "dan", "doy"], hinweis: "unpersönlich", de: "Mir ist es egal, entscheide du." },
      { id: "g5802", satz: "Me ___ (costar) mucho madrugar.", loesung: "cuesta", tipps: ["cuesta", "cuestan", "cuesto"], hinweis: "madrugar = eine Sache", de: "Es fällt mir schwer, früh aufzustehen." },
      { id: "g5803", satz: "Me ___ (quedar) dos días de vacaciones.", loesung: "quedan", tipps: ["quedan", "queda", "quedo"], hinweis: "dos días = Mehrzahl", de: "Mir bleiben zwei Urlaubstage." },
      { id: "g5804", satz: "Tengo ___ de verte. (Lust)", loesung: "ganas", tipps: ["ganas", "gana", "ganos"], hinweis: "feste Wendung", de: "Ich habe Lust, dich zu sehen." },
      { id: "g5805", satz: "¿Me ___ (echar, tú) una mano?", loesung: "echas", tipps: ["echas", "echa", "echo"], hinweis: "tú-Form", de: "Gehst du mir zur Hand?" }
    ]
  }
});

LEKTIONEN.push({
  tag: 59, niveau: "B1", thema: "Über sich selbst sprechen",
  vokabeln: [
    { id: "v5901", es: "la trayectoria", de: "der Werdegang",    wortart: "Substantiv", beispiel: "Tiene una trayectoria interesante.", beispielDe: "Er hat einen interessanten Werdegang." },
    { id: "v5902", es: "desenvolverse",  de: "zurechtkommen",    wortart: "Verb", beispiel: "Me desenvuelvo bien en español.", beispielDe: "Ich komme auf Spanisch gut zurecht." },
    { id: "v5903", es: "la soltura",     de: "die Gewandtheit",  wortart: "Substantiv", beispiel: "Habla con soltura.", beispielDe: "Er spricht gewandt." },
    { id: "v5904", es: "el punto fuerte", de: "die Stärke",      wortart: "Substantiv", beispiel: "Mi punto fuerte es la paciencia.", beispielDe: "Meine Stärke ist Geduld." },
    { id: "v5905", es: "mejorable",      de: "verbesserungsfähig", wortart: "Adjektiv", beispiel: "Mi pronunciación es mejorable.", beispielDe: "Meine Aussprache ist verbesserungsfähig." },
    { id: "v5906", es: "el enfoque",     de: "die Herangehensweise", wortart: "Substantiv", beispiel: "Cambié de enfoque.", beispielDe: "Ich änderte meine Herangehensweise." },
    { id: "v5907", es: "la perseverancia", de: "die Ausdauer",   wortart: "Substantiv", beispiel: "La perseverancia da frutos.", beispielDe: "Ausdauer trägt Früchte." },
    { id: "v5908", es: "acostumbrarse a", de: "sich gewöhnen an", wortart: "Verb", beispiel: "Me he acostumbrado al ritmo.", beispielDe: "Ich habe mich an den Rhythmus gewöhnt." },
    { id: "v5909", es: "el desafío",     de: "die Herausforderung", wortart: "Substantiv", beispiel: "Fue un desafío personal.", beispielDe: "Das war eine persönliche Herausforderung." },
    { id: "v5910", es: "sacar partido",  de: "Nutzen ziehen",    wortart: "Verb", beispiel: "Hay que sacar partido del tiempo.", beispielDe: "Man muss die Zeit gut nutzen." }
  ],
  saetze: [
    { id: "s5901", es: "Llevo dos meses estudiando todos los días.", de: "Ich lerne seit zwei Monaten jeden Tag." },
    { id: "s5902", es: "Antes me costaba, ahora me sale solo.",  de: "Früher fiel es mir schwer, jetzt kommt es von allein." },
    { id: "s5903", es: "Me he acostumbrado a leer en español.",  de: "Ich habe mich daran gewöhnt, auf Spanisch zu lesen." },
    { id: "s5904", es: "Lo que más me cuesta es el subjuntivo.", de: "Was mir am schwersten fällt, ist der Subjuntivo." },
    { id: "s5905", es: "Espero seguir mejorando poco a poco.",   de: "Ich hoffe, mich weiter Schritt für Schritt zu verbessern." }
  ],
  grammatik: {
    id: "g59", titel: "Über Entwicklung sprechen: werden auf Spanisch",
    erklaerung: `
      <p>Das deutsche „werden" hat im Spanischen kein einzelnes Gegenstück. Stattdessen
      gibt es mehrere Verben — je nachdem, <strong>wie</strong> die Veränderung abläuft.</p>
      <table>
        <tr><th>Verb</th><th>Art der Veränderung</th><th>Beispiel</th></tr>
        <tr><td><em>ponerse</em></td><td>kurz, spontan (Gefühl, Farbe)</td>
            <td><em>Se puso rojo.</em> (Er wurde rot.)</td></tr>
        <tr><td><em>volverse</em></td><td>dauerhaft, unfreiwillig (Charakter)</td>
            <td><em>Se volvió muy serio.</em> (Er wurde sehr ernst.)</td></tr>
        <tr><td><em>hacerse</em></td><td>durch eigenes Zutun (Beruf, Überzeugung)</td>
            <td><em>Se hizo médico.</em> (Er wurde Arzt.)</td></tr>
        <tr><td><em>llegar a ser</em></td><td>nach langem Weg, Aufstieg</td>
            <td><em>Llegó a ser director.</em> (Er brachte es zum Direktor.)</td></tr>
        <tr><td><em>quedarse</em></td><td>Zustand als Ergebnis, oft Verlust</td>
            <td><em>Se quedó sordo.</em> (Er wurde taub.)</td></tr>
        <tr><td><em>convertirse en</em></td><td>vollständiger Wandel</td>
            <td><em>Se convirtió en un problema.</em></td></tr>
      </table>
      <div class="merke"><strong>Die schnelle Orientierung:</strong><br>
      Gefühl für einen Moment → <em>ponerse</em><br>
      Beruf oder Überzeugung, selbst gewählt → <em>hacerse</em><br>
      Charakter, ohne eigenes Zutun → <em>volverse</em><br>
      Etwas verlieren oder zurückbleiben → <em>quedarse</em></div>
      <p><strong>Über den eigenen Fortschritt sprechen</strong> — nützliche Bausteine:</p>
      <ul>
        <li><em>Llevo dos meses estudiando.</em> — Ich lerne seit zwei Monaten.</li>
        <li><em>Cada vez me sale mejor.</em> — Es gelingt mir immer besser.</li>
        <li><em>Me cuesta menos que antes.</em> — Es fällt mir leichter als früher.</li>
        <li><em>Me he acostumbrado a…</em> — Ich habe mich gewöhnt an…</li>
        <li><em>Todavía me falta mucho.</em> — Mir fehlt noch viel.</li>
        <li><em>Voy mejorando poco a poco.</em> — Ich werde allmählich besser.</li>
      </ul>`,
    uebungen: [
      { id: "g5901", satz: "Se ___ rojo de vergüenza. (spontan)", loesung: "puso", tipps: ["puso", "volvió", "hizo"], hinweis: "kurzes Gefühl", de: "Er wurde rot vor Scham." },
      { id: "g5902", satz: "Se ___ médico después de estudiar.", loesung: "hizo", tipps: ["hizo", "puso", "quedó"], hinweis: "Beruf, selbst gewählt", de: "Er wurde Arzt, nachdem er studiert hatte." },
      { id: "g5903", satz: "Con los años se ___ más serio.", loesung: "volvió", tipps: ["volvió", "puso", "hizo"], hinweis: "Charakter, dauerhaft", de: "Mit den Jahren wurde er ernster." },
      { id: "g5904", satz: "___ dos meses estudiando cada día.", loesung: "Llevo", tipps: ["Llevo", "Hace", "Estoy"], hinweis: "seit … tun", de: "Ich lerne seit zwei Monaten täglich." },
      { id: "g5905", satz: "Cada vez me ___ (salir) mejor.", loesung: "sale", tipps: ["sale", "salgo", "salen"], hinweis: "es gelingt mir", de: "Es gelingt mir immer besser." }
    ]
  }
});

LEKTIONEN.push({
  tag: 60, niveau: "B1", thema: "Abschluss: B1 erreicht",
  vokabeln: [
    { id: "v6001", es: "el hito",        de: "der Meilenstein",  wortart: "Substantiv", beispiel: "Es un hito importante.", beispielDe: "Das ist ein wichtiger Meilenstein." },
    { id: "v6002", es: "consolidar",     de: "festigen",         wortart: "Verb", beispiel: "Ahora toca consolidar lo aprendido.", beispielDe: "Jetzt gilt es, das Gelernte zu festigen." },
    { id: "v6003", es: "el repaso",      de: "die Wiederholung", wortart: "Substantiv", beispiel: "El repaso es la clave.", beispielDe: "Wiederholung ist der Schlüssel." },
    { id: "v6004", es: "la constancia",  de: "die Beständigkeit", wortart: "Substantiv", beispiel: "La constancia vence al talento.", beispielDe: "Beständigkeit schlägt Talent." },
    { id: "v6005", es: "profundizar",    de: "vertiefen",        wortart: "Verb", beispiel: "Quiero profundizar en la gramática.", beispielDe: "Ich will die Grammatik vertiefen." },
    { id: "v6006", es: "el umbral",      de: "die Schwelle",     wortart: "Substantiv", beispiel: "Has cruzado un umbral.", beispielDe: "Du hast eine Schwelle überschritten." },
    { id: "v6007", es: "afianzar",       de: "absichern",        wortart: "Verb", beispiel: "Hay que afianzar la base.", beispielDe: "Man muss die Grundlage absichern." },
    { id: "v6008", es: "el recorrido",   de: "der zurückgelegte Weg", wortart: "Substantiv", beispiel: "Mira el recorrido que has hecho.", beispielDe: "Schau, welchen Weg du zurückgelegt hast." },
    { id: "v6009", es: "enorgullecerse", de: "stolz sein",       wortart: "Verb", beispiel: "Puedes enorgullecerte de esto.", beispielDe: "Darauf kannst du stolz sein." },
    { id: "v6010", es: "seguir adelante", de: "weitermachen",    wortart: "Verb", beispiel: "Lo importante es seguir adelante.", beispielDe: "Wichtig ist, weiterzumachen." }
  ],
  saetze: [
    { id: "s6001", es: "He aprendido más de lo que esperaba.",   de: "Ich habe mehr gelernt, als ich erwartet hatte." },
    { id: "s6002", es: "Si sigo así, en un año hablaré con soltura.", de: "Wenn ich so weitermache, spreche ich in einem Jahr flüssig." },
    { id: "s6003", es: "Ojalá pueda usarlo pronto en un viaje.",  de: "Hoffentlich kann ich es bald auf einer Reise nutzen." },
    { id: "s6004", es: "Lo mejor ha sido la constancia diaria.",  de: "Das Beste war die tägliche Beständigkeit." },
    { id: "s6005", es: "Ahora toca repasar y no perder el ritmo.", de: "Jetzt heißt es wiederholen und den Rhythmus nicht verlieren." }
  ],
  grammatik: {
    id: "g60", titel: "B1 im Überblick — und wie es weitergeht",
    erklaerung: `
      <p>Sechzig Tage, rund 600 Vokabeln, 300 Sätze und 60 Grammatikthemen. Das ist die
      Bilanz.</p>
      <p><strong>Was du jetzt kannst:</strong></p>
      <table>
        <tr><th>Bereich</th><th>Beherrscht</th></tr>
        <tr><td>Zeiten</td><td>Presente, Perfecto, Indefinido, Imperfecto,
            Pluscuamperfecto, Futuro, Condicional</td></tr>
        <tr><td>Modi</td><td>Indikativ, Imperativ (bejaht und verneint),
            Subjuntivo (Presente und Imperfecto)</td></tr>
        <tr><td>Satzbau</td><td>Relativsätze, indirekte Fragen, indirekte Rede,
            alle drei Bedingungssatz-Typen</td></tr>
        <tr><td>Pronomen</td><td>direkt, indirekt, kombiniert, reflexiv,
            das vielseitige <em>se</em></td></tr>
        <tr><td>Feinheiten</td><td>ser/estar, por/para, hay/estar,
            Indefinido/Imperfecto, Indikativ/Subjuntivo</td></tr>
      </table>
      <div class="merke"><strong>Das reicht für B1:</strong> Du kannst über Vergangenes
      erzählen, Pläne schmieden, Meinungen begründen, höflich widersprechen, Wünsche
      äußern und über Irreales sprechen. Damit kommst du auf einer Reise durch Spanien
      oder Lateinamerika überall zurecht.</div>
      <p><strong>Wie es ab morgen weitergeht:</strong> Die App bleibt nützlich — jeden Tag
      wartet jetzt die Wiederholung. Genau die entscheidet darüber, ob das Gelernte in
      einem Jahr noch da ist. Das Wiederholsystem sorgt dafür, dass du nur die Wörter
      siehst, die du gerade zu vergessen drohst.</p>
      <p><strong>Drei Empfehlungen für den Weg zu B2:</strong></p>
      <ol>
        <li><strong>Lesen.</strong> Nachrichten auf leichtem Spanisch, dann kurze Romane.
            Jedes unbekannte Wort im Zusammenhang bleibt besser haften als jede Vokabelliste.</li>
        <li><strong>Hören.</strong> Podcasts und Serien mit spanischen Untertiteln —
            nicht mit deutschen. Anfangs verstehst du 40 Prozent, nach drei Monaten 80.</li>
        <li><strong>Sprechen.</strong> Der einzige Weg, aus passivem Wissen aktives Können
            zu machen. Ein Sprachtandem einmal pro Woche bringt mehr als jede App.</li>
      </ol>
      <p style="text-align:center;font-size:1.2rem;margin-top:1.5rem">
      <strong>¡Enhorabuena! Has llegado al final.</strong><br>
      <span style="font-size:.95rem;color:var(--text-leise)">Glückwunsch — du bist am Ziel.
      Und jetzt fängt das Spanische erst richtig an.</span></p>`,
    uebungen: [
      { id: "g6001", satz: "He aprendido más ___ lo que esperaba.", loesung: "de", tipps: ["de", "que", "como"], hinweis: "más de lo que", de: "Ich habe mehr gelernt, als ich erwartete." },
      { id: "g6002", satz: "Si ___ (seguir, yo) así, mejoraré mucho.", loesung: "sigo", tipps: ["sigo", "siga", "seguiría"], hinweis: "realer Bedingungssatz", de: "Wenn ich so weitermache, werde ich viel besser." },
      { id: "g6003", satz: "Ojalá ___ (poder, yo) usarlo pronto.", loesung: "pueda", tipps: ["pueda", "puedo", "podría"], hinweis: "ojalá", de: "Hoffentlich kann ich es bald nutzen." },
      { id: "g6004", satz: "___ mejor ha sido la constancia.", loesung: "Lo", tipps: ["Lo", "El", "La"], hinweis: "neutrales lo", de: "Das Beste war die Beständigkeit." },
      { id: "g6005", satz: "Me alegro de que ___ (haber, tú) llegado hasta aquí.", loesung: "hayas", tipps: ["hayas", "has", "habías"], hinweis: "Gefühl → Subjuntivo", de: "Ich freue mich, dass du es bis hierher geschafft hast." }
    ]
  }
});
