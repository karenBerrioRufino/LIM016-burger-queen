import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { BehaviorSubject } from 'rxjs';
import { createUsersService } from 'src/app/services/create-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-pedidos',
  templateUrl: './total-pedidos.component.html',
  styleUrls: ['./total-pedidos.component.scss']
})

export class TotalPedidosComponent implements OnInit {

  getRolUser$: BehaviorSubject<string>;
  rolUser: string = '';
  orders: any | object[] = [];
  subscribe: any;

  // clientName = this.productService.disparador.getValue();

  constructor(public productService: ProductService, private createUser: createUsersService, private router: Router) {
    this.getRolUser$ = this.createUser.getRol();

    this.getRolUser$.subscribe(value => {
      this.rolUser = value;
      console.log(this.rolUser);
    });
  }

  ngOnInit(): void {
    this.getAllWaiterOrders()
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
        console.log(this.orders)
      } else {
        console.log('No hay pedidos');
      }
    })
  }

  sendOrderData(order: any | object) {
    this.router.navigate(['/pedidosCocinero']);
  }
}
