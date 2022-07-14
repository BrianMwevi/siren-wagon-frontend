import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-map-tracker',
  templateUrl: './map-tracker.component.html',
  styleUrls: ['./map-tracker.component.css'],
})
export class MapTrackerComponent implements OnInit {
  constructor(private _auth: AuthService) {}
  title = 'My first AGM project';
  // lat = 51.678418;
  lat = -1.2981171757278525;
  // lng = 7.809007;
  lng = 36.78164561105191;
  latitude: string;
  longitude: string;
  hospitals: any[];

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  }
  showPosition = (position) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this._auth
      .getHosptitals(position.coords.latitude, position.coords.longitude)
      .then((hospitals) => {
        this.hospitals = hospitals;
        console.log(hospitals);
      });
  };
}
