import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthLoginApplication } from '../../auth/application/auth-login.application';
import { StorageRecoveryTokenApplication } from '../../auth/application/storage-recover-token';

@Directive({
  selector: '[rolesAllowed]',
})
export class RolesAllowedDirective {
  @Input('rolesAllowed') rolesAllowed: string[] = [];
  rolesUser: string[] = [];

  constructor(
    private readonly recoveryFieldInToken: StorageRecoveryTokenApplication,
    private readonly auth: AuthLoginApplication,
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.rolesUser = this.recoveryFieldInToken.execute('roles') as string[];
    this.execute();
  }

  execute() {
    const isUserLogged = this.auth.isUserLogged;
    const isUserAuthorized = this.rolesUser.some((role) =>
      this.rolesAllowed.includes(role)
    );

    if (isUserLogged && isUserAuthorized) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
