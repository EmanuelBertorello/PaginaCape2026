import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';
import { BLOG_POSTS } from '../../core/data/blog.data';

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

  readonly posts = BLOG_POSTS;

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Blog — Derecho Laboral y ART',
      description: 'Artículos sobre accidentes laborales, ART, Comisiones Médicas e indemnizaciones. Información actualizada para trabajadores de Argentina.',
      path: '/blog',
    });
  }
}
