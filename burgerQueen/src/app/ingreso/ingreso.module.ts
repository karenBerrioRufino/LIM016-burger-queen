import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IngresoRoutingModule } from './ingreso-routing.module'

import { MeseroModule } from '../mesero/mesero.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { environment } from 'src/environments/environment';
import { AdministradorComponent } from './administrador/administrador.component';



@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    AdministradorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IngresoRoutingModule,
    SharedModule,
    MeseroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent,
    WelcomeComponent,
   
  ]
})
export class IngresoModule { }
