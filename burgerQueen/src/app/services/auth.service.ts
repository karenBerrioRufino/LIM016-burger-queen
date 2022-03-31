import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Observable } from 'rxjs';
// import Swal from 'sweetalert2';
// import { BehaviorSubject, switchMap, tap} from 'rxjs';
// import { RegisterUsers } from '../administrador/models/registerUsers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public userData$ = this.authWithAngularFirebase.authState;
  constructor(private authWithAngularFirebase: AngularFireAuth) {}

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
    const loginS=await this.authWithAngularFirebase.signInWithEmailAndPassword(email,password);
    console.log(typeof loginS);
    return loginS;
    
  }

  async emailVerification(): Promise<void> {
    try {
      return (await this.authWithAngularFirebase.currentUser)?.sendEmailVerification();
    } catch (error: any) {
      return error;
    }
  }

  resetPassword(email: string): Promise<void>{
    return this.authWithAngularFirebase.sendPasswordResetEmail(email);
  }

  logout() {
   // try {
      // console.log(this.authWithAngularFirebase.authState);
       this.authWithAngularFirebase.signOut();
       localStorage.removeItem("usuarioActivo");

    // } catch (error) {
    //   console.log(error);
    // }
  }

}
