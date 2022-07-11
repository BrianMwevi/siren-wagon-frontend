import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AppRoutingModule } from './app-routing.module';
// import { AgmCoreModule } from '@agm/core';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  NgxUiLoaderRouterModule,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from 'ngx-ui-loader';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AmbulancesComponent } from './components/ambulances/ambulances.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { RequestsInterceptor } from './interceptors/requests.interceptor';
import { PaymentsFormComponent } from './components/payments-form/payments-form.component';

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
    AmbulancesComponent,
    PaymentsComponent,
    SignupComponent,
    LoginComponent,
    PaymentsFormComponent,
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
  ],

  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
