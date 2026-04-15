import { AbogadoData } from '../models/interfaces';

export const ABOGADOS_DATA: AbogadoData[] = [
  {
    slug: 'bruno-capeletti',
    nombre: 'Bruno',
    apellido: 'Capeletti',
    titulo: 'Abogado — Especialista en Accidentes Laborales y ART',
    matricula: 'C.S.J.S.F. T° XVI F° 48',
    universidad: 'Universidad Nacional del Litoral (UNL)',
    especializaciones: [
      'Derecho del Trabajo',
      'Riesgos del Trabajo (ART)',
      'Litigación en Comisiones Médicas',
      'Enfermedades Profesionales',
      'Accidentes In Itinere',
    ],
    biografia: `Bruno Capeletti es el fundador y principal abogado del estudio. Con más de 12 años de ejercicio profesional exclusivamente en derecho laboral y riesgos del trabajo, ha representado a más de 7.000 trabajadores en las provincias de Santa Fe, Neuquén, Entre Ríos, Río Negro y Buenos Aires.

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
    slug: 'valeria-mendez',
    nombre: 'Valeria',
    apellido: 'Méndez',
    titulo: 'Abogada — Especialista en ART y Enfermedades Profesionales',
    matricula: 'C.A.N. T° 90 F° 211',
    universidad: 'Universidad de Buenos Aires (UBA)',
    especializaciones: [
      'Enfermedades Profesionales',
      'Hipoacusia Laboral',
      'Síndrome del Túnel Carpiano',
      'Accidentes In Itinere',
      'Reclamos ante Comisión Médica Central',
    ],
    biografia: `Valeria Méndez se incorporó al estudio Capeletti en 2018. Especialista en enfermedades profesionales, es la referente del equipo para los casos de hipoacusia laboral, enfermedades respiratorias y patologías por movimientos repetitivos.

Egresada de la UBA con posgrado en Derecho del Trabajo, tiene amplia experiencia en litigios ante la Justicia Nacional del Trabajo en CABA y Buenos Aires.`,
    foto: '/assets/team/valeria-mendez.webp',
    provinciasFoco: ['Buenos Aires', 'CABA'],
    casosEspeciales: [
      'Hipoacusia bilateral en trabajadores de metalurgia',
      'Enfermedades respiratorias en minería',
      'Patologías por estrés laboral',
    ],
  },
  {
    slug: 'martin-suarez',
    nombre: 'Martín',
    apellido: 'Suárez',
    titulo: 'Abogado — Especialista en Accidentes Laborales Patagonia',
    matricula: 'C.A.N. T° 78 F° 144',
    universidad: 'Universidad Nacional del Comahue',
    especializaciones: [
      'Accidentes en Construcción',
      'Accidentes en Industria Petrolera',
      'Reclamos en Neuquén y Río Negro',
      'Gran Invalidez',
      'Fallecimientos Laborales',
    ],
    biografia: `Martín Suárez lidera la oficina de Neuquén del estudio. Especialista en accidentes de la industria petrolera y de la construcción en la región patagónica, cuenta con amplio conocimiento de la Comisión Médica local de Neuquén y los tribunales laborales de la región.

Egresado de la Universidad del Comahue, tiene más de 8 años de experiencia en casos de alta complejidad en la región patagónica.`,
    foto: '/assets/team/martin-suarez.webp',
    provinciasFoco: ['Neuquén', 'Río Negro'],
    casosEspeciales: [
      'Accidentes en pozos petroleros',
      'Lesiones graves en construcción de infraestructura',
      'Fallecimientos en la industria hidrocarburífera',
    ],
  },
];
