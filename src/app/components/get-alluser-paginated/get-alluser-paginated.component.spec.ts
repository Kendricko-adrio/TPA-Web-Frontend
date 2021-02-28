import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlluserPaginatedComponent } from './get-alluser-paginated.component';

describe('GetAlluserPaginatedComponent', () => {
  let component: GetAlluserPaginatedComponent;
  let fixture: ComponentFixture<GetAlluserPaginatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAlluserPaginatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAlluserPaginatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
