import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from '../view/componentes/principal/principal.component';
import { GestionUsuariosComponent } from '../administrador/gestion-usuarios/gestion-usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
    //children: [
      //{ path: '', component: WelcomeComponent },
      // { path: 'gestionUsuarios', component: GestionUsuariosComponent },
      // { path: 'ingreso/login', component: LoginComponent },
      // { path: 'view/principal', component:PrincipalComponent},
      // {path: 'gestionUser', component:GestionUsuariosComponent},
      // {path: 'administrador', component: AdministradorComponent},
      // { path: 'carta', component: CartaComponent },
      // { path: 'cartaOpciones', component:CartaOpcionesComponent },
      // { path: 'notFound', component: PageNotFoundComponent },
      // { path: 'pedidosMesero', component: PedidosMeseroComponent },
      // { path: '**', redirectTo: 'notFound', pathMatch: 'full' },
    // ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class IngresoRoutingModule { }
