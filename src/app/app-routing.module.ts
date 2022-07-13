import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AmbulancesComponent } from './components/ambulances/ambulances.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AmbulanceformComponent } from './components/ambulanceform/ambulanceform.component';
import { NewlandingComponent } from './components/newlanding/newlanding.component';

import { AuthGuard } from './guards/auth.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';
import { DriverProfileComponent } from './components/driver-profile/driver-profile.component';
import { ChooseProfileComponent } from './components/choose-profile/choose-profile.component';

const routes: Routes = [
  { path: '', component: NewlandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'profile/driver', component: DriverProfileComponent },
  { path: 'profile/select', component: ChooseProfileComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NotLoggedInGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotLoggedInGuard],
  },

  { path: 'createamb', component: AmbulanceformComponent },
  {
    path: 'packages',
    component: PackagesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'ambulances', component: AmbulancesComponent },
  {
    path: 'payments',
    component: PaymentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
