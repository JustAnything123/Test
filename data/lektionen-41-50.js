/* Tag 41–50 · Niveau B1 · Subjuntivo im Einsatz */

LEKTIONEN.push({
  tag: 41, niveau: "B1", thema: "Bedingungen und Zeitpunkte",
  vokabeln: [
    { id: "v4101", es: "en cuanto",      de: "sobald",           wortart: "Konjunktion", beispiel: "En cuanto llegue, te aviso.", beispielDe: "Sobald er kommt, sage ich dir Bescheid." },
    { id: "v4102", es: "hasta que",      de: "bis",              wortart: "Konjunktion", beispiel: "Espera hasta que termine.", beispielDe: "Warte, bis ich fertig bin." },
    { id: "v4103", es: "mientras",       de: "solange",          wortart: "Konjunktion", beispiel: "Mientras haya luz, seguimos.", beispielDe: "Solange es hell ist, machen wir weiter." },
    { id: "v4104", es: "el plazo",       de: "die Frist",        wortart: "Substantiv", beispiel: "Cuando venza el plazo, avisamos.", beispielDe: "Wenn die Frist abläuft, geben wir Bescheid." },
    { id: "v4105", es: "avisar",         de: "benachrichtigen",  wortart: "Verb", beispiel: "Avísame cuando llegues.", beispielDe: "Sag mir Bescheid, wenn du ankommst." },
    { id: "v4106", es: "una vez que",    de: "sobald einmal",    wortart: "Konjunktion", beispiel: "Una vez que lo sepas, llámame.", beispielDe: "Sobald du es weißt, ruf mich an." },
    { id: "v4107", es: "terminar",       de: "beenden",          wortart: "Verb", beispiel: "Cuando termine, salgo.", beispielDe: "Wenn ich fertig bin, gehe ich." },
    { id: "v4108", es: "el momento",     de: "der Zeitpunkt",    wortart: "Substantiv", beispiel: "Llegó el momento de decidir.", beispielDe: "Der Moment zu entscheiden ist gekommen." },
    { id: "v4109", es: "esperar a que",  de: "warten, bis",      wortart: "Verb", beispiel: "Espero a que vuelvas.", beispielDe: "Ich warte, bis du zurückkommst." },
    { id: "v4110", es: "siempre que",    de: "immer wenn",       wortart: "Konjunktion", beispiel: "Siempre que puedo, salgo a andar.", beispielDe: "Immer wenn ich kann, gehe ich spazieren." }
  ],
  saetze: [
    { id: "s4101", es: "Cuando llegues, llámame.",              de: "Wenn du ankommst, ruf mich an." },
    { id: "s4102", es: "Cuando llego a casa, siempre cocino.",  de: "Wenn ich nach Hause komme, koche ich immer." },
    { id: "s4103", es: "En cuanto termine, te aviso.",          de: "Sobald ich fertig bin, sage ich dir Bescheid." },
    { id: "s4104", es: "Espera hasta que deje de llover.",      de: "Warte, bis es aufhört zu regnen." },
    { id: "s4105", es: "Mientras estudiaba, escuchaba música.", de: "Während ich lernte, hörte ich Musik." }
  ],
  grammatik: {
    id: "g41", titel: "Subjuntivo nach Zeitkonjunktionen",
    erklaerung: `
      <p>Nach Wörtern wie <em>cuando</em> steht mal der Indikativ, mal der Subjuntivo.
      Die Regel ist erfreulich klar.</p>
      <div class="merke"><strong>Der Zeitbezug entscheidet:</strong><br>
      <strong>Zukunft</strong> (noch nicht passiert) → <strong>Subjuntivo</strong><br>
      <em>Cuando <strong>llegues</strong>, llámame.</em> (Du bist noch nicht da.)<br>
      <strong>Gewohnheit oder Vergangenheit</strong> (schon Realität) → <strong>Indikativ</strong><br>
      <em>Cuando <strong>llego</strong> a casa, cocino.</em> (Das mache ich immer.)<br>
      <em>Cuando <strong>llegué</strong>, cociné.</em> (Ist passiert.)</div>
      <p>Das ist der große Unterschied zum Deutschen: Dort heißt es immer „wenn du ankommst",
      egal ob Zukunft oder Gewohnheit.</p>
      <p><strong>Diese Konjunktionen folgen der Regel:</strong></p>
      <table>
        <tr><th>Wort</th><th>Bedeutung</th></tr>
        <tr><td><em>cuando</em></td><td>wenn, als</td></tr>
        <tr><td><em>en cuanto</em></td><td>sobald</td></tr>
        <tr><td><em>hasta que</em></td><td>bis</td></tr>
        <tr><td><em>mientras</em></td><td>solange, während</td></tr>
        <tr><td><em>después de que</em></td><td>nachdem</td></tr>
        <tr><td><em>siempre que</em></td><td>immer wenn</td></tr>
        <tr><td><em>una vez que</em></td><td>sobald</td></tr>
        <tr><td><em>tan pronto como</em></td><td>sobald</td></tr>
      </table>
      <div class="merke"><strong>Die eine Ausnahme:</strong> <em>antes de que</em> (bevor)
      steht <strong>immer</strong> im Subjuntivo — auch bei Vergangenheit. Logisch: Was
      „davor" liegt, war zu dem Zeitpunkt noch nicht geschehen.<br>
      <em>Salí antes de que <strong>llegara</strong>.</em></div>
      <p><strong>Praktischer Test:</strong> Kannst du „dann irgendwann" hinzudenken?
      Dann Subjuntivo. Bedeutet es „jedes Mal, wenn"? Dann Indikativ.</p>`,
    uebungen: [
      { id: "g4101", satz: "Cuando ___ (llegar, tú), llámame.", loesung: "llegues", tipps: ["llegues", "llegas", "llegaste"], hinweis: "Zukunft", de: "Wenn du ankommst, ruf mich an." },
      { id: "g4102", satz: "Cuando ___ (llegar, yo) a casa, siempre cocino.", loesung: "llego", tipps: ["llego", "llegue", "llegara"], hinweis: "Gewohnheit", de: "Wenn ich nach Hause komme, koche ich immer." },
      { id: "g4103", satz: "En cuanto ___ (terminar, yo), te aviso.", loesung: "termine", tipps: ["termine", "termino", "terminé"], hinweis: "Zukunft", de: "Sobald ich fertig bin, sage ich Bescheid." },
      { id: "g4104", satz: "Espera hasta que ___ (dejar) de llover.", loesung: "deje", tipps: ["deje", "deja", "dejó"], hinweis: "Zukunft", de: "Warte, bis es aufhört zu regnen." },
      { id: "g4105", satz: "Ayer, cuando ___ (salir, yo), llovía.", loesung: "salí", tipps: ["salí", "salga", "saliera"], hinweis: "Vergangenheit", de: "Als ich gestern rausging, regnete es." }
    ]
  }
});

