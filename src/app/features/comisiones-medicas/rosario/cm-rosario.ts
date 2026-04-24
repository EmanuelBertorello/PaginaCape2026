import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-cm-rosario',
  standalone: true,
  imports: [BreadcrumbComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cm-rosario.html',
})
export class CmRosarioComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Comisiones Médicas', url: '/comisiones-medicas' },
    { label: 'CM Rosario', url: '/comision-medica-rosario' },
  ];
  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Comisión Médica Rosario N° 2 — Guía Completa ART',
      description: 'Todo sobre la Comisión Médica N° 2 de Rosario: dirección, horarios, cómo prepararse y cómo llegar con abogado. Capeletti Abogados, especialistas en Rosario.',
      path: '/comision-medica-rosario',
      breadcrumbs: this.breadcrumbs,
      schema: this.seoService.getLocalBusinessSchema({ ciudad: 'Rosario', provincia: 'Santa Fe', slug: 'comision-medica-rosario' }),
    });
  }
}
