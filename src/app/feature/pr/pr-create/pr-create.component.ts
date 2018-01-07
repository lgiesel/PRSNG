import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PrCreateComponent implements OnInit {

  title: string = 'PurchaseRequest Create';
  resp: any;
  pr: PurchaseRequest = new PurchaseRequest ();

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
	          private router: Router) { }

  ngOnInit() {
  }

}
