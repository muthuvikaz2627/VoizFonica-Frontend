import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgotpass/forgotpass.component';
import { PlanComponent } from './plan/plan.component';
import { PaymentComponent } from './pay/pay.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { OtpComponent } from './otp/otp.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OnoffComponent } from './onoff/onoff.component';


const routes: Routes = [
{path: '', component: WelcomeComponent},
{path: 'home', component: HomeComponent},
{path: 'aboutus', component: AboutusComponent},
{path: 'contact', component: ContactComponent},
{path: 'onoff', component: OnoffComponent},
{path: 'login', component: LoginComponent},
{path: 'payment', component: PaymentComponent},
{path: 'prepaid', component: PrepaidComponent},
{path: 'postpaid', component: PostpaidComponent},
{path: 'dongle', component: DongleComponent},
{path: 'forgotpass', component: ForgotPassComponent},
{path: 'register', component: RegisterComponent},
{path: 'plan', component: PlanComponent},
{path: 'dashboard' , component: DashboardComponent},
{path: 'admin' , component: AdminComponent},
{path: 'otp', component:OtpComponent},
{path: 'verify-email', component:VerifyEmailComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '404', component: HomeComponent },
{ path: '**', component: HomeComponent }

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { }
