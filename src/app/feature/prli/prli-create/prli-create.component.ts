import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrliService } from '@svc/prli.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {
  
  title: string = 'PurchaseRequest LineItem Create';
  Id: string;  
  resp: any;
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem ();  
  products: Product[];

  create(){
    console.log(this.prli);
    this.prli.PurchaseRequestID = +this.Id;        
  	this.PrliSvc.create(this.prli)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("PurchaseRequestLI-Create:", this.resp);
  			// this.router.navigate(['/prli/list/this.prli.PurchaseRequestID']);
        this.router.navigate(['/prli/list/'+this.Id]); //CHG THIS TO PRLILIST-PRID
  	});
  }  

  constructor(private PrliSvc: PrliService,
              private ProductSvc: ProductService,    
              // private SysSvc: SystemService
              private router: Router,
              private route: ActivatedRoute) {
    this.prli.Quantity = 1;
  }

  ngOnInit() {
   this.route.params.subscribe(parms => this.Id = parms ['id']);    
   this.ProductSvc.list()
      .subscribe(products => this.products = products);    
  }

}
