import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, NavbarComponent, FooterComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {

  
  constructor() {}

  onAddToCart(event: String) {
    console.log("Se hizo click en el botón de agregar al carrito desde la plantilla de list.component.html");
    console.log("se ejecutó el siguiente evento: " + event);
  }
}

