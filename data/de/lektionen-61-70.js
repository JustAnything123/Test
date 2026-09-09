/* Día 61–70 · Nivel B1 · Precisión: relativas, pasiva, genitivo */

LEKTION('de', {
  tag: 61, niveau: "B1", thema: "El mundo laboral",
  vokabeln: [
    { id: "v6101", de: "die Bewerbung",  es: "la solicitud de empleo", wortart: "sustantivo", beispiel: "Ich schicke meine Bewerbung ab.", beispielUe: "Envío mi solicitud." },
    { id: "v6102", de: "der Lebenslauf", es: "el currículum", wortart: "sustantivo", beispiel: "Der Lebenslauf ist aktuell.", beispielUe: "El currículum está actualizado." },
    { id: "v6103", de: "das Vorstellungsgespräch", es: "la entrevista de trabajo", wortart: "sustantivo", beispiel: "Das Vorstellungsgespräch lief gut.", beispielUe: "La entrevista salió bien." },
    { id: "v6104", de: "die Stelle",     es: "el puesto",      wortart: "sustantivo", beispiel: "Die Stelle ist noch frei.", beispielUe: "El puesto sigue libre." },
    { id: "v6105", de: "der Arbeitgeber", es: "el empleador",  wortart: "sustantivo", beispiel: "Mein Arbeitgeber zahlt pünktlich.", beispielUe: "Mi empleador paga puntual." },
    { id: "v6106", de: "der Vertrag",    es: "el contrato",    wortart: "sustantivo", beispiel: "Der Vertrag gilt ein Jahr.", beispielUe: "El contrato vale un año." },
    { id: "v6107", de: "kündigen",       es: "renunciar",      wortart: "verbo", beispiel: "Sie hat gekündigt.", beispielUe: "Ella renunció." },
    { id: "v6108", de: "die Erfahrung",  es: "la experiencia", wortart: "sustantivo", beispiel: "Er hat viel Erfahrung.", beispielUe: "Él tiene mucha experiencia." },
    { id: "v6109", de: "sich bewerben",  es: "postularse",     wortart: "verbo reflexivo", beispiel: "Ich bewerbe mich bei einer Firma.", beispielUe: "Me postulo en una empresa." },
    { id: "v6110", de: "die Abteilung",  es: "el departamento", wortart: "sustantivo", beispiel: "Sie leitet die Abteilung.", beispielUe: "Ella dirige el departamento." }
  ],
  saetze: [
    { id: "s6101", de: "Der Kollege, dem ich geholfen habe, ist heute krank.", es: "El colega al que ayudé está enfermo hoy." },
    { id: "s6102", de: "Die Firma, deren Chef ich kenne, sucht Personal.", es: "La empresa cuyo jefe conozco busca personal." },
    { id: "s6103", de: "Das ist der Mann, dessen Sohn bei uns arbeitet.", es: "Ese es el hombre cuyo hijo trabaja con nosotros." },
    { id: "s6104", de: "Die Kollegin, mit der ich arbeite, kommt aus Peru.", es: "La colega con la que trabajo es de Perú." },
    { id: "s6105", de: "Das sind die Leute, denen wir vertrauen.", es: "Esas son las personas en las que confiamos." }
  ],
  grammatik: {
    id: "g61", titel: "Relativas en dativo y genitivo",
    erklaerung: `
      <p>Ya conoces la relativa en nominativo y acusativo (<em>der Mann, der kommt</em> /
      <em>den ich kenne</em>). Faltan los dos casos que aparecen constantemente en textos
      reales: el <strong>dativo</strong> y el <strong>genitivo</strong>.</p>
      <table>
        <tr><th>Caso</th><th>masculino</th><th>femenino</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Nominativ</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Akkusativ</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td><strong>Dativ</strong></td><td><strong>dem</strong></td><td><strong>der</strong></td><td><strong>dem</strong></td><td><strong>denen</strong></td></tr>
        <tr><td><strong>Genitiv</strong></td><td><strong>dessen</strong></td><td><strong>deren</strong></td><td><strong>dessen</strong></td><td><strong>deren</strong></td></tr>
      </table>
      <div class="merke">Son los artículos definidos, con dos excepciones que hay que
      memorizar: <strong>denen</strong> (dativo plural, con -en) y las cuatro formas del
      genitivo <strong>dessen / deren</strong>.</div>
      <p><strong>¿Qué caso elijo?</strong> No lo decide el sustantivo de fuera, sino el
      verbo o la preposición <em>dentro</em> de la relativa:</p>
      <ul>
        <li><em>helfen</em> pide dativo → der Kollege, <strong>dem</strong> ich geholfen habe</li>
        <li><em>mit</em> pide dativo → die Kollegin, <strong>mit der</strong> ich arbeite</li>
        <li><em>vertrauen</em> pide dativo → die Leute, <strong>denen</strong> wir vertrauen</li>
      </ul>
      <p><strong>El genitivo = <em>cuyo</em>.</strong> Aquí sí manda el sustantivo de fuera:
      <em>die Firma</em> es femenino → <strong>deren</strong>. Y ojo: detrás de
      dessen/deren el sustantivo va <strong>sin artículo</strong>.</p>
      <table>
        <tr><td>der Mann + sein Sohn</td><td>der Mann, <strong>dessen Sohn</strong> hier arbeitet</td></tr>
        <tr><td>die Firma + ihr Chef</td><td>die Firma, <strong>deren Chef</strong> ich kenne</td></tr>
        <tr><td>die Leute + ihre Kinder</td><td>die Leute, <strong>deren Kinder</strong> hier lernen</td></tr>
      </table>
      <div class="merke">En español dices <em>cuyo/cuya</em> según lo poseído
      (<em>cuya casa</em>). En alemán es al revés: <strong>dessen/deren</strong> se elige
      según el poseedor. <em>Die Frau, dessen...</em> es imposible; siempre
      <em>deren</em>, porque <em>die Frau</em> es femenino.</div>`,
    uebungen: [
      { id: "g6101", satz: "Der Kollege, ___ ich geholfen habe, ist krank.", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "helfen + dativo, masculino", ue: "El colega al que ayudé está enfermo." },
      { id: "g6102", satz: "Die Firma, ___ Chef ich kenne, sucht Personal.", loesung: "deren", tipps: ["deren", "dessen", "der"], hinweis: "cuyo, poseedor femenino", ue: "La empresa cuyo jefe conozco busca personal." },
      { id: "g6103", satz: "Das sind die Leute, ___ ich vertraue.", loesung: "denen", tipps: ["denen", "die", "deren"], hinweis: "vertrauen + dativo, plural", ue: "Esas son las personas en las que confío." },
      { id: "g6104", satz: "Das ist der Mann, ___ Sohn hier arbeitet.", loesung: "dessen", tipps: ["dessen", "deren", "den"], hinweis: "cuyo, poseedor masculino", ue: "Ese es el hombre cuyo hijo trabaja aquí." },
      { id: "g6105", satz: "Die Kollegin, mit ___ ich arbeite, ist neu.", loesung: "der", tipps: ["der", "die", "dem"], hinweis: "mit + dativo, femenino", ue: "La colega con la que trabajo es nueva." }
    ]
  }
});

