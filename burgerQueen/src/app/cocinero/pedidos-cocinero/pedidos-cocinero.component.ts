import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-pedidos-cocinero',
  templateUrl: './pedidos-cocinero.component.html',
  styleUrls: ['./pedidos-cocinero.component.scss']
})
export class PedidosCocineroComponent implements OnInit {

  pedidosCocinero: any[] = [];
  order: any = {};

  constructor(private productService: ProductService, private storageService: StorageService){}

  ngOnInit(): void {
    this.order = this.productService.waiterOrder.getValue();
    // console.log(this.order);

    this.pedidosCocinero = this.productService.waiterOrder.getValue().orderWaiter;
    // this.storageService.set('orders', {...this.pedidosCocinero})
  }

  changeToPrepared(order: any | object){
    const index = this.pedidosCocinero.indexOf(order);
    if(this.pedidosCocinero[index].prepared !== true) {
      this.pedidosCocinero[index].prepared = true; 
      console.log(this.pedidosCocinero)
      // this.storageService.set('orders', {...this.pedidosCocinero})
    } else {
      this.pedidosCocinero[index].prepared = false;
      console.log(this.pedidosCocinero)
      // this.storageService.set('orders', {...this.pedidosCocinero})
    }
  }
}
