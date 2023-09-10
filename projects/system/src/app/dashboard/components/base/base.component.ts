import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';

@Component({
  selector: 'amb-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent {
  title = 'DASHBOARD';
  icon = 'dashboard';
  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.configuration = { menu: true, toolbar: true };
  }
}
