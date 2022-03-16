import { Component, OnInit } from '@angular/core';
// import { MeseroModule } from 'src/app/mesero/mesero.module';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  // public rol: any;
  title:string="Los angeles de charlie";
  usuario ={
    email:"",
    password:""
  }

  constructor( private authService:AuthService, private router: Router
    ) { 
    // this.rol = '';
   }

  ngOnInit(): void { }
  
  multiple() {
    //mesero
    console.log('ENTRE AL LOGIN PARA MESERO');
    // this.router.navigateByUrl("/carta");
    //cocinero
  } 
  
  ingresar(){
 console.log('este es login',this.usuario)
 // desestrucutrar una variable
 const {email, password} = this.usuario;

 this.authService.login(email, password).then(user =>{
  console.log("Bienvenido ", user)
    if(user && user.user?.emailVerified){
      console.log('entras a una ventana');
      console.log(user.user?.emailVerified);
      return;
    } 
    else if(user){
      console.log('modal para pedir que verifiquesu usuario');
    } 
    
  })
  .catch(err => {
    console.log(err);
  });

//  this.authService.register(email, password).then(registered => {
//    console.log(registered);
//  });
    // this.authService.login(email,password);
  }
  resetPass(){
    console.log("SWEET ALERT PARA PEDIR QUE REVISE EL CORREO Y RESTABLEZCA SU CONTRASEÑA");
    const {email} = this.usuario;
    this.authService.resetPassword(email);
  }
}
