import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  private readonly sanitizer = inject(DomSanitizer);

  provincia: ProvinciaData | null = null;
  breadcrumbs: BreadcrumbItem[] = [];
  safeContent: SafeHtml | null = null;

  ngOnInit(): void {
    const slug = this.route.snapshot.url[0]?.path ?? this.route.parent?.snapshot.url[0]?.path ?? '';
    this.provincia = PROVINCIAS_DATA.find(p => p.slug === slug) ?? null;

    if (this.provincia) {
      this.breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: this.provincia.nombre, url: '/' + this.provincia.slug },
      ];
      if (this.provincia.contenidoHtml) {
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.provincia.contenidoHtml);
      }
      this.seoService.setPage({
        title: this.provincia.metaTitle,
        description: this.provincia.metaDescription,
        path: '/' + this.provincia.slug,
        schema: this.seoService.getLocalBusinessSchema({
          ciudad: this.provincia.nombre,
          provincia: this.provincia.nombre,
          slug: this.provincia.slug,
        }),
      });
    }
  }
}
