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
  
  numberOfTable: string = "Escoge una mesa";
  selectTable?: string = "";

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
    // estamos jalando el array que contiene 'ordersList' que es lo que se guardó de pedidosMesero
   
  }

  getNumberOfTable(){
    this.selectTable = this.numberOfTable;
    return console.log(this.selectTable) ;
  }

  sendClientData(){
    // pasar la data a firestore
    const promise = new Promise((resolve) => {
      this.pedidosMesero = this.storageService.get('ordersList');
      resolve(
      this.productService.createOrder({
        clientName: this.clientName.value, 
        tableNumber: this.selectTable, 
        date: this.date,
        hour: this.hour, 
        orderWaiter: this.pedidosMesero,
        shipped: true,
        prepared: false,
        served: false,
        total: this.orderTotal,
      }));
    });

    promise.then((res) => {
      this.storageService.clear();
      console.log('localStorage limpio y página recargada:', res);
      window.location.reload();
    });
  }
}
