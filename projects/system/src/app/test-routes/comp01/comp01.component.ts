import { Component } from '@angular/core';

import { LayoutService } from '../../config/modules/layout/layout.service';

@Component({
  selector: 'amb-comp01',
  templateUrl: './comp01.component.html',
  styleUrls: ['./comp01.component.css'],
})
export class Comp01Component {
  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.configuration = { menu: true, toolbar: true };
  }
}
