import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-newlanding',
  templateUrl: './newlanding.component.html',
  styleUrls: ['./newlanding.component.css']
})
export class NewlandingComponent implements OnInit {
user!:any
  constructor(private _auth:AuthService, private profileService:ProfileService) { }

  ngOnInit(): void {
    this.user = this._auth.getLocalStorage('user')
    if (this.user !== null && this.user.user_type !== null) {
    //  this.profileService.getProfile()
      
    }

    

  }

  

}
