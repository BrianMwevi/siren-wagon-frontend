import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {
    email: 'james@gmail.com',
    password: 'pass11234',
  };
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.onLogin();
  }

  onLogin() {
    this._authService.loginUser(this.user).subscribe((user) => {
      console.log(user);
    });
  }
}
