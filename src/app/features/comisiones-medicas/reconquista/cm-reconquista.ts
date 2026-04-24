import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-cm-reconquista',
  standalone: true,
  imports: [BreadcrumbComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cm-reconquista.html',
})
export class CmReconquistaComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Comisiones Médicas', url: '/comisiones-medicas' },
    { label: 'CM Reconquista', url: '/comision-medica-reconquista' },
  ];
  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Comisión Médica Reconquista N° 17 — Guía ART Norte Santa Fe',
      description: 'Guía para la CM de Reconquista. Especialistas en zona norte de Santa Fe: agroindustria, forestal y construcción. Capeletti Abogados.',
      path: '/comision-medica-reconquista',
      breadcrumbs: this.breadcrumbs,
      schema: this.seoService.getLocalBusinessSchema({ ciudad: 'Reconquista', provincia: 'Santa Fe', slug: 'comision-medica-reconquista' }),
    });
  }
}
