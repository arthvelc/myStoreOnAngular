import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  url: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}