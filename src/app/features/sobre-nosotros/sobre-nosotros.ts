import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sobre-nosotros.html',
})
export class SobreNosotrosComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Sobre Nosotros', url: '/sobre-nosotros' },
  ];

  readonly valores = [
    { icono: '⚖️', titulo: 'Especialización total', descripcion: 'No hacemos divorcio, ni propiedades, ni contratos. Solo accidentes laborales. Eso nos hace mejores en lo que hacemos.' },
    { icono: '🤝', titulo: 'Honorarios a éxito', descripcion: 'Creemos que el trabajador lesionado no debería cargar con el costo del reclamo. Por eso solo cobramos cuando cobrás vos.' },
    { icono: '🏥', titulo: 'Presencia local real', descripcion: 'No mandamos casos a otra ciudad. Conocemos las Comisiones Médicas de cada provincia donde operamos, en persona.' },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Sobre Nosotros — Estudio Capeletti',
      description: 'Conocé al equipo de Capeletti Abogados. Más de 10 años especializados en accidentes laborales y ART en Santa Fe, Neuquén, Entre Ríos, Río Negro y Buenos Aires.',
      path: '/sobre-nosotros',
      breadcrumbs: this.breadcrumbs,
      schema: this.seoService.getLegalServiceSchema(),
    });
  }
}
