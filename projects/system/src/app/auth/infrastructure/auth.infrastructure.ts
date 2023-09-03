import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IToken } from '../domain/interfaces/token.interface';
import { AuthRepository } from '../domain/repositories/auth.repository';

@Injectable()
export class AuthInfrastructure implements AuthRepository {
  constructor(private readonly http: HttpClient) {}
  login(
    email: string,
    password: string,
    recaptcha: string
  ): Observable<IToken> {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/users/login`;

    return this.http.post<IToken>(endpointUrl, {
      correo: email,
      password,
      recaptchaReactive: recaptcha,
    });
  }

  getNewAccessToken(refreshToken: string) {
    const apiPath = environment.API_REST_URL;
    const endpointUrl = `${apiPath}/users/refresh/${refreshToken}`;

    return this.http.get<IToken>(endpointUrl);
  }
}
