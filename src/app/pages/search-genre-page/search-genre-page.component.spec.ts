import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGenrePageComponent } from './search-genre-page.component';

describe('SearchGenrePageComponent', () => {
  let component: SearchGenrePageComponent;
  let fixture: ComponentFixture<SearchGenrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGenrePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGenrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
