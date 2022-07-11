import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private map:MapsService) {}

  lat: string = '';
  lng: string = '';
  location: object;
  title: string = '';
  region: string = '';

  ngOnInit(): void {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.title = data.country_name;
    })
  }

}