LEKTIONEN.push({
  tag: 42, niveau: "B1", thema: "Absicht und Zweck",
  vokabeln: [
    { id: "v4201", es: "para que",       de: "damit",            wortart: "Konjunktion", beispiel: "Te lo digo para que lo sepas.", beispielDe: "Ich sage es dir, damit du es weißt." },
    { id: "v4202", es: "a fin de que",   de: "damit (förmlich)", wortart: "Konjunktion", beispiel: "A fin de que todos entiendan.", beispielDe: "Damit alle verstehen." },
    { id: "v4203", es: "sin que",        de: "ohne dass",        wortart: "Konjunktion", beispiel: "Salió sin que nadie lo viera.", beispielDe: "Er ging, ohne dass ihn jemand sah." },
    { id: "v4204", es: "a menos que",    de: "es sei denn",      wortart: "Konjunktion", beispiel: "Iré, a menos que llueva.", beispielDe: "Ich gehe, es sei denn, es regnet." },
    { id: "v4205", es: "con tal de que", de: "sofern",           wortart: "Konjunktion", beispiel: "Te ayudo con tal de que estudies.", beispielDe: "Ich helfe dir, sofern du lernst." },
    { id: "v4206", es: "en caso de que", de: "falls",            wortart: "Konjunktion", beispiel: "En caso de que venga, avísame.", beispielDe: "Falls er kommt, sag mir Bescheid." },
    { id: "v4207", es: "el fin",         de: "das Ziel",         wortart: "Substantiv", beispiel: "Con el fin de mejorar.", beispielDe: "Mit dem Ziel, sich zu verbessern." },
    { id: "v4208", es: "lograr",         de: "erreichen",        wortart: "Verb", beispiel: "Logró que lo escucharan.", beispielDe: "Er erreichte, dass man ihm zuhörte." },
    { id: "v4209", es: "evitar",         de: "vermeiden",        wortart: "Verb", beispiel: "Quiero evitar que se enfade.", beispielDe: "Ich will vermeiden, dass er sich ärgert." },
    { id: "v4210", es: "la finalidad",   de: "der Zweck",        wortart: "Substantiv", beispiel: "¿Cuál es la finalidad?", beispielDe: "Was ist der Zweck?" }
  ],
  saetze: [
    { id: "s4201", es: "Te lo explico para que lo entiendas.",   de: "Ich erkläre es dir, damit du es verstehst." },
    { id: "s4202", es: "Estudio para aprobar el examen.",        de: "Ich lerne, um die Prüfung zu bestehen." },
    { id: "s4203", es: "Salió sin que nadie lo viera.",          de: "Er ging, ohne dass ihn jemand sah." },
    { id: "s4204", es: "Iremos, a menos que llueva mucho.",      de: "Wir gehen, es sei denn, es regnet stark." },
    { id: "s4205", es: "Antes de que te vayas, dime una cosa.",  de: "Bevor du gehst, sag mir eine Sache." }
  ],
  grammatik: {
    id: "g42", titel: "Konjunktionen, die immer den Subjuntivo verlangen",
    erklaerung: `
      <p>Eine Handvoll Konjunktionen zieht <strong>ausnahmslos</strong> den Subjuntivo nach
      sich — hier musst du nicht überlegen, ob Zukunft oder Gewohnheit.</p>
      <table>
        <tr><th>Konjunktion</th><th>Deutsch</th><th>Beispiel</th></tr>
        <tr><td><em>para que</em></td><td>damit</td><td>Te lo digo para que lo <em>sepas</em>.</td></tr>
        <tr><td><em>a fin de que</em></td><td>damit</td><td>A fin de que <em>entiendan</em>.</td></tr>
        <tr><td><em>antes de que</em></td><td>bevor</td><td>Antes de que te <em>vayas</em>.</td></tr>
        <tr><td><em>sin que</em></td><td>ohne dass</td><td>Sin que nadie lo <em>vea</em>.</td></tr>
        <tr><td><em>a menos que</em></td><td>es sei denn</td><td>A menos que <em>llueva</em>.</td></tr>
        <tr><td><em>con tal de que</em></td><td>sofern</td><td>Con tal de que <em>estudies</em>.</td></tr>
        <tr><td><em>en caso de que</em></td><td>falls</td><td>En caso de que <em>venga</em>.</td></tr>
        <tr><td><em>para que no</em></td><td>damit nicht</td><td>Para que no se <em>enfade</em>.</td></tr>
      </table>
      <div class="merke"><strong>Warum ausnahmslos?</strong> Alle diese Wörter beschreiben
      etwas, das (noch) nicht Wirklichkeit ist: eine Absicht, eine Bedingung, etwas
      Verhindertes. Genau dafür ist der Subjuntivo da.</div>
      <p><strong>Die Personen-Regel gilt auch hier</strong> (wie an Tag 37): Bei
      <strong>gleicher</strong> Person nimmt man den Infinitiv und lässt das <em>que</em> weg.</p>
      <table>
        <tr><th>gleiche Person → Infinitiv</th><th>zwei Personen → Subjuntivo</th></tr>
        <tr><td><em>Estudio <strong>para</strong> aprobar.</em><br>(ich lerne, ich bestehe)</td>
            <td><em>Te ayudo <strong>para que</strong> apruebes.</em><br>(ich helfe, du bestehst)</td></tr>
        <tr><td><em>Salí <strong>sin</strong> despedirme.</em></td>
            <td><em>Salí <strong>sin que</strong> me vieran.</em></td></tr>
        <tr><td><em><strong>Antes de</strong> salir, cerré.</em></td>
            <td><em><strong>Antes de que</strong> salieras, cerré.</em></td></tr>
      </table>
      <p>Achte auf das Wörtchen <em>que</em>: Es ist das Signal dafür, dass ein neues Subjekt
      kommt — und damit für den Subjuntivo.</p>`,
    uebungen: [
      { id: "g4201", satz: "Te lo digo para que lo ___ (saber, tú).", loesung: "sepas", tipps: ["sepas", "sabes", "saber"], hinweis: "para que → Subjuntivo", de: "Ich sage es dir, damit du es weißt." },
      { id: "g4202", satz: "Estudio para ___ (aprobar, yo).", loesung: "aprobar", tipps: ["aprobar", "apruebe", "apruebo"], hinweis: "gleiche Person", de: "Ich lerne, um zu bestehen." },
      { id: "g4203", satz: "Salió sin que nadie lo ___ (ver).", loesung: "viera", tipps: ["viera", "vio", "ve"], hinweis: "Vergangenheit → viera", de: "Er ging, ohne dass ihn jemand sah." },
      { id: "g4204", satz: "Iré, a menos que ___ (llover).", loesung: "llueva", tipps: ["llueva", "llueve", "lloverá"], hinweis: "a menos que", de: "Ich gehe, es sei denn, es regnet." },
      { id: "g4205", satz: "Antes de que te ___ (ir, tú), hablemos.", loesung: "vayas", tipps: ["vayas", "vas", "irás"], hinweis: "antes de que", de: "Bevor du gehst, lass uns reden." }
    ]
  }
});

