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

  
  public origin: any;
  public destination: any;
  distance: any;




  ngOnInit(): void {
    this.getLocation();
    this.getDirection();
    // this.distance = this.calculateDistance(this.origin, this.destination);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  }
  showPosition = (position: any) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this._auth
      .getHosptitals(position.coords.latitude, position.coords.longitude)
      .then((hospitals) => {
        this.hospitals = hospitals;
        console.log(hospitals);
      });
  };
  getDirection() {
    // -1.3680324416314122, 36.65783621476481;
    this.origin = { lat: -1.3680324416314122, lng: 36.65783621476481 };
    this.destination = { lat: -1.2976391774673923, lng: 36.79759490929005 };

    // Location within a string
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }

  // calculate the distances from point1 to point2
  // calculateDistance(point1: any, point2: any) {
  //   const p1 = new google.maps.LatLng(point1.lat, point1.lng);
  //   const p2 = new google.maps.LatLng(point2.lat, point2.lng);
  //   return (
  //     google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000
  //   ).toFixed(2);
  // }
}
