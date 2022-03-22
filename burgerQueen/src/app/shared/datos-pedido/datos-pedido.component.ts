import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  constructor(public productService: ProductService, private storageService: StorageService, private router: Router) {
    this.total$ = this.productService.getTotalOfOrder();

    this.total$.subscribe(value => {
      this.orderTotal = value;
    });
   }

  ngOnInit(): void {
    // estamos jalando el array que contiene 'ordersList' que es lo que se guardó de pedidosMesero
    this.pedidosMesero = this.storageService.get('ordersList');
  }

  getNumberOfTable(){
    this.selectTable = this.numberOfTable;
    return console.log(this.selectTable) ;
  }

  sendClientData(){
    // pasar la data a firestore
    const promise = new Promise((resolve) => {
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

      this.Toast.fire({
        icon: 'success',
        title: 'Pedido enviado.'
      })
    });

    promise.then((res) => {
      this.storageService.clear();
      this.router.navigate(['/carta']);
    });
  }
}