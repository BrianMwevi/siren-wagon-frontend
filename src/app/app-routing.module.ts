import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AmbulancesComponent } from './components/ambulances/ambulances.component';
import { PaymentsComponent } from './components/payments/payments.component';
import{LandingComponent} from './landing/landing.component'



  const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '', component: HomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'ambulances', component: AmbulancesComponent },
  { path:'payments', component: PaymentsComponent },
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
