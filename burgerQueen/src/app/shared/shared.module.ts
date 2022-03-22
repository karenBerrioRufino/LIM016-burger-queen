import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { DatosPedidoComponent } from './datos-pedido/datos-pedido.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TotalPedidosComponent } from './total-pedidos/total-pedidos.component';

import {StorageService} from 'src/app/services/storage.service'
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';


@NgModule({
  declarations: [
    NavegadorComponent,
    DatosPedidoComponent,
    TotalPedidosComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    NavegadorComponent,
    DatosPedidoComponent,
    TotalPedidosComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
