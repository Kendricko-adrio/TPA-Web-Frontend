import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-category-page',
  templateUrl: './search-category-page.component.html',
  styleUrls: ['./search-category-page.component.scss']
})
export class SearchCategoryPageComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
  ) { }

  slide;

  ngOnInit(): void {
    this.slide = this.actRoute.snapshot.paramMap.get('search');
  }

}
