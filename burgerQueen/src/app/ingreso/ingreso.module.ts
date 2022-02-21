import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IngresoRoutingModule } from './ingreso-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';


import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
<<<<<<< HEAD
import { MeseroModule } from '../mesero/mesero.module';
=======
import { environment } from 'src/environments/environment';
import { AdministradorComponent } from './administrador/administrador.component';

>>>>>>> bd93e332c45284a61cc99798bf7222f5bacfaf25


@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    AdministradorComponent,
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    SharedModule,
    IngresoRoutingModule,
    MeseroModule,
    RouterModule,
=======
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IngresoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
>>>>>>> bd93e332c45284a61cc99798bf7222f5bacfaf25
  ],
  exports:[
    LoginComponent,
    WelcomeComponent,
   
  ]
})
export class IngresoModule { }
