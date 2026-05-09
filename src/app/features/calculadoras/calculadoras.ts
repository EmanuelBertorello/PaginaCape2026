import { Component, ChangeDetectionStrategy, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-calculadoras',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calculadoras.html',
})
export class CalculadorasComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  private readonly fb = inject(FormBuilder);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Calculadora de Indemnización', url: '/calculadoras-de-indemnizacion' },
  ];

  readonly faqs = [
    {
      pregunta: '¿Cómo se calcula la indemnización por accidente laboral?',
      respuesta: 'La fórmula base es: 53 × Ingreso Base Mensual × % de incapacidad × (65 − edad) / (65 − 18). El Ingreso Base es el promedio del salario de los últimos 12 meses. En 2026 hay pisos mínimos establecidos por la SRT.',
    },
    {
      pregunta: '¿El resultado de la calculadora es exacto?',
      respuesta: 'No, es orientativo. El monto real depende del Ingreso Base verificado por la ART, el porcentaje de incapacidad dictaminado por Comisión Médica y el baremo vigente al momento del siniestro. Para un cálculo preciso, consultanos gratis.',
    },
    {
      pregunta: '¿Qué es el Ingreso Base Mensual?',
      respuesta: 'Es el promedio de las remuneraciones sujetas a aportes del trabajador durante los 12 meses anteriores al accidente. Incluye básico, horas extra, antigüedad y otros rubros habituales.',
    },
    {
      pregunta: '¿Existe un monto mínimo de indemnización?',
      respuesta: 'Sí. La ley establece pisos mínimos que se actualizan periódicamente. En 2026, el piso por Incapacidad Permanente Parcial supera los $17 millones, independientemente del resultado de la fórmula.',
    },
    {
      pregunta: '¿La calculadora sirve para enfermedades profesionales?',
      respuesta: 'Sí, la fórmula es la misma. La diferencia está en que el porcentaje de incapacidad lo determina la Comisión Médica según el baremo vigente y el tipo de enfermedad.',
    },
  ];

  readonly form = this.fb.group({
    salario: [0],
    incapacidad: [0],
    edad: [0],
  });

  readonly resultado = signal<string | null>(null);

  calcular(): void {
    const { salario, incapacidad, edad } = this.form.value;
    if (!salario || !incapacidad || !edad) {
      this.resultado.set(null);
      return;
    }
    // Fórmula simplificada: 53 × IB × (%inc/100) × coef_edad
    const coefEdad = (65 - (edad as number)) / (65 - 18);
    const ib = (salario as number) * 1; // Ingreso Base simplificado
    const monto = 53 * ib * ((incapacidad as number) / 100) * Math.max(coefEdad, 0.5);
    this.resultado.set(
      new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(monto)
    );
  }

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Calculadora de Indemnización Laboral 2026',
      description: 'Calculá una estimación de tu indemnización por accidente laboral o enfermedad profesional en Argentina. Herramienta gratuita de Capeletti Abogados.',
      path: '/calculadoras-de-indemnizacion',
      ogImage: this.seoService.ogImages.honorarios,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebApplication',
            name: 'Calculadora de Indemnización Laboral 2026',
            url: 'https://capelettiabogados.com/calculadoras-de-indemnizacion',
            description: 'Calculá tu indemnización por accidente laboral o enfermedad profesional según el baremo 2026.',
            applicationCategory: 'LegalApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'ARS' },
            provider: { '@type': 'LegalService', name: 'Capeletti Abogados', url: 'https://capelettiabogados.com' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: this.faqs.map(f => ({
              '@type': 'Question',
              name: f.pregunta,
              acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
            })),
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://capelettiabogados.com/' },
              { '@type': 'ListItem', position: 2, name: 'Calculadoras', item: 'https://capelettiabogados.com/calculadoras-de-indemnizacion' },
            ],
          },
        ],
      },
    });
  }
}
