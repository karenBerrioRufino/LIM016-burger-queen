import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.scss']
})
export class DatosPedidoComponent implements OnInit {
  date = new Date().toLocaleDateString();
  hour = new Date().toLocaleTimeString();
  clientName = new FormControl('');
  
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    
  }

  sendName(){
    this.productService.disparador.next(this.clientName.value);
    console.log(this.clientName.value);
  }
}
