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
      title: 'Cómo Cobrar la ART — Guía Paso a Paso',
      description: 'Guía completa para cobrar la indemnización de la ART después de un accidente laboral. Pasos, plazos y consejos de abogados especializados.',
      path: '/como-cobrar-la-art',
    });
  }
}
