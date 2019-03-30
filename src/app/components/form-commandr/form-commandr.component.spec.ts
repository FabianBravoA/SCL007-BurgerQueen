import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommandrComponent } from './form-commandr.component';

describe('FormCommandrComponent', () => {
  let component: FormCommandrComponent;
  let fixture: ComponentFixture<FormCommandrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCommandrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommandrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
