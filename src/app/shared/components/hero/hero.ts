import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class HeroComponent {
  @Input({ required: true }) title = '';
  @Input() titleAccent = '';
  @Input() subtitle = '';
  @Input() ctaText = 'Consulta Gratis';
  @Input() ctaLink = '/contactanos';
  @Input() ctaSecondaryText = '';
  @Input() ctaSecondaryLink = '';
  @Input() badge = '';
  @Input() compact = false;
}
