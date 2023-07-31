import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { MedicRoutingModule } from './medic-routing.module';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, MedicRoutingModule, SharedModule],
})
export class MedicModule {}
