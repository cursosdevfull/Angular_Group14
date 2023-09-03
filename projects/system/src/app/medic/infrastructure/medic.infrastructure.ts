import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { StorageInfrastructure } from '../../auth/infrastructure/storage.infrastructure';
import { Medic } from '../domain/medic';
import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicGetAllDto } from './dtos/response/medic-get-all.dto';

@Injectable()
export class MedicInfrastructure implements MedicRepository {
  constructor(
    private readonly http: HttpClient,
    private readonly infrastructureStorage: StorageInfrastructure
  ) {}

  create(medic: Medic): Observable<any> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/medics`;

    return this.http.post(endpointUrl, medic);
  }
  update(id: number, medic: any): Observable<any> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/medics/${id}`;

    return this.http.put(endpointUrl, medic);
  }
  delete(id: number): Observable<any> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/medics/${id}`;

    return this.http.delete(endpointUrl);
  }
  get(id: number): Observable<any> {
    return of([]);
  }
  getAll(): Observable<any> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/medics`;

    return this.http
      .get(endpointUrl)
      .pipe(map((response: any) => MedicGetAllDto.fromDataToResult(response)));
  }
  getByPage(page: number): Observable<any> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/medics/page/${page}/${environment.AMOUNT_RECORDS_PER_PAGE}`;

    return this.http.get(endpointUrl).pipe(
      map((response: any) => {
        return {
          results: MedicGetAllDto.fromDataToResult(response.records),
          total: response.totalRecords,
        };
      })
    );
  }
}
