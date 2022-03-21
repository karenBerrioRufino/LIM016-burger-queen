import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-pedidos-cocinero',
  templateUrl: './pedidos-cocinero.component.html',
  styleUrls: ['./pedidos-cocinero.component.scss']
})
export class PedidosCocineroComponent implements OnInit {
  pedidosCocinero: any[] = [];


  listOfProductosCocinero: any = this.productService.getProductsCocinero();
  constructor(private productService: ProductService,){}
    // private behaviorSubject: BehaviorSubject) {

  ngOnInit(): void {
    this.getListOfOrders();
  }

  getListOfOrders(){
    this.productService.getProductsCocinero().subscribe( documento => {
      console.log(documento);
    }

    );
  }

}
