import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  imports: [],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBar {
  @Input() filters!: String[];
  @Input() selectedFilter!: String;
  @Output() filterChange = new EventEmitter<String>();

  onFilterChange(name: String): void {
    this.filterChange.emit(name);
  }
}
