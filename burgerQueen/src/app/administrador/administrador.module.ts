import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';

// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

//para hacer formularios reactivos
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GestionUsuariosComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  exports: [
    GestionUsuariosComponent,
  ]
})
export class AdministradorModule { }
