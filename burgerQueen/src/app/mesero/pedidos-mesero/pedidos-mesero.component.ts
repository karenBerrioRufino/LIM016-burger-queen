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

  addQuantity(pedidoData: any){
    console.log(Array.from(document.querySelectorAll('.subtotal')))

    const quantityInput = document.querySelector(`input[id='${pedidoData.id}']`) as HTMLInputElement;
    let quantityInputValue: any = quantityInput.getAttribute('value');

    quantityInputValue++;
    quantityInput.setAttribute('value', quantityInputValue.toString());

    pedidoData.subtotal = quantityInputValue * pedidoData.price;
  }

  subtractQuantity(pedidoData: any){
    const quantityInput = document.querySelector(`input[id='${pedidoData.id}']`) as HTMLInputElement;
    let quantityInputValue: any = quantityInput.getAttribute('value');

    if(quantityInputValue == 1){
      quantityInputValue;
      pedidoData.subtotal = quantityInputValue * pedidoData.price;
    } else {
      quantityInputValue--;
      quantityInput.setAttribute('value', quantityInputValue.toString());
      pedidoData.subtotal = quantityInputValue * pedidoData.price;
    }
  }
}
