import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.html',
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);

  readonly submitted = signal(false);
  readonly loading = signal(false);
  readonly success = signal(false);
  readonly errorMsg = signal('');

  readonly form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    telefono: ['', [Validators.required, Validators.pattern(/^[\d\s+()-]{7,20}$/)]],
    provincia: ['', Validators.required],
    tipoCaso: ['', Validators.required],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly provincias = [
    'Santa Fe',
    'Buenos Aires',
    'CABA',
    'Neuquén',
    'Río Negro',
    'Entre Ríos',
    'Otra provincia',
  ];

  readonly tiposCaso = [
    'Accidente laboral con lesiones',
    'Hernia de disco o lumbalgia',
    'Accidente in itinere',
    'Alta médica de ART',
    'Rechazo de ART',
    'Enfermedad profesional',
    'Fallecimiento por accidente laboral',
    'Gran invalidez',
    'Otro',
  ];

  isInvalid(field: string): boolean {
    const control: AbstractControl | null = this.form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted()));
  }

  async onSubmit(): Promise<void> {
    this.submitted.set(true);
    if (this.form.invalid) return;

    this.loading.set(true);
    this.errorMsg.set('');

    try {
      // Simula envío (reemplazar con API real)
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.success.set(true);
      this.form.reset();
      this.submitted.set(false);
    } catch {
      this.errorMsg.set('Hubo un problema al enviar el formulario. Por favor, intentá por WhatsApp.');
    } finally {
      this.loading.set(false);
    }
  }
}
