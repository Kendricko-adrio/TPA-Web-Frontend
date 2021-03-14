import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointAvatarTabComponent } from './point-avatar-tab.component';

describe('PointAvatarTabComponent', () => {
  let component: PointAvatarTabComponent;
  let fixture: ComponentFixture<PointAvatarTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointAvatarTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointAvatarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
