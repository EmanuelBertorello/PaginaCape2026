import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { OgData } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'Capeletti Abogados';
  private readonly siteUrl = 'https://capelettiabogados.com';

  setTitle(pageTitle: string): void {
    const fullTitle = `${pageTitle} | ${this.siteName}`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
  }

  setDescription(description: string): void {
    const trimmed = description.substring(0, 160);
    this.meta.updateTag({ name: 'description', content: trimmed });
    this.meta.updateTag({ property: 'og:description', content: trimmed });
    this.meta.updateTag({ name: 'twitter:description', content: trimmed });
  }

  setCanonical(path: string): void {
    const canonicalUrl = path.startsWith('http')
      ? path
      : `${this.siteUrl}${path}`;

    // Remover canonical existente si hay
    const existing = this.document.querySelector('link[rel="canonical"]');
    if (existing) {
      existing.setAttribute('href', canonicalUrl);
    } else {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      this.document.head.appendChild(link);
    }

    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
  }

  setOpenGraph(data: OgData): void {
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: data.url });
    this.meta.updateTag({ property: 'og:type', content: data.type ?? 'website' });
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
    }
  }

  setSchema(schema: object): void {
    // Remover schema anterior de la misma página si existe
    const existing = this.document.querySelector('script[type="application/ld+json"][data-seo="dynamic"]');
    if (existing) {
      existing.remove();
    }

    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', 'dynamic');
    script.textContent = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  setNoIndex(): void {
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }

  setIndex(): void {
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  /**
   * Método de conveniencia: establece title + description + canonical + OG en una llamada
   */
  setPage(params: {
    title: string;
    description: string;
    path: string;
    ogType?: OgData['type'];
    schema?: object;
  }): void {
    const canonicalUrl = `${this.siteUrl}${params.path}`;

    this.setTitle(params.title);
    this.setDescription(params.description);
    this.setCanonical(params.path);
    this.setOpenGraph({
      title: `${params.title} | ${this.siteName}`,
      description: params.description,
      url: canonicalUrl,
      type: params.ogType ?? 'website',
    });

    if (params.schema) {
      this.setSchema(params.schema);
    }
  }

  /**
   * Schema base para LegalService (home + sobre nosotros)
   */
  getLegalServiceSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': ['LegalService', 'Organization'],
      name: 'Capeletti Abogados',
      url: this.siteUrl,
      logo: `${this.siteUrl}/assets/logo.webp`,
      telephone: '+54-11-25007192',
      email: 'consultas@capelettiabogados.com',
      areaServed: ['Santa Fe', 'Neuquén', 'Río Negro', 'Entre Ríos', 'Buenos Aires', 'Ciudad Autónoma de Buenos Aires'],
      knowsAbout: [
        'accidentes laborales',
        'ART',
        'enfermedades profesionales',
        'indemnizaciones laborales',
        'Comisiones Médicas',
        'hernia de disco laboral',
        'accidente in itinere',
      ],
      sameAs: [
        'https://www.linkedin.com/company/capeletti-abogados',
      ],
      priceRange: 'Sin cargo por consulta inicial',
    };
  }

  /**
   * Schema para páginas de FAQ
   */
  getFaqSchema(faqs: Array<{ pregunta: string; respuesta: string }>): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.respuesta,
        },
      })),
    };
  }

  /**
   * Schema para perfiles de abogados
   */
  getPersonSchema(params: {
    nombre: string;
    cargo: string;
    universidad: string;
    matricula: string;
    slug: string;
  }): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: params.nombre,
      jobTitle: params.cargo,
      url: `${this.siteUrl}/abogados/${params.slug}`,
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: params.universidad,
      },
      identifier: params.matricula,
      worksFor: {
        '@type': 'LegalService',
        name: 'Capeletti Abogados',
        url: this.siteUrl,
      },
    };
  }

  /**
   * Schema LocalBusiness para landings de ciudad
   */
  getLocalBusinessSchema(params: {
    ciudad: string;
    provincia: string;
    slug: string;
  }): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `Capeletti Abogados — ${params.ciudad}`,
      url: `${this.siteUrl}/${params.slug}`,
      telephone: '+54-11-25007192',
      address: {
        '@type': 'PostalAddress',
        addressLocality: params.ciudad,
        addressRegion: params.provincia,
        addressCountry: 'AR',
      },
      areaServed: {
        '@type': 'City',
        name: params.ciudad,
      },
    };
  }

  /**
   * Schema Article para blog y guías
   */
  getArticleSchema(params: {
    titulo: string;
    descripcion: string;
    fechaPublicacion: string;
    fechaModificacion: string;
    autor: string;
    slug: string;
    seccion: 'blog' | 'guias';
  }): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: params.titulo,
      description: params.descripcion,
      url: `${this.siteUrl}/${params.seccion}/${params.slug}`,
      datePublished: params.fechaPublicacion,
      dateModified: params.fechaModificacion,
      author: {
        '@type': 'Person',
        name: params.autor,
        url: `${this.siteUrl}/abogados/bruno-capeletti`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Capeletti Abogados',
        url: this.siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${this.siteUrl}/assets/logo.webp`,
        },
      },
    };
  }

  /**
   * Schema BreadcrumbList
   */
  getBreadcrumbSchema(items: Array<{ label: string; url: string }>): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: item.url.startsWith('http') ? item.url : `${this.siteUrl}${item.url}`,
      })),
    };
  }
}