LEKTIONEN.push({
  tag: 43, niveau: "B1", thema: "Suchen und Beschreiben",
  vokabeln: [
    { id: "v4301", es: "el requisito",   de: "die Anforderung",  wortart: "Substantiv", beispiel: "Busco a alguien que cumpla los requisitos.", beispielDe: "Ich suche jemanden, der die Anforderungen erfüllt." },
    { id: "v4302", es: "adecuado",       de: "geeignet",         wortart: "Adjektiv", beispiel: "Busco un piso adecuado.", beispielDe: "Ich suche eine geeignete Wohnung." },
    { id: "v4303", es: "el candidato",   de: "der Bewerber",     wortart: "Substantiv", beispiel: "No hay ningún candidato que sirva.", beispielDe: "Es gibt keinen passenden Bewerber." },
    { id: "v4304", es: "servir",         de: "taugen",           wortart: "Verb", beispiel: "Esto no me sirve.", beispielDe: "Das taugt mir nichts." },
    { id: "v4305", es: "disponible",     de: "verfügbar",        wortart: "Adjektiv", beispiel: "¿Hay algo disponible?", beispielDe: "Ist etwas verfügbar?" },
    { id: "v4306", es: "cumplir con",    de: "erfüllen",         wortart: "Verb", beispiel: "Cumple con todos los criterios.", beispielDe: "Er erfüllt alle Kriterien." },
    { id: "v4307", es: "la experiencia", de: "die Erfahrung",    wortart: "Substantiv", beispiel: "Necesito a alguien con experiencia.", beispielDe: "Ich brauche jemanden mit Erfahrung." },
    { id: "v4308", es: "el requisito previo", de: "die Voraussetzung", wortart: "Substantiv", beispiel: "Es un requisito previo.", beispielDe: "Das ist eine Voraussetzung." },
    { id: "v4309", es: "encajar",        de: "passen",           wortart: "Verb", beispiel: "No encaja en el equipo.", beispielDe: "Er passt nicht ins Team." },
    { id: "v4310", es: "la vacante",     de: "die offene Stelle", wortart: "Substantiv", beispiel: "Hay una vacante en la empresa.", beispielDe: "In der Firma ist eine Stelle frei." }
  ],
  saetze: [
    { id: "s4301", es: "Busco un piso que tenga terraza.",       de: "Ich suche eine Wohnung, die eine Terrasse hat." },
    { id: "s4302", es: "Tengo un piso que tiene terraza.",       de: "Ich habe eine Wohnung, die eine Terrasse hat." },
    { id: "s4303", es: "No conozco a nadie que hable ruso.",     de: "Ich kenne niemanden, der Russisch spricht." },
    { id: "s4304", es: "¿Hay alguien que pueda ayudarme?",       de: "Gibt es jemanden, der mir helfen kann?" },
    { id: "s4305", es: "Necesito un libro que explique esto bien.", de: "Ich brauche ein Buch, das das gut erklärt." }
  ],
  grammatik: {
    id: "g43", titel: "Subjuntivo in Relativsätzen",
    erklaerung: `
      <p>Ein sehr eleganter Gebrauch: Der Modus verrät, ob die gesuchte Sache
      <strong>existiert</strong> oder nicht.</p>
      <div class="merke"><strong>Der Unterschied in einem Satzpaar:</strong><br>
      <em>Tengo un piso que <strong>tiene</strong> terraza.</em><br>
      → Indikativ: Die Wohnung existiert, ich kenne sie.<br>
      <em>Busco un piso que <strong>tenga</strong> terraza.</em><br>
      → Subjuntivo: Ich weiß nicht, ob es sie gibt. Sie ist ein Wunschbild.</div>
      <p>Im Deutschen klingen beide Sätze gleich — das Spanische unterscheidet sie klar.</p>
      <table>
        <tr><th>Indikativ — es existiert</th><th>Subjuntivo — unbekannt oder nicht vorhanden</th></tr>
        <tr><td>Conozco a alguien que <em>habla</em> ruso.</td><td>Busco a alguien que <em>hable</em> ruso.</td></tr>
        <tr><td>Aquí hay un bar que <em>abre</em> tarde.</td><td>¿Hay un bar que <em>abra</em> tarde?</td></tr>
        <tr><td>Tengo el libro que <em>explica</em> esto.</td><td>Necesito un libro que <em>explique</em> esto.</td></tr>
      </table>
      <p><strong>Nach einer Verneinung</strong> steht deshalb fast immer der Subjuntivo —
      was es nicht gibt, kann keine feste Eigenschaft haben:</p>
      <ul>
        <li><em>No hay nadie que <strong>sepa</strong> la respuesta.</em></li>
        <li><em>No conozco a nadie que <strong>viva</strong> allí.</em></li>
        <li><em>No hay nada que <strong>pueda</strong> hacer.</em></li>
      </ul>
      <div class="merke"><strong>Der einfache Test:</strong> Frage dich, ob du auf die
      konkrete Sache zeigen könntest. Ja → Indikativ. Nein, du suchst sie erst →
      Subjuntivo.</div>
      <p><strong>Signalverben für den Subjuntivo hier:</strong> <em>buscar, necesitar,
      querer, ¿hay…?, no hay, no conozco</em>.</p>`,
    uebungen: [
      { id: "g4301", satz: "Busco un piso que ___ (tener) terraza.", loesung: "tenga", tipps: ["tenga", "tiene", "tendrá"], hinweis: "noch nicht gefunden", de: "Ich suche eine Wohnung mit Terrasse." },
      { id: "g4302", satz: "Tengo un piso que ___ (tener) terraza.", loesung: "tiene", tipps: ["tiene", "tenga", "tendría"], hinweis: "existiert", de: "Ich habe eine Wohnung mit Terrasse." },
      { id: "g4303", satz: "No conozco a nadie que ___ (hablar) ruso.", loesung: "hable", tipps: ["hable", "habla", "hablará"], hinweis: "Verneinung", de: "Ich kenne niemanden, der Russisch spricht." },
      { id: "g4304", satz: "¿Hay alguien que ___ (poder) ayudarme?", loesung: "pueda", tipps: ["pueda", "puede", "podrá"], hinweis: "Frage nach Unbekanntem", de: "Gibt es jemanden, der mir helfen kann?" },
      { id: "g4305", satz: "Este es el hombre que ___ (vivir) al lado.", loesung: "vive", tipps: ["vive", "viva", "viviera"], hinweis: "bekannte Person", de: "Das ist der Mann, der nebenan wohnt." }
    ]
  }
});

LEKTIONEN.push({
  tag: 44, niveau: "B1", thema: "Anweisungen geben",
  vokabeln: [
    { id: "v4401", es: "la instrucción", de: "die Anweisung",    wortart: "Substantiv", beispiel: "Sigue las instrucciones.", beispielDe: "Befolge die Anweisungen." },
    { id: "v4402", es: "advertir",       de: "hinweisen",        wortart: "Verb", beispiel: "Te advierto: ten cuidado.", beispielDe: "Ich warne dich: Pass auf." },
    { id: "v4403", es: "el manual",      de: "die Anleitung",    wortart: "Substantiv", beispiel: "Lee el manual primero.", beispielDe: "Lies zuerst die Anleitung." },
    { id: "v4404", es: "encender",       de: "einschalten",      wortart: "Verb", beispiel: "Enciende la luz, por favor.", beispielDe: "Mach bitte das Licht an." },
    { id: "v4405", es: "apagar",         de: "ausschalten",      wortart: "Verb", beispiel: "Apaga el móvil.", beispielDe: "Schalte das Handy aus." },
    { id: "v4406", es: "el paso",        de: "der Schritt",      wortart: "Substantiv", beispiel: "Sigue estos tres pasos.", beispielDe: "Befolge diese drei Schritte." },
    { id: "v4407", es: "revisar",        de: "überprüfen",       wortart: "Verb", beispiel: "Revisa el texto antes de enviarlo.", beispielDe: "Prüfe den Text, bevor du ihn schickst." },
    { id: "v4408", es: "guardar",        de: "speichern / aufbewahren", wortart: "Verb", beispiel: "Guarda el archivo aquí.", beispielDe: "Speichere die Datei hier." },
    { id: "v4409", es: "rellenar",       de: "ausfüllen",        wortart: "Verb", beispiel: "Rellene este formulario.", beispielDe: "Füllen Sie dieses Formular aus." },
    { id: "v4410", es: "el formulario",  de: "das Formular",     wortart: "Substantiv", beispiel: "Entregue el formulario firmado.", beispielDe: "Geben Sie das unterschriebene Formular ab." }
  ],
  saetze: [
    { id: "s4401", es: "Dímelo otra vez, por favor.",            de: "Sag es mir bitte noch einmal." },
    { id: "s4402", es: "No me lo digas ahora.",                  de: "Sag es mir jetzt nicht." },
    { id: "s4403", es: "Siéntese aquí, por favor.",              de: "Setzen Sie sich bitte hierhin." },
    { id: "s4404", es: "Vámonos, que es tarde.",                 de: "Gehen wir, es ist spät." },
    { id: "s4405", es: "Rellene el formulario y fírmelo.",       de: "Füllen Sie das Formular aus und unterschreiben Sie es." }
  ],
  grammatik: {
    id: "g44", titel: "Alle Imperativformen im Überblick",
    erklaerung: `
      <p>Jetzt fügt sich zusammen, was du an Tag 13, 14 und 36 gelernt hast. Der Clou:
      <strong>Alle Befehlsformen außer dem bejahten <em>tú</em> und <em>vosotros</em>
      sind Subjuntivformen.</strong></p>
      <table>
        <tr><th>Person</th><th>bejaht</th><th>verneint</th></tr>
        <tr><td>tú</td><td>habla (él-Form)</td><td>no habl<em>es</em></td></tr>
        <tr><td>usted</td><td>habl<em>e</em></td><td>no habl<em>e</em></td></tr>
        <tr><td>nosotros</td><td>habl<em>emos</em></td><td>no habl<em>emos</em></td></tr>
        <tr><td>vosotros</td><td>habl<em>ad</em></td><td>no habl<em>éis</em></td></tr>
        <tr><td>ustedes</td><td>habl<em>en</em></td><td>no habl<em>en</em></td></tr>
      </table>
      <p>Das bejahte <em>vosotros</em> ist die einzige ganz eigene Form: Infinitiv,
      <em>-r</em> weg, <em>-d</em> dran. <em>hablar → hablad</em>, <em>comer → comed</em>.</p>
      <div class="merke"><strong>Die Pronomen-Regel:</strong><br>
      <strong>bejaht</strong> → angehängt, alles ein Wort:
      <em>Dí<strong>melo</strong>. · Siénte<strong>se</strong>. · Levánta<strong>te</strong>.</em><br>
      <strong>verneint</strong> → davor, getrennt:
      <em>No <strong>me lo</strong> digas. · No <strong>se</strong> siente.</em></div>
      <p><strong>Der Akzent beim Anhängen:</strong> Er kommt dazu, damit die ursprüngliche
      Betonung erhalten bleibt. Faustregel: ab zwei angehängten Silben fast immer.<br>
      <em>di → dime → dí<strong>melo</strong></em> · <em>compra → cómpralo</em></p>
      <p><strong>Zwei kleine Besonderheiten:</strong></p>
      <ul>
        <li>Bei <em>nosotros</em> + <em>nos</em> fällt das <em>-s</em> weg:
            <em>vayamos + nos → <strong>vámonos</strong></em> (gehen wir)</li>
        <li>Bei <em>vosotros</em> + <em>os</em> fällt das <em>-d</em> weg:
            <em>sentad + os → <strong>sentaos</strong></em> (setzt euch)</li>
      </ul>`,
    uebungen: [
      { id: "g4401", satz: "___ (sentarse, usted) aquí, por favor.", loesung: "Siéntese", tipps: ["Siéntese", "Siéntate", "Se siente"], hinweis: "usted + angehängt", de: "Setzen Sie sich bitte hierhin." },
      { id: "g4402", satz: "No me lo ___ (decir, tú) ahora.", loesung: "digas", tipps: ["digas", "dices", "di"], hinweis: "verneint", de: "Sag es mir jetzt nicht." },
      { id: "g4403", satz: "___ (rellenar, usted) el formulario.", loesung: "Rellene", tipps: ["Rellene", "Rellena", "Rellenad"], hinweis: "usted", de: "Füllen Sie das Formular aus." },
      { id: "g4404", satz: "¡___ (irse, nosotros)! (gehen wir)", loesung: "Vámonos", tipps: ["Vámonos", "Vayamosnos", "Vamos"], hinweis: "-s fällt weg", de: "Gehen wir!" },
      { id: "g4405", satz: "___ (comer, vosotros) todo.", loesung: "Comed", tipps: ["Comed", "Coméis", "Coman"], hinweis: "-r wird -d", de: "Esst alles auf." }
    ]
  }
});

