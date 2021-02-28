import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPromoComponent } from './get-all-promo.component';

describe('GetAllPromoComponent', () => {
  let component: GetAllPromoComponent;
  let fixture: ComponentFixture<GetAllPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
