import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './list.component.html',
})
export class ListComponent {
  //esta es una lista basada en el modelo de productos para lo que aparecen en la pagina
  products = signal<Product[]>([]);
  //esta es una lista basada en el model de productos para lo que se agrega al carrito de compras
  cart = signal<Product[]>([]);
  
  constructor() {
    const initProducts: Product[]= [
      {
        id: 1,
        name: 'Producto 1',
        price: 100,
        description: 'Este es el producto 1',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Producto 2',
        price: 200,
        description: 'Este es el producto 2',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Producto 3',
        price: 300,
        description: 'Este es el producto 3',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ]

    this.products.update(() => initProducts);
  }

  addToCart(product: Product): void {
    this.cart.update((prevState) => [...prevState, product]);
    console.log('Se agregó al carrito el producto:', product.name);
  }
}

