import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePositifReviewComponent } from './game-positif-review.component';

describe('GamePositifReviewComponent', () => {
  let component: GamePositifReviewComponent;
  let fixture: ComponentFixture<GamePositifReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePositifReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePositifReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
