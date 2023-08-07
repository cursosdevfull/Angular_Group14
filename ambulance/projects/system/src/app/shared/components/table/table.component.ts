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

  constructor() {
    //console.log('view children', this.columnsDef);
  }

  ngOnChanges() {
    this.columns = this.metaData.map((x: any) => x.field);
  }

  /*ngAfterViewInit() {
    console.log('view children2', this.columnsDef);
  }*/

  ngAfterContentInit() {
    if (!this.columnsDef) return;

    this.columnsDef.forEach((columnDef: MatColumnDef) => {
      this.columns?.push(columnDef.name);
      this.table?.addColumnDef(columnDef);
    });
  }
}
