import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlanComponent } from './plan/plan.component';
import { PaymentComponent } from './pay/pay.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { ForgotPassComponent } from './forgotpass/forgotpass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtpComponent } from './otp/otp.component';
import { AdminComponent } from './admin/admin.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {NgOtpInputModule} from 'ng-otp-input';
import { WelcomeComponent } from './welcome/welcome.component';
import { OnoffComponent } from './onoff/onoff.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PlanComponent,
    PaymentComponent,
    ContactComponent,
    AboutusComponent,
    FooterComponent,
    HeaderComponent,
    PrepaidComponent,
    PostpaidComponent,
    DongleComponent,
    ForgotPassComponent,
    DashboardComponent,
    OtpComponent,
    AdminComponent,
    VerifyEmailComponent,
    OnoffComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOtpInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
