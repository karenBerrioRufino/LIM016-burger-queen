import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})

export class ViewOrderComponent implements OnInit {
  orderList: any[] = [];
  completeOrder: any = {};

  totalToEdit$: BehaviorSubject<number>;

  constructor(
    private productService: ProductService
  ) { 
    this.totalToEdit$ = this.productService.getTotalOfOrderToEdit();
  }

  ngOnInit(): void {
    // completeOrder jala todo el documento. Esto es para pintar cada campo que se escoja
    this.completeOrder = this.productService.showOrder.getValue();

    //se llama a orderWaiter que es un campo en el documento de firestore que se jala. Este pinta la lista completa
    //Para jalar datos del firestore
    const orderListStorage = this.productService.showOrder.getValue().orderWaiter;
    if(orderListStorage){
      this.orderList = orderListStorage;
    }
    this.calculateAndSendTotal();
  }

  orderDelete(oneOrder: object){
    const indexOfpedido = this.orderList.indexOf(oneOrder);
    this.orderList.splice(indexOfpedido, 1);
    this.calculateAndSendTotal();
    this.productService.editedOrder.next(this.completeOrder);
  }

  downQuantity(oneOrder: any){
    const quantityInput = document.querySelector(`input[id='${oneOrder.id}']`) as HTMLInputElement;

    if(oneOrder.quantity == 1){
      oneOrder.quantity;
    } else {
      oneOrder.quantity--;
      quantityInput.setAttribute('value', oneOrder.quantity.toString());
      oneOrder.subtotal = oneOrder.quantity * oneOrder.price;
      this.calculateAndSendTotal();
      this.productService.editedOrder.next(this.completeOrder);
    }
  }

  upQuantity(oneOrder: any){
    const quantityInput = document.querySelector(`input[id='${oneOrder.id}']`) as HTMLInputElement;

    oneOrder.quantity++
    quantityInput.setAttribute('value', oneOrder.quantity.toString());
    oneOrder.subtotal = oneOrder.quantity * oneOrder.price;
    this.calculateAndSendTotal();
    this.productService.editedOrder.next(this.completeOrder);
  }

  calculateAndSendTotal(){
    let total = 0;
    if(this.orderList !== null || this.orderList !== undefined){
      this.orderList.forEach( (oneOrder) => total += oneOrder.subtotal);
      console.log('total - viewOrder', total);
      this.totalToEdit$.next(total);
    }
    return total;
  }
}
