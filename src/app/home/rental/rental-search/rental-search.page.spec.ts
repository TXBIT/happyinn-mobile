import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalSearchPage } from './rental-search.page';

describe('RentalSearchPage', () => {
  let component: RentalSearchPage;
  let fixture: ComponentFixture<RentalSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
