import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTopSaleCardComponent } from './on-top-sale-card.component';

describe('OnTopSaleCardComponent', () => {
  let component: OnTopSaleCardComponent;
  let fixture: ComponentFixture<OnTopSaleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnTopSaleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTopSaleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
