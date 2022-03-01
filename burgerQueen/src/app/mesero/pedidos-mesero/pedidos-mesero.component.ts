import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ListaPedidosComponent } from 'src/app/shared/lista-pedidos/lista-pedidos.component';

@Component({
  selector: 'app-pedidos-mesero',
  templateUrl: './pedidos-mesero.component.html',
  styleUrls: ['./pedidos-mesero.component.scss']
})
export class PedidosMeseroComponent implements OnInit {
  public title:any;
  public priceHamburger: any
  public img: any
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.title = this.productService.disparador.getValue().title;
    this.priceHamburger = this.productService.disparador.getValue().price;
    this.img = this.productService.disparador.getValue().img;
  }
  sumar(){
    let suma: number = 0;
    suma= suma + this.priceHamburger;
  }
  restar(){
    let resta: number = 0;
    resta = this.priceHamburger - 1;
  }
  eliminar(){
    
  }
}
