import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona = {
    genero: 'F',
    notificaciones: true
  }

  terminosYCondiciones: boolean = false;

  get errores() {
    return this.miFormulario?.controls['terminosYCondiciones']?.errors
  }

}
