import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartService } from '../../../shared/services/cart.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 12000,
        image: 'https://picsum.photos/250/250?r=23',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 12000,
        image: 'https://picsum.photos/250/250?r=24',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 12000,
        image: 'https://picsum.photos/250/250?r=25',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 12000,
        image: 'https://picsum.photos/250/250?r=23',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 12000,
        image: 'https://picsum.photos/250/250?r=24',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 12000,
        image: 'https://picsum.photos/250/250?r=25',
        creationAt: new Date().toString()
      },

    ];

    this.products.set(initProducts)
  }

  addToCart(product: Product) {
    this.cartService.addToCard(product);
  }

}
