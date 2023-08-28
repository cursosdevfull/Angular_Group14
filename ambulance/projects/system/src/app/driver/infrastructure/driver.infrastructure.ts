import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
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
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/drivers`;

    return this.http.post(endpointUrl, driver);
  }
  update(id: number, driver: any): Observable<any> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/drivers/${id}`;

    return this.http.put(endpointUrl, driver);
  }
  delete(id: number): Observable<any> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/drivers/${id}`;

    return this.http.delete(endpointUrl);
  }
  get(id: number): Observable<any> {
    return of([]);
  }
  getAll(): Observable<any> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/drivers`;

    return this.http
      .get(endpointUrl)
      .pipe(map((response: any) => DriverGetAllDto.fromDataToResult(response)));
  }
  getByPage(page: number): Observable<any> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/drivers/page/${page}/${environment.AMOUNT_RECORDS_PER_PAGE}`;

    return this.http.get(endpointUrl).pipe(
      map((response: any) => {
        return {
          results: DriverGetAllDto.fromDataToResult(response.records),
          total: response.totalRecords,
        };
      })
    );
  }
}
