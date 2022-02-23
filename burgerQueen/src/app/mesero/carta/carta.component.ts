import { Component, OnInit, /*HostListener, ViewChild, ElementRef*/ } from '@angular/core';
import Data from '../../../assets/json/menu.json';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {
  carta: any = Data.carta;
/*   @ViewChild('name') name!: ElementRef<HTMLElement>;

  @HostListener('document:click', ['$event.target'])
  clicked($event: HTMLElement): void{
    console.log($event.classList.toString())
  } */

  constructor() {
  }

  ngOnInit(): void {
  }

  getTitleHamburger(itemCarta: any) {
    console.log(itemCarta);
    //const btns: any = document.querySelectorAll('.btnOptions')! as NodeListOf<HTMLButtonElement>;
    //Array.from(btns).map((btn: any) => {
        //return console.log(btn.parentNode.firstChild.innerText);
    //});
  }
}
