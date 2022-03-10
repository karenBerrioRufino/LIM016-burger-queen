import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pedidos-mesero',
  templateUrl: './pedidos-mesero.component.html',
  styleUrls: ['./pedidos-mesero.component.scss']
})
export class PedidosMeseroComponent implements OnInit {
  public title:string = '';
  public priceHamburger: number = 0;
  public img: any;
  public saveList: object[] =[];
  constructor(public productService: ProductService) { }


  ngOnInit(): void {
    this.title = this.productService.disparador.getValue().name;
    this.priceHamburger = this.productService.disparador.getValue().price;
    this.img = this.productService.disparador.getValue().img;
    this.saveListData();
  }

  // Enlistar los pedidos de la carta
  saveListData(){
    this.saveList.push((arrs:any) => {
      for (let i = 0, arr; arr=arrs[i]; i++) {
        arrs[i]=this.productService.disparador.getValue();  
        console.log('h'); 
      }
    })
    
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
