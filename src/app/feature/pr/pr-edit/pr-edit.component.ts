import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';

@Component({
  selector: 'app-pr-edit',
  templateUrl: './pr-edit.component.html',
  styleUrls: ['./pr-edit.component.css']
})
export class PrEditComponent implements OnInit {

  title: string = 'Purchase Request Edit';
  Id: string;
  resp: any;
  pr: PurchaseRequest;	  

  change(){
    console.log(this.pr);
  	this.PRSvc.update(this.pr)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("PurchaseReq-Update:", this.resp);
  			this.router.navigate(['/pr/list']);
  		});
  }

  constructor(private PRSvc: PrService,
  	          private router: Router,
  	          private route: ActivatedRoute) { }

  ngOnInit() {

  	this.route.params.subscribe(parms => this.Id = parms ['id']); //Must match Id in router
    this.PRSvc.get(this.Id)
      .subscribe(prs => {
        this.pr = prs.length > 0 ? prs[0] : null;
        // this.VendorSvc.list()
        //   .subscribe(vendors => this.vendors = vendors);
        console.log(this.pr);
      });

  }

}
