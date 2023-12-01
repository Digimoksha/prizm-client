import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { LoginComponent } from './auth/login/login.component';
import { GstInputComponent } from './auth/gst-input/gst-input.component';
import { SignupBusinessDetailsComponent } from './auth/seller/signup-business-details/signup-business-details.component';
import { BankDetailsComponent } from './auth/seller/bank-details/bank-details.component';

const routes: Routes = [
  {path:'',redirectTo: '', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'otp-verification', component: OtpVerificationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'gst-input', component: GstInputComponent},
  {path: 'seller-business-details', component: SignupBusinessDetailsComponent},
  {path: 'seller-bank-details', component: BankDetailsComponent}
  // {path: 'country-map', component: CountryMapChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
