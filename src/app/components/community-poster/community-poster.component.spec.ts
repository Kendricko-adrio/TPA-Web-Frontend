import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPosterComponent } from './community-poster.component';

describe('CommunityPosterComponent', () => {
  let component: CommunityPosterComponent;
  let fixture: ComponentFixture<CommunityPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
