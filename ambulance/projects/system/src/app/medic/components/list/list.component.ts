import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';
import {
  BaseComponent,
  Modal,
} from '../../../shared/abstractions/base-component';
import { UtilsService } from '../../../shared/services/utils.service';
import { FormComponent } from '../form/form.component';

export interface IMedic {
  id: number;
  name: string;
  lastname: string;
  dni: string;
  cmp: string;
  incomes: number;
}
@Component({
  selector: 'amb-list-medic',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent<IMedic> {
  readonly title = 'MEDIC';
  readonly icon = 'settings_accesibility';

  modalNewUpdate: Modal = {
    component: FormComponent,
    panelClass: 'modal-medic',
  };

  dataOriginal: IMedic[] = [
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      dni: '12345678',
      cmp: '123456',
      incomes: 20000,
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      dni: '12345678',
      cmp: '123456',
      incomes: 14000,
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      dni: '12345678',
      cmp: '123456',
      incomes: 30000,
    },
  ];

  data: IMedic[] = [];

  metaData = [
    {
      field: 'id',
      title: 'ID',
    },
    {
      field: 'cmp',
      title: 'CMP',
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
      field: 'dni',
      title: 'DNI',
    },
    {
      field: 'incomes',
      title: 'Ingresos',
    },
  ];

  filename = 'Médicos';
  sheetName = 'Lista de médicos';

  constructor(
    protected override layoutService: LayoutService,
    protected override utilsService: UtilsService
  ) {
    super(layoutService, utilsService);
    this.pageChanged(0);
  }
}
