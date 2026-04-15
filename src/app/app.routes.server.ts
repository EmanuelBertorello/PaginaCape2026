import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Páginas estáticas
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'sobre-nosotros', renderMode: RenderMode.Prerender },
  { path: 'abogados', renderMode: RenderMode.Prerender },
  { path: 'resultados', renderMode: RenderMode.Prerender },
  { path: 'honorarios', renderMode: RenderMode.Prerender },
  { path: 'preguntas-frecuentes', renderMode: RenderMode.Prerender },
  { path: 'calculadoras-de-indemnizacion', renderMode: RenderMode.Prerender },
  { path: 'contactanos', renderMode: RenderMode.Prerender },
  { path: 'medios', renderMode: RenderMode.Prerender },
  { path: 'nuevo-baremo-art-2026', renderMode: RenderMode.Prerender },
  { path: 'alta-medica-art', renderMode: RenderMode.Prerender },
  { path: 'rechazo-art', renderMode: RenderMode.Prerender },
  { path: 'como-cobrar-la-art', renderMode: RenderMode.Prerender },
  { path: 'comisiones-medicas', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-reconquista', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-neuquen', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-rosario', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-santa-fe', renderMode: RenderMode.Prerender },

  // Landings de lesiones
  { path: 'hernia-de-disco-laboral', renderMode: RenderMode.Prerender },
  { path: 'lumbalgia-laboral', renderMode: RenderMode.Prerender },
  { path: 'manguito-rotador-laboral', renderMode: RenderMode.Prerender },
  { path: 'accidente-obra-construccion', renderMode: RenderMode.Prerender },
  { path: 'fallecimiento-accidente-laboral', renderMode: RenderMode.Prerender },
  { path: 'gran-invalidez', renderMode: RenderMode.Prerender },
  { path: 'accidente-in-itinere', renderMode: RenderMode.Prerender },
  { path: 'lesion-meniscos-laboral', renderMode: RenderMode.Prerender },
  { path: 'fractura-muneca-laboral', renderMode: RenderMode.Prerender },
  { path: 'tunel-carpiano-laboral', renderMode: RenderMode.Prerender },
  { path: 'hipoacusia-laboral', renderMode: RenderMode.Prerender },
  { path: 'enfermedad-profesional', renderMode: RenderMode.Prerender },

  // Hubs provinciales
  { path: 'santa-fe', renderMode: RenderMode.Prerender },
  { path: 'neuquen', renderMode: RenderMode.Prerender },
  { path: 'rio-negro', renderMode: RenderMode.Prerender },
  { path: 'entre-rios', renderMode: RenderMode.Prerender },
  { path: 'buenos-aires', renderMode: RenderMode.Prerender },

  // Abogados con parámetro
  {
    path: 'abogados/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'bruno-capeletti' },
        { slug: 'valeria-mendez' },
        { slug: 'martin-suarez' },
      ];
    },
  },

  // Ciudades por provincia
  {
    path: 'santa-fe/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'rosario' },
        { ciudad: 'santa-fe-capital' },
        { ciudad: 'reconquista' },
        { ciudad: 'rafaela' },
        { ciudad: 'venado-tuerto' },
      ];
    },
  },
  {
    path: 'neuquen/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'neuquen-capital' },
        { ciudad: 'zapala' },
      ];
    },
  },
  {
    path: 'rio-negro/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'bariloche' },
        { ciudad: 'viedma' },
      ];
    },
  },
  {
    path: 'entre-rios/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'parana' },
        { ciudad: 'concordia' },
      ];
    },
  },
  {
    path: 'buenos-aires/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'caba' },
        { ciudad: 'bahia-blanca' },
        { ciudad: 'mar-del-plata' },
      ];
    },
  },

  // Artículos / Landings
  { path: 'abogado-art-argentina', renderMode: RenderMode.Prerender },
  { path: 'calculo-indemnizacion-art', renderMode: RenderMode.Prerender },
  { path: 'impugnacion-alta-medica', renderMode: RenderMode.Prerender },
  { path: 'juicio-contra-art', renderMode: RenderMode.Prerender },
  { path: 'reclamar-contra-art', renderMode: RenderMode.Prerender },
  { path: 'muerte-laboral', renderMode: RenderMode.Prerender },

  // Blog
  { path: 'blog', renderMode: RenderMode.Prerender },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'que-hacer-despues-de-un-accidente-laboral' },
        { slug: 'como-calcular-indemnizacion-art' },
        { slug: 'hernia-de-disco-baremo-2026' },
      ];
    },
  },

  // Guías
  { path: 'guias', renderMode: RenderMode.Prerender },
  {
    path: 'guias/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'guia-completa-accidente-laboral' },
        { slug: 'guia-comision-medica' },
        { slug: 'guia-enfermedades-profesionales' },
      ];
    },
  },

  // 404
  { path: '**', renderMode: RenderMode.Server },
];
