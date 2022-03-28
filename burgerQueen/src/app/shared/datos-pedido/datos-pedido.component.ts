import { AfterViewInit, Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
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

  preparationTime: string = '';

  clientName: any = new FormControl('');

  numberOfTable: string = "";
  selectTable?: string = "";

  orderList: any[] = [];
  completeOrderToShow: object | any = {};
  completeOrderToEdit: object | any = {};

  total$: BehaviorSubject<number>;
  orderTotal: number = 0;

  totalToEdit$: BehaviorSubject<number>;
  orderTotalToEdit: number = 0;

  isEditable$: boolean = false;
  editedOrder$: any | object = {};

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
    // obteniendo costo total del pedido del mesero (enviado desde PedidosMesero)
    this.total$ = this.productService.getTotalOfOrder();
    this.total$.subscribe(value => {
      this.orderTotal = value;
    });

    this.totalToEdit$ = this.productService.getTotalOfOrderToEdit();
    this.totalToEdit$.subscribe(value => {
      this.orderTotalToEdit = value;
    });
  }

  ngOnInit(): void {
    // rol del usuario actual
    try{
      this.rolUser = this.storageService.getCurrentUser('currentUser').rol;
    } catch (err){
      console.log(err)
    }
    
    // obteniendo datos del pedido a editar por el mesero
    this.isEditable$ = this.productService.isEditable.getValue();
    console.log(this.isEditable$);
    this.completeOrderToEdit = this.productService.showOrder.getValue();

    // obteniendo los datos completos de la orden(enviados desde TotalPedidos) que el cocinero quiere ver
    this.completeOrderToShow = this.productService.waiterOrder.getValue();

    // reloj para mesero
    this.datos$ = this.clock.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });

    // mensaje del contador de tiempo del cocinero
    if(!this.completeOrderToShow.preparationTime){
      this.preparationTime = 'Contando...';
    }

    // definiendo mensaje por default(crear orden) o número de mesa(editar orden) para mesero
    if(this.rolUser !== "Cocinero" && !this.isEditable$){
      this.numberOfTable = "Escoge una mesa";
    } else if (this.rolUser !== "Cocinero" && this.isEditable$) {
      this.numberOfTable = this.completeOrderToEdit.tableNumber;
    }

    // definiendo mensaje por default(crear orden) o nombre del cliente(editar orden) para mesero
    if(this.rolUser !== "Cocinero" && !this.isEditable$){
      this.clientName.value = "";
    } else if (this.rolUser !== "Cocinero" && this.isEditable$) {
      this.clientName.value = this.completeOrderToEdit.clientName;
    }
  }

  // obteniendo el array pedidos hechos en localStorage('orderList') para enviarlos a Firebase
  ngAfterViewInit(): void {
    this.orderList = this.storageService.get('orderList');
  }

  getNumberOfTable() {
    this.selectTable = this.numberOfTable;
    return this.selectTable;
  }

  // Envío de datos de la orden y lista de pedidos del mesero o Firestore
  sendClientData() {
    const promise = new Promise((resolve) => {
      this.orderList = this.storageService.get('orderList');
      resolve(
        this.productService.createOrder({
          clientName: this.clientName.value,
          tableNumber: this.selectTable,
          date: this.date,
          inputHour: this.hour,
          orderWaiter: this.orderList,
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

  updateEditedOrder(){
    this.editedOrder$ = this.productService.editedOrder.getValue();
    this.editedOrder$.clientName = this.clientName.value;
    let editedTableNumber;
    if(this.selectTable === ""){
      editedTableNumber = this.completeOrderToEdit.tableNumber;
    } else {
      editedTableNumber = this.selectTable;
    }
    this.editedOrder$.tableNumber = editedTableNumber;
    this.editedOrder$.total = this.orderTotalToEdit;
    this.productService.updateWaiterOrder(this.editedOrder$.docId, {...this.editedOrder$, editDate: this.date, editInputHour: this.hour})
    this.productService.isEditable.next(false);
  }

  // actualizaciones de estado del pedido que hace el cocinero
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

  // contador de tiempo del cocinero
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

    // resta
    finalTime.setHours(finalTime.getHours() - startTime.getHours(), finalTime.getMinutes() - startTime.getMinutes(), finalTime.getSeconds() - startTime.getSeconds());

    // resultado
    this.preparationTime =
      (finalTime.getHours() ? (finalTime.getHours() + (finalTime.getHours() > 1 ? " horas, " : " hora, ")) : "") +
      (finalTime.getMinutes() ? (finalTime.getMinutes() + (finalTime.getMinutes() > 1 ? " minutos" : " minuto")) : "") +
      (finalTime.getSeconds() ? (finalTime.getHours() || finalTime.getMinutes() ? " y " : "") + finalTime.getSeconds() + (finalTime.getSeconds() > 1 ? " segundos" : " segundo") : "");

    this.productService.updateWaiterOrder(order.docId, { ...order, preparationTime: this.preparationTime });
  }
}