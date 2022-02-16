import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosPorHacerComponent } from './pedidos-por-hacer/pedidos-por-hacer.component';
import { CocineroComponent } from './cocinero/cocinero.component';



@NgModule({
  declarations: [
    PedidosPorHacerComponent,
    CocineroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CocineroModule { }
