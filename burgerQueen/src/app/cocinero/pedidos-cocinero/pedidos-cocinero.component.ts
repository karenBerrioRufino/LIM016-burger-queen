import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-pedidos-cocinero',
  templateUrl: './pedidos-cocinero.component.html',
  styleUrls: ['./pedidos-cocinero.component.scss']
})
export class PedidosCocineroComponent implements OnInit {

  pedidosCocinero: any[] = [];

  constructor(private productService: ProductService,){}

  ngOnInit(): void {
    this.pedidosCocinero = this.productService.waiterOrder.getValue().orderWaiter;
    console.log(this.pedidosCocinero);
  }
}
