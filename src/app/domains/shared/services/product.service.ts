import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);//Nos permite conectarnos y objetener un request y obtener y procesar esa información.

  constructor(){}

  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
