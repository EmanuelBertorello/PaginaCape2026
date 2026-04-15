import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { FaqAccordionComponent } from '../../../shared/components/faq-accordion/faq-accordion';
import { SeoService } from '../../../core/services/seo.service';
import { FaqItem } from '../../../core/models/interfaces';

@Component({
  selector: 'app-nuevo-baremo',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, FaqAccordionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nuevo-baremo.html',
})
export class NuevoBaremoComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Nuevo Baremo ART 2026', url: '/nuevo-baremo-art-2026' },
  ];

  readonly faqs: FaqItem[] = [
    {
      pregunta: '¿Qué cambió con el nuevo baremo 2026?',
      respuesta: 'El baremo 2026 actualiza los porcentajes de incapacidad para varias patologías, incorpora nuevas lesiones reconocidas y modifica los procedimientos de evaluación en las Comisiones Médicas. Para algunos tipos de lesiones los porcentajes son más favorables para el trabajador.',
    },
    {
      pregunta: '¿El nuevo baremo me beneficia si ya tengo un caso en curso?',
      respuesta: 'Depende del estado de tu caso. Si el dictamen aún no está firme, puede haber argumentos para solicitar la aplicación del baremo más favorable. Consultanos para evaluar tu caso específico.',
    },
    {
      pregunta: '¿Cómo sé si el baremo aplicado en mi caso es el correcto?',
      respuesta: 'Revisamos el dictamen de tu Comisión Médica y verificamos si el baremo aplicado fue el correcto. Si hubo un error, podemos presentar la impugnación correspondiente.',
    },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Nuevo Baremo ART 2026 — Qué Cambia y Cómo Te Afecta',
      description: 'El nuevo baremo ART 2026 cambió los porcentajes de incapacidad. Conocé cómo te afecta y si podés obtener una mejor indemnización. Consulta gratis.',
      path: '/nuevo-baremo-art-2026',
      schema: this.seoService.getFaqSchema(this.faqs.map(f => ({ pregunta: f.pregunta, respuesta: f.respuesta }))),
    });
  }
}
