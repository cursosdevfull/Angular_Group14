import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [CommonModule, HistoryRoutingModule, SharedModule],
})
export class HistoryModule {}
