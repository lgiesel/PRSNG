import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Status } from '@model/status'

const url = 'http://localhost:8080/Statuses/';

@Injectable()
export class StatusService {

  list(): Observable<Status[]> {
  	return this.http.get(url+"List") as Observable<Status[]>;
  } 

  get(id): Observable<Status[]>{
  	return this.http.get(url+"Get?id="+id) as Observable<Status[]>;
  }

  create(product: Status): Observable<any> {
  	return this.http.post(url+"Add", product) as Observable<any>;
  } 

  update(product: Status): Observable<any> {
  	return this.http.post(url+"Update", product) as Observable<any>;
  } 

  remove(id): Observable<any> {
  	return this.http.get(url+"Delete?id="+id) as Observable<any>;
  } 

  constructor(private http: HttpClient) { } 

}
