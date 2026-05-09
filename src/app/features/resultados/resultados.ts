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
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ItemList',
            name: 'Casos ganados — Capeletti Abogados',
            description: 'Resultados reales de indemnizaciones obtenidas para trabajadores accidentados.',
            itemListElement: this.resultados.slice(0, 10).map((r, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: `${r.tipo} — ${r.lesion}`,
              description: r.descripcionBreve,
            })),
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://capelettiabogados.com/' },
              { '@type': 'ListItem', position: 2, name: 'Resultados', item: 'https://capelettiabogados.com/resultados' },
            ],
          },
        ],
      },
    });
  }
}
