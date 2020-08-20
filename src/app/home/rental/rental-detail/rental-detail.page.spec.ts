import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailPage } from './rental-detail.page';

describe('RentalDetailPage', () => {
  let component: RentalDetailPage;
  let fixture: ComponentFixture<RentalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
