// === SEO ===
export interface OgData {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
}

export interface BreadcrumbItem {
  label: string;
  url: string;
}

// === LESIONES ===
export type Volumen = 'muy-alto' | 'alto' | 'medio' | 'bajo';

export interface LesionData {
  slug: string;
  titulo: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h2s: string[];
  descripcionCorta: string;
  descripcionLarga: string;
  beneficios: string[];
  cpcEstimado: string;
  volumen: Volumen;
  sectorFoco?: string;
  provinciaFoco?: string;
  iconoSvg?: string;
  faqs: FaqItem[];
}

// === CIUDADES Y PROVINCIAS ===
export interface CiudadData {
  slug: string;
  nombre: string;
  provincia: string;
  provinciaSlug: string;
  descripcion: string;
  poblacion?: string;
  sectorPrincipal?: string;
  cmLocal?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ProvinciaData {
  slug: string;
  nombre: string;
  descripcion: string;
  ciudades: CiudadData[];
  cmPrincipal?: string;
  metaTitle: string;
  metaDescription: string;
}

// === ABOGADOS ===
export interface AbogadoData {
  slug: string;
  nombre: string;
  apellido: string;
  titulo: string;
  matricula: string;
  matriculas?: { colegio: string; numero: string }[];
  universidad: string;
  especializaciones: string[];
  biografia: string;
  foto?: string;
  linkedin?: string;
  provinciasFoco: string[];
  casosEspeciales?: string[];
}

// === FAQs ===
export interface FaqItem {
  pregunta: string;
  respuesta: string;
  categoria?: string;
}

// === RESULTADOS ===
export interface ResultadoData {
  tipo: string;
  lesion: string;
  provincia: string;
  anio: number;
  montoAproximado: string;
  descripcionBreve: string;
  destacado?: boolean;
}

// === BLOG / GUÍAS ===
export interface PostData {
  slug: string;
  titulo: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  contenido?: string;
  autor: string;
  fechaPublicacion: string;
  fechaModificacion: string;
  categoria: string;
  tags: string[];
  tiempoLectura?: number;
}

// === TESTIMONIOS ===
export interface TestimonioData {
  nombre: string;
  lesion: string;
  provincia: string;
  texto: string;
  anio: number;
}

// === MÉTRICAS ===
export interface StatData {
  valor: string;
  etiqueta: string;
  descripcion?: string;
}

// === SCHEMA.ORG ===
export interface SchemaLegalService {
  '@context': string;
  '@type': string | string[];
  name: string;
  url: string;
  telephone?: string;
  areaServed?: string[];
  knowsAbout?: string[];
  address?: SchemaPostalAddress;
}

export interface SchemaPostalAddress {
  '@type': 'PostalAddress';
  streetAddress?: string;
  addressLocality: string;
  addressRegion?: string;
  addressCountry: string;
  postalCode?: string;
}

export interface SchemaFaqPage {
  '@context': string;
  '@type': 'FAQPage';
  mainEntity: SchemaQuestion[];
}

export interface SchemaQuestion {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface SchemaBreadcrumb {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: SchemaBreadcrumbItem[];
}

export interface SchemaBreadcrumbItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}
