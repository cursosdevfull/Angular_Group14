import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WebcamModule } from 'ngx-webcam';

import { ConfirmComponent } from './components/confirm/confirm.component';
import { ContainerComponent } from './components/container/container.component';
import { ExportComponent } from './components/export/export.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PhotoComponent } from './components/photo/photo.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';
import { UploadDirective } from './directives/upload.directive';
import { UtilsService } from './services/utils.service';

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    ExportComponent,
    ConfirmComponent,
    PhotoComponent,
    UploadDirective,
    RolesAllowedDirective,
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
    MatDialogModule,
    MatListModule,
    WebcamModule,
    MatSlideToggleModule,
    MatSnackBarModule,
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
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    PhotoComponent,
    RolesAllowedDirective,
  ],
  providers: [UtilsService],
})
export class SharedModule {}
