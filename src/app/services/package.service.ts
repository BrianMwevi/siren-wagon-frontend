import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PackageService {

  url = environment.PROD_URL
 
  constructor(private http : HttpClient) { }

  getPackages(): Observable <any>{
    return this.http.get(`${this.url}/packages`)
  }


  
}
