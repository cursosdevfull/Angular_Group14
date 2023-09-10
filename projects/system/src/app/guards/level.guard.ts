import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';

import { StorageRecoveryTokenApplication } from '../auth/application/storage-recover-token';

export const levelGuard: CanMatchFn = (route, segments) => {
  const rolesAllowed = route.data['rolesAllowed'] as string[];
  const rolesUser = inject(StorageRecoveryTokenApplication).execute(
    'roles'
  ) as string[];

  return rolesUser.some((role) => rolesAllowed.includes(role));
};
