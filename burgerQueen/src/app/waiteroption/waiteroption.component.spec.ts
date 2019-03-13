import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiteroptionComponent } from './waiteroption.component';

describe('WaiteroptionComponent', () => {
  let component: WaiteroptionComponent;
  let fixture: ComponentFixture<WaiteroptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiteroptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiteroptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
