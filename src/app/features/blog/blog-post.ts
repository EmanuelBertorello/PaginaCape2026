import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { AuthorBoxComponent } from '../../shared/components/author-box/author-box';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbItem } from '../../core/models/interfaces';

interface HowToStep { name: string; text: string; }

interface PostStub {
    slug: string;
    titulo: string;
    metaDescription: string;
    excerpt: string;
    autor: string;
    autorSlug: string;
    matricula: string;
    fechaPublicacion: string;
    fechaModificacion: string;
    categoria: string;
    tiempoLectura: number;
    contenidoHtml?: string;
    howToSteps?: HowToStep[];
}

const STYLE_P = 'color:rgba(11,24,58,0.75)';
const STYLE_H2 = 'color:#0b183a;';
const STYLE_H3 = 'color:#0b183a;';

@Component({
    selector: 'app-blog-post',
    standalone: true,
    imports: [RouterLink, BreadcrumbComponent, AuthorBoxComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './blog-post.html',
})
export class BlogPostComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly seoService = inject(SeoService);
    private readonly sanitizer = inject(DomSanitizer);

    post: PostStub | null = null;
    breadcrumbs: BreadcrumbItem[] = [];
    safeContent: SafeHtml | null = null;

    private readonly posts: PostStub[] = [
        {
            slug: 'inconstitucionalidad-decreto-549-2025',
            titulo: 'Inconstitucionalidad del art. 3 del Decreto 549/2025: argumentos y fallos',
            metaDescription: 'El art. 3 del Decreto 549/2025 aplica el nuevo baremo a expedientes anteriores. Ya hay fallos de inconstitucionalidad en Comodoro Rivadavia y Córdoba.',
            excerpt: 'El art. 3 aplica el nuevo baremo a expedientes anteriores a febrero 2026. Ya hay fallos de inconstitucionalidad en Comodoro Rivadavia y Córdoba.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-04-22',
            fechaModificacion: '2026-04-22',
            categoria: 'Baremo 2026',
            tiempoLectura: 8,
        },
        {
            slug: 'que-hacer-despues-de-un-accidente-laboral',
            titulo: 'Qué hacer en las primeras 48 horas después de un accidente laboral',
            metaDescription: 'Los primeros pasos después de un accidente laboral son cruciales para el reclamo. Guía completa de Capeletti Abogados.',
            excerpt: 'Los primeros pasos después de un accidente laboral son cruciales para el éxito del reclamo. Te explicamos qué hacer y qué evitar.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2025-03-15',
            fechaModificacion: '2026-01-10',
            categoria: 'Accidentes Laborales',
            tiempoLectura: 5,
        },
        {
            slug: 'como-calcular-indemnizacion-art',
            titulo: 'Cómo se calcula la indemnización por accidente laboral en 2026',
            metaDescription: 'La fórmula para calcular la indemnización de la ART explicada paso a paso. Salario base, porcentaje de incapacidad y coeficiente de edad.',
            excerpt: 'La fórmula legal para calcular la indemnización de la ART depende del salario, la edad y el porcentaje de incapacidad.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2025-04-01',
            fechaModificacion: '2026-02-15',
            categoria: 'Indemnizaciones',
            tiempoLectura: 7,
        },
        {
            slug: 'hernia-de-disco-baremo-2026',
            titulo: 'Hernia de disco laboral y el nuevo baremo 2026',
            metaDescription: 'El nuevo baremo ART 2026 cambió los porcentajes para hernias de disco. Analizamos el impacto para los trabajadores.',
            excerpt: 'El nuevo baremo cambió los porcentajes para hernias de disco. Analizamos el impacto para los trabajadores con esta lesión.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-01-10',
            fechaModificacion: '2026-01-10',
            categoria: 'Baremo 2026',
            tiempoLectura: 6,
        },
        {
            slug: 'gran-invalidez-laboral-art',
            titulo: 'Gran invalidez laboral: qué es y cuánto se cobra',
            metaDescription: 'Conocé qué es la gran invalidez laboral, cuándo corresponde reclamarla ante la ART y cómo se calcula la indemnización.',
            excerpt: 'La gran invalidez se declara cuando el trabajador necesita asistencia permanente de otra persona. Te explicamos qué implica, cómo reclamarla y cuánto corresponde cobrar.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-05-08',
            fechaModificacion: '2026-05-08',
            categoria: 'Indemnizaciones',
            tiempoLectura: 7,
            howToSteps: [
              { name: 'Obtener el dictamen de Comisión Médica', text: 'La gran invalidez debe ser dictaminada por la CM. El porcentaje debe ser igual o mayor al 66% con necesidad de asistencia permanente.' },
              { name: 'Verificar que la ART reconozca la prestación', text: 'La ART debe abonar una renta mensual vitalicia más un adicional por asistencia. Si no lo hace, reclamá ante la SRT.' },
              { name: 'Calcular el monto correcto', text: 'La prestación mensual se calcula sobre el ingreso base. Existe además una suma de dinero adicional por gran invalidez establecida por ley.' },
              { name: 'Reclamar el adicional por asistencia', text: 'La ley prevé una suma adicional mensual equivalente a 3 veces el SMVM para cubrir la asistencia de terceros.' },
              { name: 'Consultar si corresponde reclamo civil', text: 'Además del sistema ART, puede existir responsabilidad del empleador que habilita una acción civil por daños.' },
              { name: 'Actuar rápido: la prescripción es de 2 años', text: 'El plazo para reclamar corre desde que se determinó la incapacidad permanente. No esperes.' },
            ],
            contenidoHtml: `
<p class="leading-relaxed mb-5" style="${STYLE_P}">La gran invalidez es la incapacidad laboral más grave que reconoce el sistema de Riesgos del Trabajo en Argentina. No alcanza con que el trabajador quede incapacitado en forma permanente: para que se declare gran invalidez, la persona necesita la asistencia continua de otra persona para realizar los actos esenciales de la vida cotidiana.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Es una situación poco frecuente pero de enorme impacto. El trabajador no puede valerse por sí mismo: necesita ayuda para moverse, alimentarse o asearse. Eso implica que el sistema ART tiene que responder con prestaciones mayores a las de una incapacidad permanente común.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">¿Qué dice la ley?</h2>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La Ley de Riesgos del Trabajo establece que existe gran invalidez cuando el trabajador en situación de Incapacidad Laboral Permanente Total necesita la asistencia continua de otra persona para realizar los actos elementales de su vida. En ese caso, la ART debe abonar, además de la prestación de pago único o renta que corresponda, una suma mensual equivalente a tres veces el valor del salario mínimo vital y móvil.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Esto significa que la gran invalidez tiene dos componentes económicos: la prestación dineraria por incapacidad permanente total, y el adicional mensual por gran invalidez. Ambos deben ser abonados por la ART.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Para que se declare gran invalidez, el porcentaje de incapacidad tiene que ser igual o mayor al 66%, y además debe verificarse la necesidad de asistencia permanente de terceros. No alcanza solo el porcentaje: tiene que existir esa dependencia funcional concreta.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Paso a paso: qué hacer</h2>
<ol class="space-y-4 ml-5 list-decimal mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Obtener el dictamen de Comisión Médica.</strong> La gran invalidez debe ser reconocida por la CM. El dictamen tiene que indicar expresamente la necesidad de asistencia permanente y el porcentaje de incapacidad igual o superior al 66%.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Verificar que la ART reconozca la prestación completa.</strong> La ART debe abonar la prestación por incapacidad permanente más el adicional mensual por gran invalidez. Muchas veces solo reconocen la primera parte.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Calcular el monto correcto.</strong> La prestación por incapacidad permanente total se calcula con la fórmula habitual. El adicional mensual equivale a 3 salarios mínimos y se actualiza periódicamente.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Reclamar el adicional si la ART no lo abona.</strong> Si la ART reconoce la incapacidad pero no paga el adicional por gran invalidez, corresponde reclamar ante la Comisión Médica o iniciar acciones legales.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Evaluar si corresponde reclamo civil.</strong> Cuando el accidente se produjo por culpa del empleador o de un tercero, puede existir una acción civil por daños que se suma al reclamo ART.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Actuá rápido: prescripción de 2 años.</strong> El plazo para reclamar corre desde que se determinó la incapacidad permanente. Pasado ese tiempo, el reclamo puede prescribir.</li>
</ol>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Errores comunes</h2>
<ul class="space-y-3 ml-5 list-disc mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Conformarse con la prestación de incapacidad sin exigir el adicional.</strong> El adicional mensual por gran invalidez es un derecho separado y debe reclamarse expresamente.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No documentar la necesidad de asistencia.</strong> Hace falta respaldo médico que acredite que el trabajador depende de un tercero. Certificados, informes de médicos tratantes y evaluaciones funcionales son clave.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Aceptar el porcentaje de la CM sin revisar.</strong> Si el porcentaje es inferior al 66% pero la incapacidad real lo supera, hay que impugnarlo con fundamentos médicos.</li>
</ul>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Preguntas frecuentes</h2>
<div class="space-y-6">
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Cuánto se cobra por gran invalidez en 2026?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Depende del ingreso base y la edad, igual que la incapacidad permanente total. A eso se suma el adicional mensual equivalente a 3 salarios mínimos, que en 2026 representa una suma significativa. Calculá tu caso con nuestra herramienta gratuita.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿La gran invalidez da lugar a pensión por invalidez de ANSES?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Son sistemas distintos. La prestación de la ART corresponde al sistema de riesgos del trabajo. La pensión por invalidez de ANSES tiene requisitos propios y puede tramitarse de forma independiente.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Puede la ART desconocer una gran invalidez reconocida por la CM?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">El dictamen de Comisión Médica es vinculante para la ART. Si lo desconoce o no abona correctamente, corresponde reclamar ante la SRT o iniciar acciones legales. Un abogado laboralista puede guiar ese proceso.</p>
  </div>
</div>`,
        },
        {
            slug: 'enfermedad-profesional-vs-accidente-laboral',
            titulo: 'Enfermedad profesional vs accidente laboral: diferencias legales',
            metaDescription: 'Conocé la diferencia entre enfermedad profesional y accidente laboral, cómo reclamar ante la ART y cuándo corresponde indemnización.',
            excerpt: 'Muchas veces el trabajador sabe que se lesionó por el trabajo, pero no sabe cómo encuadrarlo. Te explicamos la diferencia y cómo reclamar mejor.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-05-08',
            fechaModificacion: '2026-05-08',
            categoria: 'Enfermedades Profesionales',
            tiempoLectura: 8,
            howToSteps: [
              { name: 'Identificar si es accidente o enfermedad', text: 'El accidente es un hecho súbito. La enfermedad profesional es gradual y debe estar en el listado de la SRT o acreditarse nexo causal.' },
              { name: 'Verificar si la enfermedad está en el listado', text: 'La SRT tiene un listado de enfermedades profesionales. Si no está, puede reclamarse igual si se prueba el nexo con las tareas.' },
              { name: 'Denuncia a la ART', text: 'En ambos casos hay que denunciar a la ART. Para enfermedades, conviene hacerlo con respaldo médico que explique la relación con el trabajo.' },
              { name: 'Obtener prueba del nexo causal', text: 'Para enfermedad profesional no listada, el médico debe certificar que las tareas causaron o agravaron la enfermedad.' },
              { name: 'Presentarse ante Comisión Médica', text: 'La CM evalúa tanto accidentes como enfermedades. Para enfermedades, la evaluación suele ser más detallada.' },
              { name: 'Reclamar la indemnización correspondiente', text: 'Si quedan secuelas incapacitantes, corresponde indemnización en ambos casos. El cálculo es igual: fórmula sobre ingreso base, porcentaje e incapacidad.' },
            ],
            contenidoHtml: `
<p class="leading-relaxed mb-5" style="${STYLE_P}">Cuando un trabajador sufre un daño vinculado al trabajo, no siempre es un accidente clásico. Muchas veces se trata de algo que se fue desarrollando con el tiempo: dolor de espalda por carga de peso permanente, hipoacusia por ruido constante, lesión en el hombro por movimientos repetitivos, estrés laboral severo. Eso no es un accidente — es una enfermedad profesional.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La diferencia no es solo de nombre. Impacta en cómo se denuncia, qué tiene que probar el trabajador y qué puede reclamar. Por eso es fundamental entender en qué categoría entra tu caso antes de iniciar cualquier reclamo ante la <a href="/comisiones-medicas" style="color:#045fc3;font-weight:600;">Comisión Médica</a>.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">¿Qué dice la ley?</h2>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La Ley de Riesgos del Trabajo define el accidente de trabajo como el acontecimiento súbito y violento ocurrido por el hecho o en ocasión del trabajo, o en el trayecto entre el domicilio del trabajador y el lugar de prestación de tareas. Es decir: algo que pasa en un momento determinado.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La enfermedad profesional, en cambio, es aquella originada o agravada por el trabajo de manera gradual. La ley establece un Listado de Enfermedades Profesionales que determina qué patologías están cubiertas por la ART. Si la enfermedad está en ese listado y el trabajador estuvo expuesto a los agentes causales, la ART tiene que cubrir el caso sin necesidad de probar el nexo causal.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Si la enfermedad NO está en el listado, puede igualmente reclamarse si se demuestra que existe una relación directa entre las tareas realizadas y la patología. Eso requiere más prueba médica, pero es posible.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Diferencias prácticas clave</h2>
<div class="space-y-4 mb-5">
  <div class="p-5 rounded-2xl" style="background:#f4f7fe; border:1px solid rgba(0,43,123,0.1);">
    <h3 class="font-bold mb-2" style="${STYLE_H3}">Accidente de trabajo</h3>
    <ul class="space-y-2 ml-4 list-disc text-sm" style="${STYLE_P}">
      <li>Hecho súbito y concreto: caída, golpe, atrapamiento, choque</li>
      <li>Fecha y lugar precisos</li>
      <li>Relación causal obvia entre el evento y la lesión</li>
      <li>Denuncia inmediata a la ART</li>
      <li>La ART debe cubrir sin necesidad de listado</li>
    </ul>
  </div>
  <div class="p-5 rounded-2xl" style="background:#f4f7fe; border:1px solid rgba(0,43,123,0.1);">
    <h3 class="font-bold mb-2" style="${STYLE_H3}">Enfermedad profesional</h3>
    <ul class="space-y-2 ml-4 list-disc text-sm" style="${STYLE_P}">
      <li>Desarrollo gradual por exposición a agentes laborales</li>
      <li>Sin fecha exacta de inicio</li>
      <li>Requiere demostrar nexo entre tareas y patología</li>
      <li>Si está en el listado: cobertura automática</li>
      <li>Si no está: necesita prueba médica del nexo causal</li>
    </ul>
  </div>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Paso a paso: qué hacer en cada caso</h2>
<ol class="space-y-4 ml-5 list-decimal mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Identificar correctamente el tipo de caso.</strong> Si fue un evento concreto, es accidente. Si se fue desarrollando con el tiempo por exposición laboral, es enfermedad profesional. Esta distinción define cómo armás el reclamo.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Verificar si la enfermedad está en el listado de la SRT.</strong> El listado oficial de enfermedades profesionales determina cuáles tienen cobertura automática. Hernias, hipoacusia, lesiones por esfuerzo repetitivo y otras patologías frecuentes están incluidas.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Denuncia a la ART con respaldo médico.</strong> En ambos casos hay que denunciar. Para enfermedades, acompañar la denuncia con un certificado médico que explique la relación con las tareas.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Obtener prueba del nexo causal (para enfermedades no listadas).</strong> El médico tratante debe detallar qué agentes del trabajo causaron o agravaron la patología y por cuánto tiempo estuvo expuesto el trabajador.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Presentarse ante Comisión Médica.</strong> La CM evalúa ambos tipos de casos. Para enfermedades, la evaluación suele requerir más documentación y puede ser más lenta.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Reclamar la indemnización.</strong> Si quedan secuelas incapacitantes, la <a href="/calculo-indemnizacion-art" style="color:#045fc3;font-weight:600;">indemnización por accidente laboral</a> se calcula igual en ambos casos: fórmula sobre ingreso base, porcentaje de incapacidad y coeficiente de edad.</li>
</ol>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Preguntas frecuentes</h2>
<div class="space-y-6">
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿La ART cubre enfermedades que no están en el listado?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Puede cobrirse si se demuestra el nexo causal entre las tareas y la enfermedad. Eso requiere prueba médica específica. La Comisión Médica evalúa el caso y puede reconocer la cobertura aunque no esté en el listado.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿El reclamo es el mismo para accidente y enfermedad profesional?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">El procedimiento es similar, pero la prueba es distinta. En el accidente, la relación causal es obvia. En la enfermedad, hay que demostrar la exposición laboral y el nexo con la patología. La indemnización final se calcula de la misma forma.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Puedo reclamar por una enfermedad que empeoró con el trabajo aunque ya la tenía antes?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Sí. La ley contempla el agravamiento de enfermedades preexistentes por el trabajo. Si las tareas aceleraron o agravaron la patología, puede corresponder cobertura de la ART por el daño adicional producido.</p>
  </div>
</div>`,
        },
        {
            slug: 'alta-medica-art-antes-de-recuperarse',
            titulo: 'Alta médica ART: qué hacer si fue antes de tiempo',
            metaDescription: 'Si la ART te dio el alta médica y seguís con dolor, conocé cómo impugnarla ante Comisión Médica y reclamar indemnización.',
            excerpt: 'Recibir el alta médica de la ART cuando todavía tenés dolor o limitaciones es muy común. Te explicamos qué hacer, cómo impugnarla y qué plazos tenés.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-05-08',
            fechaModificacion: '2026-05-08',
            categoria: 'Accidentes Laborales',
            tiempoLectura: 7,
            howToSteps: [
              { name: 'No firmes el alta sin leerla', text: 'Verificá qué dice el alta médica, si reconoce secuelas o no, y cuál es el diagnóstico final antes de prestar conformidad.' },
              { name: 'Consultá con tu médico particular', text: 'Obtené un certificado médico que describa tu estado actual y si tenés limitaciones funcionales reales.' },
              { name: 'Impugná el alta ante la Comisión Médica', text: 'Tenés 10 días hábiles desde el alta para impugnarla ante la CM. Presentá el certificado médico y solicitá revisión.' },
              { name: 'Solicitá que se evalúen las secuelas', text: 'Si hay incapacidad permanente, la CM debe dictaminar el porcentaje. El alta médica no cierra automáticamente el reclamo por incapacidad.' },
              { name: 'No vuelvas al trabajo si seguís con dolor', text: 'Si volvés sin dejar constancia de las limitaciones, puede usarse para minimizar las secuelas. Dejá registro médico antes de reincorporarte.' },
              { name: 'Consultá en los primeros días', text: 'Los plazos para impugnar el alta son cortos. Un abogado puede actuar rápido y proteger tu derecho a la indemnización.' },
            ],
            contenidoHtml: `
<p class="leading-relaxed mb-5" style="${STYLE_P}">El alta médica de la ART debería coincidir con la recuperación real del trabajador. Pero en la práctica muchas veces no es así: la ART declara el alta cuando considera que el tratamiento terminó, aunque el trabajador todavía tenga dolor, limitación de movimiento o no pueda volver a trabajar como antes.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Aceptar ese alta sin cuestionarla puede tener consecuencias graves: se cierra el período de tratamiento, se corta la ILT (Incapacidad Laboral Temporaria) y puede quedar sin evaluarse una incapacidad permanente que existe pero no fue reconocida.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">¿Qué dice la ley?</h2>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La Ley de Riesgos del Trabajo establece que cuando la ART otorga el alta médica, el trabajador puede impugnarla ante la <a href="/comisiones-medicas" style="color:#045fc3;font-weight:600;">Comisión Médica</a>. El trámite se llama "impugnación de alta médica" y permite que un organismo independiente revise si el alta es correcta o prematura.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La SRT establece que el trabajador tiene 10 días hábiles desde la notificación del alta para presentar la impugnación ante la Comisión Médica correspondiente a su domicilio o al lugar de trabajo. Si no se impugna en ese plazo, el alta puede quedar firme.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Además, el alta médica no cierra el reclamo por incapacidad permanente. Aunque el trabajador haya vuelto a trabajar, puede quedar abierta la evaluación de secuelas si existió un accidente laboral o enfermedad profesional.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Paso a paso: qué hacer</h2>
<ol class="space-y-4 ml-5 list-decimal mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No firmes el alta sin leerla completamente.</strong> Verificá qué dice el diagnóstico final, si reconoce secuelas y si indica algún porcentaje de incapacidad. Si no reconoce nada pero vos tenés limitaciones, es el primer problema a señalar.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Consultá con tu médico particular.</strong> Necesitás un certificado que describa tu estado actual: qué limitaciones tenés, si podés hacer las mismas tareas de antes y qué estudios lo respaldan. Ese papel es la base de la impugnación.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Impugná ante la Comisión Médica en 10 días hábiles.</strong> Presentá la impugnación con el certificado médico. La CM convocará a una revisión médica para evaluar si el alta fue correcta o prematura.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Pedí que se evalúen las secuelas incapacitantes.</strong> Si la CM confirma que el alta fue correcta, igual puede quedar abierta la evaluación de incapacidad permanente si existen secuelas. Son dos instancias distintas.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No vuelvas al trabajo sin dejar constancia médica.</strong> Si reingresás y después querés reclamar incapacidad, puede argumentarse que estabas bien. Dejá registro de las limitaciones antes de volver.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Consultá en los primeros días.</strong> El plazo de 10 días hábiles es corto. Un abogado puede preparar la impugnación rápidamente y evitar que el alta quede firme sin revisión.</li>
</ol>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Preguntas frecuentes</h2>
<div class="space-y-6">
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Qué pasa si firmo el alta sin impugnarla?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Si no impugnás en tiempo y forma, el alta puede quedar firme. Eso no impide reclamar una incapacidad permanente si hay secuelas, pero complica la situación. Por eso es importante actuar en los primeros días.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Puedo cobrar ILT si no acepto el alta?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Durante el trámite de impugnación del alta médica, la Comisión Médica puede ordenar que continúe el pago de la ILT hasta que se resuelva. Consultá con un abogado para proteger ese derecho.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Cuánto tiempo tengo para impugnar el alta?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">10 días hábiles desde la notificación del alta médica por parte de la ART. Pasado ese plazo, la impugnación puede ser rechazada por extemporánea. Actuá lo antes posible.</p>
  </div>
</div>`,
        },
        {
            slug: 'que-hacer-si-la-art-te-rechaza-el-siniestro',
            titulo: 'Qué hacer si la ART te rechaza el siniestro',
            metaDescription: 'Si la ART rechazó tu accidente laboral, conocé qué hacer, cómo reclamar ante Comisión Médica y cuándo corresponde indemnización.',
            excerpt: 'Que la ART rechace el siniestro no significa que perdiste el reclamo. Explicamos qué hacer, qué documentar y cómo impugnar el rechazo.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-05-08',
            fechaModificacion: '2026-05-08',
            categoria: 'Accidentes Laborales',
            tiempoLectura: 7,
            howToSteps: [
              { name: 'Pedí el rechazo por escrito', text: 'Solicitá a la ART la constancia formal del rechazo con fecha, motivo y datos del caso.' },
              { name: 'Guardá toda la documentación médica', text: 'Certificados, estudios, resonancias, ecografías y cualquier informe que describa la lesión.' },
              { name: 'Reconstruí cómo ocurrió el accidente', text: 'Fecha, horario, lugar, tarea, testigos y parte del cuerpo lesionada. Si fue in itinere, guardá pruebas del recorrido.' },
              { name: 'No firmes nada sin consultar', text: 'Evitá firmar formularios sin entender su alcance. Consultá a un abogado antes.' },
              { name: 'Iniciá el trámite ante Comisión Médica', text: 'La SRT prevé el trámite de rechazo de la contingencia para revisar la decisión de la ART.' },
              { name: 'Buscá asesoramiento legal', text: 'Un abogado laboralista puede ordenar los hechos y maximizar las chances de éxito ante la Comisión Médica.' },
            ],
            contenidoHtml: `
<p class="leading-relaxed mb-5" style="${STYLE_P}">Cuando sufrís un accidente trabajando, o camino al trabajo, lo lógico sería que la ART tome la denuncia y te brinde atención médica. Pero en la práctica muchas veces pasa otra cosa: la ART rechaza el siniestro, te dice que "no corresponde", que "no hay relación con el trabajo" o directamente corta la atención.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Ese rechazo no siempre está bien fundado. En muchos casos, el trabajador queda en el medio: con dolor, sin tratamiento, sin saber si tiene que volver a trabajar y con miedo de perder el reclamo. Para eso existe un procedimiento ante la <a href="/comisiones-medicas" style="color:#045fc3;font-weight:600;">Comisión Médica</a>, donde se puede discutir el rechazo de siniestro ART y pedir que se revise la decisión.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">¿Qué dice la ley?</h2>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La Ley de Riesgos del Trabajo cubre los accidentes ocurridos por el hecho o en ocasión del trabajo, y también los accidentes in itinere. La ley también contempla enfermedades profesionales vinculadas con las tareas realizadas.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La ART no puede rechazar un caso de manera caprichosa. Si rechaza la denuncia, el trabajador puede iniciar el trámite correspondiente ante la Comisión Médica de su domicilio. La SRT reconoce el trámite por "rechazo de la contingencia" cuando el trabajador quiere que se revise la decisión. En términos simples: el rechazo no es la última palabra.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Si se demuestra que el accidente o la enfermedad tiene relación con el trabajo, pueden corresponder prestaciones médicas, tratamiento, pago durante la incapacidad laboral temporaria y, si quedan secuelas, una <a href="/calculo-indemnizacion-art" style="color:#045fc3;font-weight:600;">indemnización por accidente laboral</a>.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Paso a paso: qué hacer</h2>
<ol class="space-y-4 ml-5 list-decimal mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Pedí la constancia del rechazo por escrito.</strong> No alcanza con que te lo digan por teléfono. Necesitás un documento con fecha, motivo y datos del caso. Ese papel marca desde cuándo sabés la decisión de la ART y permite iniciar el reclamo.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Guardá toda la documentación médica.</strong> Certificados, estudios, placas, resonancias, ecografías, recetas, indicaciones de reposo. Si el médico indica que la dolencia se vincula con el accidente, ese certificado puede ser muy útil.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Reconstruí bien cómo ocurrió el accidente.</strong> Fecha, horario, lugar, tarea, testigos, supervisor, máquina involucrada y parte del cuerpo lesionada. Si fue in itinere, guardá datos del recorrido, denuncia policial, fotos y mensajes al empleador.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No firmes nada sin consultar.</strong> Muchas veces la ART presenta formularios que el trabajador firma sin entender el alcance. Antes de firmar algo que diga que no fue laboral, consultá.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Iniciá el trámite ante Comisión Médica.</strong> La SRT prevé el trámite de "rechazo de la contingencia" para revisar la decisión de la ART. Es la vía administrativa correcta.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Buscá asesoramiento antes de la audiencia.</strong> La forma en que se presenta el caso importa. Ordenar bien los hechos, acompañar estudios y marcar las contradicciones del rechazo puede cambiar completamente el resultado.</li>
</ol>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Errores comunes que cometen los trabajadores</h2>
<ul class="space-y-3 ml-5 list-disc mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Dejar pasar el tiempo</strong> porque "la ART ya dijo que no". El rechazo no es la última palabra.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No guardar estudios ni certificados.</strong> Lo que no está documentado después cuesta más probarlo.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Volver a trabajar lesionado sin dejar constancia.</strong> Si seguís con dolor, conviene dejar constancia médica y laboral.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Creer que una enfermedad previa elimina el reclamo.</strong> Que exista una condición anterior no siempre significa que la ART puede rechazar todo. El trabajo puede agravar o manifestar una lesión preexistente.</li>
</ul>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Preguntas frecuentes</h2>
<div class="space-y-6">
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Qué hago si la ART me rechazó el accidente?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Tenés que pedir el rechazo por escrito, guardar toda la documentación médica e iniciar el trámite ante Comisión Médica. La SRT reconoce el trámite por rechazo de la contingencia cuando el trabajador quiere que se revise la decisión de la ART.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Puedo reclamar indemnización si la ART rechazó el siniestro?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Sí, pero primero hay que discutir el rechazo. Si se logra reconocer que el accidente tiene relación laboral y quedan secuelas incapacitantes, puede corresponder una indemnización por accidente laboral.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿La ART puede decir que mi lesión es "preexistente"?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Puede decirlo, pero tiene que poder justificarlo. No alcanza con mencionar que había una patología previa. Hay que analizar si el trabajo agravó o desencadenó la dolencia. Cada caso se revisa con documentación concreta.</p>
  </div>
</div>`,
        },
        {
            slug: 'accidente-in-itinere-como-probarlo-ante-la-art',
            titulo: 'Accidente in itinere: cómo probarlo ante la ART',
            metaDescription: 'Sufriste un accidente in itinere. Conocé qué pruebas necesitás, cómo reclamar ante la ART y cuándo corresponde indemnización laboral.',
            excerpt: 'Un accidente in itinere se prueba con documentación del trayecto, atención médica y relato coherente. Te explicamos qué juntar y cómo armarlo.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-05-08',
            fechaModificacion: '2026-05-08',
            categoria: 'Accidentes Laborales',
            tiempoLectura: 7,
            howToSteps: [
              { name: 'Denunciá el accidente de inmediato', text: 'Avisá al empleador y a la ART por escrito indicando fecha, hora, lugar exacto y hacia dónde ibas.' },
              { name: 'Buscá atención médica inmediata', text: 'Pedí constancia de la guardia. El primer certificado médico conecta el accidente con la lesión.' },
              { name: 'Guardá pruebas del recorrido', text: 'Capturas de ubicación, boleto de colectivo, SUBE, foto del lugar, denuncia policial si hubo choque, datos de testigos.' },
              { name: 'Mantené el relato coherente', text: 'Contá el hecho de la misma manera en la guardia, al empleador y ante la ART. Las contradicciones pueden invalidar el reclamo.' },
              { name: 'Verificá si la ART aceptó o rechazó', text: 'Si hay rechazo, pedilo por escrito. Ese documento sirve para iniciar el reclamo ante Comisión Médica.' },
              { name: 'Consultá antes de la Comisión Médica', text: 'Ordená estudios, certificados y pruebas del trayecto. Una presentación bien armada puede cambiar el resultado.' },
            ],
            contenidoHtml: `
<p class="leading-relaxed mb-5" style="${STYLE_P}">Un accidente in itinere puede cambiarte el día en segundos: vas camino al trabajo o volvés a tu casa y sufrís una caída, un choque o una lesión en la vía pública. El problema aparece después, cuando la ART empieza a pedir pruebas, cuestiona el recorrido o insinúa que "no corresponde cobertura".</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Muchos trabajadores se confían pensando que alcanza con decir "me accidenté yendo al trabajo". Pero en la práctica no siempre es tan simple. La ART suele revisar horarios, trayecto, atención médica, denuncia policial y cualquier dato que confirme o contradiga el relato.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">¿Qué dice la ley?</h2>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La Ley de Riesgos del Trabajo contempla como accidente laboral el que sucede en el trayecto entre el domicilio del trabajador y el lugar de trabajo. Ese supuesto se conoce como accidente in itinere. La ley exige que el hecho tenga relación con el recorrido laboral, sin una interrupción o desvío ajeno a esa finalidad.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La discusión no suele ser solo médica. También es probatoria. Hay que demostrar dónde ocurrió el accidente, a qué hora, cuál era tu jornada, cuál era tu recorrido habitual y qué lesión sufriste. Por eso, en un <a href="/accidente-in-itinere" style="color:#045fc3;font-weight:600;">accidente in itinere</a> ART, la clave está en unir tres cosas: el hecho, el trayecto y la lesión.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Paso a paso: qué hacer</h2>
<ol class="space-y-4 ml-5 list-decimal mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Hacé la denuncia lo antes posible.</strong> Avisale a tu empleador y a la ART apenas puedas, por escrito. Indicá fecha, hora, lugar exacto, cómo ocurrió y hacia dónde ibas.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Buscá atención médica inmediata.</strong> Si fuiste a una guardia, pedí constancia. El primer certificado médico conecta el accidente con la lesión. Si esperás varios días, la ART puede cuestionar el nexo.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Guardá pruebas del recorrido.</strong> Capturas de ubicación, boleto de colectivo, ticket de SUBE, foto del lugar, denuncia policial si hubo choque, datos de testigos, mensajes enviados al empleador.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No cambies el relato.</strong> Uno de los errores más frecuentes es contar el hecho de una manera en la guardia y de otra ante la ART. Contá exactamente qué pasó, dónde, a qué hora y hacia dónde ibas.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Revisá si la ART aceptó o rechazó el caso.</strong> Si hay rechazo, pedilo por escrito con el motivo. Ese documento sirve para iniciar el reclamo ante Comisión Médica.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Consultá antes de presentarte a Comisión Médica.</strong> La Comisión evalúa documentación. Una presentación bien armada puede cambiar el resultado del trámite.</li>
</ol>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Errores comunes que cometen los trabajadores</h2>
<ul class="space-y-3 ml-5 list-disc mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No denunciar el accidente el mismo día.</strong> Muchos esperan "a ver si se les pasa". Eso complica el nexo entre el accidente y la lesión.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No pedir constancia médica.</strong> Ir a la guardia y retirarse sin certificado es un problema. El papel que acredita fecha y diagnóstico puede ser clave.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No guardar pruebas del recorrido.</strong> En accidente in itinere, no alcanza con demostrar que te lesionaste. También hay que probar que ocurrió yendo o volviendo del trabajo.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Pensar que si no hubo choque no hay reclamo.</strong> Una caída caminando, una lesión bajando del colectivo o un accidente en bicicleta también califican. Lo importante es que ocurra en el trayecto laboral.</li>
</ul>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Preguntas frecuentes</h2>
<div class="space-y-6">
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Qué se considera accidente in itinere?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Es el accidente que ocurre en el trayecto entre tu domicilio y el lugar de trabajo, o viceversa. Tiene que existir relación con el recorrido laboral. Si hubo un desvío personal importante, la ART puede discutir la cobertura.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Qué pruebas necesito para reclamar?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Sirven certificados médicos, denuncia policial, fotos, testigos, comprobantes de transporte, ubicación, horarios laborales y cualquier documento que demuestre que estabas yendo o volviendo del trabajo.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Qué pasa si la ART rechaza el accidente in itinere?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Podés reclamar ante la Comisión Médica y discutir el rechazo. Si se reconoce el siniestro y quedan secuelas, puede corresponder una indemnización por accidente laboral.</p>
  </div>
</div>`,
        },
        {
            slug: 'como-impugnar-porcentaje-incapacidad-art',
            titulo: 'Cómo impugnar el porcentaje de incapacidad de la Comisión Médica',
            metaDescription: 'Si la Comisión Médica fijó un porcentaje bajo, conocé cómo impugnar la incapacidad ART y reclamar una indemnización justa.',
            excerpt: 'Que la Comisión Médica te dé un porcentaje bajo no significa que tenés que aceptarlo. Te explicamos cómo revisar el dictamen e impugnar.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-05-08',
            fechaModificacion: '2026-05-08',
            categoria: 'Comisiones Médicas',
            tiempoLectura: 8,
            howToSteps: [
              { name: 'Leé el dictamen completo', text: 'No solo el porcentaje final. Revisá qué lesiones reconoció la CM, qué estudios analizó y qué secuelas descartó.' },
              { name: 'Compará con tus estudios médicos', text: 'Verificá si las resonancias, ecografías e informes fueron considerados. Si el dictamen dice "sin secuelas" con estudios que muestran lesión, hay fundamento para impugnar.' },
              { name: 'Verificá si evaluaron todas las zonas', text: 'En accidentes con múltiples lesiones, revisá que la CM haya evaluado cada zona afectada.' },
              { name: 'No aceptes sin entender', text: 'Antes de firmar cualquier liquidación, confirmá que el porcentaje esté bien calculado.' },
              { name: 'Presentá la impugnación con fundamentos', text: 'Explicá qué lesión fue omitida, qué estudio ignoraron y cómo impacta en el porcentaje correcto.' },
              { name: 'Consultá inmediatamente tras recibir el dictamen', text: 'Los plazos para impugnar son cortos. Un abogado laboralista puede analizar el dictamen y actuar a tiempo.' },
            ],
            contenidoHtml: `
<p class="leading-relaxed mb-5" style="${STYLE_P}">A muchos trabajadores les pasa lo mismo: sufren un accidente laboral, hacen tratamiento con la ART, van a la Comisión Médica y esperan que se reconozcan las secuelas reales. Pero cuando llega el dictamen, el porcentaje de incapacidad es mucho más bajo de lo esperado. A veces incluso figura 0%, aunque la persona sigue con dolor y limitación.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La respuesta es que el dictamen de Comisión Médica puede ser cuestionado si existen fundamentos médicos y legales. Hay que revisar qué evaluaron, qué omitieron y si el porcentaje refleja realmente las secuelas del accidente.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">¿Qué dice la ley?</h2>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La Ley de Riesgos del Trabajo establece que las incapacidades laborales permanentes son evaluadas dentro del sistema y que, cuando quedan secuelas, puede corresponder una prestación dineraria. El porcentaje de incapacidad influye directamente en la indemnización por accidente laboral. Por eso no es un dato menor: un 0%, un 8% o un 20% pueden cambiar completamente el resultado económico del caso.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">La <a href="/comisiones-medicas" style="color:#045fc3;font-weight:600;">Comisión Médica</a> interviene en conflictos entre el trabajador y la ART sobre cobertura, <a href="/alta-medica-art" style="color:#045fc3;font-weight:600;">alta médica</a> y determinación de incapacidad. Impugnar el porcentaje de incapacidad ART significa revisar si el dictamen aplicó correctamente el baremo, si tuvo en cuenta todos los estudios y si evaluó todas las lesiones denunciadas.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Paso a paso: qué hacer</h2>
<ol class="space-y-4 ml-5 list-decimal mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Leé el dictamen completo, no solo el porcentaje.</strong> Hay que revisar qué lesiones reconoció la Comisión, qué estudios mencionó, qué movilidad midió y qué secuelas descartó. A veces el problema no está en el número sino en que dejaron afuera una lesión importante.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Compará el dictamen con tus estudios médicos.</strong> Si tenés resonancias, ecografías, electromiogramas o informes traumatológicos, verificá si fueron considerados. Si el dictamen dice "sin secuelas" pero los estudios muestran lesión objetiva, hay un punto para discutir.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Revisá si evaluaron todas las zonas afectadas.</strong> En accidentes laborales es común que haya más de una lesión. Si la Comisión solo evaluó una zona y omitió otra, el porcentaje puede quedar artificialmente bajo.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No aceptes una propuesta sin entenderla.</strong> Si aparece una liquidación basada en el porcentaje determinado, antes de aceptar revisá si ese porcentaje está bien calculado. Una vez que se firma sin reserva, discutirlo después puede ser mucho más difícil.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Presentá la impugnación con fundamentos.</strong> No alcanza con decir "me parece poco". Hay que explicar qué lesión no se evaluó, qué estudio fue ignorado, qué baremo corresponde aplicar y cómo impacta en la incapacidad.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Consultá rápido después de recibir el dictamen.</strong> Los plazos en estos trámites son importantes. Apenas recibís el dictamen de Comisión Médica, conviene revisarlo con un abogado laboralista.</li>
</ol>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Errores comunes que cometen los trabajadores</h2>
<ul class="space-y-3 ml-5 list-disc mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Mirar solo el número final.</strong> El porcentaje importa, pero también cómo llegaron a ese número. Si el dictamen está mal fundado, hay que detectarlo en el contenido.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No llevar estudios actualizados.</strong> Ir a Comisión Médica sin estudios completos puede perjudicar el reclamo. La lesión tiene que estar documentada.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Decir que "está todo bien" en la revisión médica.</strong> Muchos trabajadores minimizan el dolor por vergüenza o apuro. Después el dictamen refleja una situación mejor que la real.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Aceptar por necesidad económica.</strong> Es entendible querer cobrar rápido, pero aceptar sin revisar puede implicar perder una diferencia importante.</li>
</ul>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Preguntas frecuentes</h2>
<div class="space-y-6">
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Puedo impugnar un dictamen de Comisión Médica?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Sí. Si el porcentaje no refleja tus secuelas, si omitieron lesiones o si no valoraron correctamente los estudios, el dictamen puede ser cuestionado. Para eso hay que revisar el caso concreto y los plazos aplicables.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Qué pasa si me dieron 0% de incapacidad?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Un 0% significa que la Comisión consideró que no quedaron secuelas incapacitantes. Pero si seguís con limitación, dolor o pérdida de fuerza, y hay estudios que lo respaldan, puede analizarse la impugnación.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿El porcentaje define cuánto voy a cobrar?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Sí, el porcentaje de incapacidad es uno de los elementos centrales para calcular la indemnización. También influyen el ingreso base y la edad. Por eso un porcentaje mal determinado puede afectar directamente el monto final.</p>
  </div>
</div>`,
        },
        {
            slug: 'art-no-paga-baja-laboral',
            titulo: 'ART no paga durante la baja laboral: qué hacer',
            metaDescription: 'Si la ART no te paga durante la baja laboral, conocé cómo reclamar, qué documentación guardar y cuándo acudir a Comisión Médica.',
            excerpt: 'Después de un accidente laboral, la ART no siempre paga correctamente durante la baja. Te explicamos qué verificar y cómo reclamar el pago.',
            autor: 'Bruno Capeletti',
            autorSlug: 'bruno-capeletti',
            matricula: 'C.S.J.S.F. T° XVI F° 48',
            fechaPublicacion: '2026-05-09',
            fechaModificacion: '2026-05-09',
            categoria: 'Accidentes Laborales',
            tiempoLectura: 7,
            howToSteps: [
              { name: 'Confirmá si la ART aceptó el siniestro', text: 'Si la ART rechazó el accidente, primero hay que impugnar ese rechazo ante Comisión Médica. Si lo aceptó, revisá por qué no está pagando.' },
              { name: 'Guardá todos los certificados de baja', text: 'Cada certificado que indique reposo o imposibilidad de trabajar es prueba del período durante el cual corresponde el pago.' },
              { name: 'Revisá tus recibos y transferencias', text: 'Compará lo que cobraste antes del accidente con lo que recibiste durante la baja. Guardá comprobantes y movimientos bancarios.' },
              { name: 'Pedí explicación por escrito', text: 'Si la ART no paga, solicitá respuesta escrita. Evitá quedarte solo con llamados telefónicos sin constancia.' },
              { name: 'No aceptes pagos mal liquidados sin revisar', text: 'Si el monto es bajo o irregular, revisá antes de cerrar el reclamo. Puede estar mal calculado.' },
              { name: 'Reclamá ante la instancia correspondiente', text: 'Según el motivo del impago, el camino puede ser Comisión Médica, la SRT o acción judicial. Un abogado puede definir cuál corresponde.' },
            ],
            contenidoHtml: `
<p class="leading-relaxed mb-5" style="${STYLE_P}">Después de un accidente de trabajo, muchos trabajadores no solo tienen que enfrentar el dolor y el tratamiento médico. También aparece otro problema grave: la ART no paga, paga tarde o el trabajador cobra menos de lo que esperaba durante la baja laboral.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Esa situación genera mucha angustia. La persona no puede trabajar, tiene gastos médicos, necesita trasladarse a controles, depende de su sueldo y de pronto empieza a tener problemas para cubrir lo básico. En algunos casos, el empleador y la ART se pasan la responsabilidad entre ellos, mientras el trabajador queda esperando.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Durante la incapacidad laboral temporaria, es decir, mientras estás de baja por el accidente o enfermedad profesional, corresponde que sigas percibiendo las prestaciones dinerarias que marca el sistema. Si la ART no paga correctamente, se puede reclamar.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">¿Qué dice la ley?</h2>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Cuando un trabajador sufre un accidente laboral o una enfermedad profesional y queda imposibilitado de trabajar temporalmente, se configura una incapacidad laboral temporaria. En ese período, el sistema de riesgos del trabajo prevé prestaciones dinerarias para reemplazar el ingreso mientras la persona se recupera.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">El problema suele aparecer cuando la ART demora la aceptación del siniestro, rechaza la cobertura, discute la fecha de inicio de la baja, interpreta mal los certificados médicos o calcula mal el monto. También puede pasar que el trabajador cobre, pero menos de lo que corresponde.</p>
<p class="leading-relaxed mb-5" style="${STYLE_P}">Este tema también se relaciona con la <a href="/calculo-indemnizacion-art" style="color:#045fc3;font-weight:600;">indemnización por accidente laboral</a>. El pago durante la baja es una cosa; la indemnización por incapacidad permanente es otra. La primera cubre el período en que no podés trabajar. La segunda corresponde si, al final del tratamiento, quedan secuelas incapacitantes.</p>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Paso a paso: qué hacer</h2>
<ol class="space-y-4 ml-5 list-decimal mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Confirmá si la ART aceptó el siniestro.</strong> Si rechazó el accidente, primero hay que impugnar ese rechazo ante <a href="/comisiones-medicas" style="color:#045fc3;font-weight:600;">Comisión Médica</a>. Si lo aceptó y brindó tratamiento, entonces revisar por qué no se están pagando las prestaciones.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Guardá todos los certificados de baja.</strong> Cada certificado que indique reposo, incapacidad temporaria, tratamiento o imposibilidad de trabajar es importante. No alcanza con haber ido a la ART. Tenés que conservar constancias escritas.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Revisá tus recibos de sueldo y transferencias.</strong> Compará qué cobraste antes del accidente y qué estás cobrando durante la baja. Guardá recibos, movimientos bancarios y comprobantes. Si hay diferencias, necesitás poder mostrarlas.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Pedí explicación por escrito.</strong> Si la ART no paga, pedí una respuesta clara. Conviene evitar quedarse solo con llamados telefónicos. Un mail, mensaje o constancia escrita ayuda a demostrar que reclamaste.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No aceptes pagos mal liquidados sin revisar.</strong> A veces el trabajador cobra algo y piensa que está todo bien, pero el monto puede estar mal calculado. Si el pago es bajo, irregular o no coincide con los períodos de baja, revisalo antes de cerrar el reclamo.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Reclamá ante la instancia correspondiente.</strong> Si hay falta de pago, rechazo o demora injustificada, el caso puede llevarse a revisión. La estrategia depende de lo que haya pasado: no es lo mismo una ART que rechazó el siniestro que una que aceptó el caso pero no está pagando correctamente.</li>
</ol>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Errores comunes que cometen los trabajadores</h2>
<ul class="space-y-3 ml-5 list-disc mb-5">
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No guardar recibos ni comprobantes.</strong> Para reclamar pagos, hay que poder demostrar qué se cobró y qué faltó cobrar.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Confundir el pago de la baja con la indemnización.</strong> Son conceptos distintos. Podés tener derecho a ambos, según el caso.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Esperar meses sin reclamar.</strong> Cuanto más tiempo pasa, más difícil se vuelve ordenar fechas, montos y certificados.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">No pedir constancia de la baja médica.</strong> Si no hay certificado que indique que no podías trabajar, la ART puede discutir el período reclamado.</li>
  <li class="leading-relaxed" style="${STYLE_P}"><strong class="font-semibold" style="${STYLE_H3}">Aceptar explicaciones verbales.</strong> Cuando hay falta de pago, conviene dejar constancia escrita del reclamo.</li>
</ul>

<h2 class="text-2xl font-bold mt-10 mb-4" style="${STYLE_H2}">Preguntas frecuentes</h2>
<div class="space-y-6">
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿La ART tiene que pagarme mientras estoy de baja?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">En términos generales, si el accidente o enfermedad está cubierto y no podés trabajar por indicación médica, corresponde que percibas las prestaciones dinerarias durante la incapacidad laboral temporaria.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Qué hago si la ART no me paga?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Guardá certificados, recibos y comprobantes. Pedí explicación por escrito y consultá para reclamar la regularización. Si la falta de pago se vincula con un rechazo del siniestro, primero hay que discutir ese rechazo.</p>
  </div>
  <div>
    <h3 class="font-bold mb-2" style="${STYLE_H3}">¿Puedo reclamar indemnización además del pago de la baja?</h3>
    <p class="leading-relaxed" style="${STYLE_P}">Sí, son cosas distintas. El pago durante la baja cubre el período en que no trabajás por la lesión. La indemnización puede corresponder si después del tratamiento quedan secuelas permanentes.</p>
  </div>
</div>`,
        },
    ];

    ngOnInit(): void {
        const slug = this.route.snapshot.params['slug'];
        this.post = this.posts.find(p => p.slug === slug) ?? null;

        if (this.post) {
            this.breadcrumbs = [
                { label: 'Inicio', url: '/' },
                { label: 'Blog', url: '/blog' },
                { label: this.post.titulo, url: '/blog/' + slug },
            ];
            if (this.post.contenidoHtml) {
                this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.post.contenidoHtml);
            }
            const articleSchema = this.seoService.getArticleSchema({
                titulo: this.post.titulo,
                descripcion: this.post.metaDescription,
                fechaPublicacion: this.post.fechaPublicacion,
                fechaModificacion: this.post.fechaModificacion,
                autor: this.post.autor,
                slug,
                seccion: 'blog',
            });
            const speakable = this.seoService.getSpeakableSchema(`https://capelettiabogados.com/blog/${slug}`);
            const schema = this.post.howToSteps
                ? {
                    '@context': 'https://schema.org',
                    '@graph': [
                        articleSchema,
                        {
                            '@type': 'HowTo',
                            name: this.post.titulo,
                            description: this.post.excerpt,
                            step: this.post.howToSteps.map((s, i) => ({
                                '@type': 'HowToStep',
                                position: i + 1,
                                name: s.name,
                                text: s.text,
                            })),
                        },
                        speakable,
                    ],
                  }
                : { '@context': 'https://schema.org', '@graph': [articleSchema, speakable] };
            this.seoService.setPage({
                title: this.post.titulo,
                description: this.post.metaDescription,
                path: '/blog/' + slug,
                ogType: 'article',
                ogImage: this.seoService.ogImages.blog,
                schema,
            });
        }
    }
}
