//SWITCH TO PR SERVICE BUT KEEP MODEL AS PURCHASE REQUEST
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequest } from '@model/purchaserequest'

const url = 'http://localhost:8080/PurchaseRequests/';

@Injectable()
export class PrService {

  list(): Observable<PurchaseRequest[]> {
  	return this.http.get(url+"List") as Observable<PurchaseRequest[]>;
  } 	

  constructor(private http: HttpClient) { }

}
