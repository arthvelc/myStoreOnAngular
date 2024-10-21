import { Component, inject, Input, OnInit, signal,  } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);
  coverImage = signal<string>('');

  @Input() productId?: number;

  ngOnInit(): void {
    console.log("se inicializo el componente");
    if(this.productId){
      this.productService.getProductById(this.productId).subscribe({
        next: (product: Product) => {
          this.product.set(product);
          console.log('Product', product);
          if(product.images.length > 0){
            this.coverImage.set(product.images[0]);
          }
        },
        error: (error) => console.error('Error al obtener el producto: ', error)
      });
    }
  }


  changeCoverImage(newImage: string): void {
    this.coverImage.set(newImage);  
  }

  addToCart(): void {
    const product = this.product();
    if(product){
      this.cartService.addProductToCart(product);
      console.log('Se agregó al carrito el producto:  ', product.title);
    }
  }
}