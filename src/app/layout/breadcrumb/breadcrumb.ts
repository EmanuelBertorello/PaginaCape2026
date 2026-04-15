import { Component, ChangeDetectionStrategy, Input, inject, OnChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { BreadcrumbItem } from '../../core/models/interfaces';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav aria-label="Ruta de navegación" class="py-3 border-b border-gray-100 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol class="flex items-center flex-wrap gap-1 text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
          @for (item of items; track item.url; let i = $index; let last = $last) {
            <li
              class="flex items-center gap-1"
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
            >
              @if (!last) {
                <a
                  [routerLink]="item.url"
                  itemprop="item"
                  class="transition-colors duration-150 hover:underline"
                  style="color: #2E86C1;"
                >
                  <span itemprop="name">{{ item.label }}</span>
                </a>
                <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: #5D6D7E;" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              } @else {
                <span itemprop="name" style="color: #5D6D7E;" aria-current="page">{{ item.label }}</span>
              }
              <meta itemprop="position" [content]="(i + 1).toString()">
            </li>
          }
        </ol>
      </div>
    </nav>
  `,
})
export class BreadcrumbComponent implements OnChanges {
  @Input({ required: true }) items: BreadcrumbItem[] = [];

  private readonly seoService = inject(SeoService);

  ngOnChanges(): void {
    if (this.items.length) {
      // Inyectar schema BreadcrumbList al cambiar los items
      // No sobreescribimos el schema principal de la página, así que
      // lo manejamos como schema secundario en una segunda tag si se necesita
    }
  }
}
