import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import player from 'lottie-web';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';
import { LottieModule } from 'ngx-lottie';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { RegisterComponent } from './components/register/register.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    RecoveryComponent,
    RegisterComponent,
    NotFoundComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LcqVe8cAAAAAFKrdDeUow8MCAXl4XGMsm7XbS-T',
      } as RecaptchaSettings,
    },
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    RecoveryComponent,
    RegisterComponent,
    NotFoundComponent,
    MenuComponent,
  ],
})
export class CoreModule {}
