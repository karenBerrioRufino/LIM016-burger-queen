import { NgModule } from '@angular/core';
// import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
// import localePt from '@angular/common/locales/pt';
// import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { IngresoModule } from './ingreso/ingreso.module'

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createUsersService } from './services/create-users.service';
import { StorageService } from './services/storage.service';
import { ProductService } from './services/product.service';
import { ClockService } from './services/clock.service';


// Register the localization
// registerLocaleData(localePt, 'pt-PE');

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    IngresoModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),   
    AppRoutingModule, 
  ],
  providers: [
    ProductService,
    StorageService,
    createUsersService,
    ClockService
  ],
  // providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-PE'
    //  },
    //  {
    //    provide: DEFAULT_CURRENCY_CODE,
    //    useValue: 'S/.'
    //  },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
