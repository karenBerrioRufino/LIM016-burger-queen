import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { promises } from 'dns';
// import firebase from 'firebase/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authWithAngularFirebase: AngularFireAuth) { }

  async register(email:string, password:string) {
    try {
      const result = await this.authWithAngularFirebase.createUserWithEmailAndPassword(email,password);
      this.emailVerification();
      return result;
    } catch (error) {
      console.log("error de login",error);
      return null;
    }
  }
  async login(email:string, password:string) {
    try {
      return await this.authWithAngularFirebase.signInWithEmailAndPassword(email,password);
    } catch (error) {
      console.log("error de login",error);
      return null;
    }
  }

  async emailVerification(): Promise<void> {
    try {
      return (await this.authWithAngularFirebase.currentUser)?.sendEmailVerification();
    } catch (error) {
      console.log("error de login",error);
    }
  }

  resetPassword(email: string): Promise<void>{
    return this.authWithAngularFirebase.sendPasswordResetEmail(email);
  }

  logout() {
    this.authWithAngularFirebase.signOut();
  }

}
