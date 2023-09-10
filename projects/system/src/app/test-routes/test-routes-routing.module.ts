import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLoginApplication } from '../auth/application/auth-login.application';
import { AuthenticationChildrenGuard } from '../guards/authentication-children.guard';
import { AuthorizationChildrenGuard } from '../guards/authorization-children.guard';
import { DeactivateGuard } from '../guards/deactivate.guard';
import { levelGuard } from '../guards/level.guard';
import { Comp01Component } from './comp01/comp01.component';
import { Comp02Component } from './comp02/comp02.component';
import { Comp03Component } from './comp03/comp03.component';
import { Comp04Component } from './comp04/comp04.component';
import { Comp05Component } from './comp05/comp05.component';
import { Comp07Component } from './comp07/comp07.component';

const routes: Routes = [
  {
    path: '',
    component: Comp01Component,
    //canActivate: [AuthenticationGuardFn, AuthorizationGuardFn],
    canActivateChild: [AuthenticationChildrenGuard, AuthorizationChildrenGuard],
    data: { rolesAllowed: ['NURSE', 'AUDITOR'] },
    children: [
      {
        path: 'comp02',
        component: Comp02Component,
        canDeactivate: [DeactivateGuard],
      },
      {
        path: 'comp03',
        component: Comp03Component,
        canMatch: [levelGuard],
        data: { rolesAllowed: ['NURSE'] },
      },
      {
        path: 'comp03',
        component: Comp05Component,
        canMatch: [levelGuard],
        data: { rolesAllowed: ['ADMIN', 'MEDIC'] },
      },
      {
        path: 'comp04',
        component: Comp04Component,
        canActivate: [() => inject(AuthLoginApplication).isUserLogged],
      },
      {
        path: 'comp07',
        component: Comp07Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutesRoutingModule {}
