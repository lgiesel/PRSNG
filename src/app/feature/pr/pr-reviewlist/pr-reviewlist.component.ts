import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { StatusService } from '@svc/status.service';
import { Status } from '@model/status';
import { SystemService } from '@svc/system.service';
import { GlobalConstants } from '@model/global';

@Component({
  selector: 'app-pr-reviewlist',
  templateUrl: './pr-reviewlist.component.html',
  styleUrls: ['./pr-reviewlist.component.css']
})
export class PrReviewlistComponent implements OnInit {
  private reviewStatusID = +GlobalConstants.REVIEW_STATUS_ID; //Convert string to nbr w + sign

  title: string = 'Purchase Request Review List';
  selectedSortKey: string = 'Id'; //SET DEFAULTS IN ALL PLACES W SORT
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
           });
     }
  }

  getReviewPRsOnly (prs: PurchaseRequest[]): PurchaseRequest[] {
    let reviewPRs: PurchaseRequest[] = [];
    for (let pr of prs) {
      if (pr.StatusID == this.reviewStatusID){
        reviewPRs.push(pr);
        console.log('Review PR='+pr);
      }
    }
    return reviewPRs;
  }  

  constructor(private PRSvc: PrService,
              private UserSvc: UserService,
              private StatusSvc: StatusService,
              private SysSvc: SystemService,
              private router: Router,
  	          private route: ActivatedRoute) {  
  }

  ngOnInit() {

    this.PRSvc.reviewlist(this.SysSvc.data.user.instance.Id)
      .subscribe(purchreqs => {
        this.purchreqs = this.getReviewPRsOnly(purchreqs);
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
