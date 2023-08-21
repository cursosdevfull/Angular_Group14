import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { StorageInfrastructure } from '../../auth/infrastructure/storage.infrastructure';
import { Driver } from '../domain/driver';
import { DriverRepository } from '../domain/repositories/driver.repository';
import { DriverGetAllDto } from './dtos/response/driver-get-all.dto';

@Injectable()
export class DriverInfrastructure implements DriverRepository {
  constructor(
    private readonly http: HttpClient,
    private readonly infrastructureStorage: StorageInfrastructure
  ) {}

  create(driver: Driver): Observable<any> {
    return of([]);
  }
  update(driver: Driver): Observable<any> {
    return of([]);
  }
  delete(driver: Driver): Observable<any> {
    return of([]);
  }
  get(id: number): Observable<any> {
    return of([]);
  }
  getAll(): Observable<any> {
    const apiPath = 'https://api-cursoangular.cursos-dev.com';
    const endpointUrl = `${apiPath}/drivers`;

    const accessToken = this.infrastructureStorage.recovery('accessToken');

    return this.http
      .get(endpointUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .pipe(map((response: any) => DriverGetAllDto.fromDataToResult(response)));
  }
  getByPage(page: number): Observable<any> {
    const apiPath = 'https://api-cursoangular.cursos-dev.com';
    const endpointUrl = `${apiPath}/drivers/page/${page}/10`;

    const accessToken = this.infrastructureStorage.recovery('accessToken');

    return this.http
      .get(endpointUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .pipe(
        map((response: any) => {
          return {
            results: DriverGetAllDto.fromDataToResult(response.records),
            total: response.totalRecords,
          };
        })
      );
  }
}
