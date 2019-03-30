import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommandbComponent } from './form-commandb.component';

describe('FormCommandbComponent', () => {
  let component: FormCommandbComponent;
  let fixture: ComponentFixture<FormCommandbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCommandbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommandbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
