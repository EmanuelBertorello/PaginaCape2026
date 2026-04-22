import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { PROVINCIAS_DATA } from '../../core/data/ciudades.data';

@Component({
  selector: 'app-sedes',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sedes.html',
})
export class SedesComponent {
  private readonly seoService = inject(SeoService);

  readonly provincias = PROVINCIAS_DATA;

  readonly provinciaFotos = [
    '/santa-fe-logo.jpg',
    '/nequen.jpg',
    '/rio negro.jpg',
    '/entre rios.jpg',
    '/buenos aires.jpg',
    '/cordoba.jpg',
  ];

  readonly stats = [
    { valor: '6', label: 'Provincias cubiertas' },
    { valor: '+15', label: 'Ciudades con atención' },
    { valor: '98%', label: 'Tasa de éxito' },
    { valor: '+10', label: 'Años de presencia' },
  ];

  constructor() {
    this.seoService.setPage({
      title: 'Sedes — Nuestras Oficinas en Argentina | Capeletti Abogados',
      description: 'Conocé todas las sedes del Estudio Capeletti. Presencia real en Santa Fe, Neuquén, Río Negro, Entre Ríos, Buenos Aires y Córdoba. Abogados laborales locales en cada provincia.',
      path: '/sedes',
    });
  }
}
