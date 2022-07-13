import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user!: User;
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    const user = this._auth.getLocalStorage('user');
    if (user == null) {
      this.user = null;
    } else {
      this.user = user;
    }
  }
}