LEKTION('de', {
  tag: 62, niveau: "B1", thema: "Arrepentimiento y retrospectiva",
  vokabeln: [
    { id: "v6201", de: "bereuen",        es: "arrepentirse de", wortart: "verbo", beispiel: "Ich bereue nichts.", beispielUe: "No me arrepiento de nada." },
    { id: "v6202", de: "die Entscheidung", es: "la decisión",  wortart: "sustantivo", beispiel: "Es war die richtige Entscheidung.", beispielUe: "Fue la decisión correcta." },
    { id: "v6203", de: "die Gelegenheit", es: "la oportunidad", wortart: "sustantivo", beispiel: "Ich hatte keine Gelegenheit dazu.", beispielUe: "No tuve oportunidad." },
    { id: "v6204", de: "verpassen",      es: "perder, dejar pasar", wortart: "verbo", beispiel: "Ich habe den Zug verpasst.", beispielUe: "Perdí el tren." },
    { id: "v6205", de: "rechtzeitig",    es: "a tiempo",       wortart: "adverbio", beispiel: "Wir kamen rechtzeitig an.", beispielUe: "Llegamos a tiempo." },
    { id: "v6206", de: "der Irrtum",     es: "la equivocación", wortart: "sustantivo", beispiel: "Das war ein Irrtum.", beispielUe: "Eso fue una equivocación." },
    { id: "v6207", de: "zugeben",        es: "admitir",        wortart: "verbo separable", beispiel: "Er gibt seinen Fehler zu.", beispielUe: "Él admite su error." },
    { id: "v6208", de: "die Ausrede",    es: "la excusa",      wortart: "sustantivo", beispiel: "Das ist nur eine Ausrede.", beispielUe: "Eso es solo una excusa." },
    { id: "v6209", de: "ahnen",          es: "intuir, sospechar", wortart: "verbo", beispiel: "Ich habe es geahnt.", beispielUe: "Lo intuía." },
    { id: "v6210", de: "vermeiden",      es: "evitar",         wortart: "verbo", beispiel: "Das lässt sich vermeiden.", beispielUe: "Eso se puede evitar." }
  ],
  saetze: [
    { id: "s6201", de: "Wenn ich das gewusst hätte, wäre ich früher gekommen.", es: "Si lo hubiera sabido, habría venido antes." },
    { id: "s6202", de: "Du hättest mir das sagen sollen.", es: "Deberías habérmelo dicho." },
    { id: "s6203", de: "Wir wären gern länger geblieben.", es: "Nos habría gustado quedarnos más tiempo." },
    { id: "s6204", de: "Das hätte man leicht vermeiden können.", es: "Eso se habría podido evitar fácilmente." },
    { id: "s6205", de: "Ich hätte den Zug fast verpasst.", es: "Casi pierdo el tren." }
  ],
  grammatik: {
    id: "g62", titel: "Konjunktiv II en pasado — lo que habría pasado",
    erklaerung: `
      <p>Ya sabes el Konjunktiv II de presente (<em>ich hätte Zeit</em>, <em>ich würde
      kommen</em>). Para hablar de lo <strong>irreal en el pasado</strong> el alemán tiene
      una sola forma, mucho más simple que el español:</p>
      <div class="merke"><strong>hätte / wäre + participio II.</strong> Y nada más.
      Donde el español distingue <em>habría venido</em>, <em>hubiera venido</em>,
      <em>hubiese venido</em>, el alemán solo tiene <strong>wäre gekommen</strong>.</div>
      <table>
        <tr><th>Perfekt real</th><th>Konjunktiv II pasado</th></tr>
        <tr><td>ich habe gewusst</td><td>ich <strong>hätte</strong> gewusst</td></tr>
        <tr><td>ich bin gekommen</td><td>ich <strong>wäre</strong> gekommen</td></tr>
        <tr><td>wir sind geblieben</td><td>wir <strong>wären</strong> geblieben</td></tr>
      </table>
      <p>El auxiliar es el mismo que en el Perfekt: los verbos que hacen el Perfekt con
      <em>sein</em> (movimiento y cambio de estado) usan <strong>wäre</strong>; el resto,
      <strong>hätte</strong>.</p>
      <p><strong>La condicional irreal completa</strong> — las dos mitades van en
      Konjunktiv II:</p>
      <p style="margin-left:1rem"><em>Wenn ich das <strong>gewusst hätte</strong>,
      <strong>wäre</strong> ich früher <strong>gekommen</strong>.</em><br>
      <span style="opacity:.75">Si lo hubiera sabido, habría venido antes.</span></p>
      <p><strong>Con verbo modal: el doble infinitivo.</strong> Aquí no hay participio; el
      modal se queda en infinitivo y se pone al final del todo:</p>
      <table>
        <tr><td>Du <strong>hättest</strong> es mir <strong>sagen sollen</strong>.</td><td>Deberías habérmelo dicho.</td></tr>
        <tr><td>Das <strong>hätte</strong> man <strong>vermeiden können</strong>.</td><td>Eso se habría podido evitar.</td></tr>
        <tr><td>Ich <strong>hätte</strong> früher <strong>gehen müssen</strong>.</td><td>Habría tenido que irme antes.</td></tr>
      </table>
      <div class="merke"><strong>Nunca</strong> <em>gesollt</em> o <em>gekonnt</em> en esta
      construcción. Con modal siempre: <strong>hätte + infinitivo + infinitivo del modal</strong>.</div>
      <p><strong>Uso frecuente:</strong> reproche (<em>Du hättest anrufen können</em> — podrías
      haber llamado), lamento (<em>Ich hätte gern studiert</em>) y el casi-accidente con
      <em>fast/beinahe</em>: <em>Ich hätte den Zug fast verpasst</em> — casi pierdo el tren.</p>`,
    uebungen: [
      { id: "g6201", satz: "Wenn ich das gewusst ___, wäre ich gekommen.", loesung: "hätte", tipps: ["hätte", "wäre", "würde"], hinweis: "wissen va con haben", ue: "Si lo hubiera sabido, habría venido." },
      { id: "g6202", satz: "Wir ___ gern länger geblieben.", loesung: "wären", tipps: ["wären", "hätten", "würden"], hinweis: "bleiben va con sein", ue: "Nos habría gustado quedarnos más." },
      { id: "g6203", satz: "Du hättest mir das sagen ___. (sollen)", loesung: "sollen", tipps: ["sollen", "gesollt", "solltest"], hinweis: "doble infinitivo", ue: "Deberías habérmelo dicho." },
      { id: "g6204", satz: "Das hätte man vermeiden ___. (können)", loesung: "können", tipps: ["können", "gekonnt", "konnte"], hinweis: "doble infinitivo", ue: "Eso se habría podido evitar." },
      { id: "g6205", satz: "Wenn du früher ___ wärst, hätten wir uns getroffen. (kommen)", loesung: "gekommen", tipps: ["gekommen", "kommen", "gekommt"], hinweis: "participio II", ue: "Si hubieras venido antes, nos habríamos encontrado." }
    ]
  }
});

