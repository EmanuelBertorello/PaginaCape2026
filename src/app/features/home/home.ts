import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { HeroComponent } from '../../shared/components/hero/hero';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion';
import { LesionCardComponent } from '../../shared/components/lesion-card/lesion-card';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { SeoService } from '../../core/services/seo.service';
import { LESIONES_DATA } from '../../core/data/lesiones.data';
import { PROVINCIAS_DATA } from '../../core/data/ciudades.data';
import { FAQS_DATA } from '../../core/data/faqs.data';
import { RESULTADOS_DATA } from '../../core/data/resultados.data';
import { ABOGADOS_DATA } from '../../core/data/abogados.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    SlicePipe,
    HeroComponent,
    FaqAccordionComponent,
    LesionCardComponent,
    ContactFormComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly lesiones = LESIONES_DATA.slice(0, 8);
  readonly provincias = PROVINCIAS_DATA;
  readonly faqsHome = FAQS_DATA.filter(f =>
    ['art-general', 'indemnizaciones', 'honorarios'].includes(f.categoria ?? '')
  ).slice(0, 6);
  readonly resultadosDestacados = RESULTADOS_DATA.filter(r => r.destacado);
  readonly equipo = ABOGADOS_DATA;

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

  readonly googleReviews = [
    {
      nombre: 'Julian Villagra',
      inicial: 'J',
      color: '#4285F4',
      tiempo: 'hace 1 año',
      texto: 'Excelente servicio.',
      completo: false,
    },
    {
      nombre: 'Héctor Saenz',
      inicial: 'H',
      color: '#9B59B6',
      tiempo: 'hace 1 año',
      texto: 'Gracias doctor, muy amable! 👍',
      completo: false,
      foto: '/assets/reviews/hector-saenz.webp',
    },
    {
      nombre: 'Ezequiel Contreras',
      inicial: 'E',
      color: '#E74C3C',
      tiempo: 'hace 1 año',
      texto: 'Gracias Dr Capeletti, por su buena disposición por explicarme todo y acompañarme.',
      completo: false,
    },
    {
      nombre: 'Matias Lopez',
      inicial: 'M',
      color: '#27AE60',
      tiempo: 'hace 1 año',
      texto: 'La verdad que desde el día uno se preocuparon y ocuparon al 100% de todo y resolvieron muy rápidamente, cumpliendo con creces lo que esperaba. Muy buena atención y servicio.',
      completo: true,
    },
    {
      nombre: 'José Arteaga',
      inicial: 'J',
      color: '#1A5276',
      tiempo: 'hace 1 año',
      texto: 'Excelente servicio, rápido y eficaz. Muchas gracias Leo y a todo el equipo que opera. Gracias por defender nuestros derechos.',
      completo: true,
    },
    {
      nombre: 'Denis Sergio Rene',
      inicial: 'D',
      color: '#8E44AD',
      tiempo: 'hace 1 año',
      texto: 'Buenas, solo quería comentar, agradecer y recomendar a este estudio de abogados. Muchas gracias.',
      completo: false,
    },
    {
      nombre: 'Caamii Juarez',
      inicial: 'C',
      color: '#E67E22',
      tiempo: 'hace 1 año',
      texto: 'Excelente servicio, la volvería a elegir 👏👏',
      completo: false,
    },
    {
      nombre: 'Ian Rodriguez',
      inicial: 'I',
      color: '#C0392B',
      tiempo: 'hace 1 año',
      texto: 'Muy recomendable, excelente atención, muy eficaz, a todo momento pendiente del trámite a realizar, muy profesionales y comprometidos con su trabajo.',
      completo: true,
    },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Abogados Accidentes Laborales y ART',
      description: 'Abogados especialistas en accidentes laborales, ART e indemnizaciones en Santa Fe, Neuquén, Río Negro, Entre Ríos y Buenos Aires. Consulta gratis, sin anticipos, solo cobramos si ganamos.',
      path: '/',
      schema: this.seoService.getLegalServiceSchema(),
    });
  }
}
