import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestofthedayComponent } from './restoftheday.component';

describe('RestofthedayComponent', () => {
  let component: RestofthedayComponent;
  let fixture: ComponentFixture<RestofthedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestofthedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestofthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
