import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBookingPage } from './manage-booking.page';

describe('ManageBookingPage', () => {
  let component: ManageBookingPage;
  let fixture: ComponentFixture<ManageBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
