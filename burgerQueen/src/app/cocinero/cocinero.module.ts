import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocineroRoutingModule } from './cocinero-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PedidosCocineroComponent } from './pedidos-cocinero/pedidos-cocinero.component';
import { TotalPedidosCocineroComponent } from './total-pedidos-cocinero/total-pedidos-cocinero.component';

@NgModule({
  declarations: [
    PedidosCocineroComponent,
    TotalPedidosCocineroComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CocineroRoutingModule
  ],
  exports: [
    PedidosCocineroComponent,
    TotalPedidosCocineroComponent,
  ]
})
export class CocineroModule { }
