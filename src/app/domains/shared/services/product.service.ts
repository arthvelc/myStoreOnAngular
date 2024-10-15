import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'https://api.escuelajs.co/api/v1/products';
  
  private http = inject(HttpClient);

  constructor() { }

  getAllProducts(){
    const urlAPI = this.url;
    return this.http.get<Product[]>(urlAPI);
  }
}
