import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedDialFabButtonComponent } from './speed-dial-fab-button.component';

describe('SpeedDialFabButtonComponent', () => {
  let component: SpeedDialFabButtonComponent;
  let fixture: ComponentFixture<SpeedDialFabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedDialFabButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedDialFabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
