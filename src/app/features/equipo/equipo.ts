import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';
import { ABOGADOS_DATA } from '../../core/data/abogados.data';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './equipo.html',
})
export class EquipoComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Nuestros Abogados', url: '/abogados' },
  ];

  readonly abogados = ABOGADOS_DATA;

  readonly faqs = [
    {
      pregunta: '¿Los abogados de Capeletti tienen matrícula activa en mi provincia?',
      respuesta: 'Sí. Bruno Capeletti tiene matrícula activa en Santa Fe, Buenos Aires, CABA, Neuquén, Río Negro y Entre Ríos. Los demás integrantes del equipo cubren el resto de las jurisdicciones donde operamos.',
    },
    {
      pregunta: '¿Puedo elegir a qué abogado me asignan?',
      respuesta: 'Cada caso se asigna según la jurisdicción y la especialidad. Todos los integrantes del equipo trabajan exclusivamente en derecho laboral y riesgos del trabajo, por lo que cualquiera de ellos puede llevar tu reclamo.',
    },
    {
      pregunta: '¿Cómo puedo comunicarme con mi abogado durante el proceso?',
      respuesta: 'A través de WhatsApp, mail o teléfono. Respondemos en menos de 24 horas en días hábiles. Te informamos de cada avance del expediente sin que tengas que estar llamando.',
    },
    {
      pregunta: '¿El equipo trabaja casos en todo el país?',
      respuesta: 'Sí. Operamos en Santa Fe, Neuquén, Río Negro, Entre Ríos, Buenos Aires y Córdoba. Si tu accidente ocurrió en otra provincia, consultanos — en muchos casos podemos asesorarte igual.',
    },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Nuestros Abogados — Equipo Capeletti',
      description: 'Conocé al equipo de abogados de Capeletti Abogados. Especialistas en accidentes laborales con matrícula activa en Santa Fe, Neuquén y Buenos Aires.',
      path: '/abogados',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'Capeletti Abogados',
            url: 'https://capelettiabogados.com',
            logo: 'https://capelettiabogados.com/assets/logo.webp',
            member: this.abogados.map(a => ({
              '@type': 'Person',
              name: `${a.nombre} ${a.apellido}`,
              jobTitle: a.titulo,
              url: `https://capelettiabogados.com/abogados/${a.slug}`,
              identifier: a.matricula,
            })),
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
              { '@type': 'ListItem', position: 2, name: 'Nuestros Abogados', item: 'https://capelettiabogados.com/abogados' },
            ],
          },
        ],
      },
    });
  }
}
