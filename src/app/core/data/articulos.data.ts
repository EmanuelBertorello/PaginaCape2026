export interface ArticuloSection {
  h2: string;
  parrafos?: string[];
  lista?: string[];
  tabla?: { col1: string; col2: string }[];
  tablaHeader?: { col1: string; col2: string };
  subsecciones?: { h3: string; parrafos?: string[]; lista?: string[] }[];
}

export interface ArticuloFaq {
  pregunta: string;
  respuesta: string;
}

export interface ArticuloData {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  badge: string;
  h1: string;
  intro: string;
  sections: ArticuloSection[];
  faqs: ArticuloFaq[];
  ctaTitle?: string;
  ctaText?: string;
}

export const ARTICULOS_DATA: ArticuloData[] = [
  {
    slug: 'abogado-art-argentina',
    seoTitle: 'Abogado Especialista en Reclamos contra la ART en Argentina',
    seoDescription: 'Abogados expertos en reclamos contra la ART. Accidentes laborales, enfermedades profesionales, impugnación de alta médica e incapacidad 0%. Consulta gratis.',
    badge: 'ART · Reclamos',
    h1: 'Abogado Especialista en Reclamos contra la ART en Argentina',
    intro: 'Si sufriste un accidente laboral o una enfermedad profesional y tu Aseguradora de Riesgos del Trabajo (ART) rechazó el siniestro, otorgó el alta médica prematuramente o determinó una incapacidad del 0%, es posible reclamar y obtener una indemnización. El sistema de riesgos del trabajo está regulado por la Ley 24.557, que establece las prestaciones médicas y económicas que deben recibir los trabajadores accidentados.',
    sections: [
      {
        h2: 'Qué es el sistema de riesgos del trabajo',
        parrafos: [
          'El sistema obliga a todos los empleadores a contratar una ART para cubrir accidentes laborales y enfermedades profesionales. Está supervisado por la Superintendencia de Riesgos del Trabajo (SRT).',
        ],
        lista: ['Atención médica integral', 'Rehabilitación y prótesis', 'Recalificación laboral', 'Indemnización por incapacidad permanente'],
      },
      {
        h2: 'Problemas más comunes con las ART',
        subsecciones: [
          { h3: 'Alta médica prematura', parrafos: ['La ART otorga el alta cuando el trabajador todavía presenta dolor, limitación funcional o secuelas permanentes.'] },
          { h3: 'Incapacidad laboral 0%', parrafos: ['A pesar de existir secuelas permanentes, la ART determina incapacidad cero, cerrando el expediente sin indemnización.'] },
          { h3: 'Rechazo del accidente laboral', parrafos: ['La ART sostiene que el accidente no ocurrió en el trabajo o que no tiene relación con la actividad del trabajador.'] },
          { h3: 'Falta de estudios médicos', parrafos: ['La ART no autoriza resonancias, electromiografías o estudios necesarios para determinar correctamente la lesión.'] },
        ],
      },
      {
        h2: 'Cómo se calcula la indemnización por accidente laboral',
        parrafos: ['La indemnización se calcula con la fórmula legal de la Ley 24.557:', '53 × salario base × porcentaje de incapacidad × coeficiente de edad'],
        tabla: [
          { col1: 'Hernia de disco lumbar', col2: '10% – 30%' },
          { col1: 'Fractura de rodilla', col2: '15% – 40%' },
          { col1: 'Síndrome del túnel carpiano', col2: '5% – 20%' },
          { col1: 'Lesión de hombro', col2: '10% – 35%' },
        ],
        tablaHeader: { col1: 'Lesión', col2: 'Incapacidad' },
      },
      {
        h2: 'Cuándo iniciar juicio contra la ART',
        lista: ['La Comisión Médica fija incapacidad insuficiente', 'El accidente es rechazado injustamente', 'La ART no brinda tratamiento adecuado', 'El alta médica fue prematura con dolor persistente'],
      },
    ],
    faqs: [
      { pregunta: '¿Qué hacer si la ART rechaza el accidente?', respuesta: 'Se puede iniciar un trámite ante la Comisión Médica de la SRT para impugnar el rechazo y demostrar el origen laboral del accidente o enfermedad.' },
      { pregunta: '¿Cuánto tiempo hay para reclamar?', respuesta: 'El plazo general es de 2 años desde el accidente o diagnóstico de la enfermedad profesional. Es fundamental actuar rápido para no perder derechos.' },
      { pregunta: '¿La ART cubre enfermedades profesionales?', respuesta: 'Sí, cuando se demuestra la relación entre la enfermedad y la actividad laboral. Las enfermedades están listadas en el Decreto 659/96.' },
      { pregunta: '¿Qué pasa si sigo con dolor después del alta?', respuesta: 'Podés iniciar una divergencia médica ante la SRT. Este trámite gratuito permite que una Comisión Médica evalúe nuevamente tu caso.' },
    ],
  },
  {
    slug: 'calculo-indemnizacion-art',
    seoTitle: 'Cálculo de Incapacidad e Indemnización ART — Fórmula Legal 2026',
    seoDescription: 'Cómo calcular la indemnización ART por accidente laboral. Fórmula legal, tabla de incapacidades, ejemplos reales y RIPTE actualizado 2026.',
    badge: 'Indemnización · Cálculo',
    h1: 'Cálculo de Incapacidad e Indemnización ART',
    intro: 'Cuando un trabajador sufre un accidente laboral o una enfermedad profesional, determinar el porcentaje de incapacidad y la indemnización correspondiente es clave. En Argentina el sistema de Riesgos del Trabajo (Ley 24.557) utiliza una fórmula legal que combina salario, edad, porcentaje de incapacidad e índices de actualización. Muchos trabajadores reciben porcentajes muy bajos o altas sin incapacidad.',
    sections: [
      {
        h2: 'Fórmula legal para calcular la indemnización',
        parrafos: ['La Ley 24.557 establece la siguiente fórmula matemática:', 'Indemnización = 53 × IBM × (65 / edad) × % incapacidad', 'Donde IBM es el Ingreso Base Mensual (promedio salarial de los 12 meses previos al accidente).'],
        tabla: [
          { col1: '25 años', col2: '2,60' },
          { col1: '35 años', col2: '1,85' },
          { col1: '45 años', col2: '1,44' },
          { col1: '55 años', col2: '1,18' },
        ],
        tablaHeader: { col1: 'Edad del trabajador', col2: 'Factor (65/edad)' },
      },
      {
        h2: 'Tabla de incapacidades por tipo de lesión',
        tabla: [
          { col1: 'Hernia de disco lumbar operada', col2: '10% – 20%' },
          { col1: 'Rotura de ligamento cruzado', col2: '12% – 25%' },
          { col1: 'Lesión meniscal', col2: '7% – 15%' },
          { col1: 'Síndrome del túnel carpiano', col2: '6% – 15%' },
          { col1: 'Lesión de hombro', col2: '10% – 20%' },
          { col1: 'Fractura de muñeca con secuelas', col2: '5% – 10%' },
          { col1: 'Limitación cervical', col2: '5% – 12%' },
        ],
        tablaHeader: { col1: 'Lesión', col2: 'Incapacidad aproximada' },
      },
      {
        h2: 'Ejemplo real de cálculo',
        parrafos: [
          'Trabajador de construcción, 40 años, salario $900.000, incapacidad 12%:',
          '900.000 × 53 × 0.12 × (65/40) = aproximadamente $9.300.000',
          'Trabajador metalúrgico, 35 años, salario $1.050.000, incapacidad 15%:',
          '1.050.000 × 53 × 0.15 × (65/35) = aproximadamente $15.500.000',
        ],
      },
      {
        h2: 'Errores frecuentes de las ART en el cálculo',
        lista: ['Incapacidad 0% pese a estudios positivos', 'Alta médica prematura sin evaluación funcional', 'Exclusión de incapacidades psicológicas o psiquiátricas', 'IBM calculado incorrectamente (sin horas extras o adicionales)', 'No aplicar el RIPTE de actualización vigente'],
      },
    ],
    faqs: [
      { pregunta: '¿Qué es el IBM?', respuesta: 'El Ingreso Base Mensual es el promedio de las remuneraciones del trabajador durante los 12 meses anteriores al accidente. Incluye sueldo básico, adicionales y horas extras habituales.' },
      { pregunta: '¿Qué es el RIPTE?', respuesta: 'Es la Remuneración Imponible Promedio de los Trabajadores Estables. Se usa para actualizar los pisos indemnizatorios periódicamente. Dos trabajadores con la misma lesión pueden recibir montos distintos según la fecha del accidente.' },
      { pregunta: '¿Puedo impugnar el porcentaje que fijó la ART?', respuesta: 'Sí. Si el porcentaje es incorrecto, podés iniciar un trámite ante la Comisión Médica y, si la resolución es desfavorable, ir a la justicia laboral con un perito médico independiente.' },
      { pregunta: '¿Cuándo conviene ir a juicio?', respuesta: 'Cuando la diferencia entre lo que ofrece la ART y el monto real es significativa. En muchos casos los juicios multiplican el monto de 3 a 6 veces respecto a la oferta administrativa.' },
    ],
  },
  {
    slug: 'impugnacion-alta-medica',
    seoTitle: 'Cómo Impugnar el Alta Médica de la ART — Guía Paso a Paso',
    seoDescription: 'Cómo impugnar el alta médica ART en Argentina. Procedimiento ante Comisión Médica, plazos, documentación y estrategia probatoria. Consulta gratis.',
    badge: 'Alta Médica · Impugnación',
    h1: 'Cómo Impugnar el Alta Médica de la ART Paso a Paso',
    intro: 'Uno de los conflictos más frecuentes en el sistema de Riesgos del Trabajo es cuando la ART otorga el alta médica sin incapacidad o con un porcentaje mínimo que no refleja el estado real del trabajador. Muchos trabajadores reciben el alta mientras continúan con dolor persistente, limitaciones funcionales, pérdida de fuerza y dificultades para trabajar.',
    sections: [
      {
        h2: 'Qué significa alta médica sin incapacidad',
        tabla: [
          { col1: 'Alta médica sin incapacidad', col2: 'La ART dice que el trabajador está recuperado' },
          { col1: 'Alta médica con incapacidad', col2: 'Se reconoce una secuela permanente' },
          { col1: 'Rechazo del accidente', col2: 'La ART niega que sea un accidente laboral' },
        ],
        tablaHeader: { col1: 'Situación', col2: 'Consecuencia' },
        parrafos: ['El problema más frecuente es el alta con incapacidad 0%, incluso cuando el trabajador sigue con síntomas comprobables.'],
      },
      {
        h2: 'Procedimiento para impugnar el alta médica',
        subsecciones: [
          { h3: '1. Solicitar revisión ante la SRT', parrafos: ['El trámite es gratuito y puede iniciarse en la página oficial argentina.gob.ar/srt.'] },
          { h3: '2. Presentar estudios médicos', parrafos: ['Resonancia magnética, electromiografía, informes de especialistas y toda la historia clínica.'] },
          { h3: '3. Evaluación ante Comisión Médica', parrafos: ['Un médico de la Comisión realiza entrevista clínica, examen físico y análisis de estudios.'] },
          { h3: '4. Dictamen y apelación', parrafos: ['Si el dictamen es desfavorable, puede ser apelado ante la justicia laboral con un abogado especialista.'] },
        ],
      },
      {
        h2: 'Documentación necesaria para impugnar',
        subsecciones: [
          { h3: 'Estudios médicos', lista: ['Resonancia magnética', 'Tomografía', 'Radiografías actualizadas', 'Electromiografía'] },
          { h3: 'Informes médicos', lista: ['Informe traumatológico', 'Informe neurológico', 'Informes de rehabilitación'] },
          { h3: 'Documentación laboral', lista: ['Denuncia del accidente ante la ART', 'Recibos de sueldo', 'Descripción de tareas laborales'] },
        ],
      },
      {
        h2: 'Alta médica válida vs. alta médica impugnable',
        tabla: [
          { col1: 'Lesión curada', col2: 'Persistencia de síntomas' },
          { col1: 'Estudios normales', col2: 'Estudios con lesión visible' },
          { col1: 'Movilidad completa', col2: 'Limitación funcional' },
          { col1: 'Tratamiento completo', col2: 'Tratamiento insuficiente' },
        ],
        tablaHeader: { col1: 'Alta médica válida', col2: 'Alta médica impugnable' },
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto tiempo tengo para impugnar?', respuesta: 'Cuanto antes mejor. Una vez que el expediente administrativo se cierra sin impugnación, es más difícil reclamar. No hay un plazo rígido, pero la demora puede afectar la prueba médica.' },
      { pregunta: '¿Qué pasa si la Comisión Médica tampoco reconoce la incapacidad?', respuesta: 'El dictamen puede apelarse ante la justicia laboral. Con el patrocinio de un abogado especialista, el juez designa un perito médico independiente que puede reconocer porcentajes distintos.' },
      { pregunta: '¿Qué lesiones se pueden impugnar con más éxito?', respuesta: 'Hernia de disco, lesión meniscal, lesiones de hombro, síndrome del túnel carpiano y fracturas con secuelas son las más frecuentes donde las ART otorgan altas prematuras.' },
      { pregunta: '¿Tiene costo este trámite?', respuesta: 'El trámite ante la Comisión Médica es gratuito. Los honorarios del abogado salen del monto que cobrás: si no ganás, no pagás.' },
    ],
  },
  {
    slug: 'juicio-contra-art',
    seoTitle: 'Juicio Contra la ART en Argentina — Guía Legal Completa para Trabajadores',
    seoDescription: 'Cómo iniciar un juicio contra la ART en Argentina. Etapas del proceso judicial, pruebas clave, plazos y cuánto se puede cobrar. Abogados especializados.',
    badge: 'Juicio · ART',
    h1: 'Juicio Contra la ART: Guía Legal Completa para Trabajadores',
    intro: 'Miles de trabajadores en Argentina sufren accidentes laborales o enfermedades profesionales cada año. En teoría, el sistema ART debería garantizar atención médica y una indemnización justa. En la práctica, las ART otorgan altas prematuras, determinan incapacidad 0%, rechazan accidentes o fijan incapacidades muy inferiores a las reales. Esto obliga a muchos trabajadores a iniciar juicios laborales.',
    sections: [
      {
        h2: 'Normativa que regula el juicio contra la ART',
        tabla: [
          { col1: 'Ley 24.557', col2: 'Sistema de Riesgos del Trabajo' },
          { col1: 'Decreto 659/96', col2: 'Baremo para determinar incapacidad' },
          { col1: 'Ley 27.348', col2: 'Procedimiento ante Comisiones Médicas' },
          { col1: 'Resoluciones SRT', col2: 'Reglamentación del procedimiento' },
        ],
        tablaHeader: { col1: 'Norma', col2: 'Contenido' },
      },
      {
        h2: 'Etapas del proceso: de la denuncia al juicio',
        subsecciones: [
          { h3: '1. Denuncia del accidente', parrafos: ['Se realiza ante el empleador y la ART. Activa la cobertura médica y el registro del siniestro.'] },
          { h3: '2. Tratamiento médico y alta', parrafos: ['La ART cubre estudios, cirugías, rehabilitación y medicación. Al terminar otorga el alta médica.'] },
          { h3: '3. Trámite ante Comisión Médica', parrafos: ['Si hay divergencia con el alta o la incapacidad, se inicia el trámite administrativo obligatorio.'] },
          { h3: '4. Demanda judicial', parrafos: ['Si el dictamen es incorrecto, el abogado presenta la demanda ante el juzgado laboral competente.'] },
          { h3: '5. Prueba pericial médica', parrafos: ['El juez designa un perito médico independiente. Su dictamen suele ser determinante en el resultado.'] },
          { h3: '6. Sentencia o acuerdo', parrafos: ['El proceso puede terminar en sentencia o en un acuerdo conciliatorio. Los plazos varían por jurisdicción.'] },
        ],
      },
      {
        h2: 'Qué pruebas son clave en el juicio',
        lista: ['Resonancia magnética que demuestre la lesión', 'Electromiografía en lesiones neurológicas', 'Informes de especialistas (traumatólogo, neurocirujano)', 'Historia clínica completa de la ART', 'Denuncia del accidente con fecha y descripción', 'Recibos de sueldo para calcular el IBM'],
      },
      {
        h2: 'Errores más comunes de las ART en litigios',
        lista: ['Determinación incorrecta de incapacidad aplicando el baremo restrictivamente', 'Falta de correlación entre estudios médicos y dictamen', 'Alta médica sin estudios de imagen actualizados', 'Rechazo del accidente por causas formales sin sustento médico', 'Tratamientos insuficientes que agravan las secuelas'],
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto dura un juicio contra la ART?', respuesta: 'Depende de la provincia y la instancia. En promedio, entre 18 meses y 3 años. Muchos casos se resuelven antes por acuerdo conciliatorio.' },
      { pregunta: '¿Cuánto se puede cobrar en un juicio?', respuesta: 'Los montos varían según salario, incapacidad y edad. En casos de incapacidades del 20-30%, los montos suelen superar los $20-50 millones. En juicios se puede obtener 3 a 6 veces lo que ofreció la ART.' },
      { pregunta: '¿Necesito ir a la Comisión Médica antes del juicio?', respuesta: 'En la mayoría de las provincias el trámite ante la Comisión Médica es obligatorio antes de demandar judicialmente. El abogado te indica los pasos según tu jurisdicción.' },
      { pregunta: '¿El abogado cobra si no ganamos?', respuesta: 'No. Los honorarios son a éxito: se descuentan del monto que cobrás. Si no ganás, no pagás honorarios.' },
    ],
  },
  {
    slug: 'reclamar-contra-art',
    seoTitle: 'Cómo Reclamar Contra la ART en Argentina — Guía Completa 2026',
    seoDescription: 'Guía completa para reclamar contra la ART en Argentina. Procedimiento ante Comisión Médica, plazos, documentación y derechos del trabajador accidentado.',
    badge: 'ART · Procedimiento',
    h1: 'Cómo Reclamar Contra la ART en Argentina',
    intro: 'El sistema de Riesgos del Trabajo en Argentina fue creado para garantizar atención médica, rehabilitación e indemnización cuando los trabajadores sufren accidentes o enfermedades profesionales. Sin embargo, en la práctica muchos trabajadores enfrentan situaciones problemáticas: altas prematuras, incapacidades 0%, rechazo del accidente y tratamientos insuficientes. Esta guía explica cómo funciona el sistema y cómo defenderte.',
    sections: [
      {
        h2: 'Procedimiento paso a paso para reclamar',
        subsecciones: [
          { h3: '1. Denuncia del accidente', parrafos: ['Notificá inmediatamente al empleador. La ART debe cubrir traslado, diagnóstico y tratamiento desde el primer día.'] },
          { h3: '2. Tratamiento médico completo', parrafos: ['La ART debe brindar estudios, cirugías, rehabilitación y medicación. No aceptes menos que lo necesario para tu recuperación.'] },
          { h3: '3. Alta médica', parrafos: ['La ART otorga el alta cuando considera que alcanzaste la máxima recuperación posible. Revisá si es correcta antes de aceptarla.'] },
          { h3: '4. Divergencia médica', parrafos: ['Si no estás de acuerdo con el alta o la incapacidad, podés iniciar una divergencia médica ante la SRT de forma gratuita.'] },
          { h3: '5. Comisión Médica', parrafos: ['La Comisión Médica evalúa tu caso, estudios médicos y emite un dictamen. Si es desfavorable, puede apelarse judicialmente.'] },
        ],
      },
      {
        h2: 'Trámites ante la SRT',
        tabla: [
          { col1: 'Divergencia médica', col2: 'Alta prematura o incapacidad incorrecta' },
          { col1: 'Rechazo de contingencia', col2: 'ART niega el accidente laboral' },
          { col1: 'Revisión de incapacidad', col2: 'Porcentaje determinado incorrectamente' },
        ],
        tablaHeader: { col1: 'Trámite', col2: 'Cuándo usarlo' },
      },
      {
        h2: 'Qué prueba presentar ante la Comisión Médica',
        lista: ['Resonancia magnética actualizada', 'Electromiografía si hay compromiso neurológico', 'Informes de traumatólogo o especialista', 'Radiografías comparativas', 'Historia clínica completa', 'Descripción detallada de las tareas laborales'],
      },
      {
        h2: 'Cuándo ir a juicio',
        parrafos: ['Cuando el dictamen de la Comisión Médica no refleja la incapacidad real, la alternativa es la demanda judicial. El juicio permite que un perito médico independiente evalúe el caso sin intervención de la ART.'],
        lista: ['Incapacidad notoriamente inferior a la real', 'Rechazo injustificado del accidente', 'Alta médica con dolor y limitación funcional persistente', 'Tratamiento médico que agravó la lesión'],
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto tiempo tengo para reclamar contra la ART?', respuesta: 'El plazo de prescripción general es de 2 años desde el accidente o desde el conocimiento de la enfermedad profesional. No esperes.' },
      { pregunta: '¿Puedo reclamar aunque ya cobré la liquidación de la ART?', respuesta: 'Depende de las circunstancias. En muchos casos es posible reclamar la diferencia ante la justicia laboral. Consultá con un abogado especialista.' },
      { pregunta: '¿La Comisión Médica es gratis?', respuesta: 'Sí. El trámite administrativo ante la Comisión Médica de la SRT es completamente gratuito para el trabajador.' },
      { pregunta: '¿Qué pasa si mi empleador no me registró en la ART?', respuesta: 'Podés reclamar igualmente. El empleador no registrado es responsable directo por los daños. En algunos casos también hay responsabilidad de la aseguradora.' },
    ],
  },
  {
    slug: 'muerte-laboral',
    seoTitle: 'Indemnización por Muerte Laboral en Argentina — Derechos de la Familia',
    seoDescription: 'Indemnización por fallecimiento en accidente laboral. Derechos de familiares, cálculo del monto, quiénes pueden reclamar y cómo iniciar el trámite. Consulta gratis.',
    badge: 'Fallecimiento · ART',
    h1: 'Indemnización por Muerte Laboral: Derechos de la Familia del Trabajador',
    intro: 'Cuando un trabajador fallece a causa de un accidente laboral o una enfermedad profesional, los familiares tienen derecho a una indemnización. El sistema de Riesgos del Trabajo (Ley 24.557) establece las prestaciones económicas que la ART debe pagar. En muchos casos, la familia desconoce estos derechos o la ART liquida montos inferiores a los que corresponden legalmente.',
    sections: [
      {
        h2: 'Quiénes pueden reclamar la indemnización por muerte laboral',
        lista: ['Cónyuge o conviviente del fallecido', 'Hijos menores de 21 años', 'Hijos con discapacidad sin límite de edad', 'Padres si no hay cónyuge ni hijos', 'Hermanos con discapacidad dependientes del fallecido'],
        parrafos: ['La ART tiene la obligación de notificar a los beneficiarios sobre sus derechos. Si no lo hace, el plazo de prescripción no corre a favor de la aseguradora.'],
      },
      {
        h2: 'Cómo se calcula la indemnización por fallecimiento',
        parrafos: [
          'La indemnización por muerte laboral se calcula con la fórmula de la Ley 24.557 considerando incapacidad del 100%:',
          'Indemnización = 53 × IBM × (65 / edad del fallecido) × 1 (100%)',
          'Ejemplo: Trabajador de 38 años, salario $1.200.000:',
          '1.200.000 × 53 × (65/38) × 1 = aproximadamente $111.000.000',
        ],
      },
      {
        h2: 'Prestaciones que debe pagar la ART por muerte laboral',
        lista: [
          'Indemnización de pago único (fórmula legal)',
          'Gastos de sepelio (hasta el monto establecido por resolución SRT)',
          'Prestación en especie: asistencia médica previa al fallecimiento',
          'Pensión por fallecimiento en casos de gran invalidez previa',
        ],
      },
      {
        h2: 'Causas más frecuentes de muerte laboral en Argentina',
        subsecciones: [
          { h3: 'Accidentes en obra y construcción', parrafos: ['Caídas desde altura, derrumbes, electrocución y accidentes con maquinaria pesada son las principales causas en el sector.'] },
          { h3: 'Accidentes de tránsito laborales', parrafos: ['Incluyendo accidentes in itinere (en el trayecto al trabajo) y accidentes ocurridos durante la jornada laboral en vehículos de la empresa.'] },
          { h3: 'Enfermedades profesionales graves', parrafos: ['Silicosis, asbestosis, intoxicaciones crónicas y otras enfermedades que pueden derivar en fallecimiento tras años de exposición.'] },
          { h3: 'Accidentes por maquinaria industrial', parrafos: ['Atrapamientos, aplastamientos y lesiones por equipos sin medidas de seguridad adecuadas.'] },
        ],
      },
      {
        h2: 'Cuándo la familia puede iniciar un juicio civil',
        parrafos: ['Además de la indemnización tarifada de la ART, en casos de accidentes con culpa del empleador o de terceros, la familia puede iniciar una demanda civil por daños y perjuicios. La indemnización civil puede ser notablemente superior a la de la ART.'],
        lista: ['Cuando existía falta de medidas de seguridad probada', 'Cuando hubo negligencia grave del empleador', 'Cuando intervino un tercero (otro conductor, contratista, etc.)', 'Cuando el accidente fue ocasionado por equipos sin mantenimiento'],
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto tiempo tiene la familia para reclamar?', respuesta: 'El plazo de prescripción es de 2 años desde el fallecimiento. En algunos casos puede extenderse. Es fundamental consultar con un abogado sin demora.' },
      { pregunta: '¿Qué documentación necesita la familia?', respuesta: 'Partida de defunción, acta de matrimonio o convivencia, partidas de nacimiento de los hijos, denuncia del accidente ante la ART y documentación médica del trabajador fallecido.' },
      { pregunta: '¿La ART paga automáticamente al saber del fallecimiento?', respuesta: 'Debe hacerlo, pero en la práctica muchas familias no reciben notificación. Es fundamental denunciar el fallecimiento ante la ART y la SRT, y contar con representación legal para verificar que la liquidación sea correcta.' },
      { pregunta: '¿Los hijos mayores de 21 años pueden cobrar?', respuesta: 'Solo si tienen discapacidad reconocida y dependían económicamente del fallecido. Los hijos mayores sin discapacidad generalmente no son beneficiarios de la prestación ART, pero sí pueden serlo en una acción civil.' },
      { pregunta: '¿Cuánto cuesta contratar un abogado?', respuesta: 'Los honorarios son a éxito: se descuentan únicamente si hay cobro. La familia no desembolsa dinero por adelantado.' },
    ],
    ctaTitle: 'Acompañamos a las Familias en los Momentos Más Difíciles',
    ctaText: 'Si perdiste un familiar en un accidente de trabajo, nuestros abogados te acompañan en todo el proceso para asegurarte que recibas lo que te corresponde por ley.',
  },
];
