import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFriendsDetailComponent } from './my-friends-detail.component';

describe('MyFriendsDetailComponent', () => {
  let component: MyFriendsDetailComponent;
  let fixture: ComponentFixture<MyFriendsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFriendsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFriendsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
