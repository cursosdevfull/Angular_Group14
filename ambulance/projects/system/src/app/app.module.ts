import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { RecoveryComponent } from './core/components/recovery/recovery.component';
import { RegisterComponent } from './core/components/register/register.component';
import { CoreModule } from './core/core.module';
import { BaseComponent } from './dashboard/components/base/base.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: 'dashboard', component: BaseComponent },
  { path: '**', component: NotFoundComponent },
  //{ path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(routes),
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
