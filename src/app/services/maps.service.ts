import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location{
  latitude: string;
  longitude: string;
  country_name: string;
  region_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/196.202.189.64?access_key=f423e44c405db71d0debe874a1b21f1a'
  )}
}
