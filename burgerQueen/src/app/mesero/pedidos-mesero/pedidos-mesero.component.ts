import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-pedidos-mesero',
  templateUrl: './pedidos-mesero.component.html',
  styleUrls: ['./pedidos-mesero.component.scss']
})
export class PedidosMeseroComponent implements OnInit {
  constructor(public productService: ProductService, private storageService: StorageService) { }
  
  pedidosMesero: any[] = [];
  ngOnInit(): void {
    
    this.pedidosMesero = this.storageService.get('ordersList');
  
    console.log(this.productService.disparador.getValue());
    
  }

  orderDelete(key:any){
    // this.storageService.remove('orderList');
    this.pedidosMesero.splice(key,1);
    this.storageService.set('ordersList',this.pedidosMesero);

  }
}
