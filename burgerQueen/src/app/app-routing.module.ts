import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path: '',
        loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule)
      },
      // {
      //   path:'', redirectTo:'', pathMatch:'full',
      // },
      // {
      //   path: 'view',
      //   loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
      // },
      // {
      //   path:'pedidos',
      //   loadChildren:()=> import('./shared/shared.module').then(m=>m.SharedModule)
      // },
      
      // {
      //   path: 'cocinero',
      //   loadChildren: () => import('./cocinero/cocinero.module').then(m => m.CocineroModule)
      // },
      // {
      //   path: 'mesero',
      //   loadChildren: () => import('./mesero/mesero.module').then(m => m.MeseroModule)
      // }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ], 
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
