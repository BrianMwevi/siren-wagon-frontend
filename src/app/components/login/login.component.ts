import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {
    email: '',
    password: '',
  };
  constructor(
    private _authService: AuthService,
    private ngxService: NgxUiLoaderService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    if (form.valid) {
      this.ngxService.start();
      this._authService
        .loginUser(form.value)
        .then((token) => {
          const userId = this._authService.setToken(token);
          this._authService.getUser(userId).then((user) => {
            this._authService.setLocalStorage('user', user);
            this._authService.logMessage(
              'Logged in successfully',
              'alert-success'
            );
            if (user.user_type !== null) {
              this.profileService
                .getProfile(user.profile_id, user.user_type)
                .then((profile) => {
                  this._authService.setLocalStorage('profile', profile);
                  this.router.navigate(['profile/select']);
                });
            } else {
              this.router.navigate(['profile/select']);
            }
          });
          form.resetForm();
        })
        .catch((error) => {
          this._authService.logMessage(
            'Wrong credentials, please try again',
            'alert-danger'
          );
        });
    }
  }
}
