import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrliService } from '@svc/prli.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';

@Component({
  selector: 'app-prli-edit',
  templateUrl: './prli-edit.component.html',
  styleUrls: ['./prli-edit.component.css']
})
export class PrliEditComponent implements OnInit {

  title: string = 'PurchaseRequest LineItem Edit';
  Id: string;  
  resp: any;
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem ();  
  products: Product[];

  change(){
    console.log(this.prli);
  	this.PrliSvc.update(this.prli)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("PurchaseReq LineItem-Update:", this.resp);
  			this.router.navigate(['/prli/list/'+this.prli.PurchaseRequestID]);
  		});
  }  

  constructor(private PrliSvc: PrliService,
              private ProductSvc: ProductService,    
              // private SysSvc: SystemService
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
   // this.route.params.subscribe(parms => this.Id = parms ['id']);    
   // this.ProductSvc.list()
   //    .subscribe(products => this.products = products);  
    this.route.params.subscribe(parms => this.Id = parms ['id']);
    this.PrliSvc.get(this.Id)
      .subscribe(prlis => {
        this.prli = prlis.length > 0 ? prlis[0] : null;
        this.ProductSvc.list()
          .subscribe(products => this.products = products);
        console.log(this.prli);
      });     
  }

}
