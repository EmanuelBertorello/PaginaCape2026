import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // === HOME ===
  { path: '', renderMode: RenderMode.Prerender },

  // === PÁGINAS DE SERVICIO PRINCIPAL ===
  { path: 'accidente-de-trabajo', renderMode: RenderMode.Prerender },
  { path: 'despido-sin-causa', renderMode: RenderMode.Prerender },

  // === CORE PAGES ===
  { path: 'sobre-nosotros', renderMode: RenderMode.Prerender },
  { path: 'abogados', renderMode: RenderMode.Prerender },
  { path: 'resultados', renderMode: RenderMode.Prerender },
  { path: 'honorarios', renderMode: RenderMode.Prerender },
  { path: 'preguntas-frecuentes', renderMode: RenderMode.Prerender },
  { path: 'calculadoras-de-indemnizacion', renderMode: RenderMode.Prerender },
  { path: 'contactanos', renderMode: RenderMode.Prerender },
  { path: 'medios', renderMode: RenderMode.Prerender },
  { path: 'sedes', renderMode: RenderMode.Prerender },

  // === ART ===
  { path: 'nuevo-baremo-art-2026', renderMode: RenderMode.Prerender },
  { path: 'alta-medica-art', renderMode: RenderMode.Prerender },
  { path: 'rechazo-art', renderMode: RenderMode.Prerender },
  { path: 'como-cobrar-la-art', renderMode: RenderMode.Prerender },
  { path: 'abogado-art-argentina', renderMode: RenderMode.Prerender },
  { path: 'calculo-indemnizacion-art', renderMode: RenderMode.Prerender },
  { path: 'impugnacion-alta-medica', renderMode: RenderMode.Prerender },
  { path: 'juicio-contra-art', renderMode: RenderMode.Prerender },
  { path: 'reclamar-contra-art', renderMode: RenderMode.Prerender },
  { path: 'muerte-laboral', renderMode: RenderMode.Prerender },

  // === COMISIONES MÉDICAS HUB ===
  { path: 'comisiones-medicas', renderMode: RenderMode.Prerender },

  // === COMISIONES MÉDICAS — SANTA FE ===
  { path: 'comision-medica-rosario', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-santa-fe', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-reconquista', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-rafaela', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-venado-tuerto', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-san-francisco', renderMode: RenderMode.Prerender },

  // === COMISIONES MÉDICAS — GBA ===
  { path: 'comision-medica-caba', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-la-plata', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-ramos-mejia', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-moron', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-moreno', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-san-isidro', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-san-martin', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-lomas-de-zamora', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-lanus', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-quilmes', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-ezeiza', renderMode: RenderMode.Prerender },

  // === COMISIONES MÉDICAS — BUENOS AIRES INTERIOR ===
  { path: 'comision-medica-bahia-blanca', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-mar-del-plata', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-pergamino', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-junin', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-zarate', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-saladillo', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-tandil', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-trenque-lauquen', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-dolores', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-azul', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-pinamar', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-necochea', renderMode: RenderMode.Prerender },

  // === COMISIONES MÉDICAS — NEUQUÉN ===
  { path: 'comision-medica-neuquen', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-plaza-huincul', renderMode: RenderMode.Prerender },

  // === COMISIONES MÉDICAS — RÍO NEGRO ===
  { path: 'comision-medica-bariloche', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-viedma', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-general-roca', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-cipolletti', renderMode: RenderMode.Prerender },

  // === COMISIONES MÉDICAS — ENTRE RÍOS ===
  { path: 'comision-medica-parana', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-concordia', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-concepcion-del-uruguay', renderMode: RenderMode.Prerender },

  // === COMISIONES MÉDICAS — CÓRDOBA ===
  { path: 'comision-medica-cordoba', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-rio-cuarto', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-villa-maria', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-bell-ville', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-villa-dolores', renderMode: RenderMode.Prerender },
  { path: 'comision-medica-laboulaye', renderMode: RenderMode.Prerender },

  // === LANDINGS DE LESIONES ===
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

  // === HUBS PROVINCIALES ===
  { path: 'santa-fe', renderMode: RenderMode.Prerender },
  { path: 'neuquen', renderMode: RenderMode.Prerender },
  { path: 'rio-negro', renderMode: RenderMode.Prerender },
  { path: 'entre-rios', renderMode: RenderMode.Prerender },
  { path: 'buenos-aires', renderMode: RenderMode.Prerender },
  { path: 'cordoba', renderMode: RenderMode.Prerender },

  // === ABOGADOS ===
  {
    path: 'abogados/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'bruno-capeletti' },
        { slug: 'rocio-bello' },
        { slug: 'daiana-parache' },
        { slug: 'laureano-bamonde' },
        { slug: 'julian-casalli' },
      ];
    },
  },

  // === CIUDADES — SANTA FE ===
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

  // === CIUDADES — NEUQUÉN ===
  {
    path: 'neuquen/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'neuquen-capital' },
        { ciudad: 'zapala' },
        { ciudad: 'plaza-huincul' },
      ];
    },
  },

  // === CIUDADES — RÍO NEGRO ===
  {
    path: 'rio-negro/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'bariloche' },
        { ciudad: 'viedma' },
        { ciudad: 'general-roca' },
        { ciudad: 'cipolletti' },
      ];
    },
  },

  // === CIUDADES — ENTRE RÍOS ===
  {
    path: 'entre-rios/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'parana' },
        { ciudad: 'concordia' },
        { ciudad: 'concepcion-del-uruguay' },
      ];
    },
  },

  // === CIUDADES — BUENOS AIRES ===
  {
    path: 'buenos-aires/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'caba' },
        { ciudad: 'la-plata' },
        { ciudad: 'bahia-blanca' },
        { ciudad: 'mar-del-plata' },
        { ciudad: 'ramos-mejia' },
        { ciudad: 'moron' },
        { ciudad: 'moreno' },
        { ciudad: 'san-isidro' },
        { ciudad: 'general-san-martin' },
        { ciudad: 'lomas-de-zamora' },
        { ciudad: 'lanus' },
        { ciudad: 'quilmes' },
        { ciudad: 'ezeiza' },
        { ciudad: 'pergamino' },
        { ciudad: 'junin' },
        { ciudad: 'zarate' },
        { ciudad: 'saladillo' },
        { ciudad: 'tandil' },
        { ciudad: 'trenque-lauquen' },
        { ciudad: 'dolores' },
        { ciudad: 'azul' },
        { ciudad: 'pinamar' },
        { ciudad: 'necochea' },
      ];
    },
  },

  // === CIUDADES — CÓRDOBA ===
  {
    path: 'cordoba/:ciudad',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { ciudad: 'cordoba-capital' },
        { ciudad: 'rio-cuarto' },
        { ciudad: 'san-francisco' },
        { ciudad: 'villa-maria' },
        { ciudad: 'bell-ville' },
        { ciudad: 'villa-dolores' },
        { ciudad: 'laboulaye' },
      ];
    },
  },

  // === BLOG ===
  { path: 'blog', renderMode: RenderMode.Prerender },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'inconstitucionalidad-decreto-549-2025' },
        { slug: 'que-hacer-despues-de-un-accidente-laboral' },
        { slug: 'como-calcular-indemnizacion-art' },
        { slug: 'hernia-de-disco-baremo-2026' },
      ];
    },
  },

  // === GUÍAS ===
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

  // === 404 ===
  { path: '**', renderMode: RenderMode.Server },
];
