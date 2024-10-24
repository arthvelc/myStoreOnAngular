import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { Product } from '@shared/models/product.model';

import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, NavbarComponent, FooterComponent],
  templateUrl: './list.component.html',
})
export default class ListComponent {
  //esta es una lista basada en el modelo de productos para lo que aparecen en la pagina
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  //esta es una lista basada en el model de productos para lo que se agrega al carrito de compras
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit(): void {
    //cuando se inicialice el componente se obtendran los productos de la api
    this.getProducts();
    this.getCategories();
    
  }

  addToCart(product: Product): void {
    this.cartService.addProductToCart(product);
    console.log('Se agregó al carrito el producto:  ', product.title);
  }

  private getProducts():void{
    this.productService.getAllProducts().subscribe({
      //cuando son obtenidos se actualizara la lista de productos se utiliza como si fuera una promesa pero es un observable
      next: (products) => {
        this.products.set(products);
      },
      //en caso de error se mostrara en consola
      error: (error) => console.error('Error al obtener los productos: ', error
      )
    });
  }

  private getCategories():void{
    this.categoryService.getAllCategories().subscribe({
      next: (categories) =>{
        this.categories.set(categories)
        console.log('Categorias: ', categories)
      },
      error: (error) => console.error('Error al obtener las categorias: ', error)
    })
  }

}

