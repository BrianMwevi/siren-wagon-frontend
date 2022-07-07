import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = {
    username: 'james',
    email: 'james@gmail.com',
    phone: '5634634',
    password: 'pass11234',
  };
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.onSignup();
  }

  onSignup() {
    this._authService.signupUser(this.user).subscribe((user) => {
      console.log(user);
    });
  }
}
