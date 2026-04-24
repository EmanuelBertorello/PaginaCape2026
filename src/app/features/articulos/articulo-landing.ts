import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbItem } from '../../core/models/interfaces';
import { ARTICULOS_DATA, ArticuloData } from '../../core/data/articulos.data';

@Component({
  selector: 'app-articulo-landing',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './articulo-landing.html',
})
export class ArticuloLandingComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  articulo: ArticuloData | null = null;
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit(): void {
    // slug comes from the static route path, not a param — use the URL snapshot
    const url = this.route.snapshot.url.map(s => s.path).join('/');
    this.articulo = ARTICULOS_DATA.find(a => a.slug === url) ?? null;

    if (this.articulo) {
      const a = this.articulo;
      this.breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: a.h1, url: '/' + a.slug },
      ];
      this.seoService.setPage({
        title: a.seoTitle,
        description: a.seoDescription,
        path: '/' + a.slug,
        ogType: 'article',
        breadcrumbs: this.breadcrumbs,
        schema: this.seoService.getArticleSchema({
          titulo: a.seoTitle,
          descripcion: a.seoDescription,
          fechaPublicacion: '2026-01-01',
          fechaModificacion: '2026-04-15',
          autor: 'Bruno Capeletti',
          slug: a.slug,
          seccion: 'blog',
        }),
      });
    }
  }
}
