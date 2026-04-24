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
      breadcrumbs: this.breadcrumbs,
    });
  }
}
