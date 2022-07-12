import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ProfileService } from 'src/app/services/profile.service';
=======
import { AuthService } from 'src/app/services/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Profile } from 'src/app/models/Profile';
>>>>>>> 8b8f7afcc7f4aeaa00abc85ceb257a4a78fc7d9a

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
<<<<<<< HEAD
  profile: any = [];
  constructor(private profileservice: ProfileService) {}

  ngOnInit(): void {
    this.allprofile();
  }
  allprofile(): void {
    this.profileservice.getprofile().subscribe((data) => {
      this.profile = data;
      console.log(this.profile);
=======
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
>>>>>>> 8b8f7afcc7f4aeaa00abc85ceb257a4a78fc7d9a
    });
  }
}
