// No eliminar Component
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AdministradorComponent } from './administrador/administrador.component';
import { GestionUsuariosComponent } from '../administrador/gestion-usuarios/gestion-usuarios.component';

const routes: Routes = [
  { 
    path: 'administrador',
    component: AdministradorComponent 
  },
  { 
    path: 'gestionUsuarios', 
    component: GestionUsuariosComponent
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