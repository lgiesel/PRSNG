import { Component, OnInit } from '@angular/core';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { StatusService } from '@svc/status.service';
import { Status } from '@model/status';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {

  title: string = 'Purchase Request List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequest.sortableKeys;
  purchreqs: PurchaseRequest[];
  users: User[];
  statuses: Status[];
 
  compareFn (v1:number, v2: number): boolean {
    return v1 == v2;
  }

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
              private SysSvc: SystemService) { }

  ngOnInit() {
  	this.PRSvc.list()
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
    console.log ('Admin1=' + this.SysSvc.data.user.instance.IsAdmin);  
  }

}
