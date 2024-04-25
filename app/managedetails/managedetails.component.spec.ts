import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedetailsComponent } from './managedetails.component';

describe('ManagedetailsComponent', () => {
  let component: ManagedetailsComponent;
  let fixture: ComponentFixture<ManagedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
