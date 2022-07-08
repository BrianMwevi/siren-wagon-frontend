import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { FlashMessagesService } from 'flash-messages-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

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
  constructor(
    private _authService: AuthService,
    private flashMessage: FlashMessagesService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {}

  onLogin() {
    // this.ngxService.start(([taskId] = 'default'));
    // Do something here...

    this.ngxService.start();
    this._authService.loginUser(this.user).subscribe((data) => {
      this.ngxService.stop();
      this.flashMessage.show('Logged in Successfully!', {
        cssClass: 'alert-success',
        timeout: 3000,
      });
    });
  }
}
