import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DatosPedidoComponent } from './datos-pedido/datos-pedido.component';
import { TotalPedidosMeseroComponent } from '../mesero/total-pedidos-mesero/total-pedidos-mesero.component';


const routes: Routes = [
  {
    path: 'pageNotFound', component: PageNotFoundComponent
  },
  {
    path: 'totalMesero', component: TotalPedidosMeseroComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class SharedRoutingModule { }
