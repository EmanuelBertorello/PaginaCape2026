import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-2xl mx-auto px-4 py-24 text-center">
      <p class="text-6xl font-bold" style="color: #1A5276;">404</p>
      <h1 class="text-2xl font-semibold mt-4" style="color: #1C2833;">Página no encontrada</h1>
      <p class="mt-3" style="color: #5D6D7E;">La página que buscás no existe o fue movida.</p>
      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a routerLink="/" class="btn-primary">Ir al inicio</a>
        <a routerLink="/contactanos" class="btn-secondary">Consultar gratis</a>
      </div>
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  ngOnInit(): void {
    this.seoService.setTitle('Página no encontrada');
    this.seoService.setNoIndex();
  }
}
