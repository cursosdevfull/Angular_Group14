import { Component } from '@angular/core';

import { LayoutService } from '../../../config/modules/layout/layout.service';

@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  readonly title = 'HISTORY';
  readonly icon = 'storage';

  constructor(private readonly layoutService: LayoutService) {
    //super();
    this.layoutService.configuration = { menu: true, toolbar: true };
  }
}
