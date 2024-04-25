import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  username:any;
  user:any;
  constructor(private router:Router){}
  logout(){
   localStorage.removeItem("logedInuser");
   this.router.navigateByUrl('');
  }
  ngOnInit(){
    if(localStorage.getItem("logedInuser")){
    
      this.user=localStorage.getItem("logedInuser");
      this.username=JSON.parse(this.user).username;
    }
    else{
      this.router.navigateByUrl('');
    }
   }
}
