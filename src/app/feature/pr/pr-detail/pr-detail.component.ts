import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';

@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})
export class PrDetailComponent implements OnInit {

  title: string = 'PurchaseRequest Detail';
  Id: string;
  resp: any;

  pr: PurchaseRequest;	

  remove(){
    console.log("this.pr.Id:", this.pr.Id);
  	this.PrSvc.remove(this.pr.Id)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("PurchaseRequest-Detail-Remove:", this.resp);
  			this.router.navigate(['/pr/list']);
  		});
  }

  constructor(private PrSvc: PrService,
  	          private router: Router,
  	          private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.Id = parms ['id']); 
    this.PrSvc.get(this.Id)
      .subscribe(pr => {
        this.pr = pr.length > 0 ? pr[0] : null;
        console.log(this.pr);
      });
  }

}
