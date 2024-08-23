
import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductComponent } from '../../products/components/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart= signal<Product[]>([]);
  total = computed(()=>{
    const cart = this.cart();
    return cart.reduce((total, product)=> total+ product.price, 0);
  })

  constructor() {
   }

  addToCard(product: Product){
    this.cart.update(state => [...state, product])
  }

}
