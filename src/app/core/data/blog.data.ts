export interface BlogSection {
  h2: string;
  parrafos?: string[];
  lista?: string[];
  subsecciones?: { h3: string; parrafos?: string[]; lista?: string[] }[];
}

export interface BlogFaq {
  pregunta: string;
  respuesta: string;
}

export interface BlogPostData {
  slug: string;
  titulo: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  autor: string;
  autorSlug: string;
  matricula: string;
  fechaPublicacion: string;
  fechaModificacion: string;
  categoria: string;
  tiempoLectura: number;
  sections: BlogSection[];
  faqs: BlogFaq[];
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    slug: 'que-hacer-despues-de-un-accidente-laboral',
    titulo: 'Qué hacer en las primeras 48 horas después de un accidente laboral',
    metaTitle: 'Qué hacer después de un accidente laboral | Primeras 48 horas | Capeletti',
    metaDescription: 'Los primeros pasos después de un accidente laboral son cruciales para el reclamo. Guía completa: qué hacer, qué documentar y qué errores evitar.',
    excerpt: 'Los primeros pasos después de un accidente laboral son cruciales para el éxito del reclamo. Te explicamos qué hacer y qué evitar.',
    autor: 'Bruno Capeletti',
    autorSlug: 'bruno-capeletti',
    matricula: 'C.S.J.S.F. T° XVI F° 48',
    fechaPublicacion: '2025-03-15',
    fechaModificacion: '2026-01-10',
    categoria: 'Accidentes Laborales',
    tiempoLectura: 5,
    sections: [
      {
        h2: 'Por qué las primeras horas son determinantes',
        parrafos: [
          'Cuando ocurre un accidente laboral, el reloj empieza a correr en contra del trabajador. Las ART tienen equipos entrenados para reducir al mínimo su responsabilidad. Cada hora que pasa sin una denuncia formal, sin atención médica documentada o sin testigos identificados, debilita el reclamo.',
          'La gran mayoría de los reclamos que se pierden tienen un denominador común: el trabajador tardó en actuar o cometió errores evitables en las primeras horas. Esta guía te muestra qué hacer paso a paso.',
        ],
      },
      {
        h2: 'Paso 1: Notificá al empleador de inmediato',
        parrafos: [
          'El empleador tiene la obligación legal de denunciar el accidente ante la ART dentro de las 24 horas. Si no lo hace, vos podés hacerlo directamente. Lo importante es que quede registrada la fecha y hora exacta del accidente.',
          'Si el empleador no quiere hacer la denuncia o minimiza el hecho, reclamala por escrito y conservá el comprobante. Nunca firmes que "el accidente ocurrió fuera del trabajo" si no fue así.',
        ],
        lista: [
          'Notificá al supervisor o encargado en el momento',
          'Pedí que se registre en el libro de accidentes de la empresa',
          'Si hay testigos, anotá sus nombres y teléfonos',
          'Sacá fotos del lugar del accidente y de las condiciones que lo causaron',
        ],
      },
      {
        h2: 'Paso 2: Atención médica a través de la ART',
        parrafos: [
          'Una vez hecha la denuncia, la ART tiene la obligación de brindarte atención médica gratuita. No vayas a un médico particular de urgencia sin pasar antes por el prestador de la ART, salvo que sea una emergencia con riesgo de vida.',
          'Si la situación es de urgencia, andá al hospital o guardia más cercana y conservá toda la documentación médica. Luego, dentro de las 24-48 horas, informá a la ART para que reconozca los gastos.',
        ],
        lista: [
          'Conservá todos los estudios, placas y diagnósticos',
          'Pedí copia firmada de cada consulta médica',
          'No firmes el alta médica hasta estar completamente recuperado o haber consultado con un abogado',
          'Guardá los recibos de farmacia, traslados y todo gasto relacionado',
        ],
      },
      {
        h2: 'Paso 3: Documentá todo desde el primer momento',
        parrafos: [
          'La documentación es la diferencia entre ganar o perder un reclamo. Google no te va a ayudar a recordar la fecha exacta del accidente, los síntomas iniciales o qué te dijo el médico de la ART. Todo lo que no esté escrito, no existió.',
        ],
        subsecciones: [
          {
            h3: 'Qué documentar del accidente',
            lista: [
              'Fecha, hora y lugar exacto del accidente',
              'Descripción detallada de lo que pasó',
              'Partes del cuerpo afectadas y síntomas inmediatos',
              'Nombres y contactos de testigos presenciales',
              'Condiciones de seguridad (o falta de ellas) en el lugar',
            ],
          },
          {
            h3: 'Qué documentar de la atención médica',
            lista: [
              'Diagnóstico inicial y estudios realizados',
              'Tratamiento indicado y medicamentos recetados',
              'Nombre y matrícula de cada médico que te atendió',
              'Fechas de cada consulta y resultado',
            ],
          },
        ],
      },
      {
        h2: 'Errores que pueden perjudicar tu reclamo',
        lista: [
          'Firmar el alta médica antes de estar recuperado sin consultar',
          'No hacer la denuncia formal por "no querer problemas" con el empleador',
          'Ir solo a la Comisión Médica sin asesoramiento legal',
          'Aceptar la primera oferta de la ART sin verificar si es correcta',
          'Esperar semanas antes de buscar un abogado especialista',
          'No guardar los recibos de sueldo de los últimos 12 meses',
        ],
      },
      {
        h2: 'Cuándo buscar un abogado',
        parrafos: [
          'No esperés a que la ART te diga que tu caso está cerrado. Consultá con un abogado especialista en riesgos del trabajo desde el momento en que recibís el alta médica o cuando empezás a notar que la ART minimiza tu lesión.',
          'En Capeletti Abogados atendemos consultas gratuitas y sin anticipo. Si no ganás, no pagás honorarios. Cuanto antes consultes, más herramientas tenemos para defender tu caso.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué pasa si el empleador no quiere hacer la denuncia?',
        respuesta: 'Podés denunciar el accidente vos mismo directamente ante la ART o la SRT. Guardá constancia de que intentaste hacerlo a través del empleador. Ante negativa, un abogado puede notificar formalmente al empleador y la aseguradora.',
      },
      {
        pregunta: '¿Tengo que ir a la guardia de la ART aunque haya ido al hospital?',
        respuesta: 'En casos de emergencia real lo más importante es la atención inmediata. Una vez estabilizado, notificá a la ART dentro de las 24-48 horas para que reconozca los gastos. Llevá toda la documentación del hospital.',
      },
      {
        pregunta: '¿Puedo trabajar mientras la ART me da el alta?',
        respuesta: 'Mientras estés bajo tratamiento de la ART tenés derecho a no trabajar y cobrar la prestación de ILT (Incapacidad Laboral Temporaria). Si tu empleador te presiona para volver antes del alta, consultá con un abogado.',
      },
      {
        pregunta: '¿Cuánto tiempo tengo para reclamar?',
        respuesta: 'El plazo de prescripción es de 2 años desde el accidente o desde que el trabajador tomó conocimiento de la enfermedad profesional. Sin embargo, cuanto antes actuás, más sólido es el reclamo.',
      },
    ],
  },
  {
    slug: 'como-calcular-indemnizacion-art',
    titulo: 'Cómo se calcula la indemnización por accidente laboral en 2026',
    metaTitle: 'Cómo calcular indemnización ART 2026 | Fórmula y ejemplos | Capeletti',
    metaDescription: 'Calculá tu indemnización por accidente laboral en 2026. Fórmula legal, IBM, RIPTE, tabla de incapacidades y ejemplos reales actualizados.',
    excerpt: 'La fórmula legal para calcular la indemnización de la ART depende del salario, la edad y el porcentaje de incapacidad. Te la explicamos paso a paso.',
    autor: 'Bruno Capeletti',
    autorSlug: 'bruno-capeletti',
    matricula: 'C.S.J.S.F. T° XVI F° 48',
    fechaPublicacion: '2025-04-01',
    fechaModificacion: '2026-02-15',
    categoria: 'Indemnizaciones',
    tiempoLectura: 7,
    sections: [
      {
        h2: 'La fórmula legal de la Ley 24.557',
        parrafos: [
          'La Ley de Riesgos del Trabajo establece una fórmula matemática para calcular la indemnización por incapacidad permanente parcial o total:',
          'Indemnización = 53 × IBM × (65 / edad) × porcentaje de incapacidad',
          'Donde IBM es el Ingreso Base Mensual: el promedio de las remuneraciones brutas del trabajador durante los 12 meses anteriores al accidente. Si el trabajador llevaba menos de 12 meses, se promedia el tiempo trabajado.',
        ],
      },
      {
        h2: 'Qué es el IBM y cómo se calcula',
        parrafos: [
          'El IBM es el componente más importante de la fórmula porque actúa como multiplicador de todo el cálculo. Incluye sueldo básico, antigüedad, adicionales, horas extras habituales, presentismo y cualquier remuneración que no sea reintegro de gastos.',
          'Las ART frecuentemente calculan el IBM con errores a su favor: excluyen horas extras que eran habituales, no incluyen todos los adicionales del convenio colectivo o toman períodos de salarios bajos. Un abogado especialista revisa que el IBM sea correcto.',
        ],
        lista: [
          'Incluye: sueldo básico, antigüedad, adicionales por convenio',
          'Incluye: horas extras habituales (no esporádicas)',
          'Incluye: presentismo, productividad, viáticos habituales',
          'Excluye: gastos de movilidad reales, sumas no remunerativas específicas',
        ],
      },
      {
        h2: 'El coeficiente de edad y su impacto',
        parrafos: [
          'El factor (65 / edad) representa los años de vida laboral que le quedan al trabajador. A menor edad, mayor es el coeficiente y mayor la indemnización, porque se presume que el trabajador sufrirá las consecuencias de la incapacidad por más años.',
        ],
        subsecciones: [
          {
            h3: 'Ejemplos del coeficiente por edad',
            lista: [
              'Trabajador de 25 años: coeficiente 2,60',
              'Trabajador de 35 años: coeficiente 1,86',
              'Trabajador de 45 años: coeficiente 1,44',
              'Trabajador de 55 años: coeficiente 1,18',
            ],
          },
        ],
      },
      {
        h2: 'Tabla de porcentajes de incapacidad frecuentes en 2026',
        parrafos: [
          'El porcentaje de incapacidad lo determina la Comisión Médica aplicando el Baremo del Decreto 659/96 y el nuevo baremo 2026 para hernias de disco y algunas lesiones específicas. Estos son los rangos más habituales:',
        ],
        lista: [
          'Hernia de disco lumbar (L4-L5 o L5-S1): 8% a 20% según operación y secuelas',
          'Lesión de manguito rotador: 10% a 25% según rotura y limitación funcional',
          'Síndrome del túnel carpiano: 5% a 15% bilateral',
          'Lesión meniscal operada: 7% a 18% según menisco y secuela',
          'Fractura de muñeca con secuelas: 5% a 12%',
          'Hipoacusia laboral bilateral: 10% a 30% según grado',
          'Accidente in itinere con fractura vertebral: 20% a 50%',
        ],
      },
      {
        h2: 'Ejemplos de cálculo real en 2026',
        subsecciones: [
          {
            h3: 'Caso 1: obrero metalúrgico en Rafaela',
            parrafos: [
              'Edad: 38 años — Salario IBM: $1.200.000 — Incapacidad: 15% (hernia lumbar operada)',
              'Cálculo: 53 × $1.200.000 × (65/38) × 0,15 = aproximadamente $16.300.000',
            ],
          },
          {
            h3: 'Caso 2: trabajador de construcción en Rosario',
            parrafos: [
              'Edad: 45 años — Salario IBM: $900.000 — Incapacidad: 25% (fractura de rodilla + menisco)',
              'Cálculo: 53 × $900.000 × (65/45) × 0,25 = aproximadamente $17.200.000',
            ],
          },
          {
            h3: 'Caso 3: pescador en Mar del Plata',
            parrafos: [
              'Edad: 32 años — Salario IBM: $800.000 — Incapacidad: 20% (amputación parcial de dedo + hipoacusia)',
              'Cálculo: 53 × $800.000 × (65/32) × 0,20 = aproximadamente $17.225.000',
            ],
          },
        ],
      },
      {
        h2: 'Por qué los montos reales son frecuentemente mayores',
        parrafos: [
          'Los ejemplos anteriores son sobre la base del sistema ART. Cuando el trabajador impugna la incapacidad ante la justicia, un perito médico independiente suele reconocer porcentajes más altos. Además, la acumulación de incapacidades por lesiones múltiples puede generar aumentos significativos.',
          'En juicio también se pueden reclamar prestaciones que la ART no reconoció: gastos médicos no cubiertos, tratamientos rechazados, ILT mal calculada y, en casos con culpa del empleador, daños civiles adicionales.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué pasa si la ART me ofrece una suma y yo no estoy de acuerdo?',
        respuesta: 'Podés impugnar el porcentaje de incapacidad ante la Comisión Médica. Si el dictamen sigue siendo insuficiente, la alternativa es la demanda judicial donde un perito médico independiente evalúa tu caso. En muchos casos los juicios multiplican el monto entre 3 y 6 veces.',
      },
      {
        pregunta: '¿El monto se actualiza con la inflación?',
        respuesta: 'Sí, el IBM se actualiza con el RIPTE (Remuneración Imponible Promedio de los Trabajadores Estables) que publica la Secretaría de Seguridad Social. Por eso es importante no demorar el reclamo: cuanto antes se inicia, mejor protegido está el valor real del IBM.',
      },
      {
        pregunta: '¿Cuánto cobra el abogado?',
        respuesta: 'Los honorarios se calculan sobre el monto cobrado. Si no se gana, no se paga. No hay anticipo ni costo inicial. Consultá sin cargo y te informamos el porcentaje exacto según tu caso.',
      },
      {
        pregunta: '¿La incapacidad del 0% puede cambiarse?',
        respuesta: 'Sí. La incapacidad 0% es uno de los resultados más impugnables porque en la mayoría de los casos no refleja la realidad clínica. Con resonancias, electromiografías e informes de especialistas, se puede demostrar la incapacidad real ante la justicia.',
      },
    ],
  },
  {
    slug: 'hernia-de-disco-baremo-2026',
    titulo: 'Hernia de disco laboral y el nuevo baremo 2026',
    metaTitle: 'Hernia de disco laboral y baremo 2026 | Impacto en indemnización | Capeletti',
    metaDescription: 'El nuevo baremo ART 2026 cambió los porcentajes para hernias de disco. Analizamos qué modificó, cómo impacta en tu indemnización y qué podés reclamar.',
    excerpt: 'El nuevo baremo cambió los porcentajes para hernias de disco. Analizamos el impacto para los trabajadores con esta lesión.',
    autor: 'Bruno Capeletti',
    autorSlug: 'bruno-capeletti',
    matricula: 'C.S.J.S.F. T° XVI F° 48',
    fechaPublicacion: '2026-01-10',
    fechaModificacion: '2026-01-10',
    categoria: 'Baremo 2026',
    tiempoLectura: 6,
    sections: [
      {
        h2: 'Qué es el baremo y por qué cambió',
        parrafos: [
          'El baremo es la tabla oficial que usa la SRT para calcular el porcentaje de incapacidad de cada lesión. Está en el Decreto 659/96 y no había sido actualizado significativamente desde entonces. El nuevo baremo de 2026 incorpora cambios en las patologías más frecuentes del sistema laboral, entre ellas las hernias de disco.',
          'El cambio más importante es que ahora se reconoce la diferencia clínica entre una hernia de disco sin síntomas neurológicos y una con compromiso radicular confirmado. Antes, las ART aplicaban porcentajes mínimos en todos los casos.',
        ],
      },
      {
        h2: 'Qué cambió específicamente para hernias de disco',
        subsecciones: [
          {
            h3: 'Hernia lumbar (L4-L5 y L5-S1)',
            parrafos: [
              'Con el baremo anterior: 5% a 10% para hernias sin cirugía, 8% a 15% con cirugía.',
              'Con el nuevo baremo 2026: 8% a 12% sin cirugía con compromiso radicular documentado, 12% a 20% post-quirúrgico con secuela funcional.',
            ],
          },
          {
            h3: 'Hernia cervical (C5-C6 y C6-C7)',
            parrafos: [
              'Con el baremo anterior: 3% a 8% sin compromiso neurológico.',
              'Con el nuevo baremo 2026: 5% a 15% cuando hay electromiografía que confirma compromiso radicular, especialmente en trabajos de precisión manual.',
            ],
          },
          {
            h3: 'Hernias múltiples',
            parrafos: [
              'El nuevo baremo reconoce la combinación de incapacidades cuando hay hernias en más de un nivel vertebral. Antes las ART usaban el nivel más grave y descartaban los demás.',
            ],
          },
        ],
      },
      {
        h2: 'A quién beneficia el nuevo baremo',
        parrafos: [
          'Los trabajadores con accidentes ocurridos desde enero de 2026 aplican directamente el nuevo baremo. Para los que ya tenían un expediente abierto o una incapacidad determinada, la situación es más compleja.',
        ],
        lista: [
          'Accidentes post enero 2026: aplican el nuevo baremo en la Comisión Médica',
          'Expedientes en proceso sin resolución final: pueden solicitar aplicación del nuevo baremo',
          'Incapacidades ya cerradas: en general no retroactivo, pero hay excepciones judiciales',
          'Casos en juicio: el perito médico puede aplicar el baremo más favorable al trabajador',
        ],
      },
      {
        h2: 'Cómo impacta en el monto de la indemnización',
        parrafos: [
          'Un aumento de 5 puntos porcentuales en la incapacidad puede significar millones de pesos de diferencia en la indemnización final.',
        ],
        subsecciones: [
          {
            h3: 'Ejemplo comparativo',
            parrafos: [
              'Trabajador de 40 años, IBM de $1.000.000, hernia L4-L5 post-quirúrgica.',
              'Baremo anterior (10%): 53 × $1.000.000 × 1,625 × 0,10 = $8.612.500',
              'Baremo 2026 (18%): 53 × $1.000.000 × 1,625 × 0,18 = $15.502.500',
              'Diferencia: +$6.890.000 por el mismo trabajador con la misma lesión.',
            ],
          },
        ],
      },
      {
        h2: 'Qué hacer si la ART sigue aplicando el baremo viejo',
        parrafos: [
          'Algunas ART intentan aplicar el baremo anterior para los casos en transición. Esto es impugnable ante la Comisión Médica y, si persiste el criterio incorrecto, ante la justicia laboral.',
          'Si tenés una hernia de disco laboral documentada y la ART determinó un porcentaje que no refleja tu situación real, es fundamental consultarlo con un especialista antes de aceptar cualquier liquidación.',
        ],
        lista: [
          'Impugnar ante la Comisión Médica indicando que se aplique el baremo 2026',
          'Presentar resonancia magnética actualizada con informe de neurocirujano o traumatólogo',
          'Si la CM mantiene el criterio incorrecto, apelar ante la justicia laboral',
          'El juez puede ordenar aplicar el baremo más favorable al trabajador',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿El nuevo baremo aplica automáticamente a mi caso?',
        respuesta: 'Para accidentes ocurridos desde enero de 2026, sí. Para casos anteriores depende del estado del expediente. Si todavía no hay resolución de la Comisión Médica, es posible solicitar la aplicación del nuevo baremo. Consultá con un especialista.',
      },
      {
        pregunta: '¿Qué estudios necesito para demostrar la hernia?',
        respuesta: 'La resonancia magnética lumbar o cervical es el estudio principal. Para demostrar compromiso neurológico se agrega una electromiografía. El informe de un traumatólogo o neurocirujano especialista refuerza significativamente el reclamo.',
      },
      {
        pregunta: '¿La hernia de disco puede ser una enfermedad profesional?',
        respuesta: 'Sí, cuando se demuestra que las tareas laborales fueron la causa determinante o agravante. Trabajos con carga de peso, vibraciones, posturas forzadas o movimientos repetitivos de columna son los más frecuentes. Requiere demostración de la relación causal.',
      },
      {
        pregunta: '¿Puedo reclamar aunque ya me dieron el alta?',
        respuesta: 'Si recibiste el alta pero seguís con dolor, limitación funcional o necesitás nuevo tratamiento, podés iniciar una divergencia médica ante la SRT. El plazo de prescripción de 2 años corre desde el alta definitiva.',
      },
    ],
  },
];
