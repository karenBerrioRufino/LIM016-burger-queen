import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-carta-opciones',
  templateUrl: './carta-opciones.component.html',
  styleUrls: ['./carta-opciones.component.scss']
})

export class CartaOpcionesComponent implements OnInit {
  public titleHamburger: any;
  public priceHamburger: any;
  public typeHamburger: any; //el array donde se va a buscar los datos
  public aditionalHamburger: any;
  public imgHamburger: any;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.titleHamburger = this.productService.disparador.getValue().title;
    this.priceHamburger = this.productService.disparador.getValue().price;
    this.typeHamburger = this.productService.disparador.getValue().type; //para jalar datos del json
    this.aditionalHamburger = this.productService.disparador.getValue().extra;
    this.imgHamburger = this.productService.disparador.getValue().img;
    console.log(this.typeHamburger);
  }

}
