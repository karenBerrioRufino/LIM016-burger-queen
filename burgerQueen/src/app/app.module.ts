import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IngresoModule } from './ingreso/ingreso.module'
// import { SharedModule } from './shared/shared.module';
// import { MeseroModule } from './mesero/mesero.module';
// import { CocineroModule } from './cocinero/cocinero.module';
import { ViewModule } from './view/view.module';
import { AppComponent } from './app.component';

// import { AdministradorModule } from './administrador/administrador.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    IngresoModule,
    ViewModule,
    // SharedModule,
    // MeseroModule,
    // CocineroModule,
    // AdministradorModule,
    AppRoutingModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
