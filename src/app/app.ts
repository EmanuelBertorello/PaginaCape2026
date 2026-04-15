import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header />
    <main id="main-content">
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `,
})
export class App {}
