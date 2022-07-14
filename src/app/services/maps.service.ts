import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  public coordinates: any = {
    latitude: 0,
    longitude: 0,
  };

  private url = `${environment.DEV_URL}`;

  constructor(private http: HttpClient) {
    this.getUserLocation();
  }

  async getHosptitals(lat: number, long: number) {
    const value = this.http.get<any>(
      `${this.url}/google/hospitals?latitude=${lat}&longitude=${long}`
    );
    return await lastValueFrom(value);
  }
  // getHosptitals(lat: string, long: string): Observable<any> {
  //   return this.http.get(`${this.url}?latitude=${lat}&longitude=${long}`);
  // }

  async getUserLocation() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(this.showPosition);
    }
    return this.coordinates;
  }
  showPosition = (position: any) => {
    this.coordinates.latitude = position.coords.latitude;
    this.coordinates.longitude = position.coords.longitude;
    return this.coordinates;
  };
}
