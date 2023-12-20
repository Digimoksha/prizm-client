import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { LoginComponent } from './auth/login/login.component';
import { GstInputComponent } from './auth/gst-input/gst-input.component';
import { SignupBusinessDetailsComponent } from './auth/seller/signup-business-details/signup-business-details.component';
import { BankDetailsComponent } from './auth/seller/bank-details/bank-details.component';
import { BuyerSocietyDetailsComponent } from './auth/buyer/buyer-society-details/buyer-society-details.component';
import { BuyerUserAdditionComponent } from './auth/buyer/buyer-user-addition/buyer-user-addition.component';
import { SellerDashboardComponent } from './dashboard/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './dashboard/buyer-dashboard/buyer-dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BuyerRfqListComponent } from './dashboard/buyer-rfq-list/buyer-rfq-list.component';
import { BuyerRfqCreationComponent } from './dashboard/buyer-rfq-creation/buyer-rfq-creation.component';
import { BuyerRfqDetailComponent } from './dashboard/buyer-rfq-detail/buyer-rfq-detail.component';
import { BuyerPaymentsComponent } from './dashboard/buyer-payments/buyer-payments.component';
import { PasswordFormComponent } from './auth/password-form/password-form.component';
import { PurchaseOrdersDetailComponent } from './RFQ/purchase-orders-detail/purchase-orders-detail.component';
import { PurchaseOrderStatusComponent } from './RFQ/purchase-order-status/purchase-order-status.component';
import { SideNavComponent } from './admin-buyer/side-nav/side-nav.component';
import { UsersListComponent } from './admin-buyer/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    OtpVerificationComponent,
    LoginComponent,
    GstInputComponent,
    SignupBusinessDetailsComponent,
    BankDetailsComponent,
    BuyerSocietyDetailsComponent,
    BuyerUserAdditionComponent,
    SellerDashboardComponent,
    BuyerDashboardComponent,
    NavbarComponent,
    BuyerRfqListComponent,
    BuyerRfqCreationComponent,
    BuyerRfqDetailComponent,
    BuyerPaymentsComponent,
    PasswordFormComponent,
    PurchaseOrdersDetailComponent,
    PurchaseOrderStatusComponent,
    SideNavComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    CurrencyPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
