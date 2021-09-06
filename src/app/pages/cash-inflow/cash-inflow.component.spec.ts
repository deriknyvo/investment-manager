import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInflowComponent } from './cash-inflow.component';

describe('CashInflowComponent', () => {
  let component: CashInflowComponent;
  let fixture: ComponentFixture<CashInflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashInflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
