import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MeseroComponent } from './mesero/mesero.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'mesero', component: MeseroComponent },
      {path: '**', redirectTo: 'mesero', pathMatch: 'full'},
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
export class MeseroRoutingModule { }
