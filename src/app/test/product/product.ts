import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdModel } from '../../models/prodModel';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'product',
  imports: [CommonModule,  MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  isFavorite = false;

toggleFavorite(): void {
  this.isFavorite = !this.isFavorite;
}
  selectedProduct!: ProdModel;
  @Input() product!: ProdModel;
  @Input() searchText: string = '';
}
