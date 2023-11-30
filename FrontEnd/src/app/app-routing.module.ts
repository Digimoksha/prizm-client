import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { LoginComponent } from './auth/login/login.component';
import { GstInputComponent } from './auth/gst-input/gst-input.component';

const routes: Routes = [
  {path:'',redirectTo: '', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'otp-verification', component: OtpVerificationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'gst-input', component: GstInputComponent}
  // {path: 'country-map', component: CountryMapChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
