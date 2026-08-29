import { Component,Input,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdModel } from '@onlineShop/models';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'product',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatIcon,
    MatTooltip,
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input() product!: ProdModel;
  @Input() searchText: string = '';

  isFavorite: boolean = false;

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}
