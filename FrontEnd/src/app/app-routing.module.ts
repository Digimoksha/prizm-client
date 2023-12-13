import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LogoutComponent } from './auth/logout/logout.component';
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
import { BuyerPaymentsComponent } from './dashboard/buyer-payments/buyer-payments.component';
import { PasswordFormComponent } from './auth/password-form/password-form.component';
import { AuthGuard } from "./shared/auth.guard";
import { BuyerGuard } from './shared/buyer.guard';

const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'otp-verification/:memberId', component: OtpVerificationComponent},
  {path: 'password-form/:memberId', component: PasswordFormComponent},
  {path: 'login', component: LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path: 'gst-input', component: GstInputComponent},
  {path: 'seller-business-details/:memberId', component: SignupBusinessDetailsComponent},
  {path: 'seller-bank-details', component: BankDetailsComponent},
  {path: 'society-details/:memberId', component: BuyerSocietyDetailsComponent, canActivate: [AuthGuard,BuyerGuard]},
  {path: 'user-addition', component: BuyerUserAdditionComponent},
  {path: 'buyer-dashboard/:memberId', component: BuyerDashboardComponent, canActivate: [AuthGuard,BuyerGuard]},
   {path: 'navbar', component: NavbarComponent},
   {path: 'buyer-rfq-list', component: BuyerRfqListComponent},
   {path: 'buyer-create-rfq', component: BuyerRfqCreationComponent},
   {path: 'buyer-rfq-detail', component: BuyerRfqDetailComponent},
   {path: 'buyer-payment-detail', component: BuyerPaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
