import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/Driver';
import { Profile } from 'src/app/models/Profile';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css'],
})
export class DriverProfileComponent implements OnInit {
  profile: Driver;

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this.profile = this._auth.getLocalStorage('profile');
  }
}
