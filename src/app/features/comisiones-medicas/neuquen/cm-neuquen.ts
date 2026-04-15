import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-cm-neuquen',
  standalone: true,
  imports: [BreadcrumbComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cm-neuquen.html',
})
export class CmNeuquenComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Comisiones Médicas', url: '/comisiones-medicas' },
    { label: 'CM Neuquén', url: '/comision-medica-neuquen' },
  ];
  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Comisión Médica Neuquén N° 10 — Guía ART',
      description: 'Guía completa de la CM N° 10 de Neuquén. Preparación, documentación y representación legal especializada en petróleo y construcción.',
      path: '/comision-medica-neuquen',
    });
  }
}
