import { Component, OnInit, Input } from '@angular/core';
import Data from '../../../assets/json/menu.json'

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {
  carta: any = Data.carta;
  prueba: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getTitleHamburger() {
    //const titles: any = document.querySelectorAll('.hamb')! as NodeListOf<HTMLDivElement>;
    const btns: any = document.querySelectorAll('.btnOptions')! as NodeListOf<HTMLButtonElement>;
    
    Array.from(btns).forEach((btn: any) => {
      btn.addEventListener('click', () => {
        return console.log(btn.parentNode.firstChild.innerText);
      });
    });

    //console.log('2. button: ', Array.from(btns));
    //this.prueba = Array.from(titles).map((t: any) => t.innerText)[1];
    //console.log('1. title: ', Array.from(title).map((t: any) => t.innerText));
  }
}
