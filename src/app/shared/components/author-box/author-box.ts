import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-author-box',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col sm:flex-row gap-4 p-5 rounded-lg border border-gray-100" style="background-color: #F8FAFB;">
      <!-- Avatar -->
      <div class="shrink-0">
        @if (foto) {
          <img
            [src]="foto"
            [alt]="nombre"
            width="72"
            height="72"
            class="w-18 h-18 rounded-full object-cover"
            loading="lazy"
          >
        } @else {
          <div class="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
               style="background-color: #1A5276;">
            {{ iniciales }}
          </div>
        }
      </div>
      <!-- Info -->
      <div>
        <p class="text-xs font-semibold uppercase tracking-wider mb-1" style="color: #5D6D7E;">Redactado por</p>
        <a [routerLink]="'/abogados/' + slug" class="font-bold hover:underline" style="color: #1A5276;">
          {{ nombre }}
        </a>
        <p class="text-sm mt-0.5" style="color: #5D6D7E;">{{ titulo }}</p>
        <p class="text-xs mt-1" style="color: #5D6D7E;">{{ matricula }}</p>
        @if (fechaActualizacion) {
          <p class="text-xs mt-2" style="color: #5D6D7E;">
            Actualizado: <time [attr.datetime]="fechaActualizacion">{{ fechaActualizacion }}</time>
          </p>
        }
      </div>
    </div>
  `,
})
export class AuthorBoxComponent {
  @Input({ required: true }) nombre = '';
  @Input({ required: true }) slug = '';
  @Input() titulo = '';
  @Input() matricula = '';
  @Input() foto = '';
  @Input() fechaActualizacion = '';

  get iniciales(): string {
    return this.nombre
      .split(' ')
      .map(w => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
}
