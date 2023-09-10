import { CanActivateChildFn } from '@angular/router';

export const AuthorizationChildrenGuard: CanActivateChildFn = (
  route,
  state
) => {
  return true;
};
