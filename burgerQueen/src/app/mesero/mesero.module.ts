import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComponent } from './carta/carta.component';
import { CartaOpcionesComponent } from './carta-opciones/carta-opciones.component';
import { TotalPedidosMeseroComponent } from './total-pedidos-mesero/total-pedidos-mesero.component';
import { PedidosMeseroComponent } from './pedidos-mesero/pedidos-mesero.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartaComponent,
    CartaOpcionesComponent,
    TotalPedidosMeseroComponent,
    PedidosMeseroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MeseroModule { }
