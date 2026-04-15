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
    });
  }
}
