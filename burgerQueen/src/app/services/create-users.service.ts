import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { RegisterUsers } from '../administrador/models/registerUsers';

@Injectable({
  providedIn: 'root'
})
export class createUsersService {
  constructor(private firebase:AngularFirestore) { }

  saveUser(user: RegisterUsers):Promise<any>{
    return this.firebase.collection('usuarios').add(user);
  }

  getUsers():Observable<any>{
    return this.firebase.collection('usuarios').snapshotChanges();
  }
}
