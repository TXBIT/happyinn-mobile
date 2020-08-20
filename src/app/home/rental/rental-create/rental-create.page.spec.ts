import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCreatePage } from './rental-create.page';

describe('RentalCreatePage', () => {
  let component: RentalCreatePage;
  let fixture: ComponentFixture<RentalCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
