import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AboutComponent } from './about/about.component';
 
import { AccommodationComponent } from './accommodation/accommodation.component';
import { BookingservicesComponent } from './bookingservices/bookingservices.component';
import { ManagedetailsComponent } from './managedetails/managedetails.component';
import { SuccessComponent } from './success/success.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'booking',component:BookingservicesComponent},
      {path:'aboutttd',component:AboutComponent},
      {path:'manage',component:ManagedetailsComponent},
      {path:'success',component:SuccessComponent},
      {path:'',component:LogoutComponent},
    ]
  },
  
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'aboutttd',component:AboutComponent},
      
      {path:'booking',component:BookingservicesComponent},
      {path:'accommodations',component: AccommodationComponent},
      {path:'manage',component:ManagedetailsComponent},
     
      {path:'',component:LogoutComponent},
    ]
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
