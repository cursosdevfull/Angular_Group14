import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LAYOUT_CONSTANTS } from './config/modules/layout/layout.constant';
import { LayoutModule } from './config/modules/layout/layout.module';
import { CoreModule } from './core/core.module';
import { Paginator } from './shared/clases/paginator';
import { IconService } from './shared/services/icon.service';

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
  ],
  providers: [
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
