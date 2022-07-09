import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-tracker',
  templateUrl: './map-tracker.component.html',
  styleUrls: ['./map-tracker.component.css'],
})
export class MapTrackerComponent implements OnInit {
  constructor() {}
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  ngOnInit(): void {}
}
