import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeseroRoutingModule } from './mesero-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { CartaComponent } from './carta/carta.component';
import { CartaOpcionesComponent } from './carta-opciones/carta-opciones.component';
import { PedidosMeseroComponent } from './pedidos-mesero/pedidos-mesero.component';

@NgModule({
  declarations: [
    CartaComponent,
    CartaOpcionesComponent,
    PedidosMeseroComponent
  ],
  imports: [
    CommonModule,
    MeseroRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    CartaComponent,
    CartaOpcionesComponent,
    PedidosMeseroComponent
  ]
})
export class MeseroModule { }
