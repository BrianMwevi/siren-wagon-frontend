import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-map-tracker',
  templateUrl: './map-tracker.component.html',
  styleUrls: ['./map-tracker.component.css'],
})
export class MapTrackerComponent implements OnInit {
  constructor(
    private _auth: AuthService,
    private uILoader: NgxUiLoaderService,
    private mapService: MapsService
  ) {}
  hospital: any;
  hospitalsLoaded: boolean = false;
  title = 'Siren Wagon';
  userLat: Number = 0;
  userLong: Number = 0;
  hospitals: any[];

  origin: any = {
    lat: 0,
    lng: 0,
  };
  destination: any = {
    lat: 0,
    lng: 0,
  };

  // lat = 51.678418;
  lat = -1.2981171757278525;
  // lng = 7.809007;
  lng = 36.78164561105191;
  latitude: string;
  longitude: string;

  distance: any;

  ngOnInit(): void {
    // this.getDirection();
    // this.distance = this.calculateDistance(this.origin, this.destination);
    this.getUserCoordinates();
  }

  getUserCoordinates(): void {
    this.mapService.getUserLocation().then((coords: any) => {
      this.origin.lat = this.mapService.coordinates.latitude;
      this.origin.lng = this.mapService.coordinates.longitude;
      this.fetchHospitals(this.origin.lat, this.origin.lng);
    });
  }

  fetchHospitals(lat: number, long: number) {
    this.uILoader.start();
    this.mapService.getHosptitals(lat, long).then((hospitals) => {
      this.hospitals = hospitals;
      this.destination.lat = hospitals[0].latitude;
      this.destination.lng = hospitals[0].longitude;
      this.hospital = hospitals[0];
      this.hospitalsLoaded = true;
      this.uILoader.stop();
      // this.distance = this.calculateDistance(this.origin, this.destination);
    });
  }

  getDirection() {
    // // -1.3680324416314122, 36.65783621476481;
    // this.origin = { lat: -1.3680324416314122, lng: 36.65783621476481 };
    // this.destination = { lat: -1.2976391774673923, lng: 36.79759490929005 };
    // // Location within a string
    // // this.origin = 'Taipei Main Station';
    // // this.destination = 'Taiwan Presidential Office';
  }

  // calculate the distances from point1 to point2
  calculateDistance(point1: any, point2: any) {
    const p1 = new google.maps.LatLng(point1.lat, point1.lng);
    const p2 = new google.maps.LatLng(point2.lat, point2.lng);
    const diff = (
      google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000
    ).toFixed(2);
    console.log(diff);
    return diff;
  }
}
