import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private builder: FormBuilder) {

  }
  formBuilder: FormGroup;
  group: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required, this.validateAge]),
    gender: new FormControl( ['']),
    comentarios: new FormArray([
      new FormGroup({
        comentario: new FormControl('')
      }),
    ]),
  });
  setzo = 'male';
  onClickGroup(): void {
    if (this.group.valid) {
      alert('FORMULARIO CORRECTO');
    } else {
      alert('FORMULARIO ERRONEO');
    }
  }
  onAddcomentarios(): void  {
    (this.group.get('comentarios') as FormArray).push(
      new FormGroup({
        comentario: new FormControl('')
      })
    );
  }

  getcomentarios() {
    return (this.group.get('comentarios') as FormArray).controls;
  }

  onRemovecomentarios(index: number): void {
    (this.group.get('comentarios') as FormArray).removeAt(index);
  }

  validateAge(control: AbstractControl) {
    const value = control.value;
    let error = null;
    if (!parseInt(value, 16)) {
      error = { ...error, number: 'El valor debería ser un número' };
    }
    else
    if (value < 18 ) {
      error = { ...error, minima: 'Debes tener al menos 18 años' };
    }
    return error;
  }

  /**
   * NO QUEREMOS TENER TANTA FUNCIONALIDAD EN LAS VISTAS
   * POR ESO ES MEJOR SACAR ESA FUNCIONALIDAD A UNA FUNCION Y LUEGO LLAMARLA
   */
  getError(controlName: string, key: string, value: string): string {
    let error = '';
    const control = this.group.get(controlName);
    if (control.dirty && control.errors[key]) {
      error = value;
    }
    return error;
  }
}
