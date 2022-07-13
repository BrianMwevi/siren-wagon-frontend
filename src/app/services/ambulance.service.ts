import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Ambulances } from '../model/ambulances';

@Injectable({
  providedIn: 'root',
})
export class AmbulanceService {
  constructor(private http: HttpClient) {}

  fetchAmbulances() {
    return this.http
      .get<{ [key: string]: Ambulances }>(
        'https://siren-wagon.herokuapp.com/api/ambulances.json'
      )
      .pipe(
        map((res) => {
          const ambulances = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              ambulances.push({ ...res[key], id: key });
            }
          }
          return ambulances;
        })
      )
  }
}
