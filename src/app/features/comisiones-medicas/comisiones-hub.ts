import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-comisiones-medicas-hub',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './comisiones-hub.html',
})
export class ComisionesMedicasHubComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly breadcrumbs = [
    { label: 'Inicio', url: '/' },
    { label: 'Comisiones Médicas', url: '/comisiones-medicas' },
  ];

  readonly provincias = [
    {
      nombre: 'Santa Fe',
      comisiones: [
        { titulo: 'CM Rosario (N° 2)', url: '/comision-medica-rosario', descripcion: 'Rosario, San Lorenzo, Casilda, Villa Constitución y sur SF.' },
        { titulo: 'CM Santa Fe Capital (N° 1)', url: '/comision-medica-santa-fe', descripcion: 'Santa Fe Capital, Santo Tomé, Sauce Viejo y zona centro-norte.' },
        { titulo: 'CM Reconquista (N° 40C)', url: '/comision-medica-reconquista', descripcion: 'Reconquista, Avellaneda, Vera, Las Toscas y norte SF.' },
        { titulo: 'CM Rafaela', url: '/comision-medica-rafaela', descripcion: 'Rafaela, Sunchales, Esperanza y zona centro de Santa Fe.' },
        { titulo: 'CM Venado Tuerto', url: '/comision-medica-venado-tuerto', descripcion: 'Venado Tuerto, Rufino, Melincué y sur de Santa Fe.' },
        { titulo: 'CM San Francisco', url: '/comision-medica-san-francisco', descripcion: 'San Francisco, Brinkmann, Devoto, Las Varillas y zona frontera.' },
      ],
    },
    {
      nombre: 'Buenos Aires — GBA',
      comisiones: [
        { titulo: 'CM CABA (N° 10)', url: '/comision-medica-caba', descripcion: 'Ciudad Autónoma de Buenos Aires. Moreno 401.' },
        { titulo: 'CM Ramos Mejía (CM 38 Del. 02)', url: '/comision-medica-ramos-mejia', descripcion: 'La Matanza: San Justo, Ramos Mejía, Laferrere y zona.' },
        { titulo: 'CM Morón (CM 38)', url: '/comision-medica-moron', descripcion: 'Morón, Hurlingham, Ituzaingó y Merlo.' },
        { titulo: 'CM Moreno (CM 15)', url: '/comision-medica-moreno', descripcion: 'Moreno y General Rodríguez.' },
        { titulo: 'CM San Isidro (CM 39)', url: '/comision-medica-san-isidro', descripcion: 'San Fernando, San Isidro y Vicente López.' },
        { titulo: 'CM Gral. San Martín (CM 38 Del. 03)', url: '/comision-medica-san-martin', descripcion: 'Gral. San Martín, José C. Paz, San Miguel y Malvinas Argentinas.' },
        { titulo: 'CM Lomas de Zamora (CM 37 Del. 04)', url: '/comision-medica-lomas-de-zamora', descripcion: 'Lomas de Zamora, Banfield, Temperley y Turdera.' },
        { titulo: 'CM Lanús (CM 37)', url: '/comision-medica-lanus', descripcion: 'Lanús y Avellaneda.' },
        { titulo: 'CM Quilmes (CM 37 Del. 03)', url: '/comision-medica-quilmes', descripcion: 'Quilmes, Berazategui, Florencio Varela y S.F. Solano.' },
        { titulo: 'CM Ezeiza (CM 37 Del. 02)', url: '/comision-medica-ezeiza', descripcion: 'Ezeiza, Almirante Brown, Esteban Echeverría, Monte Grande y zona.' },
      ],
    },
    {
      nombre: 'Buenos Aires — Interior',
      comisiones: [
        { titulo: 'CM La Plata (N° 36)', url: '/comision-medica-la-plata', descripcion: 'La Plata, Berisso, Ensenada, Brandsen y zona.' },
        { titulo: 'CM Bahía Blanca (N° 4)', url: '/comision-medica-bahia-blanca', descripcion: 'Bahía Blanca, Coronel Rosales, Villarino y sur bonaerense.' },
        { titulo: 'CM Mar del Plata (N° 3)', url: '/comision-medica-mar-del-plata', descripcion: 'Mar del Plata, General Pueyrredón, Necochea y costa.' },
        { titulo: 'CM Pergamino (N° 21)', url: '/comision-medica-pergamino', descripcion: 'Pergamino, Ramallo, San Nicolás y norte bonaerense.' },
        { titulo: 'CM Junín (N° 26)', url: '/comision-medica-junin', descripcion: 'Junín, Chacabuco, Lincoln, Bragado y zona.' },
        { titulo: 'CM Zárate (N° 29)', url: '/comision-medica-zarate', descripcion: 'Zárate, Campana, Escobar. Polo petroquímico e industrial.' },
        { titulo: 'CM Tandil (N° 30)', url: '/comision-medica-tandil', descripcion: 'Tandil, Azul, Olavarría y zona serrana.' },
        { titulo: 'CM Trenque Lauquen (N° 28)', url: '/comision-medica-trenque-lauquen', descripcion: 'Trenque Lauquen, Pehuajó, Carlos Tejedor y oeste bonaerense.' },
        { titulo: 'CM Dolores (N° 27)', url: '/comision-medica-dolores', descripcion: 'Dolores, Gral. Madariaga, Castelli y zona costera.' },
        { titulo: 'CM Azul', url: '/comision-medica-azul', descripcion: 'Azul, Olavarría y zona centro bonaerense.' },
        { titulo: 'CM Pinamar', url: '/comision-medica-pinamar', descripcion: 'Pinamar, Villa Gesell, La Costa. Turismo y hotelería.' },
        { titulo: 'CM Necochea', url: '/comision-medica-necochea', descripcion: 'Necochea, Quequén. Pesca y agroindustria.' },
        { titulo: 'CM Saladillo', url: '/comision-medica-saladillo', descripcion: 'Saladillo, Las Flores, Gral. Alvear y zona.' },
      ],
    },
    {
      nombre: 'Neuquén',
      comisiones: [
        { titulo: 'CM Neuquén Capital (N° 9)', url: '/comision-medica-neuquen', descripcion: 'Toda la provincia. Petróleo, Vaca Muerta y turismo.' },
        { titulo: 'CM Plaza Huincul', url: '/comision-medica-plaza-huincul', descripcion: 'Plaza Huincul, Cutral-Có, Zapala. Sector petrolero.' },
      ],
    },
    {
      nombre: 'Río Negro',
      comisiones: [
        { titulo: 'CM Viedma (N° 18)', url: '/comision-medica-viedma', descripcion: 'Viedma, Carmen de Patagones y costa rionegrina.' },
        { titulo: 'CM General Roca (N° 35)', url: '/comision-medica-general-roca', descripcion: 'General Roca, Cipolletti, Allen, Catriel y Alto Valle.' },
        { titulo: 'CM Cipolletti', url: '/comision-medica-cipolletti', descripcion: 'Cipolletti, Cinco Saltos, Allen. Fruticultura del Alto Valle.' },
        { titulo: 'CM Bariloche', url: '/comision-medica-bariloche', descripcion: 'Bariloche, El Bolsón. Turismo, hotelería y construcción.' },
      ],
    },
    {
      nombre: 'Entre Ríos',
      comisiones: [
        { titulo: 'CM Paraná (N° 8)', url: '/comision-medica-parana', descripcion: 'Paraná, Diamante, Victoria, Gualeguaychú y zona.' },
        { titulo: 'CM Concordia (N° 34)', url: '/comision-medica-concordia', descripcion: 'Concordia, Colón, Federación y norte de Entre Ríos.' },
        { titulo: 'CM Concepción del Uruguay (N° 41)', url: '/comision-medica-concepcion-del-uruguay', descripcion: 'Concepción del Uruguay, Colón, San José y zona.' },
      ],
    },
    {
      nombre: 'Córdoba',
      comisiones: [
        { titulo: 'CM Córdoba Capital (N° 5)', url: '/comision-medica-cordoba', descripcion: 'Córdoba Capital y zona metropolitana.' },
        { titulo: 'CM Río Cuarto (N° 6)', url: '/comision-medica-rio-cuarto', descripcion: 'Río Cuarto y sur de Córdoba.' },
        { titulo: 'CM Villa María', url: '/comision-medica-villa-maria', descripcion: 'Villa María, Villa Nueva, Bell Ville y zona centro.' },
        { titulo: 'CM Bell Ville', url: '/comision-medica-bell-ville', descripcion: 'Bell Ville, Marcos Juárez, Leones y este cordobés.' },
        { titulo: 'CM San Francisco', url: '/comision-medica-san-francisco', descripcion: 'San Francisco, Brinkmann, Devoto, Las Varillas y zona.' },
        { titulo: 'CM Villa Dolores', url: '/comision-medica-villa-dolores', descripcion: 'Villa Dolores, Mina Clavero, Cruz del Eje. Serranías.' },
        { titulo: 'CM Laboulaye', url: '/comision-medica-laboulaye', descripcion: 'Laboulaye, Gral. Levalle y sur de Córdoba.' },
      ],
    },
  ];

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'Comisiones Médicas ART — Guía Completa por Provincia',
      description: 'Todo sobre las Comisiones Médicas: qué son, cómo funcionan, dónde están. Guías para Rosario, Santa Fe, Neuquén y Reconquista.',
      path: '/comisiones-medicas',
    });
  }
}
