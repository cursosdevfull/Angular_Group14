import { Component } from '@angular/core';

import { DashboardApplication } from '../../application/dashboard.application';
import { DataGraph } from '../graph01/graph01.component';

@Component({
  selector: 'amb-graph02',
  templateUrl: './graph02.component.html',
  styleUrls: ['./graph02.component.css'],
})
export class Graph02Component {
  data: DataGraph[] = [];

  constructor(private readonly application: DashboardApplication) {}

  ngOnInit() {
    this.application.listen('dataupdate').subscribe(console.log);
  }
}
