import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Product } from './../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter();

  sanitizedImageUrls: SafeUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.product.images.forEach(image => {
      const deserializedImage = JSON.parse(image)[0];
      this.sanitizedImageUrls.push(this.sanitizer.bypassSecurityTrustUrl(deserializedImage));
    });
  }

  addToCartHandler() {
    console.log("click desde el hijo");
    this.addToCart.emit(this.product);
  }
}