import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { Comp01Component } from './comp01/comp01.component';
import { Comp02Component } from './comp02/comp02.component';
import { Comp03Component } from './comp03/comp03.component';
import { Comp04Component } from './comp04/comp04.component';
import { TestRoutesRoutingModule } from './test-routes-routing.module';
import { Comp07Component } from './comp07/comp07.component';

@NgModule({
  declarations: [
    Comp01Component,
    Comp02Component,
    Comp03Component,
    Comp04Component,
    Comp07Component,
  ],
  imports: [CommonModule, TestRoutesRoutingModule, ReactiveFormsModule],
  exports: [TestRoutesRoutingModule, SharedModule],
})
export class TestRoutesModule {}
