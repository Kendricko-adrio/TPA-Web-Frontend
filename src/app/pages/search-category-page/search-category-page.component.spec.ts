import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoryPageComponent } from './search-category-page.component';

describe('SearchCategoryPageComponent', () => {
  let component: SearchCategoryPageComponent;
  let fixture: ComponentFixture<SearchCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
