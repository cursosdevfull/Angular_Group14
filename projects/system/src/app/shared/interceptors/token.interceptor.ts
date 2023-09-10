import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, mergeMap, Observable, retry, throwError } from 'rxjs';

import { AuthLogoutApplication } from '../../auth/application/auth-logout.application';
import { IToken } from '../../auth/domain/interfaces/token.interface';
import { AuthInfrastructure } from '../../auth/infrastructure/auth.infrastructure';
import { StorageInfrastructure } from '../../auth/infrastructure/storage.infrastructure';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly infrastructureStorage: StorageInfrastructure,
    private readonly injector: Injector
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.infrastructureStorage.recovery('accessToken');
    const headers = req.headers
      .append('Authorization', `Bearer ${accessToken}`)
      .append('Access-Control-Allow-Origin', 'http://localhost:4200')
      .append('Access-Control-Allow-Credentials', 'true');

    const requestCloned = req.clone({
      headers: headers, //req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(requestCloned).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
          return throwError(() => new Error(errorMessage));
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          return this.handleErrorServer(error, req, next);
        }
      })
    );
  }

  handleErrorServer(
    error: HttpErrorResponse,
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    const authInfrastructure = this.injector.get(AuthInfrastructure);
    const authLogoutApplication = this.injector.get(AuthLogoutApplication);

    if (error.status === 401) {
      authLogoutApplication.execute();
    } else if (error.status === 409) {
      const refreshToken = this.infrastructureStorage.recovery('refreshToken');

      return authInfrastructure.getNewAccessToken(refreshToken).pipe(
        retry(3),
        mergeMap((tokens: IToken) => {
          this.infrastructureStorage.save('accessToken', tokens.accessToken);
          this.infrastructureStorage.save('refreshToken', tokens.refreshToken);

          const requestCloned = req.clone({
            headers: req.headers.append(
              'Authorization',
              `Bearer ${tokens.accessToken}`
            ),
          });

          return next.handle(requestCloned);
        })
      );
    }

    return throwError(() => new Error('Unauthorized'));
  }
}
