import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb';
import { FaqAccordionComponent } from '../../../shared/components/faq-accordion/faq-accordion';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form';
import { SeoService } from '../../../core/services/seo.service';
import { FaqItem } from '../../../core/models/interfaces';

@Component({
  selector: 'app-alta-medica',
  standalone: true,
  imports: [BreadcrumbComponent, FaqAccordionComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alta-medica.html',
})
export class AltaMedicaComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'ART y Proceso', url: '/comisiones-medicas' },
    { label: 'Alta Médica ART', url: '/alta-medica-art' },
  ];

  readonly pasos = [
    {
      numero: 1,
      titulo: 'Recibís el alta médica de la ART',
      descripcion: 'Puede ser en papel, por carta documento o notificación electrónica. Desde ese momento empiezan a correr los 5 días hábiles. No importa si firmaste en conformidad o no — la firma no te hace perder el derecho.',
    },
    {
      numero: 2,
      titulo: 'Contactás a Capeletti Abogados ese mismo día',
      descripcion: 'Te ayudamos a evaluar si el alta es injustificada, qué documentación médica necesitás y qué formulario corresponde según la Res. SRT N° 5/2026. No pierdas tiempo buscando el formulario anterior — ya no sirve.',
    },
    {
      numero: 3,
      titulo: 'Presentás el trámite de disconformidad en la CM',
      descripcion: 'Presencialmente, en la Comisión Médica que corresponda a tu domicilio o al domicilio de tu empleador. Con el Anexo IV de la Res. SRT 5/2026, copia de DNI y copia del alta médica. El médico te evalúa el mismo día.',
    },
    {
      numero: 4,
      titulo: 'El alta queda suspendida durante el trámite',
      descripcion: 'Mientras la CM resuelve (hasta 60 días hábiles, prorrogables), seguís percibiendo tus prestaciones y no tenés obligación de reincorporarte al trabajo. La ART no puede forzar la reincorporación.',
    },
    {
      numero: 5,
      titulo: 'La CM emite el dictamen',
      descripcion: 'Puede confirmar el alta o modificarla. Si la modifica a tu favor, la ART debe continuar el tratamiento o iniciar el trámite de incapacidad. Si la confirma y no estás de acuerdo, hay una segunda instancia.',
    },
    {
      numero: 6,
      titulo: 'Si la CM confirma el alta — segunda instancia',
      descripcion: 'Tenés 5 días hábiles del dictamen para apelar ante la CM Central (Moreno 401, CABA). O podés ir directamente a la vía judicial laboral. En Capeletti evaluamos cuál camino conviene según el caso y la provincia.',
    },
  ];

  readonly queLevar = [
    'DNI — original y copia',
    'Copia del alta médica otorgada por la ART',
    'Formulario Anexo IV de la Resolución SRT N° 5/2026 (el formulario anterior ya no sirve)',
    'Historia clínica y todos los estudios médicos relacionados con la lesión',
    'Designación de patrocinio letrado (tu abogado) — obligatorio en provincias adheridas a Ley 27.348',
    'Número de expediente si ya tenés uno en la SRT',
  ];

  readonly provincias = [
    {
      nombre: 'Santa Fe',
      cm: 'CM 07 (Rosario) · CM 40 (SF capital) · Del. Reconquista · Del. Rafaela · Del. Venado Tuerto',
      nota: 'Adherida Ley 27.348. Abogado obligatorio. Capeletti opera ante todas las CMs santafesinas.',
    },
    {
      nombre: 'Neuquén',
      cm: 'CM 09 — Bartolomé Mitre 950',
      nota: 'Adherida Ley 27.348. Una sola CM para toda la provincia. Abogado obligatorio.',
    },
    {
      nombre: 'Entre Ríos',
      cm: 'CM 08 (Paraná) · CM 34 (Concordia) · Del. Concepción del Uruguay',
      nota: 'Adherida Ley 27.348. Abogado obligatorio. Capeletti opera en Paraná y Concordia.',
    },
    {
      nombre: 'Río Negro',
      cm: 'CM 18 (Viedma) · CM 35 (Gral. Roca) · Del. Bariloche · Del. Cipolletti',
      nota: 'Adherida Ley 27.348. Cuatro sedes en distintas ciudades.',
    },
    {
      nombre: 'Buenos Aires',
      cm: 'CM 11 (La Plata) · CM 12 (MDP) · CM 13 (BB) · y 15 sedes más en GBA',
      nota: 'Adherida Ley 27.348. Capeletti opera en Bahía Blanca, Mar del Plata, La Plata y GBA.',
    },
    {
      nombre: 'CABA',
      cm: 'CM 10 — Moreno 401 (múltiples delegaciones) · Del. Villa Urquiza',
      nota: 'Adherida. CM Central actúa como apelación.',
    },
    {
      nombre: 'Córdoba',
      cm: 'CM 05 (capital) · CM 06 (Villa María) · CM 33 (Río Cuarto)',
      nota: 'Adherida. Capeletti opera en Córdoba capital.',
    },
  ];

  readonly faqs: FaqItem[] = [
    {
      pregunta: '¿Qué pasa si firmé el alta sin poner "en disconformidad"?',
      respuesta: 'No pasa nada. En Argentina, la firma del alta no implica renuncia a derechos. Podés haber firmado sin objeciones y aun así impugnar el alta dentro de los 5 días hábiles siguientes. La ley laboral protege al trabajador y prohíbe la renuncia a derechos fundamentales. Lo importante es actuar dentro del plazo.',
    },
    {
      pregunta: '¿Cuánto tiempo tengo para impugnar el alta de la ART?',
      respuesta: 'Tenés 5 días hábiles contados desde que te notificaron el alta médica. Es el plazo establecido por la Resolución SRT N° 5/2026 para iniciar el trámite de Disconformidad con el Alta ante la Comisión Médica. Los días hábiles no incluyen sábados, domingos ni feriados.',
    },
    {
      pregunta: '¿Necesito abogado para impugnar el alta médica?',
      respuesta: 'En las provincias adheridas a la Ley 27.348 (Santa Fe, Neuquén, Entre Ríos, Río Negro, Buenos Aires, CABA, Córdoba), la asistencia letrada es obligatoria desde el primer trámite ante la Comisión Médica. En Capeletti no cobramos honorarios anticipados — solo si ganamos.',
    },
    {
      pregunta: '¿Si impugno el alta tengo que volver a trabajar igual?',
      respuesta: 'No. Si presentás la Disconformidad con el Alta dentro de los 5 días hábiles, el alta queda suspendida mientras la Comisión Médica resuelve. Durante ese período seguís percibiendo tus prestaciones y no tenés obligación de reincorporarte. El plazo de resolución es de hasta 60 días hábiles.',
    },
    {
      pregunta: '¿Qué formulario uso para impugnar el alta en 2026?',
      respuesta: 'El formulario es el Anexo IV de la Resolución SRT N° 5/2026, publicada en el Boletín Oficial el 29 de enero de 2026. Los formularios anteriores ya no son válidos. Desde Capeletti te ayudamos a completarlo correctamente antes de presentarte en la Comisión Médica.',
    },
    {
      pregunta: '¿Qué pasa si la Comisión Médica confirma el alta y sigo sin estar curado?',
      respuesta: 'Tenés dos opciones: apelar el dictamen ante la Comisión Médica Central (Moreno 401, CABA) dentro de los 5 días hábiles del dictamen, o iniciar la vía judicial laboral. En muchos casos, la vía judicial obtiene porcentajes de incapacidad significativamente mayores que la Comisión Médica.',
    },
    {
      pregunta: '¿Cuánto cobra Capeletti por impugnar el alta médica?',
      respuesta: 'No cobramos honorarios anticipados. Solo cobramos si obtenemos un resultado favorable — un porcentaje del monto de la indemnización que finalmente se acuerde o determine judicialmente. La consulta inicial es completamente gratuita.',
    },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Alta médica de la ART: cómo impugnarla en 2026 | Capeletti Abogados',
      description: '¿La ART te dio el alta y seguís con dolor? Tenés 5 días hábiles para impugnarla. Te explicamos el procedimiento actualizado con Res. SRT 5/2026. Consulta gratis.',
      path: '/alta-medica-art',
      schema: this.seoService.getFaqSchema(this.faqs.map(f => ({ pregunta: f.pregunta, respuesta: f.respuesta }))),
    });
  }
}
