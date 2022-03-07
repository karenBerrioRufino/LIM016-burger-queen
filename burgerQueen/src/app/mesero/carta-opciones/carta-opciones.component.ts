import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

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
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.titleHamburger = this.productService.disparador.getValue().name;
    this.priceHamburger = this.productService.disparador.getValue().price;
    this.typeHamburger = this.productService.disparador.getValue().type; //para jalar datos del json
    this.aditionalHamburger = this.productService.disparador.getValue().additional;
    this.imgHamburger = this.productService.disparador.getValue().img;
  }
}