LEKTIONEN.push({
  tag: 45, niveau: "B1", thema: "Digitales Leben",
  vokabeln: [
    { id: "v4501", es: "la contraseña",  de: "das Passwort",     wortart: "Substantiv", beispiel: "He olvidado la contraseña.", beispielDe: "Ich habe das Passwort vergessen." },
    { id: "v4502", es: "descargar",      de: "herunterladen",    wortart: "Verb", beispiel: "Descarga la aplicación.", beispielDe: "Lade die App herunter." },
    { id: "v4503", es: "la pantalla",    de: "der Bildschirm",   wortart: "Substantiv", beispiel: "La pantalla está rota.", beispielDe: "Der Bildschirm ist kaputt." },
    { id: "v4504", es: "la nube",        de: "die Cloud",        wortart: "Substantiv", beispiel: "Guardo todo en la nube.", beispielDe: "Ich speichere alles in der Cloud." },
    { id: "v4505", es: "actualizar",     de: "aktualisieren",    wortart: "Verb", beispiel: "Hay que actualizar el sistema.", beispielDe: "Man muss das System aktualisieren." },
    { id: "v4506", es: "la red",         de: "das Netz",         wortart: "Substantiv", beispiel: "No hay red aquí.", beispielDe: "Hier gibt es kein Netz." },
    { id: "v4507", es: "el archivo",     de: "die Datei",        wortart: "Substantiv", beispiel: "El archivo pesa mucho.", beispielDe: "Die Datei ist sehr groß." },
    { id: "v4508", es: "compartir",      de: "teilen",           wortart: "Verb", beispiel: "¿Me lo puedes compartir?", beispielDe: "Kannst du es mit mir teilen?" },
    { id: "v4509", es: "la copia de seguridad", de: "die Sicherung", wortart: "Substantiv", beispiel: "Haz una copia de seguridad.", beispielDe: "Mach eine Sicherung." },
    { id: "v4510", es: "fiable",         de: "zuverlässig",      wortart: "Adjektiv", beispiel: "No es una fuente fiable.", beispielDe: "Das ist keine zuverlässige Quelle." }
  ],
  saetze: [
    { id: "s4501", es: "No creo que sea una buena idea.",        de: "Ich glaube nicht, dass das eine gute Idee ist." },
    { id: "s4502", es: "Es evidente que necesitamos ayuda.",     de: "Es ist offensichtlich, dass wir Hilfe brauchen." },
    { id: "s4503", es: "No es cierto que el archivo esté perdido.", de: "Es stimmt nicht, dass die Datei verloren ist." },
    { id: "s4504", es: "Está claro que hay un problema.",        de: "Es ist klar, dass es ein Problem gibt." },
    { id: "s4505", es: "Puede que la red no funcione bien.",     de: "Es kann sein, dass das Netz nicht gut funktioniert." }
  ],
  grammatik: {
    id: "g45", titel: "Indikativ oder Subjuntivo? Die Gesamtübersicht",
    erklaerung: `
      <p>Nach zehn Tagen Subjuntivo ist es Zeit für die Landkarte. Alles lässt sich auf
      <strong>eine</strong> Unterscheidung zurückführen.</p>
      <div class="merke"><strong>Der Kerngedanke:</strong><br>
      <strong>Indikativ</strong> = ich stelle etwas als <strong>Tatsache</strong> hin.<br>
      <strong>Subjuntivo</strong> = ich färbe es ein: gewünscht, bezweifelt, bewertet,
      noch nicht eingetreten.</div>
      <table>
        <tr><th>Auslöser</th><th>Modus</th><th>Beispiel</th></tr>
        <tr><td>Feststellung (creer, saber, es verdad)</td><td>Indikativ</td><td>Creo que <em>viene</em>.</td></tr>
        <tr><td>Verneinte Feststellung</td><td>Subjuntivo</td><td>No creo que <em>venga</em>.</td></tr>
        <tr><td>Wunsch, Bitte (querer que, pedir que)</td><td>Subjuntivo</td><td>Quiero que <em>vengas</em>.</td></tr>
        <tr><td>Gefühl (alegrarse de que, sentir que)</td><td>Subjuntivo</td><td>Me alegro de que <em>vengas</em>.</td></tr>
        <tr><td>Wertung (es importante que)</td><td>Subjuntivo</td><td>Es mejor que <em>vengas</em>.</td></tr>
        <tr><td>Zweifel (dudar que, puede que)</td><td>Subjuntivo</td><td>Dudo que <em>venga</em>.</td></tr>
        <tr><td>Zeit + Zukunft (cuando, en cuanto)</td><td>Subjuntivo</td><td>Cuando <em>vengas</em>, hablamos.</td></tr>
        <tr><td>Zeit + Gewohnheit</td><td>Indikativ</td><td>Cuando <em>viene</em>, hablamos.</td></tr>
        <tr><td>Absicht (para que, sin que)</td><td>Subjuntivo</td><td>Lo hago para que <em>vengas</em>.</td></tr>
        <tr><td>Gesuchtes, Unbekanntes (busco … que)</td><td>Subjuntivo</td><td>Busco a alguien que <em>venga</em>.</td></tr>
      </table>
      <p><strong>Die drei Fragen, mit denen du dich immer entscheiden kannst:</strong></p>
      <ol>
        <li>Steht ein <em>que</em> im Satz und wechselt dahinter die Person? — Wenn nicht,
            nimm einfach den Infinitiv.</li>
        <li>Behaupte ich eine Tatsache? → Indikativ.</li>
        <li>Wünsche, zweifle, bewerte ich, oder ist es noch nicht eingetreten? → Subjuntivo.</li>
      </ol>
      <div class="merke"><strong>Und ein tröstlicher Gedanke:</strong> Auch mit falschem
      Modus versteht dich jeder. Der Subjuntivo wächst mit dem Sprachgefühl — die Regeln
      sind das Gerüst, das du am Anfang brauchst und später kaum noch bemerkst.</div>`,
    uebungen: [
      { id: "g4501", satz: "No creo que ___ (ser) buena idea.", loesung: "sea", tipps: ["sea", "es", "será"], hinweis: "verneinte Feststellung", de: "Ich glaube nicht, dass das gut ist." },
      { id: "g4502", satz: "Es evidente que ___ (necesitar, nosotros) ayuda.", loesung: "necesitamos", tipps: ["necesitamos", "necesitemos"], hinweis: "Tatsache", de: "Offensichtlich brauchen wir Hilfe." },
      { id: "g4503", satz: "Quiero que ___ (venir, tú) conmigo.", loesung: "vengas", tipps: ["vengas", "vienes", "venir"], hinweis: "Wunsch", de: "Ich will, dass du mitkommst." },
      { id: "g4504", satz: "Cuando ___ (llegar, tú), cenamos.", loesung: "llegues", tipps: ["llegues", "llegas", "llegaste"], hinweis: "Zukunft", de: "Wenn du ankommst, essen wir." },
      { id: "g4505", satz: "Está claro que ___ (haber) un problema.", loesung: "hay", tipps: ["hay", "haya", "habrá"], hinweis: "Tatsache", de: "Es ist klar, dass es ein Problem gibt." }
    ]
  }
});

