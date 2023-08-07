import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';
import { BaseComponent } from '../../../shared/abstractions/base-component';

@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent {
  readonly title = 'USER';
  readonly icon = 'face';

  dataOriginal = [
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

  data: any = [];
  metaData = [
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

  constructor(private readonly layoutService: LayoutService) {
    super();
    this.layoutService.configuration = { menu: true, toolbar: true };
    this.pageChanged(0);
  }

  pageChanged(pageNumber: number) {
    this.data = this.dataOriginal.slice(pageNumber * 20, pageNumber * 20 + 20);
  }
}
