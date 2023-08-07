import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { LayoutService } from '../../../config/modules/layout/layout.service';
import { BaseComponent } from '../../../shared/abstractions/base-component';
import { ExportComponent } from '../../../shared/components/export/export.component';

@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent {
  readonly title = 'DRIVER';
  readonly icon = 'folder';

  dataOriginal = [
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Perez',
      license: '12345678',
      gender: 'Masculino',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Sotomayor',
      license: '12345678',
      gender: 'Masculino',
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
      field: 'license',
      title: 'Licencia',
    },
    {
      field: 'gender',
      title: 'Género',
    },
  ];

  constructor(
    private readonly layoutService: LayoutService,
    private readonly bottonSheet: MatBottomSheet
  ) {
    super();
    this.layoutService.configuration = { menu: true, toolbar: true };
    this.pageChanged(0);
  }

  pageChanged(pageNumber: number) {
    this.data = this.dataOriginal.slice(pageNumber * 20, pageNumber * 20 + 20);
  }

  showOptionsExport() {
    this.bottonSheet.open(ExportComponent);
  }

  openAlert() {
    alert('Componente para agregar');
  }
}
