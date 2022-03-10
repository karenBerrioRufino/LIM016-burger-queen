import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta-opciones',
  templateUrl: './carta-opciones.component.html',
  styleUrls: ['./carta-opciones.component.scss']
})

export class CartaOpcionesComponent implements OnInit {
  public titleHamburger: string = '';
  public priceHamburger: number = 0;
  public typeHamburger: string[] = []; //el array donde se va a buscar los datos
  public aditionalHamburger: string[] = [];
  public imgHamburger: string = '';

  aditionalSelectValue: string = "Ninguno";
  aditionalName: string = "";

  constructor(public productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.titleHamburger = this.productService.disparador.getValue().name;
    this.priceHamburger = this.productService.disparador.getValue().price;
    this.typeHamburger = this.productService.disparador.getValue().type; //para jalar datos del json
    this.aditionalHamburger = this.productService.disparador.getValue().additional;
    this.imgHamburger = this.productService.disparador.getValue().img;
  }

  getAditionalSelectValue() {
    this.aditionalName = this.aditionalSelectValue;
  }

  close(){
    this.router.navigate(['./carta'])
  }
}
