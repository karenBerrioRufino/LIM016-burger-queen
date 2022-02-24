import { Component, OnInit, /*EventEmitter, Output*/} from '@angular/core';
import Data from '../../../assets/json/menu.json';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})

export class CartaComponent implements OnInit {
  carta: any = Data.carta;

  // @Output()
  // itemCartaData: EventEmitter<object> = new EventEmitter<object>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getHamburgerData(dataHamburguesa: any) {
    // this.itemCartaData.emit(dataHamburguesa);
    console.log(dataHamburguesa);
  }
}
