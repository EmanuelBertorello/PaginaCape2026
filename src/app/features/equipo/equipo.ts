import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';
import { ABOGADOS_DATA } from '../../core/data/abogados.data';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './equipo.html',
})
export class EquipoComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Nuestros Abogados', url: '/abogados' },
  ];

  readonly abogados = ABOGADOS_DATA;

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Nuestros Abogados — Equipo Capeletti',
      description: 'Conocé al equipo de abogados de Capeletti Abogados. Especialistas en accidentes laborales con matrícula activa en Santa Fe, Neuquén y Buenos Aires.',
      path: '/abogados',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'Capeletti Abogados',
            url: 'https://capelettiabogados.com',
            logo: 'https://capelettiabogados.com/assets/logo.webp',
            member: this.abogados.map(a => ({
              '@type': 'Person',
              name: `${a.nombre} ${a.apellido}`,
              jobTitle: a.titulo,
              url: `https://capelettiabogados.com/abogados/${a.slug}`,
              identifier: a.matricula,
            })),
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://capelettiabogados.com/' },
              { '@type': 'ListItem', position: 2, name: 'Nuestros Abogados', item: 'https://capelettiabogados.com/abogados' },
            ],
          },
        ],
      },
    });
  }
}
