import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ILayout } from './layout.interface';
import { LAYOUT_TOKEN } from './tokens';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private layoutMenu: boolean;
  private layoutToolbar: boolean;

  private readonly configReactive: BehaviorSubject<ILayout>;

  constructor(@Inject(LAYOUT_TOKEN) private layout: ILayout) {
    this.layoutMenu = layout.menu;
    this.layoutToolbar = layout.toolbar;

    this.configReactive = new BehaviorSubject<ILayout>(layout);
  }

  set configuration(config: Partial<ILayout>) {
    let configPrevious = this.configReactive.getValue();

    configPrevious = Object.assign(configPrevious, config);

    this.configReactive.next(configPrevious);
  }

  get configuration(): Observable<ILayout> {
    return this.configReactive.asObservable();
  }
}
