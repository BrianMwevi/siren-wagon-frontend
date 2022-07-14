import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Transaction } from 'src/app/models/Transaction';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {
  @Output() transaction: EventEmitter<Transaction> = new EventEmitter();
  amount: number;
  receiver: number;
  constructor(
    private _auth: AuthService,
    private uiLoader: NgxUiLoaderService
  ) {}

  ngOnInit() {}
  onSubmit(): void {
    const accountLength = `${this.receiver}`.length;
    if (this.amount < 5)
      return this._auth.logMessage(
        'You can transact ksh 5 minimun',
        'alert-danger'
      );
    if (accountLength < 12)
      return this._auth.logMessage(
        'Please enter a valid account number',
        'alert-danger'
      );
    this.uiLoader.start();
    this._auth
      .pay({
        amount: this.amount,
        receiver: this.receiver,
        transaction_type: 'transfer',
      })
      .then((transaction) => {
        this.amount = null;
        this.receiver = null;
        this.transaction.emit(transaction);
        this._auth.logMessage(
          'Pin request has been initiated to your phone number',
          'alert-success'
        );
      })
      .catch((errors) => {
        for (const key in errors.error) {
          for (let keyValue of errors.error[key]) {
            this._auth.logMessage(keyValue, 'alert-danger', 8000);
          }
        }
      });
  }
}
