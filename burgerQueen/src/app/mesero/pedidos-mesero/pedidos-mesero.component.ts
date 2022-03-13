import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-pedidos-mesero',
  templateUrl: './pedidos-mesero.component.html',
  styleUrls: ['./pedidos-mesero.component.scss']
})
export class PedidosMeseroComponent implements OnInit {
  constructor(public productService: ProductService, private storageService: StorageService) { }
  
  pedidosMesero: any[] = [];

  subtotal: number = 0;

  ngOnInit(): void {
    this.pedidosMesero = this.storageService.get('ordersList');
    console.log(this.productService.disparador.getValue());
    
  }

  sumar(originalPrice: number, quantity: number){
    let inputSumaYResta = document.querySelector('#inputSumaYResta');
    inputSumaYResta?.setAttribute('value', `${quantity}`);
    console.log(inputSumaYResta);
    if (quantity >= 1) {
       quantity = quantity+1 ;
       this.subtotal = originalPrice * quantity;   
    }
  }
  restar(originalPrice: number, quantity: number){
    if (quantity === 1) {
      quantity;
    }
    else{
      quantity = quantity-1;
      this.subtotal = originalPrice * quantity;
    }
  }
  
  orderDelete(key:any ){
    // this.storageService.remove('orderList');
    this.pedidosMesero.splice(this.pedidosMesero.indexOf(key),1);
    this.storageService.set('ordersList',this.pedidosMesero);
  }
}
