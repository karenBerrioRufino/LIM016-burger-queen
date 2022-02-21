import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IngresoRoutingModule } from './ingreso-routing.module'
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MeseroModule } from '../mesero/mesero.module';


@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    IngresoRoutingModule,
    MeseroModule,
    RouterModule,
  ],
  exports:[
    LoginComponent,
    WelcomeComponent
  ]
})
export class IngresoModule { }
