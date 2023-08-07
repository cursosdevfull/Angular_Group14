import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() quantyRecords: number = 0;
  @Input() pageSize: number = 10;
  @Output() onPageChanged: EventEmitter<number> = new EventEmitter();

  onChangePage(page: PageEvent) {
    this.onPageChanged.emit(page.pageIndex);
  }
}
