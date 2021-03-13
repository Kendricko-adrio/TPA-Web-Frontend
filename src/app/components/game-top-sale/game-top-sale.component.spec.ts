import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTopSaleComponent } from './game-top-sale.component';

describe('GameTopSaleComponent', () => {
  let component: GameTopSaleComponent;
  let fixture: ComponentFixture<GameTopSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTopSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTopSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
