import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion';
import { AlertBannerComponent } from '../../shared/components/alert-banner/alert-banner';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { PROVINCIAS_DATA } from '../../core/data/ciudades.data';
import { SeoService } from '../../core/services/seo.service';
import { LESIONES_DATA } from '../../core/data/lesiones.data';
import { LesionData, BreadcrumbItem } from '../../core/models/interfaces';

@Component({
  selector: 'app-lesion-page',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbComponent,
    FaqAccordionComponent,
    AlertBannerComponent,
    ContactFormComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lesion-page.html',
})
export class LesionPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  lesion: LesionData | null = null;
  breadcrumbs: BreadcrumbItem[] = [];

  readonly provincias = PROVINCIAS_DATA.map(p => ({ label: p.nombre, url: '/' + p.slug }));

  ngOnInit(): void {
    const slug = this.route.snapshot.url[0]?.path ?? '';
    this.lesion = LESIONES_DATA.find(l => l.slug === slug) ?? null;

    if (this.lesion) {
      this.breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: this.lesion.titulo, url: '/' + this.lesion.slug },
      ];

      this.seoService.setPage({
        title: this.lesion.metaTitle,
        description: this.lesion.metaDescription,
        path: '/' + this.lesion.slug,
        schema: this.lesion.faqs.length > 0
          ? this.seoService.getFaqSchema(this.lesion.faqs.map(f => ({ pregunta: f.pregunta, respuesta: f.respuesta })))
          : undefined,
      });
    }
  }
}
