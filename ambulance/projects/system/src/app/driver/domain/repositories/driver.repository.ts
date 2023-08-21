import { Observable } from 'rxjs';

import { Driver } from '../driver';

export interface DriverRepository {
  create(driver: Driver): Observable<any>;
  update(driver: Driver): Observable<any>;
  delete(driver: Driver): Observable<any>;
  get(id: number): Observable<any>;
  getAll(): Observable<any>;
  getByPage(page: number): Observable<any>;
}
