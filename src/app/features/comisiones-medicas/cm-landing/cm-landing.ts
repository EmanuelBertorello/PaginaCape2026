import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { FaqAccordionComponent } from '../../../shared/components/faq-accordion/faq-accordion';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';
import { COMISIONES_MEDICAS_DATA, CmData } from '../../../core/data/comisiones-medicas.data';
import { BreadcrumbItem } from '../../../core/models/interfaces';

@Component({
  selector: 'app-cm-landing',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, FaqAccordionComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cm-landing.html',
})
export class CmLandingComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  cm: CmData | null = null;
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit(): void {
    const slug = this.route.snapshot.url[0]?.path ?? '';
    this.cm = COMISIONES_MEDICAS_DATA.find(c => c.slug === slug) ?? null;

    if (this.cm) {
      this.breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: 'Comisiones Médicas', url: '/comisiones-medicas' },
        { label: this.cm.ciudad, url: '/' + slug },
      ];
      this.seoService.setPage({
        title: this.cm.metaTitle,
        description: this.cm.metaDescription,
        path: '/' + slug,
        schema: this.seoService.getFaqSchema(this.cm.faqs),
      });
    }
  }
}
