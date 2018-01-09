import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrliService } from '@svc/prli.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';

@Component({
  selector: 'app-prli-detail',
  templateUrl: './prli-detail.component.html',
  styleUrls: ['./prli-detail.component.css']
})
export class PrliDetailComponent implements OnInit {

  title: string = 'PurchaseRequest Lineitem Detail';
  Id: string;
  resp: any;

  prli: PurchaseRequestLineItem;	

  remove(){
    console.log("this.pr.Id:", this.prli.Id);
  	this.PRLISvc.remove(this.prli.Id)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("PurchaseRequestLI-Detail-Remove:", this.resp);
  			this.router.navigate(['/prli/list']);
  		});
  }

  constructor(private PRLISvc: PrliService,
  	          private router: Router,
  	          private route: ActivatedRoute) { }

  ngOnInit() {

  	this.route.params.subscribe(parms => this.Id = parms ['id']); 
    this.PRLISvc.get(this.Id)
      .subscribe(prli => {
        this.prli = prli.length > 0 ? prli[0] : null;
        console.log(this.prli);
      });

  }

}
