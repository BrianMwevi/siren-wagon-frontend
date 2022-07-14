import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AmbulanceformComponent } from './components/ambulanceform/ambulanceform.component';
import { NewlandingComponent } from './components/newlanding/newlanding.component';

import { AuthGuard } from './guards/auth.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';
import { DriverProfileComponent } from './components/driver-profile/driver-profile.component';
import { ChooseProfileComponent } from './components/choose-profile/choose-profile.component';
import { DriverSignupComponent } from './components/driver-signup/driver-signup.component';
import { NoProfile } from './guards/no-profile.guard';
import { hasProfile } from './guards/has-profile.guard';
import { IsDriver } from './guards/is-driver.guard';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';
import { MapTrackerComponent } from './components/map-tracker/map-tracker.component';

const routes: Routes = [
  { path: '', component: NewlandingComponent },
  {
    path: 'profile/select',
    component: ChooseProfileComponent,
    canActivate: [AuthGuard, NoProfile],
  },
  {
    path: 'profile/driver',
    component: DriverProfileComponent,
    canActivate: [AuthGuard, hasProfile, IsDriver],
  },
  {
    path: 'profile/driver/create',
    component: DriverSignupComponent,
    canActivate: [AuthGuard, NoProfile],
  },
  {
    path: 'profile/patient/create',
    component: PatientSignupComponent,
    canActivate: [AuthGuard, NoProfile],
  },
  {
    path: 'profile/patient',
    component: ProfileComponent,
    canActivate: [AuthGuard, hasProfile],
  },
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

  { path: 'maps', component: MapTrackerComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
