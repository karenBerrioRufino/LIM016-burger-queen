import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterUsers } from '../models/registerUsers';

import { createUsersService } from '../../../app/services/create-users.service';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})

export class GestionUsuariosComponent implements OnInit {

  form: FormGroup;
  titulo = "Agregar usuario";

  id: string | undefined;

  usuarios: Observable<any[]>;
  listarUsuarios: RegisterUsers[] = [];

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(
    private fb: FormBuilder,
    private _userService: createUsersService,
    private authService: AuthService,
    firestore: AngularFirestore,
  ) {
    this.usuarios = firestore.collection('usuarios').valueChanges();

    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      telefono: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      estado: ['', Validators.required],
      rol: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this._userService.getUserEdit().subscribe(data => {
      this.id = data.id;
      this.titulo = "editar usuario";
      this.form.patchValue({
        nombres: data.nombres,
        apellidoPaterno: data.apellidoPaterno,
        apellidoMaterno: data.apellidoMaterno,
        dni: data.dni,
        telefono: data.telefono,
        estado: data.estado,
        rol: data.rol,
        correo: data.correo,
        password: data.password,
      })
    })
    this.getUserList();
  }

  btnClose() {
    let modal: any = document.getElementById('btnModal');
    modal.style.display = 'none';
    this.form.reset();
    this.titulo = "agregar usuario";
  }

  seePassword() {
    const passLogin = document.querySelector('#passLogin') as HTMLInputElement
    const icon = document.querySelector('i') as HTMLElement
    if (passLogin.type === 'password') {
      passLogin.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
    else {
      console.log('holaaaa')
      passLogin.type = 'password';
      icon.classList.add('fa-eye-slash');
      icon.classList.remove('fa-eye');
    }
  }

  saveOrEditUser() {
    console.log(this.form);
    console.log(this.form.value.correo);
    console.log('clic en boton guardar usuario');
    let modal: any = document.getElementById('btnModal');
    this.titulo = "agregar usuario";
    if (this.id === undefined) {
      // Creamos una nuevo usuario
      this.saveUser();
      modal.style.display = 'none';
    } else {
      // Editamos un usuario
      this.editUser(this.id);
      modal.style.display = 'none';
      this.form.reset();
    }
  }

  editUserBtn(usuario: RegisterUsers) {
    let modal: any = document.getElementById('btnModal');
    modal.style.display = 'block';
    this._userService.addUserEdit(usuario);
  }

  editUser(id: string) {
    const USUARIO: any = {
      nombres: this.form.value.nombres,
      apellidoPaterno: this.form.value.apellidoPaterno,
      apellidoMaterno: this.form.value.apellidoMaterno,
      dni: this.form.value.dni,
      telefono: this.form.value.telefono,
      estado: this.form.value.estado,
      rol: this.form.value.rol,
      correo: this.form.value.correo,
      password: this.form.value.password,
      fechaActualizacion: new Date(),
    }

    this._userService.editarUsuario(id, USUARIO).then(() => {
      this.id = undefined;
      console.log('El usuario fue actualizada con exito!', 'Registro Actualizado');
      this.Toast.fire({
        icon: 'success',
        title: 'Usuario editado.',
      })
      this.form.reset();
    }, error => {
      console.log(error);
    })
  }

  saveUser() {
    const USUARIO: RegisterUsers | any = {
      dni: this.form.value.dni,
      nombres: this.form.value.nombres,
      apellidoPaterno: this.form.value.apellidoPaterno,
      apellidoMaterno: this.form.value.apellidoMaterno,
      telefono: this.form.value.telefono,
      estado: this.form.value.estado,
      rol: this.form.value.rol,
      correo: this.form.value.correo,
      password: this.form.value.password,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    }

    //para crear un usuario por pirmera vez
    const { correo, password } = USUARIO;
    this.authService.register(correo, password).then(registered => {
      delete USUARIO.password;
      console.log(registered);
      // trae los datos de quien se registra por primera vez
      // uid es el id de quien se registra por primera vez y aparece en el auth
      this._userService.saveUser(USUARIO, registered?.user?.uid).then(() => {
        console.log('Usuario registrado');
        this.Toast.fire({
          icon: 'success',
          title: 'Usuario regitrado.',
        })
        this.form.reset();
      }, error => {
        console.log('Opps.. ocurrio un error', error);
        this.Toast.fire({
          icon: 'error',
          title: 'Opps.. ocurrio un error.',
        })
      })
    });
  }

  getUserList() {
    this._userService.getUsers().subscribe(doc => {
      this.listarUsuarios = [];
      doc.forEach((element: any) => {
        this.listarUsuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.listarUsuarios);
    })
  }

  deleteUser(id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro que desea eliminarlo?',
      text: "¡No podrás revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Este usuario a sido eliminado',
          'success'
        )
        this._userService.deleteUser(id).then((res) => {
          console.log('Registro eliminado con exito', res);
        }, error => {
          console.log(error);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu registro está a salvo :)',
          'error'
        )
      }
    })
  }
}

