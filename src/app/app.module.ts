import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProfileComponent } from './components/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
=======
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LandingComponent } from './components/landing/landing.component';
>>>>>>> dda68e9c92e8e5efc1cc22e43b0be96ee5d66b77
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AmbulancesComponent } from './components/ambulances/ambulances.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { AuthComponent } from './components/auth/auth.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
