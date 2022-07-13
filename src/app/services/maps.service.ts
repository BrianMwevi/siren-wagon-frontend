import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {


  url ='hospitalurl'

  constructor(private http:HttpClient) { }


  getHosptitals(lat:string, long:string):Observable<any>{
    return this.http.get(`${this.url}?lat=${lat}&long=${long}`)
  }
}
