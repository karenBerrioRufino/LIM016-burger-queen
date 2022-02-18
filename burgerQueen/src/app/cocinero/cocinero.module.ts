import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    SharedModule
  ]
})
export class CocineroModule { }
