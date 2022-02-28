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
  titulo:string = "Agregar usuario";
  id: string | undefined;

  usuarios: Observable<any[]>;
  listarUsuarios: RegisterUsers[]=[];
  
  constructor(
    private fb:FormBuilder,
    firestore: AngularFirestore,
    private _userService: createUsersService) {

    this.usuarios = firestore.collection('usuarios').valueChanges();

    this.form = this.fb.group ({
      nombres:['',Validators.required],
      apellidoPaterno:['',Validators.required],
      apellidoMaterno:['',Validators.required],
      dni:['',[Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      telefono:['',[Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      estado:['',Validators.required],
      rol:['',Validators.required],
      correo:['', Validators.required],
      password:['',Validators.required],
    })
    console.log(this.form);
    
  }

  ngOnInit(): void {
   
    this._userService.getUserEdit().subscribe(data=>{
      this.id =data.id;
      this.titulo ="Editar usuario";
      this.form.patchValue({
        nombres:data.nombres,
        apellidoPaterno:data.apellidoPaterno,
        apellidoMaterno:data.apellidoMaterno,
        dni:data.dni,
        telefono:data.telefono,
        estado:data.estado,
        rol:data.rol,
        correo:data.correo,
        password:data.password,
      })
    })
    this.obtenerUsuarios();
  }

  guardarUsuario() {
    console.log('clic en boton guardar usuario');
    let modal:any = document.getElementById('btnModal');
    
    if(this.id === undefined) {
      // Creamos una nuevo usuario
      this.agregarUsuario();
      modal.style.display='none';

    } else {
      // Editamos un nuevo usuario
      this.editarUsuario(this.id);
      modal.style.display='none';
    }
  }

  editarUsuario(id: string) {
    const USUARIO: any = {
      nombres: this.form.value.nombres,
      apellidoPaterno: this.form.value.apellidoPaterno,
      apellidoMaterno: this.form.value.apellidoMaterno,
      dni:this.form.value.dni,
      telefono:this.form.value.telefono,
      estado:this.form.value.estado,
      rol:this.form.value.rol,
      correo: this.form.value.correo,
      password: this.form.value.password,
      fechaActualizacion: new Date(),
      
    }
    
    this._userService.editarUsuario(id, USUARIO).then((res) =>{
      this.titulo = 'Agregar Usuario';
      this.form.reset();
      this.id = undefined;
      console.log('El usuario fue actualizada con exito!', 'Registro Actualizado',res);
      this.form.reset();
    }, error => {
      console.log(error);
    })
  }

  agregarUsuario(){

    const USUARIO: RegisterUsers = {
      dni:this.form.value.dni,
      nombres: this.form.value.nombres,
      apellidoPaterno: this.form.value.apellidoPaterno,
      apellidoMaterno: this.form.value.apellidoMaterno,
      telefono: this.form.value.telefono,
      estado:this.form.value.estado,
      rol: this.form.value.rol,
      correo: this.form.value.correo,
      password: this.form.value.password,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    }
    
    this._userService.saveUser(USUARIO).then(()=>{
      console.log('Usuario registrado');
      this.form.reset();
      
    },error => {
      console.log('Opps.. ocurrio un error',error);
    })
     
  }

  obtenerUsuarios(){
    this._userService.getUsers().subscribe(doc=>{
      
      this.listarUsuarios=[];
      doc.forEach((element: any) => {
        this.listarUsuarios.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        });
        // console.log(element.payload.doc.id);
        // console.log(element.payload.doc.data());
        
      });
      console.log(this.listarUsuarios);
    })
  }

  eliminarUsuario(id: any){
    this._userService.deleteUser(id).then((res)=>{
      console.log('Registro eliminado con exito',res);
    },error=>{
      console.log(error);
    })
  }

  editarUsuarioBtn(usuario:RegisterUsers){
    console.log('Clic en el boton editar para editar');
    let modal:any = document.getElementById('btnModal');
    modal.style.display='block';
    this._userService.addUserEdit(usuario);
    
  }
 
}