LEKTIONEN.push({
  tag: 46, niveau: "B1", thema: "Wenn-Sätze im Alltag",
  vokabeln: [
    { id: "v4601", es: "la condición",   de: "die Bedingung",    wortart: "Substantiv", beispiel: "Con una condición.", beispielDe: "Unter einer Bedingung." },
    { id: "v4602", es: "depender de",    de: "abhängen von",     wortart: "Verb", beispiel: "Depende del tiempo.", beispielDe: "Das hängt vom Wetter ab." },
    { id: "v4603", es: "en ese caso",    de: "in dem Fall",      wortart: "Adverb", beispiel: "En ese caso, me quedo.", beispielDe: "In dem Fall bleibe ich." },
    { id: "v4604", es: "de lo contrario", de: "andernfalls",     wortart: "Adverb", beispiel: "Date prisa; de lo contrario, llegaremos tarde.", beispielDe: "Beeil dich; andernfalls kommen wir zu spät." },
    { id: "v4605", es: "aceptar",        de: "annehmen",         wortart: "Verb", beispiel: "Si aceptas, empezamos hoy.", beispielDe: "Wenn du annimmst, fangen wir heute an." },
    { id: "v4606", es: "el requisito",   de: "die Bedingung",    wortart: "Substantiv", beispiel: "Cumple el requisito.", beispielDe: "Er erfüllt die Bedingung." },
    { id: "v4607", es: "arriesgarse",    de: "ein Risiko eingehen", wortart: "Verb", beispiel: "No quiero arriesgarme.", beispielDe: "Ich will kein Risiko eingehen." },
    { id: "v4608", es: "salir bien",     de: "gut ausgehen",     wortart: "Verb", beispiel: "Si sale bien, celebramos.", beispielDe: "Wenn es gut ausgeht, feiern wir." },
    { id: "v4609", es: "asumir",         de: "übernehmen",       wortart: "Verb", beispiel: "Asumo la responsabilidad.", beispielDe: "Ich übernehme die Verantwortung." },
    { id: "v4610", es: "el compromiso",  de: "die Verpflichtung", wortart: "Substantiv", beispiel: "Es un compromiso serio.", beispielDe: "Das ist eine ernste Verpflichtung." }
  ],
  saetze: [
    { id: "s4601", es: "Si tengo tiempo, iré contigo.",          de: "Wenn ich Zeit habe, gehe ich mit dir." },
    { id: "s4602", es: "Si llueve, nos quedamos en casa.",       de: "Wenn es regnet, bleiben wir zu Hause." },
    { id: "s4603", es: "Si me llamas, te lo explico todo.",      de: "Wenn du mich anrufst, erkläre ich dir alles." },
    { id: "s4604", es: "Si no vienes, avísame por favor.",       de: "Wenn du nicht kommst, sag mir bitte Bescheid." },
    { id: "s4605", es: "Todo depende de lo que decidas tú.",     de: "Alles hängt davon ab, was du entscheidest." }
  ],
  grammatik: {
    id: "g46", titel: "Bedingungssätze Typ 1 — realistische Bedingungen",
    erklaerung: `
      <p>Der reale Bedingungssatz beschreibt etwas, das durchaus eintreten kann.
      Er ist einfach gebaut — mit <strong>einer Regel, die man sich merken muss</strong>.</p>
      <div class="merke"><strong>Bauplan:</strong><br>
      <em>si</em> + <strong>Presente de Indicativo</strong> , Hauptsatz im Presente,
      Futuro oder Imperativ<br>
      <em>Si <strong>tengo</strong> tiempo, <strong>iré</strong> contigo.</em></div>
      <table>
        <tr><th>Nebensatz</th><th>Hauptsatz</th><th>Beispiel</th></tr>
        <tr><td>si + Presente</td><td>Presente</td><td>Si llueve, no salgo.</td></tr>
        <tr><td>si + Presente</td><td>Futuro</td><td>Si llueve, no saldré.</td></tr>
        <tr><td>si + Presente</td><td><em>ir a</em> + Inf.</td><td>Si llueve, no voy a salir.</td></tr>
        <tr><td>si + Presente</td><td>Imperativ</td><td>Si llueve, ¡quédate en casa!</td></tr>
      </table>
      <div class="merke"><strong>Die wichtigste Regel überhaupt:</strong> Nach <em>si</em>
      steht <strong>nie</strong> das Futuro und <strong>nie</strong> der Presente de
      Subjuntivo.<br>
      Richtig: <em>Si <strong>tengo</strong> tiempo…</em><br>
      Falsch: <s>Si tendré tiempo…</s> · <s>Si tenga tiempo…</s><br>
      Diesen Fehler machen fast alle Lernenden — merke ihn dir jetzt und du sparst dir
      viel Korrektur.</div>
      <p><strong>Beide Reihenfolgen sind möglich:</strong></p>
      <ul>
        <li><em>Si llueve, me quedo en casa.</em> (Komma nötig)</li>
        <li><em>Me quedo en casa si llueve.</em> (kein Komma)</li>
      </ul>
      <p><strong>Verwandte Ausdrücke:</strong> <em>siempre que</em> (sofern),
      <em>con tal de que</em> (unter der Bedingung, dass), <em>a no ser que</em>
      (es sei denn) — diese verlangen allerdings den Subjuntivo, weil sie nicht
      <em>si</em> sind.</p>`,
    uebungen: [
      { id: "g4601", satz: "Si ___ (tener, yo) tiempo, iré contigo.", loesung: "tengo", tipps: ["tengo", "tenga", "tendré"], hinweis: "nach si: Presente!", de: "Wenn ich Zeit habe, komme ich mit." },
      { id: "g4602", satz: "Si ___ (llover), nos quedamos en casa.", loesung: "llueve", tipps: ["llueve", "llueva", "lloverá"], hinweis: "nach si: Presente!", de: "Wenn es regnet, bleiben wir zu Hause." },
      { id: "g4603", satz: "Si me llamas, te lo ___ (explicar, yo).", loesung: "explico", tipps: ["explico", "explique", "explicaría"], hinweis: "Hauptsatz Presente", de: "Wenn du anrufst, erkläre ich es dir." },
      { id: "g4604", satz: "Si no vienes, ___ (avisar, tú) por favor.", loesung: "avísame", tipps: ["avísame", "avises", "avisas"], hinweis: "Imperativ + Pronomen", de: "Wenn du nicht kommst, sag mir Bescheid." },
      { id: "g4605", satz: "Si ___ (poder, nosotros), lo haremos hoy.", loesung: "podemos", tipps: ["podemos", "podamos", "podremos"], hinweis: "nach si: Presente!", de: "Wenn wir können, machen wir es heute." }
    ]
  }
});

