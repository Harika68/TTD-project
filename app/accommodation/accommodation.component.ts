// accommodation.component.ts
import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../services/accommodation.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent implements OnInit {
  product: any[] = [];  

  constructor(private service: AccommodationService,private router:Router) { }

  ngOnInit(): void {
 
    this.fetchProducts();
  }

  fetchProducts(): void {
 
    this.service.getproducts().subscribe((result) => {
        this.product =result;  
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  bookForm(){
    
    this.router.navigateByUrl("/user/success") 
  }
  }

