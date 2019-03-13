import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterComponent } from './breakfastwaiter.component';
import { FormsModule } from '@angular/forms';

describe('WaiterComponent', () => {
  let component: WaiterComponent;
  let fixture: ComponentFixture<WaiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WaiterComponent]
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

  it('debe devolver nombre del cliente ingresado en comanda', () => {
    expect(component.client).toContain('Daniela');
  });
});
