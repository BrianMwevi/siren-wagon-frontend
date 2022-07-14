import { Injectable } from '@angular/core';
import { ProfileService } from '../services/profile.service';
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
export class hasProfile implements CanActivate {
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
    return this.hasProfile(url);
  }

  hasProfile(nextUrl: string): true | UrlTree {
    const user = this._auth.getLocalStorage('user');
    if (user && user.user_type) {
      return true;
    }
    this._auth.redirectUrl = nextUrl;
    return this.router.parseUrl('/');
  }
}
