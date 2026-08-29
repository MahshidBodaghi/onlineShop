import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchText: string = '';

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {}

  updateSerachText(inputEl: HTMLInputElement) {
    this.searchText = inputEl.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
