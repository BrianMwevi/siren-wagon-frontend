import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  placeholder:string="254712345678"
  user: User = {
    username: '',
    email: '',
    phone: '',
    password: '',
  };
  // separateDialCode = true;
  // SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  // customPlaceholder = customPlaceholder;
  // preferredCountries: CountryISO[] = [
  //   CountryISO.UnitedStates,
  //   CountryISO.UnitedKingdom,
  // ];

  constructor(
    private _authService: AuthService,
    private ngxService: NgxUiLoaderService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    if (form.valid) {
      this.ngxService.start();
      form.value.phone = form.value.phone.e164Number.slice(1);
      this._authService
        .signupUser(form.value)
        .then((user) => {
          this._authService.logMessage(
            'Account created successfully',
            'alert-success'
          );
          form.resetForm();
          this.route.navigate(['/login']);
        })
        .catch((error) => {
          this.processErrors(form, error.error);
        });
    }
  }

  processErrors(form: NgForm, errors: any) {
    this.ngxService.stopAll();
    for (const error in errors) {
      for (let _ of errors[error]) {
        form.form.controls[error].setErrors({ exists: true });
      }
    }
  }
}
