import { Injectable } from '@angular/core';

import { StorageRepository } from '../domain/repositories/storage.repository';

@Injectable()
export class StorageInfrastructure implements StorageRepository {
  save(propertyName: string, value: string): void {
    sessionStorage.setItem(propertyName, value);
  }
  recovery(propertyName: string): string {
    return sessionStorage.getItem(propertyName) || '';
  }
  clean(): void {
    sessionStorage.clear();
  }
}
