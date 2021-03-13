import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointMinibgTabComponent } from './point-minibg-tab.component';

describe('PointMinibgTabComponent', () => {
  let component: PointMinibgTabComponent;
  let fixture: ComponentFixture<PointMinibgTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointMinibgTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointMinibgTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
