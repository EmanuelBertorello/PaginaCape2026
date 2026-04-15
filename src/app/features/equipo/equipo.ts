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
    });
  }
}
