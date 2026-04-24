import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-cm-santa-fe',
  standalone: true,
  imports: [BreadcrumbComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cm-santa-fe.html',
})
export class CmSantaFeComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Comisiones Médicas', url: '/comisiones-medicas' },
    { label: 'CM Santa Fe Capital', url: '/comision-medica-santa-fe' },
  ];
  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Comisión Médica Santa Fe Capital N° 1 — Guía ART',
      description: 'Todo sobre la CM N° 1 de Santa Fe Capital. Preparación, documentación y representación legal. Capeletti Abogados.',
      path: '/comision-medica-santa-fe',
      breadcrumbs: this.breadcrumbs,
      schema: this.seoService.getLocalBusinessSchema({ ciudad: 'Santa Fe', provincia: 'Santa Fe', slug: 'comision-medica-santa-fe' }),
    });
  }
}
