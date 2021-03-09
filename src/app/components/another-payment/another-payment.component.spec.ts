import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPaymentComponent } from './another-payment.component';

describe('AnotherPaymentComponent', () => {
  let component: AnotherPaymentComponent;
  let fixture: ComponentFixture<AnotherPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
