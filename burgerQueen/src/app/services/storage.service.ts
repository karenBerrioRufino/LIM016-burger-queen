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

  setCurrentUser(key: string, userData: any | object){
    return sessionStorage.setItem(key, JSON.stringify(userData));
  }

  getCurrentUser(key: string){
    return JSON.parse(sessionStorage.getItem(key)!);
  }

  removeCurrentUser(){
    sessionStorage.removeItem('currentUser');
  }
}
