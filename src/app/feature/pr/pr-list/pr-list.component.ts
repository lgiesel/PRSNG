import { Component, OnInit } from '@angular/core';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {

  title: string = 'Purchase Request List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequest.sortableKeys;
  purchreqs: PurchaseRequest[];
  // products: Product[];
  // user: User[];

  constructor(private PRSvc: PrService) { }

  ngOnInit() {
  	this.PRSvc.list()
  		.subscribe(purchreqs => {
  			this.purchreqs = purchreqs;
  	    console.log(purchreqs);
    });  	
  }

}
