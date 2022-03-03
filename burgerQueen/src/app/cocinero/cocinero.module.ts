import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { RouterModule } from '@angular/router';
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
    //RouterModule,
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
