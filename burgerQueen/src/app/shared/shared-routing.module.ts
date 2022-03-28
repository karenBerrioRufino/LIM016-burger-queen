import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TotalPedidosComponent } from './total-pedidos/total-pedidos.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'pageNotFound', component: PageNotFoundComponent, canActivate: [AuthGuard]
  },
  {
    path: 'totalPedidos', component: TotalPedidosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'viewOrder', component: ViewOrderComponent, canActivate: [AuthGuard]
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

