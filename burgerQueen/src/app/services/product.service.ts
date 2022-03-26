import { Injectable, Output } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // el disparador toma como valor el BehaviorSubject
  @Output() disparador: BehaviorSubject<any> = new BehaviorSubject({});
  @Output() waiterOrder: BehaviorSubject<any> = new BehaviorSubject<any>({});
  @Output() showOrder: BehaviorSubject<any> = new BehaviorSubject<any>({});
  @Output() isEditable: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  @Output() editedOrder: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  private totalOfOrder: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private totalOfOrderToEdit: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
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

  getTotalOfOrderToEdit(): BehaviorSubject<number> {
    return this.totalOfOrderToEdit;
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
}
