import { Component, OnInit } from '@angular/core';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = 'Product List';
  selectedSortKey: string = 'Id'; //default sort - can chg to another value
  sortDesc: string = 'asc';
  sortKeys: string[] = Product.sortableKeys;
  products: Product[];

  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
  	this.ProductSvc.list()
  		.subscribe(products => {
  			this.products = products;
  	console.log(products);
  });
}