import { Routes } from '@angular/router';

import { Std01Component } from './standalone/std01/std01.component';
import { Std02Component } from './standalone/std02/std02.component';
import { Std03Component } from './standalone/std03/std03.component';

export const MyRoutes: Routes = [
  {
    path: 'std01',
    component: Std01Component,
  },
  {
    path: 'std02',
    component: Std02Component,
  },
  {
    path: 'std03',
    component: Std03Component,
  },
  {
    path: '**',
    redirectTo: 'std01',
  },
];
