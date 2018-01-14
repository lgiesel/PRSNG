import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { StatusService } from '@svc/status.service';
import { Status } from '@model/status';

@Component({
  selector: 'app-pr-reviewdetail',
  templateUrl: './pr-reviewdetail.component.html',
  styleUrls: ['./pr-reviewdetail.component.css']
})
export class PrReviewdetailComponent implements OnInit {

  title: string = 'Purchase Request Review Details';
  Id: string;
  resp: any;
  // selectedSortKey: string = 'Id';
  // sortDesc: string = 'asc';
  // sortKeys: string[] = PurchaseRequestLineItem.sortableKeys;
  pr: PurchaseRequest;
  // prlis: PurchaseRequestLineItem[] = [];
  // products: Product[];
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

  constructor(private PrSvc: PrService,
			  private UserSvc: UserService,   	
              private StatusSvc: StatusService,
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
  	});

  }
}
