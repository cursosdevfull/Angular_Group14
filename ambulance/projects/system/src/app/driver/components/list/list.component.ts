import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';
import {
  BaseComponent,
  Modal,
} from '../../../shared/abstractions/base-component';
import { Metadata } from '../../../shared/interfaces/metadata.interface';
import { UtilsService } from '../../../shared/services/utils.service';
import { DriverGetAllApplication } from '../../application/driver-get-all-application';
import { DriverGetByPageApplication } from '../../application/driver-get-by-page.application';
import { FormComponent } from '../form/form.component';

export interface IDriver {
  id: number;
  name: string;
  lastname: string;
  license: string;
  gender: string;
}
@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent<IDriver> {
  readonly title = 'DRIVER';
  readonly icon = 'folder';

  dataOriginal: IDriver[] = [
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
  data: IDriver[] = [];
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
      field: 'license',
      title: 'Licencia',
    },
    {
      field: 'gender',
      title: 'Género',
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
    private readonly driverGetAllApplication: DriverGetAllApplication,
    private readonly driverGetByPageApplication: DriverGetByPageApplication
  ) {
    super(layoutService, utilsService);
    this.pageChanged(0);

    this.driverGetByPageApplication.execute(0).subscribe({
      next: console.log,
      error: console.error,
    });
  }

  openAlert() {
    alert('Componente para agregar');
  }
}
