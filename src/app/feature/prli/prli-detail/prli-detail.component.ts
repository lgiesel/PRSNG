import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrliService } from '@svc/prli.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';

@Component({
  selector: 'app-prli-detail',
  templateUrl: './prli-detail.component.html',
  styleUrls: ['./prli-detail.component.css']
})
export class PrliDetailComponent implements OnInit {

  title: string = 'PurchaseRequest Lineitem Detail';
  Id: string;
  resp: any;

  prli: PurchaseRequestLineItem;	
  products: Product;

  remove(){
    console.log("this.pr.Id:", this.prli.Id);
  	this.PRLISvc.remove(this.prli.Id)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("PurchaseRequestLI-Detail-Remove:", this.resp);
  			this.router.navigate(['/prli/list/this.prli.PurchaseRequestID']);
  		});
  }

  addProductName(prli: PurchaseRequestLineItem) {
    this.ProductSvc.get(prli.ProductID)
     .subscribe(Product => {
       prli.ProductName = Product[0].Name;
       prli.ProductPrice = Product[0].Price;
       prli.LineItemTotal = Product[0].Price * this.prli.Quantity;
       console.log("addProdN: " + prli);
     });
   } 

  constructor(private PRLISvc: PrliService,
              private ProductSvc: ProductService,
  	          private router: Router,
  	          private route: ActivatedRoute) { }

  ngOnInit() {

  	this.route.params.subscribe(parms => this.Id = parms ['id']); 
    this.PRLISvc.get(this.Id)
      .subscribe(prli => {
        this.prli = prli.length > 0 ? prli[0] : null;
        this.addProductName(this.prli);   
        console.log(this.prli);
      });

  }

}
