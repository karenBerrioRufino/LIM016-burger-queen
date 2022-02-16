import { Component, OnInit } from '@angular/core';
import Data from '../../../assets/json/menu.json'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any = Data.menu;
  constructor() { }

  ngOnInit(): void {
  }

}
