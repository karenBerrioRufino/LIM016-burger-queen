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
    this.getAllWaiterOrders()
  }

  enviado = false;
  preparado = false;
  entregado = false;

  orders: any | object [] = [];

  changeOrderShipped(){
    this.enviado = !this.enviado;
  }

  changeReadyPreparation(){
    this.preparado = !this.preparado;
  }

  changeOrderServed(){
    this.entregado = !this.entregado;
  }

  getAllWaiterOrders(){
    this.productService.getAllWaiterOrders().subscribe( collection => { 
      this.orders = [];

      if(collection.length > 0){
        collection.forEach((element: any) => {
          this.orders.push(element.payload.doc.data());
        });
        console.log(this.orders)
      } else {
        console.log('No hay pedidos');
      }
    })
  }
}
