import { CartService } from './../../services/cart.service';
import { Component, inject, Injectable, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  private carService = inject(CartService);
  cart = this.carService.cart;
  total = this.carService.total;




  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }


}
