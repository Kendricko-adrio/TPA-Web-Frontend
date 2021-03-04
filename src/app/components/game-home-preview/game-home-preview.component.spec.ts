import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHomePreviewComponent } from './game-home-preview.component';

describe('GameHomePreviewComponent', () => {
  let component: GameHomePreviewComponent;
  let fixture: ComponentFixture<GameHomePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHomePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHomePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
