import { Component, OnInit } from '@angular/core';
// import { MeseroModule } from 'src/app/mesero/mesero.module';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  // public rol: any;
  title:string="Los angeles de charlie";
  // usuario: any ={
  //   email:"",
  //   password:""
  // }

  constructor(
    // private authService:AuthService,
    // private router: Router
    ) { 
    // this.rol = '';
   }

  ngOnInit(): void { }
  
  multiple() {
    //mesero
    console.log('ENTRE AL LOGIN');
    // this.router.navigateByUrl("/carta");
    //cocinero
  } 
  
  ingresar(){
    // console.log('este es login',this.usuario)
    // this.authService.login(email,password);
  }
}
