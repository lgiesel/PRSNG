import { Component, OnInit } from '@angular/core';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = 'Product List';
  selectedSortKey: string = 'Id'; //default sort - can chg to another value
  sortDesc: string = 'asc';
  sortKeys: string[] = Product.sortableKeys;
  products: Product[];
  vendor: Vendor[];

  constructor(private ProductSvc: ProductService,
              private VendorSvc : VendorService) { }

  addVendorName(prods: Product[]) {
     for(let prod of prods) {
        this.VendorSvc.get(prod.VendorID)
         .subscribe(vendor => {
             prod.VendorName = vendor[0].Name;
             console.log(prod);
           });
     }
  }
        // console.log("Getting Vendor Name for VendorId: " + prod.VendorId);
        //console.log("VendorName Retreived is " + prod.VendorName);

  ngOnInit() {
  	this.ProductSvc.list()
  		.subscribe(products => {
  			this.products = products;
        this.addVendorName(this.products);        
  	    console.log(products);
    });
  }
}