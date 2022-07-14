import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user!: any;
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this._auth.user.subscribe((user) => (this.user = user));
    // if (user == null) {
    //   this.user = null;
    // } else {
    //   this.user = user;
    // }
  }
  profile(): void {
    this.router.navigate([`profile/select`]);
  }
}
