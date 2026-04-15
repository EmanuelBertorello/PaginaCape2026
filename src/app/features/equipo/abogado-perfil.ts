import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb';
import { SeoService } from '../../core/services/seo.service';
import { ABOGADOS_DATA } from '../../core/data/abogados.data';
import { AbogadoData, BreadcrumbItem } from '../../core/models/interfaces';

@Component({
  selector: 'app-abogado-perfil',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './abogado-perfil.html',
})
export class AbogadoPerfilComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  abogado: AbogadoData | null = null;
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit(): void {
    const slug = this.route.snapshot.params['slug'];
    this.abogado = ABOGADOS_DATA.find(a => a.slug === slug) ?? null;

    if (this.abogado) {
      this.breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: 'Abogados', url: '/abogados' },
        { label: `${this.abogado.nombre} ${this.abogado.apellido}`, url: '/abogados/' + slug },
      ];
      this.seoService.setPage({
        title: `${this.abogado.nombre} ${this.abogado.apellido} — ${this.abogado.titulo}`,
        description: `${this.abogado.titulo}. ${this.abogado.matricula}. Especialista en accidentes laborales en ${this.abogado.provinciasFoco.join(', ')}.`,
        path: '/abogados/' + slug,
        schema: this.seoService.getPersonSchema({
          nombre: `${this.abogado.nombre} ${this.abogado.apellido}`,
          cargo: this.abogado.titulo,
          universidad: this.abogado.universidad,
          matricula: this.abogado.matricula,
          slug,
        }),
      });
    }
  }
}
