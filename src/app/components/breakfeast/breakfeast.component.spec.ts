import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfeastComponent } from './breakfeast.component';

describe('BreakfeastComponent', () => {
  let component: BreakfeastComponent;
  let fixture: ComponentFixture<BreakfeastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfeastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
