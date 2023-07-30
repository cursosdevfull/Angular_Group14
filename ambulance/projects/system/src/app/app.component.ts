import { Component } from '@angular/core';

import { ILayout } from './config/modules/layout/layout.interface';
import { LayoutService } from './config/modules/layout/layout.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMenu: boolean = false;
  showToolbar: boolean = false;

  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.configuration.subscribe((config: ILayout) => {
      this.showMenu = config.menu;
      this.showToolbar = config.toolbar;
    });
  }
}
