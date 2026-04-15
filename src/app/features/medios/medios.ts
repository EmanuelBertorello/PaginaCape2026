import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-medios',
  standalone: true,
  imports: [BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-breadcrumb [items]="breadcrumbs" />
    <section style="background-color: #1A5276;" class="py-14">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-white">Capeletti en los Medios</h1>
        <p class="mt-4 text-lg max-w-2xl mx-auto" style="color: #D6EAF8;">Apariciones en medios de comunicación y notas periodísticas.</p>
      </div>
    </section>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center" style="color: #5D6D7E;">
      <p>Sección en construcción. Próximamente apariciones en radio, televisión y medios digitales.</p>
    </div>
  `,
})
export class MediosComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Medios', url: '/medios' },
  ];
  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Capeletti Abogados en los Medios',
      description: 'Apariciones de Capeletti Abogados en medios de comunicación. Notas sobre derecho laboral, ART y accidentes de trabajo.',
      path: '/medios',
    });
  }
}
