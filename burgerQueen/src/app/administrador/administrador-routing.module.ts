// No eliminar Component
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { GestionUsuariosComponent } from '../administrador/gestion-usuarios/gestion-usuarios.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { 
    path: 'gestionUsuarios', 
    component: GestionUsuariosComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AdministradorRoutingModule { }