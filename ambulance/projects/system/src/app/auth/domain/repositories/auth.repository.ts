import { Observable } from 'rxjs';

import { IToken } from '../interfaces/token.interface';

export interface AuthRepository {
  login(email: string, password: string, recaptcha: string): Observable<IToken>;
}
