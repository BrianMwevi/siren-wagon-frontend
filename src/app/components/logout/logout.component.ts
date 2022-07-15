import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogout(): void {
    const user = this._auth.getLocalStorage('user');
    this._auth.logout(user);
    this.router.navigate(['/']);
  }
}
