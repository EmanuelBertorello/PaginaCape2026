import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { AlertBannerComponent } from '../../../shared/components/alert-banner/alert-banner';
import { FaqAccordionComponent } from '../../../shared/components/faq-accordion/faq-accordion';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';
import { FaqItem } from '../../../core/models/interfaces';

@Component({
  selector: 'app-alta-medica',
  standalone: true,
  imports: [BreadcrumbComponent, AlertBannerComponent, FaqAccordionComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alta-medica.html',
})
export class AltaMedicaComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Alta Médica ART', url: '/alta-medica-art' },
  ];

  readonly faqs: FaqItem[] = [
    {
      pregunta: '¿Puedo rechazar el alta médica si no estoy curado?',
      respuesta: 'Sí. Podés presentar una disconformidad ante la Comisión Médica dentro de los 10 días de notificada el alta. Un abogado puede hacer la presentación por vos.',
    },
    {
      pregunta: '¿Qué pasa si firmo el alta médica sin asesoramiento?',
      respuesta: 'Firmar el alta sin asesoramiento puede significar aceptar un porcentaje de incapacidad bajo que no refleja tus secuelas reales. Recomendamos no firmar ningún documento sin consultar antes.',
    },
    {
      pregunta: '¿El alta médica cierra el caso definitivamente?',
      respuesta: 'No necesariamente. El alta abre la etapa de determinación de la incapacidad permanente. Pero si firmaste un acuerdo homologado, ese sí puede ser definitivo. Por eso es clave el asesoramiento previo.',
    },
  ];

  readonly pasos = [
    { numero: 1, titulo: 'No firmés nada', descripcion: 'No firmes el alta ni ningún documento que te presente la ART sin leerlo y consultarlo con un abogado.' },
    { numero: 2, titulo: 'Consultanos dentro de las 48 hs', descripcion: 'El plazo para impugnar es corto. Contactanos de inmediato para evaluar tu situación.' },
    { numero: 3, titulo: 'Presentamos la disconformidad', descripcion: 'Presentamos la disconformidad ante la Comisión Médica local dentro del plazo legal.' },
    { numero: 4, titulo: 'Evaluación médica imparcial', descripcion: 'La CM ordena una nueva evaluación médica para determinar si el alta fue prematura.' },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Alta Médica ART — Qué Hacer y Cómo Impugnarla',
      description: 'La ART te dio el alta médica y no estás curado? Tenés derecho a impugnarla. Abogados especialistas en alta médica ART. Actuá antes de firmar.',
      path: '/alta-medica-art',
      schema: this.seoService.getFaqSchema(this.faqs.map(f => ({ pregunta: f.pregunta, respuesta: f.respuesta }))),
    });
  }
}
