import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

import { StorageRecoveryTokenApplication } from '../auth/application/storage-recover-token';

export const AuthorizationGuardFn: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const rolesAllowed = route.data['rolesAllowed'] as string[];
  const rolesUser = inject(StorageRecoveryTokenApplication).execute(
    'roles'
  ) as string[];

  return rolesUser.some((role) => rolesAllowed.includes(role));
};
