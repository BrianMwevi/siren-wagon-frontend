import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-profile',
  templateUrl: './choose-profile.component.html',
  styleUrls: ['./choose-profile.component.css'],
})
export class ChooseProfileComponent implements OnInit {
  user: User;
  constructor(private _auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.user = this._auth.getLocalStorage('user');
  }

  onSelect(user_type: string) {
    this.route.navigate([`profile/${user_type}/create/`]);
  }
}
