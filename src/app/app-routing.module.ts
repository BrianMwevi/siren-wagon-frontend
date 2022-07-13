import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AmbulancesComponent } from './components/ambulances/ambulances.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AmbulanceformComponent } from './components/ambulanceform/ambulanceform.component';

import { AuthGuard } from './guards/auth.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
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

  { path: 'createamb', component:AmbulanceformComponent},
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
