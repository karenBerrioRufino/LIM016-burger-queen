import { Injectable, Output } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // el disparador toma como valor el BehaviorSubject
  @Output() disparador: BehaviorSubject<any> = new BehaviorSubject({});
  private totalOfOrder: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  @Output() waiterOrder: BehaviorSubject<any> = new BehaviorSubject<any>({});
  @Output() showOrder: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private firestore: AngularFirestore) { }
  
  getProducts(): Observable<any> {
    return this.firestore.collection('carta', ref => ref.orderBy('name')).snapshotChanges();
  }

  createOrder(completeOrder: any): Promise<any> {
    return this.firestore.collection('pedidos').doc().set(completeOrder);
  }

  getTotalOfOrder(): BehaviorSubject<number> {
    return this.totalOfOrder;
  }

  getAllWaiterOrders(){
    return this.firestore.collection('pedidos', ref => ref.orderBy('inputHour', 'desc')).snapshotChanges();
  }

  getOneWaiterOrder(docId: string){
    return this.firestore.collection('pedidos').doc(docId).snapshotChanges();

  }
  updateWaiterOrder(docId: string, newOrder: any | object){
    return this.firestore.collection('pedidos').doc(docId).update(newOrder);
  }

/*   getWaiterOrder(): BehaviorSubject<any> {
    return this.waiterOrder;
  } */
}
