import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isSidebarOpen = signal(false);
  @Input({ required: true }) cart: Product[] = [];
  
  toggleSidebar(): void {
    this.isSidebarOpen.update((isOpen) => !isOpen);
  }
  
  getCartTotal(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
