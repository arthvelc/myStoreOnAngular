import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  // Inputs
  @Input({required: true}) img!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) price!: number;
  @Input({required: true}) stock!: number ;
  // Outputs
  @Output() addToCart = new EventEmitter();

  constructor() {}

  addToCartHandler() {
    console.log("Se hizo click en el botón de agregar al carrito");
    this.addToCart.emit("se agregó:" + this.title);
  }
  
}
