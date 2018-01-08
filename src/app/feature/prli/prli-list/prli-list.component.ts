import { Component, OnInit } from '@angular/core';
import { PrliService } from '@svc/prli.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';

@Component({
  selector: 'app-prli-list',
  templateUrl: './prli-list.component.html',
  styleUrls: ['./prli-list.component.css']
})
export class PrliListComponent implements OnInit {

  title: string = 'Purchase Request Line Item List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequestLineItem.sortableKeys;
  prlis: PurchaseRequestLineItem[];

  constructor(private PRLISvc: PrliService) { }

  ngOnInit() {

  	this.PRLISvc.list()
  		.subscribe(prlis => {
  			this.prlis = prlis;
  	    console.log(prlis);
    });  	
      	
  }

}
