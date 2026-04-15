import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly lesionesLinks = [
    { label: 'Hernia de Disco Laboral', url: '/hernia-de-disco-laboral' },
    { label: 'Lumbalgia Laboral', url: '/lumbalgia-laboral' },
    { label: 'Manguito Rotador', url: '/manguito-rotador-laboral' },
    { label: 'Accidente In Itinere', url: '/accidente-in-itinere' },
    { label: 'Hipoacusia Laboral', url: '/hipoacusia-laboral' },
    { label: 'Túnel Carpiano', url: '/tunel-carpiano-laboral' },
    { label: 'Enfermedades Profesionales', url: '/enfermedad-profesional' },
  ];

  readonly artLinks = [
    { label: 'Nuevo Baremo ART 2026', url: '/nuevo-baremo-art-2026' },
    { label: 'Alta Médica ART', url: '/alta-medica-art' },
    { label: 'Rechazo de ART', url: '/rechazo-art' },
    { label: 'Cómo Cobrar la ART', url: '/como-cobrar-la-art' },
    { label: 'Comisiones Médicas', url: '/comisiones-medicas' },
  ];

  readonly provinciaLinks = [
    { label: 'Santa Fe', url: '/santa-fe' },
    { label: 'Rosario', url: '/santa-fe/rosario' },
    { label: 'Neuquén', url: '/neuquen' },
    { label: 'Río Negro', url: '/rio-negro' },
    { label: 'Entre Ríos', url: '/entre-rios' },
    { label: 'Buenos Aires', url: '/buenos-aires' },
    { label: 'CABA', url: '/buenos-aires/caba' },
  ];

  readonly nosotrosLinks = [
    { label: 'Sobre Nosotros', url: '/sobre-nosotros' },
    { label: 'Nuestros Abogados', url: '/abogados' },
    { label: 'Resultados', url: '/resultados' },
    { label: 'Honorarios', url: '/honorarios' },
    { label: 'Blog', url: '/blog' },
    { label: 'Guías Legales', url: '/guias' },
    { label: 'Preguntas Frecuentes', url: '/preguntas-frecuentes' },
    { label: 'Contacto', url: '/contactanos' },
  ];
}
