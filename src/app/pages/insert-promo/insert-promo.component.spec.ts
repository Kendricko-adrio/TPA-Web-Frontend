import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPromoComponent } from './insert-promo.component';

describe('InsertPromoComponent', () => {
  let component: InsertPromoComponent;
  let fixture: ComponentFixture<InsertPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
