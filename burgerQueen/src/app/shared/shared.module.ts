import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegadorComponent } from './navegador/navegador.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { DatosPedidoComponent } from './datos-pedido/datos-pedido.component';
import { TotalPedidosComponent } from './total-pedidos/total-pedidos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NavegadorComponent,
    ListaPedidosComponent,
    DatosPedidoComponent,
    TotalPedidosComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
