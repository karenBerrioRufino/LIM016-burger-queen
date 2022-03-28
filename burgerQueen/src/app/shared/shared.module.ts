import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { DatosPedidoComponent } from './datos-pedido/datos-pedido.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TotalPedidosComponent } from './total-pedidos/total-pedidos.component';

import { FormsModule } from '@angular/forms';
import { ViewOrderComponent } from './view-order/view-order.component';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    NavegadorComponent,
    DatosPedidoComponent,
    TotalPedidosComponent,
    PageNotFoundComponent,
    ViewOrderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedRoutingModule,
  ],
  exports: [
    NavegadorComponent,
    DatosPedidoComponent,
    TotalPedidosComponent,
    PageNotFoundComponent,
    ViewOrderComponent
  ]
})
export class SharedModule { }