LEKTIONEN.push({
  tag: 47, niveau: "B1", thema: "Arbeit und Bewerbung",
  vokabeln: [
    { id: "v4701", es: "el currículum",  de: "der Lebenslauf",   wortart: "Substantiv", beispiel: "Envié mi currículum ayer.", beispielDe: "Ich schickte gestern meinen Lebenslauf." },
    { id: "v4702", es: "la entrevista",  de: "das Vorstellungsgespräch", wortart: "Substantiv", beispiel: "Tengo una entrevista el lunes.", beispielDe: "Ich habe am Montag ein Gespräch." },
    { id: "v4703", es: "el puesto",      de: "die Stelle",       wortart: "Substantiv", beispiel: "Es un puesto interesante.", beispielDe: "Das ist eine interessante Stelle." },
    { id: "v4704", es: "el ascenso",     de: "die Beförderung",  wortart: "Substantiv", beispiel: "Consiguió un ascenso.", beispielDe: "Er bekam eine Beförderung." },
    { id: "v4705", es: "la jornada",     de: "der Arbeitstag",   wortart: "Substantiv", beispiel: "Trabajo a jornada completa.", beispielDe: "Ich arbeite Vollzeit." },
    { id: "v4706", es: "el convenio",    de: "der Tarifvertrag", wortart: "Substantiv", beispiel: "Según el convenio, son 30 días.", beispielDe: "Laut Tarifvertrag sind es 30 Tage." },
    { id: "v4707", es: "despedir",       de: "entlassen",        wortart: "Verb", beispiel: "Despidieron a diez personas.", beispielDe: "Sie entließen zehn Leute." },
    { id: "v4708", es: "el desempleo",   de: "die Arbeitslosigkeit", wortart: "Substantiv", beispiel: "El desempleo ha bajado.", beispielDe: "Die Arbeitslosigkeit ist gesunken." },
    { id: "v4709", es: "la formación",   de: "die Ausbildung",   wortart: "Substantiv", beispiel: "Tiene buena formación.", beispielDe: "Er hat eine gute Ausbildung." },
    { id: "v4710", es: "postularse",     de: "sich bewerben",    wortart: "Verb", beispiel: "Me postulé para el puesto.", beispielDe: "Ich bewarb mich für die Stelle." }
  ],
  saetze: [
    { id: "s4701", es: "Aunque no tengo experiencia, quiero intentarlo.", de: "Obwohl ich keine Erfahrung habe, will ich es versuchen." },
    { id: "s4702", es: "Aunque llueva, iré a la entrevista.",     de: "Auch wenn es regnen sollte, gehe ich zum Gespräch." },
    { id: "s4703", es: "A pesar de las dificultades, siguió adelante.", de: "Trotz der Schwierigkeiten machte er weiter." },
    { id: "s4704", es: "Por mucho que estudie, siempre hay más.",  de: "So viel ich auch lerne, es gibt immer mehr." },
    { id: "s4705", es: "Sin embargo, la oferta es interesante.",   de: "Dennoch ist das Angebot interessant." }
  ],
  grammatik: {
    id: "g47", titel: "aunque und die Einräumung",
    erklaerung: `
      <p><em>aunque</em> heißt „obwohl" oder „auch wenn" — und je nach Modus bedeutet es
      etwas anderes. Das ist eine der elegantesten Feinheiten des Spanischen.</p>
      <div class="merke"><strong>Der Unterschied:</strong><br>
      <em>Aunque <strong>llueve</strong>, salgo.</em> → Indikativ<br>
      = <strong>Obwohl</strong> es regnet (Tatsache, ich sehe es), gehe ich raus.<br>
      <em>Aunque <strong>llueva</strong>, saldré.</em> → Subjuntivo<br>
      = <strong>Auch wenn</strong> es regnen sollte (noch offen), gehe ich raus.</div>
      <table>
        <tr><th>Indikativ — feststehende Tatsache</th><th>Subjuntivo — Möglichkeit oder Zugeständnis</th></tr>
        <tr><td>Aunque <em>es</em> caro, lo compro.<br>(Es ist teuer, ich weiß es.)</td>
            <td>Aunque <em>sea</em> caro, lo compraré.<br>(Falls es teuer sein sollte.)</td></tr>
        <tr><td>Aunque <em>tengo</em> poco tiempo, te ayudo.</td>
            <td>Aunque <em>tenga</em> poco tiempo, te ayudaré.</td></tr>
      </table>
      <p><strong>Verwandte Ausdrücke:</strong></p>
      <ul>
        <li><em>a pesar de</em> + Infinitiv/Substantiv: <em>A pesar de la lluvia, salimos.</em></li>
        <li><em>a pesar de que</em> + Verb: <em>A pesar de que llovía, salimos.</em></li>
        <li><em>por mucho que</em> + Subjuntivo: <em>Por mucho que <strong>estudie</strong>,
            no me acuerdo.</em> (So viel ich auch lerne…)</li>
        <li><em>por más que</em> + Subjuntivo — gleiche Bedeutung</li>
        <li><em>aun así</em> = trotzdem: <em>Es difícil; aun así, lo intento.</em></li>
      </ul>
      <div class="merke"><strong>Nicht verwechseln:</strong><br>
      <em>aun</em> (ohne Akzent) = sogar, selbst<br>
      <em>aún</em> (mit Akzent) = noch (= <em>todavía</em>)<br>
      <em>Aún no ha llegado.</em> — Er ist noch nicht angekommen.</div>`,
    uebungen: [
      { id: "g4701", satz: "Aunque ___ (llover) ahora, salgo igual.", loesung: "llueve", tipps: ["llueve", "llueva", "lloverá"], hinweis: "Tatsache", de: "Obwohl es jetzt regnet, gehe ich trotzdem." },
      { id: "g4702", satz: "Aunque ___ (llover) mañana, iré.", loesung: "llueva", tipps: ["llueva", "llueve", "lloverá"], hinweis: "noch offen", de: "Auch wenn es morgen regnen sollte, gehe ich." },
      { id: "g4703", satz: "Por mucho que ___ (estudiar, yo), olvido cosas.", loesung: "estudie", tipps: ["estudie", "estudio", "estudiaré"], hinweis: "por mucho que", de: "So viel ich auch lerne, ich vergesse Dinge." },
      { id: "g4704", satz: "A pesar ___ que llovía, salimos.", loesung: "de", tipps: ["de", "a", "en"], hinweis: "feste Wendung", de: "Obwohl es regnete, gingen wir raus." },
      { id: "g4705", satz: "___ no ha llegado. (noch nicht)", loesung: "Aún", tipps: ["Aún", "Aun", "Ya"], hinweis: "noch = mit Akzent", de: "Er ist noch nicht angekommen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 48, niveau: "B1", thema: "Gesellschaft und Zusammenleben",
  vokabeln: [
    { id: "v4801", es: "la ciudadanía",  de: "die Bürgerschaft", wortart: "Substantiv", beispiel: "La ciudadanía participó mucho.", beispielDe: "Die Bürgerschaft beteiligte sich stark." },
    { id: "v4802", es: "el derecho",     de: "das Recht",        wortart: "Substantiv", beispiel: "Todos tenemos derechos.", beispielDe: "Wir alle haben Rechte." },
    { id: "v4803", es: "el deber",       de: "die Pflicht",      wortart: "Substantiv", beispiel: "También hay deberes.", beispielDe: "Es gibt auch Pflichten." },
    { id: "v4804", es: "la igualdad",    de: "die Gleichheit",   wortart: "Substantiv", beispiel: "Luchan por la igualdad.", beispielDe: "Sie kämpfen für Gleichheit." },
    { id: "v4805", es: "la convivencia", de: "das Zusammenleben", wortart: "Substantiv", beispiel: "La convivencia es fundamental.", beispielDe: "Zusammenleben ist grundlegend." },
    { id: "v4806", es: "el apoyo",       de: "die Unterstützung", wortart: "Substantiv", beispiel: "Necesitan más apoyo.", beispielDe: "Sie brauchen mehr Unterstützung." },
    { id: "v4807", es: "la brecha",      de: "die Kluft",        wortart: "Substantiv", beispiel: "Existe una brecha salarial.", beispielDe: "Es gibt eine Lohnkluft." },
    { id: "v4808", es: "fomentar",       de: "fördern",          wortart: "Verb", beispiel: "Hay que fomentar el diálogo.", beispielDe: "Man muss den Dialog fördern." },
    { id: "v4809", es: "la solidaridad", de: "die Solidarität",  wortart: "Substantiv", beispiel: "Mostraron mucha solidaridad.", beispielDe: "Sie zeigten viel Solidarität." },
    { id: "v4810", es: "el reto",        de: "die Herausforderung", wortart: "Substantiv", beispiel: "Es un reto colectivo.", beispielDe: "Das ist eine gemeinsame Herausforderung." }
  ],
  saetze: [
    { id: "s4801", es: "Es necesario que todos participen.",     de: "Es ist nötig, dass alle mitmachen." },
    { id: "s4802", es: "No hay duda de que hay que cambiar algo.", de: "Es besteht kein Zweifel, dass sich etwas ändern muss." },
    { id: "s4803", es: "Por lo tanto, debemos actuar juntos.",    de: "Deshalb müssen wir gemeinsam handeln." },
    { id: "s4804", es: "En primer lugar, hay que escuchar.",      de: "Zunächst muss man zuhören." },
    { id: "s4805", es: "Por otro lado, no todo es negativo.",     de: "Andererseits ist nicht alles negativ." }
  ],
  grammatik: {
    id: "g48", titel: "Konnektoren für B1 — einen Text gliedern",
    erklaerung: `
      <p>Diese Wörter machen aus einer Aufzählung einen zusammenhängenden Gedankengang.
      Sie sind der Unterschied zwischen A2 und B1 im Schriftlichen.</p>
      <table>
        <tr><th>Funktion</th><th>Ausdrücke</th></tr>
        <tr><td>Anfang</td><td><em>en primer lugar</em> (zunächst), <em>para empezar</em>,
            <em>ante todo</em> (vor allem)</td></tr>
        <tr><td>Fortsetzung</td><td><em>además</em> (außerdem), <em>asimismo</em> (ebenso),
            <em>por otra parte</em> (andererseits), <em>en segundo lugar</em></td></tr>
        <tr><td>Gegensatz</td><td><em>sin embargo</em> (jedoch), <em>no obstante</em> (dennoch),
            <em>en cambio</em> (hingegen), <em>por el contrario</em></td></tr>
        <tr><td>Folge</td><td><em>por lo tanto</em> (daher), <em>por eso</em> (deshalb),
            <em>en consecuencia</em>, <em>así que</em> (also)</td></tr>
        <tr><td>Beispiel</td><td><em>por ejemplo</em>, <em>es decir</em> (das heißt),
            <em>o sea</em> (also), <em>en concreto</em></td></tr>
        <tr><td>Betonung</td><td><em>de hecho</em> (tatsächlich), <em>sobre todo</em> (vor allem),
            <em>en realidad</em> (in Wirklichkeit)</td></tr>
        <tr><td>Abschluss</td><td><em>en resumen</em> (zusammenfassend), <em>por último</em>
            (schließlich), <em>en conclusión</em>, <em>en definitiva</em> (letztlich)</td></tr>
      </table>
      <div class="merke"><strong>Zeichensetzung:</strong> Steht der Konnektor am Satzanfang,
      folgt ein Komma:<br>
      <em><strong>Sin embargo,</strong> no estoy de acuerdo.</em><br>
      Steht er mitten im Satz, wird er von Kommas eingeschlossen:<br>
      <em>La idea, <strong>sin embargo,</strong> no es nueva.</em></div>
      <p><strong>Ein Beispieltext</strong> mit Konnektoren:</p>
      <p style="font-style:italic"><strong>En primer lugar,</strong> el problema afecta a
      todos. <strong>Además,</strong> las consecuencias son graves. <strong>Sin embargo,</strong>
      existen soluciones. <strong>Por ejemplo,</strong> se puede empezar por lo pequeño.
      <strong>En resumen,</strong> hay motivos para el optimismo.</p>
      <p>Genau so baut man eine B1-Prüfungsantwort auf: Einleitung, zwei Argumente,
      ein Einwand, ein Beispiel, ein Fazit.</p>`,
    uebungen: [
      { id: "g4801", satz: "Es caro. ___, lo compro. (jedoch)", loesung: "Sin embargo", tipps: ["Sin embargo", "Por lo tanto", "Además"], hinweis: "Gegensatz", de: "Es ist teuer. Dennoch kaufe ich es." },
      { id: "g4802", satz: "Llovía. ___, cancelamos. (daher)", loesung: "Por lo tanto", tipps: ["Por lo tanto", "Sin embargo", "Es decir"], hinweis: "Folge", de: "Es regnete. Daher sagten wir ab." },
      { id: "g4803", satz: "___, quiero agradecer su ayuda. (zunächst)", loesung: "En primer lugar", tipps: ["En primer lugar", "Por último", "De hecho"], hinweis: "Anfang", de: "Zunächst möchte ich für Ihre Hilfe danken." },
      { id: "g4804", satz: "___, la situación ha mejorado. (zusammenfassend)", loesung: "En resumen", tipps: ["En resumen", "Además", "En cambio"], hinweis: "Abschluss", de: "Zusammenfassend hat sich die Lage verbessert." },
      { id: "g4805", satz: "Es necesario que todos ___ (participar).", loesung: "participen", tipps: ["participen", "participan", "participar"], hinweis: "es necesario que", de: "Es ist nötig, dass alle mitmachen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 49, niveau: "B1", thema: "Kultur und Traditionen",
  vokabeln: [
    { id: "v4901", es: "la costumbre",   de: "der Brauch",       wortart: "Substantiv", beispiel: "Es una costumbre antigua.", beispielDe: "Das ist ein alter Brauch." },
    { id: "v4902", es: "el ambiente",    de: "die Atmosphäre",   wortart: "Substantiv", beispiel: "Había un ambiente festivo.", beispielDe: "Es herrschte eine festliche Stimmung." },
    { id: "v4903", es: "el desfile",     de: "der Umzug",        wortart: "Substantiv", beispiel: "El desfile pasó por el centro.", beispielDe: "Der Umzug zog durchs Zentrum." },
    { id: "v4904", es: "celebrar",       de: "feiern",           wortart: "Verb", beispiel: "Celebramos la Nochevieja en casa.", beispielDe: "Wir feiern Silvester zu Hause." },
    { id: "v4905", es: "el disfraz",     de: "das Kostüm",       wortart: "Substantiv", beispiel: "Llevaba un disfraz muy original.", beispielDe: "Er trug ein sehr originelles Kostüm." },
    { id: "v4906", es: "la herencia",    de: "das Erbe",         wortart: "Substantiv", beispiel: "Es parte de nuestra herencia cultural.", beispielDe: "Das ist Teil unseres kulturellen Erbes." },
    { id: "v4907", es: "el patrimonio",  de: "das Kulturgut",    wortart: "Substantiv", beispiel: "Es patrimonio de la humanidad.", beispielDe: "Es ist Weltkulturerbe." },
    { id: "v4908", es: "arraigado",      de: "verwurzelt",       wortart: "Adjektiv", beispiel: "Es una tradición muy arraigada.", beispielDe: "Das ist eine tief verwurzelte Tradition." },
    { id: "v4909", es: "el estreno",     de: "die Premiere",     wortart: "Substantiv", beispiel: "El estreno fue anoche.", beispielDe: "Die Premiere war gestern Abend." },
    { id: "v4910", es: "acudir",         de: "hingehen",         wortart: "Verb", beispiel: "Acudió mucha gente.", beispielDe: "Es kamen viele Leute." }
  ],
  saetze: [
    { id: "s4901", es: "Es la fiesta más importante del año.",   de: "Das ist das wichtigste Fest des Jahres." },
    { id: "s4902", es: "Es un pueblo pequeñísimo pero precioso.", de: "Das ist ein winziges, aber wunderschönes Dorf." },
    { id: "s4903", es: "Cuanto más lo veo, más me gusta.",       de: "Je öfter ich es sehe, desto besser gefällt es mir." },
    { id: "s4904", es: "Fue de lo más interesante.",             de: "Das war äußerst interessant." },
    { id: "s4905", es: "No es tan difícil como parece.",         de: "Es ist nicht so schwierig, wie es scheint." }
  ],
  grammatik: {
    id: "g49", titel: "Steigern und Verstärken",
    erklaerung: `
      <p>Über den einfachen Vergleich (Tag 11) hinaus gibt es einige typisch spanische
      Verstärkungen, die deine Sprache lebendiger machen.</p>
      <p><strong>1. Die Endung <em>-ísimo</em></strong> — der absolute Superlativ.
      Sehr spanisch und sehr häufig:</p>
      <table>
        <tr><th>Regel</th><th>Beispiel</th></tr>
        <tr><td>Endvokal weg, <em>-ísimo</em> dran</td><td>guapo → guap<em>ísimo</em></td></tr>
        <tr><td>endet auf Konsonant: direkt anhängen</td><td>fácil → facil<em>ísimo</em></td></tr>
        <tr><td>c → qu</td><td>rico → ri<em>quísimo</em> (köstlich)</td></tr>
        <tr><td>g → gu</td><td>largo → lar<em>guísimo</em></td></tr>
        <tr><td>z → c</td><td>feliz → feli<em>císimo</em></td></tr>
      </table>
      <p><em>La paella estaba riquísima.</em> — Die Paella war köstlich.</p>
      <p><strong>2. Je … desto:</strong> <em>cuanto más … más …</em></p>
      <ul>
        <li><em><strong>Cuanto más</strong> estudio, <strong>más</strong> aprendo.</em></li>
        <li><em><strong>Cuanto menos</strong> duermo, <strong>peor</strong> trabajo.</em></li>
      </ul>
      <p><strong>3. Weitere Verstärkungen:</strong></p>
      <table>
        <tr><td><em>de lo más</em> + Adjektiv</td><td>äußerst: <em>de lo más raro</em></td></tr>
        <tr><td><em>sumamente</em></td><td>überaus: <em>sumamente importante</em></td></tr>
        <tr><td><em>un montón de</em></td><td>jede Menge: <em>un montón de gente</em></td></tr>
        <tr><td><em>qué</em> + Adjektiv</td><td>wie …!: <em>¡Qué bonito!</em></td></tr>
        <tr><td><em>lo</em> + Adjektiv</td><td>das … daran: <em>lo bueno es que…</em></td></tr>
      </table>
      <div class="merke"><strong>Das nützliche <em>lo</em>:</strong> Vor einem Adjektiv macht
      es daraus ein Substantiv.<br>
      <em><strong>Lo</strong> difícil es empezar.</em> — Das Schwierige ist der Anfang.<br>
      <em><strong>Lo</strong> mejor de todo fue la comida.</em> — Das Beste war das Essen.<br>
      Diese Wendung gibt es im Deutschen nicht in dieser Form — sie klingt sehr idiomatisch.</div>`,
    uebungen: [
      { id: "g4901", satz: "La comida estaba ___ (rico + ísimo).", loesung: "riquísima", tipps: ["riquísima", "ricísima", "riquísimo"], hinweis: "c → qu, weiblich", de: "Das Essen war köstlich." },
      { id: "g4902", satz: "___ más practico, más aprendo.", loesung: "Cuanto", tipps: ["Cuanto", "Cuando", "Tanto"], hinweis: "je … desto", de: "Je mehr ich übe, desto mehr lerne ich." },
      { id: "g4903", satz: "___ difícil es empezar.", loesung: "Lo", tipps: ["Lo", "El", "La"], hinweis: "Adjektiv wird Substantiv", de: "Das Schwierige ist der Anfang." },
      { id: "g4904", satz: "Es un libro ___ (interesante + ísimo).", loesung: "interesantísimo", tipps: ["interesantísimo", "interesantemente"], hinweis: "Endvokal weg", de: "Das ist ein hochinteressantes Buch." },
      { id: "g4905", satz: "No es tan difícil ___ parece.", loesung: "como", tipps: ["como", "que", "de"], hinweis: "tan … ?", de: "Es ist nicht so schwer, wie es scheint." }
    ]
  }
});

LEKTIONEN.push({
  tag: 50, niveau: "B1", thema: "Erinnerungen und Rückblick",
  vokabeln: [
    { id: "v5001", es: "el recuerdo",    de: "die Erinnerung",   wortart: "Substantiv", beispiel: "Guardo buenos recuerdos.", beispielDe: "Ich bewahre gute Erinnerungen." },
    { id: "v5002", es: "acordarse de",   de: "sich erinnern an", wortart: "Verb", beispiel: "¿Te acuerdas de aquel día?", beispielDe: "Erinnerst du dich an jenen Tag?" },
    { id: "v5003", es: "la etapa",       de: "der Lebensabschnitt", wortart: "Substantiv", beispiel: "Fue una etapa difícil.", beispielDe: "Das war ein schwieriger Abschnitt." },
    { id: "v5004", es: "la nostalgia",   de: "die Wehmut",       wortart: "Substantiv", beispiel: "Siento nostalgia de aquella época.", beispielDe: "Ich empfinde Wehmut für jene Zeit." },
    { id: "v5005", es: "el logro",       de: "der Erfolg",       wortart: "Substantiv", beispiel: "Fue nuestro mayor logro.", beispielDe: "Das war unser größter Erfolg." },
    { id: "v5006", es: "arrepentirse",   de: "bereuen",          wortart: "Verb", beispiel: "No me arrepiento de nada.", beispielDe: "Ich bereue nichts." },
    { id: "v5007", es: "el punto de inflexión", de: "der Wendepunkt", wortart: "Substantiv", beispiel: "Fue un punto de inflexión.", beispielDe: "Das war ein Wendepunkt." },
    { id: "v5008", es: "aprender de",    de: "lernen aus",       wortart: "Verb", beispiel: "Aprendí mucho de aquel error.", beispielDe: "Ich lernte viel aus jenem Fehler." },
    { id: "v5009", es: "el balance",     de: "die Bilanz",       wortart: "Substantiv", beispiel: "El balance es positivo.", beispielDe: "Die Bilanz ist positiv." },
    { id: "v5010", es: "por aquel entonces", de: "damals",       wortart: "Adverb", beispiel: "Por aquel entonces vivía solo.", beispielDe: "Damals lebte ich allein." }
  ],
  saetze: [
    { id: "s5001", es: "Cuando era joven, viajaba mucho.",       de: "Als ich jung war, reiste ich viel." },
    { id: "s5002", es: "Ya había terminado cuando llegaste.",    de: "Ich war schon fertig, als du ankamst." },
    { id: "s5003", es: "Ese año conocí a mi mejor amigo.",       de: "In jenem Jahr lernte ich meinen besten Freund kennen." },
    { id: "s5004", es: "Llevaba diez años trabajando allí.",     de: "Ich arbeitete schon zehn Jahre dort." },
    { id: "s5005", es: "Nunca he vuelto a aquel pueblo.",        de: "Ich bin nie wieder in jenes Dorf zurückgekehrt." }
  ],
  grammatik: {
    id: "g50", titel: "Die Vergangenheitszeiten zusammenspielen lassen",
    erklaerung: `
      <p>Du kennst jetzt vier Vergangenheitszeiten. In einer echten Erzählung greifen sie
      ineinander — hier ist das Zusammenspiel.</p>
      <table>
        <tr><th>Zeit</th><th>Rolle in der Erzählung</th><th>Beispiel</th></tr>
        <tr><td>Imperfecto</td><td>Kulisse, Zustand, Gewohnheit</td><td><em>Era de noche y llovía.</em></td></tr>
        <tr><td>Indefinido</td><td>Handlung, die die Geschichte vorantreibt</td><td><em>Salí y cogí un taxi.</em></td></tr>
        <tr><td>Pluscuamperfecto</td><td>was davor schon geschehen war</td><td><em>Había olvidado el paraguas.</em></td></tr>
        <tr><td>Perfecto</td><td>Bezug zur Gegenwart</td><td><em>Nunca he vuelto allí.</em></td></tr>
      </table>
      <p><strong>Eine Beispielerzählung</strong> — achte darauf, wie die Zeiten wechseln:</p>
      <p style="font-style:italic">
      <em>Era</em> de noche y <em>llovía</em> mucho. (Kulisse)
      Yo <em>había olvidado</em> el paraguas en la oficina. (Vorgeschichte)
      <em>Salí</em> del edificio y <em>corrí</em> hasta la parada. (Handlung)
      Mientras <em>esperaba</em>, <em>vi</em> a un viejo amigo. (Kulisse + Handlung)
      <em>Hablamos</em> media hora. Desde entonces no lo <em>he vuelto</em> a ver. (Bezug zu heute)
      </p>
      <div class="merke"><strong>Beim Erzählen so vorgehen:</strong><br>
      1. Bühne bauen — wo, wann, wie war es? → Imperfecto<br>
      2. Vorgeschichte ergänzen, falls nötig → Pluscuamperfecto<br>
      3. Erzählen, was geschah → Indefinido<br>
      4. Bilanz für heute ziehen → Perfecto</div>
      <p><strong>Typische Verbindungswörter:</strong> <em>entonces</em> (dann),
      <em>después</em> (danach), <em>mientras tanto</em> (in der Zwischenzeit),
      <em>al final</em> (schließlich), <em>desde entonces</em> (seitdem),
      <em>de repente</em> (plötzlich).</p>`,
    uebungen: [
      { id: "g5001", satz: "___ (ser) de noche y llovía.", loesung: "Era", tipps: ["Era", "Fue", "Ha sido"], hinweis: "Kulisse", de: "Es war Nacht und es regnete." },
      { id: "g5002", satz: "___ (olvidar, yo) el paraguas antes de salir.", loesung: "Había olvidado", tipps: ["Había olvidado", "Olvidé", "He olvidado"], hinweis: "davor geschehen", de: "Ich hatte den Schirm vergessen." },
      { id: "g5003", satz: "Entonces ___ (coger, yo) un taxi.", loesung: "cogí", tipps: ["cogí", "cogía", "he cogido"], hinweis: "Handlung", de: "Dann nahm ich ein Taxi." },
      { id: "g5004", satz: "Desde entonces no lo ___ (ver, yo).", loesung: "he visto", tipps: ["he visto", "vi", "veía"], hinweis: "Bezug zu heute", de: "Seitdem habe ich ihn nicht gesehen." },
      { id: "g5005", satz: "Mientras ___ (esperar, yo), vi a un amigo.", loesung: "esperaba", tipps: ["esperaba", "esperé", "he esperado"], hinweis: "mientras → Kulisse", de: "Während ich wartete, sah ich einen Freund." }
    ]
  }
});
