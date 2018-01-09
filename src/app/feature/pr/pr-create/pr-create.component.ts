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

  create(){
    // this.pr.DateNeeded += 'T00:00:00.000Z';
    // this.pr.DateNeeded = new Date(this.pr.DateNeeded).toISOString;
    // COULD DO BELOW TO LET USER ENTER DATE IN D/M/YY FORMAT OR YYYY-MM-DD
    //   let dt = "1/8/2018"
    //   let dbdt = new Date (df).toISOString'
    //  
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

      }

}

