import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [routerLink]="'/' + provinciaSlug + '/' + slug"
      class="card flex flex-col gap-2 p-5 group hover:border-blue-200 border border-gray-100 transition-all duration-150"
    >
      <div class="flex items-start justify-between">
        <div>
          <h3 class="font-semibold text-base group-hover:underline" style="color: #1A5276;">{{ nombre }}</h3>
          <p class="text-xs mt-0.5" style="color: #5D6D7E;">{{ provincia }}</p>
        </div>
        <svg class="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: #2E86C1;" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
      @if (descripcion) {
        <p class="text-sm leading-relaxed" style="color: #5D6D7E;">{{ descripcion }}</p>
      }
      @if (cmLocal) {
        <span class="badge badge-primary text-xs">{{ cmLocal }}</span>
      }
    </a>
  `,
})
export class CityCardComponent {
  @Input({ required: true }) slug = '';
  @Input({ required: true }) nombre = '';
  @Input({ required: true }) provincia = '';
  @Input({ required: true }) provinciaSlug = '';
  @Input() descripcion = '';
  @Input() cmLocal = '';
}
