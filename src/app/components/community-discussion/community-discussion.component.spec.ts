import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDiscussionComponent } from './community-discussion.component';

describe('CommunityDiscussionComponent', () => {
  let component: CommunityDiscussionComponent;
  let fixture: ComponentFixture<CommunityDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
