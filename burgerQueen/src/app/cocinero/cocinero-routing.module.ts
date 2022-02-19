import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { PedidosCocineroComponent } from './pedidos-cocinero/pedidos-cocinero.component';
import { TotalPedidosCocineroComponent } from './total-pedidos-cocinero/total-pedidos-cocinero.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'pedidosCocinero', component: PedidosCocineroComponent},
      {path: 'totalPedidosCocinero', component: TotalPedidosCocineroComponent},
      {path: 'notFound', component: PageNotFoundComponent},
      { path: '**', redirectTo: 'notFound', pathMatch: 'full' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CocineroRoutingModule { }
