import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { RouterLink } from '@angular/router';
import { ProductService } from '@shared/services/product.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  // Inputs
  @Input({required: true}) product!: Product;
  // Outputs
  @Output() addToCart = new EventEmitter();

  private productService = Inject(ProductService);

  constructor() {}

  addToCartHandler() {
    console.log("Se hizo click en el botón de agregar al carrito");
    this.addToCart.emit(this.product);
  }


}
