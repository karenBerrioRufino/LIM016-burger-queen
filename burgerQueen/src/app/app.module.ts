import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'

import { IngresoModule } from './ingreso/ingreso.module'
import { SharedModule } from './shared/shared.module';
import { MeseroModule } from './mesero/mesero.module';
import { CocineroModule } from './cocinero/cocinero.module';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IngresoModule,
    SharedModule,
    MeseroModule,
    CocineroModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
