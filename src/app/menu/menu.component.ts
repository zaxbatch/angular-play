import { Component, OnInit } from '@angular/core';
import { MENU } from '../menu-items';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	title = 'Angular Play';
	menus = MENU;
  constructor() { }

  ngOnInit() {
  }

}
