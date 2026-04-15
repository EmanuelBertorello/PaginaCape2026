import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { AlertBannerComponent } from '../../../shared/components/alert-banner/alert-banner';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-rechazo-art',
  standalone: true,
  imports: [BreadcrumbComponent, AlertBannerComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rechazo-art.html',
})
export class RechazoArtComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Rechazo de ART', url: '/rechazo-art' },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'La ART Rechazó Mi Accidente — Qué Hacer',
      description: 'La ART rechazó tu accidente o enfermedad laboral? Podés impugnar el rechazo ante la Comisión Médica. Abogados especialistas, consulta urgente y gratis.',
      path: '/rechazo-art',
    });
  }
}
