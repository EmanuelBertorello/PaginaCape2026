import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { AuthorBoxComponent } from '../../shared/components/author-box/author-box';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbItem } from '../../core/models/interfaces';

@Component({
  selector: 'app-guia-detail',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, AuthorBoxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './guia-detail.html',
})
export class GuiaDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  slug = '';
  titulo = '';
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.titulo = this.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    this.breadcrumbs = [
      { label: 'Inicio', url: '/' },
      { label: 'Guías', url: '/guias' },
      { label: this.titulo, url: '/guias/' + this.slug },
    ];

    this.seoService.setPage({
      title: this.titulo + ' — Guía Legal',
      description: 'Guía legal completa sobre ' + this.titulo.toLowerCase() + '. Información actualizada para trabajadores de Argentina. Por Capeletti Abogados.',
      path: '/guias/' + this.slug,
      ogType: 'article',
      breadcrumbs: this.breadcrumbs,
      schema: this.seoService.getArticleSchema({
        titulo: this.titulo + ' — Guía Legal',
        descripcion: 'Guía legal completa sobre ' + this.titulo.toLowerCase() + '. Información actualizada para trabajadores de Argentina.',
        fechaPublicacion: '2026-01-01',
        fechaModificacion: new Date().toISOString().split('T')[0],
        autor: 'Bruno Capeletti',
        slug: this.slug,
        seccion: 'guias',
      }),
    });
  }
}
