import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { CityCardComponent } from '../../../shared/components/city-card/city-card';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';
import { PROVINCIAS_DATA } from '../../../core/data/ciudades.data';
import { ProvinciaData, BreadcrumbItem } from '../../../core/models/interfaces';

@Component({
  selector: 'app-hub-provincial',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, CityCardComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hub-provincial.html',
})
export class HubProvincialComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  provincia: ProvinciaData | null = null;
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit(): void {
    const slug = this.route.snapshot.url[0]?.path ?? this.route.parent?.snapshot.url[0]?.path ?? '';
    this.provincia = PROVINCIAS_DATA.find(p => p.slug === slug) ?? null;

    if (this.provincia) {
      this.breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: this.provincia.nombre, url: '/' + this.provincia.slug },
      ];
      this.seoService.setPage({
        title: this.provincia.metaTitle,
        description: this.provincia.metaDescription,
        path: '/' + this.provincia.slug,
        breadcrumbs: this.breadcrumbs,
        schema: this.seoService.getLocalBusinessSchema({
          ciudad: this.provincia.nombre,
          provincia: this.provincia.nombre,
          slug: this.provincia.slug,
        }),
      });
    }
  }
}
