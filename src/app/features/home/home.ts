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
      gradFrom: '#002b7b', gradTo: '#045fc3',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&crop=face',
    },
    {
      nombre: 'Dra. Valeria Méndez',
      cargo: 'Socia Senior',
      especialidad: 'Comisiones Médicas',
      gradFrom: '#023660', gradTo: '#002b7b',
      img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&q=80&auto=format&fit=crop&crop=face',
    },
    {
      nombre: 'Dr. Martín Suárez',
      cargo: 'Abogado Asociado',
      especialidad: 'Reclamos contra la ART',
      gradFrom: '#045fc3', gradTo: '#339aff',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&crop=face',
    },
    {
      nombre: 'Dra. Laura Pinto',
      cargo: 'Abogada Asociada',
      especialidad: 'Enfermedades Profesionales',
      gradFrom: '#00378a', gradTo: '#045fc3',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&crop=face',
    },
  ];

  readonly heroStats = [
    { value: '+10', label: 'Años de experiencia' },
    { value: '+7.000', label: 'Casos ganados' },
    { value: '+12.500', label: 'Clientes satisfechos' },
    { value: '5', label: 'Provincias' },
  ];

  readonly activeLesion = signal(0);

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
    'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=600&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop',
  ];

  readonly provinciaStats = [
    { valor: '5', label: 'Provincias cubiertas' },
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
      nombre: 'Gustavo R.',
      lesion: 'Hernia de disco L4-L5',
      provincia: 'Rosario, Santa Fe',
      texto: 'La ART me ofreció $3M. Con Capeletti cobramos $18.5M. No tenía ni idea de que podía reclamar tanto. Los recomiendo sin dudar.',
      anio: 2024,
    },
    {
      nombre: 'Mirta L.',
      lesion: 'Síndrome de Túnel Carpiano',
      provincia: 'Entre Ríos',
      texto: 'Trabajé 15 años como cajera y desarrollé el túnel carpiano. Nadie me decía que era una enfermedad laboral. El estudio me lo explicó todo y ganamos el caso.',
      anio: 2024,
    },
    {
      nombre: 'Familia de Carlos M.',
      lesion: 'Fallecimiento en obra',
      provincia: 'Neuquén',
      texto: 'Perdimos a Carlos en un accidente en obra. El estudio Capeletti nos acompañó en todo el proceso y logró que la empresa y la ART respondan. Infinitamente agradecidos.',
      anio: 2023,
    },
    {
      nombre: 'Rubén T.',
      lesion: 'Accidente in itinere — fractura fémur',
      provincia: 'Buenos Aires',
      texto: 'La ART rechazó mi accidente diciendo que me había "desviado" del camino. Los abogados revirtieron el rechazo y cobramos más de lo esperado.',
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
      titulo: 'Presencia real en 5 provincias',
      descripcion: 'Santa Fe, Neuquén, Río Negro, Entre Ríos y Buenos Aires. Abogados locales que conocen cada jurisdicción.',
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
    this.activeLesion.update(i => (i + 1) % this.lesiones.length);
  }

  setActiveLesion(i: number): void {
    this.activeLesion.set(i);
    clearInterval(this.lesionInterval);
    this.lesionInterval = setInterval(() => this.nextLesion(), this.lesionDuration);
  }

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
