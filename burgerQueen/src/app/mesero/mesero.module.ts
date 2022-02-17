import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MeseroComponent } from './mesero/mesero.component';

import { IngresoModule } from '../ingreso/ingreso.module';
import { AtencionModule } from '../atencion/atencion.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MeseroComponent
  ],
  imports: [
    CommonModule,
    IngresoModule,
    SharedModule,
    AtencionModule
  ]

})
export class MeseroModule { }
