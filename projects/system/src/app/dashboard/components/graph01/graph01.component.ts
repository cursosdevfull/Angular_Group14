import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardApplication } from '../../application/dashboard.application';

export interface DataGraph {
  name: string;
  value: number;
}

@Component({
  selector: 'amb-graph01',
  templateUrl: './graph01.component.html',
  styleUrls: ['./graph01.component.css'],
})
export class Graph01Component {
  data: DataGraph[] = [];
  subscription: Subscription;

  view: [number, number] = [700, 450];
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  showLegend = true;
  xAxisLabel = 'Countries';
  yAxisLabel = 'Cases Confirmed';

  constructor(private readonly application: DashboardApplication) {}

  ngOnInit() {
    this.subscription = this.application.getDataCovid().subscribe((data) => {
      this.data = data.map((el) => ({
        name: el.country,
        value: el.casesConfirmed,
      }));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
