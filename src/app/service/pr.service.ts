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

  get(id): Observable<PurchaseRequest[]>{
  	return this.http.get(url+"Get?id="+id) as Observable<PurchaseRequest[]>;
  }

  create(pr: PurchaseRequest): Observable<any> {
  	return this.http.post(url+"Add", pr) as Observable<any>;
  } 

  update(pr: PurchaseRequest): Observable<any> {
  	return this.http.post(url+"Update", pr) as Observable<any>;
  } 

  remove(id): Observable<any> {
  	return this.http.get(url+"Delete?id="+id) as Observable<any>;
  } 

  submit(pr: PurchaseRequest): Observable<any> {
    return this.http.post(url+"Submit", pr) as Observable<any>;
  } 

  reviewlist(id): Observable<PurchaseRequest[]> {
    return this.http.get(url+"GetNot?id="+id) as Observable<PurchaseRequest[]>;
  } 

  constructor(private http: HttpClient) { }

}
