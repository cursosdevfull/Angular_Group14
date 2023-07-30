import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { DriverRoutingModule } from './driver-routing.module';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, DriverRoutingModule],
})
export class DriverModule {}
