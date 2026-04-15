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
    path: 'comision-medica-reconquista',
    loadComponent: () => import('./features/comisiones-medicas/reconquista/cm-reconquista').then(m => m.CmReconquistaComponent),
  },
  {
    path: 'comision-medica-neuquen',
    loadComponent: () => import('./features/comisiones-medicas/neuquen/cm-neuquen').then(m => m.CmNeuquenComponent),
  },
  {
    path: 'comision-medica-rosario',
    loadComponent: () => import('./features/comisiones-medicas/rosario/cm-rosario').then(m => m.CmRosarioComponent),
  },
  {
    path: 'comision-medica-santa-fe',
    loadComponent: () => import('./features/comisiones-medicas/santa-fe/cm-santa-fe').then(m => m.CmSantaFeComponent),
  },

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
