import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../shared/models/product.model';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  // Inputs
  @Input({required: true}) product!: Product;
  // Outputs
  @Output() addToCart = new EventEmitter();

  constructor() {}

  addToCartHandler() {
    console.log("Se hizo click en el botón de agregar al carrito");
    this.addToCart.emit("se agregó:" + this.product.name);
  }

}
