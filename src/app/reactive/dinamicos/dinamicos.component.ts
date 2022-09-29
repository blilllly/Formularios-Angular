import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  
  constructor( private fb: FormBuilder) { }
  
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control( '', Validators.required );

  get favoritosArr() {
    return this.miFormulario.controls['favoritos'] as  FormArray;
  }

  guardar() {

    if(this.miFormulario.invalid) { return }

    console.log(this.miFormulario.value)
    //imprimir solo si es valido
  }

  esInvalido( campo: string ) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarFavorito() {
    if(this.nuevoFavorito.invalid) { return; }

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();
  }

  borrar( i: number ) {
    this.favoritosArr.removeAt(i);
  }

}
