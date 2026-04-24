import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { AuthorBoxComponent } from '../../shared/components/author-box/author-box';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbItem } from '../../core/models/interfaces';

interface PostStub {
    slug: string;
    titulo: string;
    metaDescription: string;
    excerpt: string;
    autor: string;
    autorSlug: string;
    matricula: string;
    fechaPublicacion: string;
    fechaModificacion: string;
    categoria: string;
    tiempoLectura: number;
    tieneContenidoCompleto?: boolean;
}

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

  post: PostStub | null = null;
    breadcrumbs: BreadcrumbItem[] = [];

  private readonly posts: PostStub[] = [
    {
            slug: 'inconstitucionalidad-decreto-549-2025',
            titulo: 'Inconstitucionalidad del art. 3 del Decreto 549/2025: argumentos y fallos',
            metaDescription: 'El art. 3 del Decreto 549/2025 aplica el nuevo baremo a expedientes anteriores. Ya hay fallos de inconstitucionalidad en Comodoro Rivadavia y Córdoba. Analizamos los argumentos y la estrategia procesal.',
            excerpt: 'El art. 3 aplica el nuevo baremo a expedientes anteriores a febrero 2026. Ya hay fallos de inconstitucionalidad en Comodoro Rivadavia y Córdoba. Guía de argumentos y estrategia procesal para abogados.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-04-22',
            fechaModificacion: '2026-04-22',
            categoria: 'Baremo 2026',
            tiempoLectura: 8,
            tieneContenidoCompleto: true,
    },
    {
            slug: 'que-hacer-despues-de-un-accidente-laboral',
            titulo: 'Qué hacer en las primeras 48 horas después de un accidente laboral',
            metaDescription: 'Los primeros pasos después de un accidente laboral son cruciales para el reclamo. Guía completa de Capeletti Abogados.',
            excerpt: 'Los primeros pasos después de un accidente laboral son cruciales para el éxito del reclamo. Te explicamos qué hacer y qué evitar.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2025-03-15',
            fechaModificacion: '2026-01-10',
            categoria: 'Accidentes Laborales',
            tiempoLectura: 5,
    },
    {
            slug: 'como-calcular-indemnizacion-art',
            titulo: 'Cómo se calcula la indemnización por accidente laboral en 2026',
            metaDescription: 'La fórmula para calcular la indemnización de la ART explicada paso a paso. Salario base, porcentaje de incapacidad y coeficiente de edad.',
            excerpt: 'La fórmula legal para calcular la indemnización de la ART depende del salario, la edad y el porcentaje de incapacidad.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2025-04-01',
            fechaModificacion: '2026-02-15',
            categoria: 'Indemnizaciones',
            tiempoLectura: 7,
    },
    {
            slug: 'hernia-de-disco-baremo-2026',
            titulo: 'Hernia de disco laboral y el nuevo baremo 2026',
            metaDescription: 'El nuevo baremo ART 2026 cambió los porcentajes para hernias de disco. Analizamos el impacto para los trabajadores.',
            excerpt: 'El nuevo baremo cambió los porcentajes para hernias de disco. Analizamos el impacto para los trabajadores con esta lesión.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-01-10',
            fechaModificacion: '2026-01-10',
            categoria: 'Baremo 2026',
            tiempoLectura: 6,
    },
      ];

  ngOnInit(): void {
        const slug = this.route.snapshot.params['slug'];
        this.post = this.posts.find(p => p.slug === slug) ?? null;

      if (this.post) {
              this.breadcrumbs = [
                { label: 'Inicio', url: '/' },
                { label: 'Blog', url: '/blog' },
                { label: this.post.titulo, url: '/blog/' + slug },
                      ];
              this.seoService.setPage({
                        title: this.post.titulo,
                        description: this.post.metaDescription,
                        path: '/blog/' + slug,
                        ogType: 'article',
                        breadcrumbs: this.breadcrumbs,
                        schema: this.seoService.getArticleSchema({
                                    titulo: this.post.titulo,
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
