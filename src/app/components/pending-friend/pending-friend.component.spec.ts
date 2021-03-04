import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFriendComponent } from './pending-friend.component';

describe('PendingFriendComponent', () => {
  let component: PendingFriendComponent;
  let fixture: ComponentFixture<PendingFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
