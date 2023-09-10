import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/components/login/login.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { RecoveryComponent } from './core/components/recovery/recovery.component';
import { RegisterComponent } from './core/components/register/register.component';
import { AuthenticationGuardFn } from './guards/authentication.guard';
import { AuthorizationGuardFn } from './guards/authorization.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recovery', component: RecoveryComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'driver',
    canActivate: [
      /*AuthenticationGuard*/ AuthenticationGuardFn,
      AuthorizationGuardFn,
    ],
    data: { rolesAllowed: ['NURSE', 'AUDITOR'] },
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'medic',
    loadChildren: () =>
      import('./medic/medic.module').then((m) => m.MedicModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'test-routes',
    loadChildren: () =>
      import('./test-routes/test-routes.module').then(
        (m) => m.TestRoutesModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
