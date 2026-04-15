import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [BreadcrumbComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contacto.html',
})
export class ContactoComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Contacto', url: '/contactanos' },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Consulta Gratis — Contacto',
      description: 'Consultá tu caso de accidente laboral o ART gratis. Abogados especializados en Santa Fe, Neuquén, Río Negro, Entre Ríos y Buenos Aires. Respondemos en 24 hs.',
      path: '/contactanos',
    });
  }
}
