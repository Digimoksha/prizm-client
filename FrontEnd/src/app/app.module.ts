import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
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
import { LoaderComponent } from './shared/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BuyerPaymentsComponent } from './dashboard/buyer-payments/buyer-payments.component';
import { PasswordFormComponent } from './auth/password-form/password-form.component';
import { AuthInterceptor } from './shared/authconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
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
    PasswordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
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
  providers:  [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
