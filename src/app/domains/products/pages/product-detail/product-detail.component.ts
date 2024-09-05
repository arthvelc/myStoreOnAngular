import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../../shared/components/layout/layout.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  
}
