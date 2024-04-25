import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  constructor(private router: Router) {}

  submitForm(): void {
  
    const inputs = document.querySelectorAll('.form-control');
    let isValid = true;

    
    inputs.forEach(input => {
      if ((input as HTMLInputElement).value.trim() === '') {
        isValid = false;
        return;
      }
    });

  
    if (!isValid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all fields!',
      });
    } else {
      
      Swal.fire({
        title: 'Success!',
        text: 'Booking successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
    
        this.router.navigateByUrl("admin/home");
      });
    }
  }
}
