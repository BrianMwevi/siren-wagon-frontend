import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
url =environment.PRO_URL 
  constructor(private http :HttpClient      
  ) { 
      }
  getprofile():Observable<any>{
    return this.http.get(`${this.url}/profile/14`)
     
  }}
