import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PgeNotFoundComponent } from './pge-not-found/pge-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'app-login', component:LoginComponent},
    {path: 'app-welcome', component:WelcomeComponent},
    {path: 'app-sign-up', component:SignUpComponent},
    {path: '', redirectTo: '/app-welcome', pathMatch: 'full'},
    {path: '**', component: PgeNotFoundComponent}
  ])
],
  exports: [RouterModule]
})

export class AppRoutingModule { }
