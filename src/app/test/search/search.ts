import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchText: string = '';
  // searchTextInput(event: any) {
  //   this.searchText = event.target.value;
  // }
  // listOfNumbers: number[] = [2, 5, 8, 7, 15, 9, 52];

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {}
  updateSerachText(inputEl: HTMLInputElement) {
    this.searchText = inputEl.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
