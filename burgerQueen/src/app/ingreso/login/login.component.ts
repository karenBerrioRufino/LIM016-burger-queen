import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { MeseroModule } from 'src/app/mesero/mesero.module';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { createUsersService } from 'src/app/services/create-users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  getRolUser$: BehaviorSubject<string>;
  
  usuario ={
    email:"",
    password:""
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3200,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor( private authService:AuthService, private router:Router, private createUser : createUsersService) { 
    this.getRolUser$ = this.createUser.getRol();
    
  }

  ngOnInit(): void { 
   
  }
  seePass(){
    const passLogin = document.querySelector('#passLogin') as HTMLInputElement
    const icon = document.querySelector('i') as HTMLElement
    if (passLogin.type === 'password') {
      passLogin.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
    else {
      passLogin.type = 'password';
      icon.classList.add('fa-eye-slash');
      icon.classList.remove('fa-eye');
    }
  }
  multiple(uid : any) {
    this.createUser.getdocUser(uid).subscribe((doc) =>{
      const rol = doc.payload.data().rol;
         if (doc.payload.exists) {
          // console.log("Document data:", doc.payload.data());
          switch(rol){
            case 'Mesero': this.router.navigateByUrl("/carta")
            break;
            case 'Cocinero': this.router.navigateByUrl("/pedidosMesero")
            break;
            case 'Administrador': this.router.navigateByUrl("/gestionUsuarios")
            break;
            default: this.router.navigateByUrl("/")
            break;
          }
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
      this.getRolUser$.next(rol);
    return rol;
    }) 
  } 
  
  ingresar(){
    console.log('este es login',this.usuario)
    // desestrucutrar una variable
    const {email, password} = this.usuario;
    this.loginValidator();
    // this.authService.errorsOcurredLogin(email,password)
    this.authService.login(email, password)
      .then(user => {
        console.log("Bienvenido ", user?.user)
        if(user && user.user?.emailVerified){
          console.log(user.user?.emailVerified);
          console.log(user.user.uid);
          const idUser = user.user.uid;
          this.multiple(idUser);
          return;
        } 
        else if(user){
          console.log('modal para pedir que verifiquesu usuario');
          this.Toast.fire({
            icon: 'info',
            title: 'Verifique su correo electrónico y haga click en el link.'
          })
        } 
      }).catch(err => {
          console.log(err);
      });
  }

  resetPass(){
  
    console.log("SWEET ALERT PARA PEDIR QUE REVISE EL CORREO Y RESTABLEZCA SU CONTRASEÑA");
    const {email} = this.usuario;
    this.authService.resetPassword(email);
    this.Toast.fire({
        icon: 'info',
        title: 'Revise su correo electrónico y restablezca su contraseña.'
    })
    console.log('Email de reseteo enviado');
  }

  loginValidator(){
    
    if((this.usuario.email === '') || (this.usuario.password === '')){
      console.log('Debes completar todos los campos');
      this.Toast.fire({
        icon: 'error',
        title: 'Debes completar todos los campos.'
      })
    }
    if (this.usuario.email!=='' && this.usuario.password!=='') {
      if (this.usuario.password.length<6){
        this.Toast.fire({
          icon: 'error',
          title: 'El password debe contener minimo 6 caracteres.'
        })
      }  
      
    }
  
  }
  
}
