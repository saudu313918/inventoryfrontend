import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  formData: Product = new Product();

  list : Product[];

  readonly baseURL= 'http://localhost:49222'

  postProduct() {
    return this.http.post(this.baseURL,this.formData);
  }

  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Product[]);
  }
}
