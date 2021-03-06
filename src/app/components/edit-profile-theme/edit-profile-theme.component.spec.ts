import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileThemeComponent } from './edit-profile-theme.component';

describe('EditProfileThemeComponent', () => {
  let component: EditProfileThemeComponent;
  let fixture: ComponentFixture<EditProfileThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
