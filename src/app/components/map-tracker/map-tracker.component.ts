import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-tracker',
  templateUrl: './map-tracker.component.html',
  styleUrls: ['./map-tracker.component.css'],
})
export class MapTrackerComponent implements OnInit {
  constructor() {}
  title = 'My first AGM project';
  // lat = 51.678418;
  lat = -1.2981171757278525;
  // lng = 7.809007;
  lng = 36.78164561105191;

  ngOnInit(): void {}
}
