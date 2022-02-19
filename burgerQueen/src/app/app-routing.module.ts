import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule)
  },
  {
    path: 'cocinero',
    loadChildren: () => import('./cocinero/cocinero.module').then(m => m.CocineroModule)
  },
  {
    path: 'mesero',
    loadChildren: () => import('./mesero/mesero.module').then(m => m.MeseroModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ], 
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
