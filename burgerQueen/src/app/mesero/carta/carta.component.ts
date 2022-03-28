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
  orderList: any[] = [];

  constructor(
    private productService: ProductService,
    private storageService: StorageService
  ) {
  }

  ngOnInit(): void {
    // orderList son los datos que esta jalando del localStorage
    let orderListStorage: any = this.storageService.get('orderList');

    // iguala el array con los datos que jala del storage. Sobre el array que existe, irá agregando los objetos
    if (orderListStorage) {
      this.orderList = orderListStorage;
    }

    this.getCartaData();
  }

  changeSectionOfCarta() {
    if (this.numberOfClicks > 0) {
      this.isSectionchanged = false;
      this.numberOfClicks = 0;
    } else {
      this.isSectionchanged = true;
      this.numberOfClicks += 1;
    }
  }

  getCartaData() {
    this.productService.getProducts().subscribe(doc => {
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

  //para enviar el dato a cartaOpciones
  sendHamburgerDataToOptionsView(dataHamburguesa: any) {
    this.productService.disparador.next(dataHamburguesa);
  }

  sendItemDataToPedidosView(productData: any) {
    const wasOrdered = this.orderList.some(order => order.id === productData.id); //se entiende que es verdadero
    if (!wasOrdered) { // tiene que ser falso
      this.orderList.push({ ...productData, quantity: 1, subtotal: productData.price });
      //product data que es un array lo convierte a string
      this.storageService.set('orderList', this.orderList);
    }
  }

  wasSelected(itemId: string) {
    return this.orderList.some(oneOrder => oneOrder.id === itemId) ? 'block' : 'none';
  }
}
