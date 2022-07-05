import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AmbulancesComponent } from './components/ambulances/ambulances.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileComponent,
    NavComponent,
    HomeComponent,
    PackagesComponent,
    AmbulancesComponent,
    PaymentsComponent,
    AuthComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
