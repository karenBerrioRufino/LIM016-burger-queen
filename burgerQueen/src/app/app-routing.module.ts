import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule)
  },
  {
    path: '', loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path: '', loadChildren: () => import('./mesero/mesero.module').then(m => m.MeseroModule)
  },
  {
    path: '', loadChildren: () => import('./cocinero/cocinero.module').then(m => m.CocineroModule)
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ], 
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
