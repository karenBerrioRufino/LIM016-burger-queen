import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-pedidos',
  templateUrl: './total-pedidos.component.html',
  styleUrls: ['./total-pedidos.component.scss']
})
export class TotalPedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviado = false;
  preparado = false;
  entregado = false;

  changeOrderShipped(){
    this.enviado = !this.enviado;
  }

  changeReadyPreparation(){
    this.preparado = !this.preparado;
  }
  changeOrderServed(){
    this.entregado = !this.entregado;
  }
  
}
