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
  
  ngOnInit(): void {
    this.pedidosMesero = this.storageService.get('ordersList');
  }

  orderDelete(pedido: object){
    const indexOfpedido = this.pedidosMesero.indexOf(pedido);
    this.pedidosMesero.splice(indexOfpedido, 1);
    this.storageService.set('ordersList',this.pedidosMesero);
  }

  upQuantity(pedidoData: any){
    const quantityInput = document.querySelector(`input[id='${pedidoData.id}']`) as HTMLInputElement;
    // let quantityInputValue: any = quantityInput.getAttribute('value');

    pedidoData.quantity++
    // quantityInputValue++;
    quantityInput.setAttribute('value', pedidoData.quantity.toString());
    // quantityInput.setAttribute('value', quantityInputValue.toString());
    pedidoData.subtotal = pedidoData.quantity * pedidoData.price;
    // pedidoData.subtotal = quantityInputValue * pedidoData.price;

    // const quantityObject = { quantity: quantityInputValue };
    // pedidoData = Object.assign(pedidoData, quantityObject);
    this.storageService.set('ordersList', this.pedidosMesero);
  }

  downQuantity(pedidoData: any){
    const quantityInput = document.querySelector(`input[id='${pedidoData.id}']`) as HTMLInputElement;
    // let quantityInputValue: any = quantityInput.getAttribute('value');

    if(pedidoData.quantity == 1){
      pedidoData.quantity;
      pedidoData.subtotal = pedidoData.quantity * pedidoData.price;
    } else {
      pedidoData.quantity--;
      quantityInput.setAttribute('value', pedidoData.quantity.toString());
      pedidoData.subtotal = pedidoData.quantity * pedidoData.price;

      // const quantityObject = { quantity: pedidoData.quantity };
      // pedidoData = Object.assign(pedidoData, quantityObject);
      this.storageService.set('ordersList', this.pedidosMesero);
    }
  }
}
