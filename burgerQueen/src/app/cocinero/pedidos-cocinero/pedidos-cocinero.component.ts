import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pedidos-cocinero',
  templateUrl: './pedidos-cocinero.component.html',
  styleUrls: ['./pedidos-cocinero.component.scss']
})
export class PedidosCocineroComponent implements OnInit {

  pedidosCocinero: any[] = [];
  // order es el objeto que se manda de totalPedidos
  order: any = {};

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    // order jala todo el documento(pedido completo). Esto es para pintar cada campo que se escoja
    this.order = this.productService.waiterOrder.getValue();
    //se llama a orderWaiter que es un campo en el documento de firestore que se jala. Este pinta la lista completa
    this.pedidosCocinero = this.productService.waiterOrder.getValue().orderWaiter;
  }

  changeToPrepared(order: any | object){
    const index = this.pedidosCocinero.indexOf(order);

    if(this.pedidosCocinero[index].onePrepared !== true) {
      this.pedidosCocinero[index].onePrepared = true; 
      this.productService.updateWaiterOrder(this.order.docId, this.order);
    } else {
      this.pedidosCocinero[index].onePrepared = false; 
      this.productService.updateWaiterOrder(this.order.docId, this.order);
    }
    this.verifyCompleteOrderStatus();
  }

  verifyCompleteOrderStatus(){
    const isAllCompleted = this.order.orderWaiter.every((e: any | object) => e.onePrepared == true);

    if(isAllCompleted){
      this.order.prepared = true;
      this.productService.updateWaiterOrder(this.order.docId, this.order);
    } else {
      this.order.prepared = false;
      this.productService.updateWaiterOrder(this.order.docId, this.order);
    }
  }
}
