import { Component, OnInit, /*EventEmitter, Output*/} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Data from '../../../assets/json/menu.json';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})

export class CartaComponent implements OnInit {
  booleanValue: boolean = false;
  numberOfClicks: number = 0;
  carta: any = Data.carta;
  constructor(public productService: ProductService) {
  }
  ngOnInit(): void {
  }

  changeSection(){
    if (this.numberOfClicks > 0) {
      this.booleanValue = false;
      this.numberOfClicks = 0;
      console.log('derecha');
    } else {
      this.booleanValue = true;
      this.numberOfClicks += 1;
      console.log('izquierda');
    }
  }

  getHamburgerData(dataHamburguesa: any) {
    //para enviar el dato a cartaOpciones
    this.productService.disparador.next(dataHamburguesa);
  }
  getSandwichData(dataSandwich: any){
    this.productService.disparador.next(dataSandwich);
  }
}
