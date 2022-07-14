import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Driver } from '../../models/Driver';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
@Component({
  selector: 'app-driver-signup',
  templateUrl: './driver-signup.component.html',
  styleUrls: ['./driver-signup.component.css'],
})
export class DriverSignupComponent implements OnInit {
  driver: Driver = {
    id_number: '',
    driving_license: '',
  };
  upated: boolean = false;
  constructor(
    private profileService: ProfileService,
    private _auth: AuthService,
    private ngXLoader: NgxUiLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.ngXLoader.start();
      this.profileService
        .createProfile(form.value, 'driver')
        .then((profile) => {
          // thi
          this._auth.logMessage(
            'Profile updated successfully',
            'alert-success'
          );
          this._auth.setLocalStorage('profile', profile);
          this._auth.setLocalStorage('user', profile.user);
          this.router.navigate([`profile/${profile.user.user_type}`]);
        })
        .catch((errors) => {
          for (const key in errors.error) {
            for (let keyValue of errors.error[key]) {
              this._auth.logMessage(keyValue, 'alert-danger', 8000)
            }
          }
        });
    }
  }
}
