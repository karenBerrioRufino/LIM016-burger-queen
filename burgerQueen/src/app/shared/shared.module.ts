import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegadorComponent } from './navegador/navegador.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { DatosPedidoComponent } from './datos-pedido/datos-pedido.component';
import { TotalPedidosComponent } from './total-pedidos/total-pedidos.component';



@NgModule({
  declarations: [
    NavegadorComponent,
    ListaPedidosComponent,
    DatosPedidoComponent,
    TotalPedidosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
