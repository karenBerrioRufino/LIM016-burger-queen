import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeseroRoutingModule } from './mesero-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { CartaComponent } from './carta/carta.component';
import { CartaOpcionesComponent } from './carta-opciones/carta-opciones.component';
import { TotalPedidosMeseroComponent } from './total-pedidos-mesero/total-pedidos-mesero.component';
import { PedidosMeseroComponent } from './pedidos-mesero/pedidos-mesero.component';

import { ProductService } from 'src/app/services/product.service';
import {StorageService} from 'src/app/services/storage.service'

@NgModule({
  declarations: [
    CartaComponent,
    CartaOpcionesComponent,
    TotalPedidosMeseroComponent,
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
    TotalPedidosMeseroComponent,
    PedidosMeseroComponent
  ],
  providers: [
    ProductService,
    StorageService
  ]
})
export class MeseroModule { }
