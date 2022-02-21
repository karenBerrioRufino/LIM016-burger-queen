import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AdministradorComponent } from './administrador/administrador.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'administrador', component: AdministradorComponent },
      { path: 'login', component: LoginComponent },
      { path: 'notFound', component: PageNotFoundComponent },
      { path: '**', redirectTo: 'notFound', pathMatch: 'full' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class IngresoRoutingModule { }
