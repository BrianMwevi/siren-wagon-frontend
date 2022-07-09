import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = {
    username: '',
    email: '',
    phone: '',
    password: '',
  };
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    if (form.valid) {
      form.value.phone = form.value.phone.e164Number;
      this._authService
        .signupUser(form.value)
        .then((user) => {
          this._authService.logMessage(
            'Account created successfully',
            'alert-success'
          );
        })
        .catch((error) => {
          this._authService.logMessage(
            'Signup unsuccessful, please try again',
            'alert-danger',
            5000
          );
        });
    }
  }
}
