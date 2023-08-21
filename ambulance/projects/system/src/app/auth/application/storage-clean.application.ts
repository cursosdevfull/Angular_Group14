import { Inject, Injectable } from '@angular/core';

import { StorageRepository } from '../domain/repositories/storage.repository';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';

@Injectable()
export class StorageCleanApplication {
  constructor(
    @Inject(StorageInfrastructure) private readonly storage: StorageRepository
  ) {}

  execute() {
    return this.storage.clean();
  }
}
