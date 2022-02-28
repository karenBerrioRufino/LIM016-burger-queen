import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';

=======
import { ProductService } from 'src/app/services/product.service';
>>>>>>> c634fac2b275b0fefdd2a955d6af136bc83a2184

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
