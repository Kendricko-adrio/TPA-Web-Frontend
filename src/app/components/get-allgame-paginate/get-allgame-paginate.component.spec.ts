import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllgamePaginateComponent } from './get-allgame-paginate.component';

describe('GetAllgamePaginateComponent', () => {
  let component: GetAllgamePaginateComponent;
  let fixture: ComponentFixture<GetAllgamePaginateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllgamePaginateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllgamePaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
