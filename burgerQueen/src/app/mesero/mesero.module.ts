import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MeseroComponent } from './mesero/mesero.component';
import { AtencionModule } from '../atencion/atencion.module';
import { SharedModule } from '../shared/shared.module';
// import { TomarPedidosComponent } from './tomar-pedidos/tomar-pedidos.component';


@NgModule({
  declarations: [
    MeseroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AtencionModule,
    SharedModule
  ]

})
export class MeseroModule { }
