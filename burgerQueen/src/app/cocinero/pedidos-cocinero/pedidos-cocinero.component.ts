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
      console.log(this.pedidosCocinero)
      // this.productService.updateWaiterOrder()
    } else {
      this.pedidosCocinero[index].onePrepared = false;
      console.log(this.pedidosCocinero)
    }
  }
}
