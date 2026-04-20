import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { AuthorBoxComponent } from '../../shared/components/author-box/author-box';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbItem } from '../../core/models/interfaces';
import { BLOG_POSTS, BlogPostData } from '../../core/data/blog.data';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, AuthorBoxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-post.html',
})
export class BlogPostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  post: BlogPostData | null = null;
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit(): void {
    const slug = this.route.snapshot.params['slug'];
    this.post = BLOG_POSTS.find(p => p.slug === slug) ?? null;

    if (this.post) {
      this.breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: 'Blog', url: '/blog' },
        { label: this.post.titulo, url: '/blog/' + slug },
      ];
      this.seoService.setPage({
        title: this.post.metaTitle,
        description: this.post.metaDescription,
        path: '/blog/' + slug,
        ogType: 'article',
        schema: this.seoService.getArticleSchema({
          titulo: this.post.metaTitle,
          descripcion: this.post.metaDescription,
          fechaPublicacion: this.post.fechaPublicacion,
          fechaModificacion: this.post.fechaModificacion,
          autor: this.post.autor,
          slug,
          seccion: 'blog',
        }),
      });
    }
  }
}
