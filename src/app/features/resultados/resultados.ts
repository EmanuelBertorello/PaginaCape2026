import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';
import { RESULTADOS_DATA } from '../../core/data/resultados.data';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resultados.html',
})
export class ResultadosComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Resultados', url: '/resultados' },
  ];

  readonly resultados = RESULTADOS_DATA;

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Casos Ganados — Resultados de Capeletti Abogados',
      description: 'Conocé los resultados reales de Capeletti Abogados: casos ganados, montos cobrados y tipos de lesiones. Más de 7.000 trabajadores representados exitosamente.',
      path: '/resultados',
      breadcrumbs: this.breadcrumbs,
      schema: this.seoService.getLegalServiceSchema(),
    });
  }
}
