import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { CartaOpcionesComponent } from './carta-opciones/carta-opciones.component';
import { PedidosMeseroComponent } from './pedidos-mesero/pedidos-mesero.component';
import { TotalPedidosMeseroComponent } from './total-pedidos-mesero/total-pedidos-mesero.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'carta', component: CartaComponent},
      {path: 'cartaOpciones', component:CartaOpcionesComponent},
      {path: 'pedidosMesero', component: PedidosMeseroComponent},
      {path: 'totalPedidosMesero', component:TotalPedidosMeseroComponent},
      {path: 'notFound', component:PageNotFoundComponent},
      {path: '**', redirectTo: 'notFound', pathMatch: 'full'}
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
