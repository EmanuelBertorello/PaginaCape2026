import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-alert-banner',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
      style="background-color: #FADBD8; border: 1px solid #E74C3C;"
      role="alert"
    >
      <div class="shrink-0">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: #922B21;" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
      </div>
      <div class="flex-1">
        <p class="font-semibold" style="color: #922B21;">{{ title }}</p>
        <p class="mt-1 text-sm" style="color: #641E16;">{{ message }}</p>
      </div>
      @if (ctaText) {
        <a
          [href]="ctaHref"
          [target]="ctaHref.startsWith('http') ? '_blank' : '_self'"
          [rel]="ctaHref.startsWith('http') ? 'noopener noreferrer' : ''"
          class="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-colors duration-150"
          style="background-color: #922B21;"
        >
          {{ ctaText }}
        </a>
      }
    </div>
  `,
})
export class AlertBannerComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) message = '';
  @Input() ctaText = '';
  @Input() ctaHref = 'https://wa.me/5493415000000';
}
