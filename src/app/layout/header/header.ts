import {
  Component,
  ChangeDetectionStrategy,
  signal,
  HostListener,
  inject,
  ElementRef,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavDropdownItem {
  label: string;
  url: string;
}

interface NavItem {
  label: string;
  url?: string;
  dropdown?: NavDropdownItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class HeaderComponent {
  private readonly el = inject(ElementRef);
  readonly isScrolled = signal(false);
  readonly mobileMenuOpen = signal(false);
  readonly activeDropdown = signal<string | null>(null);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.activeDropdown.set(null);
    }
  }

  readonly navItems: NavItem[] = [
    {
      label: 'Inicio',
      url: '/',
    },
    {
      label: 'Lesiones',
      dropdown: [
        { label: 'Hernia de Disco', url: '/hernia-de-disco-laboral' },
        { label: 'Lumbalgia Laboral', url: '/lumbalgia-laboral' },
        { label: 'Manguito Rotador', url: '/manguito-rotador-laboral' },
        { label: 'Accidente In Itinere', url: '/accidente-in-itinere' },
        { label: 'Accidente en Obra', url: '/accidente-obra-construccion' },
        { label: 'Fallecimiento Laboral', url: '/fallecimiento-accidente-laboral' },
        { label: 'Gran Invalidez', url: '/gran-invalidez' },
        { label: 'Hipoacusia Laboral', url: '/hipoacusia-laboral' },
        { label: 'Túnel Carpiano', url: '/tunel-carpiano-laboral' },
        { label: 'Enfermedades Profesionales', url: '/enfermedad-profesional' },
      ],
    },
    {
      label: 'Provincias',
      dropdown: [
        { label: 'Santa Fe', url: '/santa-fe' },
        { label: 'Neuquén', url: '/neuquen' },
        { label: 'Río Negro', url: '/rio-negro' },
        { label: 'Entre Ríos', url: '/entre-rios' },
        { label: 'Buenos Aires', url: '/buenos-aires' },
      ],
    },
    {
      label: 'ART',
      dropdown: [
        { label: 'Nuevo Baremo ART 2026', url: '/nuevo-baremo-art-2026' },
        { label: 'Alta Médica ART', url: '/alta-medica-art' },
        { label: 'Rechazo de ART', url: '/rechazo-art' },
        { label: 'Cómo Cobrar la ART', url: '/como-cobrar-la-art' },
        { label: 'Comisiones Médicas', url: '/comisiones-medicas' },
      ],
    },
    {
      label: 'Nosotros',
      dropdown: [
        { label: 'Sobre Nosotros', url: '/sobre-nosotros' },
        { label: 'Nuestros Abogados', url: '/abogados' },
        { label: 'Resultados', url: '/resultados' },
        { label: 'Honorarios', url: '/honorarios' },
      ],
    },
    { label: 'Blog', url: '/blog' },
    { label: 'Preguntas Frecuentes', url: '/preguntas-frecuentes' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
    if (this.mobileMenuOpen()) {
      this.activeDropdown.set(null);
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
    this.activeDropdown.set(null);
  }

  toggleDropdown(label: string): void {
    this.activeDropdown.update(current => (current === label ? null : label));
  }

  closeDropdown(): void {
    this.activeDropdown.set(null);
  }

  isDropdownOpen(label: string): boolean {
    return this.activeDropdown() === label;
  }
}
