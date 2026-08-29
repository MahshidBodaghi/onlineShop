import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { Product } from '@onlineShop/models';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-first-app');
  sampleProduct: Product = {
    id: 1,
    title: 'تست محصول Nx Monorepo',
    price: 150000,
    description: 'تست لایبرری مشترک',
    category: 'آزمایشی',
    image: 'test.png',
  };
}
