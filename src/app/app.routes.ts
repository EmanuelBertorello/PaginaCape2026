import { Routes } from '@angular/router';

export const routes: Routes = [

  // === HOME ===
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
    title: 'Abogados Accidentes Laborales y ART ',
  },

  // === REDIRECTS 301 ===
  { path: 'rosario', redirectTo: '/santa-fe/rosario', pathMatch: 'full' },
  { path: 'santa-fe-ciudad', redirectTo: '/santa-fe/santa-fe-capital', pathMatch: 'full' },
  { path: 'reconquista', redirectTo: '/santa-fe/reconquista', pathMatch: 'full' },
  { path: 'rafaela-y-sunchales', redirectTo: '/santa-fe/rafaela', pathMatch: 'full' },
  { path: 'venado-tuerto', redirectTo: '/santa-fe/venado-tuerto', pathMatch: 'full' },
  { path: 'caba', redirectTo: '/buenos-aires/caba', pathMatch: 'full' },
  { path: 'bahia-blanca', redirectTo: '/buenos-aires/bahia-blanca', pathMatch: 'full' },
  { path: 'mar-del-plata', redirectTo: '/buenos-aires/mar-del-plata', pathMatch: 'full' },

  // === CORE PAGES ===
  {
    path: 'sedes',
    loadComponent: () => import('./features/sedes/sedes').then(m => m.SedesComponent),
    title: 'Nuestras Sedes en Argentina | Capeletti Abogados',
  },
  {
    path: 'sobre-nosotros',
    loadComponent: () => import('./features/sobre-nosotros/sobre-nosotros').then(m => m.SobreNosotrosComponent),
  },
  {
    path: 'abogados',
    loadComponent: () => import('./features/equipo/equipo').then(m => m.EquipoComponent),
  },
  {
    path: 'abogados/:slug',
    loadComponent: () => import('./features/equipo/abogado-perfil').then(m => m.AbogadoPerfilComponent),
  },
  {
    path: 'resultados',
    loadComponent: () => import('./features/resultados/resultados').then(m => m.ResultadosComponent),
  },
  {
    path: 'honorarios',
    loadComponent: () => import('./features/honorarios/honorarios').then(m => m.HonorariosComponent),
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () => import('./features/faq/faq').then(m => m.FaqComponent),
  },
  {
    path: 'calculadoras-de-indemnizacion',
    loadComponent: () => import('./features/calculadoras/calculadoras').then(m => m.CalculadorasComponent),
  },
  {
    path: 'contactanos',
    loadComponent: () => import('./features/contacto/contacto').then(m => m.ContactoComponent),
  },
  {
    path: 'medios',
    loadComponent: () => import('./features/medios/medios').then(m => m.MediosComponent),
  },

  // === URGENCIA / ART ===
  {
    path: 'nuevo-baremo-art-2026',
    loadComponent: () => import('./features/urgencia/nuevo-baremo/nuevo-baremo').then(m => m.NuevoBaremoComponent),
  },
  {
    path: 'alta-medica-art',
    loadComponent: () => import('./features/urgencia/alta-medica/alta-medica').then(m => m.AltaMedicaComponent),
  },
  {
    path: 'rechazo-art',
    loadComponent: () => import('./features/urgencia/rechazo-art/rechazo-art').then(m => m.RechazoArtComponent),
  },
  {
    path: 'como-cobrar-la-art',
    loadComponent: () => import('./features/urgencia/como-cobrar/como-cobrar').then(m => m.ComoCobrarComponent),
  },
  {
    path: 'comisiones-medicas',
    loadComponent: () => import('./features/comisiones-medicas/comisiones-hub').then(m => m.ComisionesMedicasHubComponent),
  },

  // === COMISIONES MÉDICAS LOCALES ===
  {
    path: 'comision-medica-rosario',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-santa-fe',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-reconquista',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-neuquen',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-parana',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-concordia',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-bariloche',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-viedma',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-general-roca',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-cordoba',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },
  {
    path: 'comision-medica-caba',
    loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent),
  },

  // === COMISIONES MÉDICAS — Santa Fe nuevas ===
  { path: 'comision-medica-venado-tuerto', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-rafaela', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-san-francisco', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },

  // === COMISIONES MÉDICAS — GBA ===
  { path: 'comision-medica-ramos-mejia', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-moron', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-moreno', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-san-isidro', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-san-martin', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-lomas-de-zamora', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-lanus', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-quilmes', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-ezeiza', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },

  // === COMISIONES MÉDICAS — Buenos Aires interior ===
  { path: 'comision-medica-la-plata', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-bahia-blanca', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-mar-del-plata', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-pergamino', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-junin', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-zarate', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-saladillo', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-tandil', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-trenque-lauquen', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-dolores', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-azul', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-pinamar', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-necochea', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },

  // === COMISIONES MÉDICAS — Neuquén, Río Negro, Entre Ríos nuevas ===
  { path: 'comision-medica-plaza-huincul', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-cipolletti', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-concepcion-del-uruguay', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },

  // === COMISIONES MÉDICAS — Córdoba nuevas ===
  { path: 'comision-medica-rio-cuarto', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-villa-maria', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-bell-ville', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-villa-dolores', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },
  { path: 'comision-medica-laboulaye', loadComponent: () => import('./features/comisiones-medicas/cm-landing/cm-landing').then(m => m.CmLandingComponent) },

  // === LANDINGS DE LESIONES ===
  {
    path: 'hernia-de-disco-laboral',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'lumbalgia-laboral',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'manguito-rotador-laboral',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'accidente-obra-construccion',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'fallecimiento-accidente-laboral',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'gran-invalidez',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'accidente-in-itinere',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'lesion-meniscos-laboral',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'fractura-muneca-laboral',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'tunel-carpiano-laboral',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'hipoacusia-laboral',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },
  {
    path: 'enfermedad-profesional',
    loadComponent: () => import('./features/lesiones/lesion-page').then(m => m.LesionPageComponent),
  },

  // === HUBS PROVINCIALES ===
  {
    path: 'santa-fe',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/provincias/hub/hub-provincial').then(m => m.HubProvincialComponent),
      },
      {
        path: ':ciudad',
        loadComponent: () => import('./features/provincias/ciudad/landing-ciudad').then(m => m.LandingCiudadComponent),
      },
    ],
  },
  {
    path: 'neuquen',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/provincias/hub/hub-provincial').then(m => m.HubProvincialComponent),
      },
      {
        path: ':ciudad',
        loadComponent: () => import('./features/provincias/ciudad/landing-ciudad').then(m => m.LandingCiudadComponent),
      },
    ],
  },
  {
    path: 'rio-negro',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/provincias/hub/hub-provincial').then(m => m.HubProvincialComponent),
      },
      {
        path: ':ciudad',
        loadComponent: () => import('./features/provincias/ciudad/landing-ciudad').then(m => m.LandingCiudadComponent),
      },
    ],
  },
  {
    path: 'entre-rios',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/provincias/hub/hub-provincial').then(m => m.HubProvincialComponent),
      },
      {
        path: ':ciudad',
        loadComponent: () => import('./features/provincias/ciudad/landing-ciudad').then(m => m.LandingCiudadComponent),
      },
    ],
  },
  {
    path: 'buenos-aires',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/provincias/hub/hub-provincial').then(m => m.HubProvincialComponent),
      },
      {
        path: ':ciudad',
        loadComponent: () => import('./features/provincias/ciudad/landing-ciudad').then(m => m.LandingCiudadComponent),
      },
    ],
  },
  {
    path: 'cordoba',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/provincias/hub/hub-provincial').then(m => m.HubProvincialComponent),
      },
      {
        path: ':ciudad',
        loadComponent: () => import('./features/provincias/ciudad/landing-ciudad').then(m => m.LandingCiudadComponent),
      },
    ],
  },

  // === ARTÍCULOS / LANDINGS ===
  {
    path: 'abogado-art-argentina',
    loadComponent: () => import('./features/articulos/articulo-landing').then(m => m.ArticuloLandingComponent),
  },
  {
    path: 'calculo-indemnizacion-art',
    loadComponent: () => import('./features/articulos/articulo-landing').then(m => m.ArticuloLandingComponent),
  },
  {
    path: 'impugnacion-alta-medica',
    loadComponent: () => import('./features/articulos/articulo-landing').then(m => m.ArticuloLandingComponent),
  },
  {
    path: 'juicio-contra-art',
    loadComponent: () => import('./features/articulos/articulo-landing').then(m => m.ArticuloLandingComponent),
  },
  {
    path: 'reclamar-contra-art',
    loadComponent: () => import('./features/articulos/articulo-landing').then(m => m.ArticuloLandingComponent),
  },
  {
    path: 'muerte-laboral',
    loadComponent: () => import('./features/articulos/articulo-landing').then(m => m.ArticuloLandingComponent),
  },

  // === GUÍAS ===
  {
    path: 'guias',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/guias/guias-hub').then(m => m.GuiasHubComponent),
      },
      {
        path: ':slug',
        loadComponent: () => import('./features/guias/guia-detail').then(m => m.GuiaDetailComponent),
      },
    ],
  },

  // === BLOG ===
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/blog/blog-hub').then(m => m.BlogHubComponent),
      },
      {
        path: ':slug',
        loadComponent: () => import('./features/blog/blog-post').then(m => m.BlogPostComponent),
      },
    ],
  },

  // === 404 ===
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFoundComponent),
  },
];
