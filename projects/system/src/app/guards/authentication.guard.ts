import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthLoginApplication } from '../auth/application/auth-login.application';
import { AuthLogoutApplication } from '../auth/application/auth-logout.application';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private readonly authLogin: AuthLoginApplication,
    private readonly authLogout: AuthLogoutApplication
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authLogin.isUserLogged;
  }
}

export const AuthenticationGuardFn: CanActivateFn = (route, state) => {
  const isUserLogged = inject(AuthLoginApplication).isUserLogged;

  if (!isUserLogged) inject(AuthLogoutApplication).execute();

  return isUserLogged;
};
