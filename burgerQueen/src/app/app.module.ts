import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { LoginComponent } from './ingreso/login/login.component';
import { WelcomeComponent } from './ingreso/welcome/welcome.component';
import { PgeNotFoundComponent } from './pge-not-found/pge-not-found.component';
import { MenuComponent } from './atencion/menu/menu.component';*/

import { IngresoModule } from './ingreso/ingreso.module'
import { AtencionModule } from './atencion/atencion.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    /* LoginComponent,
    WelcomeComponent,
    PgeNotFoundComponent,
    MenuComponent, */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtencionModule,
    IngresoModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
