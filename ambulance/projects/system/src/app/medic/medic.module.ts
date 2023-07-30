import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { MedicRoutingModule } from './medic-routing.module';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, MedicRoutingModule],
})
export class MedicModule {}
