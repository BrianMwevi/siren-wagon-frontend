import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  constructor(
    private _authService: AuthService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    if (this._authService.getLocalStorage('profile') == null) {
      this.getProfile();
    }
  }

  getProfile() {
    const userId = this._authService.getLocalStorage('userId');
    this.ngxService.start();
    this._authService.getProfile(userId).then((profile) => {
      this.ngxService.stop();
      this.profile = profile;
    });
  }
}
