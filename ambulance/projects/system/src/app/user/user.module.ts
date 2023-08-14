import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule, NgScrollbarModule, FlexLayoutModule],
})
export class UserModule {}
