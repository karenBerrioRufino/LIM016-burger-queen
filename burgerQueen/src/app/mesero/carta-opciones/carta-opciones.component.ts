import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta-opciones',
  templateUrl: './carta-opciones.component.html',
  styleUrls: ['./carta-opciones.component.scss']
})
export class CartaOpcionesComponent implements OnInit {
  // @Input() 

  nombre_producto: string = 'Hamburguesa simple';

  constructor() { }

  ngOnInit(): void {
  }

}
