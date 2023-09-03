import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

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

  recoveryFieldInToken(field: string): string | string[] {
    const accessToken = this.recovery('accessToken');
    if (!accessToken) return null;

    const payload = jwtDecode(accessToken);
    return payload[field];
  }
}
