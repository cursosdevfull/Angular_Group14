import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { SharedModule } from '../shared/shared.module';
import { MedicCreateApplication } from './application/medic-create.application';
import { MedicDeleteApplication } from './application/medic-delete.application';
import { MedicGetAllApplication } from './application/medic-get-all-application';
import { MedicGetByPageApplication } from './application/medic-get-by-page.application';
import { MedicUpdateApplication } from './application/medic-update.application';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { MedicInfrastructure } from './infrastructure/medic.infrastructure';
import { MedicRoutingModule } from './medic-routing.module';

const applicationProviders = [
  MedicCreateApplication,
  MedicGetAllApplication,
  MedicGetByPageApplication,
  MedicUpdateApplication,
  MedicDeleteApplication,
];
const infrastructureProviders = [MedicInfrastructure];
@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    MedicRoutingModule,
    SharedModule,
    NgScrollbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [...applicationProviders, ...infrastructureProviders],
})
export class MedicModule {}
