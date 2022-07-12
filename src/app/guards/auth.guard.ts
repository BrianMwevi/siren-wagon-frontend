import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url = state.url;
    return this.checkIsLoggedIn(url);
  }

  checkIsLoggedIn(nextUrl: string): true | UrlTree {
    const profile = this._auth.getLocalStorage('profile');
    if (profile !== null) return true;
    this._auth.redirectUrl = nextUrl;
    return this.router.parseUrl('/login');
  }
}
