import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WaiterComponent } from './breakfastwaiter.component';

describe('WaiterComponent', () => {
  let component: WaiterComponent;
  let fixture: ComponentFixture<WaiterComponent>;
  let input: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WaiterComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show name client', () => {
    fixture = TestBed.createComponent(WaiterComponent);
    component = fixture.componentInstance;
    input = fixture.nativeElement.querySelector('input');
  });
});
