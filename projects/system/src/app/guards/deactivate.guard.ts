import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { firstValueFrom, map } from 'rxjs';

import { UtilsService } from '../shared/services/utils.service';

export interface ICanDeactivate {
  isSaved(): boolean;
}

export const DeactivateGuard: CanDeactivateFn<ICanDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (!component.isSaved()) {
    const utilsService = inject(UtilsService);

    const confirm = firstValueFrom(
      utilsService
        .showConfirm('Do you want to leave this component without saving?')
        .pipe(map((result) => (result ? true : false)))
    );

    return confirm;
  }

  return true;
};
