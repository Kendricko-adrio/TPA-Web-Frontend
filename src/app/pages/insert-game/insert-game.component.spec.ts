import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertGameComponent } from './insert-game.component';

describe('InsertGameComponent', () => {
  let component: InsertGameComponent;
  let fixture: ComponentFixture<InsertGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
