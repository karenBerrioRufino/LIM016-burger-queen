import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TotalPedidosComponent } from './total-pedidos/total-pedidos.component';
import { ViewOrderComponent } from './view-order/view-order.component';
const routes: Routes = [
  {
    path: 'pageNotFound', component: PageNotFoundComponent
  },
  {
    path: 'totalPedidos', component: TotalPedidosComponent
  },
  {
    path: 'viewOrder', component: ViewOrderComponent
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

export class SharedRoutingModule { }

