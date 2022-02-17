import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IngresoRoutingModule } from './ingreso-routing.module'

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IngresoRoutingModule
  ],
  exports:[
    LoginComponent,
    WelcomeComponent
  ]
})
export class IngresoModule { }
