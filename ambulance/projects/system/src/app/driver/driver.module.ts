import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { SharedModule } from '../shared/shared.module';
import { DriverCreateApplication } from './application/driver-create.application';
import { DriverGetAllApplication } from './application/driver-get-all-application';
import { DriverGetByPageApplication } from './application/driver-get-by-page.application';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { DriverRoutingModule } from './driver-routing.module';
import { DriverInfrastructure } from './infrastructure/driver.infrastructure';

const applicationProviders = [
  DriverCreateApplication,
  DriverGetAllApplication,
  DriverGetByPageApplication,
];
const infrastructureProviders = [DriverInfrastructure];
@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    SharedModule,
    NgScrollbarModule,
    FlexLayoutModule,
  ],
  providers: [...applicationProviders, ...infrastructureProviders],
})
export class DriverModule {}
