import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { RegisterUsers } from '../administrador/models/registerUsers';

@Injectable({
  providedIn: 'root'
})
export class createUsersService {
  private usuario$ = new Subject<any>();
  
  constructor(private firestore:AngularFirestore) { }

  saveUser(user: RegisterUsers, uid: any):Promise<any>{
    return this.firestore.collection('usuarios').doc(uid).set(user);
  }

  getUsers():Observable<any>{
    return this.firestore.collection('usuarios', ref=>ref.orderBy('fechaCreacion', 'desc')).snapshotChanges();
  }

  deleteUser(id:string): Promise<any> {
    return this.firestore.collection('usuarios').doc(id).delete();
  }
  
  editarUsuario(id: string, usuario: any): Promise<any> {
    return this.firestore.collection('usuarios').doc(id).update(usuario);
  }

  addUserEdit(usuario:RegisterUsers){
    this.usuario$.next(usuario);
  }

  getUserEdit():Observable<RegisterUsers>{
    return this.usuario$.asObservable();
  }
}
