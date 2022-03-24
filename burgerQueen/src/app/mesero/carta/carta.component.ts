import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})

export class CartaComponent implements OnInit {
  isSectionchanged: boolean = false;
  numberOfClicks: number = 0;

  carta: any[] = [];
  hamburguesas: any[] = [];
  sandwichs: any[] = [];
  aperitivos: any[] = [];
  bebidas: any[] = [];
  // es el array donde se ira guardando temporalmente los objetos
  orders: any[] = [];
  ordersId: any[] = [];
  
  constructor(private productService: ProductService, private storageService: StorageService) {
  }

  ngOnInit(): void {
    // ordersList son los datos que esta jalando del localStorage
    let ordersList: any = this.storageService.get('ordersList');
    if(ordersList){
      // iguala el array con los datos que jala del storage. Sobre el array que existe, irá agregando los objetos
      this.orders = ordersList;
    }
    this.getCartaData();
  }

  changeSectionOfCarta(){
    if (this.numberOfClicks > 0) {
      this.isSectionchanged = false;
      this.numberOfClicks = 0;
    } else {
      this.isSectionchanged = true;
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

  sendHamburgerDataToOptionsView(dataHamburguesa: any) {
    //para enviar el dato a cartaOpciones
    this.productService.disparador.next(dataHamburguesa);
  }

  sendItemDataToPedidosView(productData: any){
    const wasOrdered = this.orders.some(order => order.id === productData.id); //se entiende que es verdadero
    if(!wasOrdered){ // tiene que ser falso
      this.orders.push({...productData, quantity: 1, subtotal: productData.price});
      //product data que es un array lo convierte a string
      this.storageService.set('ordersList', this.orders);
    }
  }

  wasSelected(itemId: string){
    return this.orders.some(order => order.id === itemId) ? 'block' : 'none';
  }
}
