import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPositifReviewCardComponent } from './on-positif-review-card.component';

describe('OnPositifReviewCardComponent', () => {
  let component: OnPositifReviewCardComponent;
  let fixture: ComponentFixture<OnPositifReviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnPositifReviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPositifReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
