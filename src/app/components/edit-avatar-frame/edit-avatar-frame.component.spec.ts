import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAvatarFrameComponent } from './edit-avatar-frame.component';

describe('EditAvatarFrameComponent', () => {
  let component: EditAvatarFrameComponent;
  let fixture: ComponentFixture<EditAvatarFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAvatarFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAvatarFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
