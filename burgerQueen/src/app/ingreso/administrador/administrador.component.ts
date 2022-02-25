import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUsers } from '../models/registerUsers';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group ({
      nombres:['',Validators.required],
      apellidoPaterno:['',Validators.required],
      apellidoMaterno:['',Validators.required],
      telefono:['',Validators.required],
      rol:['',Validators.required],
      correo:['', Validators.required],
      constraseña:['',Validators.required]
    })
  }
     
  ngOnInit(): void {
  }
  crearUsuario(){
    console.log(this.form);
    const USUARIO: RegisterUsers = {
      nombres: this.form.value.nombres,
      apellidoPaterno: this.form.value.apellidoPaterno,
      apellidoMaterno: this.form.value.apellidoMaterno,
      telefono: this.form.value.telefono,
      rol: this.form.value.rol,
      correo: this.form.value.correos,
      constraseña: this.form.value.constraseña,

    }
  }
}