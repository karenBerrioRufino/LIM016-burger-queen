import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pedidos-cocinero',
  templateUrl: './pedidos-cocinero.component.html',
  styleUrls: ['./pedidos-cocinero.component.scss']
})
export class PedidosCocineroComponent implements OnInit {

  orderList: any[] = [];

  // completeOrder es el objeto con datos del pedido que se manda de TotalPedidos
  completeOrder: any = {};

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    // completeOrder jala todo el documento(pedido completo). Esto es para pintar cada campo que se escoja
    this.completeOrder = this.productService.waiterOrder.getValue();

    //se llama a orderWaiter que es un campo en el documento de firestore que se jala. Este pinta la lista completa
    this.orderList = this.productService.waiterOrder.getValue().orderWaiter;
  }

  changeToPrepared(oneOrder: any | object){
    if(!this.completeOrder.preparationTime){
      const index = this.orderList.indexOf(oneOrder);
        if(this.orderList[index].onePrepared !== true) {
          this.orderList[index].onePrepared = true; 
          this.productService.updateWaiterOrder(this.completeOrder.docId, this.completeOrder);
        } else {
          this.orderList[index].onePrepared = false; 
          this.productService.updateWaiterOrder(this.completeOrder.docId, this.completeOrder);
        }
        this.verifyOrdersArePrepared();
    }
  }

  verifyOrdersArePrepared(){
    const isAllPrepared = this.completeOrder.orderWaiter.every((oneOrder: any | object) => oneOrder.onePrepared == true);

    if(isAllPrepared){
      this.completeOrder.fullyPrepared = true;
      this.productService.updateWaiterOrder(this.completeOrder.docId, this.completeOrder);
    } else {
      this.completeOrder.fullyPrepared = false;
      this.productService.updateWaiterOrder(this.completeOrder.docId, this.completeOrder);
    }
  }
}
