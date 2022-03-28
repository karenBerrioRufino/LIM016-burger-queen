import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-pedidos',
  templateUrl: './total-pedidos.component.html',
  styleUrls: ['./total-pedidos.component.scss']
})

export class TotalPedidosComponent implements OnInit {

  rolUser: string = '';
  orders: any | object[] = [];
  subscribe: any;

  constructor(public productService: ProductService, private router: Router, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.rolUser = this.storageService.getCurrentUser('currentUser').rol;
    this.getAllWaiterOrders();
  }

  changeOrderPrepared(order: any | object) {
    if (this.rolUser === 'Cocinero' || this.rolUser === 'Administrador') {
      if(order.prepared == false) order.prepared = true;
      else order.prepared = false;

      this.productService.updateWaiterOrder(order.docId, order);
      this.subscribe.unsubscribe();
    }
  }

  changeOrderServed(order: any | object) {
    if (this.rolUser === 'Mesero' || this.rolUser === 'Administrador') {
      if(order.served == false) order.served = true;
      else order.served = false;

      this.productService.updateWaiterOrder(order.docId, order);
      this.subscribe.unsubscribe();
    }
  }

  getAllWaiterOrders() {
    this.subscribe = 
    this.productService.getAllWaiterOrders().subscribe(collection => {
      this.orders = [];

      if (collection.length > 0) {
        collection.forEach((resp: any) => {
          this.orders.push({
            docId: resp.payload.doc.id,
            ...resp.payload.doc.data(),
          });
        });
      } else {
        console.log('No hay pedidos');
      }
    })
  }
 
  sendOrderData(order: any | object) {
    if (this.rolUser !== 'Cocinero') {
      // para la vista de mesero y administrador
      this.router.navigate(['/viewOrder']);
      this.productService.showOrder.next(order);
    }
    else{
      // para la vista de cocinero
    this.router.navigate(['/pedidosCocinero']);
    this.productService.waiterOrder.next(order);
    }
    console.log('rolUser', this.rolUser);
  }
}
