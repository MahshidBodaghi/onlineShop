import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() outOfStock: number = 0;

  selectedFilterRadioButton: string = 'all';
  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilteredRadioButtonChanged() {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
