import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBadgeCardComponent } from './feature-badge-card.component';

describe('FeatureBadgeCardComponent', () => {
  let component: FeatureBadgeCardComponent;
  let fixture: ComponentFixture<FeatureBadgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBadgeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBadgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
