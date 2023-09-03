import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';
import {
  BaseComponent,
  Modal,
} from '../../../shared/abstractions/base-component';
import { Metadata } from '../../../shared/interfaces/metadata.interface';
import { UtilsService } from '../../../shared/services/utils.service';
import { DriverCreateApplication } from '../../application/driver-create.application';
import { DriverDeleteApplication } from '../../application/driver-delete.application';
import { DriverGetAllApplication } from '../../application/driver-get-all-application';
import { DriverGetByPageApplication } from '../../application/driver-get-by-page.application';
import { DriverUpdateApplication } from '../../application/driver-update.application';
import { FormComponent } from '../form/form.component';

export interface IDriver {
  id: number;
  name: string;
  active: number;
}
@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent<IDriver> {
  readonly title = 'DRIVER';
  readonly icon = 'folder';

  data: IDriver[] = [];
  metaData: Metadata[] = [
    {
      field: 'id',
      title: 'ID',
    },
    {
      field: 'name',
      title: 'Nombre',
    },
  ];

  filename = 'Conductores';
  sheetName = 'Lista de conductores';
  modalNewUpdate: Modal = {
    component: FormComponent,
    panelClass: 'modal-driver',
  };

  constructor(
    protected override layoutService: LayoutService,
    protected override utilsService: UtilsService,
    protected readonly driverGetAllApplication: DriverGetAllApplication,
    protected readonly driverGetByPageApplication: DriverGetByPageApplication,
    protected readonly driverCreateApplication: DriverCreateApplication,
    protected readonly driverUpdateApplication: DriverUpdateApplication,
    protected readonly driverDeleteApplication: DriverDeleteApplication
  ) {
    super(
      layoutService,
      utilsService,
      driverGetByPageApplication,
      driverGetAllApplication,
      driverCreateApplication,
      driverUpdateApplication,
      driverDeleteApplication
    );
    this.pageChanged(0);
  }

  ngOnDestroy() {
    this.destroySubscriptions.next();
    this.destroySubscriptions.unsubscribe();
  }

  fromDomainToData(data: any): any {
    return {
      nombre: data.name,
    };
  }
}
