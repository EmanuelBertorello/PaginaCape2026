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
    titulo: 'Abogada — Especialista en Despidos y Enfermedades Profesionales',
    matricula: 'C.A.B.A. T° 105 F° 318',
    universidad: 'Universidad Nacional de Lomas de Zamora (UNLZ)',
    especializaciones: [
      'Despidos y Extinción del Contrato de Trabajo',
      'Enfermedades Profesionales',
      'Reclamos ante ART',
      'Justicia Nacional del Trabajo',
      'Accidentes Laborales — CABA y GBA',
    ],
    biografia: `Rocío Bello es abogada graduada en la Universidad Nacional de Lomas de Zamora (UNLZ). Su práctica profesional está orientada principalmente a los despidos y a los reclamos derivados de enfermedades profesionales, representando a trabajadores tanto en el ámbito bonaerense como en la Ciudad de Buenos Aires.

Con un enfoque cercano y personalizado, acompaña a cada trabajador desde el inicio del conflicto laboral hasta la resolución definitiva del caso, asegurando la defensa efectiva de sus derechos en todas las instancias del proceso. Su experiencia en la Justicia Nacional del Trabajo le permite actuar con agilidad y precisión en cada expediente.`,
    foto: '/rocio-bello.jpeg',
    provinciasFoco: ['Buenos Aires', 'CABA'],
    casosEspeciales: [
      'Despidos con causa en industria y servicios',
      'Enfermedades profesionales en entornos laborales de alto riesgo',
      'Reclamos por incapacidad ante ART en GBA y CABA',
    ],
  },
  {
    slug: 'daiana-parache',
    nombre: 'Daiana',
    apellido: 'Parache',
    titulo: 'Abogada — Especialista en Accidentes de Trabajo y Enfermedades Profesionales',
    matricula: 'Pcia. de Buenos Aires · Rosario',
    universidad: 'Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)',
    especializaciones: [
      'Accidentes de Trabajo y Enfermedades Profesionales',
      'Reclamos ante ART — Etapa Administrativa y Judicial',
      'Litigación ante Comisiones Médicas',
      'Representación ante Juzgados y Tribunales Laborales',
      'Derecho Laboral — Pcia. de Buenos Aires y Rosario',
    ],
    biografia: `Daiana Giselle Parache es abogada egresada de la Facultad de Derecho de la UNICEN (2019), con amplia experiencia en Derecho Laboral y enfoque exclusivo en Accidentes de Trabajo y Enfermedades Profesionales.

Su práctica profesional se centra en brindar asesoramiento integral y estratégico en reclamos contra Aseguradoras de Riesgos de Trabajo (ART), interviniendo tanto en la etapa administrativa ante las Comisiones Médicas como en la instancia judicial ante los Juzgados y Tribunales Laborales.

Cuenta con matrícula profesional activa en la Provincia de Buenos Aires y en Rosario, brindando asesoramiento jurídico en ambas jurisdicciones. Su labor se distingue por la responsabilidad y el compromiso orientados a la defensa efectiva de la integridad y los derechos de los trabajadores.`,
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
    biografia: `Laureano Bamonde es abogado egresado de la Facultad de Derecho de la Universidad Nacional de Rosario. Especializado en derecho laboral, cuenta con sólida experiencia en la representación de trabajadores afectados por accidentes de trabajo y enfermedades profesionales.

Brinda asesoramiento estratégico y representación integral en cada caso, con un enfoque orientado a la excelencia, la atención personalizada y la defensa eficaz de los derechos del trabajador en todas las instancias del proceso — desde la denuncia del siniestro hasta el cobro de la indemnización.`,
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

Además de su especialización en derecho laboral, realiza asesoramiento y trámite de jubilaciones y pensiones, incluyendo pensiones por invalidez laboral vinculadas a accidentes de trabajo. Esta doble especialización le permite brindar una cobertura integral al trabajador y su familia en los momentos más difíciles, abordando tanto el reclamo indemnizatorio como la cobertura previsional que puede corresponder.`,
    foto: '/JulianCasalli.png',
    provinciasFoco: ['Santa Fe', 'Rosario'],
    casosEspeciales: [
      'Accidentes laborales con reclamo simultáneo de jubilación por invalidez',
      'Enfermedades profesionales crónicas con afectación previsional',
      'Gestión de pensiones ante ANSES vinculadas a accidentes de trabajo',
    ],
  },
];
