import { Component } from '@angular/core';
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

  products!: Product[];
  
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

    this.products = initProducts;
  }

  onAddToCart(event: String) {
    console.log("Se hizo click en el botón de agregar al carrito desde la plantilla de list.component.html");
    console.log("se ejecutó el siguiente evento: " + event);
  }
}

