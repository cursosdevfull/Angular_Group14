import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';
import {
  BaseComponent,
  Modal,
} from '../../../shared/abstractions/base-component';
import { Metadata } from '../../../shared/interfaces/metadata.interface';
import { UtilsService } from '../../../shared/services/utils.service';
import { FormComponent } from '../form/form.component';

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  area: string;
}
@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent<IUser> {
  readonly title = 'USER';
  readonly icon = 'face';

  modalNewUpdate: Modal = {
    component: FormComponent,
    panelClass: 'modal-user',
  };

  dataOriginal: IUser[] = [
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      area: 'Administracion',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      area: 'TI',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      area: 'Contabilidad',
    },
  ];

  data: IUser[] = [];
  metaData: Metadata[] = [
    {
      field: 'id',
      title: 'ID',
    },
    {
      field: 'name',
      title: 'Nombres',
    },
    {
      field: 'lastname',
      title: 'Apellidos',
    },
    {
      field: 'area',
      title: 'Area',
    },
  ];

  filename = 'Usuarios';
  sheetName = 'Lista de usuarios';

  constructor(
    protected override layoutService: LayoutService,
    protected override utilsService: UtilsService
  ) {
    super(layoutService, utilsService);
    this.pageChanged(0);
  }
}
