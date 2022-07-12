import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any = [];
  constructor(private profileservice: ProfileService) {}

  ngOnInit(): void {
    this.allprofile();
  }
  allprofile(): void {
    this.profileservice.getprofile().subscribe((data) => {
      this.profile = data;
      console.log(this.profile);
    });
  }
}
