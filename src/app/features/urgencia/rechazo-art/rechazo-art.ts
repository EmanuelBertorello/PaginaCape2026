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
      title: 'ART Rechazó el Accidente Laboral: Cómo Impugnar en 2026 | Capeletti',
      description: 'La ART rechazó tu accidente o enfermedad laboral. Tenés 5 días hábiles para impugnar ante la Comisión Médica. Abogados especializados. Consulta urgente gratis.',
      path: '/rechazo-art',
      schema: this.seoService.getFaqSchema([
        { pregunta: '¿Qué hago si la ART rechazó mi accidente?', respuesta: 'Podés impugnar el rechazo ante la Comisión Médica de la SRT dentro de los 5 días hábiles de notificado. Un abogado presentará la documentación para revertir el rechazo sin costo anticipado.' },
        { pregunta: '¿Cuánto tiempo tengo para impugnar el rechazo de la ART?', respuesta: 'El plazo es de 5 días hábiles desde la notificación del rechazo, según la Res. SRT N° 5/2026. Es fundamental actuar rápido.' },
        { pregunta: '¿La ART puede rechazar cualquier accidente?', respuesta: 'No. La ART debe demostrar que el accidente no tiene origen laboral. Si no lo prueba, el rechazo es impugnable. En Capeletti evaluamos cada caso sin costo.' },
      ]),
    });
  }
}
