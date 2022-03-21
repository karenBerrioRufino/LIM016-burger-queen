import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import Swal from 'sweetalert2';


// import { BehaviorSubject, switchMap, tap} from 'rxjs';
// import { RegisterUsers } from '../administrador/models/registerUsers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // private user = new BehaviorSubject<RegisterUsers | null>(null)
  // user$ =this.user.asObservable();

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

      // const Toast = Swal.mixin({
      //   toast: true,
      //   position: 'top-end',
      //   showConfirmButton: false,
      //   timer: 3500,
      //   timerProgressBar: true,
      //   didOpen: (toast) => {
      //     toast.addEventListener('mouseenter', Swal.stopTimer)
      //     toast.addEventListener('mouseleave', Swal.resumeTimer)
      //   }
      // })

      // console.log("error de login",error);

      // if (email === '' && password === '') {
      //   console.log('Debes completar todos los campos');
      //   Toast.fire({
      //     icon: 'error',
      //     title: 'Debes completar todos los campos'
      //   })
        
      // }
      // if (error === 'FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).') {
      //   console.log('email invalido');
        
      // }
      // if (password === '') {
      //   console.log('Debes completar el campo del password');
      // }
      // if (password.length<6) {
      //   console.log('El password debe contener minimo 6 caracteres');
        
      // }
      // if(error ==='auth/wrong-password'){
      //   console.log('problemas');
        
      // }

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

  async logout(): Promise<void> {
    try {
      // console.log(this.authWithAngularFirebase.authState);
      await this.authWithAngularFirebase.signOut();
    } catch (error) {
      console.log(error);
    }
  }

}
