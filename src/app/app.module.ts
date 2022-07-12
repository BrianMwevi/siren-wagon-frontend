import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AmbulancesComponent } from './components/ambulances/ambulances.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { AuthComponent } from './components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { UserComponent } from './c/user/user.component';

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
    AuthComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
  }),
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
