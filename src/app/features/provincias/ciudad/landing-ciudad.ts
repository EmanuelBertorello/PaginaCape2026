import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';
import { PROVINCIAS_DATA } from '../../../core/data/ciudades.data';
import { CiudadData, BreadcrumbItem } from '../../../core/models/interfaces';

@Component({
  selector: 'app-landing-ciudad',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing-ciudad.html',
})
export class LandingCiudadComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  ciudad: CiudadData | null = null;
  breadcrumbs: BreadcrumbItem[] = [];

  readonly beneficios = [
    'Conocemos la Comisión Médica local',
    'Sin honorarios hasta cobrar',
    'Respuesta en 24 horas',
    'Abogado con matrícula activa en la provincia',
  ];

  ngOnInit(): void {
    const provinciaSlug = this.route.parent?.snapshot.url[0]?.path ?? '';
    const ciudadSlug = this.route.snapshot.params['ciudad'] ?? '';

    const provincia = PROVINCIAS_DATA.find(p => p.slug === provinciaSlug);
    this.ciudad = provincia?.ciudades.find(c => c.slug === ciudadSlug) ?? null;

    if (this.ciudad && provincia) {
      this.breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: provincia.nombre, url: '/' + provinciaSlug },
        { label: this.ciudad.nombre, url: '/' + provinciaSlug + '/' + ciudadSlug },
      ];
      this.seoService.setPage({
        title: this.ciudad.metaTitle,
        description: this.ciudad.metaDescription,
        path: '/' + provinciaSlug + '/' + ciudadSlug,
        breadcrumbs: this.breadcrumbs,
        schema: this.seoService.getLocalBusinessSchema({
          ciudad: this.ciudad.nombre,
          provincia: this.ciudad.provincia,
          slug: provinciaSlug + '/' + ciudadSlug,
        }),
      });
    }
  }
}
