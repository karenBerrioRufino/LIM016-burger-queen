import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { PgeNotFoundComponent } from './pge-not-found/pge-not-found.component';
import { WelcomeComponent } from './ingreso/welcome/welcome.component';
import { LoginComponent } from './ingreso/login/login.component';
import { MeseroComponent } from './mesero/mesero/mesero.component';
import { MenuComponent } from './atencion/menu/menu.component';
import { OpcionesComponent } from './atencion/opciones/opciones.component';
import { CocineroComponent } from './cocinero/cocinero/cocinero.component' */

const routes: Routes = [
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule)
  }
];

@NgModule({
/*   imports: [RouterModule.forRoot([
    {path: 'app-welcome', component: WelcomeComponent},
    {path: 'app-login', component: LoginComponent},
    {path: 'app-mesero', component: MeseroComponent},
    {path: 'app-menu', component: MenuComponent},
    {path: 'app-opciones', component: OpcionesComponent},
    {path: 'app-cocinero', component: CocineroComponent},
    {path: '', redirectTo: '/app-welcome', pathMatch: 'full'},
    {path: '**', component: PgeNotFoundComponent}
  ])
], */
  imports: [
    RouterModule.forRoot( routes )
  ], 
  exports: [RouterModule]
})

export class AppRoutingModule { }
