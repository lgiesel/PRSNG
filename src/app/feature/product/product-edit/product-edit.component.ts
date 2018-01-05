import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title: string = 'Product Edit';
  Id: string;
  resp: any;
  product: Product;	  
  vendors: Vendor[];

  compareFn (v1:number, v2: number): boolean {
    return v1 == v2;
}

  change(){
    console.log(this.product);
  	this.ProductSvc.update(this.product)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("Product-Change:", this.resp);
  			this.router.navigate(['/product/list']);
  		});
  }
  constructor(private ProductSvc: ProductService,
              private VendorSvc: VendorService,    
  	          private router: Router,
  	          private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.Id = parms ['id']); //Must match Id in router
    this.ProductSvc.get(this.Id)
      .subscribe(products => {
        this.product = products.length > 0 ? products[0] : null;
        this.VendorSvc.list()
          .subscribe(vendors => this.vendors = vendors);
        console.log(this.product);
      });
  }

}

