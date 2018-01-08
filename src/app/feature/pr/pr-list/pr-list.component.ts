import { Component, OnInit } from '@angular/core';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';

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

  constructor(private PRSvc: PrService,
              private UserSvc: UserService) { }

  ngOnInit() {
  	this.PRSvc.list()
  		.subscribe(purchreqs => {
  			this.purchreqs = purchreqs;
        this.UserSvc.list()
          .subscribe(users => this.users = users);
        this.addUserName(this.purchreqs);        
   	    console.log(purchreqs);
    });  	
  }

}
