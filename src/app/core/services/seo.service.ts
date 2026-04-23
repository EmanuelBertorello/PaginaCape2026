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
  private readonly defaultOgImage = 'https://capelettiabogados.com/og-default.webp';

  setTitle(pageTitle: string): void {
    const fullTitle = pageTitle.includes(' | Capeletti')
      ? pageTitle
      : `${pageTitle} | ${this.siteName}`;
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
    const image = data.image ?? this.defaultOgImage;
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  setSchema(schema: object): void {
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

  setPage(params: {
    title: string;
    description: string;
    path: string;
    ogType?: OgData['type'];
    ogImage?: string;
    schema?: object;
  }): void {
    const canonicalUrl = `${this.siteUrl}${params.path}`;

    this.setTitle(params.title);
    this.setDescription(params.description);
    this.setCanonical(params.path);
    this.setOpenGraph({
      title: params.title.includes(' | Capeletti')
        ? params.title
        : `${params.title} | ${this.siteName}`,
      description: params.description,
      url: canonicalUrl,
      type: params.ogType ?? 'website',
      image: params.ogImage,
    });

    if (params.schema) {
      this.setSchema(params.schema);
    }
  }

  getLegalServiceSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: 'Capeletti Abogados',
      url: this.siteUrl,
      logo: `${this.siteUrl}/assets/logo.webp`,
      image: this.defaultOgImage,
      telephone: '+54-11-25007192',
      email: 'consultas@capelettiabogados.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rosario',
        addressRegion: 'Santa Fe',
        addressCountry: 'AR',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: ['Santa Fe', 'Neuquén', 'Río Negro', 'Entre Ríos', 'Buenos Aires', 'Córdoba', 'Ciudad Autónoma de Buenos Aires'],
      knowsAbout: [
        'accidentes laborales',
        'ART',
        'enfermedades profesionales',
        'indemnizaciones laborales',
        'Comisiones Médicas',
        'hernia de disco laboral',
        'accidente in itinere',
        'despido sin causa',
      ],
      sameAs: [
        'https://www.linkedin.com/company/capeletti-abogados',
      ],
      priceRange: 'Sin cargo por consulta inicial',
    };
  }

  getOrganizationSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Capeletti Abogados',
      url: this.siteUrl,
      logo: `${this.siteUrl}/assets/logo.webp`,
      sameAs: [
        'https://www.linkedin.com/company/capeletti-abogados',
      ],
    };
  }

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

  getArticleSchema(params: {
    titulo: string;
    descripcion: string;
    fechaPublicacion: string;
    fechaModificacion: string;
    autor: string;
    slug: string;
    seccion: 'blog' | 'guias';
    imagen?: string;
  }): object {
    const imageUrl = params.imagen ?? this.defaultOgImage;
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: params.titulo,
      description: params.descripcion,
      url: `${this.siteUrl}/${params.seccion}/${params.slug}`,
      datePublished: params.fechaPublicacion,
      dateModified: params.fechaModificacion,
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
      },
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
