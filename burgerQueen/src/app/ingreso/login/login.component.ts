<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MeseroModule } from 'src/app/mesero/mesero.module';
import { Router } from '@angular/router';
=======
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

>>>>>>> bd93e332c45284a61cc99798bf7222f5bacfaf25
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
<<<<<<< HEAD
export class LoginComponent implements OnInit {
  public rol: any;
  constructor(private router: Router) { 
    this.rol = '';
   }

  ngOnInit(): void { }
  
  multiple() {
    //mesero
    console.log('ENTRE AL LOGIN');
    this.router.navigateByUrl("/carta");
    //cocinero
=======
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
    
>>>>>>> bd93e332c45284a61cc99798bf7222f5bacfaf25
  }
}
