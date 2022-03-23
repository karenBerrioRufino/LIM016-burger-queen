// No eliminar Component
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { CartaComponent } from './carta/carta.component';
import { CartaOpcionesComponent } from './carta-opciones/carta-opciones.component';
import { PedidosMeseroComponent } from './pedidos-mesero/pedidos-mesero.component';
import { TotalPedidosMeseroComponent } from './total-pedidos-mesero/total-pedidos-mesero.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'carta',
    component: CartaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cartaOpciones',
    component: CartaOpcionesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pedidosMesero',
    component: PedidosMeseroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'totalPedidosMesero',
    component: TotalPedidosMeseroComponent,
    canActivate: [AuthGuard]
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

export class MeseroRoutingModule { }
