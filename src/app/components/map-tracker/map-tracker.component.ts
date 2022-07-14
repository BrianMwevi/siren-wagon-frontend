import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-map-tracker',
  templateUrl: './map-tracker.component.html',
  styleUrls: ['./map-tracker.component.css'],
})
export class MapTrackerComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  hospital: any;
  // hospitalLatitude: number;
  // hospitalLongtitude: number;
  start_end_mark = [];

  latlng = [
    [7.809007, 51.678418],
    [this.lat, this.lng],
  ];
  constructor(private map: MapsService) {}

  ngOnInit(): void {}

  getPosition = (position: any) => {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    this.start_end_mark.push(this.latlng);

    this.map
      .getHosptitals(position.coords.latitude, position.coords.longitude)
      .subscribe((data) => {
        this.hospital = data;
      });
  };

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
  }
}
