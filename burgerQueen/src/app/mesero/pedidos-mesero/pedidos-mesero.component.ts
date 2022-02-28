import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pedidos-mesero',
  templateUrl: './pedidos-mesero.component.html',
  styleUrls: ['./pedidos-mesero.component.scss']
})
export class PedidosMeseroComponent implements OnInit {
  public title:any;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.title = this.productService.disparador.getValue().title;
  }

}
