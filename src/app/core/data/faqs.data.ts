import { FaqItem } from '../models/interfaces';

export const FAQS_DATA: FaqItem[] = [
  // === ART GENERAL ===
  {
    pregunta: '¿Qué es la ART y para qué sirve?',
    respuesta: 'La ART (Aseguradora de Riesgos del Trabajo) es la empresa contratada por tu empleador para cubrir accidentes y enfermedades que ocurran durante tu trabajo o en el trayecto hacia él. Si te lesionás en el trabajo, la ART debe cubrir tu tratamiento médico y pagarte una indemnización según la incapacidad resultante.',
    categoria: 'art-general',
  },
  {
    pregunta: '¿Cuánto tiempo tengo para reclamar a la ART?',
    respuesta: 'El plazo para iniciar el reclamo ante la ART es de 2 años desde el accidente o desde que tomaste conocimiento de la enfermedad profesional. Sin embargo, es recomendable iniciar el proceso lo antes posible, ya que la demora puede complicar la acreditación de la relación causal.',
    categoria: 'art-general',
  },
  {
    pregunta: '¿Puedo reclamar a la ART aunque no haya denuncia oficial del accidente?',
    respuesta: 'Sí, en muchos casos es posible reclamar aunque el accidente no haya sido denunciado formalmente por el empleador. Lo importante es contar con evidencia del accidente y la atención médica recibida. Consultanos para evaluar tu caso específico.',
    categoria: 'art-general',
  },
  {
    pregunta: '¿La ART me puede rechazar el siniestro?',
    respuesta: 'Sí, la ART puede rechazar el siniestro si considera que no tiene origen laboral. Ante un rechazo tenés derecho a iniciar el proceso ante la Comisión Médica para impugnar esa decisión. En Capeletti Abogados gestionamos estos rechazos de forma rutinaria con muy buenos resultados.',
    categoria: 'art-general',
  },
  {
    pregunta: '¿Qué pasa si mi empleador no tenía ART?',
    respuesta: 'Si tu empleador no tenía ART —lo cual es ilegal— podés reclamar directamente al empleador por la vía civil. En estos casos los montos de indemnización pueden ser superiores a los del sistema de ART, ya que el empleador no puede ampararse en los límites del sistema.',
    categoria: 'art-general',
  },

  // === INDEMNIZACIONES ===
  {
    pregunta: '¿Cómo se calcula la indemnización por accidente laboral?',
    respuesta: 'La indemnización se calcula principalmente en base a tres factores: el Ingreso Base del trabajador (el promedio de sus últimos 12 meses de remuneración), el porcentaje de incapacidad determinado por la Comisión Médica, y la edad del trabajador al momento del accidente. La fórmula es: 53 × IB × % incapacidad × coeficiente de edad.',
    categoria: 'indemnizaciones',
  },
  {
    pregunta: '¿Puedo reclamar más que lo que ofrece la ART?',
    respuesta: 'En algunos casos sí, especialmente cuando existe culpa del empleador (incumplimiento de normas de seguridad). En esos casos puede iniciarse una acción civil adicional que puede resultar en montos superiores. También es posible impugnar el porcentaje de incapacidad si el dictamen de la Comisión Médica fue insuficiente.',
    categoria: 'indemnizaciones',
  },
  {
    pregunta: '¿La indemnización paga impuestos?',
    respuesta: 'En general, las indemnizaciones por accidentes laborales tienen tratamiento especial en el impuesto a las ganancias. Sin embargo, te recomendamos consultar con un contador para tu caso particular, ya que depende de los montos y tu situación impositiva.',
    categoria: 'indemnizaciones',
  },

  // === COMISIONES MÉDICAS ===
  {
    pregunta: '¿Qué es la Comisión Médica y qué rol cumple?',
    respuesta: 'La Comisión Médica es el organismo dependiente de la SRT (Superintendencia de Riesgos del Trabajo) que determina el porcentaje de incapacidad del trabajador lesionado y resuelve las disputas entre la ART y el trabajador. Es la instancia administrativa obligatoria antes de ir a la justicia.',
    categoria: 'comisiones-medicas',
  },
  {
    pregunta: '¿Puedo llevar abogado a la Comisión Médica?',
    respuesta: 'Sí, tenés derecho a estar representado por un abogado en todas las instancias ante la Comisión Médica. De hecho, recomendamos fuertemente hacerlo, ya que el dictamen de la Comisión Médica es determinante para el monto de la indemnización.',
    categoria: 'comisiones-medicas',
  },
  {
    pregunta: '¿Cuánto tarda el proceso ante la Comisión Médica?',
    respuesta: 'El proceso estándar ante la Comisión Médica demora entre 60 y 90 días desde la presentación de la denuncia. Si la ART rechaza el caso o impugnamos el dictamen, el proceso puede extenderse hasta 6-12 meses.',
    categoria: 'comisiones-medicas',
  },
  {
    pregunta: '¿Qué es la Comisión Médica Central y cuándo se recurre a ella?',
    respuesta: 'La Comisión Médica Central (CCMM) es la instancia de apelación de las resoluciones de las Comisiones Médicas locales. Se recurre a ella cuando no estamos de acuerdo con el porcentaje de incapacidad determinado por la CM local o con la resolución sobre la cobertura de la ART.',
    categoria: 'comisiones-medicas',
  },

  // === ALTA MÉDICA ===
  {
    pregunta: '¿Qué significa el alta médica de la ART?',
    respuesta: 'El alta médica es la resolución de la ART por la que da por finalizado el tratamiento y la Incapacidad Laboral Temporaria (ILT). No significa que estés curado necesariamente, sino que la ART considera que llegaste al máximo del proceso curativo. A partir del alta comienza el proceso para determinar la incapacidad permanente.',
    categoria: 'alta-medica',
  },
  {
    pregunta: '¿Puedo rechazar el alta médica si no estoy curado?',
    respuesta: 'Sí, podés impugnar el alta médica ante la Comisión Médica si considerás que el tratamiento no finalizó o que las secuelas no fueron correctamente evaluadas. Este proceso se llama "disconformidad con el alta" y es un derecho que tenés como trabajador.',
    categoria: 'alta-medica',
  },
  {
    pregunta: '¿Qué pasa si la ART me da el alta médica pero tengo secuelas?',
    respuesta: 'Si después del alta médica quedaron secuelas, estas deben ser evaluadas para determinar el porcentaje de Incapacidad Laboral Permanente (ILP). No firmes el alta sin asesoramiento jurídico porque puede afectar el monto de tu indemnización.',
    categoria: 'alta-medica',
  },

  // === PROCESO Y HONORARIOS ===
  {
    pregunta: '¿Cuánto cobran por el reclamo laboral?',
    respuesta: 'En Capeletti Abogados trabajamos con honorarios a éxito: solo cobramos si ganamos el caso. No hay cargos iniciales ni durante el proceso. Nuestros honorarios son un porcentaje del monto que efectivamente cobrás, lo que alinea nuestros intereses con los tuyos.',
    categoria: 'honorarios',
  },
  {
    pregunta: '¿Tengo que pagar algo si pierdo el caso?',
    respuesta: 'No. Si no ganamos, no cobramos honorarios profesionales. En casos excepcionales donde hay costas judiciales ordenadas en contra, se analiza caso por caso, pero en la mayoría de los reclamos ante Comisiones Médicas no existen esos riesgos.',
    categoria: 'honorarios',
  },
  {
    pregunta: '¿Puedo hacer el reclamo desde cualquier provincia?',
    respuesta: 'Sí. Tenemos presencia en Santa Fe, Neuquén, Río Negro, Entre Ríos y Buenos Aires. El proceso ante la Comisión Médica es local —se tramita en la CM más cercana a tu lugar de trabajo o domicilio— y nuestros abogados conocen cada una de esas sedes.',
    categoria: 'proceso',
  },
  {
    pregunta: '¿Puedo reclamar aunque ya trabajé en otra empresa?',
    respuesta: 'Sí. El reclamo se dirige contra la ART que tenía vigente el seguro al momento del accidente o cuando se manifestó la enfermedad. Aunque ya no trabajes más ahí, el derecho a reclamar se mantiene durante 2 años.',
    categoria: 'proceso',
  },
  {
    pregunta: '¿Qué documentación necesito para iniciar el reclamo?',
    respuesta: 'Para iniciar el reclamo necesitamos: DNI, documentación del accidente (denuncia, parte de guardia o cualquier registro médico), historia clínica de las lesiones, recibos de sueldo si están disponibles, y datos del empleador y la ART. No importa si no tenés todo, te orientamos con lo que tengás.',
    categoria: 'proceso',
  },

  // === LESIONES ESPECÍFICAS ===
  {
    pregunta: '¿La hernia de disco siempre es laboral?',
    respuesta: 'No siempre, pero cuando está relacionada con las tareas que realizabas —levantamiento de cargas, posturas forzadas, movimientos repetitivos o un accidente puntual— existe fundamento para el reclamo laboral. El origen laboral debe ser acreditado con evidencia médica y laboral.',
    categoria: 'lesiones',
  },
  {
    pregunta: '¿Qué pasa si tengo una hernia preexistente y el trabajo la agravó?',
    respuesta: 'La ley protege tanto las lesiones nuevas como las preexistentes agravadas por el trabajo. Si el trabajo agravó una condición que ya tenías, igualmente podés reclamar por el agravamiento. La clave está en documentar correctamente el estado anterior y el estado posterior.',
    categoria: 'lesiones',
  },
  {
    pregunta: '¿Qué es el accidente in itinere y cuándo aplica?',
    respuesta: 'Es el accidente que ocurre en el trayecto directo entre tu domicilio y el lugar de trabajo, o viceversa, sin desvíos injustificados. Aplica siempre que el accidente haya sido en ese trayecto habitual, independientemente del medio de transporte utilizado.',
    categoria: 'lesiones',
  },
  {
    pregunta: '¿La ART me cubre si me accidento en mi auto o moto yendo al trabajo?',
    respuesta: 'Sí, el accidente in itinere en auto o moto está cubierto por la ART. El hecho de usar un vehículo propio no excluye la cobertura. La ART no puede rechazar el siniestro solo por ser con vehículo propio si el trayecto es el habitual entre domicilio y trabajo.',
    categoria: 'lesiones',
  },

  // === NUEVO BAREMO 2026 ===
  {
    pregunta: '¿Qué cambió con el nuevo baremo ART 2026?',
    respuesta: 'El nuevo baremo incorpora nuevas patologías, actualiza los porcentajes de incapacidad para algunas lesiones y modifica el procedimiento de evaluación. Los trabajadores lesionados con el nuevo baremo pueden obtener porcentajes diferentes —a veces mejores— que los anteriores. Consultanos para evaluar el impacto en tu caso.',
    categoria: 'baremo',
  },
  {
    pregunta: '¿El nuevo baremo aplica a lesiones ocurridas antes de 2026?',
    respuesta: 'En principio, el baremo vigente al momento de la consolidación de la lesión es el que aplica. Sin embargo, en casos que aún estén en proceso, puede haber argumentos para solicitar la aplicación del baremo más favorable para el trabajador. Cada caso debe analizarse individualmente.',
    categoria: 'baremo',
  },

  // === TRABAJADORES SIN REGISTRO ===
  {
    pregunta: '¿Puedo reclamar si trabajaba en negro (sin registro)?',
    respuesta: 'Sí. El trabajo no registrado no excluye el derecho a reclamar. Si podés acreditar la relación laboral (testigos, mensajes, comprobantes de pago, etc.), podés reclamar tanto la relación laboral como el accidente. En Capeletti Abogados tenemos experiencia en estos casos.',
    categoria: 'sin-registro',
  },
  {
    pregunta: '¿Qué pasa si me lesioné siendo trabajador temporario o informal?',
    respuesta: 'Los trabajadores informales o temporarios tienen los mismos derechos que cualquier trabajador registrado. El empleador es responsable aunque no haya formalizado la relación laboral. El reclamo puede incluir tanto el reconocimiento del vínculo laboral como la indemnización por el accidente.',
    categoria: 'sin-registro',
  },
];
