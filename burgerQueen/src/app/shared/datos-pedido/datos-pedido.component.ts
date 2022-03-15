import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.scss']
})
export class DatosPedidoComponent implements OnInit {
  date = new Date().toLocaleDateString();
  hour = new Date().toLocaleTimeString();
  clientName = new FormControl('');

  pedidosMesero: any[] = [];
  orderTotal: number = 0;

  total$: BehaviorSubject<number>;
  
  constructor(public productService: ProductService, private storageService: StorageService) {
    this.total$ = this.productService.getTotalOfOrder();

    this.total$.subscribe(value => {
      this.orderTotal = value;
    });
   }

  ngOnInit(): void {
    this.pedidosMesero = this.storageService.get('ordersList');

    // this.total = this.productService.disparador2.getValue();
    // console.log(this.total);
    // this.calculateTotal();
  }

  sendName(){
    this.productService.disparador.next(this.clientName.value);
    console.log(this.clientName.value);
  }

/*   calculateTotal(){
    this.pedidosMesero.forEach( pedido => {
      this.total += pedido.subtotal;
    })
    return this.total;
  } */
}
