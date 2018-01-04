import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '@model/product'

const url = 'http://localhost:8080/Products/';

@Injectable()
export class ProductService {

list(): Observable<Product[]> {
  	return this.http.get(url+"List") as Observable<Product[]>;
  } 

  get(id): Observable<Product[]>{
  	return this.http.get(url+"Get?id="+id) as Observable<Product[]>;
  }

  create(product: Product): Observable<any> {
  	return this.http.post(url+"Add", product) as Observable<any>;
  } 

  update(product: Product): Observable<any> {
  	return this.http.post(url+"Update", product) as Observable<any>;
  } 

  remove(id): Observable<any> {
  	return this.http.get(url+"Remove?id="+id) as Observable<any>;
  } 

  constructor(private http: HttpClient) { } 

}
