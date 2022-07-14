import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { Profile } from '../models/Profile';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  public redirectUrl: string = '';

  private initialUser: any = null;
  private userSource: BehaviorSubject<User> = new BehaviorSubject(
    this.initialUser
  );

  public user = this.userSource.asObservable();
  private url = `${environment.PROD_URL}`;

  constructor(
    private http: HttpClient,
    private handleErrors: ErrorHandlerService,
    private flashMessage: FlashMessagesService,
    private ngxService: NgxUiLoaderService
  ) {
    this.userSource.next(this.getLocalStorage('user'));
  }

  async signupUser(user: User) {
    const value = this.http.post<User>(`${this.url}/users/register/`, user);
    return await lastValueFrom(value);
  }

  async loginUser(user: User) {
    const value = this.http.post<any>(`${this.url}/users/login/`, user);
    return await lastValueFrom(value);
  }
  async getUser(id: string) {
    const user = this.http.get<any>(`${this.url}/users/${id}`);
    return await lastValueFrom(user);
  }

  updateUser(user: User) {
    this.userSource.next(user);
  }

  async getProfile(id: number) {
    const resp = this.http.get<Profile>(`${this.url}/profile/${id}`);
    return await lastValueFrom(resp).then((profile) =>
      this.setLocalStorage('profile', profile)
    );
  }
  async getTransactions() {
    const resp = this.http.get(`${this.url}/transactions`);
    return await lastValueFrom(resp);
  }
  async pay(value: Transaction) {
    const resp = this.http.post<Transaction>(
      `${this.url}/transactions/`,
      value
    );
    return await lastValueFrom(resp);
  }

  refreshToken(): Observable<any> {
    const token = this.getLocalStorage('refreshToken');
    return this.http.post<any>(
      `${this.url}/users/token/refresh/`,
      { refresh: token },
      this.httpOptions
    );
  }

  logout(user: any) {
    this.removeLocalStorage();
    this.userSource.next(this.initialUser);
    return this.user.subscribe();
  }

  // logout(user: User) {
  //   return this.http.post<User>(`${this.url}/users/logout/`, user).pipe(
  //     map((resp) => {
  //       this.removeLocalStorage();
  //       this.profileSource.next(this.initialUser);
  //       return this.profile.subscribe();
  //     })
  //   );
  // }

  setToken(token: any) {
    this.setLocalStorage('accessToken', token.access);
    this.setLocalStorage('refreshToken', token.refresh);

    // decode the token to read the user_id and expiration timestamp
    const accessTokenParts = token.access.split('.');
    const refreshTokenParts = token.refresh.split('.');
    const accessToken = JSON.parse(window.atob(accessTokenParts[1]));
    const refreshToken = JSON.parse(window.atob(refreshTokenParts[1]));

    this.setLocalStorage('accessExpiry', new Date(accessToken.exp * 1000));
    this.setLocalStorage('refreshExpiry', new Date(refreshToken.exp * 1000));
    return this.setLocalStorage(
      'userId',
      JSON.parse(window.atob(accessTokenParts[1])).user_id
    );
  }

  // updateProfile(profileId: number, profile: any): Observable<any> {
  //   return this.http.put(`${this.url}/profile/${profileId}/`, profile);
  // }
  // updateUser(userId: number, user: any): Observable<User> {
  //   return this.http.put<User>(`${this.url}/profile/user/${userId}/`, user);
  // }

  setLocalStorage(key: string, value: any) {
    if (key === 'profile' || key === 'user') value = JSON.stringify(value);
    localStorage.setItem(key, value);
    return this.getLocalStorage(key);
  }

  removeLocalStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('profile');
    localStorage.removeItem('userId');
    localStorage.removeItem('accessExpiry');
    localStorage.removeItem('refreshExpiry');
    localStorage.removeItem('user');
    return this.getLocalStorage('accessToken');
  }
  getLocalStorage(key: string): any {
    const item = localStorage.getItem(key);
    if (key === 'profile' && item != null) return JSON.parse(item);
    if (key === 'user' && item != null) return JSON.parse(item);
    return item;
  }

  logMessage = (message: string, messageType: string, time = 5000) => {
    this.ngxService.stopAll();
    this.flashMessage.show(message, {
      cssClass: messageType,
      timeout: time,
    });
  };

  processErrors(errors: any) {
    for (const error in errors) {
      for (let message of errors[error]) {
        this.logMessage(message, 'alert-danger', 8000);
      }
    }
  }
}
