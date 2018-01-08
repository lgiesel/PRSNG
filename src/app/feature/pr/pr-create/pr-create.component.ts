import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PrCreateComponent implements OnInit {

  title: string = 'PurchaseRequest Create';
  resp: any;
  pr: PurchaseRequest = new PurchaseRequest ();
  user: User = new User();
  // users: User[];

  create(){
    console.log(this.pr);
  	this.PRSvc.create(this.pr)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("PurchaseRequest-Create:", this.resp);
  			this.router.navigate(['/pr/list']);
  	});
  }  

  constructor(private PRSvc: PrService,
              private UserSvc: UserService,
              private SysSvc: SystemService,
	            private router: Router) { }

  ngOnInit() {
   // this.UserSvc.list()
   //    .subscribe(users => this.user.Id = user[0]);
   //    if(this.SysSvc.data.user.loggedIn) {
   //      this.pr.UserID = this.SysSvc.data.user.instance;
   //    } else {
   //      this.router.navigate(['/user/login']);
   //      console.error("User not logged in.");
      }

    
   // this.UserSvc.list()
   //    .subscribe(users => this.user.Id = user[0]);
   //    if(this.SysSvc.data.user.loggedIn) {
   //      this.pr.UserID = this.SysSvc.data.user.instance;
   //    } else {
   //      this.router.navigate(['/user/login']);
   //      console.error("User not logged in.");
   //    }
  // }  

}
