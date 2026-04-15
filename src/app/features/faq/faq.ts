import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion';
import { SeoService } from '../../core/services/seo.service';
import { FAQS_DATA } from '../../core/data/faqs.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, FaqAccordionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq.html',
})
export class FaqComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Preguntas Frecuentes', url: '/preguntas-frecuentes' },
  ];

  readonly categorias = [
    { id: 'art-general', label: 'ART — Generalidades' },
    { id: 'indemnizaciones', label: 'Indemnizaciones' },
    { id: 'comisiones-medicas', label: 'Comisiones Médicas' },
    { id: 'alta-medica', label: 'Alta Médica' },
    { id: 'honorarios', label: 'Honorarios y Proceso' },
    { id: 'lesiones', label: 'Lesiones Específicas' },
    { id: 'baremo', label: 'Baremo 2026' },
    { id: 'sin-registro', label: 'Trabajo no Registrado' },
  ];

  getFaqsByCategoria(id: string) {
    return FAQS_DATA.filter(f => f.categoria === id);
  }

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Preguntas Frecuentes sobre ART y Accidentes Laborales',
      description: 'Respuestas a las preguntas más comunes sobre accidentes laborales, ART, Comisiones Médicas e indemnizaciones en Argentina. Todo lo que necesitás saber.',
      path: '/preguntas-frecuentes',
      schema: this.seoService.getFaqSchema(
        FAQS_DATA.map(f => ({ pregunta: f.pregunta, respuesta: f.respuesta }))
      ),
    });
  }
}
