import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem'

const url = 'http://localhost:8080/PurchaseRequestLineItems/';

@Injectable()
export class PrliService {

  list(): Observable<PurchaseRequestLineItem[]> {
  	return this.http.get(url+"List") as Observable<PurchaseRequestLineItem[]>;
  } 	

  get(id): Observable<PurchaseRequestLineItem[]>{
  	return this.http.get(url+"Get?id="+id) as Observable<PurchaseRequestLineItem[]>;
  }

  create(pr: PurchaseRequestLineItem): Observable<any> {
  	return this.http.post(url+"Add", pr) as Observable<any>;
  } 

  update(pr: PurchaseRequestLineItem): Observable<any> {
  	return this.http.post(url+"Update", pr) as Observable<any>;
  } 

  remove(id): Observable<any> {
  	return this.http.get(url+"Delete?id="+id) as Observable<any>;
  }  


  constructor(private http: HttpClient) { }

}
