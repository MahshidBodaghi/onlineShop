import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ProdModel } from '../../models/prodModel';
import { CheckoutComponent } from '../checkout/checkout';


@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatDividerModule,
    MatSnackBarModule,
    
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  @Input() product: ProdModel | null = null;
  @Output() closeDetail = new EventEmitter<void>();
  @Output() checkoutRequested = new EventEmitter<void>();

  private snackBar = inject(MatSnackBar);

  selectedSize: number | string | null = null;
  selectedColor: string | null = null;

  closeProductDetail(): void {
    this.closeDetail.emit();
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  addToCart(): void {
    this.snackBar.open(
      `Added "${this.product?.name}" (Size: ${this.selectedSize || 'Default'}) to cart!`,
      'Close',
      { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' }
    );
    this.checkoutRequested.emit();
  }

  notifyMe(): void {
    this.snackBar.open(
      'You will be notified as soon as this product is back in stock!',
      'Got it',
      { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' }
    );
  }
}