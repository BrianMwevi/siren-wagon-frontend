import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Profile } from 'src/app/models/Profile';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  transactions: any;
  constructor(
    private _authService: AuthService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.profile = this._authService.getLocalStorage('profile');
    this._authService.getTransactions().then((transactions) => {
      this.transactions = transactions;
      console.log('transactions: ', transactions);
    });
  }

  newTransaction(transaction: Transaction) {
    this.transactions.unshift(transaction);
  }
  // getProfile() {
  //   const userId = this._authService.getLocalStorage('userId');
  //   this.ngxService.start();
  //   this._authService.getProfile(userId).then((profile) => {
  //     this.ngxService.stop();
  //     this.profile = profile;
  //   });
  // }
}
