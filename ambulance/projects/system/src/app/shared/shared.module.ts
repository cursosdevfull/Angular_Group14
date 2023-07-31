import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  exports: [TitleComponent, MatIconModule, MatButtonModule],
})
export class SharedModule {}
