import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ContainerComponent } from './components/container/container.component';
import { ExportComponent } from './components/export/export.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    ExportComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatListModule,
  ],
  exports: [
    TitleComponent,
    MatIconModule,
    MatButtonModule,
    ContainerComponent,
    TableComponent,
    MatTableModule,
    MatTooltipModule,
    PaginatorComponent,
    MatBottomSheetModule,
    ExportComponent,
  ],
})
export class SharedModule {}
