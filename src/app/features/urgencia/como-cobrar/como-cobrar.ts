import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-como-cobrar',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './como-cobrar.html',
})
export class ComoCobrarComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Cómo Cobrar la ART', url: '/como-cobrar-la-art' },
  ];

  readonly pasos = [
    { numero: 1, titulo: 'Denuncia del siniestro', descripcion: 'El accidente debe ser denunciado a la ART —por vos o por tu empleador— lo antes posible.' },
    { numero: 2, titulo: 'Atención médica', descripcion: 'La ART cubre el tratamiento médico completo desde la denuncia.' },
    { numero: 3, titulo: 'Alta médica y evaluación', descripcion: 'Al finalizar el tratamiento, la ART emite el alta médica. Ahí comienza la evaluación de incapacidad.' },
    { numero: 4, titulo: 'Comisión Médica', descripcion: 'La CM determina el porcentaje de incapacidad permanente y el tipo de prestación que corresponde.' },
    { numero: 5, titulo: 'Cobro de la indemnización', descripcion: 'Determinada la incapacidad, se calcula la indemnización según la fórmula legal y se gestiona el cobro.' },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Cómo Cobrar la Indemnización ART en 2026 | Capeletti Abogados',
      description: 'Guía completa: cómo cobrar la indemnización ART por accidente laboral. Pasos, plazos, fórmula de cálculo 2026 y qué hacer si la ART no paga. Consulta gratis.',
      path: '/como-cobrar-la-art',
      schema: this.seoService.getFaqSchema([
        { pregunta: '¿Cuánto demora cobrar la indemnización ART?', respuesta: 'Desde la denuncia hasta el cobro puede demorar entre 60 y 180 días dependiendo de la CM y si hay impugnación. Con abogado el proceso es más ágil.' },
        { pregunta: '¿Qué porcentaje cobra el abogado por la ART?', respuesta: 'En Capeletti trabajamos a honorarios a éxito: solo cobramos si ganamos, sin anticipos. El porcentaje se acuerda antes de comenzar.' },
        { pregunta: '¿Puedo cobrar la ART y también hacer un juicio laboral?', respuesta: 'Sí. La indemnización ART y el juicio laboral por daño civil son reclamos complementarios. Podés obtener ambas según el caso.' },
      ]),
    });
  }
}
