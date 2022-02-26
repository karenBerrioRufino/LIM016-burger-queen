import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador/administrador.component';
import { environment } from '../../environments/environment'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';
//para hacer formularios reactivos
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdministradorComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //para inicializar la configuracion
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class AdministradorModule { }
