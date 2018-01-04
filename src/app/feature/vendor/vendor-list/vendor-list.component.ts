import { Component, OnInit } from '@angular/core';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  title: string = 'Vendor List';
  selectedSortKey: string = 'Id'; //default sort - can chg to another value
  sortDesc: string = 'asc';
  sortKeys: string[] = Vendor.sortableKeys;
  vendors: Vendor[];

  constructor(private VendorSvc: VendorService) { }

  ngOnInit() {
  	this.VendorSvc.list()
  		.subscribe(vendors => {
  			this.vendors = vendors;
  	console.log(vendors);
  });
}
