import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class TripService {
  base_url:string= environment.PROD_URL

  constructor(private http: HttpClient) {}

  getTrip():Observable<any>{
    return this.http.get(`${this.base_url}/trips`)
  }
}
