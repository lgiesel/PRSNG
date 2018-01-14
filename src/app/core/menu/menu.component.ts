import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hideReviewMenuItem: boolean = !this.SysSvc.data.user.instance.IsReviewer;

  menuitems: Menu[] = [
    new Menu ('HOME', '/home', 'Home menu'),
    new Menu ('USER', '/user/list', 'User menu'),
    new Menu ('VENDOR', '/vendor/list', 'Vendor menu'),
    new Menu ('PRODUCT', '/product/list', 'Product menu'),
    new Menu ('PURCHASEREQUEST', '/pr/list', 'Purchase Request menu'),
    new Menu ('REVIEW', '/pr/reviewlist', 'Review Purchase Requests menu', this.hideReviewMenuItem),
    new Menu ('ABOUT', '/about', 'About menu'),
    new Menu ('LOGIN', '/user/login', 'Login menu')
  ];

  constructor(private SysSvc: SystemService) {}

  ngOnInit() {
  }

}
