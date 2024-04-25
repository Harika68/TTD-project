import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  username:any;
  user:any;
  constructor(private router:Router){}
  logout(){
   localStorage.removeItem("logedInuser");
   this.router.navigateByUrl('');
  }
  ngOnInit(){
   if(localStorage.getItem("logedInuser")){
     this.username
     this.user=localStorage.getItem("logedInuser");
     this.username=JSON.parse(this.user).username;
   }
   else{
     this.router.navigateByUrl('');
   }
  }

}
