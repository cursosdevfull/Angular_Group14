import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from '../domain/auth';
import { IToken } from '../domain/interfaces/token.interface';
import { AuthRepository } from '../domain/repositories/auth.repository';
import { StorageRepository } from '../domain/repositories/storage.repository';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';

@Injectable()
export class AuthLoginApplication {
  constructor(
    @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository,
    @Inject(StorageInfrastructure)
    private readonly storageRepository: StorageRepository,
    private readonly router: Router
  ) {}

  execute(auth: Auth) {
    const { email, password, recaptcha } = auth.properties();
    return this.authRepository.login(email, password, recaptcha).subscribe({
      next: this.userAuthenticated.bind(this),
      error: console.log,
    });
  }

  private userAuthenticated(response: IToken) {
    this.storageRepository.save('accessToken', response.accessToken);
    this.storageRepository.save('refreshToken', response.refreshToken);

    this.router.navigate(['/dashboard']);
  }

  get isUserLogged(): boolean {
    return this.storageRepository.recovery('accessToken') ? true : false;
  }
}
