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
  //Console.log("El método get en el almacenamiento se llama con éxito ");
    return JSON.parse(localStorage.getItem(key)!);
  }
 
/*   remove(key){
    localStorage.removeItem(key);
  } */

}
