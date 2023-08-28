import { Observable } from 'rxjs';

import { Medic } from '../medic';

export interface MedicRepository {
  create(medic: Medic): Observable<any>;
  update(id: number, medic: any): Observable<any>;
  delete(id: number): Observable<any>;
  get(id: number): Observable<any>;
  getAll(): Observable<any>;
  getByPage(page: number): Observable<any>;
}
