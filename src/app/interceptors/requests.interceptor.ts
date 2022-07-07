import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this._authService.getLocalStorage('accessToken');
    console.log(token);
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: 'Bearer ' + token },
      });
    }
    return next.handle(request);
  }
}
