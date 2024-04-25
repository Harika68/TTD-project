import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingservicesComponent } from './bookingservices.component';

describe('BookingservicesComponent', () => {
  let component: BookingservicesComponent;
  let fixture: ComponentFixture<BookingservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
