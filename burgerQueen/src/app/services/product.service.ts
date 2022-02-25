import { Injectable, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { RegisterUsers } from '../ingreso/models/registerUsers';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Output() disparador:BehaviorSubject<any> = new BehaviorSubject( {});

  constructor(private firebase:AngularFirestore) { }

  saveUser(user: RegisterUsers):Promise<any>{
    return this.firebase.collection('usuarios').add(user);
  }
}
