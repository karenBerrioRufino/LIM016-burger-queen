import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IngresoModule } from './ingreso/ingreso.module'
import { AtencionModule } from './atencion/atencion.module';
import { SharedModule } from './shared/shared.module';
import { MeseroModule } from './mesero/mesero.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtencionModule,
    IngresoModule,
    SharedModule,
    MeseroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
