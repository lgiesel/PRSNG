import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title: string = 'Product Detail';
  Id: string;
  resp: any;

  product: Product;	

  remove(){
    console.log("this.product.Id:", this.product.Id);
  	this.ProductSvc.remove(this.product.Id)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("Product-Detail-Remove:", this.resp);
  			this.router.navigate(['/product/list']);
  		});
  }

  constructor(private ProductSvc: ProductService,
  	          private router: Router,
  	          private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.Id = parms ['id']); //Must match Id in router
    this.ProductSvc.get(this.Id)
      // .subscribe(products => this.product = products.length > 0 ? products[0] : null);
      .subscribe(product => {
        this.product = product.length > 0 ? product[0] : null;
        console.log(this.product);
      });
  }

}