LEKTION('de', {
  tag: 63, niveau: "B1", thema: "Producción y técnica",
  vokabeln: [
    { id: "v6301", de: "herstellen",     es: "fabricar",       wortart: "verbo separable", beispiel: "Die Firma stellt Möbel her.", beispielUe: "La empresa fabrica muebles." },
    { id: "v6302", de: "die Ware",       es: "la mercancía",   wortart: "sustantivo", beispiel: "Die Ware ist unterwegs.", beispielUe: "La mercancía está en camino." },
    { id: "v6303", de: "liefern",        es: "entregar",       wortart: "verbo", beispiel: "Wir liefern morgen.", beispielUe: "Entregamos mañana." },
    { id: "v6304", de: "der Auftrag",    es: "el encargo",     wortart: "sustantivo", beispiel: "Der Auftrag ist groß.", beispielUe: "El encargo es grande." },
    { id: "v6305", de: "prüfen",         es: "revisar",        wortart: "verbo", beispiel: "Wir prüfen jedes Teil.", beispielUe: "Revisamos cada pieza." },
    { id: "v6306", de: "die Anlage",     es: "la instalación", wortart: "sustantivo", beispiel: "Die Anlage läuft wieder.", beispielUe: "La instalación funciona de nuevo." },
    { id: "v6307", de: "montieren",      es: "montar",         wortart: "verbo", beispiel: "Sie montieren die Teile.", beispielUe: "Ellos montan las piezas." },
    { id: "v6308", de: "das Bauteil",    es: "el componente",  wortart: "sustantivo", beispiel: "Ein Bauteil fehlt.", beispielUe: "Falta un componente." },
    { id: "v6309", de: "die Herstellung", es: "la fabricación", wortart: "sustantivo", beispiel: "Die Herstellung dauert drei Tage.", beispielUe: "La fabricación dura tres días." },
    { id: "v6310", de: "entwickeln",     es: "desarrollar",    wortart: "verbo", beispiel: "Wir entwickeln ein neues Modell.", beispielUe: "Desarrollamos un modelo nuevo." }
  ],
  saetze: [
    { id: "s6301", de: "Die Ware wird morgen geliefert.", es: "La mercancía se entrega mañana." },
    { id: "s6302", de: "Der Auftrag wurde gestern bearbeitet.", es: "El encargo fue procesado ayer." },
    { id: "s6303", de: "Die Maschine ist schon repariert worden.", es: "La máquina ya ha sido reparada." },
    { id: "s6304", de: "Das Bauteil war vorher geprüft worden.", es: "El componente había sido revisado antes." },
    { id: "s6305", de: "Die Anlage wird nächste Woche montiert werden.", es: "La instalación será montada la próxima semana." }
  ],
  grammatik: {
    id: "g63", titel: "La pasiva en todos los tiempos",
    erklaerung: `
      <p>La pasiva alemana se construye siempre igual: <strong>werden + participio II</strong>.
      Lo único que cambia de un tiempo a otro es la forma de <em>werden</em>.</p>
      <table>
        <tr><th>Tiempo</th><th>Ejemplo</th><th>Español</th></tr>
        <tr><td>Präsens</td><td>Die Ware <strong>wird</strong> geliefert.</td><td>se entrega</td></tr>
        <tr><td>Präteritum</td><td>Die Ware <strong>wurde</strong> geliefert.</td><td>fue entregada</td></tr>
        <tr><td>Perfekt</td><td>Die Ware <strong>ist</strong> geliefert <strong>worden</strong>.</td><td>ha sido entregada</td></tr>
        <tr><td>Plusquamperfekt</td><td>Die Ware <strong>war</strong> geliefert <strong>worden</strong>.</td><td>había sido entregada</td></tr>
        <tr><td>Futur I</td><td>Die Ware <strong>wird</strong> geliefert <strong>werden</strong>.</td><td>será entregada</td></tr>
      </table>
      <div class="merke"><strong>La trampa número uno: worden, no geworden.</strong><br>
      <em>Er ist Lehrer geworden</em> = se hizo profesor (werden como verbo pleno).<br>
      <em>Das Auto ist repariert worden</em> = el coche ha sido reparado (pasiva).<br>
      En la pasiva el participio de werden pierde el ge-.</div>
      <p><strong>¿Quién lo hace?</strong> Normalmente no se dice — ese es el sentido de la
      pasiva. Si hace falta:</p>
      <ul>
        <li><strong>von</strong> + dativo para personas o causantes: <em>Der Brief wurde
            von meinem Chef geschrieben.</em></li>
        <li><strong>durch</strong> + acusativo para medios o causas: <em>Die Stadt wurde
            durch das Feuer zerstört.</em></li>
      </ul>
      <p><strong>De activa a pasiva</strong> — el acusativo de la activa se convierte en el
      sujeto de la pasiva:</p>
      <p style="margin-left:1rem"><em>Der Techniker repariert <strong>die Maschine</strong>.</em>
      → <em><strong>Die Maschine</strong> wird (vom Techniker) repariert.</em></p>
      <div class="merke">Un verbo sin acusativo (helfen, danken, gratulieren) no puede
      formar pasiva personal. Se dice <em>Mir wurde geholfen</em> — el dativo se queda
      dativo y la frase no tiene sujeto.</div>`,
    uebungen: [
      { id: "g6301", satz: "Die Ware ___ morgen geliefert.", loesung: "wird", tipps: ["wird", "wurde", "ist"], hinweis: "presente pasiva", ue: "La mercancía se entrega mañana." },
      { id: "g6302", satz: "Der Auftrag ___ gestern geprüft.", loesung: "wurde", tipps: ["wurde", "wird", "worden"], hinweis: "Präteritum pasiva", ue: "El encargo fue revisado ayer." },
      { id: "g6303", satz: "Die Maschine ist repariert ___.", loesung: "worden", tipps: ["worden", "geworden", "werden"], hinweis: "Perfekt pasiva", ue: "La máquina ha sido reparada." },
      { id: "g6304", satz: "Das Bauteil ___ vorher geprüft worden.", loesung: "war", tipps: ["war", "ist", "wurde"], hinweis: "Plusquamperfekt pasiva", ue: "El componente había sido revisado antes." },
      { id: "g6305", satz: "Der Brief wurde ___ meinem Chef geschrieben.", loesung: "von", tipps: ["von", "durch", "mit"], hinweis: "persona que actúa", ue: "La carta fue escrita por mi jefe." }
    ]
  }
});

LEKTION('de', {
  tag: 64, niveau: "B1", thema: "Reglas y normas",
  vokabeln: [
    { id: "v6401", de: "die Vorschrift",  es: "la norma",      wortart: "sustantivo", beispiel: "Das ist Vorschrift.", beispielUe: "Eso es norma." },
    { id: "v6402", de: "die Genehmigung", es: "el permiso oficial", wortart: "sustantivo", beispiel: "Wir brauchen eine Genehmigung.", beispielUe: "Necesitamos un permiso." },
    { id: "v6403", de: "verboten",        es: "prohibido",     wortart: "adjetivo", beispiel: "Rauchen ist hier verboten.", beispielUe: "Fumar está prohibido aquí." },
    { id: "v6404", de: "erlauben",        es: "permitir",      wortart: "verbo", beispiel: "Das ist nicht erlaubt.", beispielUe: "Eso no está permitido." },
    { id: "v6405", de: "die Ausnahme",    es: "la excepción",  wortart: "sustantivo", beispiel: "Es gibt keine Ausnahmen.", beispielUe: "No hay excepciones." },
    { id: "v6406", de: "beachten",        es: "tener en cuenta", wortart: "verbo", beispiel: "Bitte beachten Sie die Regeln.", beispielUe: "Por favor tenga en cuenta las reglas." },
    { id: "v6407", de: "die Frist",       es: "el plazo",      wortart: "sustantivo", beispiel: "Die Frist läuft heute ab.", beispielUe: "El plazo vence hoy." },
    { id: "v6408", de: "einhalten",       es: "cumplir",       wortart: "verbo separable", beispiel: "Wir halten die Frist ein.", beispielUe: "Cumplimos el plazo." },
    { id: "v6409", de: "die Pflicht",     es: "la obligación", wortart: "sustantivo", beispiel: "Das ist deine Pflicht.", beispielUe: "Esa es tu obligación." },
    { id: "v6410", de: "der Hinweis",     es: "la indicación", wortart: "sustantivo", beispiel: "Danke für den Hinweis.", beispielUe: "Gracias por la indicación." }
  ],
  saetze: [
    { id: "s6401", de: "Hier darf nicht geraucht werden.", es: "Aquí no se puede fumar." },
    { id: "s6402", de: "Die Frist muss unbedingt eingehalten werden.", es: "El plazo tiene que cumplirse sin falta." },
    { id: "s6403", de: "Das Formular kann online ausgefüllt werden.", es: "El formulario se puede rellenar en línea." },
    { id: "s6404", de: "Der Antrag musste unterschrieben werden.", es: "La solicitud tenía que ser firmada." },
    { id: "s6405", de: "Ich weiß, dass Ausnahmen genehmigt werden können.", es: "Sé que se pueden autorizar excepciones." }
  ],
  grammatik: {
    id: "g64", titel: "Pasiva con verbo modal",
    erklaerung: `
      <p>Es la forma normal de expresar reglas, prohibiciones y obligaciones en alemán
      escrito. La receta:</p>
      <div class="merke"><strong>modal conjugado … participio II + werden</strong><br>
      <em>Die Frist <strong>muss</strong> eingehalten <strong>werden</strong>.</em>
      — El plazo tiene que cumplirse.</div>
      <p>Fíjate en el orden: el modal ocupa la posición 2 como cualquier verbo conjugado,
      y al final se juntan <strong>dos</strong> elementos: primero el participio, después
      <em>werden</em> en infinitivo.</p>
      <table>
        <tr><th>Activa</th><th>Pasiva con modal</th></tr>
        <tr><td>Man muss die Frist einhalten.</td><td>Die Frist muss eingehalten werden.</td></tr>
        <tr><td>Man kann das online ausfüllen.</td><td>Das kann online ausgefüllt werden.</td></tr>
        <tr><td>Man durfte hier nicht rauchen.</td><td>Hier durfte nicht geraucht werden.</td></tr>
      </table>
      <p><strong>En pasado</strong> solo se cambia el modal, no el resto:
      <em>musste … eingehalten werden</em>, <em>konnte … ausgefüllt werden</em>. El
      Perfekt de esta construcción es tan pesado que en la práctica nadie lo usa: se dice
      el Präteritum.</p>
      <p><strong>En subordinada</strong> todo se va al final, y el modal —que es el verbo
      conjugado— se pone en último lugar:</p>
      <p style="margin-left:1rem"><em>Ich weiß, dass die Frist eingehalten werden
      <strong>muss</strong>.</em></p>
      <p><strong>La pasiva impersonal.</strong> Cuando no hay ningún objeto que pueda ser
      sujeto, la frase se queda sin sujeto — algo que en español no existe:</p>
      <table>
        <tr><td><em>Hier darf nicht geraucht werden.</em></td><td>Aquí no se fuma / no se puede fumar.</td></tr>
        <tr><td><em>Sonntags wird nicht gearbeitet.</em></td><td>Los domingos no se trabaja.</td></tr>
        <tr><td><em>Es wird viel diskutiert.</em></td><td>Se discute mucho.</td></tr>
      </table>
      <div class="merke">Ese <em>es</em> es solo un relleno para ocupar la posición 1.
      Si otra cosa va delante, desaparece: <em>Hier wird viel diskutiert</em>, nunca
      <em>Hier es wird…</em></div>`,
    uebungen: [
      { id: "g6401", satz: "Die Frist muss eingehalten ___.", loesung: "werden", tipps: ["werden", "worden", "wird"], hinweis: "infinitivo al final", ue: "El plazo tiene que cumplirse." },
      { id: "g6402", satz: "Hier ___ nicht geraucht werden. (dürfen)", loesung: "darf", tipps: ["darf", "darfst", "durfte"], hinweis: "presente, impersonal", ue: "Aquí no se puede fumar." },
      { id: "g6403", satz: "Der Antrag ___ unterschrieben werden. (müssen, pasado)", loesung: "musste", tipps: ["musste", "muss", "gemusst"], hinweis: "Präteritum del modal", ue: "La solicitud tenía que ser firmada." },
      { id: "g6404", satz: "Ich weiß, dass das Formular online ausgefüllt werden ___.", loesung: "kann", tipps: ["kann", "können", "konnte"], hinweis: "subordinada: modal al final", ue: "Sé que el formulario se puede rellenar en línea." },
      { id: "g6405", satz: "Sonntags ___ nicht gearbeitet.", loesung: "wird", tipps: ["wird", "werden", "worden"], hinweis: "pasiva impersonal, presente", ue: "Los domingos no se trabaja." }
    ]
  }
});

