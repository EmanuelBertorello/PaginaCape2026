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
  private slideInterval?: ReturnType<typeof setInterval>;
  private lesionInterval?: ReturnType<typeof setInterval>;
  readonly lesionDuration = 5000;

  readonly currentSlide = signal(0);

  readonly heroSlides = [
    {
      label: 'Accidentes Laborales',
      img: 'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=1600&q=80&auto=format&fit=crop',
    },
    {
      label: 'Reclamos contra la ART',
      img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80&auto=format&fit=crop',
    },
    {
      label: 'Defensa Laboral',
      img: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1600&q=80&auto=format&fit=crop',
    },
  ];

  goToSlide(i: number): void { this.currentSlide.set(i); }

  prevSlide(): void { this.currentSlide.update(i => (i - 1 + this.heroSlides.length) % this.heroSlides.length); }

  nextSlide(): void { this.currentSlide.update(i => (i + 1) % this.heroSlides.length); }

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
      cargo: 'Responsable Área Ejecutiva',
      especialidad: 'Gestión y Administración',
      bio: 'Coordina la operación integral del estudio. Garantiza que cada expediente avance en tiempo y forma, y es el nexo entre los clientes y el equipo legal.',
      gradFrom: '#065f46', gradTo: '#059669',
      img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&q=80&auto=format&fit=crop&crop=face',
    },
    {
      nombre: 'Dr. Laureano Bamonde',
      cargo: 'Abogado Laboral',
      especialidad: 'Derecho Laboral',
      bio: 'Abogado litigante con sólida experiencia en juicios laborales. Maneja casos de accidentes de trabajo, enfermedades profesionales e incapacidades ante la justicia.',
      gradFrom: '#023660', gradTo: '#045fc3',
      img: '/laureano.png',
    },
    {
      nombre: 'Dr. Julián Casalli',
      cargo: 'Abogado Laboral y Previsional',
      especialidad: 'Laboral y Previsional',
      bio: 'Especializado en derecho laboral y previsional. Asesora en jubilaciones, pensiones por invalidez laboral y reclamos ante ANSES vinculados a accidentes de trabajo.',
      gradFrom: '#1e3a5f', gradTo: '#2563eb',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&crop=face',
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

  readonly lesionFotos = [
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=800&q=80&auto=format&fit=crop',
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
    },
    {
      nombre: 'Ezequiel G.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Mi experiencia con el estudio Capeletti fue muy profesional, todo el equipo me trató espectacular durante todo el proceso. Me garantizaron seguridad y compromiso. ¡Recomiendo trabajar con ellos!',
      anio: 2024,
    },
    {
      nombre: 'Lucas S.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Gracias Bruno y todo su cuerpo de trabajo, la verdad. Excelente como se comprometieron conmigo y muy buena atención.',
      anio: 2024,
    },
    {
      nombre: 'Ivan A.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Leo Capeletti excelente abogado, muy profesional y atento. Siempre me explicó todo con claridad, estuvo disponible cuando lo necesité y resolvió mi caso de manera rápida. Lo recomiendo al 100%.',
      anio: 2024,
    },
    {
      nombre: 'Lucas D.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Durante todo el proceso se bancan cada consulta y te dan detalles del avance. Unos genios. Espero no necesitarlos, pero si necesito un estudio de abogados no dudaré en llamarlos.',
      anio: 2025,
    },
    {
      nombre: 'Lorena C.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Quiero darle las gracias al estudio Capeletti por tanta dedicación y profesionalismo en mi caso. Darle las gracias en especial a Leila por su paciencia y por estar cada vez que la necesité.',
      anio: 2024,
    },
    {
      nombre: 'Alexis D.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Excelente atención. Muy atentos y siempre a disposición. ¡Leilen una genia! Siempre sacándonos todas las dudas. Mil gracias.',
      anio: 2024,
    },
    {
      nombre: 'Braian M.',
      lesion: 'Denuncia ART',
      provincia: 'Argentina',
      texto: 'La verdad que el estudio súper recomendable. Me gestionaron mi denuncia por ART y siempre impecable. Especial mención para Lautaro, muy atento con el seguimiento de mi caso y con mucha paciencia para explicar todo.',
      anio: 2024,
    },
    {
      nombre: 'Cristian S.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Estoy muy conforme por lo logrado. Gracias Leilen por brindarme toda tu atención excelente en cada momento.',
      anio: 2024,
    },
    {
      nombre: 'Gonzalo M.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Excelente equipo, todos con muy buena atención y predisposición. Muchas gracias estudio Capeletti.',
      anio: 2024,
    },
    {
      nombre: 'Jonatan G.',
      lesion: 'Reclamo laboral',
      provincia: 'Argentina',
      texto: 'Muy profesionales y muy buena atención. Excelentísimos trabajando, súper recomendables.',
      anio: 2025,
    },
    {
      nombre: 'Roxana M.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Una atención muy profesional, comprometida con el caso, atendiendo dudas y moviéndose rápido. Se ocuparon y preocuparon para poder cobrar lo que la ART decía que no era nada. Muy recomendable.',
      anio: 2024,
    },
    {
      nombre: 'Damian P.',
      lesion: 'Accidente laboral',
      provincia: 'Argentina',
      texto: 'Asistencia en todo momento y mucha predisposición. Gracias.',
      anio: 2025,
    },
    {
      nombre: 'Alan H.',
      lesion: 'Reclamo ART',
      provincia: 'Argentina',
      texto: 'Atención y servicio perfecto, muy responsables, atentos y amables. Super recomendable.',
      anio: 2024,
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

  prevTestimonio(): void { this.activeTestimonio.update(i => (i - 1 + this.testimonios.length) % this.testimonios.length); }
  nextTestimonio(): void { this.activeTestimonio.update(i => (i + 1) % this.testimonios.length); }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
    clearInterval(this.lesionInterval);
  }

  ngOnInit(): void {
    this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    this.lesionInterval = setInterval(() => this.nextLesion(), this.lesionDuration);
    this.seoService.setPage({
      title: 'Abogados Accidentes Laborales y ART',
      description: 'Abogados especialistas en accidentes laborales, ART e indemnizaciones en Santa Fe, Neuquén, Río Negro, Entre Ríos y Buenos Aires. Consulta gratis, sin anticipos, solo cobramos si ganamos.',
      path: '/',
      schema: this.seoService.getLegalServiceSchema(),
    });
  }
}
