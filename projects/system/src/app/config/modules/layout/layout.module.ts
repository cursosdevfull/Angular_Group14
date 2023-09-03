import { ModuleWithProviders, NgModule } from '@angular/core';

import { ILayout } from './layout.interface';
import { LAYOUT_TOKEN } from './tokens';

@NgModule()
export class LayoutModule {
  static forRoot(config: ILayout): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [
        {
          provide: LAYOUT_TOKEN,
          useValue: config,
        },
      ],
    };
  }
}
