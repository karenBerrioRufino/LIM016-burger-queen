import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClockService, valorReloj } from 'src/app/services/clock.service';
import Swal from 'sweetalert2';

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

  preparationTime: string = '';

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

    this.datos$ = this.clock.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });

    if(!this.order.preparationTime){
      this.preparationTime = 'Contando...';
    }
  }

  ngAfterViewInit(): void {
    this.pedidosMesero = this.storageService.get('ordersList');
    console.log(this.pedidosMesero);
  }

  getNumberOfTable() {
    this.selectTable = this.numberOfTable;
    return this.selectTable;
  }
  // estos datos los envía el mesero
  sendClientData() {
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
          fullyPrepared: false,
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
  markAsPrepared(order: any | object) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Marcar como terminada?',
      text: "¡La orden no está completa!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) { 
        order.fullyPrepared = true;   
        this.productService.updateWaiterOrder(order.docId, order);
        
        this.calculateTime(order);
        this.Toast.fire({
          icon: 'success',
          title: 'Orden completada.'
        })
      }
    })
  }

  calculateTime(order: any | object) {
    let outputTimeValue;

    if (!order.outputHour) {
      this.productService.updateWaiterOrder(order.docId, { ...order, outputHour: this.hour });
      outputTimeValue = this.hour;
    } else {
      outputTimeValue = order.outputHour;
    }

    const inputHour: any[] = (order.inputHour).split(":")
    const outputHour: any[] = (outputTimeValue).split(":"),
      startTime = new Date(),
      finalTime = new Date();

    startTime.setHours(inputHour[0], inputHour[1], inputHour[2]);
    finalTime.setHours(outputHour[0], outputHour[1], outputHour[2]);

    //Aquí hago la resta
    finalTime.setHours(finalTime.getHours() - startTime.getHours(), finalTime.getMinutes() - startTime.getMinutes(), finalTime.getSeconds() - startTime.getSeconds());

    //Imprimo el resultado
    this.preparationTime =
      (finalTime.getHours() ? (finalTime.getHours() + (finalTime.getHours() > 1 ? " horas, " : " hora, ")) : "") +
      (finalTime.getMinutes() ? (finalTime.getMinutes() + (finalTime.getMinutes() > 1 ? " minutos" : " minuto")) : "") +
      (finalTime.getSeconds() ? (finalTime.getHours() || finalTime.getMinutes() ? " y " : "") + finalTime.getSeconds() + (finalTime.getSeconds() > 1 ? " segundos" : " segundo") : "");

    this.productService.updateWaiterOrder(order.docId, { ...order, preparationTime: this.preparationTime });
  }
}