LEKTION('de', {
  tag: 65, niveau: "B1", thema: "Oficinas y administración",
  vokabeln: [
    { id: "v6501", de: "die Behörde",     es: "la oficina pública", wortart: "sustantivo", beispiel: "Die Behörde ist bis 12 Uhr offen.", beispielUe: "La oficina abre hasta las 12." },
    { id: "v6502", de: "die Unterlagen",  es: "los documentos", wortart: "sustantivo plural", beispiel: "Bringen Sie alle Unterlagen mit.", beispielUe: "Traiga todos los documentos." },
    { id: "v6503", de: "die Bescheinigung", es: "el certificado", wortart: "sustantivo", beispiel: "Ich brauche eine Bescheinigung.", beispielUe: "Necesito un certificado." },
    { id: "v6504", de: "der Nachweis",    es: "el comprobante", wortart: "sustantivo", beispiel: "Der Nachweis fehlt noch.", beispielUe: "Todavía falta el comprobante." },
    { id: "v6505", de: "beantragen",      es: "solicitar",      wortart: "verbo", beispiel: "Ich beantrage einen Ausweis.", beispielUe: "Solicito un documento de identidad." },
    { id: "v6506", de: "die Gebühr",      es: "la tasa",        wortart: "sustantivo", beispiel: "Die Gebühr beträgt 30 Euro.", beispielUe: "La tasa es de 30 euros." },
    { id: "v6507", de: "zuständig",       es: "competente, encargado", wortart: "adjetivo", beispiel: "Wer ist dafür zuständig?", beispielUe: "¿Quién es el encargado de eso?" },
    { id: "v6508", de: "die Anmeldung",   es: "el registro",    wortart: "sustantivo", beispiel: "Die Anmeldung dauert zehn Minuten.", beispielUe: "El registro dura diez minutos." },
    { id: "v6509", de: "gültig",          es: "válido",         wortart: "adjetivo", beispiel: "Der Pass ist noch gültig.", beispielUe: "El pasaporte sigue válido." },
    { id: "v6510", de: "der Aufenthalt",  es: "la estancia",    wortart: "sustantivo", beispiel: "Mein Aufenthalt ist genehmigt.", beispielUe: "Mi estancia está autorizada." }
  ],
  saetze: [
    { id: "s6501", de: "Wegen des Regens bleiben wir zu Hause.", es: "A causa de la lluvia nos quedamos en casa." },
    { id: "s6502", de: "Trotz der Verspätung waren wir pünktlich.", es: "A pesar del retraso llegamos puntuales." },
    { id: "s6503", de: "Während der Anmeldung braucht man den Ausweis.", es: "Durante el registro hace falta el documento." },
    { id: "s6504", de: "Das sind die Unterlagen meines Bruders.", es: "Esos son los documentos de mi hermano." },
    { id: "s6505", de: "Innerhalb einer Woche bekommen Sie Bescheid.", es: "Dentro de una semana recibirá respuesta." }
  ],
  grammatik: {
    id: "g65", titel: "El genitivo completo y sus preposiciones",
    erklaerung: `
      <p>El genitivo es el caso del <em>de</em> posesivo. En la lengua hablada retrocede
      (se dice <em>das Auto von meinem Bruder</em>), pero en todo texto escrito —
      formularios, cartas oficiales, prensa — es obligatorio.</p>
      <table>
        <tr><th></th><th>masculino</th><th>femenino</th><th>neutro</th><th>plural</th></tr>
        <tr><td>definido</td><td><strong>des</strong> Mannes</td><td><strong>der</strong> Frau</td><td><strong>des</strong> Kindes</td><td><strong>der</strong> Leute</td></tr>
        <tr><td>indefinido</td><td><strong>eines</strong> Mannes</td><td><strong>einer</strong> Frau</td><td><strong>eines</strong> Kindes</td><td>— </td></tr>
        <tr><td>posesivo</td><td>mein<strong>es</strong> Bruders</td><td>mein<strong>er</strong> Schwester</td><td>mein<strong>es</strong> Kindes</td><td>mein<strong>er</strong> Eltern</td></tr>
      </table>
      <div class="merke"><strong>La -s del sustantivo.</strong> En masculino y neutro el
      sustantivo también cambia: <em>des Mann<strong>es</strong></em>,
      <em>des Kind<strong>es</strong></em>. La forma larga <em>-es</em> se usa en palabras
      de una sílaba y en las que acaban en -s, -ß, -z, -tz; en las demás basta
      <em>-s</em>: <em>des Vaters</em>, <em>des Autos</em>. En femenino y plural el
      sustantivo <strong>no</strong> cambia nunca.</div>
      <p><strong>El orden es al revés del español:</strong> el poseedor va detrás.<br>
      <em>los documentos de mi hermano</em> → <em>die Unterlagen <strong>meines
      Bruders</strong></em>.</p>
      <p><strong>Preposiciones con genitivo</strong> — estas son las que necesitas en B1:</p>
      <table>
        <tr><th>Preposición</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td>wegen</td><td>a causa de</td><td>wegen des Regens</td></tr>
        <tr><td>trotz</td><td>a pesar de</td><td>trotz der Verspätung</td></tr>
        <tr><td>während</td><td>durante</td><td>während der Woche</td></tr>
        <tr><td>statt / anstatt</td><td>en lugar de</td><td>statt des Autos</td></tr>
        <tr><td>innerhalb</td><td>dentro de</td><td>innerhalb einer Woche</td></tr>
        <tr><td>außerhalb</td><td>fuera de</td><td>außerhalb der Stadt</td></tr>
        <tr><td>aufgrund</td><td>debido a</td><td>aufgrund der Lage</td></tr>
      </table>
      <div class="merke">Oirás mucho <em>wegen dem Regen</em> con dativo. No es error tuyo
      si lo escuchas: es lengua coloquial y está muy extendida. Pero en un examen y en
      cualquier texto escrito, <strong>genitivo</strong>.</div>
      <p><strong>Nombres propios:</strong> el genitivo se hace con -s pegada y sin
      apóstrofo: <em>Annas Auto</em>, <em>Peters Idee</em>. Aquí sí va delante, como en
      inglés.</p>`,
    uebungen: [
      { id: "g6501", satz: "Wegen ___ Regens bleiben wir zu Hause.", loesung: "des", tipps: ["des", "der", "dem"], hinweis: "genitivo masculino", ue: "A causa de la lluvia nos quedamos en casa." },
      { id: "g6502", satz: "Trotz ___ Verspätung waren wir pünktlich.", loesung: "der", tipps: ["der", "des", "die"], hinweis: "genitivo femenino", ue: "A pesar del retraso llegamos puntuales." },
      { id: "g6503", satz: "Das sind die Unterlagen mein___ Bruders.", loesung: "es", tipps: ["es", "er", "en"], hinweis: "genitivo masculino, posesivo", ue: "Esos son los documentos de mi hermano." },
      { id: "g6504", satz: "Innerhalb ___ Woche bekommen Sie Bescheid. (una)", loesung: "einer", tipps: ["einer", "eines", "eine"], hinweis: "genitivo femenino indefinido", ue: "Dentro de una semana recibirá respuesta." },
      { id: "g6505", satz: "Während ___ Anmeldung braucht man den Ausweis.", loesung: "der", tipps: ["der", "des", "dem"], hinweis: "genitivo femenino", ue: "Durante el registro hace falta el documento." }
    ]
  }
});

