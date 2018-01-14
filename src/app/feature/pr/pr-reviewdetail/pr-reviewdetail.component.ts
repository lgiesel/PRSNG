import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { StatusService } from '@svc/status.service';
import { Status } from '@model/status';
import { PrliService } from '@svc/prli.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';

@Component({
  selector: 'app-pr-reviewdetail',
  templateUrl: './pr-reviewdetail.component.html',
  styleUrls: ['./pr-reviewdetail.component.css']
})
export class PrReviewdetailComponent implements OnInit {

  title: string = 'Purchase Request Review Details';
  Id: string;
  resp: any;
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequestLineItem.sortableKeys;
  pr: PurchaseRequest;
  prlis: PurchaseRequestLineItem[] = [];
  products: Product[];
  users: User[];
  status: Status[];

  addUserName(pr: PurchaseRequest) {
    this.UserSvc.get(pr.UserID)
      .subscribe(User => {
        pr.UserName = User[0].FirstName + ' ' + User[0].LastName;
        console.log("addUserN: " + pr);
     });        
  }

  addStatusDesc(pr: PurchaseRequest) {
    this.StatusSvc.get(pr.StatusID)
     .subscribe(Status => {
       pr.StatusDesc = Status[0].Description;
       console.log("addStatusDesc: " + pr);
     });
   }  

  selectedPRLIs (prlis: PurchaseRequestLineItem[]) {
    let tempArray: PurchaseRequestLineItem[]=[];
    for (let prli of prlis){
      if (prli.PurchaseRequestID == this.pr.Id){
        tempArray.push(prli);
      }
    }
    return tempArray;
  }

  addProductName(prlis: PurchaseRequestLineItem[]) {
     for(let prli of prlis) {
        this.ProductSvc.get(prli.ProductID)
         .subscribe(Product => {
            prli.ProductName = Product[0].Name;
            prli.ProductPrice = Product[0].Price;
            prli.LineItemTotal = Product[0].Price * prli.Quantity;
            console.log("addProdN: " + prli);
         });
     }
  }  

  constructor(private PrSvc: PrService,
			  private UserSvc: UserService,   	
              private StatusSvc: StatusService,
              private PRLISvc: PrliService,
              private ProductSvc: ProductService,  
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.Id = parms ['id']); 
    this.PrSvc.get(this.Id)
      .subscribe(prs => {
        this.pr = prs.length > 0 ? prs[0] : null;
        this.UserSvc.list()
	      .subscribe(users => {
	        this.users = users;
	        this.addUserName(this.pr);
    	});
        this.addStatusDesc(this.pr);                    
        this.PRLISvc.list()
          .subscribe(prlis => {
             this.prlis = this.selectedPRLIs(prlis);
             this.addProductName(this.prlis);   
        }); 
  	});

  }
}
