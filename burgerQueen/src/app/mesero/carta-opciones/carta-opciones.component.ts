import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta-opciones',
  templateUrl: './carta-opciones.component.html',
  styleUrls: ['./carta-opciones.component.scss']
})

export class CartaOpcionesComponent implements OnInit {
  titleHamburger: string = '';
  priceHamburger: number = 0;
  typeHamburger: string[] = []; //el array donde se va a buscar los datos
  aditionalHamburger: string[] = [];
  imgHamburger: string = '';

  aditionalSelectValue: string = "Ninguno";
  aditionalName?: string = "";

  typeSelectValue: string = "Ninguno";
  typeName?: string = "";

  originalPrice: number = 0;
  orders: any[] = [];

  constructor(public productService: ProductService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.titleHamburger = this.productService.disparador.getValue().name;
    this.priceHamburger = this.productService.disparador.getValue().price;
    this.typeHamburger = this.productService.disparador.getValue().type; //para jalar datos del firestore
    this.aditionalHamburger = this.productService.disparador.getValue().additional;
    this.imgHamburger = this.productService.disparador.getValue().img;

    this.originalPrice = this.productService.disparador.getValue().price;

    let ordersList: any = this.storageService.get('ordersList');
    if(ordersList){
      // iguala el array con los datos que jala del storage. Sobre el array que existe, irá agregando los objetos
      this.orders = ordersList;       
    }
  }

  // Obtener el valor de tipo de hamburguesa seleccionada
  getTypeSelectValue(){
    this.typeName = this.typeSelectValue;
    return this.typeName;
  }

  // Calcular el monto del subtotal
  calculateSubtotal(){
    this.aditionalName = this.aditionalSelectValue;

    if(this.aditionalName === 'Huevo' || this.aditionalName === 'Queso'){
      this.priceHamburger = this.originalPrice;
      this.priceHamburger = this.priceHamburger + 1;
    } 

    if(this.aditionalName == 'Huevo y queso'){
      this.priceHamburger = this.originalPrice;
      this.priceHamburger = this.priceHamburger + 2;
    }

    return this.priceHamburger;
  }

  changeHamburgerName(){
    let hamburgerName = "";
    if(this.aditionalName === ""){
      hamburgerName = `${this.titleHamburger} de tipo ${this.typeName}`;
    } else {
      hamburgerName = `${this.titleHamburger} de tipo ${this.typeName} con ${this.aditionalName}`
    }
    return hamburgerName;
  }

  changeHamburgerId(){
    let hamburgerId = this.productService.disparador.getValue().id;
    switch(this.typeName){
      case "Carne":
        hamburgerId = hamburgerId + "-CAR";
        break;
      case "Pollo":
        hamburgerId = hamburgerId + "-POLL";
        break;
      case "Vegetariana":
        hamburgerId = hamburgerId + "-VEG";
        break;
      default:
        hamburgerId;
        break;
    }

    switch(this.aditionalName){
      case "Huevo":
        hamburgerId = hamburgerId + "-HUE";
        break;
      case "Queso":
        hamburgerId = hamburgerId + "-QUE";
        break;
      case "Huevo y queso":
        hamburgerId = hamburgerId + "-H&Q";
        break;
      default:
        hamburgerId;
        break;
    }

    return hamburgerId;
  }

  sendHamburgerOrder(){
    const hamburger = {
      name: this.changeHamburgerName(),
      img: this.imgHamburger,
      price: this.priceHamburger,
      id: this.changeHamburgerId(),
      subtotal: this.priceHamburger,
    };

    const wasOrdered = this.orders.some(order => order.id === hamburger.id);
    if(!wasOrdered){
      this.orders.push(hamburger);
      this.storageService.set('ordersList', this.orders);
    }
  }

  // Cerrar la vista de opciones y volver a la carta
  close(){
    this.router.navigate(['./carta'])
  }
}
