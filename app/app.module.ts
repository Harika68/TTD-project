import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingservicesComponent } from './bookingservices/bookingservices.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { SuccessComponent } from './success/success.component';
import { ManagedetailsComponent } from './managedetails/managedetails.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    HomeComponent,
    AboutComponent,
    BookingservicesComponent,
    AccommodationComponent,
    SuccessComponent,
    ManagedetailsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
