import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoRoutingModule } from './ingreso-routing.module'

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    WelcomeComponent,
   
  ]
})

export class IngresoModule { }
