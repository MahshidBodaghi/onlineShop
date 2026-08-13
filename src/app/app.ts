import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { Product } from './test/product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-first-app');
}
