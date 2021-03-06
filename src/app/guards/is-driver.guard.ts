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
export class IsDriver implements CanActivate {
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
    return this.checkIfDriver(url);
  }

  checkIfDriver(nextUrl: string): true | UrlTree {
    const user = this._auth.getLocalStorage('user');
    if (user.user_type === 'driver') return true;
    this._auth.redirectUrl = nextUrl;
    return this.router.parseUrl(`profile/${user.user_type}/${user.id}`);
  }
}
