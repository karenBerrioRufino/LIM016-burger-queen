import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
<<<<<<< HEAD
import { CartaComponent } from '../mesero/carta/carta.component';
import { CartaOpcionesComponent } from '../mesero/carta-opciones/carta-opciones.component';
=======
import { AdministradorComponent } from './administrador/administrador.component';
>>>>>>> bd93e332c45284a61cc99798bf7222f5bacfaf25

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'administrador', component: AdministradorComponent },
      { path: 'login', component: LoginComponent },
      { path: 'notFound', component: PageNotFoundComponent },
      { path: 'carta', component:CartaComponent},
      { path: 'cartaOpciones', component:CartaOpcionesComponent },
      { path: '**', redirectTo: 'notFound', pathMatch: 'full' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class IngresoRoutingModule { }
