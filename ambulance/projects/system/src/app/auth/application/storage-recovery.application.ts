import { Inject, Injectable } from '@angular/core';

import { StorageRepository } from '../domain/repositories/storage.repository';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';

@Injectable()
export class StorageRecoveryApplication {
  constructor(
    @Inject(StorageInfrastructure) private readonly storage: StorageRepository
  ) {}

  execute(propertyName: string) {
    return this.storage.recovery(propertyName);
  }
}
