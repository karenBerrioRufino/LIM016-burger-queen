import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
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
  aditionalName: string = "";

  typeSelectValue: string = "Ninguno";
  typeName: string = "";

  newPriceHamburguer: number = 0;
  booleanValue: boolean = true;

  constructor(public productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.titleHamburger = this.productService.disparador.getValue().name;
    this.priceHamburger = this.productService.disparador.getValue().price;
    this.typeHamburger = this.productService.disparador.getValue().type; //para jalar datos del json
    this.aditionalHamburger = this.productService.disparador.getValue().additional;
    this.imgHamburger = this.productService.disparador.getValue().img;
  }

  // Obtener el valor de tipo de hamburguesa seleccionada
  getTypeSelectValue(){
    this.typeName = this.typeSelectValue;
    return this.typeName;
  }

  // Obtener el valor del adicional seleccionado
  getAditionalSelectValue(calculateCb: (selectValue: string) => any) {
    this.aditionalName = this.aditionalSelectValue;
    calculateCb(this.aditionalName)
  }

  // Calcular el monto del subtotal
  calculateSubtotal(selectValue: string){
    let price = parseInt(document.querySelector('.subtotal')!.innerHTML, 10);
    // console.log(price);

    if(selectValue == 'Huevo' || selectValue == 'Queso'){
      price = price + 1;
      // this.newPriceHamburguer = price;
      return console.log(price);
    } 

    if(selectValue == 'Huevo y queso'){
      price = price + 2;
      // this.newPriceHamburguer = price;
      return console.log(price);
    } 

  }

  // Cerrar la vista de opciones y volver a la carta
  close(){
    this.router.navigate(['./carta'])
  }

  console(){
    console.log('fuera', this.priceHamburger);
  }
}
