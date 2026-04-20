import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-medios',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-breadcrumb [items]="breadcrumbs" />

    <section class="relative overflow-hidden py-16 sm:py-20" style="background: linear-gradient(135deg, #001a4d 0%, #002b7b 50%, #023660 100%);">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
        style="opacity:0.04; background-image: linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px); background-size: 60px 60px;"></div>
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style="background:rgba(4,95,195,0.3); filter:blur(120px);"></div>
      <div class="absolute top-0 left-0 right-0 h-1" style="background: linear-gradient(to right, #002b7b, #045fc3, #002b7b);"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider"
          style="background:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.2);">
          <span style="width:6px;height:6px;border-radius:50%;background:#baf1ff;display:inline-block;flex-shrink:0;"></span>
          Prensa
        </div>
        <h1 class="text-3xl sm:text-4xl font-bold text-white leading-tight">Capeletti Abogados en los Medios</h1>
        <p class="mt-4 text-lg max-w-2xl mx-auto" style="color:rgba(255,255,255,0.75);">Apariciones en radio, televisión y medios digitales.</p>
      </div>
    </section>

    <section style="background:#ffffff;" class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style="background:rgba(0,43,123,0.07);">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color:#045fc3;" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
        </div>
        <h2 class="text-xl font-bold mb-3" style="color:#0b183a;">Sección próximamente</h2>
        <p class="text-base" style="color:rgba(11,24,58,0.55);">Estamos recopilando las apariciones en radio, televisión y medios digitales. Volvé pronto.</p>
        <a routerLink="/contactanos" class="btn-primary mt-8 inline-flex">Consultar ahora</a>
      </div>
    </section>
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
      title: ' Abogados en los Medios',
      description: 'Apariciones de  Abogados en medios de comunicación. Notas sobre derecho laboral, ART y accidentes de trabajo.',
      path: '/medios',
    });
  }
}
