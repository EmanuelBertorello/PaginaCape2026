import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { SeoService } from '../../core/services/seo.service';
import { LESIONES_DATA } from '../../core/data/lesiones.data';
import { PROVINCIAS_DATA } from '../../core/data/ciudades.data';
import { FAQS_DATA } from '../../core/data/faqs.data';
import { RESULTADOS_DATA } from '../../core/data/resultados.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    FaqAccordionComponent,
    ContactFormComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly seoService = inject(SeoService);
  private lesionInterval?: ReturnType<typeof setInterval>;
  readonly lesionDuration = 5000;

  readonly activeTeamCard = signal(0);

  readonly teamAbogados = [
    {
      nombre: 'Dr. Bruno Capeletti',
      cargo: 'Socio Fundador',
      especialidad: 'Accidentes Laborales y ART',
      bio: 'Fundador del estudio. Más de 10 años dedicados exclusivamente al derecho laboral y los reclamos contra la ART. Referente en Comisiones Médicas del litoral.',
      gradFrom: '#002b7b', gradTo: '#045fc3',
      img: '/brunito.png',
    },
    {
      nombre: 'Dra. Rocío Bello',
      cargo: 'Abogada Asociada',
      especialidad: 'ART y Despidos',
      bio: 'Especialista en reclamos ante la ART y en despidos con causa. Acompaña a cada trabajador desde la denuncia del accidente hasta el cobro de la indemnización.',
      gradFrom: '#7c2d12', gradTo: '#b45309',
      img: '/rocio-bello.jpeg',
    },
    {
      nombre: 'Dra. Daiana Parache',
      cargo: 'Abogada — Santa Fe',
      especialidad: 'Accidentes Laborales · Santa Fe',
      bio: 'Referente del estudio en Santa Fe. Con profundo conocimiento de las Comisiones Médicas de Rosario, Santa Fe Capital y Reconquista, representa trabajadores de la industria y agroindustria.',
      gradFrom: '#7B1FA2', gradTo: '#9C27B0',
      img: '/assets/team/daiana-parache.webp',
    },
    {
      nombre: 'Dr. Laureano Bamonde',
      cargo: 'Abogado Laboral',
      especialidad: 'Accidentes de Trabajo · Enfermedades Profesionales',
      bio: 'Egresado de la Facultad de Derecho de la UNR. Especializado en derecho laboral, con sólida experiencia en accidentes de trabajo y enfermedades profesionales. Atención personalizada y defensa eficaz del trabajador.',
      gradFrom: '#023660', gradTo: '#045fc3',
      img: '/laureano.png',
    },
    {
      nombre: 'Dr. Julián Casalli',
      cargo: 'Abogado Laboral y Previsional',
      especialidad: 'Accidentes Laborales · Jubilaciones · ANSES',
      bio: 'Graduado en la Facultad de Derecho de la UNR. Se dedica al asesoramiento en reclamos por accidentes laborales, enfermedades profesionales, jubilaciones y pensiones ante ANSES.',
      gradFrom: '#1e3a5f', gradTo: '#2563eb',
      img: '/JulianCasalli.png',
    },
  ];

  readonly heroStats = [
    { value: '+10', label: 'Años de experiencia' },
    { value: '+7.000', label: 'Casos ganados' },
    { value: '+12.500', label: 'Clientes satisfechos' },
    { value: '6', label: 'Provincias' },
  ];

  readonly activeLesion = signal(0);
  readonly lesionVisible = signal(true);
  readonly activeTestimonio = signal(0);
  readonly testimonioVisible = signal(true);
  private testimonioInterval?: ReturnType<typeof setInterval>;

  readonly lesionFotos = [
    '/assets/lesiones/hernia-de-disco.webp',
    '/assets/lesiones/lumbalgia-laboral.jpg',
    '/assets/lesiones/manguito-rotador.avif',
    '/assets/lesiones/accidente-obra-construccion.webp',
    '/assets/lesiones/fallecimiento-accidente-laboral.jpg',
    '/assets/lesiones/gran-invalidez-laboral.webp',
    '/assets/lesiones/accidente-in-itinere.jpg',
    '/assets/lesiones/lesion-meniscos-laboral.webp',
  ];

  readonly lesionCheckItems = [
    'Consulta y evaluación gratuita',
    'Reclamo formal ante la ART',
    'Trámite ante Comisión Médica',
    'Impugnación de alta médica',
  ];

  readonly provinciaFotos = [
    '/santa-fe-logo.jpg',
    '/nequen.jpg',
    '/rio negro.jpg',
    '/entre rios.jpg',
    '/buenos aires.jpg',
    '/cordoba.jpg',
  ];

  readonly provinciaStats = [
    { valor: '6', label: 'Provincias cubiertas' },
    { valor: '+15', label: 'Ciudades con atención' },
    { valor: '98%', label: 'Tasa de éxito' },
    { valor: '+10', label: 'Años de presencia' },
  ];

  readonly lesiones = LESIONES_DATA.slice(0, 8);
  readonly provincias = PROVINCIAS_DATA;
  readonly faqsHome = FAQS_DATA.filter(f =>
    ['art-general', 'indemnizaciones', 'honorarios'].includes(f.categoria ?? '')
  ).slice(0, 6);
  readonly resultadosDestacados = RESULTADOS_DATA.filter(r => r.destacado);

  readonly testimonios = [
    {
      nombre: 'Emanuel B.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Excelente atención y asesoramiento. Se nota la especialización en accidentes laborales y reclamos contra las ART. Explican todo con claridad, acompañan el proceso y logran resultados favorables. Totalmente recomendables.',
      anio: 2024,
      avatarColor: '#4285F4',
      tiempo: 'hace 8 meses',
    },
    {
      nombre: 'Ezequiel G.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Mi experiencia con el estudio Capeletti fue muy profesional, todo el equipo me trató espectacular durante todo el proceso. Me garantizaron seguridad y compromiso. ¡Recomiendo trabajar con ellos!',
      anio: 2024,
      avatarColor: '#EA4335',
      tiempo: 'hace 6 meses',
    },
    {
      nombre: 'Lucas S.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Gracias Bruno y todo su cuerpo de trabajo, la verdad. Excelente como se comprometieron conmigo y muy buena atención.',
      anio: 2024,
      avatarColor: '#34A853',
      tiempo: 'hace 1 año',
    },
    {
      nombre: 'Ivan A.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Leo Capeletti excelente abogado, muy profesional y atento. Siempre me explicó todo con claridad, estuvo disponible cuando lo necesité y resolvió mi caso de manera rápida. Lo recomiendo al 100%.',
      anio: 2024,
      avatarColor: '#9C27B0',
      tiempo: 'hace 10 meses',
    },
    {
      nombre: 'Lucas D.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Durante todo el proceso se bancan cada consulta y te dan detalles del avance. Unos genios. Espero no necesitarlos, pero si necesito un estudio de abogados no dudaré en llamarlos.',
      anio: 2025,
      avatarColor: '#FF5722',
      tiempo: 'hace 3 meses',
    },
    {
      nombre: 'Lorena C.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Quiero darle las gracias al estudio Capeletti por tanta dedicación y profesionalismo en mi caso. Darle las gracias en especial a Leila por su paciencia y por estar cada vez que la necesité.',
      anio: 2024,
      avatarColor: '#E91E63',
      tiempo: 'hace 11 meses',
    },
    {
      nombre: 'Alexis D.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Excelente atención. Muy atentos y siempre a disposición. ¡Leilen una genia! Siempre sacándonos todas las dudas. Mil gracias.',
      anio: 2024,
      avatarColor: '#00897B',
      tiempo: 'hace 7 meses',
    },
    {
      nombre: 'Braian M.',
      lesion: 'Denuncia ART',
      provincia: 'Argentina',
      texto: 'La verdad que el estudio súper recomendable. Me gestionaron mi denuncia por ART y siempre impecable. Especial mención para Lautaro, muy atento con el seguimiento de mi caso y con mucha paciencia para explicar todo.',
      anio: 2024,
      avatarColor: '#1565C0',
      tiempo: 'hace 9 meses',
    },
    {
      nombre: 'Cristian S.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Estoy muy conforme por lo logrado. Gracias Leilen por brindarme toda tu atención excelente en cada momento.',
      anio: 2024,
      avatarColor: '#6D4C41',
      tiempo: 'hace 1 año',
    },
    {
      nombre: 'Gonzalo M.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Excelente equipo, todos con muy buena atención y predisposición. Muchas gracias estudio Capeletti.',
      anio: 2024,
      avatarColor: '#2E7D32',
      tiempo: 'hace 8 meses',
    },
    {
      nombre: 'Jonatan G.',
      lesion: 'Reclamo laboral',
      provincia: 'Argentina',
      texto: 'Muy profesionales y muy buena atención. Excelentísimos trabajando, súper recomendables.',
      anio: 2025,
      avatarColor: '#F57F17',
      tiempo: 'hace 2 meses',
    },
    {
      nombre: 'Roxana M.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Una atención muy profesional, comprometida con el caso, atendiendo dudas y moviéndose rápido. Se ocuparon y preocuparon para poder cobrar lo que la ART decía que no era nada. Muy recomendable.',
      anio: 2024,
      avatarColor: '#AD1457',
      tiempo: 'hace 1 año',
    },
    {
      nombre: 'Damian P.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Asistencia en todo momento y mucha predisposición. Gracias.',
      anio: 2025,
      avatarColor: '#37474F',
      tiempo: 'hace 4 meses',
    },
    {
      nombre: 'Alan H.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Atención y servicio perfecto, muy responsables, atentos y amables. Super recomendable.',
      anio: 2024,
      avatarColor: '#4527A0',
      tiempo: 'hace 10 meses',
    },
  ];

  readonly ventajas = [
    {
      icono: '⚖️',
      titulo: 'Honorarios a éxito',
      descripcion: 'No cobramos nada hasta que vos cobrás. Sin anticipos, sin gastos ocultos. Si no ganamos, no nos debés nada.',
    },
    {
      icono: '🏥',
      titulo: 'Comisiones Médicas locales',
      descripcion: 'Conocemos personalmente las CMs de Rosario, Santa Fe, Neuquén, Paraná y más. No mandamos el caso a otra ciudad.',
    },
    {
      icono: '📋',
      titulo: 'Solo accidentes laborales',
      descripcion: 'No somos generalistas. El 100% de nuestra práctica es derecho laboral y ART. Eso se traduce en mejores resultados.',
    },
    {
      icono: '⚡',
      titulo: 'Respuesta en 24 horas',
      descripcion: 'Evaluamos tu caso en menos de 24 horas y te decimos si tenés derecho a reclamar, sin rodeos.',
    },
    {
      icono: '🗺️',
      titulo: 'Presencia real en 6 provincias',
      descripcion: 'Santa Fe, Neuquén, Río Negro, Entre Ríos, Buenos Aires y Córdoba. Abogados locales que conocen cada jurisdicción.',
    },
    {
      icono: '🔒',
      titulo: 'Máxima indemnización posible',
      descripcion: 'No aceptamos el primer ofrecimiento de la ART. Sabemos cuándo y cómo impugnar para maximizar tu indemnización.',
    },
  ];

  readonly pasos = [
    { numero: 1, titulo: 'Consulta gratis', descripcion: 'Contanos tu caso. Sin costo, sin compromiso. Evaluamos si tenés derecho a reclamar.' },
    { numero: 2, titulo: 'Analizamos el caso', descripcion: 'Revisamos tu documentación médica y laboral y diseñamos la estrategia óptima.' },
    { numero: 3, titulo: 'Tramitamos ante la ART', descripcion: 'Gestionamos toda la parte administrativa ante la ART y la Comisión Médica por vos.' },
    { numero: 4, titulo: 'Cobrás tu indemnización', descripcion: 'Una vez cobrado, descontamos nuestros honorarios del monto. Sin costo previo.' },
  ];

  readonly garantias = [
    'Sin honorarios anticipados',
    'Consulta confidencial y gratuita',
    'Respuesta en menos de 24 horas',
    'Abogados con matrícula activa en tu provincia',
    'Más de 10 años de experiencia exclusiva en ART',
  ];

  nextLesion(): void {
    this.lesionVisible.set(false);
    setTimeout(() => {
      this.activeLesion.update(i => (i + 1) % this.lesiones.length);
      this.lesionVisible.set(true);
    }, 220);
  }

  setActiveLesion(i: number): void {
    this.lesionVisible.set(false);
    setTimeout(() => {
      this.activeLesion.set(i);
      this.lesionVisible.set(true);
      clearInterval(this.lesionInterval);
      this.lesionInterval = setInterval(() => this.nextLesion(), this.lesionDuration);
    }, 220);
  }

  private changeTestimonio(dir: 1 | -1): void {
    this.testimonioVisible.set(false);
    setTimeout(() => {
      this.activeTestimonio.update(i => (i + dir + this.testimonios.length) % this.testimonios.length);
      this.testimonioVisible.set(true);
      clearInterval(this.testimonioInterval);
      this.testimonioInterval = setInterval(() => this.changeTestimonio(1), 5000);
    }, 220);
  }

  goToTestimonio(i: number): void {
    this.testimonioVisible.set(false);
    setTimeout(() => {
      this.activeTestimonio.set(i);
      this.testimonioVisible.set(true);
      clearInterval(this.testimonioInterval);
      this.testimonioInterval = setInterval(() => this.changeTestimonio(1), 5000);
    }, 220);
  }

  prevTestimonio(): void { this.changeTestimonio(-1); }
  nextTestimonio(): void { this.changeTestimonio(1); }

  ngOnDestroy(): void {
    clearInterval(this.lesionInterval);
    clearInterval(this.testimonioInterval);
  }

  ngOnInit(): void {
    this.lesionInterval = setInterval(() => this.nextLesion(), this.lesionDuration);
    this.testimonioInterval = setInterval(() => this.changeTestimonio(1), 5000);
    this.seoService.setPage({
      title: 'Abogados Accidentes Laborales y ART',
      description: 'Abogados especialistas en accidentes laborales, ART e indemnizaciones en Santa Fe, Neuquén, Río Negro, Entre Ríos y Buenos Aires. Consulta gratis, sin anticipos, solo cobramos si ganamos.',
      path: '/',
      schema: this.seoService.getLegalServiceSchema(),
    });
  }
}
