// No eliminar Component
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { PedidosCocineroComponent } from './pedidos-cocinero/pedidos-cocinero.component';
import { TotalPedidosCocineroComponent } from './total-pedidos-cocinero/total-pedidos-cocinero.component';


const routes: Routes = [
  {
    path: 'pedidosCocinero',
    component: PedidosCocineroComponent
  },
  {
    path: 'totalPedidosCocinero',
    component: TotalPedidosCocineroComponent
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
export class CocineroRoutingModule { }
