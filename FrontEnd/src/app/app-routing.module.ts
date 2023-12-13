import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { LoginComponent } from './auth/login/login.component';
import { GstInputComponent } from './auth/gst-input/gst-input.component';
import { SignupBusinessDetailsComponent } from './auth/seller/signup-business-details/signup-business-details.component';
import { BankDetailsComponent } from './auth/seller/bank-details/bank-details.component';
import { BuyerSocietyDetailsComponent } from './auth/buyer/buyer-society-details/buyer-society-details.component';
import { BuyerUserAdditionComponent } from './auth/buyer/buyer-user-addition/buyer-user-addition.component';
import { BuyerDashboardComponent } from './dashboard/buyer-dashboard/buyer-dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BuyerRfqListComponent } from './dashboard/buyer-rfq-list/buyer-rfq-list.component';
import { BuyerRfqCreationComponent } from './dashboard/buyer-rfq-creation/buyer-rfq-creation.component';
import { BuyerRfqDetailComponent } from './dashboard/buyer-rfq-detail/buyer-rfq-detail.component';

const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'otp-verification/:memberId', component: OtpVerificationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'gst-input', component: GstInputComponent},
  {path: 'seller-business-details', component: SignupBusinessDetailsComponent},
  {path: 'seller-bank-details', component: BankDetailsComponent},
  {path: 'society-details', component: BuyerSocietyDetailsComponent},
  {path: 'user-addition', component: BuyerUserAdditionComponent},
  {path: 'buyer-dashboard', component: BuyerDashboardComponent},
   {path: 'navbar', component: NavbarComponent},
   {path: 'buyer-rfq-list', component: BuyerRfqListComponent},
   {path: 'buyer-create-rfq', component: BuyerRfqCreationComponent},
   {path: 'buyer-rfq-detail', component: BuyerRfqDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
