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

  constructor(private readonly layoutService: LayoutService) {
    super();
    this.layoutService.configuration = { menu: true, toolbar: true };
  }
}
