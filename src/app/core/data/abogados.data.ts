import { AbogadoData } from '../models/interfaces';

export const ABOGADOS_DATA: AbogadoData[] = [
  {
    slug: 'bruno-capeletti',
    nombre: 'Bruno',
    apellido: 'Capeletti',
    titulo: 'Abogado — Fundador · Especialista en Accidentes Laborales y ART',
    matricula: 'C.S.J.S.F. T° XVI F° 48',
    matriculas: [
      { colegio: 'C.P.A.C.F. (CABA)', numero: 'T° 148 · F° 548' },
      { colegio: 'Colegio de Abogados Pcia. Bs. As.', numero: 'T° XVI · F° 48' },
      { colegio: 'Colegio de la Abogacía de Entre Ríos', numero: 'N° 11664 · FO. 16 · TO. II' },
      { colegio: 'Colegio de Abogados Gral. Roca (Río Negro)', numero: 'N° 6636 · F° 6636 · T° X' },
      { colegio: 'Colegio de Abogados y Procuradores de Neuquén', numero: 'N° 4452 · F° 236 · T° 6' },
      { colegio: 'C.A. 2° Circ. Santa Fe (Rosario)', numero: 'L° XXXVII · F° 257' },
    ],
    universidad: 'Universidad Nacional del Litoral (UNL)',
    especializaciones: [
      'Derecho del Trabajo',
      'Riesgos del Trabajo (ART)',
      'Litigación en Comisiones Médicas',
      'Enfermedades Profesionales',
      'Accidentes In Itinere',
    ],
    biografia: `Bruno Capeletti es el fundador y principal abogado del estudio. Con más de 12 años de ejercicio profesional exclusivamente en derecho laboral y riesgos del trabajo, ha representado a más de 7.000 trabajadores en las provincias de Neuquén, Río Negro, Entre Ríos, Buenos Aires, Santa Fe y CABA.

Egresado de la Universidad Nacional del Litoral, se especializó en el sistema de riesgos del trabajo desde el inicio de su carrera. Cuenta con matrícula activa en seis jurisdicciones: Neuquén, Río Negro, Entre Ríos, Buenos Aires, CABA y Santa Fe, lo que le permite litigar en cada provincia donde el trabajador lo necesite.

Su conocimiento profundo de las Comisiones Médicas locales, los baremos y las estrategias de litigación en toda la región lo posicionan como uno de los referentes en accidentes laborales y ART en el interior del país.

Su filosofía de trabajo: "Cada trabajador lesionado merece ser representado con la misma calidad que una gran empresa. El sistema está hecho para desalentar el reclamo; nuestro trabajo es revertir eso."`,
    foto: '/brunito.png',
    provinciasFoco: ['Neuquén', 'Río Negro', 'Entre Ríos', 'Buenos Aires', 'CABA', 'Santa Fe'],
    casosEspeciales: [
      'Accidentes en pozos petroleros y construcción de infraestructura',
      'Gran invalidez por aplastamiento y lesiones graves',
      'Fallecimientos en industria hidrocarburífera y agropecuaria',
    ],
  },
  {
    slug: 'rocio-bello',
    nombre: 'Rocío',
    apellido: 'Bello',
    titulo: 'Abogada — Especialista en Accidentes Laborales Buenos Aires',
    matricula: 'C.A.B.A. T° 105 F° 318',
    universidad: 'Universidad de Buenos Aires (UBA)',
    especializaciones: [
      'Accidentes Laborales',
      'Reclamos ante ART',
      'Justicia Nacional del Trabajo',
      'Enfermedades Profesionales',
      'Accidentes In Itinere — CABA y GBA',
    ],
    biografia: `Rocío Bello lidera la representación del estudio Capeletti en la provincia y Ciudad de Buenos Aires. Especialista en litigación ante la Justicia Nacional del Trabajo, tiene amplia experiencia en reclamos de trabajadores de todos los sectores productivos bonaerenses.

Egresada de la UBA, trabaja con un equipo consolidado en CABA y el conurbano bonaerense, atendiendo casos de industria, logística, construcción y servicios. Su conocimiento del sistema de ART en el ámbito metropolitano le permite maximizar los resultados para cada trabajador.`,
    foto: '/rocio-bello.jpeg',
    provinciasFoco: ['Buenos Aires', 'CABA'],
    casosEspeciales: [
      'Accidentes en logística y transporte en GBA',
      'Enfermedades profesionales en industria alimentaria',
      'Hipoacusia laboral en metalurgia y construcción',
    ],
  },
  {
    slug: 'daiana-parache',
    nombre: 'Daiana',
    apellido: 'Parache',
    titulo: 'Abogada — Especialista en Accidentes Laborales Santa Fe',
    matricula: 'C.S.J.S.F. T° XXI F° 92',
    universidad: 'Universidad Nacional del Litoral (UNL)',
    especializaciones: [
      'Accidentes Laborales — Santa Fe',
      'Reclamos ante Comisiones Médicas',
      'Enfermedades Profesionales',
      'Alta Médica e Impugnaciones',
      'Reclamos ART en Agroindustria',
    ],
    biografia: `Daiana Parache es la referente del estudio Capeletti para la provincia de Santa Fe. Con profundo conocimiento de las Comisiones Médicas de Rosario, Santa Fe Capital y Reconquista, representa a trabajadores de la industria, agroindustria y servicios en toda la provincia.

Egresada de la Universidad Nacional del Litoral, se especializó en los procesos ante las CMs santafesinas y la impugnación de altas médicas prematuras. Su trato cercano y dedicación personalizada a cada caso son reconocidos por cientos de trabajadores que pasaron por el estudio.`,
    foto: '/assets/team/daiana-parache.webp',
    provinciasFoco: ['Santa Fe'],
    casosEspeciales: [
      'Hernias de disco en trabajadores de frigoríficos y manufactura',
      'Accidentes en agroindustria y sector agroexportador',
      'Impugnaciones de alta médica prematura ante CM Rosario',
    ],
  },
  {
    slug: 'laureano-bamonde',
    nombre: 'Laureano',
    apellido: 'Bamonde',
    titulo: 'Abogado — Especialista en Accidentes Laborales y Enfermedades Profesionales',
    matricula: 'C.A. 2° Circ. Santa Fe (Rosario)',
    universidad: 'Universidad Nacional de Rosario (UNR)',
    especializaciones: [
      'Accidentes de Trabajo',
      'Enfermedades Profesionales',
      'Reclamos ante ART',
      'Litigación Laboral',
      'Representación en Comisiones Médicas',
    ],
    biografia: `Laureano Bamonde es abogado egresado de la Facultad de Derecho de la Universidad Nacional de Rosario. Especializado en derecho laboral, cuenta con sólida experiencia en accidentes de trabajo y enfermedades profesionales.

Brinda asesoramiento estratégico y representación integral a cada trabajador, con un enfoque orientado a la excelencia, la atención personalizada y la defensa eficaz de los derechos del trabajador en todas las instancias del proceso.`,
    foto: '/laureano.png',
    provinciasFoco: ['Santa Fe', 'Buenos Aires'],
    casosEspeciales: [
      'Accidentes de trabajo con incapacidades parciales y permanentes',
      'Enfermedades profesionales en industria y manufactura',
      'Litigación laboral ante fueros del trabajo',
    ],
  },
  {
    slug: 'julian-casalli',
    nombre: 'Julián',
    apellido: 'Casalli',
    titulo: 'Abogado — Accidentes Laborales, Enfermedades Profesionales y Jubilaciones',
    matricula: 'C.A. 2° Circ. Santa Fe (Rosario) — UNR',
    universidad: 'Universidad Nacional de Rosario (UNR)',
    especializaciones: [
      'Accidentes Laborales',
      'Enfermedades Profesionales',
      'Reclamos ante ART',
      'Jubilaciones y Pensiones',
      'Trámites ante ANSES',
    ],
    biografia: `Julián Casalli es abogado graduado en la Facultad de Derecho de la Universidad Nacional de Rosario. Se dedica principalmente al asesoramiento y trámite de reclamos por accidentes laborales y enfermedades profesionales, acompañando a cada trabajador desde la primera consulta hasta el cobro de la indemnización.

Además de su especialización en derecho laboral, realiza asesoramiento y trámite de jubilaciones y pensiones, incluyendo pensiones por invalidez laboral vinculadas a accidentes de trabajo. Esta doble especialización le permite brindar una cobertura integral al trabajador y su familia en los momentos más críticos.`,
    foto: '/JulianCasalli.png',
    provinciasFoco: ['Santa Fe', 'Rosario'],
    casosEspeciales: [
      'Accidentes laborales con reclamo simultáneo de jubilación por invalidez',
      'Enfermedades profesionales crónicas con afectación previsional',
      'Gestión de pensiones ante ANSES vinculadas a accidentes de trabajo',
    ],
  },
];
