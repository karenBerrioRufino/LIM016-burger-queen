import { Component, OnInit, /*EventEmitter, Output*/} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})

export class CartaComponent implements OnInit {
  booleanValue: boolean = false;
  numberOfClicks: number = 0;

  carta: any[] = [];
  hamburguesas: any[] = [];
  sandwichs: any[] = [];
  aperitivos: any[] = [];
  bebidas: any[] = [];
  
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getCartaData();
  }

  changeSection(){
    if (this.numberOfClicks > 0) {
      this.booleanValue = false;
      this.numberOfClicks = 0;
    } else {
      this.booleanValue = true;
      this.numberOfClicks += 1;
    }
  }

  getCartaData(){
    this.productService.getProducts().subscribe( doc => { 
      this.carta = [];

      doc.forEach((element: any) => {
        this.carta.push({
          docId: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });

      this.hamburguesas = this.carta.filter(item => item.category === 'hamburguesas');
      this.sandwichs = this.carta.filter(item => item.category === 'sandwichs');
      this.aperitivos = this.carta.filter(item => item.category === 'aperitivos');
      this.bebidas = this.carta.filter(item => item.category === 'bebidas');
    })
  }

  getHamburgerData(dataHamburguesa: any) {
    //para enviar el dato a cartaOpciones
    this.productService.disparador.next(dataHamburguesa);
  }
  getItemData(dataSandwich: any){
    this.productService.disparador.next(dataSandwich);
  
  }

}
