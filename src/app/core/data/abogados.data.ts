import { AbogadoData } from '../models/interfaces';

export const ABOGADOS_DATA: AbogadoData[] = [
  {
    slug: 'bruno-capeletti',
    nombre: 'Bruno',
    apellido: 'Capeletti',
    titulo: 'Abogado — Director del Estudio',
    matricula: 'C.S.J.S.F. T° XVI F° 48',
    universidad: 'Universidad Nacional del Litoral (UNL)',
    especializaciones: [
      'Derecho del Trabajo',
      'Riesgos del Trabajo (ART)',
      'Litigación en Comisiones Médicas',
      'Enfermedades Profesionales',
      'Accidentes In Itinere',
    ],
    biografia: `Bruno Capeletti es el fundador y director del estudio. Con más de 12 años de ejercicio profesional exclusivamente en derecho laboral y riesgos del trabajo, ha representado a más de 7.000 trabajadores en las provincias de Santa Fe, Neuquén, Entre Ríos, Río Negro y Buenos Aires.

Egresado de la Universidad Nacional del Litoral, se especializó en el sistema de riesgos del trabajo desde el inicio de su carrera. Su conocimiento profundo de las Comisiones Médicas locales, los baremos y las estrategias de litigación lo posicionan como uno de los referentes en la materia en el interior del país.

Su filosofía de trabajo: "Cada trabajador lesionado merece ser representado con la misma calidad que una gran empresa. El sistema está hecho para desalentar el reclamo; nuestro trabajo es revertir eso."`,
    foto: '/assets/team/bruno-capeletti.webp',
    provinciasFoco: ['Santa Fe', 'Entre Ríos', 'Buenos Aires'],
    casosEspeciales: [
      'Hernias de disco múltiples con secuelas neurológicas',
      'Fallecimientos por accidentes en obra',
      'Gran invalidez por aplastamiento',
    ],
  },
  {
    slug: 'rocio-bello',
    nombre: 'Rocío',
    apellido: 'Bello',
    titulo: 'Abogada — Especialista en ART y Comisiones Médicas',
    matricula: 'C.S.J.S.F. T° — F° —',
    universidad: 'Universidad Nacional del Litoral (UNL)',
    especializaciones: [
      'Riesgos del Trabajo (ART)',
      'Comisiones Médicas',
      'Impugnación de Alta Médica',
      'Accidentes In Itinere',
      'Enfermedades Profesionales',
    ],
    biografia: `Rocío Bello integra el equipo de Capeletti Abogados desde sus inicios en la práctica del derecho laboral. Es la referente del estudio en el seguimiento de expedientes ante las Comisiones Médicas de Santa Fe y la coordinación de los trámites ante la Superintendencia de Riesgos del Trabajo.

Egresada de la Universidad Nacional del Litoral, se especializó en el procedimiento administrativo ante la SRT y en la defensa de trabajadores en instancias de impugnación de alta médica. Su capacidad de acompañar al cliente en cada etapa del proceso es una de las características más valoradas por los trabajadores que representa.

Tiene amplia experiencia en casos de accidentes in itinere, enfermedades profesionales no reconocidas y revisión de porcentajes de incapacidad fijados incorrectamente por las ART.`,
    foto: '/assets/team/rocio-bello.webp',
    provinciasFoco: ['Santa Fe', 'Entre Ríos'],
    casosEspeciales: [
      'Accidentes in itinere rechazados por supuesta desviación del camino',
      'Impugnaciones de alta médica con secuelas documentadas',
      'Revisión de incapacidades 0% ante Comisión Médica Central',
    ],
  },
  {
    slug: 'daiana-parache',
    nombre: 'Daiana',
    apellido: 'Parache',
    titulo: 'Abogada — Especialista en Litigación Laboral',
    matricula: 'C.S.J.S.F. T° — F° —',
    universidad: 'Universidad Nacional del Litoral (UNL)',
    especializaciones: [
      'Litigación en Juzgados Laborales',
      'Accidentes en Construcción',
      'Hernias de Disco y Lesiones Lumbares',
      'Lesiones de Hombro y Manguito Rotador',
      'Gran Invalidez',
    ],
    biografia: `Daiana Parache es la especialista en litigación del estudio. Su área de trabajo se concentra en la estrategia judicial de los casos que superan la instancia administrativa, representando a trabajadores ante los juzgados laborales de Santa Fe y el resto del país.

Egresada de la Universidad Nacional del Litoral, desarrolló su especialización en accidentes graves de la construcción y la industria. Conoce en profundidad los mecanismos de prueba médica en juicio y la coordinación con peritos independientes.

Su experiencia en casos de alta complejidad —incluyendo gran invalidez y fallecimientos laborales— la posiciona como la referente del estudio para los expedientes judiciales de mayor envergadura.`,
    foto: '/assets/team/daiana-parache.webp',
    provinciasFoco: ['Santa Fe', 'Buenos Aires', 'Neuquén'],
    casosEspeciales: [
      'Accidentes graves en obra con incapacidad total',
      'Hernias de disco múltiples con cirugía y secuelas',
      'Gran invalidez por aplastamiento en industria',
    ],
  },
  {
    slug: 'emanuel-bertorello',
    nombre: 'Emanuel',
    apellido: 'Bertorello',
    titulo: 'Ing. en Seguridad e Higiene Laboral — Perito Técnico',
    matricula: 'CIARPA T° — F° —',
    universidad: 'Universidad Tecnológica Nacional (UTN)',
    especializaciones: [
      'Seguridad e Higiene Laboral',
      'Evaluación de Riesgo en Obra',
      'Pericias Técnicas en Accidentes',
      'Análisis de Causas de Accidentes',
      'Normas IRAM e ISO 45001',
    ],
    biografia: `Emanuel Bertorello es el perito técnico en Seguridad e Higiene del estudio. Su rol es fundamental en los casos donde el accidente laboral involucra deficiencias en las condiciones de seguridad del empleador: falta de equipos de protección, ausencia de capacitación, instalaciones defectuosas o incumplimiento de normas de seguridad.

Egresado de la UTN con especialización en análisis de causas de accidentes laborales, trabaja en coordinación con el equipo de abogados para construir prueba técnica sólida que soporte el reclamo judicial o extrajudicial.

Su intervención temprana en los expedientes permite identificar responsabilidades del empleador más allá de la cobertura estándar de la ART, habilitando la vía civil cuando corresponde y maximizando la indemnización total del trabajador.`,
    foto: '/assets/team/emanuel-bertorello.webp',
    provinciasFoco: ['Santa Fe', 'Entre Ríos', 'Buenos Aires'],
    casosEspeciales: [
      'Accidentes por falta de EPP o capacitación verificable',
      'Análisis de causalidad en accidentes con maquinaria industrial',
      'Pericias técnicas para habilitación de acción civil contra el empleador',
    ],
  },
];
