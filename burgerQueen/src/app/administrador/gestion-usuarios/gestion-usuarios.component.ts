import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { RegisterUsers } from '../models/registerUsers';
import { createUsersService } from 'src/app/services/create-users.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})

export class GestionUsuariosComponent implements OnInit {
  form:FormGroup;
  usuarios: Observable<any[]>;
  listarUsuarios: RegisterUsers[]=[];
  constructor(
    firestore: AngularFirestore,
    private fb:FormBuilder,
    private userService: createUsersService) {

    this.usuarios = firestore.collection('usuarios').valueChanges();

    this.form = this.fb.group ({
      nombres:['',Validators.required],
      apellidoPaterno:['',Validators.required],
      apellidoMaterno:['',Validators.required],
      telefono:['',Validators.required],
      rol:['',Validators.required],
      correo:['', Validators.required],
      password:['',Validators.required]
    })

  }

  ngOnInit(): void {
    this.obtenerUsuarios();
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
      password: this.form.value.password,

    }
    console.log(USUARIO);

    this.userService.saveUser(USUARIO).then(()=>{
      console.log('usuario registrado');
      this.form.reset();
    },error => {
      console.log(error);
    })
     
  }

  obtenerUsuarios(){
    this.userService.getUsers().subscribe(doc=>{
      console.log(doc);
      this.listarUsuarios=[];
      doc.forEach((element: any) => {
        this.listarUsuarios.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        });
        // console.log(element.payload.doc.id);
        // console.log(element.payload.doc.data());
        console.log(this.listarUsuarios);
        
      });
    })
  }
}

