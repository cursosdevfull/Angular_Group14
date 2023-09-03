import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LayoutService } from '../../config/modules/layout/layout.service';
import { ExportComponent } from '../components/export/export.component';
import { Metadata } from '../interfaces/metadata.interface';
import { UtilsService } from '../services/utils.service';

export interface Modal {
  component: any;
  panelClass: string;
}

export abstract class BaseComponent<Entity> {
  abstract readonly title: string;
  abstract readonly icon: string;

  abstract data: Entity[];
  abstract metaData: Metadata[];
  abstract modalNewUpdate: Modal;

  abstract filename: string;
  abstract sheetName: string;

  amountRecords: number = 0;
  currentPage: number = 0;

  protected destroySubscriptions = new Subject<void>();

  protected pageSize: number = environment.AMOUNT_RECORDS_PER_PAGE;

  constructor(
    protected layoutService: LayoutService,
    protected utilsService: UtilsService,
    protected applicationGetByPage: any = null,
    protected applicationGetAll: any = null,
    protected applicationCreate: any = null,
    protected applicationUpdate: any = null,
    protected applicationDelete: any = null
  ) {
    this.layoutService.configuration = { menu: true, toolbar: true };
  }

  pageChanged(pageNumber: number) {
    if (!this.applicationGetByPage) return;

    this.currentPage = pageNumber;

    this.applicationGetByPage
      .execute(pageNumber)
      .pipe(takeUntil(this.destroySubscriptions))
      .subscribe({
        next: (response: any) => {
          console.log('response', response);
          this.data = response.results;
          this.amountRecords = response.total;
        },
        error: console.error,
      });
  }

  showOptionsExport() {
    if (!this.applicationGetAll) return;

    this.applicationGetAll
      .execute()
      .pipe(takeUntil(this.destroySubscriptions))
      .subscribe({
        next: (response: any) => {
          this.utilsService.showOptions<Entity>({
            classComponent: ExportComponent,
            data: response,
            metaData: this.metaData,
            filename: this.filename,
            sheetName: this.sheetName,
          });
        },
      });
  }

  openForm(record?: Entity) {
    const reference: MatDialogRef<any> = this.utilsService.showModal<Entity>({
      classComponent: this.modalNewUpdate.component,
      panelClass: this.modalNewUpdate.panelClass,
      data: record,
    });

    reference.afterClosed().subscribe({
      next: (response: any) => {
        if (!response) return;
        if (!this.applicationCreate || !this.applicationUpdate) return;

        if (response.id) {
          this.applicationUpdate
            .execute(response.id, this.fromDomainToData(response.values))
            .pipe(takeUntil(this.destroySubscriptions))
            .subscribe({
              next: (response: any) => {
                this.utilsService.showNotify('Record updated successfully');
                this.pageChanged(this.currentPage);
              },
            });
        } else {
          this.applicationCreate
            .execute(this.fromDomainToData(response.values))
            .pipe(takeUntil(this.destroySubscriptions))
            .subscribe({
              next: (response: any) => {
                this.utilsService.showNotify('Record created successfully');
                this.pageChanged(this.currentPage);
              },
            });
        }
      },
    });
  }

  delete(id: number) {
    if (!this.applicationDelete) return;

    this.utilsService
      .showConfirm()
      .pipe(takeUntil(this.destroySubscriptions))
      .subscribe({
        next: (response: any) => {
          if (!response) return;

          this.applicationDelete
            .execute(id)
            .pipe(takeUntil(this.destroySubscriptions))
            .subscribe({
              next: (response: any) => {
                this.utilsService.showNotify('Record deleted successfully');
                this.pageChanged(this.currentPage);
              },
            });
        },
      });
  }

  abstract fromDomainToData(data: any): any;
}
