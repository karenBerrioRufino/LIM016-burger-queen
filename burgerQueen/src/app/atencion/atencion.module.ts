import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { OpcionesComponent } from './opciones/opciones.component';

@NgModule({
  declarations: [
    MenuComponent,
    OpcionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MenuComponent, OpcionesComponent]
})
export class AtencionModule { }
