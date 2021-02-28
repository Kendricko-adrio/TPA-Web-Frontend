import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterPreviewComponent } from './search-filter-preview.component';

describe('SearchFilterPreviewComponent', () => {
  let component: SearchFilterPreviewComponent;
  let fixture: ComponentFixture<SearchFilterPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
