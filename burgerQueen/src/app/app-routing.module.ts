import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule)
  },
  {
    path: 'pedidos',
    loadChildren:()=> import('./mesero/mesero.module').then(m=> m.MeseroModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ], 
  exports: [RouterModule]
})

export class AppRoutingModule { }
