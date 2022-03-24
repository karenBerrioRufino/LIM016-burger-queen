import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ClockService, valorReloj } from 'src/app/services/clock.service';

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.scss']
})

export class DatosPedidoComponent implements OnInit, AfterViewInit {
  // estos datos son solo para mostrarlos en el componente
  datos$!: Observable<valorReloj>;
  hora!: number;
  minutos!: string;
  dia!: string;
  fecha!: string;
  ampm!: string;
  segundos!: string;
  // date y hour se guardan
  date = new Date().toLocaleDateString();
  hour = new Date().toLocaleTimeString();

  clientName = new FormControl('');
  
  numberOfTable: string = "Escoge una mesa";
  selectTable?: string = "";

  pedidosMesero: any[] = [];
  order: object | any = {};

  total$: BehaviorSubject<number>;
  orderTotal: number = 0;

  rolUser: string = '';

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  constructor(
    public productService: ProductService, 
    private storageService: StorageService, 
    private router: Router,
    private clock: ClockService,
    ) {
    this.total$ = this.productService.getTotalOfOrder();
    this.total$.subscribe(value => {
      this.orderTotal = value;
    });
   }

  ngOnInit(): void {
    // estamos jalando el array que contiene 'ordersList' que es lo que se guardó de pedidosMesero
    this.rolUser = this.storageService.getCurrentUser('currentUser').rol;
    this.order = this.productService.waiterOrder.getValue();

    this.datos$=this.clock.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });
  }

  ngAfterViewInit(): void {
    this.pedidosMesero = this.storageService.get('ordersList');
    console.log(this.pedidosMesero);
  }

  getNumberOfTable(){
    this.selectTable = this.numberOfTable;
    return this.selectTable;
  }
  // estos datos los envía el mesero
  sendClientData(){
    // pasar la data a firestore
    const promise = new Promise((resolve) => {
      this.pedidosMesero = this.storageService.get('ordersList');
      resolve(
        this.productService.createOrder({
          clientName: this.clientName.value, 
          tableNumber: this.selectTable, 
          date: this.date,
          inputHour: this.hour, 
          orderWaiter: this.pedidosMesero,
          shipped: true,
          prepared: false,
          served: false,
          total: this.orderTotal,
          orderCanceled: false,
        })
      );
       this.Toast.fire({
         icon: 'success',
         title: 'Pedido enviado.'
       })
    });

    promise.then((res) => {
       this.storageService.clear();
       this.router.navigate(['/carta']);
    });
  }
  // estos datos los envía el cocinero
  markAsPrepared(order: any | object){
    if(order.prepared){
      this.productService.updateWaiterOrder(order.docId, {...order,outputHour: this.hour});
      this.Toast.fire({
        icon: 'success',
        title: 'Orden actualizada.'
      })
      this.router.navigate(['/totalPedidos']);
    } else {
      this.Toast.fire({
        icon: 'error',
        title: '¡La orden no está completa!'
      })
    }
  }
}