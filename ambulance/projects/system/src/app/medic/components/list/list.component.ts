import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';
import { MedicCreateApplication } from '../../../medic/application/medic-create.application';
import { MedicDeleteApplication } from '../../../medic/application/medic-delete.application';
import { MedicGetAllApplication } from '../../../medic/application/medic-get-all-application';
import { MedicGetByPageApplication } from '../../../medic/application/medic-get-by-page.application';
import { MedicUpdateApplication } from '../../../medic/application/medic-update.application';
import {
  BaseComponent,
  Modal,
} from '../../../shared/abstractions/base-component';
import { UtilsService } from '../../../shared/services/utils.service';
import { FormComponent } from '../form/form.component';

export interface IMedic {
  id: number;
  name: string;
  secondname: string;
  lastname: string;
  dni: string;
  cmp: string;
  email: string;
  photo: string;
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

  data: IMedic[] = [];

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
      field: 'secondname',
      title: 'Segundo nombre',
    },
    {
      field: 'lastname',
      title: 'Apellido',
    },
    {
      field: 'dni',
      title: 'DNI',
    },
    {
      field: 'cmp',
      title: 'CMP',
    },
    {
      field: 'email',
      title: 'Correo',
    },
  ];

  filename = 'Médicos';
  sheetName = 'Lista de médicos';

  constructor(
    protected override layoutService: LayoutService,
    protected override utilsService: UtilsService,
    protected readonly medicGetAllApplication: MedicGetAllApplication,
    protected readonly medicGetByPageApplication: MedicGetByPageApplication,
    protected readonly medicCreateApplication: MedicCreateApplication,
    protected readonly medicUpdateApplication: MedicUpdateApplication,
    protected readonly medicDeleteApplication: MedicDeleteApplication
  ) {
    super(
      layoutService,
      utilsService,
      medicGetByPageApplication,
      medicGetAllApplication,
      medicCreateApplication,
      medicUpdateApplication,
      medicDeleteApplication
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
      segundo_nombre: data.secondname,
      apellido: data.lastname,
      dni: data.dni,
      cmp: data.cmp,
      correo: data.email,
    };
  }
}
