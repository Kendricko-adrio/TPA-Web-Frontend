import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSearchedCardComponent } from './game-searched-card.component';

describe('GameSearchedCardComponent', () => {
  let component: GameSearchedCardComponent;
  let fixture: ComponentFixture<GameSearchedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSearchedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSearchedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