LEKTION('de', {
  tag: 66, niveau: "B1", thema: "Medios y noticias",
  vokabeln: [
    { id: "v6601", de: "die Meldung",     es: "la noticia breve", wortart: "sustantivo", beispiel: "Die Meldung kam heute Morgen.", beispielUe: "La noticia llegó esta mañana." },
    { id: "v6602", de: "die Schlagzeile", es: "el titular",     wortart: "sustantivo", beispiel: "Die Schlagzeile war übertrieben.", beispielUe: "El titular era exagerado." },
    { id: "v6603", de: "berichten",       es: "informar",       wortart: "verbo", beispiel: "Die Zeitung berichtet darüber.", beispielUe: "El periódico informa sobre eso." },
    { id: "v6604", de: "die Quelle",      es: "la fuente",      wortart: "sustantivo", beispiel: "Nenne bitte deine Quelle.", beispielUe: "Menciona tu fuente, por favor." },
    { id: "v6605", de: "glaubwürdig",     es: "creíble",        wortart: "adjetivo", beispiel: "Die Quelle ist glaubwürdig.", beispielUe: "La fuente es creíble." },
    { id: "v6606", de: "die Zeitschrift", es: "la revista",     wortart: "sustantivo", beispiel: "Ich lese die Zeitschrift jede Woche.", beispielUe: "Leo la revista cada semana." },
    { id: "v6607", de: "veröffentlichen", es: "publicar",       wortart: "verbo", beispiel: "Sie haben den Text veröffentlicht.", beispielUe: "Publicaron el texto." },
    { id: "v6608", de: "der Bericht",     es: "el reportaje",   wortart: "sustantivo", beispiel: "Der Bericht war lang.", beispielUe: "El reportaje era largo." },
    { id: "v6609", de: "die Öffentlichkeit", es: "el público, la opinión pública", wortart: "sustantivo", beispiel: "Die Öffentlichkeit reagierte scharf.", beispielUe: "La opinión pública reaccionó con dureza." },
    { id: "v6610", de: "recherchieren",   es: "investigar",     wortart: "verbo", beispiel: "Wir recherchieren seit Wochen.", beispielUe: "Investigamos desde hace semanas." }
  ],
  saetze: [
    { id: "s6601", de: "Die steigenden Preise sind ein großes Thema.", es: "Los precios crecientes son un gran tema." },
    { id: "s6602", de: "Der veröffentlichte Bericht war sehr kritisch.", es: "El reportaje publicado era muy crítico." },
    { id: "s6603", de: "Die schlafenden Kinder haben nichts gehört.", es: "Los niños dormidos no oyeron nada." },
    { id: "s6604", de: "Das gestohlene Handy wurde wiedergefunden.", es: "El móvil robado fue encontrado." },
    { id: "s6605", de: "Es ist ein wachsendes Problem.", es: "Es un problema creciente." }
  ],
  grammatik: {
    id: "g66", titel: "Partizip I y II como adjetivo",
    erklaerung: `
      <p>Los dos participios pueden ponerse delante del sustantivo como cualquier
      adjetivo. Es la marca del alemán escrito: donde el español necesita una relativa
      entera, el alemán mete una sola palabra.</p>
      <table>
        <tr><th></th><th>Formación</th><th>Sentido</th></tr>
        <tr><td><strong>Partizip I</strong></td><td>infinitivo + <strong>d</strong>:
            lachen → lachend</td><td><strong>activo</strong> y simultáneo: <em>que hace</em></td></tr>
        <tr><td><strong>Partizip II</strong></td><td>el del Perfekt:
            gestohlen, veröffentlicht</td><td><strong>pasivo</strong> y terminado: <em>que fue hecho</em></td></tr>
      </table>
      <p>Después llevan la <strong>misma terminación que un adjetivo normal</strong>, según
      artículo, género y caso — no hay nada nuevo que aprender ahí:</p>
      <table>
        <tr><th>Con relativa</th><th>Con participio</th></tr>
        <tr><td>die Preise, die steigen</td><td>die <strong>steigenden</strong> Preise</td></tr>
        <tr><td>die Kinder, die schlafen</td><td>die <strong>schlafenden</strong> Kinder</td></tr>
        <tr><td>der Bericht, der veröffentlicht wurde</td><td>der <strong>veröffentlichte</strong> Bericht</td></tr>
        <tr><td>das Handy, das gestohlen wurde</td><td>das <strong>gestohlene</strong> Handy</td></tr>
      </table>
      <div class="merke"><strong>Cómo elegir:</strong> pregúntate si el sustantivo
      <em>hace</em> la acción o la <em>recibe</em>.<br>
      <em>das kochende Wasser</em> = el agua que hierve (ella hierve → Partizip I)<br>
      <em>das gekochte Ei</em> = el huevo cocido (alguien lo coció → Partizip II)</div>
      <p><strong>Con verbos de movimiento</strong> el Partizip II también es activo, porque
      esos verbos no tienen pasiva: <em>der angekommene Zug</em> = el tren que ha llegado.</p>
      <p><strong>Sin sustantivo detrás no lleva terminación</strong> y funciona como
      adverbio: <em>Sie kam <strong>lachend</strong> ins Zimmer</em> — entró riendo.
      Esa es la traducción normal del gerundio español, que en alemán no existe.</p>
      <div class="merke">No confundas: <em>lachend</em> (Partizip I) ≠ <em>gelacht</em>
      (Partizip II). El Partizip I <strong>nunca</strong> se usa para formar tiempos
      verbales — solo como adjetivo o adverbio.</div>`,
    uebungen: [
      { id: "g6601", satz: "Die steig___ Preise sind ein Problem.", loesung: "enden", tipps: ["enden", "end", "ende"], hinweis: "Partizip I, plural con artículo", ue: "Los precios crecientes son un problema." },
      { id: "g6602", satz: "Der veröffentlicht___ Bericht war kritisch.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "Partizip II, nominativo masculino con der", ue: "El reportaje publicado era crítico." },
      { id: "g6603", satz: "Das gestohlen___ Handy wurde gefunden.", loesung: "e", tipps: ["e", "es", "en"], hinweis: "neutro con das", ue: "El móvil robado fue encontrado." },
      { id: "g6604", satz: "Die schlaf___ Kinder haben nichts gehört.", loesung: "enden", tipps: ["enden", "end", "geschlafenen"], hinweis: "ellos duermen: activo", ue: "Los niños dormidos no oyeron nada." },
      { id: "g6605", satz: "Es ist ein wachsend___ Problem.", loesung: "es", tipps: ["es", "e", "en"], hinweis: "neutro con ein", ue: "Es un problema creciente." }
    ]
  }
});

LEKTION('de', {
  tag: 67, niveau: "B1", thema: "Personas y profesiones",
  vokabeln: [
    { id: "v6701", de: "der Kunde",       es: "el cliente",     wortart: "sustantivo n-Deklination", beispiel: "Der Kunde wartet schon.", beispielUe: "El cliente ya espera." },
    { id: "v6702", de: "der Praktikant",  es: "el becario",     wortart: "sustantivo n-Deklination", beispiel: "Der Praktikant lernt schnell.", beispielUe: "El becario aprende rápido." },
    { id: "v6703", de: "der Experte",     es: "el experto",     wortart: "sustantivo n-Deklination", beispiel: "Der Experte erklärt es gut.", beispielUe: "El experto lo explica bien." },
    { id: "v6704", de: "der Zeuge",       es: "el testigo",     wortart: "sustantivo n-Deklination", beispiel: "Der Zeuge sagt aus.", beispielUe: "El testigo declara." },
    { id: "v6705", de: "der Patient",     es: "el paciente",    wortart: "sustantivo n-Deklination", beispiel: "Der Patient hat Schmerzen.", beispielUe: "El paciente tiene dolores." },
    { id: "v6706", de: "der Kandidat",    es: "el candidato",   wortart: "sustantivo n-Deklination", beispiel: "Der Kandidat überzeugt.", beispielUe: "El candidato convence." },
    { id: "v6707", de: "der Beamte",      es: "el funcionario", wortart: "sustantivo", beispiel: "Der Beamte ist freundlich.", beispielUe: "El funcionario es amable." },
    { id: "v6708", de: "der Botschafter", es: "el embajador",   wortart: "sustantivo", beispiel: "Der Botschafter kommt morgen.", beispielUe: "El embajador viene mañana." },
    { id: "v6709", de: "die Fachkraft",   es: "el trabajador cualificado", wortart: "sustantivo", beispiel: "Wir suchen eine Fachkraft.", beispielUe: "Buscamos un trabajador cualificado." },
    { id: "v6710", de: "der Vorgesetzte", es: "el superior",    wortart: "sustantivo", beispiel: "Mein Vorgesetzter ist im Urlaub.", beispielUe: "Mi superior está de vacaciones." }
  ],
  saetze: [
    { id: "s6701", de: "Ich habe dem Kunden schon geschrieben.", es: "Ya le escribí al cliente." },
    { id: "s6702", de: "Wir haben den Praktikanten eingestellt.", es: "Contratamos al becario." },
    { id: "s6703", de: "Das ist die Meinung des Experten.", es: "Esa es la opinión del experto." },
    { id: "s6704", de: "Fragen Sie bitte den Herrn dort.", es: "Pregúntele al señor de allí, por favor." },
    { id: "s6705", de: "Ich kenne den Nachbarn noch nicht.", es: "Todavía no conozco al vecino." }
  ],
  grammatik: {
    id: "g67", titel: "La n-Deklination — masculinos que añaden -n",
    erklaerung: `
      <p>Un grupo de sustantivos masculinos lleva <strong>-n</strong> o <strong>-en</strong>
      en <em>todos</em> los casos menos el nominativo singular. Es una de las cosas que más
      delata a un extranjero, porque suena mal en el oído alemán.</p>
      <table>
        <tr><th>Caso</th><th>singular</th><th>plural</th></tr>
        <tr><td>Nominativ</td><td>der Kunde</td><td>die Kunden</td></tr>
        <tr><td>Akkusativ</td><td>den Kunde<strong>n</strong></td><td>die Kunden</td></tr>
        <tr><td>Dativ</td><td>dem Kunde<strong>n</strong></td><td>den Kunden</td></tr>
        <tr><td>Genitiv</td><td>des Kunde<strong>n</strong></td><td>der Kunden</td></tr>
      </table>
      <div class="merke">Regla corta: <strong>solo el nominativo singular va sin -n.</strong>
      Todo lo demás lleva -n.</div>
      <p><strong>¿Quiénes pertenecen a este grupo?</strong> Casi todos son personas o
      animales:</p>
      <table>
        <tr><th>Terminación</th><th>Ejemplos</th></tr>
        <tr><td>-e</td><td>der Kunde, der Kollege, der Junge, der Experte, der Zeuge, der Löwe</td></tr>
        <tr><td>-ent</td><td>der Student, der Patient, der Präsident</td></tr>
        <tr><td>-ant</td><td>der Praktikant, der Elefant, der Demonstrant</td></tr>
        <tr><td>-ist</td><td>der Polizist, der Journalist, der Tourist</td></tr>
        <tr><td>-at</td><td>der Kandidat, der Soldat, der Diplomat</td></tr>
        <tr><td>-oge / -graf</td><td>der Biologe, der Psychologe, der Fotograf</td></tr>
        <tr><td>sueltos</td><td>der Mensch, der Nachbar, der Bauer, der Held, der Herr</td></tr>
      </table>
      <p><strong>Dos casos especiales:</strong></p>
      <ul>
        <li><strong>der Herr</strong> lleva solo <em>-n</em> en singular (den Herrn) pero
            <em>-en</em> en plural (die Herren).</li>
        <li><strong>der Name</strong>, <em>der Gedanke</em>, <em>das Herz</em> añaden
            además una <em>-s</em> en genitivo: <em>des Namens</em>.</li>
      </ul>
      <div class="merke"><strong>der Beamte</strong> y <strong>der Vorgesetzte</strong> no
      son n-Deklination: son adjetivos sustantivados y se declinan como adjetivos —
      <em>ein Beamter</em>, <em>der Beamte</em>, <em>mein Vorgesetzter</em>.</div>`,
    uebungen: [
      { id: "g6701", satz: "Ich habe dem Kunde___ geschrieben.", loesung: "n", tipps: ["n", "en", "-"], hinweis: "dativo singular", ue: "Le escribí al cliente." },
      { id: "g6702", satz: "Wir haben den Praktikant___ eingestellt.", loesung: "en", tipps: ["en", "n", "-"], hinweis: "acusativo, termina en -ant", ue: "Contratamos al becario." },
      { id: "g6703", satz: "Das ist die Meinung des Experte___.", loesung: "n", tipps: ["n", "s", "ns"], hinweis: "genitivo singular", ue: "Esa es la opinión del experto." },
      { id: "g6704", satz: "Fragen Sie den Herr___ dort.", loesung: "n", tipps: ["n", "en", "-"], hinweis: "Herr en singular", ue: "Pregúntele al señor de allí." },
      { id: "g6705", satz: "Ich kenne den Nachbar___ nicht.", loesung: "n", tipps: ["n", "en", "-"], hinweis: "acusativo singular", ue: "No conozco al vecino." }
    ]
  }
});

LEKTION('de', {
  tag: 68, niveau: "B1", thema: "Opinión y discusión",
  vokabeln: [
    { id: "v6801", de: "sich beschweren", es: "quejarse",       wortart: "verbo reflexivo", beispiel: "Er beschwert sich über den Lärm.", beispielUe: "Él se queja del ruido." },
    { id: "v6802", de: "die Diskussion",  es: "la discusión",   wortart: "sustantivo", beispiel: "Die Diskussion war lang.", beispielUe: "La discusión fue larga." },
    { id: "v6803", de: "zustimmen",       es: "estar de acuerdo", wortart: "verbo separable", beispiel: "Ich stimme dir zu.", beispielUe: "Estoy de acuerdo contigo." },
    { id: "v6804", de: "widersprechen",   es: "contradecir",    wortart: "verbo", beispiel: "Da muss ich widersprechen.", beispielUe: "Ahí tengo que contradecir." },
    { id: "v6805", de: "der Standpunkt",  es: "el punto de vista", wortart: "sustantivo", beispiel: "Ich verstehe deinen Standpunkt.", beispielUe: "Entiendo tu punto de vista." },
    { id: "v6806", de: "überzeugen",      es: "convencer",      wortart: "verbo", beispiel: "Das Argument überzeugt mich.", beispielUe: "El argumento me convence." },
    { id: "v6807", de: "der Vorwurf",     es: "el reproche",    wortart: "sustantivo", beispiel: "Das ist ein harter Vorwurf.", beispielUe: "Ese es un reproche duro." },
    { id: "v6808", de: "bestehen auf",    es: "insistir en",    wortart: "verbo con preposición", beispiel: "Sie besteht auf ihrer Meinung.", beispielUe: "Ella insiste en su opinión." },
    { id: "v6809", de: "sich beziehen auf", es: "referirse a",  wortart: "verbo con preposición", beispiel: "Ich beziehe mich auf Ihren Brief.", beispielUe: "Me refiero a su carta." },
    { id: "v6810", de: "das Argument",    es: "el argumento",   wortart: "sustantivo", beispiel: "Dein Argument ist stark.", beispielUe: "Tu argumento es fuerte." }
  ],
  saetze: [
    { id: "s6801", de: "Worüber habt ihr so lange gesprochen?", es: "¿De qué habéis hablado tanto tiempo?" },
    { id: "s6802", de: "Ich freue mich schon darauf.", es: "Ya me alegro de eso." },
    { id: "s6803", de: "Woran denkst du gerade?", es: "¿En qué estás pensando ahora?" },
    { id: "s6804", de: "Damit bin ich nicht einverstanden.", es: "Con eso no estoy de acuerdo." },
    { id: "s6805", de: "Ich weiß nicht, wovon er redet.", es: "No sé de qué habla." }
  ],
  grammatik: {
    id: "g68", titel: "Compuestos con da- y wo-",
    erklaerung: `
      <p>Muchos verbos alemanes llevan una preposición fija: <em>warten <strong>auf</strong></em>,
      <em>denken <strong>an</strong></em>, <em>sprechen <strong>über</strong></em>. Cuando
      quieres repetir eso con un pronombre, el alemán tiene una regla que el español no
      conoce:</p>
      <div class="merke"><strong>Cosas → una sola palabra.</strong> preposición pegada a
      <em>da-</em> (afirmación) o <em>wo-</em> (pregunta).<br>
      <strong>Personas → preposición + pronombre normal.</strong></div>
      <table>
        <tr><th></th><th>cosa</th><th>persona</th></tr>
        <tr><td>afirmación</td><td>Ich warte <strong>darauf</strong>.</td><td>Ich warte <strong>auf ihn</strong>.</td></tr>
        <tr><td>pregunta</td><td><strong>Worauf</strong> wartest du?</td><td><strong>Auf wen</strong> wartest du?</td></tr>
      </table>
      <p><strong>La -r de enlace.</strong> Si la preposición empieza por vocal se mete una
      <em>r</em> para que se pueda pronunciar:</p>
      <table>
        <tr><td>an → <strong>dar</strong>an, <strong>wor</strong>an</td><td>auf → darauf, worauf</td></tr>
        <tr><td>über → darüber, worüber</td><td>um → darum, worum</td></tr>
        <tr><td>mit → <strong>da</strong>mit, <strong>wo</strong>mit</td><td>von → davon, wovon</td></tr>
        <tr><td>für → dafür, wofür</td><td>zu → dazu, wozu</td></tr>
      </table>
      <p><strong>Tres usos que verás todo el rato:</strong></p>
      <ol>
        <li><strong>Retomar algo ya dicho:</strong> <em>Er kommt später. — Damit habe ich
            gerechnet.</em> (Contaba con eso.)</li>
        <li><strong>Anunciar una subordinada:</strong> <em>Ich freue mich <strong>darauf</strong>,
            dass du kommst.</em> El <em>darauf</em> apunta hacia adelante y es obligatorio.</li>
        <li><strong>Preguntar:</strong> <em>Worüber sprecht ihr?</em> — nunca
            <em>Über was sprecht ihr?</em> en lengua cuidada.</li>
      </ol>
      <div class="merke">El error típico del hispanohablante es traducir literalmente
      <em>pienso en eso</em> como <em>ich denke an das</em>. No existe: es
      <strong>ich denke daran</strong>. Preposición + <em>das/es</em> para cosas está
      prohibido.</div>`,
    uebungen: [
      { id: "g6801", satz: "___ habt ihr gesprochen? (über qué)", loesung: "Worüber", tipps: ["Worüber", "Über was", "Darüber"], hinweis: "pregunta por una cosa", ue: "¿De qué habéis hablado?" },
      { id: "g6802", satz: "Ich freue mich schon ___. (auf eso)", loesung: "darauf", tipps: ["darauf", "auf das", "worauf"], hinweis: "afirmación, cosa", ue: "Ya me alegro de eso." },
      { id: "g6803", satz: "___ denkst du gerade? (an qué)", loesung: "Woran", tipps: ["Woran", "An was", "Daran"], hinweis: "an + vocal: -r-", ue: "¿En qué piensas ahora?" },
      { id: "g6804", satz: "___ bin ich nicht einverstanden. (mit eso)", loesung: "Damit", tipps: ["Damit", "Mit das", "Womit"], hinweis: "mit no necesita -r-", ue: "Con eso no estoy de acuerdo." },
      { id: "g6805", satz: "Ich weiß nicht, ___ er redet. (von qué)", loesung: "wovon", tipps: ["wovon", "von was", "davon"], hinweis: "pregunta indirecta", ue: "No sé de qué habla." }
    ]
  }
});

LEKTION('de', {
  tag: 69, niveau: "B1", thema: "Metas y planes",
  vokabeln: [
    { id: "v6901", de: "der Zweck",       es: "el propósito",   wortart: "sustantivo", beispiel: "Was ist der Zweck davon?", beispielUe: "¿Cuál es el propósito de eso?" },
    { id: "v6902", de: "sich vornehmen",  es: "proponerse",     wortart: "verbo reflexivo separable", beispiel: "Ich habe mir viel vorgenommen.", beispielUe: "Me he propuesto mucho." },
    { id: "v6903", de: "die Absicht",     es: "la intención",   wortart: "sustantivo", beispiel: "Das war nicht meine Absicht.", beispielUe: "Esa no era mi intención." },
    { id: "v6904", de: "verzichten auf",  es: "renunciar a",    wortart: "verbo con preposición", beispiel: "Ich verzichte auf den Urlaub.", beispielUe: "Renuncio a las vacaciones." },
    { id: "v6905", de: "der Aufwand",     es: "el esfuerzo",    wortart: "sustantivo", beispiel: "Der Aufwand ist zu groß.", beispielUe: "El esfuerzo es demasiado grande." },
    { id: "v6906", de: "sich lohnen",     es: "valer la pena",  wortart: "verbo reflexivo", beispiel: "Es lohnt sich wirklich.", beispielUe: "Realmente vale la pena." },
    { id: "v6907", de: "die Voraussetzung", es: "el requisito", wortart: "sustantivo", beispiel: "Die Voraussetzungen sind erfüllt.", beispielUe: "Se cumplen los requisitos." },
    { id: "v6908", de: "umsetzen",        es: "poner en práctica", wortart: "verbo separable", beispiel: "Wir setzen den Plan um.", beispielUe: "Ponemos el plan en práctica." },
    { id: "v6909", de: "der Ehrgeiz",     es: "la ambición",    wortart: "sustantivo", beispiel: "Sie hat viel Ehrgeiz.", beispielUe: "Ella tiene mucha ambición." },
    { id: "v6910", de: "aufgeben",        es: "rendirse",       wortart: "verbo separable", beispiel: "Gib nicht auf!", beispielUe: "¡No te rindas!" }
  ],
  saetze: [
    { id: "s6901", de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", es: "Aprendo alemán para trabajar en Alemania." },
    { id: "s6902", de: "Er ging weg, ohne etwas zu sagen.", es: "Se fue sin decir nada." },
    { id: "s6903", de: "Statt zu klagen, sollten wir handeln.", es: "En lugar de quejarnos, deberíamos actuar." },
    { id: "s6904", de: "Es lohnt sich, jeden Tag zu üben.", es: "Vale la pena practicar todos los días." },
    { id: "s6905", de: "Ich habe vergessen, dich anzurufen.", es: "Olvidé llamarte." }
  ],
  grammatik: {
    id: "g69", titel: "Oraciones de infinitivo: um zu, ohne zu, statt zu",
    erklaerung: `
      <p>Son el equivalente exacto de <em>para + infinitivo</em>, <em>sin + infinitivo</em>
      y <em>en lugar de + infinitivo</em>. La construcción es siempre igual:
      la conjunción abre la frase, el <strong>zu + infinitivo</strong> la cierra.</p>
      <table>
        <tr><th>Alemán</th><th>Español</th><th>Ejemplo</th></tr>
        <tr><td><strong>um … zu</strong></td><td>para</td><td>Ich lerne Deutsch, <strong>um</strong> hier <strong>zu arbeiten</strong>.</td></tr>
        <tr><td><strong>ohne … zu</strong></td><td>sin</td><td>Er ging, <strong>ohne</strong> etwas <strong>zu sagen</strong>.</td></tr>
        <tr><td><strong>(an)statt … zu</strong></td><td>en lugar de</td><td><strong>Statt</strong> <strong>zu klagen</strong>, handeln wir.</td></tr>
      </table>
      <div class="merke"><strong>Condición imprescindible: un solo sujeto.</strong>
      Las dos mitades tienen que hablar de la misma persona. Si el sujeto cambia,
      <em>um zu</em> es imposible y se usa <strong>damit</strong> con frase completa:<br>
      <em>Ich spreche langsam, <strong>damit</strong> du mich verstehst.</em> (yo hablo,
      tú entiendes → dos sujetos)</div>
      <p><strong>Dónde va el zu.</strong> Delante del infinitivo, separado… salvo en los
      verbos separables, donde se mete <strong>dentro</strong> de la palabra:</p>
      <table>
        <tr><td>arbeiten → <strong>zu</strong> arbeiten</td><td>verbo normal: separado</td></tr>
        <tr><td>anrufen → an<strong>zu</strong>rufen</td><td>separable: en medio</td></tr>
        <tr><td>einkaufen → ein<strong>zu</strong>kaufen</td><td>separable: en medio</td></tr>
        <tr><td>verstehen → <strong>zu</strong> verstehen</td><td>inseparable: separado</td></tr>
      </table>
      <p><strong>La otra familia de infinitivos con zu:</strong> muchos verbos y expresiones
      piden directamente <em>zu + Infinitiv</em>, sin conjunción:</p>
      <ul>
        <li><em>Ich habe vor, einen Kurs <strong>zu machen</strong>.</em> (vorhaben)</li>
        <li><em>Es lohnt sich, jeden Tag <strong>zu üben</strong>.</em></li>
        <li><em>Ich hoffe, dich bald <strong>zu sehen</strong>.</em></li>
        <li>También: versuchen, vergessen, anfangen, aufhören, versprechen, Lust haben,
            Zeit haben, es ist wichtig / schwer / möglich.</li>
      </ul>
      <div class="merke">Los <strong>verbos modales</strong> y algunos más
      (sehen, hören, lassen, bleiben, gehen) van con infinitivo <strong>sin</strong> zu:
      <em>Ich muss gehen</em>, <em>Ich höre ihn singen</em>, <em>Ich gehe schlafen</em>.</div>`,
    uebungen: [
      { id: "g6901", satz: "Ich lerne Deutsch, ___ in Deutschland zu arbeiten.", loesung: "um", tipps: ["um", "ohne", "damit"], hinweis: "finalidad, mismo sujeto", ue: "Aprendo alemán para trabajar en Alemania." },
      { id: "g6902", satz: "Er ging weg, ___ etwas zu sagen.", loesung: "ohne", tipps: ["ohne", "um", "statt"], hinweis: "sin decir nada", ue: "Se fue sin decir nada." },
      { id: "g6903", satz: "___ zu klagen, sollten wir handeln.", loesung: "Statt", tipps: ["Statt", "Um", "Ohne"], hinweis: "en lugar de", ue: "En lugar de quejarnos, deberíamos actuar." },
      { id: "g6904", satz: "Ich habe vergessen, dich ___. (anrufen mit zu)", loesung: "anzurufen", tipps: ["anzurufen", "zu anrufen", "anrufen zu"], hinweis: "verbo separable: zu en medio", ue: "Olvidé llamarte." },
      { id: "g6905", satz: "Ich spreche langsam, ___ du mich verstehst.", loesung: "damit", tipps: ["damit", "um", "ohne"], hinweis: "dos sujetos distintos", ue: "Hablo despacio para que me entiendas." }
    ]
  }
});

LEKTION('de', {
  tag: 70, niveau: "B1", thema: "Etapas de la vida",
  vokabeln: [
    { id: "v7001", de: "der Lebensabschnitt", es: "la etapa de la vida", wortart: "sustantivo", beispiel: "Ein neuer Lebensabschnitt beginnt.", beispielUe: "Empieza una nueva etapa." },
    { id: "v7002", de: "die Weiterbildung", es: "la formación continua", wortart: "sustantivo", beispiel: "Ich mache eine Weiterbildung.", beispielUe: "Hago una formación continua." },
    { id: "v7003", de: "der Abschluss",   es: "el título",      wortart: "sustantivo", beispiel: "Mein Abschluss wird anerkannt.", beispielUe: "Mi título es reconocido." },
    { id: "v7004", de: "sich verändern",  es: "cambiar",        wortart: "verbo reflexivo", beispiel: "Vieles hat sich verändert.", beispielUe: "Muchas cosas han cambiado." },
    { id: "v7005", de: "inzwischen",      es: "mientras tanto", wortart: "adverbio", beispiel: "Inzwischen wohne ich hier.", beispielUe: "Mientras tanto vivo aquí." },
    { id: "v7006", de: "damals",          es: "en aquel entonces", wortart: "adverbio", beispiel: "Damals war alles anders.", beispielUe: "En aquel entonces todo era distinto." },
    { id: "v7007", de: "seitdem",         es: "desde entonces", wortart: "adverbio y conjunción", beispiel: "Seitdem geht es mir besser.", beispielUe: "Desde entonces estoy mejor." },
    { id: "v7008", de: "der Zeitraum",    es: "el periodo",     wortart: "sustantivo", beispiel: "In diesem Zeitraum war ich krank.", beispielUe: "En ese periodo estuve enfermo." },
    { id: "v7009", de: "allmählich",      es: "poco a poco",    wortart: "adverbio", beispiel: "Allmählich verstehe ich alles.", beispielUe: "Poco a poco lo entiendo todo." },
    { id: "v7010", de: "vorübergehend",   es: "temporalmente",  wortart: "adjetivo y adverbio", beispiel: "Das ist nur vorübergehend.", beispielUe: "Eso es solo temporal." }
  ],
  saetze: [
    { id: "s7001", de: "Seitdem ich hier wohne, geht es mir besser.", es: "Desde que vivo aquí estoy mejor." },
    { id: "s7002", de: "Bevor ich schlafe, lese ich noch etwas.", es: "Antes de dormir leo algo más." },
    { id: "s7003", de: "Während er kochte, deckte ich den Tisch.", es: "Mientras él cocinaba, yo ponía la mesa." },
    { id: "s7004", de: "Wir warten, bis der Regen aufhört.", es: "Esperamos hasta que pare la lluvia." },
    { id: "s7005", de: "Sobald ich ankomme, rufe ich dich an.", es: "En cuanto llegue, te llamo." }
  ],
  grammatik: {
    id: "g70", titel: "Subordinadas temporales",
    erklaerung: `
      <p>Siete conjunciones cubren prácticamente todo lo que necesitas decir sobre el
      momento de una acción. Todas son subordinantes: <strong>el verbo se va al final</strong>.</p>
      <table>
        <tr><th>Conjunción</th><th>Español</th><th>Relación temporal</th></tr>
        <tr><td><strong>wenn</strong></td><td>cuando</td><td>presente/futuro, o repetido en el pasado</td></tr>
        <tr><td><strong>als</strong></td><td>cuando</td><td><em>una sola vez</em> en el pasado</td></tr>
        <tr><td><strong>bevor</strong></td><td>antes de que</td><td>lo de la principal ocurre primero</td></tr>
        <tr><td><strong>nachdem</strong></td><td>después de que</td><td>lo de la subordinada ocurre primero</td></tr>
        <tr><td><strong>während</strong></td><td>mientras</td><td>a la vez</td></tr>
        <tr><td><strong>bis</strong></td><td>hasta que</td><td>final de la acción</td></tr>
        <tr><td><strong>seit / seitdem</strong></td><td>desde que</td><td>inicio, sigue durando</td></tr>
        <tr><td><strong>sobald</strong></td><td>en cuanto</td><td>inmediatamente después</td></tr>
        <tr><td><strong>solange</strong></td><td>mientras (dure)</td><td>los dos duran igual</td></tr>
      </table>
      <div class="merke"><strong>El error más frecuente: als o wenn.</strong><br>
      <em><strong>Als</strong> ich Kind war…</em> — un periodo único del pasado.<br>
      <em><strong>Wenn</strong> ich Zeit habe…</em> — presente o futuro.<br>
      <em>Immer <strong>wenn</strong> ich ihn sah…</em> — pasado, pero repetido.<br>
      Regla de bolsillo: pasado + una sola vez → <strong>als</strong>. Todo lo demás →
      <strong>wenn</strong>.</div>
      <p><strong>nachdem exige un salto de tiempo verbal.</strong> Las dos acciones no
      pueden ir en el mismo tiempo, porque una es anterior a la otra:</p>
      <table>
        <tr><th>subordinada</th><th>principal</th></tr>
        <tr><td>Plusquamperfekt: <em>Nachdem ich gegessen <strong>hatte</strong>,</em></td><td>Präteritum: <em>ging ich los.</em></td></tr>
        <tr><td>Perfekt: <em>Nachdem ich gegessen <strong>habe</strong>,</em></td><td>Präsens: <em>gehe ich los.</em></td></tr>
      </table>
      <p><strong>Cuidado con <em>seit</em>:</strong> el alemán usa
      <strong>presente</strong> donde el español también, pero muchos estudiantes ponen
      Perfekt por influencia del inglés: <em>Seit ich hier <strong>wohne</strong></em>,
      no <em>gewohnt habe</em>.</p>
      <div class="merke"><strong>bis</strong> no lleva negación en alemán. El español dice
      <em>hasta que no pare</em>; el alemán dice simplemente <em>bis der Regen
      <strong>aufhört</strong></em>.</div>`,
    uebungen: [
      { id: "g7001", satz: "___ ich hier wohne, geht es mir besser. (desde que)", loesung: "Seitdem", tipps: ["Seitdem", "Bevor", "Während"], hinweis: "inicio que sigue durando", ue: "Desde que vivo aquí estoy mejor." },
      { id: "g7002", satz: "___ ich schlafe, lese ich noch etwas. (antes de)", loesung: "Bevor", tipps: ["Bevor", "Nachdem", "Sobald"], hinweis: "primero leer, después dormir", ue: "Antes de dormir leo algo más." },
      { id: "g7003", satz: "Wir warten, ___ der Regen aufhört. (hasta que)", loesung: "bis", tipps: ["bis", "seit", "während"], hinweis: "sin negación", ue: "Esperamos hasta que pare la lluvia." },
      { id: "g7004", satz: "___ ich ankomme, rufe ich dich an. (en cuanto)", loesung: "Sobald", tipps: ["Sobald", "Solange", "Als"], hinweis: "inmediatamente después", ue: "En cuanto llegue, te llamo." },
      { id: "g7005", satz: "___ ich ein Kind war, wohnte ich in Lima.", loesung: "Als", tipps: ["Als", "Wenn", "Wann"], hinweis: "pasado, una sola vez", ue: "Cuando era niño vivía en Lima." }
    ]
  }
});
