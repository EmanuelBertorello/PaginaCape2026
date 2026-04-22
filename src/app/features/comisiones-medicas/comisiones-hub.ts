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
    { titulo: 'CM Rosario (N° 2)', url: '/comision-medica-rosario', provincia: 'Santa Fe', descripcion: 'Atiende Santa Fe sur, incluyendo Rosario y zona metropolitana.' },
    { titulo: 'CM Santa Fe Capital (N° 1)', url: '/comision-medica-santa-fe', provincia: 'Santa Fe', descripcion: 'Atiende la capital provincial y zona centro-norte.' },
    { titulo: 'CM Reconquista (N° 40C)', url: '/comision-medica-reconquista', provincia: 'Santa Fe', descripcion: 'Atiende el norte de Santa Fe: Reconquista, Avellaneda y zona.' },
    { titulo: 'CM Neuquén (N° 9)', url: '/comision-medica-neuquen', provincia: 'Neuquén', descripcion: 'Atiende toda la provincia de Neuquén. Especialistas en Vaca Muerta.' },
    { titulo: 'CM Paraná (N° 8)', url: '/comision-medica-parana', provincia: 'Entre Ríos', descripcion: 'Atiende Paraná y toda la zona centro-sur de Entre Ríos.' },
    { titulo: 'CM Concordia (N° 34)', url: '/comision-medica-concordia', provincia: 'Entre Ríos', descripcion: 'Atiende Concordia, Colón, Federación y norte de Entre Ríos.' },
    { titulo: 'CM Bariloche', url: '/comision-medica-bariloche', provincia: 'Río Negro', descripcion: 'Delegación de Bariloche para turismo, hotelería y construcción.' },
    { titulo: 'CM Viedma (N° 18)', url: '/comision-medica-viedma', provincia: 'Río Negro', descripcion: 'CM cabecera de Río Negro. Atiende toda la costa rionegrina.' },
    { titulo: 'CM General Roca (N° 35)', url: '/comision-medica-general-roca', provincia: 'Río Negro', descripcion: 'Atiende el Alto Valle: Cipolletti, Allen, Catriel y zona.' },
    { titulo: 'CM Córdoba Capital (N° 5)', url: '/comision-medica-cordoba', provincia: 'Córdoba', descripcion: 'Atiende Córdoba Capital y zona metropolitana.' },
    { titulo: 'CM CABA (N° 10)', url: '/comision-medica-caba', provincia: 'CABA', descripcion: 'CM de la Ciudad Autónoma de Buenos Aires. Moreno 401.' },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Comisiones Médicas ART — Guía Completa por Provincia',
      description: 'Todo sobre las Comisiones Médicas: qué son, cómo funcionan, dónde están. Guías para Rosario, Santa Fe, Neuquén y Reconquista.',
      path: '/comisiones-medicas',
    });
  }
}
