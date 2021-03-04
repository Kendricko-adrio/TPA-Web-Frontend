import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOnSaleComponent } from './game-on-sale.component';

describe('GameOnSaleComponent', () => {
  let component: GameOnSaleComponent;
  let fixture: ComponentFixture<GameOnSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOnSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOnSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
