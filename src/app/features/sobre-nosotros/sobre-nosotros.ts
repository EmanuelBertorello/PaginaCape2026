import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { AuthorBoxComponent } from '../../shared/components/author-box/author-box';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, AuthorBoxComponent],
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
      title: 'Abogados Laboralistas en Argentina — Estudio Capeletti | Capeletti Abogados',
      description: 'Más de 10 años especializados exclusivamente en accidentes laborales y ART. Conocé al equipo de Capeletti Abogados: matrícula activa en 6 provincias, consulta gratis.',
      path: '/sobre-nosotros',
      schema: this.seoService.getLegalServiceSchema(),
    });
  }
}
