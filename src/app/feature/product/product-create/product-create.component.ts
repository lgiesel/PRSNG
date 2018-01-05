import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  title: string = 'Product Create';
  resp: any;
  product: Product = new Product ();	  

  vendors: Vendor[];

  create(){
    console.log(this.product);
  	this.ProductSvc.create(this.product)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("Product-Create:", this.resp);
  			this.router.navigate(['/product/list']);
  		});
  }

  constructor(private ProductSvc: ProductService,
  			  private VendorSvc: VendorService,      	     
	          private router: Router) { }

  ngOnInit() {

    this.VendorSvc.list()
      .subscribe(vendors => this.vendors = vendors);    
  }

}

