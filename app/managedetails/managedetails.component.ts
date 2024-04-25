import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../services/accommodation.service';

@Component({
  selector: 'app-managedetails',
  templateUrl: './managedetails.component.html',
  styleUrls: ['./managedetails.component.css']
})
export class ManagedetailsComponent implements OnInit {
  products: any[] = [];

  constructor(private accommodationService: AccommodationService) { }

  ngOnInit(){
    this.accommodationService.getproducts().subscribe((result) => {  
      this.products = result;
    });
  }

  deleteProduct(p: any){
    this.accommodationService.deleteproduct(p);
    alert("Product Deleted Successfully");
    this.refreshProducts();
  }

  toSave(p: any){
    p.productEdit = false;
    this.accommodationService.updateProduct(p);
    alert("Product Updated Successfully");
    this.refreshProducts();
  }

  toUpdate(p: any){
    p.productEdit = true;
  }

  private refreshProducts() {
    this.accommodationService.getproducts().subscribe((result) => {  
      this.products = result;
    });
  }
}
