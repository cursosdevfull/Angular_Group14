import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLoginApplication } from './auth/application/auth-login.application';
import { StorageCleanApplication } from './auth/application/storage-clean.application';
import { StorageRecoveryApplication } from './auth/application/storage-recovery.application';
import { StorageSaveApplication } from './auth/application/storage-save.application';
import { AuthInfrastructure } from './auth/infrastructure/auth.infrastructure';
import { StorageInfrastructure } from './auth/infrastructure/storage.infrastructure';
import { LAYOUT_CONSTANTS } from './config/modules/layout/layout.constant';
import { LayoutModule } from './config/modules/layout/layout.module';
import { CoreModule } from './core/core.module';
import { Paginator } from './shared/clases/paginator';
import { IconService } from './shared/services/icon.service';

const applicationProviders = [
  AuthLoginApplication,
  StorageSaveApplication,
  StorageCleanApplication,
  StorageRecoveryApplication,
];
const infrastructureProviders = [AuthInfrastructure, StorageInfrastructure];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule.forRoot(LAYOUT_CONSTANTS),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ...applicationProviders,
    ...infrastructureProviders,
    {
      provide: MatPaginatorIntl,
      useClass: Paginator,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly iconService: IconService) {}
}
