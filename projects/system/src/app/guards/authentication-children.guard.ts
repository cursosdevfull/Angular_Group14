import { CanActivateChildFn } from '@angular/router';

export const AuthenticationChildrenGuard: CanActivateChildFn = (
  route,
  state
) => {
  return true;
};
