import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuitems: Menu[] = [
    new Menu ('USER', '/user/list', 'User menu'),
    new Menu ('VENDOR', '/vendor/list', 'Vendor menu'),
    new Menu ('PRODUCT', '/product/list', 'Product menu'),
    new Menu ('LOGIN', '/user/login', 'Login menu')
  ];

  constructor() { }

  ngOnInit() {
  }

}
