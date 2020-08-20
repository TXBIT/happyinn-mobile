import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableImageComponent } from './editable-image.component';

describe('EditableImageComponent', () => {
  let component: EditableImageComponent;
  let fixture: ComponentFixture<EditableImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableImageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
