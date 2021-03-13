import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointFrameTabComponent } from './point-frame-tab.component';

describe('PointFrameTabComponent', () => {
  let component: PointFrameTabComponent;
  let fixture: ComponentFixture<PointFrameTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointFrameTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointFrameTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
