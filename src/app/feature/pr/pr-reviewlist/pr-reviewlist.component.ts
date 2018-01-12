import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { StatusService } from '@svc/status.service';
import { Status } from '@model/status';

@Component({
  selector: 'app-pr-reviewlist',
  templateUrl: './pr-reviewlist.component.html',
  styleUrls: ['./pr-reviewlist.component.css']
})
export class PrReviewlistComponent implements OnInit {
  title: string = 'Purchase Request Review List';
  Id: string;
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequest.sortableKeys;
  purchreqs: PurchaseRequest[];
  users: User[];
  statuses: Status[];

  addUserName(prs: PurchaseRequest[]) {
     for(let pr of prs) {
        this.UserSvc.get(pr.UserID)
         .subscribe(User => {
             pr.UserName = User[0].FirstName + ' ' + User[0].LastName;
             console.log(pr);
           });
     }
  }

  addStatusName(prs: PurchaseRequest[]) {
     for(let pr of prs) {
        this.StatusSvc.get(pr.StatusID)
         .subscribe(Status => {
             pr.StatusDesc = Status[0].Description;
             console.log(pr);
           });
     }
  }

  constructor(private PRSvc: PrService,
              private UserSvc: UserService,
              private StatusSvc : StatusService,
              private router: Router,
  	          private route: ActivatedRoute) { }

  ngOnInit() {
  	// this.PRSvc.list()
  	// 	.subscribe(purchreqs => {
	this.route.params.subscribe(parms => this.Id = parms ['id']); 
    this.PRSvc.reviewlist(8)
  		.subscribe(purchreqs => {
  			this.purchreqs = purchreqs;
        this.UserSvc.list()
          .subscribe(users => this.users = users);
        this.addUserName(this.purchreqs);        
        this.StatusSvc.list()
          .subscribe(statuses => this.statuses = statuses);
        this.addStatusName(this.purchreqs);        
   	    console.log(purchreqs);
    });  	
  }

}
