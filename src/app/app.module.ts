import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NewcardComponent } from './newcard/newcard.component';



import { FormsModule } from '@angular/forms';

//other
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './shared/user.service';

//routes

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BillingComponent,
    SignUpComponent,
    LoginComponent,
    NewcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
