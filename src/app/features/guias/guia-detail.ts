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
      'nuevo-baremo': [
        { name: 'Entender qué es el baremo ART', text: 'El baremo es la tabla oficial que determina el porcentaje de incapacidad laboral permanente para cada lesión. El nuevo baremo 2026 actualizó los valores mínimos de indemnización.' },
        { name: 'Identificar tu lesión en el baremo', text: 'Cada patología tiene un porcentaje mínimo y máximo. Buscar la lesión correspondiente con ayuda de un médico laboral o abogado especialista.' },
        { name: 'Calcular el IBM (Ingreso Base Mensual)', text: 'El IBM es el promedio de salario de los últimos 12 meses. Es la base del cálculo de la indemnización. Reunir recibos de sueldo del último año.' },
        { name: 'Aplicar la fórmula de la Ley 24.557', text: 'Indemnización = 53 × IBM × % incapacidad × (65 / edad). En 2026 existen pisos mínimos que se actualizan por RIPTE trimestralmente.' },
        { name: 'Verificar que la Comisión Médica aplique el baremo correctamente', text: 'La CM puede subestimar el porcentaje. Impugnar el dictamen si el porcentaje asignado no refleja las secuelas reales, con respaldo de médico privado.' },
        { name: 'Cobrar la indemnización correcta', text: 'Una vez firme el porcentaje de incapacidad, la ART tiene 15 días para pagar. Si no paga, iniciar acción judicial con intereses.' },
      ],
      'calculo-indemnizacion': [
        { name: 'Reunir los recibos de sueldo del último año', text: 'El Ingreso Base Mensual (IBM) es el promedio de los salarios de los 12 meses anteriores al accidente. Reunir todos los recibos de sueldo.' },
        { name: 'Calcular el IBM', text: 'Sumar todos los salarios brutos del último año y dividir por 12. Incluir horas extras, adicionales y bonificaciones habituales.' },
        { name: 'Obtener el porcentaje de incapacidad', text: 'Este porcentaje lo determina la Comisión Médica basándose en el baremo. Si es bajo, puede impugnarse con un médico privado.' },
        { name: 'Aplicar la fórmula de la Ley 24.557', text: 'Indemnización = 53 × IBM × % incapacidad × (65 / edad del trabajador al momento del accidente).' },
        { name: 'Verificar el piso mínimo 2026', text: 'En 2026 existe un piso mínimo de indemnización actualizado por RIPTE. Si la fórmula da menos que el piso, se paga el piso. Verificar el valor vigente al momento del alta.' },
        { name: 'Sumar prestaciones adicionales si corresponde', text: 'Gran invalidez, prestación de pago único, renta vitalicia para menores. En algunos casos existen sumas adicionales al resultado de la fórmula.' },
      ],
      'como-cobrar-la-art': [
        { name: 'Denunciar el accidente o enfermedad a la ART', text: 'Notificar al empleador para que registre el siniestro y lo comunique a la ART dentro de las 24 horas. Guardar copia de la denuncia.' },
        { name: 'Atenderse exclusivamente con los prestadores de la ART', text: 'La ART tiene obligación de cubrir el tratamiento completo. Atenderse con sus médicos y guardar toda la documentación clínica.' },
        { name: 'Esperar el alta médica de la ART', text: 'La ART indica cuándo termina el tratamiento. Si el alta es prematura, impugnarla ante la Comisión Médica. Nunca aceptarla sin evaluación legal.' },
        { name: 'Presentarse ante la Comisión Médica', text: 'Una vez dado de alta, la CM evalúa la incapacidad permanente. Asistir siempre con representación legal y documentación médica completa.' },
        { name: 'Revisar el dictamen e impugnar si es bajo', text: 'Si el porcentaje asignado no refleja las secuelas reales, impugnar con informe de médico privado dentro del plazo legal.' },
        { name: 'Cobrar o continuar en vía judicial', text: 'Si la ART ofrece un monto justo, cobrar. Si no, continuar en la justicia laboral. Los intereses y actualizaciones pueden aumentar significativamente el monto.' },
      ],
      'homologacion-art': [
        { name: 'Recibir la propuesta de homologación de la ART', text: 'La ART puede proponer homologar el acuerdo ante la Comisión Médica. La homologación implica cobrar la indemnización y cerrar el reclamo. Nunca firmar sin asesoramiento legal.' },
        { name: 'Verificar que el porcentaje de incapacidad sea correcto', text: 'Antes de homologar, asegurarse de que el porcentaje que ofrece la CM refleja todas las secuelas. Una vez homologado, el reclamo se cierra definitivamente.' },
        { name: 'Calcular si el monto ofrecido es justo', text: 'Aplicar la fórmula completa con el IBM actualizado y verificar que el monto supere los pisos mínimos 2026. Consultar con un abogado.' },
        { name: 'Negociar antes de la audiencia de homologación', text: 'Si el monto es bajo, el abogado puede negociar antes de la audiencia o solicitar impugnar el dictamen. La homologación no es obligatoria.' },
        { name: 'Asistir a la audiencia con representación legal', text: 'En la audiencia de homologación ante la CM, el trabajador puede aceptar o rechazar el acuerdo. Asistir siempre con abogado.' },
        { name: 'Recibir el pago y cerrar el expediente', text: 'Si la homologación es aceptada, la ART debe pagar dentro de los 15 días. Si no cumple, el abogado puede ejecutar el acuerdo judicialmente.' },
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
