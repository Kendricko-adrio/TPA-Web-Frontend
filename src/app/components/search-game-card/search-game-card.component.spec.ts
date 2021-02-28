import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGameCardComponent } from './search-game-card.component';

describe('SearchGameCardComponent', () => {
  let component: SearchGameCardComponent;
  let fixture: ComponentFixture<SearchGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGameCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
