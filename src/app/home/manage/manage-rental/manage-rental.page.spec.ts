import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRentalPage } from './manage-rental.page';

describe('ManageRentalPage', () => {
  let component: ManageRentalPage;
  let fixture: ComponentFixture<ManageRentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
