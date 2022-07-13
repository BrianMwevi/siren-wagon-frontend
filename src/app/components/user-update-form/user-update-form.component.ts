import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Profile } from 'src/app/models/Profile';
import { NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.css'],
})
export class UserUpdateFormComponent implements OnInit {
  @Input() profile!: any;
  updated: boolean = false;

  constructor(
    private profileService: ProfileService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.profile = this._auth.getLocalStorage('profile');
  }

  onProfileUpdate(form: NgForm) {
    if (form.valid) {
      this.profileService
        .updateProfile(form.value, 'user', this.profile.user.id)
        .then((user) => {
          this._auth.logMessage(
            'Profile updated successfully',
            'alert-success'
          );
          this.profile.user = user;
          this.updated = true;
          this._auth.setLocalStorage('user', user);
          const profile = this._auth.getLocalStorage('profile');
          profile.user = user;
          this._auth.setLocalStorage('profile', profile);
        })
        .catch((errors) => {
          for (const key in errors.error) {
            for (let keyValue of errors.error[key]) {
              this._auth.logMessage(keyValue, 'alert-danger', 8000);
            }
          }
        });
    }
  }
}
