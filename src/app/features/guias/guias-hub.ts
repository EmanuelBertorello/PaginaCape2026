import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-guias-hub',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './guias-hub.html',
})
export class GuiasHubComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Guías Legales', url: '/guias' },
  ];

  readonly guias = [
    {
      slug: 'guia-completa-accidente-laboral',
      titulo: 'Guía Completa: Qué Hacer Después de un Accidente Laboral',
      descripcion: 'Todo lo que necesitás saber desde el momento del accidente hasta cobrar la indemnización. 15 pasos claros y prácticos.',
      tiempoLectura: 12,
    },
    {
      slug: 'guia-comision-medica',
      titulo: 'Cómo Prepararse para la Comisión Médica',
      descripcion: 'Guía paso a paso para la audiencia ante la Comisión Médica: qué documentación llevar, qué decir y qué evitar.',
      tiempoLectura: 10,
    },
    {
      slug: 'guia-enfermedades-profesionales',
      titulo: 'Guía de Enfermedades Profesionales en Argentina 2026',
      descripcion: 'Listado actualizado de enfermedades profesionales reconocidas, cómo acreditar el origen laboral y cómo reclamar.',
      tiempoLectura: 15,
    },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Guías Legales Gratuitas — Accidentes Laborales y ART',
      description: 'Guías completas y gratuitas sobre accidentes laborales, ART, Comisiones Médicas y enfermedades profesionales. Escritas por abogados especializados.',
      path: '/guias',
    });
  }
}
