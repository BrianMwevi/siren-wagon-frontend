import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

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
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    if (form.valid) {
      this.ngxService.start();
      this._authService
        .loginUser(form.value)
        .then((token) => {
          this.updateLocalStorage(token);
          this._authService.logMessage(
            'Logged in successfully',
            'alert-success'
          );
          form.reset();

          return this.router.navigate(['/']);
        })
        .catch((error) => {
          console.log(error.message);
          this._authService.logMessage(
            'Wrong credentials, please try again',
            'alert-danger'
          );
        });
    }
  }
  updateLocalStorage(token: string) {
    const user_id = this._authService.setToken(token);
    this._authService.getProfile(user_id).subscribe();
  }
}