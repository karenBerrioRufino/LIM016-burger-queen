import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  title:string="Los angeles de charlie";
  usuario: any ={
    email:"",
    password:""
  }
  constructor(private authService:AuthService) { }
  
  ingresar(){
    console.log('este es login',this.usuario)
    // this.authService.login(email,password);
    
  }

}
