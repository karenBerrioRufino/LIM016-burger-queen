import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

//para hacer formularios reactivos
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { AdministradorComponent } from './administrador/administrador.component';

@NgModule({
  declarations: [
    GestionUsuariosComponent,
    AdministradorComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
  ],
  exports: [
    GestionUsuariosComponent,
    AdministradorComponent,
  ]
})
export class AdministradorModule { }
