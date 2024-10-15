import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  cartTotal = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  addProductToCart(product:Product):void{
    this.cart.update(cart => [...cart, product]);
    console.log('Actualización del carrito de compras: ', this.cart());
  }
}
