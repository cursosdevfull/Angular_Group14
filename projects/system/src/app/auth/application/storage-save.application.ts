import { Inject, Injectable } from '@angular/core';

import { StorageRepository } from '../domain/repositories/storage.repository';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';

@Injectable()
export class StorageSaveApplication {
  constructor(
    @Inject(StorageInfrastructure) private readonly storage: StorageRepository
  ) {}

  execute(propertyName: string, value: string) {
    this.storage.save(propertyName, value);
  }
}
