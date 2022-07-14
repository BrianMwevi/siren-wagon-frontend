import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmit(form: NgForm): void {
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
    form.value.transaction_type = 'transfer';
    this._auth
      .pay(form.value)
      .then((transaction) => {
        form.onReset();
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
