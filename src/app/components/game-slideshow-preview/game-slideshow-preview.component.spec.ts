import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSlideshowPreviewComponent } from './game-slideshow-preview.component';

describe('GameSlideshowPreviewComponent', () => {
  let component: GameSlideshowPreviewComponent;
  let fixture: ComponentFixture<GameSlideshowPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSlideshowPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSlideshowPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
