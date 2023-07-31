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

  constructor(private readonly layoutService: LayoutService) {
    super();
    this.layoutService.configuration = { menu: true, toolbar: true };
  }
}
