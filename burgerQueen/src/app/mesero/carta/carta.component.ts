import { Component, OnInit, /*EventEmitter, Output*/} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Data from '../../../assets/json/menu.json';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})

export class CartaComponent implements OnInit {
  carta: any = Data.carta;
  constructor(public productService: ProductService) {
  }
  ngOnInit(): void {
  }

  changeSection(){
    
  }

  getHamburgerData(dataHamburguesa: any) {
    //para enviar el dato a cartaOpciones
    this.productService.disparador.next(dataHamburguesa);
  }
}
