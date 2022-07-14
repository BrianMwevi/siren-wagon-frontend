import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url: string = environment.PROD_URL;
  constructor(
    private http: HttpClient,
    private handleErrors: ErrorHandlerService
  ) {}

  async getProfile(id: string, instance: string): Promise<any> {
    const profile = this.http.get(`${this.url}/${instance}s/${id}`);
    return lastValueFrom(profile);
  }
  async createProfile(data: any, instance: string): Promise<any> {
    const profile = this.http.post(`${this.url}/${instance}s/`, data);
    return lastValueFrom(profile);
  }
  async updateProfile(data: any, instance: string, id: string): Promise<any> {
    const profile = this.http.patch(`${this.url}/${instance}s/${id}/`, data);
    return lastValueFrom(profile);
  }
}
