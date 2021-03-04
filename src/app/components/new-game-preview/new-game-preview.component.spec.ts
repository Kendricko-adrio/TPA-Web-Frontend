import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGamePreviewComponent } from './new-game-preview.component';

describe('NewGamePreviewComponent', () => {
  let component: NewGamePreviewComponent;
  let fixture: ComponentFixture<NewGamePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGamePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGamePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
