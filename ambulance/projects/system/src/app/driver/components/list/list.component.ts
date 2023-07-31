import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';
import { BaseComponent } from '../../../shared/abstractions/base-component';

@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent {
  readonly title = 'DRIVER';
  readonly icon = 'folder';

  constructor(private readonly layoutService: LayoutService) {
    super();
    this.layoutService.configuration = { menu: true, toolbar: true };
  }

  openAlert() {
    alert('Componente para agregar');
  }
}
