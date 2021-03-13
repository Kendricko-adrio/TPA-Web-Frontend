import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointProfilebgTabComponent } from './point-profilebg-tab.component';

describe('PointProfilebgTabComponent', () => {
  let component: PointProfilebgTabComponent;
  let fixture: ComponentFixture<PointProfilebgTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointProfilebgTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointProfilebgTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
