import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AppRoutingModule } from './app-routing.module';
// import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig,
  NgxUiLoaderRouterModule,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from 'ngx-ui-loader';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { RequestsInterceptor } from './interceptors/requests.interceptor';
import { PaymentsFormComponent } from './components/payments-form/payments-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AmbulanceformComponent } from './components/ambulanceform/ambulanceform.component';
import { NewlandingComponent } from './components/newlanding/newlanding.component';
import { DriverProfileComponent } from './components/driver-profile/driver-profile.component';
import { UserUpdateFormComponent } from './components/user-update-form/user-update-form.component';
import { PatientProfileDetailComponent } from './components/patient-profile-detail/patient-profile-detail.component';
import { ChooseProfileComponent } from './components/choose-profile/choose-profile.component';
import { DriverSignupComponent } from './components/driver-signup/driver-signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { ProfileService } from './services/profile.service';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'green',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.threeStrings, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 2, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    ProfileComponent,
    HomeComponent,
    PackagesComponent,
    PaymentsComponent,
    SignupComponent,
    LoginComponent,
    PaymentsFormComponent,
  
    AmbulanceformComponent,
    NewlandingComponent,
    DriverProfileComponent,
    UserUpdateFormComponent,
    PatientProfileDetailComponent,
    ChooseProfileComponent,
    DriverSignupComponent,
    LogoutComponent,
    NavbarComponent,
    UserComponent,
    PatientSignupComponent,
    TransactionComponent,
    TransactionFormComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FlashMessagesModule.forRoot(),
    // Import NgxUiLoaderModule with custom configuration globally
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

    // Import NgxUiLoaderModule
    // NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    // NgxUiLoaderHttpModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'f423e44c405db71d0debe874a1b21f1a',
    // }),
    AppRoutingModule,
  ],

  providers: [
    AuthService,
    ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
