import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService, private router: Router) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const expiryDate = this._authService.getLocalStorage('accessExpiry');
    const tokenExpired = this.tokenExpired(expiryDate);

    if (!tokenExpired) {
      request = this.addAuthorization(request);
    }

    return next.handle(request).pipe(
      catchError((error) => {
        const profile = this._authService.getLocalStorage('profile');
        if (error.status === 401 && profile) {
          return this.reauthenticate().pipe(
            switchMap(() => {
              request = this.addAuthorization(request);
              return next.handle(request);
            })
          );
        }
        return throwError(() => error);
      })
    );
  }
  tokenExpired(expiryDate: string | number) {
    if (!expiryDate) return true;
    if (new Date() > new Date(expiryDate)) return true;
    return false;
  }

  addAuthorization(request: any) {
    const accessToken = this._authService.getLocalStorage('accessToken');
    return request.clone({
      setHeaders: { Authorization: 'Bearer ' + accessToken },
    });
  }

  reauthenticate(): Observable<any> {
    return this._authService
      .refreshToken()
      .pipe(map((token) => this._authService.setToken(token)));
  }
}
