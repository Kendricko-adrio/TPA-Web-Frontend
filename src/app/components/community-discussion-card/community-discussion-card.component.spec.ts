import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDiscussionCardComponent } from './community-discussion-card.component';

describe('CommunityDiscussionCardComponent', () => {
  let component: CommunityDiscussionCardComponent;
  let fixture: ComponentFixture<CommunityDiscussionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityDiscussionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityDiscussionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
