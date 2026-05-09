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
      slug: 'art-no-paga-baja-laboral',
      titulo: 'ART no paga durante la baja laboral: qué hacer',
      excerpt: 'Después de un accidente laboral, la ART no siempre paga correctamente durante la baja. Te explicamos qué verificar y cómo reclamar.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2026-05-09',
      categoria: 'Accidentes Laborales',
      tiempoLectura: 7,
    },
    {
      slug: 'gran-invalidez-laboral-art',
      titulo: 'Gran invalidez laboral: qué es y cuánto se cobra en 2026',
      excerpt: 'La gran invalidez es la incapacidad laboral más grave del sistema ART. Te explicamos los requisitos, el monto y cómo reclamarla.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2026-05-08',
      categoria: 'Indemnizaciones',
      tiempoLectura: 7,
    },
    {
      slug: 'enfermedad-profesional-vs-accidente-laboral',
      titulo: 'Enfermedad profesional vs accidente laboral: diferencias clave',
      excerpt: 'No es lo mismo un accidente que una enfermedad profesional. Las diferencias impactan en cómo se reclama y cuánto podés cobrar.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2026-05-08',
      categoria: 'Enfermedades Profesionales',
      tiempoLectura: 8,
    },
    {
      slug: 'alta-medica-art-antes-de-recuperarse',
      titulo: 'Alta médica de la ART cuando no estás recuperado: qué hacer',
      excerpt: 'Recibir el alta médica de la ART no significa que tenés que aceptarla. Te explicamos cómo impugnarla y qué plazo tenés.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2026-05-08',
      categoria: 'Accidentes Laborales',
      tiempoLectura: 7,
    },
    {
      slug: 'que-hacer-si-la-art-te-rechaza-el-siniestro',
      titulo: 'Qué hacer si la ART te rechaza el siniestro',
      excerpt: 'Que la ART rechace el siniestro no significa que perdiste el reclamo. Explicamos qué hacer, qué documentar y cómo impugnar el rechazo.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2026-05-08',
      categoria: 'Accidentes Laborales',
      tiempoLectura: 7,
    },
    {
      slug: 'accidente-in-itinere-como-probarlo-ante-la-art',
      titulo: 'Accidente in itinere: cómo probarlo ante la ART',
      excerpt: 'Un accidente in itinere se prueba con documentación del trayecto, atención médica y relato coherente. Te explicamos qué juntar y cómo armarlo.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2026-05-08',
      categoria: 'Accidentes Laborales',
      tiempoLectura: 7,
    },
    {
      slug: 'como-impugnar-porcentaje-incapacidad-art',
      titulo: 'Cómo impugnar el porcentaje de incapacidad de la Comisión Médica',
      excerpt: 'Que la Comisión Médica te dé un porcentaje bajo no significa que tenés que aceptarlo. Te explicamos cómo revisar el dictamen e impugnar.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2026-05-08',
      categoria: 'Comisiones Médicas',
      tiempoLectura: 8,
    },
    {
      slug: 'inconstitucionalidad-decreto-549-2025',
      titulo: 'Inconstitucionalidad del art. 3 del Decreto 549/2025: argumentos y fallos',
      excerpt: 'El art. 3 aplica el nuevo baremo a expedientes anteriores. Ya hay fallos de inconstitucionalidad en Comodoro Rivadavia y Córdoba.',
      autor: 'Bruno Capeletti',
      fechaPublicacion: '2026-04-22',
      categoria: 'Baremo 2026',
      tiempoLectura: 8,
    },
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
      excerpt: 'La fórmula legal para calcular la indemnización de la ART depende del salario, la edad y el porcentaje de incapacidad.',
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
                description: 'Artículos sobre accidentes laborales, ART, Comisiones Médicas e indemnizaciones. Información actualizada para trabajadores y abogados de Argentina.',
                path: '/blog',
                ogImage: this.seoService.ogImages.blog,
                schema: {
                  '@context': 'https://schema.org',
                  '@type': 'Blog',
                  name: 'Blog — Derecho Laboral y ART | Capeletti Abogados',
                  url: 'https://capelettiabogados.com/blog',
                  description: 'Artículos sobre accidentes laborales, ART, Comisiones Médicas e indemnizaciones.',
                  publisher: {
                    '@type': 'Organization',
                    name: 'Capeletti Abogados',
                    url: 'https://capelettiabogados.com',
                    logo: { '@type': 'ImageObject', url: 'https://capelettiabogados.com/assets/logo.webp' },
                  },
                  blogPost: this.posts.map(p => ({
                    '@type': 'BlogPosting',
                    headline: p.titulo,
                    url: `https://capelettiabogados.com/blog/${p.slug}`,
                    datePublished: p.fechaPublicacion,
                    author: { '@type': 'Person', name: p.autor },
                  })),
                },
        });
  }
}
