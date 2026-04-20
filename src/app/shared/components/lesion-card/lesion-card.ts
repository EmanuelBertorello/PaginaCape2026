import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lesion-card',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [routerLink]="'/' + slug"
      class="card-light flex flex-col gap-3 p-5 group transition-all duration-150"
    >
      <div class="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
           style="background-color: #D6EAF8;">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: #1A5276;" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="font-semibold text-base group-hover:underline" style="color: #1A5276;">{{ titulo }}</h3>
        <p class="mt-1 text-sm leading-relaxed" style="color: #5D6D7E;">{{ descripcion }}</p>
      </div>
      <span class="text-sm font-medium flex items-center gap-1" style="color: #2E86C1;">
        Ver más
        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </span>
    </a>
  `,
})
export class LesionCardComponent {
  @Input({ required: true }) slug = '';
  @Input({ required: true }) titulo = '';
  @Input({ required: true }) descripcion = '';
}
