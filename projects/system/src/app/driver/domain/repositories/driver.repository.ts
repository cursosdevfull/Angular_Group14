import { Observable } from 'rxjs';

import { Driver } from '../driver';

export interface DriverRepository {
  create(driver: Driver): Observable<any>;
  update(id: number, driver: any): Observable<any>;
  delete(id: number): Observable<any>;
  get(id: number): Observable<any>;
  getAll(): Observable<any>;
  getByPage(page: number): Observable<any>;
}
