import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { RegisterUsers } from '../models/registerUsers';
import { CreateUsersService } from 'src/app/services/createUsers.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})

export class GestionUsuariosComponent implements OnInit {
  form:FormGroup;
  usuarios: Observable<any[]>;

  constructor(firestore: AngularFirestore, private fb:FormBuilder, private userService: CreateUsersService) {
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

