import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-comisiones-medicas-hub',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './comisiones-hub.html',
})
export class ComisionesMedicasHubComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Comisiones Médicas', url: '/comisiones-medicas' },
  ];

  readonly comisiones = [
    { titulo: 'CM Rosario (N° 2)', url: '/comision-medica-rosario', descripcion: 'Atiende Santa Fe sur, incluyendo Rosario y zona metropolitana.' },
    { titulo: 'CM Santa Fe Capital (N° 1)', url: '/comision-medica-santa-fe', descripcion: 'Atiende la capital provincial y zona centro-norte.' },
    { titulo: 'CM Reconquista (N° 17)', url: '/comision-medica-reconquista', descripcion: 'Atiende el norte de Santa Fe: Reconquista, Avellaneda y zona.' },
    { titulo: 'CM Neuquén (N° 10)', url: '/comision-medica-neuquen', descripcion: 'Atiende toda la provincia de Neuquén y parte de Río Negro.' },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Comisiones Médicas ART — Guía Completa por Provincia',
      description: 'Todo sobre las Comisiones Médicas: qué son, cómo funcionan, dónde están. Guías para Rosario, Santa Fe, Neuquén y Reconquista.',
      path: '/comisiones-medicas',
    });
  }
}
