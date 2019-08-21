import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryProduct, Product } from './product-models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:49325/api';

  categoryList: CategoryProduct[];
  productList: Product[];

  getCategories() {
    this.http.get(this.BaseURI + '/Home/GetCategories')
      .toPromise().then(res => this.categoryList = res as CategoryProduct[]);
  }

  pushProduct(prName: string, catId: number) {
    var body = {
      ProductName: prName,
      CategoryProductId: catId
    };
    return this.http.post(this.BaseURI + '/Home/AddProduct', body);
  }

  getProducts() {
    this.http.get(this.BaseURI + '/Home/GetProducts')
      .toPromise().then(res => this.productList = res as Product[]);
  }

}
