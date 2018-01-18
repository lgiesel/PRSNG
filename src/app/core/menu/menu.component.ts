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
  hideAdminMenuItem: boolean = !this.SysSvc.data.user.instance.IsAdmin;
  displayName: string = this.SysSvc.data.user.instance.FirstName

  menuitems: Menu[] = [
    new Menu ('HOME', '/home', 'Home menu'),
    new Menu ('USER', '/user/list', 'User menu'),
    new Menu ('VENDOR', '/vendor/list', 'Vendor menu', this.hideAdminMenuItem),
    new Menu ('PRODUCT', '/product/list', 'Product menu'),
    new Menu ('REQUEST', '/pr/list', 'Purchase Request menu'),
    new Menu ('REVIEW', '/pr/reviewlist', 'Review Purchase Requests menu', this.hideReviewMenuItem),
    new Menu ('ABOUT', '/about', 'About menu'),
    new Menu ('LOGOUT', '/user/login', 'Login menu')
  ];

  constructor(private SysSvc: SystemService) {}

  ngOnInit() {
  }

}
