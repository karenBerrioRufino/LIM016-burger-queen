import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // el disparador toma como valor el BehaviorSubject
  @Output() disparador:BehaviorSubject<any> = new BehaviorSubject({});
  constructor() { }
}
