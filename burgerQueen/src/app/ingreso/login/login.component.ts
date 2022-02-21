import { Component, OnInit } from '@angular/core';
import { MeseroModule } from 'src/app/mesero/mesero.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
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
  }
}
