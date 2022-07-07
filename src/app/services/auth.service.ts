import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public redirectUrl: string = '';

  private initialUser: any = null;
  private profileSource: BehaviorSubject<Profile> = new BehaviorSubject(
    this.initialUser
  );

  public profile = this.profileSource.asObservable();
  private url = `${environment.DEV_URL}`;

  constructor(private http: HttpClient, private route: Router) {
    this.profileSource.next(this.getLocalStorage('profile'));
  }

  signupUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users/register/`, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}/users/login/`, user).pipe(
      map((jwtToken: any) => {
        this.setToken(jwtToken);
        this.getProfile().subscribe();
        return this.profile.subscribe((user) => user);
      })
    );
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.url}/profile`).pipe(
      map((profile: any) => {
        this.setLocalStorage('profile', profile);
        this.profileSource.next(profile);
        return profile;
      })
    );
  }

  logout(user: User) {
    return this.http.post<User>(`${this.url}/users/logout/`, user).pipe(
      map((resp) => {
        this.removeLocalStorage();
        this.profileSource.next(this.initialUser);
        this.route.navigate([this.redirectUrl]);
        return this.profile.subscribe();
      })
    );
  }

  setToken(token: any): void {
    this.setLocalStorage('accessToken', token.access);
    this.setLocalStorage('refreshToken', token.refresh);

    // decode the token to read the user_id and expiration timestamp
    const accessTokenParts = token.access.split('.');
    const refreshTokenParts = token.refresh.split('.');
    const accessToken = JSON.parse(window.atob(accessTokenParts[1]));
    const refreshToken = JSON.parse(window.atob(refreshTokenParts[1]));
    this.setLocalStorage('accessExpiry', new Date(accessToken.exp * 1000));
    this.setLocalStorage('refreshExpiry', new Date(refreshToken.exp * 1000));
  }

  // updateProfile(profileId: number, profile: any): Observable<any> {
  //   return this.http.put(`${this.url}/profile/${profileId}/`, profile);
  // }
  // updateUser(userId: number, user: any): Observable<User> {
  //   return this.http.put<User>(`${this.url}/profile/user/${userId}/`, user);
  // }

  setLocalStorage(key: string, value: any) {
    if (key === 'profile') value = JSON.stringify(value);
    localStorage.setItem(key, value);
    return this.getLocalStorage(key);
  }

  removeLocalStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('profile');
    localStorage.removeItem('accessExpiry');
    localStorage.removeItem('refreshExpiry');
    return this.getLocalStorage('accessToken');
  }
  getLocalStorage(key: string): any {
    const item = localStorage.getItem(key);
    if (key === 'profile' && item != null) return JSON.parse(item);
    return item;
  }
}
