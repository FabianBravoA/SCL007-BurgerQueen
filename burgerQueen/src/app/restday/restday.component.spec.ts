import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestdayComponent } from './restday.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RestdayComponent', () => {
  let component: RestdayComponent;
  let fixture: ComponentFixture<RestdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestdayComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
