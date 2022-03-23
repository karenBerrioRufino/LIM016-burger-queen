import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  listOfOrder: any[] = [];
  order: any = {};

  total$: BehaviorSubject<number>;
  constructor(private productService: ProductService) { 
    this.total$ = this.productService.getTotalOfOrder();
  }

  ngOnInit(): void {
    // order jala todo el documento. Esto es para pintar cada campo que se escoja
    this.order = this.productService.showOrder.getValue();
    //se llama a orderWaiter que es un campo en el documento de firestore que se jala. Este pinta la lista completa
    //Para jalar datos del firestore
    this.listOfOrder = this.productService.showOrder.getValue().orderWaiter;
  }

  orderDelete(list: object){
    const indexOfpedido = this.listOfOrder.indexOf(list);
    this.listOfOrder.splice(indexOfpedido, 1);
    this.calculateAndSendTotal();
  }
  downQuantity(list: any){
    const quantityInput = document.querySelector(`input[id='${list.id}']`) as HTMLInputElement;

    if(list.quantity == 1){
      list.quantity;
    } else {
      list.quantity--;
      quantityInput.setAttribute('value', list.quantity.toString());
      list.subtotal = list.quantity * list.price;
      this.calculateAndSendTotal();
    }
  }

  upQuantity(list: any){
    const quantityInput = document.querySelector(`input[id='${list.id}']`) as HTMLInputElement;

    list.quantity++
    quantityInput.setAttribute('value', list.quantity.toString());
    list.subtotal = list.quantity * list.price;
    this.calculateAndSendTotal();
  }

  calculateAndSendTotal(){
    let total = 0;
    if(this.listOfOrder !== null){
      this.listOfOrder.forEach( (list) => total += list.subtotal);
      this.total$.next(total);
    }
    return total;
  }
}
