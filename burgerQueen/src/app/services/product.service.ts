import { Injectable, Output } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // el disparador toma como valor el BehaviorSubject
  @Output() disparador: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private firestore: AngularFirestore) { }
  
  getProducts(): Observable<any> {
    return this.firestore.collection('carta', ref => ref.orderBy('name')).snapshotChanges();
  }

  createOrder(product: object): Promise<any> {
    return this.firestore.collection('pedidos').doc().collection('pedidoCliente').add(product);
  }

}
