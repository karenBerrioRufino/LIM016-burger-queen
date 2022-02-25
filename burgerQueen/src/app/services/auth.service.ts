import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from 'firebase/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authWithAngularFirebase: AngularFireAuth) { }

  async login(rolUser: string, email:string, password:string) {
    try {
      return await this.authWithAngularFirebase.signInWithEmailAndPassword(email,password);
    } catch (error) {
      console.log("error de login",error);
      return null;
    }
  }

}
