import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUserPageComponent } from './report-user-page.component';

describe('ReportUserPageComponent', () => {
  let component: ReportUserPageComponent;
  let fixture: ComponentFixture<ReportUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
