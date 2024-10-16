import { Component, computed, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isSidebarOpen = signal(false);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  cartTotal = this.cartService.cartTotal;

  toggleSidebar(): void {
    this.isSidebarOpen.update((isOpen) => !isOpen);
  }
}
