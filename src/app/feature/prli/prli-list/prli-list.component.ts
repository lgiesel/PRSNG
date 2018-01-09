import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrliService } from '@svc/prli.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchaserequest';

@Component({
  selector: 'app-prli-list',
  templateUrl: './prli-list.component.html',
  styleUrls: ['./prli-list.component.css']
})
export class PrliListComponent implements OnInit {

  title: string = 'Purchase Request Line Item List';
  Id: string;
  resp: any;
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequestLineItem.sortableKeys;
  pr: PurchaseRequest;
  prlis: PurchaseRequestLineItem[] = [];

  constructor(private PRLISvc: PrliService,
              private PrSvc: PrService,
              private router: Router,
              private route: ActivatedRoute) { }

  selectedPRLIs (prlis: PurchaseRequestLineItem[]) {
    let tempArray: PurchaseRequestLineItem[]=[];
    for (let prli of prlis){
      if (prli.PurchaseRequestID == this.pr.Id){
        tempArray.push(prli);
      }
    }
    return tempArray;
  }

  ngOnInit() {
    this.route.params.subscribe(parms => this.Id = parms ['id']); 
    this.PrSvc.get(this.Id)
      .subscribe(prs => {
        this.pr = prs.length > 0 ? prs[0] : null;
        console.log(this.pr);
        this.PRLISvc.list()
          .subscribe(prlis => {
             this.prlis = this.selectedPRLIs(prlis);
        })
    });
  }
 }
