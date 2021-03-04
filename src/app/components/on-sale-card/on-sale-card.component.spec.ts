import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSaleCardComponent } from './on-sale-card.component';

describe('OnSaleCardComponent', () => {
  let component: OnSaleCardComponent;
  let fixture: ComponentFixture<OnSaleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnSaleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSaleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
