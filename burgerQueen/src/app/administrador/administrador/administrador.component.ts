import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUsers } from '../models/registerUsers';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { createUsersService } from 'src/app/services/create-users.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  
  form:FormGroup;
  usuarios: Observable<any[]>;

  constructor(firestore: AngularFirestore, private fb:FormBuilder, private userService: createUsersService) {

    this.usuarios = firestore.collection('usuarios').valueChanges();

    this.form = this.fb.group ({
      nombres:['',Validators.required],
      apellidoPaterno:['',Validators.required],
      apellidoMaterno:['',Validators.required],
      telefono:['',Validators.required],
      rol:['',Validators.required],
      correo:['', Validators.required],
      contraseña:['',Validators.required]
    })
  }
  
  ngOnInit(): void {
  }
  //para el btn Nuevo Uusario
  crearUsuario(){
    console.log(this.form);
    const USUARIO: RegisterUsers = {
      nombres: this.form.value.nombres,
      apellidoPaterno: this.form.value.apellidoPaterno,
      apellidoMaterno: this.form.value.apellidoMaterno,
      telefono: this.form.value.telefono,
      rol: this.form.value.rol,
      correo: this.form.value.correo,
      contraseña: this.form.value.contraseña,

    }
    console.log(USUARIO);
    
    this.userService.saveUser(USUARIO).then(()=>{
      console.log('usuario registrado');
      this.form.reset();
    },error => {
      console.log(error);
    })
     
  }
}