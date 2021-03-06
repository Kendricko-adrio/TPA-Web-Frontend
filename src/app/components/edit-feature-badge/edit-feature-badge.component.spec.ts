import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeatureBadgeComponent } from './edit-feature-badge.component';

describe('EditFeatureBadgeComponent', () => {
  let component: EditFeatureBadgeComponent;
  let fixture: ComponentFixture<EditFeatureBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFeatureBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeatureBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
