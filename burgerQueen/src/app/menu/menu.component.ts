import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import Data from '../../assets/json/menu.json'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any = Data.menu;
  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
    {
      title: 'Hamburguesa simple',
      price: 10,
      img: 'simple.jpg',
      check: false,
    },
    {
      title: 'Hamburguesa doble',
      price: 15,
      img: 'doble.jpg',
      check: false,
    },
    {
      title: 'Sandwich de jamón y queso',
      price: 7,
      img: 'sandwich1.jpg',
      check: false,
    }
  ]}
}
