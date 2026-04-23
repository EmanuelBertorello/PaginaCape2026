import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, { Request, Response } from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');
const app = express();
const angularApp = new AngularNodeAppEngine();

const SITE_URL = 'https://capelettiabogados.com';

// ============================================================
// SITEMAP.XML dinámico
// ============================================================
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const today = new Date().toISOString().split('T')[0];

  const urls: Array<{ loc: string; changefreq: string; priority: string; lastmod?: string }> = [
    // Home
    { loc: '/', changefreq: 'weekly', priority: '1.0', lastmod: today },

    // Páginas core
    { loc: '/sobre-nosotros', changefreq: 'monthly', priority: '0.8' },
    { loc: '/abogados', changefreq: 'monthly', priority: '0.8' },
    { loc: '/abogados/bruno-capeletti', changefreq: 'monthly', priority: '0.7' },
    { loc: '/abogados/valeria-mendez', changefreq: 'monthly', priority: '0.7' },
    { loc: '/abogados/martin-suarez', changefreq: 'monthly', priority: '0.7' },
    { loc: '/resultados', changefreq: 'monthly', priority: '0.8' },
    { loc: '/honorarios', changefreq: 'monthly', priority: '0.7' },
    { loc: '/preguntas-frecuentes', changefreq: 'monthly', priority: '0.8' },
    { loc: '/calculadoras-de-indemnizacion', changefreq: 'monthly', priority: '0.7' },
    { loc: '/contactanos', changefreq: 'monthly', priority: '0.9' },
    { loc: '/medios', changefreq: 'monthly', priority: '0.5' },

    // ART y urgencia
    { loc: '/nuevo-baremo-art-2026', changefreq: 'monthly', priority: '0.9', lastmod: today },
    { loc: '/alta-medica-art', changefreq: 'monthly', priority: '0.9' },
    { loc: '/rechazo-art', changefreq: 'monthly', priority: '0.9' },
    { loc: '/como-cobrar-la-art', changefreq: 'monthly', priority: '0.8' },
    { loc: '/comisiones-medicas', changefreq: 'monthly', priority: '0.8' },

    // Comisiones Médicas locales
    { loc: '/comision-medica-rosario', changefreq: 'monthly', priority: '0.8' },
    { loc: '/comision-medica-neuquen', changefreq: 'monthly', priority: '0.8' },
    { loc: '/comision-medica-santa-fe', changefreq: 'monthly', priority: '0.8' },
    { loc: '/comision-medica-reconquista', changefreq: 'monthly', priority: '0.7' },

    // Landings de lesiones
    { loc: '/hernia-de-disco-laboral', changefreq: 'monthly', priority: '0.9' },
    { loc: '/lumbalgia-laboral', changefreq: 'monthly', priority: '0.9' },
    { loc: '/manguito-rotador-laboral', changefreq: 'monthly', priority: '0.8' },
    { loc: '/accidente-obra-construccion', changefreq: 'monthly', priority: '0.9' },
    { loc: '/fallecimiento-accidente-laboral', changefreq: 'monthly', priority: '0.8' },
    { loc: '/gran-invalidez', changefreq: 'monthly', priority: '0.8' },
    { loc: '/accidente-in-itinere', changefreq: 'monthly', priority: '0.9' },
    { loc: '/lesion-meniscos-laboral', changefreq: 'monthly', priority: '0.8' },
    { loc: '/fractura-muneca-laboral', changefreq: 'monthly', priority: '0.7' },
    { loc: '/tunel-carpiano-laboral', changefreq: 'monthly', priority: '0.8' },
    { loc: '/hipoacusia-laboral', changefreq: 'monthly', priority: '0.8' },
    { loc: '/enfermedad-profesional', changefreq: 'monthly', priority: '0.9' },

    // Hubs provinciales
    { loc: '/santa-fe', changefreq: 'monthly', priority: '0.9' },
    { loc: '/neuquen', changefreq: 'monthly', priority: '0.9' },
    { loc: '/rio-negro', changefreq: 'monthly', priority: '0.8' },
    { loc: '/entre-rios', changefreq: 'monthly', priority: '0.8' },
    { loc: '/buenos-aires', changefreq: 'monthly', priority: '0.9' },

    // Ciudades Santa Fe
    { loc: '/santa-fe/rosario', changefreq: 'monthly', priority: '0.8' },
    { loc: '/santa-fe/santa-fe-capital', changefreq: 'monthly', priority: '0.8' },
    { loc: '/santa-fe/reconquista', changefreq: 'monthly', priority: '0.7' },
    { loc: '/santa-fe/rafaela', changefreq: 'monthly', priority: '0.7' },
    { loc: '/santa-fe/venado-tuerto', changefreq: 'monthly', priority: '0.7' },

    // Ciudades Neuquén
    { loc: '/neuquen/neuquen-capital', changefreq: 'monthly', priority: '0.8' },
    { loc: '/neuquen/zapala', changefreq: 'monthly', priority: '0.6' },

    // Ciudades Río Negro
    { loc: '/rio-negro/bariloche', changefreq: 'monthly', priority: '0.7' },
    { loc: '/rio-negro/viedma', changefreq: 'monthly', priority: '0.6' },

    // Ciudades Entre Ríos
    { loc: '/entre-rios/parana', changefreq: 'monthly', priority: '0.7' },
    { loc: '/entre-rios/concordia', changefreq: 'monthly', priority: '0.6' },

    // Ciudades Buenos Aires
    { loc: '/buenos-aires/caba', changefreq: 'monthly', priority: '0.8' },
    { loc: '/buenos-aires/bahia-blanca', changefreq: 'monthly', priority: '0.7' },
    { loc: '/buenos-aires/mar-del-plata', changefreq: 'monthly', priority: '0.7' },

    // Blog
    { loc: '/blog', changefreq: 'weekly', priority: '0.7', lastmod: today },
    { loc: '/blog/inconstitucionalidad-decreto-549-2025', changefreq: 'monthly', priority: '0.8', lastmod: '2026-04-22' },
    { loc: '/blog/que-hacer-despues-de-un-accidente-laboral', changefreq: 'monthly', priority: '0.7' },
    { loc: '/blog/como-calcular-indemnizacion-art', changefreq: 'monthly', priority: '0.7' },
    { loc: '/blog/hernia-de-disco-baremo-2026', changefreq: 'monthly', priority: '0.7' },

    // Guías
    { loc: '/guias', changefreq: 'weekly', priority: '0.7' },
    { loc: '/guias/guia-completa-accidente-laboral', changefreq: 'monthly', priority: '0.7' },
    { loc: '/guias/guia-comision-medica', changefreq: 'monthly', priority: '0.7' },
    { loc: '/guias/guia-enfermedades-profesionales', changefreq: 'monthly', priority: '0.7' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : `<lastmod>${today}</lastmod>`}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(xml);
});

// ============================================================
// ROBOTS.TXT
// ============================================================
app.get('/robots.txt', (_req: Request, res: Response) => {
  const robotsTxt = `User-agent: *
Allow: /

Disallow: /admin/
Disallow: /*.json$

Sitemap: ${SITE_URL}/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.send(robotsTxt);
});

// ============================================================
// Static files
// ============================================================
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// ============================================================
// Angular SSR handler
// ============================================================
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then(response =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error?: Error) => {
    if (error) throw error;
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
