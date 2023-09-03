import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { StorageCleanApplication } from './storage-clean.application';

@Injectable()
export class AuthLogoutApplication {
  constructor(
    private readonly storageCleanApplication: StorageCleanApplication,
    private readonly router: Router
  ) {}

  execute() {
    this.storageCleanApplication.execute();
    this.router.navigate(['/']);
  }
}
