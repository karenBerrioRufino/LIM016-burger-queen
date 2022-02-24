import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta-opciones',
  templateUrl: './carta-opciones.component.html',
  styleUrls: ['./carta-opciones.component.scss']
})

export class CartaOpcionesComponent implements OnInit {
  @Input() hamburgerData: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
