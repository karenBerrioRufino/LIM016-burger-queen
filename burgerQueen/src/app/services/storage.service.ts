import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  //Función de almacenamiento
  set(key: string, value: object){
    localStorage.setItem(key,JSON.stringify(value));
  }
  
  // función de consulta (memoria / persistencia)
  get(key: string){
    return JSON.parse(localStorage.getItem(key)!);
  }
 
  clear(){
    localStorage.clear();
  }

  setCurrentUser(userData: any | object){
    return sessionStorage.setItem('currentUser', JSON.stringify(userData));
  }

  getCurrentUser(userName: string){
    return JSON.parse(sessionStorage.getItem(userName)!);
  }

  removeCurrentUser(){
    sessionStorage.removeItem('currentUser');
  }
}
