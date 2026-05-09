import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-honorarios',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './honorarios.html',
})
export class HonorariosComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Honorarios', url: '/honorarios' },
  ];

  readonly faqs = [
    {
      pregunta: '¿Cuándo tengo que pagar los honorarios?',
      respuesta: 'Solo cuando cobrás la indemnización. Antes de eso no te cobramos absolutamente nada — ni consulta, ni gestión, ni trámites.',
    },
    {
      pregunta: '¿Qué porcentaje cobran?',
      respuesta: 'Los honorarios se consensúan con cada cliente antes de empezar. Se descuentan directamente del monto obtenido al final del reclamo. Si no ganamos, no cobramos.',
    },
    {
      pregunta: '¿Qué pasa si pierdo el caso?',
      respuesta: 'No cobramos nada. El riesgo económico es completamente nuestro. Si el resultado no es favorable, el costo del estudio es cero para vos.',
    },
    {
      pregunta: '¿Hay gastos anticipados o costos iniciales?',
      respuesta: 'No. Cero anticipos. La consulta inicial es gratuita, el análisis del caso es gratuito y todo el proceso se gestiona sin que vos adelantes dinero.',
    },
    {
      pregunta: '¿Funciona para cualquier tipo de accidente laboral?',
      respuesta: 'Sí: accidentes en el trabajo, accidentes in itinere, enfermedades profesionales y reclamos por despido. En todos los casos los honorarios son a éxito.',
    },
  ];

  readonly servicios = [
    'Consulta inicial gratuita',
    'Análisis del caso y viabilidad del reclamo',
    'Gestión ante la ART y la Comisión Médica',
    'Representación en la audiencia de CM',
    'Impugnación del dictamen si es desfavorable',
    'Gestión ante la Comisión Médica Central si es necesario',
    'Reclamo judicial si la vía administrativa no alcanza',
    'Seguimiento hasta el cobro efectivo',
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Honorarios — Sin Costo Anticipado',
      description: 'Capeletti Abogados trabaja con honorarios a éxito. No cobramos nada hasta que vos cobrás tu indemnización. Conocé cómo funciona nuestro sistema de honorarios.',
      path: '/honorarios',
      ogImage: this.seoService.ogImages.honorarios,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'FAQPage',
            mainEntity: this.faqs.map(f => ({
              '@type': 'Question',
              name: f.pregunta,
              acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
            })),
          },
          {
            '@type': 'Service',
            name: 'Representación legal en accidentes laborales y ART',
            provider: {
              '@type': 'LegalService',
              name: 'Capeletti Abogados',
              url: 'https://capelettiabogados.com',
            },
            description: 'Representación legal en reclamos contra la ART e indemnizaciones por accidentes laborales y enfermedades profesionales. Sin costo anticipado — honorarios a éxito.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'ARS',
              description: 'Sin cargo hasta cobrar la indemnización. Honorarios a éxito.',
            },
            areaServed: ['Santa Fe', 'Buenos Aires', 'Neuquén', 'Río Negro', 'Entre Ríos', 'Córdoba'],
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://capelettiabogados.com/' },
              { '@type': 'ListItem', position: 2, name: 'Honorarios', item: 'https://capelettiabogados.com/honorarios' },
            ],
          },
        ],
      },
    });
  }
}
