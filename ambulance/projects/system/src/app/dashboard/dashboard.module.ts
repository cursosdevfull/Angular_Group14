import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseComponent } from './components/base/base.component';
import { Graph01Component } from './components/graph01/graph01.component';
import { Graph02Component } from './components/graph02/graph02.component';

@NgModule({
  declarations: [BaseComponent, Graph01Component, Graph02Component],
  imports: [CommonModule],
})
export class DashboardModule {}
