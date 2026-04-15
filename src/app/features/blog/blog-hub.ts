import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-blog-hub',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-hub.html',
})
export class BlogHubComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Blog', url: '/blog' },
  ];

  readonly posts = [
    {
      slug: 'que-hacer-despues-de-un-accidente-laboral',
      titulo: '¿Qué hacer en las primeras 48 horas después de un accidente laboral?',
      excerpt: 'Los primeros pasos después de un accidente laboral son cruciales para el éxito del reclamo. Te explicamos qué hacer y qué evitar.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2025-03-15',
      categoria: 'Accidentes Laborales',
      tiempoLectura: 5,
    },
    {
      slug: 'como-calcular-indemnizacion-art',
      titulo: 'Cómo se calcula la indemnización por accidente laboral en 2026',
      excerpt: 'La fórmula legal para calcular la indemnización de la ART depende del salario, la edad y el porcentaje de incapacidad. Te la explicamos paso a paso.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2025-04-01',
      categoria: 'Indemnizaciones',
      tiempoLectura: 7,
    },
    {
      slug: 'hernia-de-disco-baremo-2026',
      titulo: 'Hernia de disco laboral y el nuevo baremo 2026: ¿te beneficia?',
      excerpt: 'El nuevo baremo cambió los porcentajes para hernias de disco. Analizamos el impacto para los trabajadores con esta lesión.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2026-01-10',
      categoria: 'Baremo 2026',
      tiempoLectura: 6,
    },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Blog — Derecho Laboral y ART',
      description: 'Artículos sobre accidentes laborales, ART, Comisiones Médicas e indemnizaciones. Información actualizada para trabajadores de Argentina.',
      path: '/blog',
    });
  }
}
