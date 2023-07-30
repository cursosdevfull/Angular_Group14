import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
