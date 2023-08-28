import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any;
  @Input() metaData?: any;
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  columns?: string[];

  ngOnChanges() {
    this.columns = this.metaData.map((x: any) => x.field);
    this.ngAfterContentInit();
  }

  ngAfterContentInit() {
    if (!this.columnsDef || this.data.length == 0) return;

    this.columnsDef.forEach((columnDef: MatColumnDef) => {
      this.columns?.push(columnDef.name);
      this.table?.addColumnDef(columnDef);
    });
  }
}
