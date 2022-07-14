import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MapsService } from 'src/app/services/maps.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map-btn',
  templateUrl: './map-btn.component.html',
  styleUrls: ['./map-btn.component.css'],
})
export class MapBtnComponent implements OnInit {
  constructor(
    private uILoader: NgxUiLoaderService,
    private _auth: AuthService,
    private mapService: MapsService,
    private router: Router
  ) {}

  public origin: any;
  public destination: any;
  distance: any;

  ngOnInit(): void {}

  requestAmbulance(): void {
    this.mapService.getUserLocation();
    this.router.navigate(['maps/']);
  }
}
