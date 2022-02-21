import { Component, OnInit } from '@angular/core';
import Data from '../../../assets/json/menu.json'

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {
  carta: any = Data.carta;

  constructor() {
  }

  ngOnInit(): void {
  }

}
