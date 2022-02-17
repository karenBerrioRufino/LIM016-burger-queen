import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeseroComponent } from './mesero/mesero.component';
import { AtencionModule } from '../atencion/atencion.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MeseroComponent
  ],
  imports: [
    CommonModule,
    AtencionModule,
    SharedModule
  ]
})
export class MeseroModule { }
