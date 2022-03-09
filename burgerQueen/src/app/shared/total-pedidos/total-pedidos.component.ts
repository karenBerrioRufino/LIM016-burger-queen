import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-total-pedidos',
  templateUrl: './total-pedidos.component.html',
  styleUrls: ['./total-pedidos.component.scss']
})
export class TotalPedidosComponent implements OnInit {
  clientName = this.productService.disparador.getValue();

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    console.log(this.clientName);
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
