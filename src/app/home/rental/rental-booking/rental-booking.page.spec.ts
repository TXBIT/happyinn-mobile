import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalBookingPage } from './rental-booking.page';

describe('RentalBookingPage', () => {
  let component: RentalBookingPage;
  let fixture: ComponentFixture<RentalBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalBookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
