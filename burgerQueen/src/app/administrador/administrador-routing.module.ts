import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { GestionUsuariosComponent } from '../administrador/gestion-usuarios/gestion-usuarios.component';
// import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'administrador/view', component: AdministradorComponent },
      { path: 'gestionUsuarios', component: GestionUsuariosComponent },
    //   { path: 'notFound', component: PageNotFoundComponent },
    //   { path: '**', redirectTo: 'notFound', pathMatch: 'full' },
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
export class AdministradorRoutingModule { }
