import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Output() disparador:BehaviorSubject<any> = new BehaviorSubject( {});

  constructor() { }
}
