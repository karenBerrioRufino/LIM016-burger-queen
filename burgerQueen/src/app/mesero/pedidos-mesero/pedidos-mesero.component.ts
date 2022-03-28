import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos-mesero',
  templateUrl: './pedidos-mesero.component.html',
  styleUrls: ['./pedidos-mesero.component.scss']
})

export class PedidosMeseroComponent implements OnInit {

  total$: BehaviorSubject<number>;
  orderList: any[] = [];

  constructor(
    public productService: ProductService,
    private storageService: StorageService
  ) {
    this.total$ = this.productService.getTotalOfOrder();
  }

  ngOnInit(): void {
    this.productService.isEditable.next(false);

    this.orderList = this.storageService.get('orderList');
    this.calculateAndSendTotal();
  }

  orderDelete(pedido: object) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro que desea eliminarlo?',
      text: " ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            'Este pedido a sido eliminado',
            'success'
          )
          const indexOfpedido = this.orderList.indexOf(pedido);
          this.orderList.splice(indexOfpedido, 1);
          this.storageService.set('orderList', this.orderList);
          this.calculateAndSendTotal();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se a eliminado el pedido',
            'error'
          )
        }
      })
  }

  upQuantity(pedidoData: any) {
    const quantityInput = document.querySelector(`input[id='${pedidoData.id}']`) as HTMLInputElement;

    pedidoData.quantity++
    quantityInput.setAttribute('value', pedidoData.quantity.toString());
    pedidoData.subtotal = pedidoData.quantity * pedidoData.price;
    this.storageService.set('orderList', this.orderList);

    this.calculateAndSendTotal();
  }

  downQuantity(pedidoData: any) {
    const quantityInput = document.querySelector(`input[id='${pedidoData.id}']`) as HTMLInputElement;

    if (pedidoData.quantity == 1) {
      pedidoData.quantity;
    } else {
      pedidoData.quantity--;
      quantityInput.setAttribute('value', pedidoData.quantity.toString());
      pedidoData.subtotal = pedidoData.quantity * pedidoData.price;
      this.storageService.set('orderList', this.orderList);
      this.calculateAndSendTotal();
    }
  }

  calculateAndSendTotal() {
    let total = 0;
    if (this.orderList !== null) {
      this.orderList.forEach(pedido => total += pedido.subtotal);
      this.total$.next(total);
    }
    return total;
  }
}
