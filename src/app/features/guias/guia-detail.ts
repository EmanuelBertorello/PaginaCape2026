import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { AuthorBoxComponent } from '../../shared/components/author-box/author-box';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbItem } from '../../core/models/interfaces';

@Component({
  selector: 'app-guia-detail',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, AuthorBoxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './guia-detail.html',
})
export class GuiaDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  slug = '';
  titulo = '';
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.titulo = this.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    this.breadcrumbs = [
      { label: 'Inicio', url: '/' },
      { label: 'Guías', url: '/guias' },
      { label: this.titulo, url: '/guias/' + this.slug },
    ];

    const howToSteps: Record<string, { name: string; text: string }[]> = {
      'guia-completa-accidente-laboral': [
        { name: 'Denunciar el accidente al empleador', text: 'Notificar al supervisor de inmediato y exigir que la empresa denuncie el siniestro ante la ART dentro de las 24 horas.' },
        { name: 'Atenderse a través de la ART', text: 'Acudir al prestador médico asignado por la ART o, en emergencia, al hospital más cercano. Guardar toda la documentación.' },
        { name: 'Documentar el accidente', text: 'Fotografiar el lugar, registrar testigos y conservar certificados médicos, estudios y recetas desde el primer día.' },
        { name: 'Presentarse ante la Comisión Médica', text: 'Una vez recibida el alta, la CM evaluará el porcentaje de incapacidad permanente. Asistir con representación legal.' },
        { name: 'Revisar el dictamen e impugnar si corresponde', text: 'Si el porcentaje de incapacidad es bajo o no refleja las secuelas reales, impugnar ante la CM y luego la justicia laboral.' },
        { name: 'Cobrar la indemnización', text: 'Aceptar el pago o continuar en vía judicial si el monto no es justo. Solo cobramos honorarios si ganamos.' },
      ],
      'guia-comision-medica': [
        { name: 'Recibir la citación de la Comisión Médica', text: 'La ART o la SRT emite una citación con fecha y lugar. Notificar al abogado apenas se recibe.' },
        { name: 'Preparar la documentación médica', text: 'Reunir resonancias, radiografías, electromiogramas, certificados de tratamiento e informes de médicos tratantes.' },
        { name: 'Consultar con el abogado antes de la audiencia', text: 'Revisar qué lesiones y porcentajes corresponden según el baremo, y cómo responder las preguntas del médico evaluador.' },
        { name: 'Asistir a la audiencia médica', text: 'Describir con precisión el dolor, las limitaciones funcionales y el impacto en las tareas laborales. No minimizar.' },
        { name: 'Recibir el dictamen y evaluarlo', text: 'El dictamen puede aceptarse o impugnarse. El abogado evalúa si el porcentaje refleja la incapacidad real.' },
        { name: 'Impugnar si el porcentaje es injusto', text: 'Presentar impugnación con informe médico privado. Si la CM mantiene el criterio, continuar en vía judicial.' },
      ],
      'guia-enfermedades-profesionales': [
        { name: 'Identificar si es enfermedad profesional o accidente', text: 'Las enfermedades profesionales se desarrollan gradualmente. Verificar si está en el listado oficial de la SRT.' },
        { name: 'Obtener diagnóstico médico con nexo causal', text: 'El médico debe certificar que las tareas laborales causaron o agravaron la enfermedad.' },
        { name: 'Denunciar ante la ART con respaldo médico', text: 'Presentar la denuncia acompañada del certificado que establece la relación con las tareas.' },
        { name: 'Presentarse ante la Comisión Médica', text: 'La CM evaluará si reconoce la enfermedad como profesional y determinará el porcentaje de incapacidad.' },
        { name: 'Reunir prueba de exposición laboral', text: 'Antigüedad en el puesto, descripción de tareas, estudios ambientales, testimonios de compañeros.' },
        { name: 'Reclamar la indemnización correspondiente', text: 'Si quedan secuelas permanentes, la indemnización se calcula igual que en accidentes: fórmula sobre IBM, porcentaje e incapacidad.' },
      ],
    };

    const steps = howToSteps[this.slug] ?? [];
    const schema: object = steps.length > 0
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            this.seoService.getBreadcrumbSchema(this.breadcrumbs),
            {
              '@type': 'HowTo',
              name: this.titulo + ' — Guía Legal Completa',
              description: 'Guía paso a paso sobre ' + this.titulo.toLowerCase() + ' para trabajadores de Argentina.',
              step: steps.map((s, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: s.name,
                text: s.text,
              })),
            },
          ],
        }
      : this.seoService.getBreadcrumbSchema(this.breadcrumbs);

    this.seoService.setPage({
      title: this.titulo + ' — Guía Legal',
      description: 'Guía legal completa sobre ' + this.titulo.toLowerCase() + '. Información actualizada para trabajadores de Argentina. Por Capeletti Abogados.',
      path: '/guias/' + this.slug,
      ogType: 'article',
      schema,
    });
  }
}
