import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { environment } from 'src/environments/environment';
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
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
  ]
})
export class AdministradorModule { }
