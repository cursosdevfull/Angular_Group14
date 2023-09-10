import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../shared/shared.module';
import { BaseComponent } from './components/base/base.component';
import { Graph01Component } from './components/graph01/graph01.component';
import { Graph02Component } from './components/graph02/graph02.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [BaseComponent, Graph01Component, Graph02Component],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    SharedModule,
    FlexLayoutModule,
  ],
})
export class DashboardModule {}
