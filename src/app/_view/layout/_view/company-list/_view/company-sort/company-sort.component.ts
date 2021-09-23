import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent implements OnInit {
  /**
   * */
  @Output() sort = new EventEmitter<string>();

  sortValue?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  sortChange(sort: string): void {
    if (this.sortValue === sort) {
      this.sort.emit('')
      this.sortValue = '';
    } else {
      this.sort.emit(sort);
      this.sortValue = sort;
    }

  }

  sortChecked(sort: string): boolean {
    return this.sortValue === sort;
  }
}
