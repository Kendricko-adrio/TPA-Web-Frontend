import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPosterDetailComponent } from './community-poster-detail.component';

describe('CommunityPosterDetailComponent', () => {
  let component: CommunityPosterDetailComponent;
  let fixture: ComponentFixture<CommunityPosterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPosterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityPosterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
