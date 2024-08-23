import { Product } from './../../../shared/models/product.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  //Uso de imputs en Angular
  @Input({required: true}) product!:Product;

  @Output() addToCart = new EventEmitter();


  addToCartHandler(){
    console.log("click desde el hijo");
    this.addToCart.emit(this.product);
  }
}
