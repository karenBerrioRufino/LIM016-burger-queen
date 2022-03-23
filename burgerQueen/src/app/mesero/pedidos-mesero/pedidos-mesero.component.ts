import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pedidos-mesero',
  templateUrl: './pedidos-mesero.component.html',
  styleUrls: ['./pedidos-mesero.component.scss']
})


export class PedidosMeseroComponent implements OnInit {

  total$: BehaviorSubject<number>;
  pedidosMesero: any[] = [];

  constructor(public productService: ProductService, private storageService: StorageService) {
    this.total$ = this.productService.getTotalOfOrder();
  }
  
  ngOnInit(): void {
    this.pedidosMesero = this.storageService.get('ordersList');
    this.calculateAndSendTotal();
  }

  orderDelete(pedido: object){
    const indexOfpedido = this.pedidosMesero.indexOf(pedido);
    this.pedidosMesero.splice(indexOfpedido, 1);
    this.storageService.set('ordersList',this.pedidosMesero);
    this.calculateAndSendTotal();
  }

  upQuantity(pedidoData: any){
    const quantityInput = document.querySelector(`input[id='${pedidoData.id}']`) as HTMLInputElement;

    pedidoData.quantity++
    quantityInput.setAttribute('value', pedidoData.quantity.toString());
    pedidoData.subtotal = pedidoData.quantity * pedidoData.price;
    this.storageService.set('ordersList', this.pedidosMesero);
    
    this.calculateAndSendTotal();
  }

  downQuantity(pedidoData: any){
    const quantityInput = document.querySelector(`input[id='${pedidoData.id}']`) as HTMLInputElement;

    if(pedidoData.quantity == 1){
      pedidoData.quantity;
    } else {
      pedidoData.quantity--;
      quantityInput.setAttribute('value', pedidoData.quantity.toString());
      pedidoData.subtotal = pedidoData.quantity * pedidoData.price;
      this.storageService.set('ordersList', this.pedidosMesero);
      this.calculateAndSendTotal();
    }
  }

  calculateAndSendTotal(){
    let total = 0;
    if(this.pedidosMesero !== null){
      this.pedidosMesero.forEach( pedido => total += pedido.subtotal);
      this.total$.next(total);
    }
    return total;
  }
}
