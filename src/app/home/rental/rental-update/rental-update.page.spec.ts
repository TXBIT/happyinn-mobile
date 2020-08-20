import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalUpdatePage } from './rental-update.page';

describe('RentalUpdatePage', () => {
  let component: RentalUpdatePage;
  let fixture: ComponentFixture<RentalUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalUpdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
