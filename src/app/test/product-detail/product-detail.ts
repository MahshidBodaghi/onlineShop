import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdModel } from '../../models/prodModel';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  @Input() product: ProdModel| null = null;

  @Output() closeDetail = new EventEmitter<void>();

  closeProductDetail(): void {
    this.closeDetail.emit();
  }
}