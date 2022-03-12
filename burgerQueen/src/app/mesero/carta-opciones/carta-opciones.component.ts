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
  booleanValue: boolean = false;

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

  sendHamburgerOrder(){
    let nameHamburger = ''    

    if(this.aditionalName === ''){
      nameHamburger = `${this.titleHamburger} de tipo ${this.typeName}`
    } else {
      nameHamburger = `${this.titleHamburger} de tipo ${this.typeName} con ${this.aditionalName}`
    }

    const hamburger = {
      name: nameHamburger,
      img: this.imgHamburger,
      price: this.priceHamburger,
    };

    if(this.orders.indexOf(hamburger) == -1){
      this.orders.push(hamburger);
      //product data que es un array lo convierte a string
      this.storageService.set('ordersList', this.orders);
    }
  }

  // Cerrar la vista de opciones y volver a la carta
  close(){
    this.router.navigate(['./carta'])
  }
}
