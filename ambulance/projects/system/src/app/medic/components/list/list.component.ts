import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';
import { BaseComponent } from '../../../shared/abstractions/base-component';

@Component({
  selector: 'amb-list-medic',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent {
  readonly title = 'MEDIC';
  readonly icon = 'settings_accesibility';

  dataOriginal = [
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

  data: any = [];

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

  columns = ['id', 'cmp', 'name', 'lastname', 'dni', 'incomes'];

  constructor(private readonly layoutService: LayoutService) {
    super();
    this.layoutService.configuration = { menu: true, toolbar: true };
    this.pageChanged(0);
  }

  pageChanged(pageNumber: number) {
    this.data = this.dataOriginal.slice(pageNumber * 20, pageNumber * 20 + 20);
  }
}
